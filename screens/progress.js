// screens/progress.js — Detailed Mastery Analytics & History
import { QUESTIONS, TOPICS } from '../data.js';
import { state, showToast } from '../app.js';

export function renderProgress(container) {
  const overall = state.getOverallStats();
  const allState = state.getAll();
  const history = state.getHistory();
  const dueReviews = state.getDueReviews();

  let masteredCount = 0;
  let needReviewCount = 0;
  let unattemptedCount = 0;

  QUESTIONS.forEach(q => {
    const s = allState[q.id];
    if (!s || s.attempts === 0) {
      unattemptedCount++;
    } else if (s.status === 'correct' && s.confidence === 'yakin') {
      masteredCount++;
    } else {
      needReviewCount++;
    }
  });

  const readinessPct = Math.round((masteredCount / QUESTIONS.length) * 100);

  container.innerHTML = `
    <div class="app-container">
      <h1 class="section-title">Progress & Penguasaan</h1>
      <p class="section-subtitle">Analisis kesiapan ujian sertifikasi Odoo 19</p>

      <!-- Readiness Index Card -->
      <div class="card" style="margin-bottom:var(--space-6);background:linear-gradient(135deg, var(--color-paper-2), var(--color-paper-3));">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:var(--space-4);">
          <div>
            <div style="font-size:var(--text-xs);text-transform:uppercase;letter-spacing:0.08em;color:var(--color-ink-3);">Readiness Index</div>
            <div style="font-size:var(--text-3xl);font-family:var(--font-mono);font-weight:800;color:var(--color-accent);margin-top:2px;">
              ${readinessPct}%
            </div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:var(--text-xs);color:var(--color-ink-3);">Dikuasai Penuh</div>
            <div style="font-family:var(--font-mono);font-size:var(--text-base);font-weight:700;color:var(--color-correct);">
              ${masteredCount} / ${QUESTIONS.length}
            </div>
          </div>
        </div>

        <div class="progress-track" style="height:8px;margin-bottom:var(--space-4);">
          <div class="progress-fill" style="width:${readinessPct}%;"></div>
        </div>

        <!-- 3-Pillar Breakdown -->
        <div style="display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:var(--space-2);text-align:center;">
          <div style="padding:var(--space-2);background:var(--color-paper-4);border-radius:var(--radius-sm);">
            <div style="font-family:var(--font-mono);font-weight:700;font-size:var(--text-sm);color:var(--color-correct);">${masteredCount}</div>
            <div style="font-size:10px;color:var(--color-ink-3);">Hafal Yakin</div>
          </div>
          <div style="padding:var(--space-2);background:var(--color-paper-4);border-radius:var(--radius-sm);">
            <div style="font-family:var(--font-mono);font-weight:700;font-size:var(--text-sm);color:var(--color-warning);">${needReviewCount}</div>
            <div style="font-size:10px;color:var(--color-ink-3);">Perlu Review</div>
          </div>
          <div style="padding:var(--space-2);background:var(--color-paper-4);border-radius:var(--radius-sm);">
            <div style="font-family:var(--font-mono);font-weight:700;font-size:var(--text-sm);color:var(--color-ink-3);">${unattemptedCount}</div>
            <div style="font-size:10px;color:var(--color-ink-3);">Belum Coba</div>
          </div>
        </div>
      </div>

      <!-- Spaced Repetition Due Alert -->
      ${dueReviews.length > 0 ? `
        <div class="card" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-6);border-color:var(--color-warning);background:var(--color-warning-bg);">
          <div>
            <div style="font-weight:600;font-size:var(--text-sm);color:var(--color-warning);">Jadwal Review Spaced Repetition</div>
            <div style="font-size:var(--text-xs);color:var(--color-ink-2);">${dueReviews.length} soal sudah jatuh tempo untuk diulang hari ini agar tidak lupa.</div>
          </div>
          <a href="#exam-play?mode=review" class="btn btn-primary" style="font-size:var(--text-xs);padding:var(--space-2) var(--space-4);text-decoration:none;white-space:nowrap;">
            Mulai Review
          </a>
        </div>
      ` : ''}

      <!-- Topic Mastery Detailed List -->
      <div style="margin-bottom:var(--space-6);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-3);">
          <h2 class="section-title" style="font-size:var(--text-lg);margin-bottom:0;">Penguasaan per Topik</h2>
          <span style="font-size:var(--text-xs);color:var(--color-ink-3);">${TOPICS.length} Modul</span>
        </div>

        <div class="mastery-list">
          ${TOPICS.map(t => {
            const m = state.getTopicMastery(t.id);
            const barColor = m.attempted === 0 ? 'var(--color-paper-4)' : m.pct >= 80 ? 'var(--color-correct)' : m.pct >= 60 ? 'var(--color-warning)' : 'var(--color-wrong)';
            return `
              <div class="mastery-row">
                <a href="#quiz-${t.id}" class="mastery-label" style="text-decoration:none;color:inherit;cursor:pointer;" title="Latihan topik ${t.nama}">
                  ${t.nama}
                </a>
                <div class="mastery-bar">
                  <div class="mastery-fill" style="width:${m.attempted > 0 ? m.pct : 0}%;background:${barColor};"></div>
                </div>
                <span class="mastery-pct">${m.attempted > 0 ? `${m.pct}%` : '—'}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Full Exam History -->
      <div>
        <h2 class="section-title" style="font-size:var(--text-lg);margin-bottom:var(--space-3);">Riwayat Ujian & Kuis</h2>
        ${history.length > 0 ? `
          <div style="display:flex;flex-direction:column;gap:var(--space-2);">
            ${history.map(h => {
              const d = new Date(h.date);
              const dateStr = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
              const scoreColor = h.pct >= 80 ? 'var(--color-correct)' : h.pct >= 70 ? 'var(--color-warning)' : 'var(--color-wrong)';
              return `
                <div class="card card-sm" style="display:flex;justify-content:space-between;align-items:center;">
                  <div>
                    <div style="font-size:var(--text-sm);font-weight:600;color:var(--color-ink);">${h.mode}</div>
                    <div style="font-size:var(--text-xs);color:var(--color-ink-3);">${dateStr} · ${h.score}/${h.total} Benar</div>
                  </div>
                  <div style="font-family:var(--font-mono);font-size:var(--text-base);font-weight:700;color:${scoreColor};">
                    ${h.pct}%
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : `
          <div class="empty-state" style="padding:var(--space-6) var(--space-4);">
            <p style="font-size:var(--text-sm);">Belum ada riwayat ujian tercatat.</p>
          </div>
        `}
      </div>

      <!-- Danger Zone / Data Management -->
      <div style="margin-top:var(--space-10);padding-top:var(--space-4);border-top:1px solid var(--color-border);text-align:center;">
        <button id="btn-reset-data" class="btn btn-ghost" style="font-size:var(--text-xs);color:var(--color-ink-3);border-color:transparent;">
          🗑️ Reset Semua Data Progress
        </button>
      </div>
    </div>
  `;

  container.querySelector('#btn-reset-data')?.addEventListener('click', () => {
    if (confirm('Apakah kamu yakin ingin mereset seluruh progress latihan dan riwayat ujian? Tindakan ini tidak dapat dibatalkan.')) {
      localStorage.removeItem('odoopro_state');
      localStorage.removeItem('odoopro_history');
      localStorage.removeItem('odoopro_streak');
      state._cache = null;
      state.updateHeader();
      showToast('Progress berhasil direset', 'info');
      renderProgress(container);
    }
  });
}
