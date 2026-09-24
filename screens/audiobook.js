// screens/audiobook.js — Full Interactive Audiobook Screen
import { QUESTIONS, TOPICS } from '../data.js';
import { audioPlayer } from './audio_player.js';

let cleanupFn = null;

function formatTime(seconds) {
  if (!seconds || isNaN(seconds) || !isFinite(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function renderAudiobook(container, initialTopicId = 'all', initialQuestionId = null) {
  if (cleanupFn) {
    cleanupFn();
    cleanupFn = null;
  }

  // Set initial playlist if provided
  if (initialTopicId && initialTopicId !== audioPlayer.currentTopicId) {
    audioPlayer.setPlaylist(initialTopicId, initialQuestionId ? parseInt(initialQuestionId, 10) : null);
  } else if (initialQuestionId) {
    audioPlayer.playQuestion(parseInt(initialQuestionId, 10));
  } else if (!audioPlayer.currentQuestionId) {
    audioPlayer.setPlaylist('all', 1);
  }

  function getActiveQuestions() {
    const topicId = audioPlayer.currentTopicId;
    if (!topicId || topicId === 'all') return QUESTIONS;
    return QUESTIONS.filter(q => q.topic === topicId);
  }

  function render() {
    const state = audioPlayer.getState();
    const q = state.currentQuestion || QUESTIONS[0];
    const topic = state.currentTopic || { id: 'all', nama: 'Semua Soal' };
    const activeQuestions = getActiveQuestions();
    const isPlaying = state.isPlaying;
    const isTTSFallback = state.isUsingSpeechSynthesis;

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    container.innerHTML = `
      <div class="app-container" style="padding-bottom:120px;">
        <!-- Header -->
        <div style="margin-bottom:var(--space-4);">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-1);">
            <h1 class="section-title" style="margin:0;font-size:var(--text-xl);">🎧 Audiobook Soal</h1>
            <span class="badge ${isTTSFallback ? 'badge-warning' : 'badge-accent'}" style="font-size:11px;">
              ${isTTSFallback ? 'SpeechSynth Fallback' : 'Dual-Voice (ID + EN)'}
            </span>
          </div>
          <p class="section-subtitle" style="margin:0;">
            Dengarkan pembahasan ${QUESTIONS.length} soal Odoo 19 dengan dual speaker (Indonesia + English native).
          </p>
        </div>

        <!-- Topic Tabs (Horizontal Scrollable) -->
        <div class="audio-topic-scroll" style="margin-bottom:var(--space-4);">
          <button class="audio-topic-chip ${audioPlayer.currentTopicId === 'all' ? 'active' : ''}" data-topic="all">
            Semua Soal (${QUESTIONS.length})
          </button>
          ${TOPICS.map(t => `
            <button class="audio-topic-chip ${audioPlayer.currentTopicId === t.id ? 'active' : ''}" data-topic="${t.id}">
              ${t.nama} (${t.soalCount})
            </button>
          `).join('')}
        </div>

        <!-- Main Player Deck Card -->
        <div class="audio-player-deck">
          <div class="audio-deck-header">
            <div class="audio-topic-tag">
              <span class="pulse-dot ${isPlaying ? 'playing' : ''}"></span>
              <span>${topic.nama}</span> · Soal #${q.id}
            </div>
            <div class="audio-track-pos">
              ${(state.playlistIndex >= 0 ? state.playlistIndex + 1 : 1)} / ${state.playlistTotal}
            </div>
          </div>

          <!-- Question Title Preview -->
          <div class="audio-question-preview">
            "${q.soal}"
          </div>

          <!-- Audio Wave Visualizer Simulation -->
          <div class="audio-wave-visualizer ${isPlaying ? 'active' : ''}">
            <span class="wave-bar"></span>
            <span class="wave-bar"></span>
            <span class="wave-bar"></span>
            <span class="wave-bar"></span>
            <span class="wave-bar"></span>
            <span class="wave-bar"></span>
            <span class="wave-bar"></span>
            <span class="wave-bar"></span>
            <span class="wave-bar"></span>
            <span class="wave-bar"></span>
            <span class="wave-bar"></span>
            <span class="wave-bar"></span>
          </div>

          <!-- Seekbar -->
          <div class="audio-seek-container">
            <input type="range" id="audio-seek-bar" class="audio-range-slider" min="0" max="100" value="0" step="0.1" aria-label="Audio progress">
            <div class="audio-time-row">
              <span id="audio-time-current">0:00</span>
              <span id="audio-time-duration">0:00</span>
            </div>
          </div>

          <!-- Transport Controls -->
          <div class="audio-controls-row">
            <button class="audio-ctrl-btn" id="btn-audio-prev" title="Soal Sebelumnya" aria-label="Soal Sebelumnya">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="19 20 9 12 19 4 19 20"></polygon>
                <line x1="5" y1="19" x2="5" y2="5"></line>
              </svg>
            </button>

            <button class="audio-ctrl-btn" id="btn-audio-rw" title="Mundur 10 detik" aria-label="Mundur 10 detik">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <text x="12" y="16" font-size="8" text-anchor="middle" fill="currentColor" stroke="none" font-weight="700">10</text>
              </svg>
            </button>

            <button class="audio-play-main ${isPlaying ? 'playing' : ''}" id="btn-audio-play" aria-label="${isPlaying ? 'Pause' : 'Play'}">
              ${isPlaying ? `
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1.5"></rect>
                  <rect x="14" y="4" width="4" height="16" rx="1.5"></rect>
                </svg>
              ` : `
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              `}
            </button>

            <button class="audio-ctrl-btn" id="btn-audio-ff" title="Maju 10 detik" aria-label="Maju 10 detik">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <text x="12" y="16" font-size="8" text-anchor="middle" fill="currentColor" stroke="none" font-weight="700">10</text>
              </svg>
            </button>

            <button class="audio-ctrl-btn" id="btn-audio-next" title="Soal Berikutnya" aria-label="Soal Berikutnya">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 4 15 12 5 20 5 4"></polygon>
                <line x1="19" y1="5" x2="19" y2="19"></line>
              </svg>
            </button>
          </div>

          <!-- Secondary Settings: Speed, Autoplay, Sleep -->
          <div class="audio-meta-row">
            <!-- Rate selector -->
            <div class="audio-pill-group">
              <span class="audio-meta-label">Speed:</span>
              <button class="audio-pill-btn" id="btn-audio-rate" aria-label="Kecepatan Pemutaran">${state.playbackRate}x</button>
            </div>

            <!-- Autoplay switch -->
            <label class="audio-switch-label" title="Otomatis putar soal berikutnya saat selesai">
              <input type="checkbox" id="chk-audio-autoplay" ${state.autoplay ? 'checked' : ''}>
              <span>Autoplay</span>
            </label>

            <!-- Sleep timer button -->
            <button class="audio-pill-btn ${state.sleepTimerEnd ? 'active' : ''}" id="btn-audio-sleep" title="Sleep Timer">
              ⏱ ${state.sleepTimerEnd ? `${Math.max(1, Math.round((state.sleepTimerEnd - Date.now()) / 60000))}m` : 'Sleep'}
            </button>
          </div>
        </div>

        <!-- Transcript & Explanation Card -->
        <div class="audio-transcript-card">
          <div class="transcript-header">
            <span class="transcript-badge">Pembahasan Terinci</span>
            <span style="font-size:var(--text-xs);color:var(--color-ink-3);">Soal #${q.id}</span>
          </div>

          <div class="transcript-soal">${q.soal}</div>

          <!-- Options breakdown -->
          <div class="transcript-options">
            ${q.pilihan.map((opt, i) => {
              const isCorrect = i === q.jawaban;
              const badge = letters[i] || (i + 1);
              return `
                <div class="transcript-opt-item ${isCorrect ? 'correct' : ''}">
                  <span class="transcript-opt-badge ${isCorrect ? 'correct' : ''}">${badge}</span>
                  <span class="transcript-opt-text">${opt}</span>
                  ${isCorrect ? '<span class="badge badge-correct">KUNCI JAWABAN</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>

          <!-- Explanation box -->
          <div class="transcript-penjelasan">
            <div class="penjelasan-title">Penjelasan Konsep & Logika:</div>
            <div class="penjelasan-body">${q.penjelasan}</div>
          </div>

          <!-- Reference links if available -->
          ${q.referensi ? `
            <div class="transcript-refs">
              <div style="font-size:var(--text-xs);font-weight:600;color:var(--color-ink-3);margin-bottom:var(--space-2);">
                REFERENSI DOKUMENTASI ODOO 19:
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);">
                ${q.referensi.docsUrl ? `
                  <a href="${q.referensi.docsUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost" style="text-decoration:none;font-size:11px;">
                    📖 ${q.referensi.topikSpesifik || 'Dokumentasi Resmi'}
                  </a>
                ` : ''}
                ${q.referensi.videoUrl ? `
                  <a href="${q.referensi.videoUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost" style="text-decoration:none;font-size:11px;">
                    ▶ Video Tutorial
                  </a>
                ` : ''}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Playlist Drawer / Question List -->
        <div class="audio-playlist-card" style="margin-top:var(--space-6);">
          <div class="playlist-header">
            <h3 style="margin:0;font-size:var(--text-base);">Daftar Soal Topik Ini</h3>
            <span style="font-size:var(--text-xs);color:var(--color-ink-3);">${activeQuestions.length} Soal</span>
          </div>

          <div class="audio-playlist-list">
            ${activeQuestions.map((item, idx) => {
              const isActive = item.id === q.id;
              return `
                <div class="playlist-item ${isActive ? 'active' : ''}" data-qid="${item.id}">
                  <div class="playlist-item-num">${item.id}</div>
                  <div class="playlist-item-info">
                    <div class="playlist-item-title">${item.soal}</div>
                    <div class="playlist-item-sub">${item.topic} · ${item.pilihan.length} pilihan</div>
                  </div>
                  <div class="playlist-item-action">
                    ${isActive && isPlaying ? `
                      <div class="mini-equalizer">
                        <span></span><span></span><span></span>
                      </div>
                    ` : `
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <polygon points="6 4 18 12 6 20 6 4"></polygon>
                      </svg>
                    `}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    // Bind DOM events
    bindEvents();
  }

  function bindEvents() {
    // Topic Chips
    container.querySelectorAll('.audio-topic-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const topicId = btn.dataset.topic;
        audioPlayer.setPlaylist(topicId);
        render();
      });
    });

    // Transport buttons
    const playBtn = container.querySelector('#btn-audio-play');
    if (playBtn) playBtn.addEventListener('click', () => audioPlayer.togglePlay());

    const prevBtn = container.querySelector('#btn-audio-prev');
    if (prevBtn) prevBtn.addEventListener('click', () => audioPlayer.prev());

    const nextBtn = container.querySelector('#btn-audio-next');
    if (nextBtn) nextBtn.addEventListener('click', () => audioPlayer.next());

    const rwBtn = container.querySelector('#btn-audio-rw');
    if (rwBtn) rwBtn.addEventListener('click', () => audioPlayer.skip(-10));

    const ffBtn = container.querySelector('#btn-audio-ff');
    if (ffBtn) ffBtn.addEventListener('click', () => audioPlayer.skip(10));

    // Seekbar
    const seekBar = container.querySelector('#audio-seek-bar');
    if (seekBar) {
      seekBar.addEventListener('input', (e) => {
        const dur = audioPlayer.audio.duration;
        if (dur) {
          const seekTo = (e.target.value / 100) * dur;
          audioPlayer.seek(seekTo);
        }
      });
    }

    // Rate button (cycles: 1.0 -> 1.25 -> 1.5 -> 2.0 -> 0.75 -> 1.0)
    const rateBtn = container.querySelector('#btn-audio-rate');
    if (rateBtn) {
      rateBtn.addEventListener('click', () => {
        const rates = [0.75, 1.0, 1.25, 1.5, 2.0];
        const curIdx = rates.indexOf(audioPlayer.playbackRate);
        const nextRate = rates[(curIdx + 1) % rates.length];
        audioPlayer.setPlaybackRate(nextRate);
        rateBtn.textContent = `${nextRate}x`;
      });
    }

    // Autoplay toggle
    const autoChk = container.querySelector('#chk-audio-autoplay');
    if (autoChk) {
      autoChk.addEventListener('change', (e) => {
        audioPlayer.setAutoplay(e.target.checked);
      });
    }

    // Sleep timer button
    const sleepBtn = container.querySelector('#btn-audio-sleep');
    if (sleepBtn) {
      sleepBtn.addEventListener('click', () => {
        const mins = prompt('Set Sleep Timer dalam menit (0 untuk matikan):', '30');
        if (mins !== null) {
          const parsed = parseInt(mins, 10);
          audioPlayer.setSleepTimer(isNaN(parsed) ? 0 : parsed);
          render();
        }
      });
    }

    // Playlist item clicks
    container.querySelectorAll('.playlist-item').forEach(item => {
      item.addEventListener('click', () => {
        const qId = parseInt(item.dataset.qid, 10);
        if (qId) {
          audioPlayer.playQuestion(qId);
        }
      });
    });
  }

  // Real-time timeupdate listener
  const unsubTime = audioPlayer.on('timeupdate', (data) => {
    const seekBar = container.querySelector('#audio-seek-bar');
    const curEl = container.querySelector('#audio-time-current');
    const durEl = container.querySelector('#audio-time-duration');

    if (curEl) curEl.textContent = formatTime(data.currentTime);
    if (durEl) durEl.textContent = formatTime(data.duration);
    if (seekBar && !seekBar.matches(':active')) {
      seekBar.value = data.percent || 0;
    }
  });

  // Track change listener
  const unsubChange = audioPlayer.on('change', () => {
    render();
  });

  // Play/Pause listeners
  const unsubPlay = audioPlayer.on('play', () => {
    const playBtn = container.querySelector('#btn-audio-play');
    const wave = container.querySelector('.audio-wave-visualizer');
    const dot = container.querySelector('.pulse-dot');
    if (playBtn) {
      playBtn.classList.add('playing');
      playBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1.5"></rect>
          <rect x="14" y="4" width="4" height="16" rx="1.5"></rect>
        </svg>
      `;
    }
    if (wave) wave.classList.add('active');
    if (dot) dot.classList.add('playing');
  });

  const unsubPause = audioPlayer.on('pause', () => {
    const playBtn = container.querySelector('#btn-audio-play');
    const wave = container.querySelector('.audio-wave-visualizer');
    const dot = container.querySelector('.pulse-dot');
    if (playBtn) {
      playBtn.classList.remove('playing');
      playBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
    }
    if (wave) wave.classList.remove('active');
    if (dot) dot.classList.remove('playing');
  });

  cleanupFn = () => {
    unsubTime();
    unsubChange();
    unsubPlay();
    unsubPause();
  };

  render();
}
