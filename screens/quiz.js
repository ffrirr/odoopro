// screens/quiz.js: Modern Quiz & Exam Redesign based on pen.dev UI
import { QUESTIONS, TOPICS } from '../data.js';
import { state, showToast } from '../app.js';
import { audioPlayer } from './audio_player.js';

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
    container.innerHTML = `
      <div class="app-container empty-state">
        <p>Topik atau soal latihan tidak ditemukan.</p>
        <a href="#topics" class="btn btn-primary" style="margin-top:var(--space-4);">Kembali ke Daftar Topik</a>
      </div>
    `;
    return;
  }

  let idx = 0;
  let selected = null;
  let submitted = false;
  let score = 0;
  let confidence = null;
  let isBookmarked = false;
  const total = questions.length;

  function render() {
    const q = questions[idx];
    const pct = Math.round(((idx + 1) / total) * 100);
    const answeredCount = idx + (submitted ? 1 : 0);

    // Generate 12-segment progress bar
    const segmentCount = 12;
    const activeSegment = Math.floor((idx / total) * segmentCount);
    let segmentsHtml = '';
    for (let s = 0; s < segmentCount; s++) {
      let cls = 'progress-segment';
      if (s < activeSegment) cls += ' done';
      else if (s === activeSegment) cls += ' current';
      segmentsHtml += `<div class="${cls}"></div>`;
    }

    // Check if question contains code-like structure
    const hasCodeSnippet = q.soal.includes('def ') || q.soal.includes('env[') || q.soal.includes('model') || q.soal.includes('.py');

    container.innerHTML = `
      <div class="app-container quiz-app-container">
        <!-- Top Quiz Header -->
        <div class="quiz-pro-header">
          <a href="#topics" class="quiz-back-btn" aria-label="Kembali ke Topik">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          </a>
          <div class="quiz-header-title-wrap">
            <div class="quiz-main-title">Ujian Sertifikasi Odoo 19</div>
            <div class="quiz-sub-title">${topic.nama}</div>
          </div>
          <div class="quiz-timer-pill" id="quiz-timer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>18:42</span>
          </div>
        </div>

        <!-- 12-Segment Progress Bar -->
        <div class="segmented-progress-wrap">
          <div class="segments-row">
            ${segmentsHtml}
          </div>
          <div class="progress-meta-row">
            <span class="pm-left">Soal ${idx + 1} dari ${total}</span>
            <span class="pm-right">${answeredCount} terjawab · ${pct}% selesai</span>
          </div>
        </div>

        <!-- Question Card -->
        <div class="question-pro-card">
          <div class="qc-tags-row">
            <div class="qc-tag-group">
              <span class="qc-chip qc-chip-type">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                Multiple Choice
              </span>
              <span class="qc-chip qc-chip-diff">
                🔥 ${idx % 3 === 0 ? 'Sulit' : idx % 2 === 0 ? 'Sedang' : 'Mudah'}
              </span>
            </div>
            <button class="qc-bookmark-btn ${isBookmarked ? 'active' : ''}" id="btn-bookmark" aria-label="Tandai Soal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            </button>
          </div>

          <h2 class="qc-question-text">${q.soal}</h2>

          ${hasCodeSnippet ? `
            <div class="qc-code-snippet">
              <div class="code-snippet-header">
                <div class="csh-file">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <span>account_move.py</span>
                </div>
                <div class="csh-action">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </div>
              </div>
              <pre class="code-snippet-body"><code><span class="c-line"><span class="ln">1</span> <span class="c-kw">inv</span> = env[<span class="c-str">'account.move'</span>].browse(id)</span>
<span class="c-line"><span class="ln">2</span> inv.amount_residual  <span class="c-comm"># 450.00</span></span>
<span class="c-line"><span class="ln">3</span> inv.payment_state    <span class="c-comm"># ?</span></span></code></pre>
            </div>
          ` : ''}
        </div>

        <!-- Options List -->
        <div class="pro-option-list" role="radiogroup" aria-label="Pilihan Jawaban">
          ${q.pilihan.map((opt, i) => {
            let cls = 'pro-option-item';
            let stateLabel = '';
            let isUserPick = selected === i;
            let isCorrectPick = submitted && i === q.jawaban;

            if (isUserPick) cls += ' selected';
            if (submitted) {
              if (i === q.jawaban) {
                cls += ' correct';
                stateLabel = 'Jawaban benar';
              } else if (isUserPick && i !== q.jawaban) {
                cls += ' wrong';
                stateLabel = 'Jawaban kamu';
              }
            }
            const badge = String.fromCharCode(65 + i);

            return `
              <button class="${cls}" data-idx="${i}" ${submitted ? 'disabled' : ''} aria-label="Opsi ${badge}: ${opt}">
                <div class="pro-option-badge">${badge}</div>
                <div class="pro-option-text-wrap">
                  <div class="pro-option-text">${opt}</div>
                  ${stateLabel ? `<div class="pro-option-state-label">${stateLabel}</div>` : ''}
                </div>
                <div class="pro-option-indicator" aria-hidden="true">
                  ${isCorrectPick ? `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  ` : isUserPick ? `
                    <div class="radio-inner-dot"></div>
                  ` : ''}
                </div>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Submitted Feedback & References -->
        ${submitted ? `
          <div class="pro-feedback-card ${selected === q.jawaban ? 'correct' : 'wrong'}">
            <div class="pf-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/></svg>
              <span>${selected === q.jawaban ? 'Jawaban Kamu Benar!' : 'Jawaban Kurang Tepat'}</span>
            </div>
            ${q.penjelasan ? `<div class="pf-text">${q.penjelasan}</div>` : ''}

            ${q.referensi ? `
              <div class="pf-ref-box">
                <div class="pf-ref-label">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  <span>Referensi Resmi: ${q.referensi.topikSpesifik}</span>
                </div>
                <div class="pf-ref-actions">
                  <a href="${q.referensi.docsUrl}" target="_blank" rel="noopener noreferrer" class="ref-link-btn">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Baca Docs Odoo 19
                  </a>
                  <a href="${q.referensi.videoUrl}" target="_blank" rel="noopener noreferrer" class="ref-link-btn video">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Tonton Video
                  </a>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Confidence Rating Selector -->
          ${!confidence ? `
            <div class="confidence-pro-wrap">
              <div class="conf-header">
                <div class="conf-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  <span>Seberapa yakin kamu?</span>
                </div>
                <span class="conf-meta">Opsional</span>
              </div>
              <div class="confidence-3grid">
                <button class="conf-card conf-yakin" data-conf="yakin">
                  <div class="conf-icon">👍</div>
                  <div class="conf-name">Yakin</div>
                </button>
                <button class="conf-card conf-ragu" data-conf="ragu">
                  <div class="conf-icon">⚠️</div>
                  <div class="conf-name">Ragu</div>
                </button>
                <button class="conf-card conf-tebak" data-conf="tebak">
                  <div class="conf-icon">🎲</div>
                  <div class="conf-name">Tebakan</div>
                </button>
              </div>
            </div>
          ` : ''}
        ` : ''}

        <!-- Audio Explanation Bar -->
        <div class="quiz-mentor-audio-bar" id="btn-quiz-audio" data-qid="${q.id}">
          <button class="qma-play-btn" aria-label="Putar Pembahasan Audio">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
          </button>
          <div class="qma-info">
            <div class="qma-title">Dengar penjelasan mentor</div>
            <div class="qma-waveform" aria-hidden="true">
              <span class="qma-dot on"></span>
              <span class="qma-dot on"></span>
              <span class="qma-dot on"></span>
              <span class="qma-dot on"></span>
              <span class="qma-dot on"></span>
              <span class="qma-dot off"></span>
              <span class="qma-dot off"></span>
              <span class="qma-dot off"></span>
              <span class="qma-dot off"></span>
              <span class="qma-dot off"></span>
              <span class="qma-dot off"></span>
            </div>
          </div>
          <div class="qma-duration">1:24</div>
        </div>

        <!-- Sticky Floating Footer -->
        <div class="quiz-sticky-footer">
          <div class="qf-btn-row">
            <button id="btn-flag-toggle" class="qf-flag-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
              <span>Tandai</span>
            </button>

            ${!submitted ? `
              <button id="btn-submit" class="qf-primary-btn" ${selected === null ? 'disabled' : ''}>
                <span>Periksa Jawaban</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            ` : `
              <button id="btn-next" class="qf-primary-btn ${!confidence ? 'btn-has-conf' : ''}">
                <span>${idx + 1 < total ? `Lanjut ke Soal ${idx + 2}` : 'Lihat Hasil Ujian'}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            `}
          </div>
          <div class="qf-caption">Jawaban tersimpan otomatis · Tekan 1-4 untuk memilih</div>
        </div>
      </div>
    `;

    // Hook events
    container.querySelector('#btn-bookmark')?.addEventListener('click', () => {
      isBookmarked = !isBookmarked;
      render();
      showToast(isBookmarked ? 'Soal ditandai untuk review' : 'Tanda dihapus', 'info');
    });

    container.querySelector('#btn-quiz-audio')?.addEventListener('click', () => {
      audioPlayer.playQuestion(q.id);
    });

    container.querySelectorAll('.pro-option-item').forEach(btn => {
      btn.addEventListener('click', () => {
        if (submitted) return;
        selected = parseInt(btn.dataset.idx, 10);
        render();
      });
    });

    container.querySelector('#btn-submit')?.addEventListener('click', () => {
      if (selected === null) return;
      submitted = true;
      if (selected === q.jawaban) score++;
      render();
    });

    container.querySelectorAll('.conf-card').forEach(btn => {
      btn.addEventListener('click', () => {
        confidence = btn.dataset.conf;
        state.saveAnswer(q.id, selected === q.jawaban, confidence);
        state.recordActivity();
        render();
      });
    });

    container.querySelector('#btn-next')?.addEventListener('click', goNext);
  }

  function goNext() {
    if (idx + 1 < total) {
      idx++;
      selected = null;
      submitted = false;
      confidence = null;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const pct = Math.round((score / total) * 100);
      state.addHistory({ mode: topic.nama, score, total, pct });
      state.updateHeader();
      window.location.hash = `#hasil?mode=${encodeURIComponent(topic.nama)}&score=${score}&total=${total}&pct=${pct}`;
    }
  }

  // Keyboard accessibility
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
        goNext();
      }
      if (e.key === '1') { confidence = 'yakin'; state.saveAnswer(questions[idx].id, selected === questions[idx].jawaban, confidence); state.recordActivity(); render(); }
      if (e.key === '2') { confidence = 'ragu'; state.saveAnswer(questions[idx].id, selected === questions[idx].jawaban, confidence); state.recordActivity(); render(); }
      if (e.key === '3') { confidence = 'tebak'; state.saveAnswer(questions[idx].id, selected === questions[idx].jawaban, confidence); state.recordActivity(); render(); }
    }
  };
  window.addEventListener('keydown', keyHandler);
  render();
}
