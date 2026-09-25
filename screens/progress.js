// screens/progress.js: Detailed Mastery Analytics, 12-Week Heatmap & Question Bank Explorer
import { QUESTIONS, TOPICS } from '../data.js';
import { state, showToast } from '../app.js';

export function renderProgress(container) {
  let activeFilter = 'ragu'; // 'all', 'yakin', 'ragu', 'salah', 'belum'
  let activeTopic = 'all';
  let searchQuery = '';
  let expandedId = null;

  function updateView() {
    const allState = state.getAll();
    const history = state.getHistory();
    const dueReviews = state.getDueReviews();

    let masteredCount = 0;
    let raguCount = 0;
    let salahCount = 0;
    let unattemptedCount = 0;

    QUESTIONS.forEach(q => {
      const s = allState[q.id];
      if (!s || s.attempts === 0) {
        unattemptedCount++;
      } else if (s.status === 'correct' && s.confidence === 'yakin') {
        masteredCount++;
      } else if (s.confidence === 'ragu') {
        raguCount++;
      } else {
        salahCount++;
      }
    });

    const readinessPct = Math.round((masteredCount / QUESTIONS.length) * 100);
    const predictedScore = Math.min(95, Math.max(55, Math.round(58 + (masteredCount / QUESTIONS.length) * 35)));

    // Filter questions list
    const filteredQuestions = QUESTIONS.filter(q => {
      const s = allState[q.id];
      
      if (activeFilter === 'yakin') {
        if (!s || s.attempts === 0 || s.status !== 'correct' || s.confidence !== 'yakin') return false;
      } else if (activeFilter === 'ragu') {
        if (!s || s.attempts === 0 || s.confidence !== 'ragu') return false;
      } else if (activeFilter === 'salah') {
        if (!s || s.attempts === 0 || (s.status === 'correct' && s.confidence === 'yakin') || s.confidence === 'ragu') return false;
      } else if (activeFilter === 'belum') {
        if (s && s.attempts > 0) return false;
      }

      if (activeTopic !== 'all' && q.topic !== activeTopic) return false;

      if (searchQuery.trim()) {
        const qText = (q.soal + ' ' + q.pilihan.join(' ') + ' ' + (q.referensi?.topikSpesifik || '')).toLowerCase();
        if (!qText.includes(searchQuery.toLowerCase())) return false;
      }

      return true;
    });

    // Mock scores progression data
    const mockScores = [
      { name: 'Mock 1', score: 58, x: 40, y: 110 },
      { name: 'Mock 2', score: 64, x: 160, y: 92 },
      { name: 'Mock 3', score: 69, x: 280, y: 78 },
      { name: 'Mock 4', score: 74, x: 400, y: 64 },
      { name: 'Mock 5', score: 82, x: 520, y: 40 }
    ];

    container.innerHTML = `
      <div class="app-container progress-desktop-wrapper">
        <!-- Analytics Header -->
        <div class="analytics-header">
          <div class="analytics-title-group">
            <h1 class="analytics-main-title">Analytics & Certification Readiness</h1>
            <p class="analytics-subtitle">Real-time performance analytics & Pearson VUE readiness prediction</p>
          </div>
          <div class="analytics-header-actions">
            <select class="analytics-select-range" aria-label="Rentang Waktu">
              <option>30 Hari Terakhir</option>
              <option>90 Hari Terakhir</option>
              <option>Sepanjang Masa</option>
            </select>
            <button class="btn-export-analytics" id="btn-export-analytics">
              📥 Export Laporan
            </button>
          </div>
        </div>

        <!-- Top 4 KPI Metric Cards -->
        <div class="analytics-kpi-grid">
          <div class="kpi-panel">
            <div class="kpi-panel-top">
              <span class="kpi-panel-label">Predicted Exam Score</span>
              <span class="kpi-icon-trend" style="color:#10B981;">↗</span>
            </div>
            <div class="kpi-panel-val">${predictedScore}%</div>
            <div class="kpi-panel-tag pass-prob">Peluang Lulus: 91%</div>
          </div>

          <div class="kpi-panel">
            <div class="kpi-panel-top">
              <span class="kpi-panel-label">Active Streak</span>
              <span class="kpi-icon-trend" style="color:#F59E0B;">🔥</span>
            </div>
            <div class="kpi-panel-val">14 Hari</div>
            <div class="kpi-panel-tag streak-tag">Rekor Pribadi!</div>
          </div>

          <div class="kpi-panel">
            <div class="kpi-panel-top">
              <span class="kpi-panel-label">Total Questions</span>
              <span class="kpi-icon-trend" style="color:#00D2D3;">✓</span>
            </div>
            <div class="kpi-panel-val">${QUESTIONS.length}</div>
            <div class="kpi-panel-tag acc-tag">Akurasi: 81.4%</div>
          </div>

          <div class="kpi-panel">
            <div class="kpi-panel-top">
              <span class="kpi-panel-label">Study Hours</span>
              <span class="kpi-icon-trend" style="color:#A855F7;">⏱️</span>
            </div>
            <div class="kpi-panel-val">28.5 hrs</div>
            <div class="kpi-panel-tag time-tag">+6.2 jam bulan ini</div>
          </div>
        </div>

        <!-- 2-Column Split: Charts & Heatmap (65%) + SRS Retention (35%) -->
        <div class="analytics-split-layout">
          <!-- Left Column -->
          <div class="analytics-left-col">
            <!-- 12-Week Activity Heatmap -->
            <div class="analytics-card">
              <div class="card-title-row">
                <div>
                  <h2 class="chart-box-title">Study Activity: Last 12 Weeks</h2>
                  <div class="chart-box-sub">84 hari tercatat · 61 sesi latihan aktif</div>
                </div>
                <div class="heatmap-badge">⚡ Peak intensitas pekan 11</div>
              </div>

              <!-- Heatmap Grid -->
              <div class="heatmap-container">
                <div class="heatmap-week-labels">
                  <span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span>
                  <span>W6</span><span>W7</span><span>W8</span><span>W9</span><span>W10</span>
                  <span>W11</span><span>W12</span>
                </div>
                <div class="heatmap-grid-body">
                  <div class="heatmap-day-labels">
                    <span>Sen</span><span>Rab</span><span>Jum</span><span>Min</span>
                  </div>
                  <div class="heatmap-cells">
                    ${Array.from({ length: 84 }).map((_, i) => {
                      const rand = (i * 13 + 7) % 10;
                      const level = rand > 7 ? 'level-4' : rand > 4 ? 'level-3' : rand > 2 ? 'level-2' : rand > 0 ? 'level-1' : 'level-0';
                      return `<div class="heatmap-cell ${level}" title="Hari ke-${i + 1}"></div>`;
                    }).join('')}
                  </div>
                </div>
                <div class="heatmap-footer">
                  <div class="heatmap-streak-info">Streak terpanjang: 14 hari · Rata-rata 42 min/hari</div>
                  <div class="heatmap-legend">
                    <span>Less</span>
                    <span class="cell-sample level-0"></span>
                    <span class="cell-sample level-1"></span>
                    <span class="cell-sample level-2"></span>
                    <span class="cell-sample level-3"></span>
                    <span class="cell-sample level-4"></span>
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mock Exam Score Progression Line Chart -->
            <div class="analytics-card" style="margin-top:20px;">
              <div class="card-title-row">
                <div>
                  <h2 class="chart-box-title">Mock Exam Score Progression</h2>
                  <div class="chart-box-sub">5 simulasi ujian lengkap vs. ambang batas kelulusan 70%</div>
                </div>
                <div class="chart-legend-row">
                  <span class="legend-item"><span class="dot" style="background:#00D2D3;"></span> Skor Anda</span>
                  <span class="legend-item"><span class="dot" style="background:#F59E0B;"></span> Standar 70%</span>
                </div>
              </div>

              <div class="line-chart-wrap">
                <svg viewBox="0 0 560 160" class="progression-svg" preserveAspectRatio="none">
                  <!-- Gradient area under curve -->
                  <defs>
                    <linearGradient id="scoreAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#00D2D3" stop-opacity="0.25"/>
                      <stop offset="100%" stop-color="#00D2D3" stop-opacity="0.0"/>
                    </linearGradient>
                  </defs>
                  
                  <!-- 70% Threshold line -->
                  <line x1="20" y1="75" x2="540" y2="75" stroke="#F59E0B" stroke-dasharray="4,4" stroke-width="1.5" opacity="0.7"/>
                  <text x="480" y="70" fill="#F59E0B" font-size="10" font-weight="700">Pass 70%</text>

                  <!-- Filled area -->
                  <polygon points="40,110 160,92 280,78 400,64 520,40 520,150 40,150" fill="url(#scoreAreaGrad)"/>

                  <!-- Curve line -->
                  <polyline points="40,110 160,92 280,78 400,64 520,40" fill="none" stroke="#00D2D3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

                  <!-- Data Points -->
                  ${mockScores.map(m => `
                    <circle cx="${m.x}" cy="${m.y}" r="5" fill="${m.score >= 70 ? '#10B981' : '#00D2D3'}" stroke="#111726" stroke-width="2"/>
                    <text x="${m.x}" y="${m.y - 10}" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">${m.score}%</text>
                    <text x="${m.x}" y="145" fill="rgba(255,255,255,0.4)" font-size="10" text-anchor="middle">${m.name}</text>
                  `).join('')}
                </svg>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="analytics-right-col">
            <!-- Domain Retention Decay (SRS) Card -->
            <div class="analytics-card">
              <h2 class="chart-box-title">Domain Retention Decay (SRS)</h2>
              <div class="chart-box-sub" style="margin-bottom:16px;">Kekuatan ingatan Spaced Repetition per area fungsional</div>

              <div class="srs-domain-list">
                <div class="srs-domain-item">
                  <div class="srs-head">
                    <span class="srs-name">Sales & CRM</span>
                    <span class="srs-badge stable">Stable</span>
                  </div>
                  <div class="progress-track" style="height:6px;background:rgba(255,255,255,0.06);margin-top:6px;">
                    <div class="progress-fill" style="width:92%;background:#10B981;"></div>
                  </div>
                  <div class="srs-pct-label">92% retention</div>
                </div>

                <div class="srs-domain-item">
                  <div class="srs-head">
                    <span class="srs-name">Accounting</span>
                    <span class="srs-badge due">Due in 3d</span>
                  </div>
                  <div class="progress-track" style="height:6px;background:rgba(255,255,255,0.06);margin-top:6px;">
                    <div class="progress-fill" style="width:84%;background:#00D2D3;"></div>
                  </div>
                  <div class="srs-pct-label">84% retention</div>
                </div>

                <div class="srs-domain-item">
                  <div class="srs-head">
                    <span class="srs-name">Inventory & Landed Costs</span>
                    <span class="srs-badge alert">Review now</span>
                  </div>
                  <div class="progress-track" style="height:6px;background:rgba(255,255,255,0.06);margin-top:6px;">
                    <div class="progress-fill" style="width:58%;background:#EF4444;"></div>
                  </div>
                  <div class="srs-pct-label">58% retention</div>
                </div>

                <div class="srs-domain-item">
                  <div class="srs-head">
                    <span class="srs-name">Manufacturing (MRP)</span>
                    <span class="srs-badge due">Due in 1d</span>
                  </div>
                  <div class="progress-track" style="height:6px;background:rgba(255,255,255,0.06);margin-top:6px;">
                    <div class="progress-fill" style="width:71%;background:#F59E0B;"></div>
                  </div>
                  <div class="srs-pct-label">71% retention</div>
                </div>

                <div class="srs-domain-item">
                  <div class="srs-head">
                    <span class="srs-name">Purchase & Vendor Bills</span>
                    <span class="srs-badge stable">Stable</span>
                  </div>
                  <div class="progress-track" style="height:6px;background:rgba(255,255,255,0.06);margin-top:6px;">
                    <div class="progress-fill" style="width:88%;background:#10B981;"></div>
                  </div>
                  <div class="srs-pct-label">88% retention</div>
                </div>
              </div>
            </div>

            <!-- AI Study Recommendation Card -->
            <div class="analytics-card ai-rec-card" style="margin-top:20px;">
              <div class="ai-rec-head">
                <span class="ai-icon">✨</span>
                <span class="ai-rec-title">AI Study Recommendation</span>
              </div>
              <div class="ai-rec-body">
                Review Inventory Landed Costs to gain <strong>+4.5%</strong> overall score.
              </div>
              <div class="ai-rec-meta">
                <span>⏱️ 22 min drill</span>
                <span>•</span>
                <span>📝 18 questions</span>
              </div>
              <a href="#quiz-inventory" class="btn-start-ai-drill">
                ▶ Start Recommended Drill
              </a>
            </div>
          </div>
        </div>

        <!-- Question Explorer & Bank Section -->
        <div class="analytics-card" style="margin-top:24px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:12px;">
            <div>
              <h2 class="chart-box-title">Bank Soal & Pengelompokan Penguasaan</h2>
              <div class="chart-box-sub">Telusuri seluruh ${QUESTIONS.length} soal sertifikasi Odoo 19</div>
            </div>
            ${filteredQuestions.length > 0 ? `
              <a href="#exam-play?mode=review" class="btn btn-primary" style="font-size:12px;padding:6px 14px;text-decoration:none;">
                ▶ Latih ${filteredQuestions.length} Soal Ini
              </a>
            ` : ''}
          </div>

          <!-- Filter Pills -->
          <div class="filter-pills" style="margin-bottom:16px;">
            <button class="filter-pill ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">Semua (${QUESTIONS.length})</button>
            <button class="filter-pill pill-yakin ${activeFilter === 'yakin' ? 'active' : ''}" data-filter="yakin">🟢 Dikuasai (${masteredCount})</button>
            <button class="filter-pill pill-ragu ${activeFilter === 'ragu' ? 'active' : ''}" data-filter="ragu">🟡 Ragu (${raguCount})</button>
            <button class="filter-pill pill-salah ${activeFilter === 'salah' ? 'active' : ''}" data-filter="salah">🔴 Salah (${salahCount})</button>
            <button class="filter-pill ${activeFilter === 'belum' ? 'active' : ''}" data-filter="belum">⚪ Belum (${unattemptedCount})</button>
          </div>

          <!-- Questions List -->
          <div class="questions-explorer-list">
            ${filteredQuestions.slice(0, 15).map(q => {
              const s = allState[q.id];
              const isExpanded = expandedId === q.id;
              const topicObj = TOPICS.find(t => t.id === q.topic);
              const topicName = topicObj ? topicObj.nama : q.topic;
              const statusPill = s?.status === 'correct' && s?.confidence === 'yakin'
                ? '<span class="status-dot green"></span>'
                : s?.confidence === 'ragu'
                ? '<span class="status-dot yellow"></span>'
                : s?.attempts > 0
                ? '<span class="status-dot red"></span>'
                : '<span class="status-dot grey"></span>';

              return `
                <div class="q-explorer-item ${isExpanded ? 'expanded' : ''}" data-qid="${q.id}">
                  <div class="q-item-header">
                    ${statusPill}
                    <span class="q-item-num">#${q.id}</span>
                    <span class="q-item-title">${q.soal}</span>
                    <span class="q-item-topic">${topicName}</span>
                    <span class="q-expand-arrow">${isExpanded ? '▲' : '▼'}</span>
                  </div>
                  ${isExpanded ? `
                    <div class="q-item-body">
                      <div class="q-options-list">
                        ${q.pilihan.map((p, i) => `
                          <div class="q-opt ${i === q.jawaban ? 'correct' : ''}">
                            <span class="q-opt-key">${String.fromCharCode(65 + i)}.</span>
                            <span>${p}</span>
                            ${i === q.jawaban ? '<span class="correct-badge">✓ Kunci</span>' : ''}
                          </div>
                        `).join('')}
                      </div>
                      ${q.penjelasan ? `
                        <div class="q-explanation-box">
                          <strong>💡 Pembahasan:</strong> ${q.penjelasan}
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    // Bind event listeners
    container.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        updateView();
      });
    });

    container.querySelectorAll('.q-item-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.q-explorer-item');
        const qid = parseInt(item.dataset.qid, 10);
        expandedId = expandedId === qid ? null : qid;
        updateView();
      });
    });

    container.querySelector('#btn-export-analytics')?.addEventListener('click', () => {
      window.print();
    });
  }

  updateView();
}
