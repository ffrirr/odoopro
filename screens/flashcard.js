// screens/flashcard.js — 3D Interactive Flashcards with Spaced Repetition
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
    const correctOption = q.pilihan[q.jawaban] || '';

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
            <select id="topic-select" style="background:var(--color-paper-2);color:var(--color-ink);border:1px solid var(--color-border);padding:6px 10px;border-radius:var(--radius-md);font-size:var(--text-xs);cursor:pointer;">
              <option value="" ${!topicId || topicId === 'all' ? 'selected' : ''}>Semua Topik (${QUESTIONS.length})</option>
              ${TOPICS.map(t => `<option value="${t.id}" ${topicId === t.id ? 'selected' : ''}>${t.nama} (${t.soalCount})</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Progress track -->
        <div class="progress-track" style="margin-bottom:var(--space-6);">
          <div class="progress-fill" style="width:${Math.round(((idx + 1) / total) * 100)}%;"></div>
        </div>

        <!-- 3D Flip Card -->
        <div class="flashcard-container">
          <div class="flashcard ${isFlipped ? 'flipped' : ''}" id="main-flashcard" role="button" tabindex="0" aria-label="Flashcard soal ${idx + 1}. Klik untuk membalik kartu.">
            <!-- Front -->
            <div class="flashcard-face flashcard-front">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-3);">
                <span class="flashcard-label">PERTANYAAN</span>
                <span class="quiz-topic-label" style="font-size:10px;">${topicName}</span>
              </div>
              <div class="flashcard-text" style="font-weight:600;font-size:var(--text-lg);color:var(--color-ink);flex:1;display:flex;align-items:center;">
                ${q.soal}
              </div>
              <div style="margin-top:var(--space-4);text-align:center;font-size:var(--text-xs);color:var(--color-ink-3);font-family:var(--font-mono);">
                👆 Klik / tekan [Spasi] untuk melihat jawaban
              </div>
            </div>

            <!-- Back -->
            <div class="flashcard-face flashcard-back">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-3);">
                <span class="flashcard-label" style="color:var(--color-correct);">JAWABAN BENAR</span>
                <span class="quiz-topic-label" style="font-size:10px;">${topicName}</span>
              </div>
              <div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;justify-content:center;">
                <div style="font-size:var(--text-base);font-weight:600;color:var(--color-correct);margin-bottom:var(--space-3);">
                  ✅ ${correctOption}
                </div>
                ${q.penjelasan ? `
                  <div style="font-size:var(--text-sm);color:var(--color-ink-2);line-height:1.6;border-top:1px solid var(--color-border);padding-top:var(--space-3);">
                    ${q.penjelasan}
                  </div>
                ` : ''}
              </div>
              <div style="margin-top:var(--space-3);text-align:center;font-size:var(--text-xs);color:var(--color-ink-3);font-family:var(--font-mono);">
                👆 Klik untuk membalik kembali
              </div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flashcard-actions">
          <button id="btn-repeat" class="btn btn-ghost" style="flex:1;border-color:var(--color-wrong);color:var(--color-wrong);" aria-label="Belum hafal / ulangi kartu ini">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            Belum Hafal [1]
          </button>
          <button id="btn-flip" class="btn btn-ghost" style="padding:var(--space-3) var(--space-4);" aria-label="Balik kartu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
            Balik [Spasi]
          </button>
          <button id="btn-master" class="btn btn-primary" style="flex:1;background:var(--color-correct);border-color:var(--color-correct);" aria-label="Sudah hafal kartu ini">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            Sudah Hafal [2]
          </button>
        </div>

        <!-- Navigation buttons -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--space-6);">
          <button id="btn-prev" class="btn btn-ghost" ${idx === 0 ? 'disabled' : ''} style="font-size:var(--text-xs);padding:var(--space-2) var(--space-4);">
            ← Sebelumnya
          </button>
          <span style="font-size:var(--text-xs);color:var(--color-ink-3);font-family:var(--font-mono);">
            Status: ${qState.status === 'correct' ? '✅ Dikuasai' : qState.status === 'wrong' ? '❌ Perlu Review' : 'Belum Dicoba'}
          </span>
          <button id="btn-next" class="btn btn-ghost" ${idx + 1 >= total ? 'disabled' : ''} style="font-size:var(--text-xs);padding:var(--space-2) var(--space-4);">
            Berikutnya →
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
