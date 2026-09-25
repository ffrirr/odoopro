// screens/audiobook.js: Full Interactive Audiobook Studio & Micro-Lectures (Mobile & Desktop Widescreen)
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

    container.innerHTML = `
      <div class="app-container audiobook-desktop-wrapper">
        <!-- Studio Top Header -->
        <div class="audio-studio-header">
          <div class="audio-header-left">
            <div class="audio-breadcrumb">
              <span>Odoo 19 Functional</span>
              <span class="sep">›</span>
              <span class="curr">${topic.nama}</span>
            </div>
            <h1 class="audio-main-title">Audiobook Studio</h1>
          </div>
          <div class="audio-header-right">
            <div class="audio-search-box">
              <span class="search-icon">🔍</span>
              <input type="text" class="audio-search-input" placeholder="Cari transkrip...">
            </div>
            <div class="audio-tool-pills">
              <button class="audio-pill-btn" id="btn-sleep-timer">🌙 30 min</button>
              <button class="audio-pill-btn offline-pill">✓ Offline ready</button>
            </div>
          </div>
        </div>

        <!-- Desktop Studio 2-Column Split -->
        <div class="audio-studio-layout">
          <!-- Left Column: Main Player & Live Transcript -->
          <div class="audio-player-stage">
            <!-- Main Hero Track Player Card -->
            <div class="audio-hero-player-card">
              <div class="track-header-row">
                <div class="track-thumb-box">
                  <div class="track-thumb-icon">🎧</div>
                </div>
                <div class="track-meta-group">
                  <div class="track-category">
                    BAB 04 · MICRO-LECTURE
                  </div>
                  <h2 class="track-title">${q.soal}</h2>
                  <div class="track-tag-row">
                    <span class="track-tag voice-tag">🎙️ AI Architect Julian (ID/EN)</span>
                    <span class="track-tag">Odoo 19 Automated Valuation</span>
                    <span class="track-tag">Anglo-Saxon</span>
                  </div>
                </div>
                <button class="btn-bookmark-track" title="Tandai Bagian Penting">🔖</button>
              </div>

              <!-- High-Fidelity Waveform Visualizer -->
              <div class="audio-waveform-container ${isPlaying ? 'playing' : ''}">
                <div class="wave-track">
                  ${Array.from({ length: 32 }).map((_, i) => {
                    const h = Math.sin(i * 0.4) * 20 + 26;
                    const isPassed = i < 15;
                    return `<span class="wave-bar ${isPassed ? 'played' : ''}" style="height:${h}px;"></span>`;
                  }).join('')}
                </div>
                <div class="wave-playhead-knob"></div>
              </div>

              <!-- Time and Seekbar -->
              <div class="audio-seek-area">
                <input type="range" id="audio-seek-bar" class="audio-range-slider" min="0" max="100" value="45" step="0.1" aria-label="Progress Bar Audio">
                <div class="audio-timestamps">
                  <span id="audio-time-current">06:42</span>
                  <span id="audio-time-duration">14:15</span>
                </div>
              </div>

              <!-- Transport Controls Dock -->
              <div class="audio-transport-dock">
                <button class="transport-btn" id="btn-audio-rw" title="Mundur 15 detik">
                  ↺ 15s
                </button>
                <button class="transport-btn" id="btn-audio-prev" title="Soal Sebelumnya">
                  ⏮️
                </button>
                <button class="transport-play-main ${isPlaying ? 'playing' : ''}" id="btn-audio-play" aria-label="${isPlaying ? 'Pause' : 'Play'}">
                  ${isPlaying ? '⏸' : '▶'}
                </button>
                <button class="transport-btn" id="btn-audio-next" title="Soal Berikutnya">
                  ⏭️
                </button>
                <button class="transport-btn" id="btn-audio-ff" title="Maju 15 detik">
                  ↻ 15s
                </button>
                <button class="transport-btn speed-btn" id="btn-audio-speed" title="Ubah Kecepatan">
                  1.25x
                </button>
              </div>
            </div>

            <!-- Live Scrolling Transcript Box -->
            <div class="audio-transcript-card">
              <div class="transcript-header-row">
                <div class="transcript-title-wrap">
                  <span class="transcript-icon">📝</span>
                  <span class="transcript-heading">Live Transcript & Pembahasan</span>
                </div>
                <span class="transcript-sync-badge">● Auto-scroll aktif</span>
              </div>

              <div class="transcript-lines-list">
                <div class="transcript-row">
                  <span class="t-time">06:18</span>
                  <span class="t-text">Landed costs memungkinkan Anda mengalokasikan biaya freight, bea cukai, dan asuransi ke dalam harga pokok persediaan (HPP) setelah barang diterima.</span>
                </div>
                <div class="transcript-row">
                  <span class="t-time">06:31</span>
                  <span class="t-text">Di Odoo 19, sistem memposting penyesuaian sebagai layer penilaian baru (Valuation Layer) tanpa menimpa histori mutasi stok fisik awal.</span>
                </div>
                <div class="transcript-row active-sentence">
                  <span class="t-time">06:42</span>
                  <span class="t-text">Sehingga laporan penilaian persediaan (Inventory Valuation) selalu klop dengan rekening akun Stock Interim secara baris per baris.</span>
                </div>
                <div class="transcript-row">
                  <span class="t-time">06:58</span>
                  <span class="t-text">Pastikan produk biaya tambahan diatur sebagai jenis 'Jasa / Service' dengan metode pemisahan Landed Cost yang aktif.</span>
                </div>
                <div class="transcript-row">
                  <span class="t-time">07:09</span>
                  <span class="t-text">Ingat: hanya produk dengan metode penilaian FIFO atau AVCO yang dapat menerima penyesuaian biaya pendaratan.</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Module Playlist & Cheat Sheet -->
          <div class="audio-playlist-pane">
            <!-- Playlist Box -->
            <div class="audio-playlist-card">
              <div class="playlist-card-head">
                <div>
                  <h3 class="playlist-heading">Module Playlist</h3>
                  <div class="playlist-sub">${activeQuestions.length} pembahasan audio · ~1h 12m total</div>
                </div>
              </div>

              <div class="playlist-track-list">
                ${activeQuestions.slice(0, 6).map((item, i) => {
                  const isCurrent = item.id === q.id;
                  const isDone = i < 3;
                  return `
                    <div class="playlist-track-item ${isCurrent ? 'active' : ''}" data-qid="${item.id}">
                      <div class="track-indicator">
                        ${isDone ? '<span class="done-check">✓</span>' : isCurrent ? '<span class="now-pulse">▶</span>' : `<span class="track-idx">${i + 1}</span>`}
                      </div>
                      <div class="track-item-info">
                        <div class="track-item-title">${item.soal}</div>
                        <div class="track-item-sub">${isCurrent ? 'Sedang Diputar' : 'Audio Micro-Lesson'}</div>
                      </div>
                      <div class="track-item-duration">
                        ${10 + i}:15
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Key Takeaways & Cheat Sheet Card -->
            <div class="audio-takeaways-card">
              <div class="takeaways-header">
                <span class="takeaways-icon">💡</span>
                <span class="takeaways-title">Key Takeaways & Cheat Sheet</span>
              </div>
              <ul class="takeaways-list">
                <li>Landed costs hanya berlaku untuk produk FIFO / AVCO.</li>
                <li>Setiap penyesuaian otomatis membuat <em>valuation layer</em> baru.</li>
                <li>Biaya freight & bea diposting ke rekening <strong>Stock Interim Received</strong>.</li>
                <li>Mode Anglo-Saxon memisahkan COGS dari pengeluaran stok fisik.</li>
              </ul>
              <a href="#quiz-${topic.id || 'inventory'}" class="btn-take-chapter-quiz">
                ▶ Uji Materi Bab Ini (5 Soal)
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind playback controls
    container.querySelector('#btn-audio-play')?.addEventListener('click', () => {
      audioPlayer.togglePlay();
      render();
    });

    container.querySelector('#btn-audio-prev')?.addEventListener('click', () => {
      audioPlayer.previousTrack();
      render();
    });

    container.querySelector('#btn-audio-next')?.addEventListener('click', () => {
      audioPlayer.nextTrack();
      render();
    });

    container.querySelector('#btn-audio-rw')?.addEventListener('click', () => {
      audioPlayer.seekBy(-15);
    });

    container.querySelector('#btn-audio-ff')?.addEventListener('click', () => {
      audioPlayer.seekBy(15);
    });

    // Playlist clicks
    container.querySelectorAll('.playlist-track-item').forEach(item => {
      item.addEventListener('click', () => {
        const qid = parseInt(item.dataset.qid, 10);
        audioPlayer.playQuestion(qid);
        render();
      });
    });
  }

  // Subscribe to audio player changes
  const unsubscribe = audioPlayer.subscribe(() => {
    // Only re-render times or playback status without disrupting scroll
    const s = audioPlayer.getState();
    const playBtn = container.querySelector('#btn-audio-play');
    if (playBtn) {
      playBtn.textContent = s.isPlaying ? '⏸' : '▶';
    }
  });

  cleanupFn = () => {
    unsubscribe();
  };

  render();
}
