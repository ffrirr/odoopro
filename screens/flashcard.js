// screens/flashcard.js — 3D Interactive Flashcards with Spaced Repetition (Mobile-Optimized)
import { QUESTIONS, TOPICS } from '../data.js';
import { state, showToast } from '../app.js';

let flashcardKeyHandler = null;

export function renderFlashcards(container, topicId) {
  // Topic selection or filter
  let pool = [...QUESTIONS];
  if (topicId && topicId !== 'all') {
    pool = pool.filter(q => q.topic === topicId);
  }

  if (pool.length === 0) {
    container.innerHTML = `
      <div class="app-container empty-state">
        <svg viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h4"/></svg>
        <p style="font-size:var(--text-sm);">Tidak ada kartu untuk topik ini.</p>
        <a href="#flashcards" class="btn btn-ghost" style="margin-top:var(--space-4);display:inline-flex;">Pilih Topik Lain</a>
      </div>
    `;
    return;
  }

  let idx = 0;
  let isFlipped = false;
  const total = pool.length;

  function render() {
    const q = pool[idx];
    const topicObj = TOPICS.find(t => t.id === q.topic);
    const topicName = topicObj ? topicObj.nama : q.topic;
    const qState = state.getQuestion(q.id);

    container.innerHTML = `
      <div class="app-container">
        <!-- Header -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-4);">
          <div>
            <h1 style="font-size:var(--text-xl);margin-bottom:2px;">Kartu Pintar</h1>
            <div style="font-size:var(--text-xs);color:var(--color-ink-3);">
              ${topicName} · Kartu ${idx + 1} / ${total}
            </div>
          </div>
          <!-- Topic selector dropdown / filter chip -->
          <div>
            <select id="topic-select" style="background:var(--color-paper-2);color:var(--color-ink);border:1px solid var(--color-border);padding:6px 10px;border-radius:var(--radius-md);font-size:var(--text-xs);cursor:pointer;" aria-label="Pilih Topik">
              <option value="" ${!topicId || topicId === 'all' ? 'selected' : ''}>Semua Topik (${QUESTIONS.length})</option>
              ${TOPICS.map(t => `<option value="${t.id}" ${topicId === t.id ? 'selected' : ''}>${t.nama} (${t.soalCount})</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Progress track -->
        <div class="progress-track" style="margin-bottom:var(--space-5);">
          <div class="progress-fill" style="width:${Math.round(((idx + 1) / total) * 100)}%;"></div>
        </div>

        <!-- 3D Flip Card -->
        <div class="flashcard-container">
          <div class="flashcard ${isFlipped ? 'flipped' : ''}" id="main-flashcard" role="button" tabindex="0" aria-label="Flashcard soal ${idx + 1}. Klik untuk membalik kartu.">
            <!-- Front Face -->
            <div class="flashcard-face flashcard-front" id="card-front-face">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-3);flex-shrink:0;">
                <span class="flashcard-label">PERTANYAAN</span>
                <span class="quiz-topic-label" style="font-size:10px;">${topicName}</span>
              </div>
              
              <div class="flashcard-text" style="font-weight:600;font-size:var(--text-base);color:var(--color-ink);margin-bottom:var(--space-3);line-height:1.55;">
                ${q.soal}
              </div>

              <!-- Options preview -->
              <div class="flashcard-options-preview" style="flex:1;">
                ${q.pilihan.map((opt, i) => `
                  <div class="flashcard-opt-item">
                    <span style="font-family:var(--font-mono);font-weight:700;color:var(--color-ink-3);flex-shrink:0;">${String.fromCharCode(65 + i)}.</span>
                    <span style="flex:1;">${opt}</span>
                  </div>
                `).join('')}
              </div>

              <div style="margin-top:var(--space-4);padding-top:var(--space-3);border-top:1px solid var(--color-border);text-align:center;font-size:var(--text-xs);color:var(--color-ink-3);font-family:var(--font-mono);flex-shrink:0;">
                👆 Klik / [Spasi] untuk melihat jawaban
              </div>
            </div>

            <!-- Back Face -->
            <div class="flashcard-face flashcard-back" id="card-back-face">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-3);flex-shrink:0;">
                <span class="flashcard-label" style="color:var(--color-correct);">KUNCI JAWABAN</span>
                <span class="quiz-topic-label" style="font-size:10px;">${topicName}</span>
              </div>

              <div style="font-size:var(--text-xs);color:var(--color-ink-3);margin-bottom:var(--space-3);line-height:1.4;flex-shrink:0;">
                ${q.soal}
              </div>

              <!-- Options with Highlighted Correct Answer -->
              <div class="flashcard-options-preview" style="flex:1;">
                ${q.pilihan.map((opt, i) => {
                  const isCorrect = i === q.jawaban;
                  return `
                    <div class="flashcard-opt-item ${isCorrect ? 'correct-opt' : ''}" style="${!isCorrect ? 'opacity:0.6;' : ''}">
                      <span style="font-family:var(--font-mono);font-weight:700;${isCorrect ? 'color:var(--color-correct);' : 'color:var(--color-ink-3);'}flex-shrink:0;">
                        ${isCorrect ? '✓' : String.fromCharCode(65 + i)}.
                      </span>
                      <span style="flex:1;${isCorrect ? 'font-weight:600;color:var(--color-ink);' : ''}">${opt}</span>
                    </div>
                  `;
                }).join('')}
              </div>

              ${q.penjelasan ? `
                <div style="font-size:var(--text-xs);color:var(--color-ink-2);line-height:1.55;background:var(--color-paper-4);padding:var(--space-3);border-radius:var(--radius-sm);margin-top:var(--space-3);flex-shrink:0;">
                  💡 <em>${q.penjelasan}</em>
                </div>
              ` : ''}

              ${q.referensi ? `
                <div class="ref-card" style="margin-top:var(--space-3);flex-shrink:0;" onclick="event.stopPropagation();">
                  <div class="ref-card-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    <span>Referensi: ${q.referensi.topikSpesifik}</span>
                  </div>
                  <div class="ref-btn-row">
                    <a href="${q.referensi.docsUrl}" target="_blank" rel="noopener noreferrer" class="ref-btn ref-btn-docs">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      <span>Baca Docs Odoo 19</span>
                    </a>
                    <a href="${q.referensi.videoUrl}" target="_blank" rel="noopener noreferrer" class="ref-btn ref-btn-video">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      <span>Tonton Video Tutorial</span>
                    </a>
                  </div>
                </div>
              ` : ''}

              <div style="margin-top:var(--space-4);padding-top:var(--space-3);border-top:1px solid var(--color-border);text-align:center;font-size:var(--text-xs);color:var(--color-ink-3);font-family:var(--font-mono);flex-shrink:0;">
                👆 Klik untuk membalik kembali
              </div>
            </div>
          </div>
        </div>

        <!-- Action Dock -->
        <div class="flashcard-dock">
          <button id="btn-repeat" class="fc-btn fc-btn-repeat" aria-label="Belum hafal / ulangi kartu ini">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            <span>Ulangi</span>
            <kbd>1</kbd>
          </button>

          <button id="btn-flip" class="fc-btn fc-btn-flip" aria-label="Balik kartu">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
            <span>${isFlipped ? 'Tutup' : 'Buka Kunci'}</span>
            <kbd>Spasi</kbd>
          </button>

          <button id="btn-master" class="fc-btn fc-btn-master" aria-label="Sudah hafal kartu ini">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            <span>Sudah Hafal</span>
            <kbd>2</kbd>
          </button>
        </div>

        <!-- Sub Navigation -->
        <div class="fc-subnav">
          <button id="btn-prev" class="fc-nav-btn" ${idx === 0 ? 'disabled' : ''}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
            <span>Sebelumnya</span>
          </button>

          <span class="fc-status-pill ${qState.status === 'correct' ? 'mastered' : qState.status === 'wrong' ? 'review' : 'new'}">
            <span class="dot"></span>
            <span>${qState.status === 'correct' ? 'Dikuasai' : qState.status === 'wrong' ? 'Perlu Review' : 'Belum Dicoba'}</span>
          </span>

          <button id="btn-next" class="fc-nav-btn" ${idx + 1 >= total ? 'disabled' : ''}>
            <span>Berikutnya</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    `;

    // Bind event listeners
    const cardEl = container.querySelector('#main-flashcard');
    cardEl?.addEventListener('click', () => {
      isFlipped = !isFlipped;
      cardEl.classList.toggle('flipped', isFlipped);
    });

    container.querySelector('#btn-flip')?.addEventListener('click', () => {
      isFlipped = !isFlipped;
      cardEl?.classList.toggle('flipped', isFlipped);
    });

    container.querySelector('#topic-select')?.addEventListener('change', (e) => {
      const selected = e.target.value;
      if (selected) window.location.hash = `#flashcard-${selected}`;
      else window.location.hash = '#flashcards';
    });

    container.querySelector('#btn-repeat')?.addEventListener('click', () => {
      state.saveAnswer(q.id, false, 'tebak');
      state.recordActivity();
      showToast('Ditandai untuk diulang', 'info');
      nextCard();
    });

    container.querySelector('#btn-master')?.addEventListener('click', () => {
      state.saveAnswer(q.id, true, 'yakin');
      state.recordActivity();
      showToast('Kartu dikuasai! +10 XP', 'success');
      state.updateHeader();
      nextCard();
    });

    container.querySelector('#btn-prev')?.addEventListener('click', () => {
      if (idx > 0) {
        idx--;
        isFlipped = false;
        render();
      }
    });

    container.querySelector('#btn-next')?.addEventListener('click', () => {
      nextCard();
    });
  }

  function nextCard() {
    if (idx + 1 < total) {
      idx++;
      isFlipped = false;
      render();
    } else {
      showToast('Semua kartu dalam sesi ini telah selesai!', 'success');
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
    } else if (e.key === '1' || e.key === 'ArrowLeft') {
      e.preventDefault();
      container.querySelector('#btn-repeat')?.click();
    } else if (e.key === '2' || e.key === 'ArrowRight') {
      e.preventDefault();
      container.querySelector('#btn-master')?.click();
    }
  };
  window.addEventListener('keydown', flashcardKeyHandler);

  render();
}
