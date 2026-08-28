// screens/hasil.js — Exam & Quiz Results Screen
import { TOPICS } from '../data.js';

export function renderHasil(container, params) {
  const mode = params.get('mode') || 'Quiz';
  const score = parseInt(params.get('score') || '0', 10);
  const total = parseInt(params.get('total') || '0', 10);
  const pct = parseInt(params.get('pct') || '0', 10);
  
  let breakdown = null;
  try {
    const raw = params.get('breakdown');
    if (raw) breakdown = JSON.parse(raw);
  } catch (e) {
    breakdown = null;
  }

  const isPassed = pct >= 70;
  const statusColor = pct >= 80 ? 'var(--color-correct)' : pct >= 70 ? 'var(--color-warning)' : 'var(--color-wrong)';

  container.innerHTML = `
    <div class="app-container">
      <!-- Result Banner -->
      <div class="card" style="text-align:center;padding:var(--space-8) var(--space-4);margin-bottom:var(--space-6);border-color:${statusColor};">
        <div style="font-size:var(--text-xs);text-transform:uppercase;letter-spacing:0.1em;color:var(--color-ink-3);margin-bottom:var(--space-2);">
          ${mode} Selesai
        </div>
        
        <div style="font-family:var(--font-mono);font-size:var(--text-4xl);font-weight:800;color:${statusColor};line-height:1;margin-bottom:var(--space-2);">
          ${pct}%
        </div>

        <div style="font-size:var(--text-base);font-weight:600;color:var(--color-ink);margin-bottom:var(--space-3);">
          ${isPassed ? '🎉 Lulus Standar Sertifikasi!' : '💪 Perlu Sedikit Latihan Lagi'}
        </div>

        <p style="font-size:var(--text-xs);color:var(--color-ink-2);max-width:380px;margin:0 auto var(--space-4);">
          ${isPassed 
            ? `Selamat! Kamu menjawab ${score} dari ${total} soal dengan benar (ambang kelulusan Odoo adalah 70%).`
            : `Kamu menjawab ${score} dari ${total} soal dengan benar. Ambang kelulusan Odoo adalah 70%. Gunakan fitur Review untuk memperkuat topik lemah.`}
        </p>

        <div style="display:inline-flex;align-items:center;gap:var(--space-4);padding:var(--space-2) var(--space-4);background:var(--color-paper-3);border-radius:var(--radius-full);font-family:var(--font-mono);font-size:var(--text-xs);">
          <span>Benar: <strong style="color:var(--color-correct);">${score}</strong></span>
          <span>Salah: <strong style="color:var(--color-wrong);">${total - score}</strong></span>
          <span>Total: <strong>${total}</strong></span>
        </div>
      </div>

      <!-- Topic Breakdown (if exam mode) -->
      ${breakdown && Object.keys(breakdown).length > 0 ? `
        <div style="margin-bottom:var(--space-6);">
          <h2 class="section-title" style="font-size:var(--text-lg);margin-bottom:var(--space-3);">Performa per Modul</h2>
          <div class="mastery-list">
            ${Object.entries(breakdown).map(([tId, stat]) => {
              const topicObj = TOPICS.find(t => t.id === tId);
              const name = topicObj ? topicObj.nama : tId;
              const topicPct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
              const barColor = topicPct >= 80 ? 'var(--color-correct)' : topicPct >= 70 ? 'var(--color-warning)' : 'var(--color-wrong)';
              return `
                <div class="mastery-row">
                  <span class="mastery-label" title="${name}">${name}</span>
                  <div class="mastery-bar">
                    <div class="mastery-fill" style="width:${topicPct}%;background:${barColor};"></div>
                  </div>
                  <span class="mastery-pct">${stat.correct}/${stat.total} (${topicPct}%)</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Action Buttons -->
      <div style="display:flex;flex-direction:column;gap:var(--space-3);margin-top:var(--space-6);">
        ${total - score > 0 ? `
          <a href="#exam-play?mode=review" class="btn btn-primary" style="text-decoration:none;text-align:center;">
            🔄 Latih Soal Salah / Ragu
          </a>
        ` : ''}
        <a href="#exam" class="btn btn-ghost" style="text-decoration:none;text-align:center;">
          🎯 Ulangi / Mode Lain
        </a>
        <a href="#dashboard" class="btn btn-ghost" style="text-decoration:none;text-align:center;">
          🏠 Kembali ke Dashboard
        </a>
      </div>
    </div>
  `;
}
