// screens/topics.js — Topic Browser
import { TOPICS, QUESTIONS } from '../data.js';
import { state } from '../app.js';

export function renderTopics(container) {
  container.innerHTML = `
    <div class="app-container">
      <h1 class="section-title">Topik</h1>
      <p class="section-subtitle">${TOPICS.length} modul · ${QUESTIONS.length} soal total</p>

      <div class="topic-grid">
        ${TOPICS.map(t => {
          const m = state.getTopicMastery(t.id);
          const fillColor = m.pct >= 80 ? 'var(--color-correct)' : m.pct >= 50 ? 'var(--color-warning)' : m.pct > 0 ? 'var(--color-wrong)' : 'var(--color-paper-4)';
          return `
            <a href="#quiz-${t.id}" class="topic-card">
              <div class="topic-name">${t.nama}</div>
              <div class="topic-count">${t.soalCount} soal${m.attempted > 0 ? ` · ${m.correct}/${m.attempted}` : ''}</div>
              <div class="topic-mastery">
                <div class="progress-track">
                  <div class="progress-fill" style="width:${m.attempted > 0 ? m.pct : 0}%;background:${fillColor};"></div>
                </div>
              </div>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
