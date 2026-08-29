// screens/dashboard.js — Dashboard Overview
import { QUESTIONS, TOPICS } from '../data.js';
import { state } from '../app.js';

export function renderDashboard(container) {
  const stats = state.getOverallStats();
  const streak = state.getStreak();
  const xp = state.getTotalXP();
  const weakTopics = state.getWeakTopics().slice(0, 3);
  const dueReviews = state.getDueReviews();
  const history = state.getHistory().slice(0, 5);

  const masteredCount = QUESTIONS.filter(q => {
    const s = state.getQuestion(q.id);
    return s.status === 'correct' && s.confidence === 'yakin';
  }).length;

  container.innerHTML = `
    <div class="app-container">
      <div style="margin-bottom:var(--space-6);">
        <h1 style="font-size:var(--text-2xl);margin-bottom:var(--space-1);">Sertifikasi Odoo 19</h1>
        <p style="color:var(--color-ink-3);font-size:var(--text-sm);">${QUESTIONS.length} soal · ${TOPICS.length} topik · Spaced repetition</p>
      </div>

      <!-- Stats -->
      <div class="stat-grid" style="margin-bottom:var(--space-6);">
        <div class="stat-card">
          <div class="stat-value">${stats.attempted}</div>
          <div class="stat-label">Dicoba</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color:var(--color-correct);">${stats.pct}%</div>
          <div class="stat-label">Akurasi</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color:var(--color-warning);">${streak}</div>
          <div class="stat-label">Streak</div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div style="display:flex;flex-direction:column;gap:var(--space-2);margin-bottom:var(--space-6);">
        <a href="#exam-play?mode=quick" class="btn btn-primary" style="text-decoration:none;text-align:center;">
          Mulai Latihan Acak (120 soal)
        </a>
        ${dueReviews.length > 0 ? `
          <a href="#exam-play?mode=review" class="btn btn-ghost" style="text-decoration:none;text-align:center;">
            Review Hari Ini (${dueReviews.length} soal)
          </a>
        ` : ''}
      </div>

      <!-- Weak Topics -->
      ${weakTopics.length > 0 ? `
        <div style="margin-bottom:var(--space-6);">
          <h2 class="section-title" style="font-size:var(--text-lg);">Topik Terlemah</h2>
          <div class="mastery-list">
            ${weakTopics.map(t => `
              <a href="#quiz-${t.id}" class="mastery-row" style="text-decoration:none;color:inherit;cursor:pointer;">
                <span class="mastery-label">${t.nama}</span>
                <div class="mastery-bar">
                  <div class="mastery-fill" style="width:${t.pct}%;background:${t.pct < 50 ? 'var(--color-wrong)' : 'var(--color-warning)'};"></div>
                </div>
                <span class="mastery-pct">${t.pct}%</span>
              </a>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Recent Activity -->
      ${history.length > 0 ? `
        <div>
          <h2 class="section-title" style="font-size:var(--text-lg);">Aktivitas Terakhir</h2>
          <div style="display:flex;flex-direction:column;gap:var(--space-2);">
            ${history.map(h => {
              const d = new Date(h.date);
              const dateStr = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
              return `
                <div class="card card-sm" style="display:flex;justify-content:space-between;align-items:center;">
                  <div>
                    <div style="font-size:var(--text-sm);font-weight:600;">${h.mode || 'Quiz'}</div>
                    <div style="font-size:var(--text-xs);color:var(--color-ink-3);">${dateStr}</div>
                  </div>
                  <div style="font-family:var(--font-mono);font-size:var(--text-sm);font-weight:700;color:${h.pct >= 80 ? 'var(--color-correct)' : h.pct >= 60 ? 'var(--color-warning)' : 'var(--color-wrong)'};">
                    ${h.pct}%
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : `
        <div class="empty-state">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          <p style="font-size:var(--text-sm);">Belum ada aktivitas. Mulai quiz pertamamu!</p>
        </div>
      `}
    </div>
  `;
}
