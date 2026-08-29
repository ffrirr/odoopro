// screens/exam.js — Exam Simulator with Frontend Customizer & Stratified Sampling
import { QUESTIONS, TOPICS, EXAM_PRESETS } from '../data.js';
import { state, showToast } from '../app.js';

let keyHandler = null;

export function renderExam(container) {
  let selectedMode = 'quick'; // default: practice exam
  let selectedCount = 60;
  let selectedTimer = 45; // minutes, 0 = no timer
  const selectedTopics = new Set();

  function updateSetupUI() {
    // Calculate available questions
    let availableQuestions = QUESTIONS;
    if (selectedTopics.size > 0) {
      availableQuestions = QUESTIONS.filter(q => selectedTopics.has(q.topic));
    }
    const maxAvailable = availableQuestions.length;
    if (selectedCount > maxAvailable && maxAvailable > 0) {
      selectedCount = maxAvailable;
    }

    const topicsCount = selectedTopics.size > 0 ? selectedTopics.size : TOPICS.length;
    const perTopicAvg = Math.max(1, Math.round(selectedCount / topicsCount));

    container.innerHTML = `
      <div class="app-container">
        <h1 class="section-title">Exam Simulator</h1>
        <p class="section-subtitle">Simulasi ujian sertifikasi & latihan kustom Odoo 19</p>

        <!-- Mode Presets -->
        <div class="mode-grid" style="margin-bottom:var(--space-6);">
          <button class="mode-card ${selectedMode === 'quick' ? 'selected' : ''}" data-mode="quick">
            <div class="mode-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
            <div class="mode-info">
              <div class="mode-name">Practice Exam (60 Soal)</div>
              <div class="mode-desc">60 soal terdistribusi merata lintas modul (45 menit)</div>
            </div>
          </button>

          <button class="mode-card ${selectedMode === 'full' ? 'selected' : ''}" data-mode="full">
            <div class="mode-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg></div>
            <div class="mode-info">
              <div class="mode-name">Full Exam (114 Soal)</div>
              <div class="mode-desc">Simulasi ujian sertifikasi asli Odoo (114 soal, 90 menit)</div>
            </div>
          </button>

          <button class="mode-card ${selectedMode === 'custom' ? 'selected' : ''}" data-mode="custom">
            <div class="mode-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
            <div class="mode-info">
              <div class="mode-name">Custom Exam (Atur Sendiri)</div>
              <div class="mode-desc">Atur jumlah soal, timer, dan kombinasi modul sesuka Anda</div>
            </div>
          </button>

          <button class="mode-card ${selectedMode === 'review' ? 'selected' : ''}" data-mode="review">
            <div class="mode-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg></div>
            <div class="mode-info">
              <div class="mode-name">Review Only</div>
              <div class="mode-desc">Khusus soal yang pernah salah atau ditandai ragu</div>
            </div>
          </button>
        </div>

        <!-- Custom Settings Panel (Always accessible for fine-tuning) -->
        <div class="card" style="margin-bottom:var(--space-6);background:var(--color-paper-2);border:1px solid var(--color-border);">
          <h2 style="font-size:var(--text-sm);font-weight:700;margin-bottom:var(--space-4);display:flex;align-items:center;gap:var(--space-2);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            <span>Pengaturan Jumlah Soal & Waktu</span>
          </h2>

          <!-- Question Count Controls -->
          <div style="margin-bottom:var(--space-4);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-2);">
              <label style="font-size:var(--text-xs);font-weight:600;color:var(--color-ink-2);">Jumlah Pertanyaan:</label>
              <span style="font-family:var(--font-mono);font-size:var(--text-base);font-weight:800;color:var(--color-accent);">${selectedCount} Soal</span>
            </div>

            <!-- Quick Count Chips -->
            <div style="display:flex;gap:var(--space-2);margin-bottom:var(--space-3);flex-wrap:wrap;">
              <button class="chip ${selectedCount === 15 ? 'active' : ''}" data-count="15">15 Soal</button>
              <button class="chip ${selectedCount === 30 ? 'active' : ''}" data-count="30">30 Soal</button>
              <button class="chip ${selectedCount === 60 ? 'active' : ''}" data-count="60">60 Soal</button>
              <button class="chip ${selectedCount === 114 ? 'active' : ''}" data-count="114">114 Soal</button>
              <button class="chip ${selectedCount === maxAvailable ? 'active' : ''}" data-count="${maxAvailable}">Semua (${maxAvailable})</button>
            </div>

            <!-- Slider & Custom Input -->
            <div style="display:flex;align-items:center;gap:var(--space-3);">
              <input type="range" id="count-range" min="5" max="${maxAvailable}" step="5" value="${selectedCount}" style="flex:1;accent-color:var(--color-accent);cursor:pointer;">
              <input type="number" id="count-num" min="1" max="${maxAvailable}" value="${selectedCount}" style="width:70px;background:var(--color-paper-3);color:var(--color-ink);border:1px solid var(--color-border);padding:6px 8px;border-radius:var(--radius-sm);font-family:var(--font-mono);font-size:var(--text-xs);text-align:center;">
            </div>
          </div>

          <!-- Timer Controls -->
          <div style="margin-bottom:var(--space-4);padding-top:var(--space-3);border-top:1px solid var(--color-border);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-2);">
              <label style="font-size:var(--text-xs);font-weight:600;color:var(--color-ink-2);">Batas Waktu (Timer):</label>
              <span style="font-family:var(--font-mono);font-size:var(--text-xs);font-weight:700;color:var(--color-ink-2);">
                ${selectedTimer > 0 ? `${selectedTimer} Menit` : 'Tanpa Batas Waktu'}
              </span>
            </div>

            <div style="display:flex;gap:var(--space-2);flex-wrap:wrap;">
              <button class="chip ${selectedTimer === 0 ? 'active' : ''}" data-timer="0">Tanpa Timer</button>
              <button class="chip ${selectedTimer === 30 ? 'active' : ''}" data-timer="30">30 Menit</button>
              <button class="chip ${selectedTimer === 45 ? 'active' : ''}" data-timer="45">45 Menit</button>
              <button class="chip ${selectedTimer === 90 ? 'active' : ''}" data-timer="90">90 Menit</button>
            </div>
          </div>

          <!-- Live Stratified Distribution Estimation -->
          <div style="padding:var(--space-3);background:var(--color-paper-3);border-radius:var(--radius-sm);font-size:var(--text-xs);color:var(--color-ink-2);line-height:1.5;">
            ⚖️ <strong>Distribusi Merata:</strong> Mempersiapkan <strong>${selectedCount} soal</strong> dari <strong>${topicsCount} modul</strong> (~${perTopicAvg} soal per modul).
          </div>
        </div>

        <!-- Topic Filter Section -->
        <div style="margin-bottom:var(--space-6);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-3);">
            <h2 style="font-size:var(--text-sm);font-weight:600;margin-bottom:0;color:var(--color-ink-2);">
              Pilih Modul (${selectedTopics.size > 0 ? `${selectedTopics.size} Terpilih` : 'Semua 19 Modul'})
            </h2>
            <div style="display:flex;gap:var(--space-2);">
              <button id="btn-select-all-topics" class="btn btn-ghost" style="padding:4px 8px;font-size:10px;">Pilih Semua</button>
              <button id="btn-clear-topics" class="btn btn-ghost" style="padding:4px 8px;font-size:10px;">Reset</button>
            </div>
          </div>

          <div class="chip-row" id="topic-chips">
            ${TOPICS.map(t => `
              <button class="chip ${selectedTopics.has(t.id) ? 'active' : ''}" data-topic="${t.id}">
                ${t.nama} (${t.soalCount})
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Start Button -->
        <button id="btn-start" class="btn btn-primary" style="width:100%;padding:var(--space-4);font-size:var(--text-base);font-weight:700;">
          Mulai Latihan (${selectedCount} Soal · ${selectedTimer > 0 ? `${selectedTimer} Min` : 'Tanpa Waktu'})
        </button>
      </div>
    `;

    // Event handlers
    container.querySelectorAll('.mode-card').forEach(card => {
      card.addEventListener('click', () => {
        selectedMode = card.dataset.mode;
        if (selectedMode === 'quick') {
          selectedCount = 60;
          selectedTimer = 45;
        } else if (selectedMode === 'full') {
          selectedCount = 114;
          selectedTimer = 90;
        } else if (selectedMode === 'review') {
          selectedTimer = 0;
        }
        updateSetupUI();
      });
    });

    container.querySelectorAll('.chip[data-count]').forEach(chip => {
      chip.addEventListener('click', () => {
        selectedCount = parseInt(chip.dataset.count, 10);
        selectedMode = 'custom';
        updateSetupUI();
      });
    });

    container.querySelectorAll('.chip[data-timer]').forEach(chip => {
      chip.addEventListener('click', () => {
        selectedTimer = parseInt(chip.dataset.timer, 10);
        selectedMode = 'custom';
        updateSetupUI();
      });
    });

    const rangeInput = container.querySelector('#count-range');
    const numInput = container.querySelector('#count-num');

    if (rangeInput && numInput) {
      rangeInput.addEventListener('input', (e) => {
        selectedCount = parseInt(e.target.value, 10);
        selectedMode = 'custom';
        numInput.value = selectedCount;
        updateSetupUI();
      });

      numInput.addEventListener('change', (e) => {
        let val = parseInt(e.target.value, 10) || 10;
        if (val < 1) val = 1;
        if (val > maxAvailable) val = maxAvailable;
        selectedCount = val;
        selectedMode = 'custom';
        updateSetupUI();
      });
    }

    container.querySelectorAll('#topic-chips .chip[data-topic]').forEach(chip => {
      chip.addEventListener('click', () => {
        const t = chip.dataset.topic;
        if (selectedTopics.has(t)) selectedTopics.delete(t);
        else selectedTopics.add(t);
        updateSetupUI();
      });
    });

    container.querySelector('#btn-select-all-topics')?.addEventListener('click', () => {
      TOPICS.forEach(t => selectedTopics.add(t.id));
      updateSetupUI();
    });

    container.querySelector('#btn-clear-topics')?.addEventListener('click', () => {
      selectedTopics.clear();
      updateSetupUI();
    });

    container.querySelector('#btn-start')?.addEventListener('click', () => {
      const topics = selectedTopics.size > 0 ? [...selectedTopics].join(',') : 'all';
      window.location.hash = `#exam-play?mode=${selectedMode}&topics=${topics}&count=${selectedCount}&timer=${selectedTimer}`;
    });
  }

  updateSetupUI();
}

export function renderExamQuiz(container, params) {
  const mode = params.get('mode') || 'full';
  const topicsParam = params.get('topics') || 'all';
  const customCount = parseInt(params.get('count') || '0', 10);
  const customTimer = parseInt(params.get('timer') || '-1', 10);

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

  // Determine target question count
  const preset = EXAM_PRESETS[mode];
  let targetCount = customCount > 0 ? customCount : (preset && preset.count > 0 ? preset.count : pool.length);
  if (targetCount > pool.length) targetCount = pool.length;

  // Stratified sampling across all selected modules
  if (targetCount < pool.length) {
    const byTopic = {};
    pool.forEach(q => {
      if (!byTopic[q.topic]) byTopic[q.topic] = [];
      byTopic[q.topic].push(q);
    });

    const topicKeys = Object.keys(byTopic);
    // Shuffle topic keys order
    for (let i = topicKeys.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [topicKeys[i], topicKeys[j]] = [topicKeys[j], topicKeys[i]];
    }
    // Shuffle questions within each topic
    topicKeys.forEach(t => {
      for (let i = byTopic[t].length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [byTopic[t][i], byTopic[t][j]] = [byTopic[t][j], byTopic[t][i]];
      }
    });

    const selected = [];
    const pointers = {};
    topicKeys.forEach(t => { pointers[t] = 0; });

    while (selected.length < targetCount) {
      let addedInRound = false;
      for (const t of topicKeys) {
        if (selected.length >= targetCount) break;
        if (pointers[t] < byTopic[t].length) {
          selected.push(byTopic[t][pointers[t]]);
          pointers[t]++;
          addedInRound = true;
        }
      }
      if (!addedInRound) break;
    }

    pool = selected;
  }

  // Final shuffle of selected pool
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const total = pool.length;
  let idx = 0;
  let selected = null;
  let submitted = false;
  let score = 0;
  let answers = [];
  let confidence = null;

  // Timer determination
  let timerMinutes = 0;
  if (customTimer >= 0) {
    timerMinutes = customTimer;
  } else if (preset && preset.timerMin > 0) {
    timerMinutes = preset.timerMin;
  }

  const hasTimer = timerMinutes > 0;
  let timerSeconds = hasTimer ? timerMinutes * 60 : 0;
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
    const modeName = preset ? preset.nama : `Custom (${total} Soal)`;
    state.addHistory({ mode: modeName, score, total, pct });
    state.updateHeader();

    // Build topic breakdown
    const topicScores = {};
    answers.forEach(a => {
      if (!topicScores[a.topic]) topicScores[a.topic] = { correct: 0, total: 0 };
      topicScores[a.topic].total++;
      if (a.isCorrect) topicScores[a.topic].correct++;
    });

    const passed = pct >= 70;
    sessionStorage.setItem('odoopro_last_result', JSON.stringify({
      mode: modeName,
      score,
      total,
      pct,
      passed,
      topicScores,
      answers
    }));

    window.location.hash = '#hasil';
  }

  function render() {
    const q = pool[idx];
    const pct = Math.round(((idx + 1) / total) * 100);
    const topicObj = TOPICS.find(t => t.id === q.topic);
    const topicName = topicObj ? topicObj.nama : q.topic;

    container.innerHTML = `
      <div class="app-container">
        <div class="quiz-header">
          <div>
            <div class="quiz-topic-label">${topicName}</div>
            <div class="quiz-meta">Soal ${idx + 1} / ${total} · Skor: ${score}</div>
          </div>
          ${hasTimer ? `
            <div class="quiz-timer ${timerSeconds <= 300 ? 'danger' : ''}">
              ${Math.floor(timerSeconds / 60)}:${String(timerSeconds % 60).padStart(2, '0')}
            </div>
          ` : ''}
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
        const isCorrect = selected === pool[idx].jawaban;
        state.recordAnswer(pool[idx].id, pool[idx].topic, isCorrect, confidence);
        render();
      });
    });

    container.querySelector('#btn-next')?.addEventListener('click', () => {
      if (idx + 1 < total) {
        idx++;
        selected = null;
        submitted = false;
        confidence = null;
        render();
      } else {
        finish();
      }
    });

    // Keyboard shortcuts
    if (keyHandler) window.removeEventListener('keydown', keyHandler);
    keyHandler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const num = parseInt(e.key);
      if (!submitted && num >= 1 && num <= pool[idx].pilihan.length) {
        selected = num - 1;
        render();
      } else if (!submitted && e.key === 'Enter' && selected !== null) {
        container.querySelector('#btn-submit')?.click();
      } else if (submitted && !confidence) {
        if (e.key === '1') container.querySelector('.confidence-btn.yakin')?.click();
        else if (e.key === '2') container.querySelector('.confidence-btn.ragu')?.click();
        else if (e.key === '3') container.querySelector('.confidence-btn.tebak')?.click();
      } else if (submitted && confidence && e.key === 'Enter') {
        container.querySelector('#btn-next')?.click();
      }
    };
    window.addEventListener('keydown', keyHandler);
  }

  render();
}
