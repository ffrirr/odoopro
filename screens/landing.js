// screens/landing.js: 100% True Brilliant.org Landing Page for OdooPro
import { TOPICS, QUESTIONS } from '../data.js';

export function renderLanding(container) {
  // Set body class for landing mode (hides sidebar & app header)
  document.body.classList.add('landing-mode');

  container.innerHTML = `
    <div class="brilliant-landing-wrap">
      <!-- 1. TOP NAVBAR (Brilliant Clean White) -->
      <nav class="brilliant-nav" aria-label="Navigasi Utama">
        <div class="brilliant-nav-inner">
          <div class="brilliant-brand">
            <span class="brilliant-spark">✦</span>
            <span class="brilliant-brand-text">Odoo<span class="brilliant-accent">Pro</span></span>
          </div>

          <div class="brilliant-nav-links">
            <a href="#topics" class="brilliant-nav-link">Kurikulum</a>
            <a href="#exam" class="brilliant-nav-link">Simulator Ujian</a>
            <a href="#tutor-section" class="brilliant-nav-link">AI Tutor</a>
            <a href="#audiobook" class="brilliant-nav-link">Audiobook (321 Soal)</a>
            <a href="#dashboard" class="brilliant-nav-link">Dashboard Siswa</a>
          </div>

          <div class="brilliant-nav-actions">
            <a href="#dashboard" class="brilliant-login-link">Masuk</a>
            <a href="#dashboard" class="brilliant-cta-pill">Mulai Gratis →</a>
          </div>
        </div>
      </nav>

      <!-- 2. HERO SECTION: ASYMMETRIC BRILLIANT SPLIT -->
      <section class="brilliant-hero-section">
        <div class="brilliant-hero-inner">
          <!-- Left Column: Copywriting & Actions -->
          <div class="brilliant-hero-left">
            <div class="brilliant-eyebrow-pill">
              <span class="brilliant-eyebrow-dot"></span>
              TUTOR PERSONAL SERTIFIKASI ODOO 19
            </div>
            <h1 class="brilliant-hero-h1">
              Tutor personal Anda untuk <br>
              ujian sertifikasi Odoo 19 <br>
              <span class="brilliant-hero-accent">dan penguasaan workflow.</span>
            </h1>
            <p class="brilliant-hero-sub">
              Pembelajaran visual dan interaktif dari konsep dasar hingga mahir. 
              Kuasai akuntansi double-entry, inventory perpetual, manufaktur, 
              hingga Python ORM dengan simulasi nyata, bukan sekadar menghafal.
            </p>

            <div class="brilliant-hero-cta-cluster">
              <a href="#dashboard" class="brilliant-primary-btn">
                Mulai Belajar Sekarang →
              </a>
              <a href="#topics" class="brilliant-ghost-btn">
                Jelajahi 321 Soal
              </a>
            </div>

            <div class="brilliant-hero-guarantees">
              <span>✓ 321 Soal Pearson VUE</span>
              <span>·</span>
              <span>✓ Umpan Balik Instan</span>
              <span>·</span>
              <span>✓ Gratis Diakses</span>
            </div>
          </div>

          <!-- Right Column: Interactive Problem Card (Functional live in browser!) -->
          <div class="brilliant-hero-right">
            <div class="brilliant-problem-card">
              <div class="problem-card-header">
                <span class="problem-topic-tag">AKUNTANSI ODOO 19</span>
                <span class="problem-step-badge">Tantangan 1</span>
              </div>

              <h3 class="problem-prompt-title">Bagaimana Odoo mencatat Penjualan Kredit?</h3>
              <p class="problem-prompt-sub">Lengkapi pasangan jurnal saat Customer Invoice divalidasi:</p>

              <!-- Entry Row 1 (Solved) -->
              <div class="problem-entry-row solved">
                <div class="entry-side debit">Debit</div>
                <div class="entry-account">Account Receivable (Piutang Usaha)</div>
                <div class="entry-amount">Rp 11.100.000</div>
              </div>

              <!-- Entry Row 2 (To Solve) -->
              <div class="problem-entry-row pending" id="pending-entry-row">
                <div class="entry-side credit">Kredit</div>
                <div class="entry-account">Product Sales & Tax Payable ...................</div>
                <div class="entry-amount" id="selected-amount-display">[ Pilih Nilai ]</div>
              </div>

              <!-- Interactive Choice Pills -->
              <div class="problem-choices-grid">
                <button type="button" class="problem-choice-pill" data-amount="Rp 10.000.000" data-correct="false">
                  Rp 10.000.000
                </button>
                <button type="button" class="problem-choice-pill correct-target" data-amount="Rp 11.100.000" data-correct="true">
                  Rp 11.100.000 ✓
                </button>
                <button type="button" class="problem-choice-pill" data-amount="Rp 12.210.000" data-correct="false">
                  Rp 12.210.000
                </button>
              </div>

              <!-- Live Instant Feedback Box -->
              <div class="problem-feedback-box" id="problem-feedback-box" style="display:none;">
                <span class="feedback-icon">🎉</span>
                <span class="feedback-text">Benar! Total Debit dan Kredit seimbang sempurna (Rp 11.100.000).</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. TRUST & AUTHORITY BAR -->
      <section class="brilliant-trust-bar">
        <div class="brilliant-trust-inner">
          <div class="trust-title">
            DIPERCAYA OLEH 1,200+ AKUNTAN, KONSULTAN ODOO & KAMPUS TERKEMUKA
          </div>
          <div class="trust-stats-grid">
            <div class="trust-stat-item">
              <span class="trust-val">321 Soal</span>
              <span class="trust-lbl">Odoo 19 & 18</span>
            </div>
            <div class="trust-stat-item">
              <span class="trust-val">88%</span>
              <span class="trust-lbl">Lulus Ujian Pertama</span>
            </div>
            <div class="trust-stat-item">
              <span class="trust-val">4.9 ★</span>
              <span class="trust-lbl">Ulasan Pengguna</span>
            </div>
            <div class="trust-stat-item">
              <span class="trust-val">100%</span>
              <span class="trust-lbl">Simulasi Visual</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. SECTION: MEET YOUR TUTOR -->
      <section class="brilliant-tutor-section" id="tutor-section">
        <div class="tutor-section-header">
          <div class="tutor-eyebrow">TUTOR VISUAL PRIBADI ANDA</div>
          <h2 class="tutor-title">Tutor Interaktif, Bukan Mesin Pencontek</h2>
          <p class="tutor-desc">
            OdooPro membimbing Anda memahami alur bisnis ERP langkah demi langkah dengan analogi visual, 
            bukan sekadar memberi jawaban mentah tanpa pemahaman prinsip fundamental.
          </p>
        </div>

        <div class="tutor-cards-grid">
          <div class="tutor-card">
            <div class="tutor-icon-box">💡</div>
            <h3 class="tutor-card-title">Bimbingan Bertahap Saat Macet</h3>
            <p class="tutor-card-desc">
              Ketika Anda keliru, AI tidak langsung membocorkan kunci jawaban, melainkan memberikan petunjuk teknis dan analogi jurnal bertahap.
            </p>
          </div>
          <div class="tutor-card">
            <div class="tutor-icon-box">⚙️</div>
            <h3 class="tutor-card-title">Simulasi Workflow Nyata</h3>
            <p class="tutor-card-desc">
              Pelajari siklus Purchase-to-Pay, Order-to-Cash, dan Manufacturing Routing secara visual layaknya beroperasi langsung di sistem Odoo asli.
            </p>
          </div>
          <div class="tutor-card">
            <div class="tutor-icon-box">🎯</div>
            <h3 class="tutor-card-title">Diagnosis Kesiapan Ujian</h3>
            <p class="tutor-card-desc">
              Algoritma mengevaluasi akurasi di setiap topik sehingga Anda tahu persis kapan siap mendaftar ujian sertifikasi Pearson VUE resmi (≥70%).
            </p>
          </div>
        </div>
      </section>

      <!-- 5. SECTION: CURRICULUM EXPLORER BENTO GRID -->
      <section class="brilliant-curriculum-section">
        <div class="curriculum-section-header">
          <div class="curriculum-eyebrow">JELAJAHI MATERI</div>
          <h2 class="curriculum-title">Dari Fondasi ERP Hingga Arsitektur Lanjutan</h2>
        </div>

        <div class="curriculum-tabs-row">
          <button class="curriculum-tab active">Semua Modul (321 Soal)</button>
          <a href="#quiz-accounting" class="curriculum-tab">Akuntansi & Finansial</a>
          <a href="#quiz-inventory" class="curriculum-tab">Inventory & Gudang</a>
          <a href="#quiz-mrp" class="curriculum-tab">Manufaktur & MRP</a>
          <a href="#topics" class="curriculum-tab">Technical & ORM</a>
        </div>

        <div class="curriculum-grid">
          <!-- Card 1 -->
          <div class="curriculum-card">
            <div class="curriculum-card-top">
              <span class="curriculum-tag popular">Paling Populer</span>
              <span class="curriculum-count">85 Latihan</span>
            </div>
            <h3 class="curriculum-card-title">Akuntansi & Finansial Odoo 19</h3>
            <p class="curriculum-card-desc">
              Chart of Accounts, Jurnal Otomatis, Rekonsiliasi Bank, Anglo-Saxon COGS, dan Pelaporan Pajak.
            </p>
            <a href="#quiz-accounting" class="curriculum-card-cta">Mulai Topik Ini →</a>
          </div>

          <!-- Card 2 -->
          <div class="curriculum-card">
            <div class="curriculum-card-top">
              <span class="curriculum-tag crucial">Krusial</span>
              <span class="curriculum-count">72 Latihan</span>
            </div>
            <h3 class="curriculum-card-title">Inventory, Multi-Warehouse & Barcode</h3>
            <p class="curriculum-card-desc">
              Penerimaan 3-Langkah, Multi-Company Routing, Reordering Rules, dan Real-time Valuation.
            </p>
            <a href="#quiz-inventory" class="curriculum-card-cta">Mulai Topik Ini →</a>
          </div>

          <!-- Card 3 -->
          <div class="curriculum-card">
            <div class="curriculum-card-top">
              <span class="curriculum-tag advanced">Lanjutan</span>
              <span class="curriculum-count">58 Latihan</span>
            </div>
            <h3 class="curriculum-card-title">Manufaktur, BOM & Work Centers</h3>
            <p class="curriculum-card-desc">
              Bill of Materials Multi-Level, Subcontracting, Work Order Routing, dan Cost Calculation.
            </p>
            <a href="#quiz-mrp" class="curriculum-card-cta">Mulai Topik Ini →</a>
          </div>

          <!-- Card 4 -->
          <div class="curriculum-card">
            <div class="curriculum-card-top">
              <span class="curriculum-tag technical">Teknikal</span>
              <span class="curriculum-count">56 Latihan</span>
            </div>
            <h3 class="curriculum-card-title">Python ORM, Model & QWeb Report</h3>
            <p class="curriculum-card-desc">
              Field dependencies, compute inverse, security ACL, record rules, dan template printout PDF.
            </p>
            <a href="#topics" class="curriculum-card-cta">Mulai Topik Ini →</a>
          </div>
        </div>
      </section>

      <!-- 6. SECTION: TESTIMONIALS -->
      <section class="brilliant-testimonials-section">
        <div class="testi-header">
          <div class="testi-eyebrow">CERITA KELULUSAN</div>
          <h2 class="testi-title">Dicintai oleh Konsultan, Akuntan, dan Developer</h2>
        </div>

        <div class="testi-cards-grid">
          <div class="testi-card">
            <p class="testi-quote">“Format soal interaktif OdooPro sangat mirip dengan ujian sertifikasi resmi Pearson VUE. Saya lulus Odoo 19 dengan skor 86% pada kesempatan pertama.”</p>
            <div class="testi-author">
              <div class="testi-name">Budi Santoso</div>
              <div class="testi-role">Senior ERP Consultant · Jakarta</div>
            </div>
          </div>
          <div class="testi-card">
            <p class="testi-quote">“Penjelasan di balik penyeimbangan jurnal akuntansi dan Anglo-Saxon di sini jauh lebih jelas daripada membaca dokumentasi tebal ratusan halaman.”</p>
            <div class="testi-author">
              <div class="testi-name">Siti Rahmawati, Ak.</div>
              <div class="testi-role">Accounting Lead · Surabaya</div>
            </div>
          </div>
          <div class="testi-card">
            <p class="testi-quote">“Fitur Audiobook Studio sangat membantu saat sedang macet di jalan. Konsep ORM dan workflow Odoo jadi nempel permanen di kepala.”</p>
            <div class="testi-author">
              <div class="testi-name">David Pratama</div>
              <div class="testi-role">Odoo Technical Developer · Bandung</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. SECTION: HIGH IMPACT CLOSING BANNER -->
      <section class="brilliant-closing-section">
        <div class="brilliant-closing-card">
          <div class="closing-card-left">
            <h2 class="closing-title">Tutor terbaik yang pernah Anda miliki sudah ada di sini.</h2>
            <p class="closing-sub">Bergabunglah dengan ribuan profesional yang lulus sertifikasi Odoo resmi dengan rasa percaya diri penuh.</p>
          </div>
          <div class="closing-card-right">
            <a href="#dashboard" class="closing-cta-btn">Mulai Belajar Sekarang →</a>
          </div>
        </div>
      </section>

      <!-- 8. FOOTER -->
      <footer class="brilliant-footer">
        <div class="footer-inner">
          <div class="footer-brand">
            <span class="footer-logo">✦ Odoo<span style="color:#29CC57;">Pro</span></span>
            <p class="footer-tagline">Platform simulasi sertifikasi dan pembelajaran visual Odoo 19.</p>
          </div>
          <div class="footer-links">
            <a href="#dashboard">Workspace</a>
            <a href="#topics">Learning Paths</a>
            <a href="#exam">Practice Exams</a>
            <a href="#audiobook">Audio Studio</a>
          </div>
        </div>
      </footer>
    </div>
  `;

  // Attach interactive logic to the Problem Card
  const pills = container.querySelectorAll('.problem-choice-pill');
  const amountDisplay = container.querySelector('#selected-amount-display');
  const feedbackBox = container.querySelector('#problem-feedback-box');
  const pendingRow = container.querySelector('#pending-entry-row');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('selected', 'correct', 'wrong'));
      pill.classList.add('selected');
      const amt = pill.getAttribute('data-amount');
      const isCorrect = pill.getAttribute('data-correct') === 'true';

      if (amountDisplay) amountDisplay.textContent = amt;

      if (isCorrect) {
        pill.classList.add('correct');
        if (pendingRow) {
          pendingRow.classList.remove('wrong');
          pendingRow.classList.add('correct');
        }
        if (feedbackBox) {
          feedbackBox.style.display = 'flex';
          feedbackBox.className = 'problem-feedback-box success';
          feedbackBox.innerHTML = `
            <span class="feedback-icon">🎉</span>
            <span class="feedback-text">Benar! Total Debit dan Kredit seimbang sempurna (${amt}).</span>
          `;
        }
      } else {
        pill.classList.add('wrong');
        if (pendingRow) {
          pendingRow.classList.remove('correct');
          pendingRow.classList.add('wrong');
        }
        if (feedbackBox) {
          feedbackBox.style.display = 'flex';
          feedbackBox.className = 'problem-feedback-box error';
          feedbackBox.innerHTML = `
            <span class="feedback-icon">⚠️</span>
            <span class="feedback-text">Belum seimbang! Debit Rp 11.100.000 harus sama dengan Kredit. Coba lagi.</span>
          `;
        }
      }
    });
  });
}
