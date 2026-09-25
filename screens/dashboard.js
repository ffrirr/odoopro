// screens/dashboard.js: Modern Dashboard Redesign based on pen.dev UI
import { QUESTIONS, TOPICS } from '../data.js';
import { state } from '../app.js';
import { audioPlayer } from './audio_player.js';

export function renderDashboard(container) {
  const stats = state.getOverallStats();
  const streak = state.getStreak();
  const xp = state.getTotalXP();
  const weakTopics = state.getWeakTopics().slice(0, 5);
  const dueReviews = state.getDueReviews();
  const history = state.getHistory().slice(0, 5);

  const totalQuestions = QUESTIONS.length;
  const attempted = stats.attempted || 0;
  const accuracy = stats.pct || 0;
  const remaining = Math.max(0, totalQuestions - attempted);

  // Calculate readiness score (weighted accuracy + completion)
  const completionRate = Math.min(100, Math.round((attempted / totalQuestions) * 100));
  const readiness = Math.min(100, Math.round((accuracy * 0.6) + (completionRate * 0.4)));

  // Ambang batas lulus Pearson VUE Odoo 19: 70%
  const gap = 70 - readiness;
  const gapText = gap > 0 ? `kurang ${gap} poin` : `siap lulus (+${Math.abs(gap)} poin)`;
  const isPassing = readiness >= 70;

  // Tryouts passed vs total
  const tryoutsPassed = history.filter(h => (h.pct || 0) >= 70).length;
  const tryoutsTotal = history.length;

  // Active or top topic for "Lanjut Belajar"
  const activeTopic = weakTopics.length > 0 ? weakTopics[0] : TOPICS[0];
  const activeTopicQuestions = QUESTIONS.filter(q => q.topic === activeTopic.id);
  const activeTopicMastery = state.getTopicMastery(activeTopic.id);
  const activeTopicAttempted = activeTopicMastery.attempted || 0;
  const activeTopicRemaining = Math.max(0, activeTopicQuestions.length - activeTopicAttempted);
  const activeTopicPct = activeTopicQuestions.length > 0 ? Math.round((activeTopicAttempted / activeTopicQuestions.length) * 100) : 0;

  // Fallback for weak topics list if user is new
  const displayedWeakTopics = weakTopics.length > 0 
    ? weakTopics 
    : TOPICS.slice(0, 4).map(t => ({ ...t, ...state.getTopicMastery(t.id) }));

  container.innerHTML = `
    <div class="app-container">
      <!-- 1. Hero Readiness Card (pen.dev Home v2 & Desktop specification) -->
      <section class="hero-readiness-card" aria-label="Status Kesiapan Ujian">
        <div class="hero-top-row">
          <div class="hero-score-block">
            <span class="hero-kicker">KESIAPAN UJIAN</span>
            <div class="hero-score-val">${readiness}%</div>
          </div>
          <div class="hero-countdown-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>21 hari lagi</span>
          </div>
        </div>

        <!-- Linear Gauge with 70% Pearson VUE Threshold Tick -->
        <div class="linear-gauge-wrap">
          <div class="linear-gauge-track">
            <div class="linear-gauge-fill" style="width: ${Math.min(100, Math.max(4, readiness))}%;"></div>
            <div class="threshold-tick" title="Batas lulus Pearson VUE: 70%">
              <div class="tick-line"></div>
            </div>
          </div>
          <div class="linear-gauge-legend">
            <span class="legend-threshold">Batas lulus Pearson VUE: 70%</span>
            <span class="legend-gap ${isPassing ? 'text-correct' : 'text-accent'}">${gapText}</span>
          </div>
        </div>

        <!-- 3-Metric Strip Footer -->
        <div class="hero-strip-metrics">
          <div class="strip-metric-item">
            <div class="strip-metric-val">${attempted}/${totalQuestions}</div>
            <div class="strip-metric-label">soal dikuasai</div>
          </div>
          <div class="strip-metric-divider"></div>
          <div class="strip-metric-item">
            <div class="strip-metric-val">${accuracy}%</div>
            <div class="strip-metric-label">akurasi rata-rata</div>
          </div>
          <div class="strip-metric-divider"></div>
          <div class="strip-metric-item">
            <div class="strip-metric-val">${tryoutsPassed}/${tryoutsTotal || 0}</div>
            <div class="strip-metric-label">try out lulus</div>
          </div>
        </div>
      </section>

      <!-- 2. Lanjut Belajar Action Banner -->
      <a href="#quiz-${activeTopic.id}" class="resume-session-banner" style="text-decoration:none;" aria-label="Lanjut belajar topik ${activeTopic.nama}">
        <div class="banner-play-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6 3 20 12 6 21 6 3"></polygon>
          </svg>
        </div>
        <div class="banner-info">
          <div class="banner-kicker">LANJUT BELAJAR</div>
          <div class="banner-title">${activeTopic.nama}</div>
          <div class="banner-progress-track">
            <div class="banner-progress-fill" style="width: ${Math.max(5, activeTopicPct)}%;"></div>
          </div>
          <div class="banner-sub">Soal ${activeTopicAttempted} dari ${activeTopicQuestions.length} (sisa ${activeTopicRemaining})</div>
        </div>
        <div class="banner-chevron">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </a>

      <!-- 3. Study Hub 4-Up Grid -->
      <section class="study-hub-grid" aria-label="Study Hub">
        <a href="#exam-play?mode=standard" class="hub-tile">
          <div class="hub-icon-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <polyline points="9 15 11 17 15 13"></polyline>
            </svg>
          </div>
          <div class="hub-tile-text">
            <div class="hub-tile-name">Mock Exam</div>
            <div class="hub-tile-sub">90 menit</div>
          </div>
        </a>

        <a href="#flashcards" class="hub-tile">
          <div class="hub-icon-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <div class="hub-tile-text">
            <div class="hub-tile-name">Flashcards</div>
            <div class="hub-tile-sub">${dueReviews.length > 0 ? `${dueReviews.length} kartu due` : '32 kartu'}</div>
          </div>
        </a>

        <a href="#audiobook" class="hub-tile">
          <div class="hub-icon-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
          </div>
          <div class="hub-tile-text">
            <div class="hub-tile-name">Audiobook</div>
            <div class="hub-tile-sub">24 menit</div>
          </div>
        </a>

        <a href="#topics" class="hub-tile">
          <div class="hub-icon-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </div>
          <div class="hub-tile-text">
            <div class="hub-tile-name">Topik Lemah</div>
            <div class="hub-tile-sub">${weakTopics.length > 0 ? `${weakTopics.length} topik` : '5 topik'}</div>
          </div>
        </a>
      </section>

      <!-- 4. Desktop 2-Column Responsive Body -->
      <div class="dashboard-desktop-layout">
        <div class="dash-col-left">
          <!-- Topik Lemah (Weak Topics Mastery) -->
          <section class="dashboard-section" aria-label="Topik Lemah">
            <div class="section-header-row">
              <h2 class="section-heading">Topik lemah</h2>
              <a href="#topics" class="section-link">Lihat semua</a>
            </div>

            <div class="weak-topics-card">
              ${displayedWeakTopics.map(t => {
                const colorClass = t.pct < 50 ? 'bar-red' : t.pct < 70 ? 'bar-amber' : 'bar-green';
                const qs = QUESTIONS.filter(q => q.topic === t.id);
                return `
                  <a href="#quiz-${t.id}" class="weak-topic-row" style="text-decoration:none;">
                    <div class="weak-topic-head">
                      <div class="weak-topic-names">
                        <span class="weak-topic-name">${t.nama}</span>
                        <span class="weak-topic-count">${t.attempted || 0} dari ${qs.length} soal</span>
                      </div>
                      <span class="weak-topic-pct ${colorClass}">${t.pct}%</span>
                    </div>
                    <div class="mastery-track">
                      <div class="mastery-indicator ${colorClass}" style="width: ${Math.max(5, t.pct)}%;"></div>
                    </div>
                  </a>
                `;
              }).join('')}
            </div>
          </section>
        </div>

        <div class="dash-col-right">
          <!-- Modern Audiobook Player Card (NO em dash, Bab 4: Inventory Valuation) -->
          <section class="dashboard-section" aria-label="Audiobook Player">
            <div class="audiobook-feature-card">
              <div class="af-top-row">
                <div class="af-cover-art">
                  <div class="af-cover-gradient">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                    </svg>
                  </div>
                </div>
                <div class="af-meta">
                  <div class="af-badge">🎧 AUDIOBOOK PEMBAHASAN</div>
                  <div class="af-title">Bab 4: Inventory Valuation</div>
                  <div class="af-subtitle">Odoo 19 Study Guide · 24 mnt</div>
                </div>
              </div>

              <!-- Dynamic Waveform Visualization -->
              <div class="waveform-container" aria-hidden="true">
                <div class="wave-bar played" style="height:12px;"></div>
                <div class="wave-bar played" style="height:18px;"></div>
                <div class="wave-bar played" style="height:26px;"></div>
                <div class="wave-bar played" style="height:14px;"></div>
                <div class="wave-bar played" style="height:22px;"></div>
                <div class="wave-bar played" style="height:30px;"></div>
                <div class="wave-bar played" style="height:18px;"></div>
                <div class="wave-bar played" style="height:24px;"></div>
                <div class="wave-bar played" style="height:16px;"></div>
                <div class="wave-bar played" style="height:28px;"></div>
                <div class="wave-bar played" style="height:20px;"></div>
                <div class="wave-bar played" style="height:14px;"></div>
                <div class="wave-bar played" style="height:26px;"></div>
                <div class="wave-bar" style="height:22px;"></div>
                <div class="wave-bar" style="height:16px;"></div>
                <div class="wave-bar" style="height:30px;"></div>
                <div class="wave-bar" style="height:18px;"></div>
                <div class="wave-bar" style="height:24px;"></div>
                <div class="wave-bar" style="height:12px;"></div>
                <div class="wave-bar" style="height:16px;"></div>
                <div class="wave-bar" style="height:22px;"></div>
                <div class="wave-bar" style="height:14px;"></div>
                <div class="wave-bar" style="height:18px;"></div>
                <div class="wave-bar" style="height:10px;"></div>
              </div>

              <!-- Time indicators -->
              <div class="af-time-row">
                <span>13:12</span>
                <span>-10:48</span>
              </div>

              <!-- Controls row -->
              <div class="af-controls-row">
                <button class="af-btn-pill speed-pill" id="dashboard-speed-toggle" title="Ubah Kecepatan">1.25x</button>
                
                <button class="af-btn-icon" id="dashboard-skip-back" title="Mundur 15 detik" aria-label="Mundur 15 detik">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"></path>
                  </svg>
                </button>

                <button class="af-play-primary" id="dashboard-audio-play" aria-label="Putar Audio" title="Putar / Jeda Audio">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </button>

                <button class="af-btn-icon" id="dashboard-skip-forward" title="Maju 15 detik" aria-label="Maju 15 detik">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M13 17l5-5-5-5M6 17l5-5-5-5"></path>
                  </svg>
                </button>

                <a href="#audiobook" class="af-btn-icon" title="Daftar Putar Audiobook" aria-label="Daftar Putar">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </a>
              </div>
            </div>
          </section>

          <!-- Riwayat Aktivitas Terakhir -->
          ${history.length > 0 ? `
            <section class="dashboard-section" aria-label="Aktivitas Terakhir">
              <div class="section-header-row">
                <h2 class="section-heading">Aktivitas Terakhir</h2>
              </div>
              <div class="history-list">
                ${history.map(h => {
                  const d = new Date(h.date);
                  const dateStr = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
                  const isHigh = h.pct >= 70;
                  const isMid = h.pct >= 50 && h.pct < 70;
                  return `
                    <div class="pro-card pro-card-sm history-row">
                      <div>
                        <div class="history-title">${h.mode || 'Latihan'}</div>
                        <div class="history-meta">${dateStr} · ${h.score || 0}/${h.total || 0} benar</div>
                      </div>
                      <div class="history-score-pill ${isHigh ? 'green' : isMid ? 'amber' : 'red'}">
                        ${h.pct}%
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </section>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  // Connect Audiobook Quick Player
  const audioPlayBtn = container.querySelector('#dashboard-audio-play');
  audioPlayBtn?.addEventListener('click', () => {
    // Play question #1 or current question
    audioPlayer.playQuestion(1);
    audioPlayBtn.classList.toggle('playing');
  });

  const speedToggle = container.querySelector('#dashboard-speed-toggle');
  let currentSpeed = 1.25;
  speedToggle?.addEventListener('click', () => {
    currentSpeed = currentSpeed === 1 ? 1.25 : currentSpeed === 1.25 ? 1.5 : currentSpeed === 1.5 ? 2.0 : 1;
    speedToggle.textContent = `${currentSpeed}x`;
    if (audioPlayer.sound) audioPlayer.sound.rate(currentSpeed);
  });
}
