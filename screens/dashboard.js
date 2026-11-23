// screens/dashboard.js: Bento Grid Edition (Adapted from Landfolio #11 Bento)
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

  // Priority modules with mastery status
  const priorityTopics = TOPICS.slice(0, 4).map(t => {
    const m = state.getTopicMastery(t.id);
    const pct = m.pct || 0;
    let badgeText = 'In Progress';
    let badgeClass = 'badge-progress';
    if (pct >= 70) {
      badgeText = 'Mastered';
      badgeClass = 'badge-mastered';
    } else if (pct > 0 && pct < 60) {
      badgeText = 'Needs Focus';
      badgeClass = 'badge-warning';
    }
    return { ...t, ...m, pct, badgeText, badgeClass };
  });

  // Soundwave mock heights
  const waveBars = [12, 24, 18, 32, 28, 16, 22, 36, 14, 26, 30, 20, 15, 28, 34, 18];

  container.innerHTML = `
    <div class="app-container bento-dashboard-container">
      <!-- 1. Header Bar -->
      <header class="bento-header" aria-label="Profil Pengguna">
        <div class="bento-greeting-wrap">
          <h1 class="bento-greeting-title">Hai Feri 👋</h1>
          <div class="bento-greeting-sub">Odoo 19 Functional Consultant Mastery</div>
        </div>
        <div class="bento-header-badges">
          <div class="bento-streak-pill" title="Konsistensi Belajar">
            <span class="bento-streak-fire">🔥</span>
            <span class="bento-streak-days">${streak} hari streak</span>
          </div>
          <div class="bento-exam-pill">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>Pearson VUE: 21 hari lagi</span>
          </div>
        </div>
      </header>

      <!-- 2. BENTO GRID SYSTEM (Landfolio #11 Apple-Style) -->
      <div class="bento-grid">
        
        <!-- CARD 1: Hero Main (Span 3) -->
        <article class="bento-card bento-hero-card span-3" aria-label="Hero Sertifikasi">
          <div class="bento-card-accent-top"></div>
          <div class="bento-hero-badge-row">
            <span class="bento-badge bento-badge-cyan">🎯 100% EXAM ALIGNED</span>
            <span class="bento-badge bento-badge-aubergine">OFFICIAL PREP</span>
          </div>
          <h2 class="bento-hero-headline">Kuasai Seluruh Skenario Fungsional Odoo 19</h2>
          <p class="bento-hero-desc">
            Uji pemahaman alur bisnis nyata: akuntansi perpetual FIFO/AVCO, landed cost, multi-step routing, BOM manufaktur, dan rekonsiliasi bank.
          </p>

          <div class="bento-hero-pills-row">
            <div class="bento-stat-chip">
              <span class="chip-val">${totalQuestions} Soal</span>
              <span class="chip-lbl">Bank Terverifikasi</span>
            </div>
            <div class="bento-stat-chip">
              <span class="chip-val">70% Skor</span>
              <span class="chip-lbl">Ambang Lulus Resmi</span>
            </div>
            <div class="bento-stat-chip">
              <span class="chip-val">6 Modul</span>
              <span class="chip-lbl">Kurikulum Lengkap</span>
            </div>
          </div>

          <div class="bento-hero-ctas">
            <a href="#exam-play?mode=standard" class="bento-btn bento-btn-primary" aria-label="Mulai simulasi tryout">
              <span>⚡ Simulasi Ujian Cepat</span>
            </a>
            <a href="#quiz-${activeTopic.id}" class="bento-btn bento-btn-secondary" aria-label="Lanjut belajar modul ${activeTopic.nama}">
              <span>Lanjut: ${activeTopic.nama} →</span>
            </a>
          </div>
        </article>

        <!-- CARD 2: Readiness Radar (Span 1) -->
        <article class="bento-card bento-readiness-card span-1" aria-label="Indeks Kesiapan">
          <div class="bento-card-label">INDEX KESIAPAN RIIL</div>
          <div class="bento-readiness-score-row">
            <div class="bento-big-score">${readiness}%</div>
            <div class="bento-score-meta">
              <span class="bento-score-tag ${readiness >= 70 ? 'text-success' : 'text-cyan'}">
                ${readiness >= 70 ? 'SIAP UJIAN ✅' : 'MENUJU SIAP 🎯'}
              </span>
              <span class="bento-score-target">Ambang: 70%</span>
            </div>
          </div>

          <div class="bento-progress-wrap">
            <div class="bento-progress-track">
              <div class="bento-progress-fill" style="width: ${Math.min(100, Math.max(4, readiness))}%;"></div>
              <div class="bento-target-marker" title="Target Lulus 70%"></div>
            </div>
          </div>

          <div class="bento-countdown-box">
            <div class="bento-cd-title">Voucher Pearson VUE Terjadwal</div>
            <div class="bento-cd-days">⏱️ Sisa 21 Hari Lagi Menuju Ujian</div>
            <div class="bento-cd-trend text-success">+5% akurasi dari evaluasi tryout</div>
          </div>
        </article>

        <!-- CARD 3: Spaced Repetition SM-2 (Span 1) -->
        <article class="bento-card bento-sm2-card span-1" aria-label="Spaced Repetition">
          <div class="bento-card-badge-row">
            <span class="bento-badge bento-badge-amber">SPACED REPETITION SM-2</span>
          </div>
          <div class="bento-card-val text-warning">${dueReviews.length} Kartu Due</div>
          <p class="bento-card-desc">
            Algoritma SuperMemo SM-2 melacak daya ingat dan menjadwalkan review adaptif tepat sebelum materi terlupakan.
          </p>
          <a href="#flashcards" class="bento-card-link text-warning" aria-label="Mulai sesi drill flashcard">
            <span>Mulai Sesi Drill 5 Menit →</span>
          </a>
        </article>

        <!-- CARD 4: Audiobook Studio (Span 1) -->
        <article class="bento-card bento-audio-card span-1" aria-label="Audiobook Studio">
          <div class="bento-card-badge-row">
            <span class="bento-badge bento-badge-cyan">AUDIOBOOK STUDIO</span>
          </div>
          <div class="bento-card-val">4.8 Jam Audio</div>
          <p class="bento-card-desc">
            Belajar on-the-go tanpa menatap layar saat commuting. Penjelasan konsep mendalam modul akuntansi & inventory.
          </p>
          <div class="bento-waveform-wrap">
            <div class="bento-waveform">
              ${waveBars.map(h => `<span class="wave-bar" style="height:${h}px"></span>`).join('')}
            </div>
            <a href="#audiobook" class="bento-card-link text-cyan" aria-label="Buka audiobook player">
              <span>▶ Play Bab 4</span>
            </a>
          </div>
        </article>

        <!-- CARD 5: Consistency Streak (Span 1) -->
        <article class="bento-card bento-streak-card span-1" aria-label="Konsistensi Belajar">
          <div class="bento-card-badge-row">
            <span class="bento-badge bento-badge-aubergine">KONSISTENSI BELAJAR</span>
          </div>
          <div class="bento-card-val text-warning">🔥 ${streak} Hari Streak</div>
          <p class="bento-card-desc">
            Komitmen belajar konsisten 15 menit setiap hari menaikkan peluang lulus sertifikasi hingga 3.2x lipat.
          </p>
          <div class="bento-streak-dots-row" title="Riwayat konsistensi 7 hari terakhir">
            ${['S', 'S', 'R', 'K', 'J', 'S', 'M'].map((d, i) => `
              <div class="bento-streak-dot ${i < 6 ? 'active' : 'today'}">
                <span>✓</span>
              </div>
            `).join('')}
          </div>
        </article>

        <!-- CARD 6: Interactive Exam Simulator Teaser (Span 2) -->
        <article class="bento-card bento-exam-card span-2" aria-label="Simulasi Ujian Realtime">
          <div class="bento-card-head-between">
            <h3 class="bento-card-title">Simulasi Ujian Realtime & Interaksi</h3>
            <span class="bento-timer-badge">⏱️ 47:35 Menit</span>
          </div>
          
          <div class="bento-question-snippet">
            <div class="bento-q-stem">
              Soal #14: Pada metode Automated Valuation FIFO Odoo 19, akun apa yang di-kredit saat Goods Receipt?
            </div>
            <div class="bento-options-demo">
              <div class="bento-opt-item default">
                <span class="opt-badge">A</span>
                <span class="opt-text">Accounts Payable (Vendor Liability)</span>
              </div>
              <div class="bento-opt-item selected">
                <span class="opt-badge">B</span>
                <span class="opt-text">Stock Interim Account (Received) — Terpilih ✓</span>
                <span class="opt-status text-success">BENAR 100%</span>
              </div>
              <div class="bento-opt-item hover">
                <span class="opt-badge">C</span>
                <span class="opt-text">Cost of Goods Sold (COGS)</span>
                <span class="opt-status text-cyan">HOVER STATE 👆</span>
              </div>
              <div class="bento-opt-item default">
                <span class="opt-badge">D</span>
                <span class="opt-text">Inventory Loss Account</span>
              </div>
            </div>
          </div>

          <div class="bento-exam-cta-row">
            <a href="#exam-play?mode=standard" class="bento-btn bento-btn-primary" aria-label="Mulai simulasi lengkap">
              <span>Buka Full Mock Exam 50 Soal →</span>
            </a>
          </div>
        </article>

        <!-- CARD 7: 4 Pillars Modules Mastery (Span 2) -->
        <article class="bento-card bento-modules-card span-2" aria-label="Penguasaan Modul">
          <div class="bento-card-head-between">
            <div>
              <h3 class="bento-card-title">Target Penguasaan 4 Pilar Modul</h3>
              <div class="bento-card-sub">Bobot penilaian resmi ujian Pearson VUE</div>
            </div>
            <a href="#topics" class="bento-section-link">Semua Modul →</a>
          </div>

          <div class="bento-modules-list">
            ${priorityTopics.map(t => `
              <a href="#quiz-${t.id}" class="bento-module-row" style="text-decoration:none;">
                <div class="bento-mod-info-row">
                  <div class="bento-mod-left">
                    <span class="bento-mod-name">${t.nama}</span>
                    <span class="bento-mod-badge ${t.badgeClass}">${t.badgeText}</span>
                  </div>
                  <span class="bento-mod-pct ${t.badgeClass}">${t.pct}%</span>
                </div>
                <div class="bento-mod-track">
                  <div class="bento-mod-fill ${t.badgeClass}" style="width: ${Math.max(4, t.pct)}%;"></div>
                </div>
              </a>
            `).join('')}
          </div>
        </article>

        <!-- CARD 8: Full-Width Bottom CTA Banner (Span 4) -->
        <article class="bento-card bento-cta-card span-4" aria-label="Panggilan Aksi">
          <div class="bento-cta-inner">
            <span class="bento-badge bento-badge-cyan">🎯 GARANSI KESIAPAN KELULUSAN 100%</span>
            <h2 class="bento-cta-title">Mulai Latihan Sekarang & Raih Gelar Konsultan Resmi</h2>
            <p class="bento-cta-sub">
              Akses 321 bank soal terverifikasi, simulator ujian Pearson VUE, dan audio modul lengkap.
            </p>
            <a href="#exam-play?mode=standard" class="bento-btn bento-btn-primary bento-btn-large" aria-label="Mulai sekarang gratis">
              <span>Mulai Belajar Sekarang (Gratis)</span>
            </a>
          </div>
        </article>

      </div>
    </div>
  `;
}
