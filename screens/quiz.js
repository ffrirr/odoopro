// screens/quiz.js — Per-Topic Quiz Engine
import { QUESTIONS, TOPICS } from '../data.js';
import { state, showToast } from '../app.js';

let keyHandler = null;

export function renderQuiz(container, topicId) {
  let topic = TOPICS.find(t => t.id === topicId);
  let questions = [];

  if (topicId === 'custom') {
    const rawIds = sessionStorage.getItem('odoopro_custom_pool');
    if (rawIds) {
      try {
        const ids = JSON.parse(rawIds);
        questions = QUESTIONS.filter(q => ids.includes(q.id));
        topic = { id: 'custom', nama: 'Latihan Soal Terpilih' };
      } catch (e) {}
    }
  } else {
    questions = QUESTIONS.filter(q => q.topic === topicId);
  }

  if (!topic || questions.length === 0) {
    container.innerHTML = `<div class="app-container empty-state"><p>Topik / soal tidak ditemukan.</p><a href="#progress" class="btn btn-ghost">Kembali ke Progress</a></div>`;
    return;
  }

  let idx = 0;
  let selected = null;
  let submitted = false;
  let score = 0;
  let confidence = null;
  const total = questions.length;

  function render() {
    const q = questions[idx];
    const pct = Math.round(((idx + 1) / total) * 100);

    container.innerHTML = `
      <div class="app-container">
        <div class="quiz-header">
          <div>
            <div class="quiz-topic-label">${topic.nama}</div>
            <div class="quiz-meta">Soal ${idx + 1} / ${total}</div>
          </div>
        </div>

        <div class="progress-track" style="margin-bottom:var(--space-6);">
          <div class="progress-fill" style="width:${pct}%;"></div>
        </div>

        <div class="quiz-question">${q.soal}</div>

        <div class="option-list">
          ${q.pilihan.map((opt, i) => {
            let cls = 'option-btn';
            let stateLabel = '';
            if (selected === i) cls += ' selected';
            if (submitted) {
              if (i === q.jawaban) { cls += ' correct'; stateLabel = 'BENAR'; }
              else if (selected === i && i !== q.jawaban) { cls += ' wrong'; stateLabel = 'SALAH'; }
            }
            const badge = String.fromCharCode(65 + i);
            return `
              <button class="${cls}" data-idx="${i}" ${submitted ? 'disabled' : ''} aria-label="Opsi ${badge}">
                <span class="option-badge">${badge}</span>
                <span style="flex:1;">${opt}</span>
                ${stateLabel ? `<span class="option-state">${stateLabel}</span>` : ''}
              </button>
            `;
          }).join('')}
        </div>

        ${submitted ? `
          <div class="feedback-card ${selected === q.jawaban ? 'correct' : 'wrong'}">
            <div class="feedback-title">${selected === q.jawaban ? 'Jawaban Tepat' : 'Jawaban Kurang Tepat'}</div>
            ${q.penjelasan ? `<div class="feedback-text">${q.penjelasan}</div>` : ''}
            
            ${q.referensi ? `
              <div class="ref-card">
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
          </div>
          ${!confidence ? `
            <div style="margin-top:var(--space-3);">
              <div style="font-size:var(--text-xs);color:var(--color-ink-3);margin-bottom:var(--space-2);">Seberapa yakin?</div>
              <div class="confidence-row">
                <button class="confidence-btn yakin" data-conf="yakin">Yakin</button>
                <button class="confidence-btn ragu" data-conf="ragu">Ragu</button>
                <button class="confidence-btn tebak" data-conf="tebak">Tebakan</button>
              </div>
            </div>
          ` : ''}
        ` : ''}

        <div class="action-bar">
          <span class="hint">Tekan 1-${q.pilihan.length} pilih · Enter lanjut</span>
          ${!submitted ? `
            <button id="btn-submit" class="btn btn-primary" ${selected === null ? 'disabled' : ''}>
              Periksa
            </button>
          ` : `
            <button id="btn-next" class="btn btn-primary" ${!confidence ? 'disabled' : ''}>
              ${idx + 1 < total ? 'Lanjut' : 'Lihat Hasil'}
            </button>
          `}
        </div>
      </div>
    `;

    // Option click
    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (submitted) return;
        selected = parseInt(btn.dataset.idx, 10);
        render();
      });
    });

    // Submit
    container.querySelector('#btn-submit')?.addEventListener('click', () => {
      if (selected === null) return;
      submitted = true;
      if (selected === q.jawaban) score++;
      render();
    });

    // Confidence
    container.querySelectorAll('.confidence-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        confidence = btn.dataset.conf;
        state.saveAnswer(q.id, selected === q.jawaban, confidence);
        state.recordActivity();
        render();
      });
    });

    // Next
    container.querySelector('#btn-next')?.addEventListener('click', goNext);
  }

  function goNext() {
    if (idx + 1 < total) {
      idx++;
      selected = null;
      submitted = false;
      confidence = null;
      render();
    } else {
      const pct = Math.round((score / total) * 100);
      state.addHistory({ mode: topic.nama, score, total, pct });
      state.updateHeader();
      window.location.hash = `#hasil?mode=${encodeURIComponent(topic.nama)}&score=${score}&total=${total}&pct=${pct}`;
    }
  }

  // Keyboard
  if (keyHandler) window.removeEventListener('keydown', keyHandler);
  keyHandler = (e) => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    if (!submitted) {
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= questions[idx].pilihan.length) {
        selected = num - 1;
        render();
      } else if (e.key === 'Enter' && selected !== null) {
        container.querySelector('#btn-submit')?.click();
      }
    } else {
      if (e.key === 'Enter' || e.code === 'Space') {
        if (confidence) goNext();
      }
      if (e.key === '1') { confidence = 'yakin'; state.saveAnswer(questions[idx].id, selected === questions[idx].jawaban, confidence); state.recordActivity(); render(); }
      if (e.key === '2') { confidence = 'ragu'; state.saveAnswer(questions[idx].id, selected === questions[idx].jawaban, confidence); state.recordActivity(); render(); }
      if (e.key === '3') { confidence = 'tebak'; state.saveAnswer(questions[idx].id, selected === questions[idx].jawaban, confidence); state.recordActivity(); render(); }
    }
  };
  window.addEventListener('keydown', keyHandler);
  render();
}
