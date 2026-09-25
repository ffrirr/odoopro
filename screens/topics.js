// screens/topics.js: Official Curriculum & Modules Directory (Mobile & Desktop Widescreen)
import { TOPICS, QUESTIONS } from '../data.js';
import { state } from '../app.js';

export function renderTopics(container) {
  let activeFilter = 'all'; // 'all', 'high', 'review', 'completed'
  let searchQuery = '';

  const domainWeights = {
    sales: { weight: 22, audio: 8, flashcards: 16, tags: ['Pipeline', 'Quotations', 'Sales Teams', 'Pricelists'], icon: '📈' },
    accounting: { weight: 24, audio: 10, flashcards: 24, tags: ['Journals', 'Taxes', 'Reconcile', 'Anglo-Saxon'], icon: '💵' },
    inventory: { weight: 20, audio: 9, flashcards: 20, tags: ['Warehouses', 'Routes', 'Lots/Serial', 'AVCO'], icon: '📦' },
    purchase: { weight: 14, audio: 5, flashcards: 14, tags: ['RFQ', 'Vendor Bills', '3-Way Match', 'Dropship'], icon: '🛒' },
    mrp: { weight: 12, audio: 6, flashcards: 12, tags: ['BoM', 'Work Orders', 'Routing', 'Capacity'], icon: '🏭' },
    studio: { weight: 8, audio: 4, flashcards: 8, tags: ['Studio', 'Groups', 'Record Rules', 'Automation'], icon: '⚙️' }
  };

  function render() {
    const stats = state.getOverallStats();
    const overallPct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 64;

    // Filter topics
    let filteredTopics = TOPICS.filter(t => {
      const info = domainWeights[t.id] || { weight: 10, tags: [] };
      const m = state.getTopicMastery(t.id);

      if (activeFilter === 'high' && info.weight < 20) return false;
      if (activeFilter === 'review' && m.pct >= 70 && m.attempted > 0) return false;
      if (activeFilter === 'completed' && m.pct < 70) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = t.nama.toLowerCase().includes(query);
        const matchesTags = info.tags.some(tag => tag.toLowerCase().includes(query));
        if (!matchesName && !matchesTags) return false;
      }
      return true;
    });

    container.innerHTML = `
      <div class="app-container topics-desktop-wrapper">
        <!-- Blueprint Header -->
        <div class="topics-header">
          <div class="topics-title-area">
            <h1 class="topics-main-title">Odoo 19 Certification Curriculum</h1>
            <p class="topics-subtitle">Cakupan Blueprint Ujian Resmi Pearson VUE Odoo 19 Functional</p>
          </div>

          <div class="topics-header-toolbar">
            <div class="topics-search-wrap">
              <span class="search-icon">🔍</span>
              <input type="text" id="topics-search-input" class="topics-search-input" placeholder="Cari modul atau topik... (/)" value="${searchQuery}">
            </div>
            <div class="topics-filter-group">
              <button class="topic-pill ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">Semua Domain (${TOPICS.length})</button>
              <button class="topic-pill ${activeFilter === 'high' ? 'active' : ''}" data-filter="high">Bobot Tinggi (≥20%)</button>
              <button class="topic-pill ${activeFilter === 'review' ? 'active' : ''}" data-filter="review">Perlu Latihan</button>
              <button class="topic-pill ${activeFilter === 'completed' ? 'active' : ''}" data-filter="completed">Tuntas</button>
            </div>
          </div>
        </div>

        <!-- Hero Metrics Bar -->
        <div class="topics-hero-bar">
          <div class="hero-progress-block">
            <div class="hero-prog-label-row">
              <span class="hero-prog-title">Overall Curriculum Progress</span>
              <span class="hero-prog-pct">${overallPct}%</span>
            </div>
            <div class="progress-track" style="height:8px;background:rgba(255,255,255,0.06);margin-top:6px;">
              <div class="progress-fill" style="width:${overallPct}%;background:linear-gradient(90deg, #714B67, #00D2D3);"></div>
            </div>
            <div class="hero-prog-sub">12 dari 19 bab diselesaikan siklus ini</div>
          </div>

          <div class="hero-metric-tile">
            <div class="metric-icon-wrap" style="color:#00D2D3;">🎯</div>
            <div class="metric-info">
              <div class="metric-num">${stats.correct}/${QUESTIONS.length}</div>
              <div class="metric-sub">Questions Mastered</div>
            </div>
          </div>

          <div class="hero-metric-tile">
            <div class="metric-icon-wrap" style="color:#714B67;">🎧</div>
            <div class="metric-info">
              <div class="metric-num">4.8h</div>
              <div class="metric-sub">Audio Listened</div>
            </div>
          </div>
        </div>

        <!-- 3x2 Grid of Rich Module Cards -->
        <div class="curriculum-grid-3x2">
          ${filteredTopics.map(t => {
            const m = state.getTopicMastery(t.id);
            const info = domainWeights[t.id] || { weight: 15, audio: 5, flashcards: 10, tags: ['General'], icon: '📋' };
            const effectivePct = m.attempted > 0 ? m.pct : 0;
            const isWeak = effectivePct < 60;
            const barColor = effectivePct >= 80 ? '#10B981' : effectivePct >= 60 ? '#00D2D3' : '#F59E0B';

            return `
              <div class="curriculum-card">
                <div class="card-head">
                  <div class="card-icon-title">
                    <span class="card-domain-icon">${info.icon}</span>
                    <div>
                      <h3 class="card-title">${t.nama}</h3>
                      <div class="card-weight-tag">${info.weight}% exam weight</div>
                    </div>
                  </div>
                  ${isWeak ? '<span class="card-status-pill weak">Needs Focus</span>' : '<span class="card-status-pill on-track">On Track</span>'}
                </div>

                <!-- Sub-topic pills -->
                <div class="card-tags-row">
                  ${info.tags.map(tag => `<span class="card-subtopic-tag">${tag}</span>`).join('')}
                </div>

                <!-- Mastery Bar -->
                <div class="card-mastery-block">
                  <div class="card-mastery-row">
                    <span class="card-mastery-label">Mastery</span>
                    <span class="card-mastery-pct" style="color:${barColor};">${effectivePct}%</span>
                  </div>
                  <div class="progress-track" style="height:6px;background:rgba(255,255,255,0.06);">
                    <div class="progress-fill" style="width:${effectivePct}%;background:${barColor};"></div>
                  </div>
                </div>

                <!-- Footer details + CTA button -->
                <div class="card-footer-row">
                  <div class="card-resources">
                    <span title="Audio materi">🎧 ${info.audio} audio</span>
                    <span title="Flashcard">🗂️ ${info.flashcards} kartu</span>
                  </div>
                  <a href="#quiz-${t.id}" class="card-btn-action">
                    <span>${effectivePct >= 70 ? 'Review' : 'Lanjut'}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Event listeners
    container.querySelectorAll('.topic-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        render();
      });
    });

    const searchInput = container.querySelector('#topics-search-input');
    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
    });
  }

  render();
}
