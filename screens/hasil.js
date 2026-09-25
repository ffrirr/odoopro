// screens/hasil.js: Exam & Quiz Diagnostic Report (Mobile & Desktop Widescreen)
import { TOPICS, QUESTIONS } from '../data.js';

export function renderHasil(container, params) {
  const mode = params.get('mode') || 'Practice Exam';
  const score = parseInt(params.get('score') || '49', 10);
  const total = parseInt(params.get('total') || '60', 10);
  const pct = total > 0 ? Math.round((score / total) * 100) : parseInt(params.get('pct') || '82', 10);
  
  let breakdown = null;
  try {
    const raw = params.get('breakdown');
    if (raw) breakdown = JSON.parse(raw);
  } catch (e) {
    breakdown = null;
  }

  // Fallback realistic topic distribution if none passed
  if (!breakdown || Object.keys(breakdown).length === 0) {
    breakdown = {
      sales: { correct: 22, total: 24, name: 'Sales, CRM & POS' },
      accounting: { correct: 17, total: 20, name: 'Accounting & Invoicing' },
      purchase: { correct: 11, total: 14, name: 'Purchase & Vendors' },
      inventory: { correct: 7, total: 12, name: 'Inventory & Valuation' },
      mrp: { correct: 8, total: 12, name: 'Manufacturing (MRP)' }
    };
  }

  const isPassed = pct >= 70;
  const statusColor = isPassed ? '#10B981' : '#EF4444';
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (pct / 100) * circumference;

  container.innerHTML = `
    <div class="app-container hasil-desktop-wrapper">
      <!-- Breadcrumb & Top Action Header -->
      <div class="hasil-header">
        <div class="hasil-breadcrumb">
          <span>Practice Exams</span>
          <span class="sep">›</span>
          <span>Mock Exam 05</span>
          <span class="sep">›</span>
          <span class="curr">Diagnostic Report</span>
        </div>
        <div class="hasil-title-row">
          <div>
            <h1 class="hasil-main-title">Mock Exam 05 Results: Odoo 19 Functional</h1>
            <div class="hasil-meta-sub">
              <span>📅 ${new Date().toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span>•</span>
              <span>⏱️ Durasi: 52m 14s</span>
            </div>
          </div>
          <div class="hasil-header-actions">
            <a href="#exam" class="btn-hasil-action">
              <span>🔄 Ulangi Ujian</span>
            </a>
            <button class="btn-hasil-action btn-pdf" id="btn-export-pdf">
              <span>📥 Export PDF</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Top Hero Row: Score Radial Gauge + 3 KPI Stat Cards -->
      <div class="hasil-hero-grid">
        <!-- Main Score Donut Card -->
        <div class="hasil-hero-score-card">
          <div class="hasil-donut-wrap">
            <svg class="hasil-donut-svg" viewBox="0 0 100 100">
              <circle class="donut-bg" cx="50" cy="50" r="45"></circle>
              <circle class="donut-fill" cx="50" cy="50" r="45" style="stroke-dasharray:${circumference};stroke-dashoffset:${strokeDashoffset};stroke:${statusColor};"></circle>
            </svg>
            <div class="donut-content">
              <div class="donut-pct">${pct}%</div>
              <div class="donut-label">OVERALL SCORE</div>
            </div>
          </div>
          <div class="hasil-score-details">
            <div class="hasil-badge-pass ${isPassed ? 'passed' : 'failed'}">
              ${isPassed ? '✓ PASSED' : '✕ NEEDS PRACTICE'}
            </div>
            <div class="hasil-score-counts">
              ${score}/${total} benar
            </div>
            <div class="hasil-score-diff">
              ↗ +8% vs simulasi sebelumnya
            </div>
            <div class="hasil-score-note">
              Standar kelulusan Pearson VUE Odoo 19 adalah 70%.
            </div>
          </div>
        </div>

        <!-- 3 KPI Cards -->
        <div class="hasil-kpi-card">
          <div class="kpi-icon-wrap" style="color:#00D2D3;">⏱️</div>
          <div class="kpi-label">Avg Pace</div>
          <div class="kpi-val">52s <span class="kpi-unit">/soal</span></div>
          <div class="kpi-sub">Target &lt; 60s/soal</div>
        </div>

        <div class="hasil-kpi-card">
          <div class="kpi-icon-wrap" style="color:#10B981;">🛡️</div>
          <div class="kpi-label">Pearson VUE Readiness</div>
          <div class="kpi-val">74%</div>
          <div class="kpi-sub">Tingkat akurasi simulasi tinggi</div>
        </div>

        <div class="hasil-kpi-card">
          <div class="kpi-icon-wrap" style="color:#F59E0B;">⚠️</div>
          <div class="kpi-label">Weakest Domain</div>
          <div class="kpi-val" style="color:#F59E0B;font-size:1.15rem;">Inventory 58%</div>
          <div class="kpi-sub">Prioritas latihan penguatan</div>
        </div>
      </div>

      <!-- Main Two-Column Body: Domain Mastery + Mistake Recovery -->
      <div class="hasil-body-split">
        <!-- Left: Domain Mastery Breakdown -->
        <div class="hasil-col-breakdown">
          <div class="hasil-card-container">
            <div class="hasil-card-header">
              <div>
                <h2 class="hasil-card-title">Domain Mastery Breakdown</h2>
                <div class="hasil-card-sub">Akurasi per modul fungsional · 60 soal</div>
              </div>
              <span class="hasil-tag-sub">vs Mock 04</span>
            </div>

            <div class="hasil-domain-list">
              ${Object.entries(breakdown).map(([tId, stat]) => {
                const topicObj = TOPICS.find(t => t.id === tId);
                const name = stat.name || (topicObj ? topicObj.nama : tId);
                const topicPct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                const isWeak = topicPct < 70;
                const color = topicPct >= 80 ? '#10B981' : topicPct >= 70 ? '#00D2D3' : '#F59E0B';

                return `
                  <div class="hasil-domain-row">
                    <div class="domain-info-row">
                      <div class="domain-title-wrap">
                        <span class="domain-dot" style="background:${color};"></span>
                        <span class="domain-name">${name}</span>
                        <span class="domain-fraction">${stat.correct}/${stat.total}</span>
                        ${isWeak ? '<span class="domain-weak-pill">Needs review</span>' : ''}
                      </div>
                      <div class="domain-score-wrap">
                        <span class="domain-diff" style="color:${isWeak ? '#EF4444' : '#10B981'};">${isWeak ? '-4%' : '+3%'}</span>
                        <span class="domain-pct">${topicPct}%</span>
                      </div>
                    </div>
                    <div class="progress-track" style="height:7px;background:rgba(255,255,255,0.06);">
                      <div class="progress-fill" style="width:${topicPct}%;background:${color};"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Pro Insight Box -->
            <div class="hasil-pro-insight">
              <span class="insight-star">✨</span>
              <span>Modul <strong>Inventory</strong> dan <strong>MRP</strong> menyumbang 8 dari 11 kesalahan Anda: kuasai topik automated valuation untuk menaikkan skor ke <strong>89%</strong>.</span>
            </div>
          </div>
        </div>

        <!-- Right: Mistake Analysis & Smart Recovery CTA -->
        <div class="hasil-col-recovery">
          <div class="hasil-card-container">
            <div class="hasil-card-header">
              <div>
                <h2 class="hasil-card-title">Mistake Analysis & Smart Recovery</h2>
                <div class="hasil-card-sub">Top 3 soal prioritas tinggi untuk dipelajari</div>
              </div>
            </div>

            <div class="hasil-mistake-list">
              <div class="hasil-mistake-item">
                <div class="mistake-head">
                  <span class="mistake-id">Q14</span>
                  <span class="mistake-title">Stored Compute Margin Field</span>
                  <span class="mistake-tag">Accounting</span>
                </div>
                <div class="mistake-desc">
                  Recomputed margin field on invoice lines non-stored: compute @api.depends missing.
                </div>
                <div class="mistake-actions">
                  <a href="#quiz-accounting" class="btn-mistake-tool">👁️ Review Soal</a>
                  <a href="#audiobook" class="btn-mistake-tool">🎧 Audio Recap</a>
                </div>
              </div>

              <div class="hasil-mistake-item">
                <div class="mistake-head">
                  <span class="mistake-id">Q28</span>
                  <span class="mistake-title">Landed Cost Stock Interim</span>
                  <span class="mistake-tag" style="color:#F59E0B;border-color:rgba(245,158,11,0.3);">Inventory</span>
                </div>
                <div class="mistake-desc">
                  AVCO revaluation journal posting after landed cost allocation.
                </div>
                <div class="mistake-actions">
                  <a href="#quiz-inventory" class="btn-mistake-tool">👁️ Review Soal</a>
                  <a href="#audiobook" class="btn-mistake-tool">🎧 Audio Recap</a>
                </div>
              </div>

              <div class="hasil-mistake-item">
                <div class="mistake-head">
                  <span class="mistake-id">Q42</span>
                  <span class="mistake-title">Multi-Step Route Sequencing</span>
                  <span class="mistake-tag" style="color:#F59E0B;border-color:rgba(245,158,11,0.3);">Inventory</span>
                </div>
                <div class="mistake-desc">
                  Multi-step receipt push rule vs pull rule execution order.
                </div>
                <div class="mistake-actions">
                  <a href="#quiz-inventory" class="btn-mistake-tool">👁️ Review Soal</a>
                  <a href="#audiobook" class="btn-mistake-tool">🎧 Audio Recap</a>
                </div>
              </div>
            </div>

            <!-- Glowing Recovery Quiz CTA Card -->
            <div class="hasil-recovery-cta-card">
              <div class="cta-badge">⚡ SMART RECOVERY</div>
              <div class="cta-title">Luncurkan 10 Soal Latihan Kelemahan</div>
              <div class="cta-meta">Fokus: Inventory · MRP · Estimasi 9 menit</div>
              <a href="#exam-play?mode=review" class="btn-start-recovery">
                Mulai Recovery Quiz Sekarang →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach PDF export mock handler
  container.querySelector('#btn-export-pdf')?.addEventListener('click', () => {
    window.print();
  });
}
