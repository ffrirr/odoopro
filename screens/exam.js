// screens/exam.js — Exam Simulator (Setup + Quiz)
import { QUESTIONS, TOPICS, EXAM_PRESETS } from '../data.js';
import { state, showToast } from '../app.js';

let keyHandler = null;

export function renderExam(container) {
  container.innerHTML = `
    <div class="app-container">
      <h1 class="section-title">Exam Simulator</h1>
      <p class="section-subtitle">Simulasi ujian sertifikasi Odoo 19</p>

      <div class="mode-grid" style="margin-bottom:var(--space-6);">
        <button class="mode-card selected" data-mode="full">
          <div class="mode-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg></div>
          <div class="mode-info">
            <div class="mode-name">${EXAM_PRESETS.full.nama}</div>
            <div class="mode-desc">${EXAM_PRESETS.full.desc}</div>
          </div>
        </button>
        <button class="mode-card" data-mode="quick">
          <div class="mode-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
          <div class="mode-info">
            <div class="mode-name">${EXAM_PRESETS.quick.nama}</div>
            <div class="mode-desc">${EXAM_PRESETS.quick.desc}</div>
          </div>
        </button>
        <button class="mode-card" data-mode="speed">
          <div class="mode-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <div class="mode-info">
            <div class="mode-name">${EXAM_PRESETS.speed.nama}</div>
            <div class="mode-desc">${EXAM_PRESETS.speed.desc}</div>
          </div>
        </button>
        <button class="mode-card" data-mode="review">
          <div class="mode-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg></div>
          <div class="mode-info">
            <div class="mode-name">Review Only</div>
            <div class="mode-desc">Soal yang pernah salah/ragu saja</div>
          </div>
        </button>
      </div>

      <div style="margin-bottom:var(--space-6);">
        <h2 style="font-size:var(--text-sm);font-weight:600;margin-bottom:var(--space-3);color:var(--color-ink-2);">Filter Topik (opsional)</h2>
        <div class="chip-row" id="topic-chips">
          ${TOPICS.map(t => `<button class="chip" data-topic="${t.id}">${t.nama}</button>`).join('')}
        </div>
      </div>

      <button id="btn-start" class="btn btn-primary" style="width:100%;">Mulai Exam</button>
    </div>
  `;

  let selectedMode = 'full';
  const selectedTopics = new Set();

  // Mode selection
  container.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
      container.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedMode = card.dataset.mode;
    });
  });

  // Topic chips
  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      const t = chip.dataset.topic;
      if (selectedTopics.has(t)) selectedTopics.delete(t);
      else selectedTopics.add(t);
    });
  });

  // Start
  container.querySelector('#btn-start').addEventListener('click', () => {
    const topics = selectedTopics.size > 0 ? [...selectedTopics].join(',') : 'all';
    window.location.hash = `#exam-play?mode=${selectedMode}&topics=${topics}`;
  });
}

export function renderExamQuiz(container, params) {
  const mode = params.get('mode') || 'full';
  const topicsParam = params.get('topics') || 'all';

  // Build question pool
  let pool = [...QUESTIONS];
  if (topicsParam !== 'all') {
    const topicIds = topicsParam.split(',');
    pool = pool.filter(q => topicIds.includes(q.topic));
  }

  if (mode === 'review') {
    pool = pool.filter(q => {
      const s = state.getQuestion(q.id);
      return s.status === 'wrong' || s.confidence === 'ragu' || s.confidence === 'tebak';
    });
    if (pool.length === 0) {
      container.innerHTML = `<div class="app-container empty-state"><p style="font-size:var(--text-sm);">Tidak ada soal untuk di-review. Mulai quiz dulu!</p><a href="#exam" class="btn btn-ghost" style="margin-top:var(--space-4);display:inline-flex;">Kembali</a></div>`;
      return;
    }
  }

  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Limit
  const preset = EXAM_PRESETS[mode];
  if (preset && preset.count > 0 && pool.length > preset.count) {
    pool = pool.slice(0, preset.count);
  }

  const total = pool.length;
  let idx = 0;
  let selected = null;
  let submitted = false;
  let score = 0;
  let answers = [];
  let confidence = null;

  // Timer
  const hasTimer = preset && preset.timerMin > 0;
  let timerSeconds = hasTimer ? preset.timerMin * 60 : 0;
  let timerInterval = null;

  if (hasTimer) {
    timerInterval = setInterval(() => {
      timerSeconds--;
      const el = container.querySelector('.quiz-timer');
      if (el) {
        const m = Math.floor(timerSeconds / 60);
        const s = timerSeconds % 60;
        el.textContent = `${m}:${String(s).padStart(2, '0')}`;
        if (timerSeconds <= 300) el.classList.add('danger');
      }
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        finish();
      }
    }, 1000);
  }

  function finish() {
    if (timerInterval) clearInterval(timerInterval);
    if (keyHandler) { window.removeEventListener('keydown', keyHandler); keyHandler = null; }

    const pct = Math.round((score / total) * 100);
    const modeName = preset ? preset.nama : mode;
    state.addHistory({ mode: modeName, score, total, pct });
    state.updateHeader();

    // Build topic breakdown
    const topicScores = {};
    answers.forEach(a => {
      if (!topicScores[a.topic]) topicScores[a.topic] = { correct: 0, total: 0 };
      topicScores[a.topic].total++;
      if (a.isCorrect) topicScores[a.topic].correct++;
    });

    window.location.hash = `#hasil?mode=${encodeURIComponent(modeName)}&score=${score}&total=${total}&pct=${pct}&breakdown=${encodeURIComponent(JSON.stringify(topicScores))}`;
  }

  function render() {
    if (idx >= total) { finish(); return; }
    const q = pool[idx];
    const pct = Math.round(((idx + 1) / total) * 100);
    const topicName = TOPICS.find(t => t.id === q.topic)?.nama || q.topic;

    let timerHtml = '';
    if (hasTimer) {
      const m = Math.floor(timerSeconds / 60);
      const s = timerSeconds % 60;
      timerHtml = `<span class="quiz-timer${timerSeconds <= 300 ? ' danger' : ''}">${m}:${String(s).padStart(2, '0')}</span>`;
    }

    container.innerHTML = `
      <div class="app-container">
        <div class="quiz-header">
          <div>
            <div class="quiz-topic-label">${topicName}</div>
            <div class="quiz-meta">Soal ${idx + 1} / ${total}</div>
          </div>
          ${timerHtml}
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
            return `
              <button class="${cls}" data-idx="${i}" ${submitted ? 'disabled' : ''}>
                <span class="option-badge">${String.fromCharCode(65 + i)}</span>
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
          <span class="hint">1-${q.pilihan.length} pilih · Enter lanjut</span>
          ${!submitted ? `
            <button id="btn-submit" class="btn btn-primary" ${selected === null ? 'disabled' : ''}>Periksa</button>
          ` : `
            <button id="btn-next" class="btn btn-primary" ${!confidence ? 'disabled' : ''}>${idx + 1 < total ? 'Lanjut' : 'Lihat Hasil'}</button>
          `}
        </div>
      </div>
    `;

    // Events
    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => { if (!submitted) { selected = parseInt(btn.dataset.idx); render(); } });
    });

    container.querySelector('#btn-submit')?.addEventListener('click', () => {
      if (selected === null) return;
      submitted = true;
      const isCorrect = selected === pool[idx].jawaban;
      if (isCorrect) score++;
      answers.push({ qId: pool[idx].id, topic: pool[idx].topic, isCorrect, selected });
      render();
    });

    container.querySelectorAll('.confidence-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        confidence = btn.dataset.conf;
        state.saveAnswer(pool[idx].id, selected === pool[idx].jawaban, confidence);
        state.recordActivity();
        render();
      });
    });

    container.querySelector('#btn-next')?.addEventListener('click', goNext);
  }

  function goNext() {
    idx++;
    selected = null;
    submitted = false;
    confidence = null;
    render();
  }

  // Keyboard
  if (keyHandler) window.removeEventListener('keydown', keyHandler);
  keyHandler = (e) => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    if (!submitted) {
      const num = parseInt(e.key);
      if (num >= 1 && num <= pool[idx]?.pilihan.length) { selected = num - 1; render(); }
      else if (e.key === 'Enter' && selected !== null) container.querySelector('#btn-submit')?.click();
    } else {
      if ((e.key === 'Enter' || e.code === 'Space') && confidence) goNext();
      if (e.key === '1') { confidence = 'yakin'; state.saveAnswer(pool[idx].id, selected === pool[idx].jawaban, confidence); state.recordActivity(); render(); }
      if (e.key === '2') { confidence = 'ragu'; state.saveAnswer(pool[idx].id, selected === pool[idx].jawaban, confidence); state.recordActivity(); render(); }
      if (e.key === '3') { confidence = 'tebak'; state.saveAnswer(pool[idx].id, selected === pool[idx].jawaban, confidence); state.recordActivity(); render(); }
    }
  };
  window.addEventListener('keydown', keyHandler);
  render();
}
