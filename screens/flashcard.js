// screens/flashcard.js: 3D Interactive Flashcards with Spaced Repetition (Mobile & Desktop Widescreen)
import { QUESTIONS, TOPICS } from '../data.js';
import { state, showToast } from '../app.js';
import { audioPlayer } from './audio_player.js';

let flashcardKeyHandler = null;

export function renderFlashcards(container, topicId) {
  let activeFilter = 'all'; // 'all', 'hard', 'new', 'mastered'
  let pool = [...QUESTIONS];
  if (topicId && topicId !== 'all') {
    pool = pool.filter(q => q.topic === topicId);
  }

  if (pool.length === 0) {
    container.innerHTML = `
      <div class="app-container empty-state">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h4"/></svg>
        <p style="font-size:var(--text-sm);margin-top:12px;">Tidak ada kartu untuk topik ini.</p>
        <a href="#flashcard" class="btn btn-primary" style="margin-top:var(--space-4);display:inline-flex;">Pilih Topik Lain</a>
      </div>
    `;
    return;
  }

  let idx = 0;
  let isFlipped = false;
  let showHint = false;
  const historyStack = [];

  function getDueCount() {
    return pool.length;
  }

  function render() {
    const total = pool.length;
    const q = pool[idx];
    const topicObj = TOPICS.find(t => t.id === q.topic);
    const topicName = topicObj ? topicObj.nama : q.topic;
    const qState = state.getQuestion(q.id);
    const progressPct = Math.round(((idx + 1) / total) * 100);

    container.innerHTML = `
      <div class="app-container flashcard-desktop-wrapper">
        <!-- Top Breadcrumbs & Header -->
        <div class="fc-desktop-header">
          <div class="fc-breadcrumb">
            <span>Flashcards</span>
            <span class="sep">›</span>
            <span>Spaced Repetition</span>
            <span class="sep">›</span>
            <span class="curr">${topicName}</span>
          </div>
          <div class="fc-title-row">
            <div>
              <h1 class="fc-main-title">Odoo 19 Key Concepts Flashcards</h1>
              <div class="fc-subtitle">
                <span class="fc-clock-icon">🕒</span> Kartu ${idx + 1} dari ${total} dijadwalkan
              </div>
            </div>
            <div class="fc-header-actions">
              <button class="btn-fc-tool" id="btn-fc-audio">🎧 Dengarkan Audio</button>
              <button class="btn-fc-tool" id="btn-fc-shuffle">🔀 Shuffle</button>
            </div>
          </div>

          <!-- Filter Pills -->
          <div class="fc-filter-pills">
            <button class="fc-filter-pill ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">Semua (${total})</button>
            <button class="fc-filter-pill ${activeFilter === 'hard' ? 'active' : ''}" data-filter="hard">🔴 Butuh Latihan</button>
            <button class="fc-filter-pill ${activeFilter === 'new' ? 'active' : ''}" data-filter="new">🔵 Belum Dihafal</button>
            <button class="fc-filter-pill ${activeFilter === 'mastered' ? 'active' : ''}" data-filter="mastered">🟢 Dikuasai</button>
          </div>
        </div>

        <!-- Desktop 2-Column Split: Center Arena + Right SRS Hub -->
        <div class="fc-study-layout">
          <!-- Main Left/Center Study Stage -->
          <div class="fc-stage-col">
            <!-- Session Progress Bar -->
            <div class="fc-progress-meta">
              <span class="fc-progress-label">Session Progress</span>
              <span class="fc-progress-pct">${progressPct}%</span>
            </div>
            <div class="progress-track fc-progress-bar">
              <div class="progress-fill" style="width:${progressPct}%;"></div>
            </div>

            <!-- 3D Study Card with Glowing Accent -->
            <div class="flashcard-container">
              <div class="flashcard ${isFlipped ? 'flipped' : ''}" id="main-flashcard" role="button" tabindex="0" aria-label="Flashcard soal ${idx + 1}. Klik untuk membalik kartu.">
                
                <!-- Front Face -->
                <div class="flashcard-face flashcard-front">
                  <div class="fc-card-top-bar">
                    <span class="fc-card-domain-pill">⚖️ ${topicName}</span>
                    <span class="fc-card-meta-pill">🔁 Review #${(qState?.repetitions || 0) + 1} · Ease 2.5</span>
                  </div>

                  <div class="fc-card-question-text">
                    ${q.soal}
                  </div>

                  <!-- Options Preview List -->
                  <div class="flashcard-options-preview">
                    ${q.pilihan.map((opt, i) => `
                      <div class="flashcard-opt-item">
                        <span class="opt-key">${String.fromCharCode(65 + i)}.</span>
                        <span class="opt-val">${opt}</span>
                      </div>
                    `).join('')}
                  </div>

                  <!-- Hint Box / Toggle -->
                  <div class="fc-hint-wrapper" id="fc-hint-toggle">
                    <div class="fc-hint-chip ${showHint ? 'expanded' : ''}">
                      <span>💡 ${showHint ? (q.penjelasan || 'Perhatikan prinsip Anglo-Saxon & jurnal otomatis Odoo') : 'Petunjuk konsep…'}</span>
                    </div>
                  </div>

                  <div class="fc-card-flip-prompt">
                    Tekan <strong>[Spasi]</strong> atau klik untuk melihat kunci jawaban ⤾
                  </div>
                </div>

                <!-- Back Face -->
                <div class="flashcard-face flashcard-back">
                  <div class="fc-card-top-bar">
                    <span class="fc-card-domain-pill" style="border-color:rgba(16,185,129,0.3);color:#10B981;">✓ Kunci Jawaban</span>
                    <span class="fc-card-meta-pill">⚖️ ${topicName}</span>
                  </div>

                  <!-- Options with Correct Answer Highlighted -->
                  <div class="flashcard-options-preview">
                    ${q.pilihan.map((opt, i) => {
                      const isCorrect = i === q.jawaban;
                      return `
                        <div class="flashcard-opt-item ${isCorrect ? 'correct-opt' : ''}" style="${!isCorrect ? 'opacity:0.45;' : ''}">
                          <span class="opt-key" style="${isCorrect ? 'color:var(--color-correct);font-weight:700;' : ''}">
                            ${isCorrect ? '✓' : String.fromCharCode(65 + i)}.
                          </span>
                          <span class="opt-val" style="${isCorrect ? 'font-weight:600;color:var(--color-ink);' : ''}">${opt}</span>
                        </div>
                      `;
                    }).join('')}
                  </div>

                  ${q.penjelasan ? `
                    <div class="fc-explanation-box">
                      <div class="fc-exp-title">💡 Pembahasan Mendalam:</div>
                      <div class="fc-exp-text">${q.penjelasan}</div>
                    </div>
                  ` : ''}

                  ${q.referensi ? `
                    <div class="ref-card" style="margin-top:12px;" onclick="event.stopPropagation();">
                      <div class="ref-card-title">
                        <span>📖 Referensi: ${q.referensi.topikSpesifik}</span>
                      </div>
                      <div class="ref-btn-row">
                        <a href="${q.referensi.docsUrl}" target="_blank" rel="noopener noreferrer" class="ref-btn ref-btn-docs">
                          <span>Baca Docs Odoo 19</span>
                        </a>
                        <a href="${q.referensi.videoUrl}" target="_blank" rel="noopener noreferrer" class="ref-btn ref-btn-video">
                          <span>Tonton Video</span>
                        </a>
                      </div>
                    </div>
                  ` : ''}

                  <div class="fc-card-flip-prompt">
                    Tekan <strong>[Spasi]</strong> atau klik untuk membalik kembali
                  </div>
                </div>
              </div>
            </div>

            <!-- SM-2 Spaced Repetition 4 Interval Buttons -->
            <div class="fc-rating-dock">
              <button class="fc-rate-btn rate-again" id="btn-rate-again" title="Ulangi segera (<10m)">
                <span class="rate-badge">1</span>
                <span class="rate-name">Again</span>
                <span class="rate-time">&lt;10m</span>
              </button>
              <button class="fc-rate-btn rate-hard" id="btn-rate-hard" title="Sulit diingat (1 hari)">
                <span class="rate-badge">2</span>
                <span class="rate-name">Hard</span>
                <span class="rate-time">1 hari</span>
              </button>
              <button class="fc-rate-btn rate-good" id="btn-rate-good" title="Cukup baik (3 hari)">
                <span class="rate-badge">3</span>
                <span class="rate-name">Good</span>
                <span class="rate-time">3 hari</span>
              </button>
              <button class="fc-rate-btn rate-easy" id="btn-rate-easy" title="Sangat mudah (7 hari)">
                <span class="rate-badge">4</span>
                <span class="rate-name">Easy</span>
                <span class="rate-time">7 hari</span>
              </button>
            </div>

            <!-- Keyboard shortcut legend footer -->
            <div class="fc-shortcut-legend">
              <span><kbd>Space</kbd> Flip</span>
              <span>•</span>
              <span><kbd>1-4</kbd> Rate</span>
              <span>•</span>
              <span><kbd>Z</kbd> Undo</span>
            </div>
          </div>

          <!-- Desktop Right Panel: SRS Mastery & Deck Switcher -->
          <div class="fc-sidebar-col">
            <!-- Memory Retention Curve Widget -->
            <div class="fc-retention-card">
              <div class="fc-retention-head">
                <span class="fc-widget-title">Memory Retention Curve</span>
                <span class="fc-info-icon" title="Kestabilan memori berbasis interval Spaced Repetition SM-2">ⓘ</span>
              </div>
              <div class="fc-retention-stat">
                <span class="retention-val">89%</span>
                <span class="retention-tag">stability</span>
              </div>
              <div class="fc-retention-chart">
                <div class="chart-bar" style="height:35%;"></div>
                <div class="chart-bar" style="height:48%;"></div>
                <div class="chart-bar" style="height:32%;"></div>
                <div class="chart-bar" style="height:60%;"></div>
                <div class="chart-bar" style="height:72%;"></div>
                <div class="chart-bar" style="height:68%;"></div>
                <div class="chart-bar" style="height:76%;"></div>
                <div class="chart-bar" style="height:88%;"></div>
                <div class="chart-bar" style="height:82%;"></div>
                <div class="chart-bar" style="height:92%;"></div>
                <div class="chart-bar" style="height:96%;"></div>
                <div class="chart-bar" style="height:100%;"></div>
              </div>
              <div class="fc-chart-labels">
                <span>1d</span>
                <span>7d</span>
                <span>14d</span>
                <span>30d</span>
              </div>
            </div>

            <!-- Streak & Reviews Tile Row -->
            <div class="fc-meta-stat-row">
              <div class="fc-stat-tile">
                <div class="fc-stat-tile-val">12 hari 🔥</div>
                <div class="fc-stat-tile-label">Daily streak</div>
              </div>
              <div class="fc-stat-tile">
                <div class="fc-stat-tile-val">${idx + 1}</div>
                <div class="fc-stat-tile-label">Reviewed today</div>
              </div>
            </div>

            <!-- Deck Switcher Card -->
            <div class="fc-deck-card">
              <div class="fc-deck-head">
                <span class="fc-widget-title">Deck Switcher</span>
                <a href="#topics" class="fc-view-all">View all</a>
              </div>
              <div class="fc-deck-list">
                ${TOPICS.slice(0, 4).map(t => `
                  <a href="#flashcard-${t.id}" class="fc-deck-item ${t.id === topicId ? 'active' : ''}">
                    <div class="fc-deck-info">
                      <div class="fc-deck-name">${t.nama}</div>
                      <div class="fc-deck-due">${t.soalCount} kartu</div>
                    </div>
                    <span class="fc-deck-arrow">›</span>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Event handlers
    const cardEl = container.querySelector('#main-flashcard');
    cardEl?.addEventListener('click', () => {
      isFlipped = !isFlipped;
      cardEl.classList.toggle('flipped', isFlipped);
    });

    container.querySelector('#fc-hint-toggle')?.addEventListener('click', (e) => {
      e.stopPropagation();
      showHint = !showHint;
      render();
    });

    container.querySelector('#btn-fc-audio')?.addEventListener('click', () => {
      audioPlayer.playQuestion(q.id);
    });

    container.querySelector('#btn-fc-shuffle')?.addEventListener('click', () => {
      pool = [...pool].sort(() => Math.random() - 0.5);
      idx = 0;
      isFlipped = false;
      showToast('Kartu diacak!', 'info');
      render();
    });

    // Rating handlers
    container.querySelector('#btn-rate-again')?.addEventListener('click', () => handleRate('tebak', false, 'Again (<10m)'));
    container.querySelector('#btn-rate-hard')?.addEventListener('click', () => handleRate('ragu', true, 'Hard (1d)'));
    container.querySelector('#btn-rate-good')?.addEventListener('click', () => handleRate('yakin', true, 'Good (3d)'));
    container.querySelector('#btn-rate-easy')?.addEventListener('click', () => handleRate('yakin', true, 'Easy (7d)'));
  }

  function handleRate(confidence, isCorrect, label) {
    const q = pool[idx];
    historyStack.push({ idx, isFlipped, qId: q.id });
    state.saveAnswer(q.id, isCorrect, confidence);
    state.recordActivity();
    state.updateHeader();
    showToast(`Tersimpan: ${label}`, 'success');

    if (idx + 1 < pool.length) {
      idx++;
      isFlipped = false;
      showHint = false;
      render();
    } else {
      showToast('Selesai! Seluruh kartu dalam deck telah direview 🎉', 'success');
      idx = 0;
      isFlipped = false;
      render();
    }
  }

  // Keyboard navigation
  if (flashcardKeyHandler) window.removeEventListener('keydown', flashcardKeyHandler);
  flashcardKeyHandler = (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
    if (e.code === 'Space') {
      e.preventDefault();
      const cardEl = container.querySelector('#main-flashcard');
      isFlipped = !isFlipped;
      cardEl?.classList.toggle('flipped', isFlipped);
    } else if (e.key === '1') {
      e.preventDefault();
      container.querySelector('#btn-rate-again')?.click();
    } else if (e.key === '2') {
      e.preventDefault();
      container.querySelector('#btn-rate-hard')?.click();
    } else if (e.key === '3') {
      e.preventDefault();
      container.querySelector('#btn-rate-good')?.click();
    } else if (e.key === '4') {
      e.preventDefault();
      container.querySelector('#btn-rate-easy')?.click();
    } else if (e.key.toLowerCase() === 'z') {
      if (historyStack.length > 0) {
        e.preventDefault();
        const prev = historyStack.pop();
        idx = prev.idx;
        isFlipped = prev.isFlipped;
        render();
        showToast('Undo kartu sebelumnya', 'info');
      }
    }
  };
  window.addEventListener('keydown', flashcardKeyHandler);

  render();
}
