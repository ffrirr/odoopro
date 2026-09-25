// screens/dashboard.js: Simple Minimalist Dashboard based on pen.dev OdooPro Simple
import { QUESTIONS, TOPICS } from '../data.js';
import { state } from '../app.js';

export function renderDashboard(container) {
  const stats = state.getOverallStats();
  const streak = state.getStreak();
  const weakTopics = state.getWeakTopics();
  const dueReviews = state.getDueReviews();
  const history = state.getHistory();

  const totalQuestions = QUESTIONS.length;
  const attempted = stats.attempted || 0;
  const accuracy = stats.pct || 0;

  // Calculate readiness score (weighted accuracy + completion)
  const completionRate = Math.min(100, Math.round((attempted / totalQuestions) * 100));
  const readiness = Math.min(100, Math.round((accuracy * 0.6) + (completionRate * 0.4)));

  // Tryouts passed vs total
  const tryoutsPassed = history.filter(h => (h.pct || 0) >= 70).length;
  const tryoutsTotal = history.length;

  // Active topic for "Lanjut Belajar"
  const activeTopic = weakTopics.length > 0 ? weakTopics[0] : TOPICS[0];

  // Priority modules
  const priorityTopics = TOPICS.slice(0, 4).map(t => {
    const m = state.getTopicMastery(t.id);
    return { ...t, ...m };
  });

  container.innerHTML = `
    <div class="app-container simple-dashboard-container">
      <!-- 1. Simple Header -->
      <header class="simple-dash-header" aria-label="Profil Pengguna">
        <div class="simple-greeting-wrap">
          <h1 class="simple-greeting-title">Hai Feri</h1>
          <div class="simple-greeting-sub">Odoo 19 Functional</div>
        </div>
        <div class="simple-streak-pill" title="Konsistensi Belajar">
          <span class="simple-streak-fire">🔥</span>
          <span class="simple-streak-days">${streak} hari</span>
        </div>
        <div class="simple-desktop-exam-badge">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span class="simple-exam-date">16 Oktober 2026</span>
          <span class="simple-exam-sep">·</span>
          <span class="simple-exam-days">21 hari lagi</span>
        </div>
      </header>

      <!-- 2. Simple Readiness Hero -->
      <section class="simple-readiness-hero" aria-label="Kesiapan Ujian">
        <div class="simple-hero-top-row">
          <div class="simple-hero-score-wrap">
            <div class="simple-hero-eyebrow">KESIAPAN UJIAN</div>
            <div class="simple-hero-score-row">
              <div class="simple-hero-score">${readiness}%</div>
              <div class="simple-hero-label">Siap</div>
            </div>
          </div>

          <!-- Desktop Hero CTA -->
          <a href="#quiz-${activeTopic.id}" class="simple-primary-cta desktop-only-cta" aria-label="Lanjut belajar modul ${activeTopic.nama}">
            <span>Lanjut Belajar: ${activeTopic.nama}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div class="simple-progress-wrap">
          <div class="simple-progress-track">
            <div class="simple-progress-fill" style="width: ${Math.min(100, Math.max(4, readiness))}%;"></div>
            <div class="simple-target-marker" title="Target lulus 70%"></div>
          </div>
          <div class="simple-progress-labels">
            <span class="simple-label-muted">${totalQuestions} bank soal terverifikasi</span>
            <span class="simple-label-target">Target lulus 70%</span>
          </div>
        </div>
      </section>

      <!-- 3. Mobile Primary CTA Button -->
      <a href="#quiz-${activeTopic.id}" class="simple-primary-cta mobile-only-cta" aria-label="Lanjut belajar modul ${activeTopic.nama}">
        <span>Lanjut Belajar: ${activeTopic.nama}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>

      <!-- 4. Desktop 3-Card Stat Summary (Visible on Desktop) -->
      <section class="simple-desktop-stats" aria-label="Statistik Ujian">
        <div class="simple-stat-box">
          <div class="simple-stat-label">Soal Dikuasai</div>
          <div class="simple-stat-val">${attempted}/${totalQuestions}</div>
          <div class="simple-stat-sub">${completionRate}% dari bank soal</div>
        </div>

        <div class="simple-stat-box">
          <div class="simple-stat-label">Akurasi Rata-rata</div>
          <div class="simple-stat-val">${accuracy}%</div>
          <div class="simple-stat-sub">${accuracy >= 70 ? 'Melewati ambang lulus' : 'Target lulus 70%'}</div>
        </div>

        <div class="simple-stat-box">
          <div class="simple-stat-label">Tryout Lulus</div>
          <div class="simple-stat-val">${tryoutsPassed}/${tryoutsTotal || 0}</div>
          <div class="simple-stat-sub">${tryoutsPassed > 0 ? `${tryoutsPassed} tryout berhasil lulus` : 'Mulai tryout pertama'}</div>
        </div>
      </section>

      <!-- 5. Feature Cards (Mobile 3-Column Grid) -->
      <section class="simple-features-grid" aria-label="Fitur Utama">
        <a href="#exam-play?mode=standard" class="simple-feature-card">
          <div class="simple-feature-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              <path d="m9 14 2 2 4-4"></path>
            </svg>
          </div>
          <div class="simple-feature-body">
            <div class="simple-feature-title">Simulasi Ujian</div>
            <div class="simple-feature-sub">60 soal</div>
          </div>
        </a>

        <a href="#flashcards" class="simple-feature-card">
          <div class="simple-feature-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
              <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
              <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
            </svg>
          </div>
          <div class="simple-feature-body">
            <div class="simple-feature-title">Flashcards</div>
            <div class="simple-feature-sub">${dueReviews.length > 0 ? `${dueReviews.length} due` : 'Kartu hafalan'}</div>
          </div>
        </a>

        <a href="#audiobook" class="simple-feature-card">
          <div class="simple-feature-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
          </div>
          <div class="simple-feature-body">
            <div class="simple-feature-title">Audiobook</div>
            <div class="simple-feature-sub">Audio modul</div>
          </div>
        </a>
      </section>

      <!-- 6. Bottom Split: Modul Prioritas + Desktop Aksi Cepat -->
      <div class="simple-bottom-split">
        <!-- Modul Prioritas -->
        <section class="simple-priority-section" aria-label="Modul Prioritas">
          <div class="simple-section-head">
            <h2 class="simple-section-title">Modul Prioritas</h2>
            <a href="#topics" class="simple-section-link">Semua</a>
          </div>

          <div class="simple-module-list">
            ${priorityTopics.map(t => `
              <a href="#quiz-${t.id}" class="simple-module-row" style="text-decoration:none;">
                <div class="simple-module-info">
                  <span class="simple-module-name">${t.nama}</span>
                  <span class="simple-module-pct">${t.pct}%</span>
                </div>
                <div class="simple-module-track">
                  <div class="simple-module-fill" style="width: ${Math.max(4, t.pct)}%;"></div>
                </div>
              </a>
            `).join('')}
          </div>
        </section>

        <!-- Desktop Aksi Cepat (Visible on Desktop) -->
        <section class="simple-quick-actions-desktop" aria-label="Aksi Cepat">
          <h2 class="simple-section-title">Aksi Cepat</h2>
          <div class="simple-actions-list">
            <a href="#exam-play?mode=standard" class="simple-action-row" style="text-decoration:none;">
              <div class="simple-action-left">
                <div class="simple-action-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    <path d="m9 14 2 2 4-4"></path>
                  </svg>
                </div>
                <div class="simple-action-info">
                  <div class="simple-action-name">Simulasi Ujian</div>
                  <div class="simple-action-sub">60 soal · 90 menit</div>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="simple-action-chevron">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>

            <a href="#flashcards" class="simple-action-row" style="text-decoration:none;">
              <div class="simple-action-left">
                <div class="simple-action-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                  </svg>
                </div>
                <div class="simple-action-info">
                  <div class="simple-action-name">Flashcards</div>
                  <div class="simple-action-sub">${dueReviews.length > 0 ? `${dueReviews.length} kartu due` : 'Kartu hafalan review'}</div>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="simple-action-chevron">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>

            <a href="#audiobook" class="simple-action-row" style="text-decoration:none;">
              <div class="simple-action-left">
                <div class="simple-action-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                  </svg>
                </div>
                <div class="simple-action-info">
                  <div class="simple-action-name">Audiobook Studio</div>
                  <div class="simple-action-sub">Bab 4: Inventory Valuation · 24 mnt</div>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="simple-action-chevron">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  `;
}
