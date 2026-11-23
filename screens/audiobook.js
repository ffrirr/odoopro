// screens/audiobook.js: Redesigned Audio Box Studio with Natural Explainer Vocals
import { QUESTIONS, TOPICS } from '../data.js';
import { audioPlayer } from './audio_player.js';

let cleanupFn = null;

function formatTime(seconds) {
  if (!seconds || isNaN(seconds) || !isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function renderAudiobook(container, initialTopicId = 'all', initialQuestionId = null) {
  if (cleanupFn) {
    cleanupFn();
    cleanupFn = null;
  }

  let searchQuery = '';
  let selectedTopicId = initialTopicId || 'all';

  // Initialize playlist
  if (initialTopicId && initialTopicId !== audioPlayer.currentTopicId) {
    audioPlayer.setPlaylist(initialTopicId, initialQuestionId ? parseInt(initialQuestionId, 10) : null);
  } else if (initialQuestionId) {
    audioPlayer.playQuestion(parseInt(initialQuestionId, 10));
  } else if (!audioPlayer.currentQuestionId) {
    audioPlayer.setPlaylist('all', 1);
  }

  function getFilteredQuestions() {
    let list = QUESTIONS;
    if (selectedTopicId && selectedTopicId !== 'all') {
      list = list.filter(q => q.topic === selectedTopicId);
    }
    if (searchQuery.trim()) {
      const qLower = searchQuery.toLowerCase().trim();
      list = list.filter(q => 
        q.id.toString() === qLower ||
        q.soal.toLowerCase().includes(qLower) ||
        (q.penjelasan && q.penjelasan.toLowerCase().includes(qLower)) ||
        (q.pilihan && q.pilihan.some(p => p.toLowerCase().includes(qLower)))
      );
    }
    return list;
  }

  function render() {
    const s = audioPlayer.getState();
    const q = s.currentQuestion || QUESTIONS[0];
    const topic = s.currentTopic || { id: 'all', nama: 'Semua Modul' };
    const isPlaying = s.isPlaying;
    const isShuffle = s.isShuffle;
    const repeatMode = s.repeatMode; // 'all', 'one', 'off'
    const playbackRate = s.playbackRate || 1.0;
    const filteredQuestions = getFilteredQuestions();

    const speedLabels = {
      0.75: '0.75x',
      1.0: '1.0x',
      1.25: '1.25x',
      1.5: '1.5x',
      1.75: '1.75x',
      2.0: '2.0x'
    };

    const repeatIcons = {
      'all': '🔁 All',
      'one': '🔂 1',
      'off': '➡ Off'
    };

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    // Topic quick counts
    const topicCounts = {
      all: QUESTIONS.length,
      accounting: QUESTIONS.filter(q => q.topic === 'accounting').length,
      inventory: QUESTIONS.filter(q => q.topic === 'inventory').length,
      sales: QUESTIONS.filter(q => q.topic === 'sales').length,
    };

    container.innerHTML = `
      <div class="app-container mp3-studio-container">
        <!-- 1. Top Bar Navigation -->
        <header class="mp3-top-nav">
          <div class="mp3-nav-left">
            <a href="#dashboard" class="mp3-back-btn" aria-label="Kembali ke Beranda">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              <span>Beranda</span>
            </a>
            <div class="mp3-header-meta">
              <span class="mp3-meta-tag">AUDIOBOOK STUDIO · MP3 PLAYER</span>
              <h1 class="mp3-page-title">Pustaka Audio Fungsional Odoo 19</h1>
            </div>
          </div>
          <div class="mp3-nav-right">
            <div class="vocal-explainer-badge" title="Vokal Penjelasan Alami & Jernih">
              <span class="vocal-icon">🎙️</span>
              <span class="vocal-text">Vokal: Gadis Neural (Natural Explainer) ✓</span>
            </div>
            <div class="mp3-hifi-pill">
              <span class="bitrate-dot"></span> 192kbps Hi-Fi
            </div>
          </div>
        </header>

        <!-- 2. Main Split Player Layout -->
        <div class="mp3-player-layout">
          
          <!-- LEFT COLUMN: The Hero Audio Box Deck & Lyrics -->
          <div class="mp3-player-deck">
            
            <!-- Deck Player Card -->
            <div class="mp3-deck-card">
              <div class="mp3-deck-head">
                <div class="mp3-deck-badge-group">
                  <span class="mp3-badge mp3-badge-aubergine">BAB ${(TOPICS.findIndex(t => t.id === q.topic) + 1).toString().padStart(2, '0')} · MICRO-LECTURE</span>
                  <span class="mp3-badge mp3-badge-cyan">SOAL #${q.id} DARI 300</span>
                </div>
                <div class="mp3-badge mp3-badge-bitrate">
                  <span class="bitrate-dot"></span> 192 KBPS NATURAL STEREO
                </div>
              </div>

              <!-- Rotating Vinyl Disc & Track Info Stage -->
              <div class="mp3-disc-stage">
                <div class="mp3-vinyl-outer ${isPlaying ? 'rotating' : ''}">
                  <div class="mp3-vinyl-grooves"></div>
                  <div class="mp3-vinyl-center">
                    <div class="vinyl-center-art">
                      <div class="vinyl-odoo-icon">🎧</div>
                      <div class="vinyl-track-num">#${q.id}</div>
                    </div>
                  </div>
                </div>
                
                <div class="mp3-track-primary-meta">
                  <div class="mp3-track-chapter">${topic.nama.toUpperCase()} · ALUR BISNIS ODOO 19</div>
                  <h2 class="mp3-track-title">${q.soal}</h2>
                  <div class="mp3-track-features">
                    <span class="feature-chip highlight-chip">🎙️ Vokal: Gadis (ID) & Jenny (EN)</span>
                    <span class="feature-chip">Bilingual Dual-Voice</span>
                    <span class="feature-chip">100% Exam Aligned</span>
                  </div>
                </div>
              </div>

              <!-- Animated Equalizer Soundwave -->
              <div class="mp3-equalizer-wrap">
                <div class="mp3-equalizer-bars ${isPlaying ? 'playing' : ''}">
                  ${Array.from({ length: 36 }).map((_, i) => {
                    const defaultH = Math.sin(i * 0.35) * 16 + 22;
                    return `<span class="eq-bar" style="--base-h: ${defaultH}px; height: ${defaultH}px;"></span>`;
                  }).join('')}
                </div>
              </div>

              <!-- Timeline Scrubber & Timestamps -->
              <div class="mp3-scrubber-section">
                <div class="mp3-timestamps-row">
                  <span id="mp3-current-time" class="time-lbl">0:00</span>
                  <div class="scrubber-track-wrap">
                    <input type="range" id="mp3-seek-slider" class="mp3-seek-slider" min="0" max="100" value="0" step="0.1" aria-label="Progress Audio">
                  </div>
                  <span id="mp3-total-duration" class="time-lbl">0:00</span>
                </div>
              </div>

              <!-- Core Transport Controls (MP3 Player Buttons) -->
              <div class="mp3-transport-cluster">
                <!-- Shuffle Toggle -->
                <button id="btn-mp3-shuffle" class="mp3-ctrl-btn ${isShuffle ? 'active-ctrl' : ''}" title="Acak Urutan Soal (Shuffle)" aria-label="Shuffle">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
                </button>

                <!-- Rewind 10s -->
                <button id="btn-mp3-rw" class="mp3-ctrl-btn" title="Mundur 10 Detik" aria-label="Rewind 10 seconds">
                  <span class="btn-ctrl-num">↺10s</span>
                </button>

                <!-- Previous Track -->
                <button id="btn-mp3-prev" class="mp3-ctrl-btn mp3-skip-btn" title="Soal Sebelumnya (Previous)" aria-label="Previous Track">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" stroke-width="2"/></svg>
                </button>

                <!-- Master Play / Pause Button -->
                <button id="btn-mp3-play" class="mp3-play-master ${isPlaying ? 'playing' : ''}" title="${isPlaying ? 'Pause' : 'Play'}" aria-label="${isPlaying ? 'Pause' : 'Play'}">
                  ${isPlaying ? `
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" rx="1.5"></rect>
                      <rect x="14" y="4" width="4" height="16" rx="1.5"></rect>
                    </svg>
                  ` : `
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" style="margin-left: 3px;">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  `}
                </button>

                <!-- Next Track -->
                <button id="btn-mp3-next" class="mp3-ctrl-btn mp3-skip-btn" title="Soal Berikutnya (Next)" aria-label="Next Track">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2"/></svg>
                </button>

                <!-- Forward 10s -->
                <button id="btn-mp3-ff" class="mp3-ctrl-btn" title="Maju 10 Detik" aria-label="Forward 10 seconds">
                  <span class="btn-ctrl-num">↻10s</span>
                </button>

                <!-- Repeat Mode Toggle -->
                <button id="btn-mp3-repeat" class="mp3-ctrl-btn ${repeatMode !== 'off' ? 'active-ctrl' : ''}" title="Mode Ulang: ${repeatIcons[repeatMode]}" aria-label="Repeat Mode">
                  <span class="btn-ctrl-text">${repeatIcons[repeatMode]}</span>
                </button>
              </div>

              <!-- Auxiliary Controls Bar (Vocal Selector, Speed, Volume, Sleep Timer) -->
              <div class="mp3-aux-bar">
                <!-- Vocal Selector Pill -->
                <div class="mp3-aux-item">
                  <button id="btn-mp3-vocal" class="mp3-aux-btn vocal-active-btn" title="Ganti Karakter Vokal Penjelasan">
                    🎙️ Gadis Neural (Explainer) ▼
                  </button>
                </div>

                <!-- Playback Speed -->
                <div class="mp3-aux-item">
                  <button id="btn-mp3-speed" class="mp3-aux-btn speed-badge" title="Klik untuk ubah kecepatan putar">
                    ⚡ ${speedLabels[playbackRate] || playbackRate + 'x'}
                  </button>
                </div>

                <!-- Volume Slider -->
                <div class="mp3-aux-item volume-control-group">
                  <button id="btn-mp3-mute" class="mp3-mute-btn" title="Mute / Unmute" aria-label="Mute Audio">
                    ${s.volume === 0 ? '🔇' : s.volume < 0.5 ? '🔉' : '🔊'}
                  </button>
                  <input type="range" id="mp3-volume-slider" class="mp3-volume-slider" min="0" max="1" step="0.05" value="${s.volume}" aria-label="Volume">
                </div>

                <!-- Sleep Timer -->
                <div class="mp3-aux-item">
                  <button id="btn-mp3-sleeptimer" class="mp3-aux-btn ${s.sleepTimerEnd ? 'active-sleep' : ''}" title="Sleep Timer">
                    🌙 ${s.sleepTimerEnd ? 'Sleep Aktif' : 'Sleep Timer'}
                  </button>
                </div>
              </div>

            </div>

            <!-- Synchronized Transcript & Business Logic Lyrics Card -->
            <div class="mp3-lyrics-card">
              <div class="lyrics-card-head">
                <div class="lyrics-head-title">
                  <span class="lyrics-icon">📝</span>
                  <div>
                    <h3 class="lyrics-title">Live Transcript & Penjelasan Alur Bisnis Odoo 19</h3>
                    <div class="lyrics-sub">Narasi terjemahan dan logika akuntansi otomatis disinkronkan dengan playback audio</div>
                  </div>
                </div>
                <a href="#quiz-${q.topic}" class="mp3-quiz-cta-link" title="Kerjakan soal ini di quiz interaktif">
                  ⚡ Uji Soal Ini di Quiz →
                </a>
              </div>

              <div class="lyrics-content-body">
                <div class="lyrics-question-box">
                  <span class="q-label">PERTANYAAN UJIAN RESMI:</span>
                  <p class="q-text">Soal #${q.id}: ${q.soal}</p>
                </div>

                <div class="lyrics-options-list">
                  <span class="opt-label">PILIHAN JAWABAN:</span>
                  ${q.pilihan.map((p, idx) => {
                    const isCorrect = idx === q.jawaban;
                    return `
                      <div class="lyrics-opt-item ${isCorrect ? 'correct-choice' : ''}">
                        <span class="lyrics-opt-badge">${letters[idx] || idx + 1}</span>
                        <span class="lyrics-opt-text">${p}</span>
                        ${isCorrect ? '<span class="lyrics-correct-tag">✓ KUNCI JAWABAN RESMI</span>' : ''}
                      </div>
                    `;
                  }).join('')}
                </div>

                <div class="lyrics-explanation-box">
                  <div class="exp-title">
                    <span>💡 PEMBAHASAN MENDALAM (VOKAL GADIS NEURAL):</span>
                  </div>
                  <p class="exp-text">${q.penjelasan}</p>
                </div>
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN: Interactive Playlist & Course Chapters Drawer -->
          <div class="mp3-playlist-deck">
            <div class="mp3-playlist-card">
              <div class="playlist-header">
                <div>
                  <h3 class="playlist-title">Daftar Putar MP3 Audio</h3>
                  <div class="playlist-sub">${filteredQuestions.length} pembahasan audio · 4.8 jam durasi vokal jernih</div>
                </div>
              </div>

              <!-- Quick Topic Filter Pills -->
              <div class="mp3-filter-pills-row">
                <button class="mp3-pill-btn ${selectedTopicId === 'all' ? 'active' : ''}" data-tid="all">
                  Semua (${topicCounts.all})
                </button>
                <button class="mp3-pill-btn ${selectedTopicId === 'accounting' ? 'active' : ''}" data-tid="accounting">
                  Akuntansi (${topicCounts.accounting})
                </button>
                <button class="mp3-pill-btn ${selectedTopicId === 'inventory' ? 'active' : ''}" data-tid="inventory">
                  Inventory (${topicCounts.inventory})
                </button>
                <button class="mp3-pill-btn ${selectedTopicId === 'sales' ? 'active' : ''}" data-tid="sales">
                  Sales (${topicCounts.sales})
                </button>
              </div>

              <!-- Search Box -->
              <div class="mp3-search-bar">
                <span class="search-ico">🔍</span>
                <input type="text" id="mp3-search-input" class="mp3-search-input" placeholder="Cari materi atau nomor soal..." value="${searchQuery}">
                ${searchQuery ? '<button id="btn-clear-search" class="btn-clear">✕</button>' : ''}
              </div>

              <!-- Tracklist -->
              <div class="mp3-tracklist-scroll">
                ${filteredQuestions.length === 0 ? `
                  <div class="playlist-empty-state">
                    Tidak ada soal yang cocok dengan pencarian "<strong>${searchQuery}</strong>".
                  </div>
                ` : filteredQuestions.map((item, idx) => {
                  const isCurrent = item.id === q.id;
                  return `
                    <div class="mp3-track-row ${isCurrent ? 'active-track' : ''}" data-qid="${item.id}">
                      <div class="track-row-left">
                        ${isCurrent && isPlaying ? `
                          <div class="mini-eq-anim">
                            <span></span><span></span><span></span>
                          </div>
                        ` : isCurrent ? `
                          <span class="mini-play-icon">▶</span>
                        ` : `
                          <span class="track-num-txt">${(idx + 1).toString().padStart(2, '0')}</span>
                        `}
                      </div>
                      <div class="track-row-middle">
                        <div class="track-row-name">${item.soal}</div>
                        <div class="track-row-tags">
                          <span class="track-badge-topic">${item.topic}</span>
                          <span class="track-badge-id">#${item.id}</span>
                          ${isCurrent ? '<span class="now-playing-tag">SEDANG PUTAR</span>' : ''}
                        </div>
                      </div>
                      <div class="track-row-right">
                        <button class="track-play-btn" title="Putar Soal #${item.id}">
                          ${isCurrent && isPlaying ? '⏸' : '▶'}
                        </button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- Key Takeaways Box at bottom of playlist -->
              <div class="mp3-takeaways-box">
                <div class="takeaways-title">💡 Cheat Sheet Vokal Penjelasan</div>
                <ul class="takeaways-points">
                  <li>Vokal <strong>Gadis Neural</strong> menjelaskan alur konsep bahasa Indonesia natural & ramah.</li>
                  <li>Vokal <strong>Jenny Neural</strong> membacakan soal resmi bahasa Inggris Pearson VUE.</li>
                  <li>Lakukan simulasi kuis segera setelah mendengarkan untuk retensi 3.2x lipat.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;

    // ===== BIND EVENT LISTENERS =====

    // Topic Pills
    container.querySelectorAll('.mp3-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedTopicId = btn.dataset.tid;
        audioPlayer.setPlaylist(selectedTopicId);
        render();
      });
    });

    // Search Input
    const searchInput = container.querySelector('#mp3-search-input');
    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      updateTracklistOnly();
    });

    container.querySelector('#btn-clear-search')?.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      updateTracklistOnly();
    });

    // Master Play / Pause
    container.querySelector('#btn-mp3-play')?.addEventListener('click', () => {
      audioPlayer.togglePlay();
      syncPlayButton();
    });

    // Prev & Next
    container.querySelector('#btn-mp3-prev')?.addEventListener('click', () => {
      audioPlayer.prev();
      render();
    });

    container.querySelector('#btn-mp3-next')?.addEventListener('click', () => {
      audioPlayer.next();
      render();
    });

    // Rewind 10s & Forward 10s
    container.querySelector('#btn-mp3-rw')?.addEventListener('click', () => {
      audioPlayer.skip(-10);
    });

    container.querySelector('#btn-mp3-ff')?.addEventListener('click', () => {
      audioPlayer.skip(10);
    });

    // Shuffle Toggle
    container.querySelector('#btn-mp3-shuffle')?.addEventListener('click', () => {
      audioPlayer.toggleShuffle();
      render();
    });

    // Repeat Mode Toggle
    container.querySelector('#btn-mp3-repeat')?.addEventListener('click', () => {
      audioPlayer.toggleRepeatMode();
      render();
    });

    // Vocal Selector Click
    container.querySelector('#btn-mp3-vocal')?.addEventListener('click', () => {
      alert('Vokal saat ini: id-ID-GadisNeural (Female Natural Explainer).\nKarakter suara ini dikhususkan untuk pembacaan modul e-learning dan penjelasan konsep bisnis yang luwes tanpa suara robotik.');
    });

    // Speed Selector
    container.querySelector('#btn-mp3-speed')?.addEventListener('click', () => {
      const speeds = [0.75, 1.0, 1.25, 1.5, 1.75, 2.0];
      const cur = audioPlayer.playbackRate || 1.0;
      const nextIdx = (speeds.indexOf(cur) + 1) % speeds.length;
      audioPlayer.setPlaybackRate(speeds[nextIdx]);
      render();
    });

    // Scrubber Slider
    const seekSlider = container.querySelector('#mp3-seek-slider');
    seekSlider?.addEventListener('input', (e) => {
      const pct = parseFloat(e.target.value);
      const dur = audioPlayer.audio.duration || 0;
      const curTime = container.querySelector('#mp3-current-time');
      if (curTime && dur) {
        curTime.textContent = formatTime((pct / 100) * dur);
      }
    });

    seekSlider?.addEventListener('change', (e) => {
      const pct = parseFloat(e.target.value);
      const dur = audioPlayer.audio.duration || 0;
      if (dur) {
        audioPlayer.seek((pct / 100) * dur);
      }
    });

    // Volume Slider & Mute
    const volSlider = container.querySelector('#mp3-volume-slider');
    volSlider?.addEventListener('input', (e) => {
      audioPlayer.setVolume(parseFloat(e.target.value));
    });

    container.querySelector('#btn-mp3-mute')?.addEventListener('click', () => {
      if (audioPlayer.volume > 0) {
        audioPlayer.setVolume(0);
        if (volSlider) volSlider.value = 0;
      } else {
        audioPlayer.setVolume(1.0);
        if (volSlider) volSlider.value = 1.0;
      }
      render();
    });

    // Sleep Timer
    container.querySelector('#btn-mp3-sleeptimer')?.addEventListener('click', () => {
      const s = audioPlayer.getState();
      if (s.sleepTimerEnd) {
        audioPlayer.setSleepTimer(0);
        alert('Sleep timer dimatikan.');
      } else {
        const choice = prompt('Atur Sleep Timer (menit): Masukkan 15, 30, 45, atau 60 (0 untuk batal)', '30');
        if (choice !== null) {
          const m = parseInt(choice, 10);
          if (!isNaN(m) && m > 0) {
            audioPlayer.setSleepTimer(m);
            alert(`Sleep timer aktif untuk ${m} menit.`);
          }
        }
      }
      render();
    });

    bindTracklistEvents();
  }

  function bindTracklistEvents() {
    container.querySelectorAll('.mp3-track-row').forEach(row => {
      row.addEventListener('click', () => {
        const qid = parseInt(row.dataset.qid, 10);
        audioPlayer.playQuestion(qid);
        render();
      });
    });

    const activeEl = container.querySelector('.mp3-track-row.active-track');
    if (activeEl) {
      setTimeout(() => {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }, 50);
    }
  }

  function updateTracklistOnly() {
    const listEl = container.querySelector('.mp3-tracklist-scroll');
    if (!listEl) return;
    const s = audioPlayer.getState();
    const curQid = s.currentQuestionId;
    const isPlaying = s.isPlaying;
    const filtered = getFilteredQuestions();

    if (filtered.length === 0) {
      listEl.innerHTML = `
        <div class="playlist-empty-state">
          Tidak ada soal yang cocok dengan pencarian "<strong>${searchQuery}</strong>".
        </div>
      `;
      return;
    }

    listEl.innerHTML = filtered.map((item, idx) => {
      const isCurrent = item.id === curQid;
      return `
        <div class="mp3-track-row ${isCurrent ? 'active-track' : ''}" data-qid="${item.id}">
          <div class="track-row-left">
            ${isCurrent && isPlaying ? `
              <div class="mini-eq-anim">
                <span></span><span></span><span></span>
              </div>
            ` : isCurrent ? `
              <span class="mini-play-icon">▶</span>
            ` : `
              <span class="track-num-txt">${(idx + 1).toString().padStart(2, '0')}</span>
            `}
          </div>
          <div class="track-row-middle">
            <div class="track-row-name">${item.soal}</div>
            <div class="track-row-tags">
              <span class="track-badge-topic">${item.topic}</span>
              <span class="track-badge-id">#${item.id}</span>
              ${isCurrent ? '<span class="now-playing-tag">SEDANG PUTAR</span>' : ''}
            </div>
          </div>
          <div class="track-row-right">
            <button class="track-play-btn" title="Putar Soal #${item.id}">
              ${isCurrent && isPlaying ? '⏸' : '▶'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    bindTracklistEvents();
  }

  function syncPlayButton() {
    const s = audioPlayer.getState();
    const playBtn = container.querySelector('#btn-mp3-play');
    const vinyl = container.querySelector('.mp3-vinyl-outer');
    const eqBars = container.querySelector('.mp3-equalizer-bars');

    if (playBtn) {
      playBtn.className = `mp3-play-master ${s.isPlaying ? 'playing' : ''}`;
      playBtn.title = s.isPlaying ? 'Pause' : 'Play';
      playBtn.innerHTML = s.isPlaying ? `
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1.5"></rect>
          <rect x="14" y="4" width="4" height="16" rx="1.5"></rect>
        </svg>
      ` : `
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" style="margin-left: 3px;">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
    }

    if (vinyl) {
      if (s.isPlaying) vinyl.classList.add('rotating');
      else vinyl.classList.remove('rotating');
    }

    if (eqBars) {
      if (s.isPlaying) eqBars.classList.add('playing');
      else eqBars.classList.remove('playing');
    }
  }

  // Subscribe to audio engine events
  const unsubTime = audioPlayer.on('timeupdate', (data) => {
    const seekSlider = container.querySelector('#mp3-seek-slider');
    const curTime = container.querySelector('#mp3-current-time');
    const totTime = container.querySelector('#mp3-total-duration');

    if (seekSlider && document.activeElement !== seekSlider) {
      seekSlider.value = data.percent || 0;
    }
    if (curTime) {
      curTime.textContent = formatTime(data.currentTime);
    }
    if (totTime && data.duration) {
      totTime.textContent = formatTime(data.duration);
    }
  });

  const unsubPlay = audioPlayer.on('play', syncPlayButton);
  const unsubPause = audioPlayer.on('pause', syncPlayButton);
  const unsubChange = audioPlayer.on('change', () => {
    const s = audioPlayer.getState();
    const currentDisplayedId = parseInt(container.querySelector('.mp3-badge-cyan')?.textContent?.match(/\d+/)?.[0] || '0', 10);
    if (s.currentQuestionId && s.currentQuestionId !== currentDisplayedId) {
      render();
    } else {
      syncPlayButton();
    }
  });

  cleanupFn = () => {
    unsubTime();
    unsubPlay();
    unsubPause();
    unsubChange();
  };

  render();
}
