// screens/progress.js — Detailed Mastery Analytics & Interactive Question Bank Explorer
import { QUESTIONS, TOPICS } from '../data.js';
import { state, showToast } from '../app.js';

export function renderProgress(container) {
  let activeFilter = 'ragu'; // 'all', 'yakin', 'ragu', 'salah', 'belum'
  let activeTopic = 'all';
  let searchQuery = '';
  let expandedId = null;

  function updateView() {
    const allState = state.getAll();
    const history = state.getHistory();
    const dueReviews = state.getDueReviews();

    let masteredCount = 0;
    let raguCount = 0;
    let salahCount = 0;
    let unattemptedCount = 0;

    QUESTIONS.forEach(q => {
      const s = allState[q.id];
      if (!s || s.attempts === 0) {
        unattemptedCount++;
      } else if (s.status === 'correct' && s.confidence === 'yakin') {
        masteredCount++;
      } else if (s.confidence === 'ragu') {
        raguCount++;
      } else {
        salahCount++;
      }
    });

    const needReviewTotal = raguCount + salahCount;
    const readinessPct = Math.round((masteredCount / QUESTIONS.length) * 100);

    // Filter questions list
    const filteredQuestions = QUESTIONS.filter(q => {
      const s = allState[q.id];
      
      // Filter by confidence status
      if (activeFilter === 'yakin') {
        if (!s || s.attempts === 0 || s.status !== 'correct' || s.confidence !== 'yakin') return false;
      } else if (activeFilter === 'ragu') {
        if (!s || s.attempts === 0 || s.confidence !== 'ragu') return false;
      } else if (activeFilter === 'salah') {
        if (!s || s.attempts === 0 || (s.status === 'correct' && s.confidence === 'yakin') || s.confidence === 'ragu') return false;
      } else if (activeFilter === 'belum') {
        if (s && s.attempts > 0) return false;
      }

      // Filter by topic
      if (activeTopic !== 'all' && q.topic !== activeTopic) return false;

      // Filter by search query
      if (searchQuery.trim()) {
        const qText = (q.soal + ' ' + q.pilihan.join(' ') + ' ' + (q.referensi?.topikSpesifik || '')).toLowerCase();
        if (!qText.includes(searchQuery.toLowerCase())) return false;
      }

      return true;
    });

    container.innerHTML = `
      <div class="app-container">
        <h1 class="section-title">Progress & Bank Soal</h1>
        <p class="section-subtitle">Analisis kesiapan ujian & grouping penguasaan materi Odoo 19</p>

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

          <!-- 3-Pillar Quick Counters (Clickable) -->
          <div style="display:grid;grid-template-columns:repeat(4, minmax(0, 1fr));gap:var(--space-2);text-align:center;">
            <div class="btn-stat-filter ${activeFilter === 'yakin' ? 'selected' : ''}" data-filter="yakin" style="padding:var(--space-2);background:var(--color-paper-4);border-radius:var(--radius-sm);cursor:pointer;border:1px solid ${activeFilter === 'yakin' ? 'var(--color-correct)' : 'transparent'};">
              <div style="font-family:var(--font-mono);font-weight:700;font-size:var(--text-sm);color:var(--color-correct);">${masteredCount}</div>
              <div style="font-size:10px;color:var(--color-ink-3);">🟢 Yakin</div>
            </div>
            <div class="btn-stat-filter ${activeFilter === 'ragu' ? 'selected' : ''}" data-filter="ragu" style="padding:var(--space-2);background:var(--color-paper-4);border-radius:var(--radius-sm);cursor:pointer;border:1px solid ${activeFilter === 'ragu' ? 'var(--color-warning)' : 'transparent'};">
              <div style="font-family:var(--font-mono);font-weight:700;font-size:var(--text-sm);color:var(--color-warning);">${raguCount}</div>
              <div style="font-size:10px;color:var(--color-ink-3);">🟡 Ragu</div>
            </div>
            <div class="btn-stat-filter ${activeFilter === 'salah' ? 'selected' : ''}" data-filter="salah" style="padding:var(--space-2);background:var(--color-paper-4);border-radius:var(--radius-sm);cursor:pointer;border:1px solid ${activeFilter === 'salah' ? 'var(--color-wrong)' : 'transparent'};">
              <div style="font-family:var(--font-mono);font-weight:700;font-size:var(--text-sm);color:var(--color-wrong);">${salahCount}</div>
              <div style="font-size:10px;color:var(--color-ink-3);">🔴 Tebak/Salah</div>
            </div>
            <div class="btn-stat-filter ${activeFilter === 'belum' ? 'selected' : ''}" data-filter="belum" style="padding:var(--space-2);background:var(--color-paper-4);border-radius:var(--radius-sm);cursor:pointer;border:1px solid ${activeFilter === 'belum' ? 'var(--color-ink-2)' : 'transparent'};">
              <div style="font-family:var(--font-mono);font-weight:700;font-size:var(--text-sm);color:var(--color-ink-3);">${unattemptedCount}</div>
              <div style="font-size:10px;color:var(--color-ink-3);">⚪ Belum</div>
            </div>
          </div>
        </div>

        <!-- Spaced Repetition Due Alert -->
        ${dueReviews.length > 0 ? `
          <div class="card" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-6);border-color:var(--color-warning);background:var(--color-warning-bg);">
            <div>
              <div style="font-weight:600;font-size:var(--text-sm);color:var(--color-warning);">Jadwal Review Spaced Repetition</div>
              <div style="font-size:var(--text-xs);color:var(--color-ink-2);">${dueReviews.length} soal jatuh tempo hari ini agar tidak lupa.</div>
            </div>
            <a href="#exam-play?mode=review" class="btn btn-primary" style="font-size:var(--text-xs);padding:var(--space-2) var(--space-4);text-decoration:none;white-space:nowrap;">
              Mulai Review
            </a>
          </div>
        ` : ''}

        <!-- QUESTION EXPLORER & GROUPING SECTION -->
        <div style="margin-bottom:var(--space-8);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-3);flex-wrap:wrap;gap:var(--space-2);">
            <div>
              <h2 class="section-title" style="font-size:var(--text-lg);margin-bottom:2px;">Bank Soal & Pengelompokan</h2>
              <div style="font-size:var(--text-xs);color:var(--color-ink-3);">Klik soal untuk melihat kunci jawaban & referensi resmi Odoo</div>
            </div>
            ${filteredQuestions.length > 0 ? `
              <button id="btn-train-filtered" class="btn btn-primary" style="font-size:var(--text-xs);padding:var(--space-2) var(--space-3);">
                ▶ Latih ${filteredQuestions.length} Soal Ini
              </button>
            ` : ''}
          </div>

          <!-- Filter Pills Group -->
          <div class="filter-pills">
            <button class="filter-pill ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">Semua (${QUESTIONS.length})</button>
            <button class="filter-pill pill-yakin ${activeFilter === 'yakin' ? 'active' : ''}" data-filter="yakin">🟢 Yakin (${masteredCount})</button>
            <button class="filter-pill pill-ragu ${activeFilter === 'ragu' ? 'active' : ''}" data-filter="ragu">🟡 Ragu (${raguCount})</button>
            <button class="filter-pill pill-salah ${activeFilter === 'salah' ? 'active' : ''}" data-filter="salah">🔴 Tebak/Salah (${salahCount})</button>
            <button class="filter-pill ${activeFilter === 'belum' ? 'active' : ''}" data-filter="belum">⚪ Belum Dicoba (${unattemptedCount})</button>
          </div>

          <!-- Filter Toolbar (Topic + Search) -->
          <div style="display:flex;gap:var(--space-2);margin-bottom:var(--space-4);flex-wrap:wrap;">
            <select id="filter-topic-select" style="background:var(--color-paper-2);color:var(--color-ink);border:1px solid var(--color-border);padding:8px 12px;border-radius:var(--radius-md);font-size:var(--text-xs);flex:1;min-width:140px;">
              <option value="all" ${activeTopic === 'all' ? 'selected' : ''}>Semua Modul (${QUESTIONS.length})</option>
              ${TOPICS.map(t => `<option value="${t.id}" ${activeTopic === t.id ? 'selected' : ''}>${t.nama} (${t.soalCount})</option>`).join('')}
            </select>
            <input type="text" id="search-input" placeholder="Cari soal / topik..." value="${searchQuery}" style="background:var(--color-paper-2);color:var(--color-ink);border:1px solid var(--color-border);padding:8px 12px;border-radius:var(--radius-md);font-size:var(--text-xs);flex:2;min-width:180px;">
          </div>

          <!-- Question Cards Accordion List -->
          <div class="q-explorer-list">
            ${filteredQuestions.length > 0 ? filteredQuestions.slice(0, 100).map(q => {
              const s = allState[q.id];
              let badgeClass = 'badge-belum';
              let badgeText = 'Belum';
              if (s && s.attempts > 0) {
                if (s.status === 'correct' && s.confidence === 'yakin') {
                  badgeClass = 'badge-yakin'; badgeText = 'Yakin';
                } else if (s.confidence === 'ragu') {
                  badgeClass = 'badge-ragu'; badgeText = 'Ragu';
                } else {
                  badgeClass = 'badge-salah'; badgeText = 'Tebak/Salah';
                }
              }

              const isExpanded = expandedId === q.id;
              const topicObj = TOPICS.find(t => t.id === q.topic);
              const topicName = topicObj ? topicObj.nama : q.topic;

              return `
                <div class="q-explorer-item">
                  <div class="q-explorer-header" data-qid="${q.id}">
                    <span class="q-explorer-badge ${badgeClass}">${badgeText}</span>
                    <div style="flex:1;">
                      <div style="display:flex;align-items:center;gap:var(--space-2);margin-bottom:2px;">
                        <span style="font-size:10px;font-weight:700;color:var(--color-accent);font-family:var(--font-mono);">Q${q.id}</span>
                        <span style="font-size:10px;color:var(--color-ink-3);">· ${topicName}</span>
                      </div>
                      <div style="font-size:var(--text-sm);font-weight:600;color:var(--color-ink);line-height:1.4;">
                        ${q.soal}
                      </div>
                    </div>
                    <span style="font-size:var(--text-xs);color:var(--color-ink-3);transform:${isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};transition:transform 0.2s;">▼</span>
                  </div>

                  ${isExpanded ? `
                    <div class="q-explorer-body">
                      <!-- Options -->
                      <div style="margin-top:var(--space-2);">
                        ${q.pilihan.map((opt, i) => {
                          const isCorrect = i === q.jawaban;
                          return `
                            <div class="q-explorer-option ${isCorrect ? 'correct' : ''}">
                              <span style="font-family:var(--font-mono);font-weight:700;flex-shrink:0;">${isCorrect ? '✓' : String.fromCharCode(65 + i)}.</span>
                              <span style="flex:1;">${opt}</span>
                            </div>
                          `;
                        }).join('')}
                      </div>

                      ${q.penjelasan ? `
                        <div style="font-size:var(--text-xs);color:var(--color-ink-2);line-height:1.5;background:var(--color-paper-3);padding:var(--space-2) var(--space-3);border-radius:var(--radius-sm);margin-top:var(--space-3);">
                          💡 <strong>Penjelasan:</strong> ${q.penjelasan}
                        </div>
                      ` : ''}

                      <!-- Reference Links -->
                      ${q.referensi ? `
                        <div class="ref-card" style="margin-top:var(--space-3);">
                          <div class="ref-card-title">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            <span>Referensi: ${q.referensi.topikSpesifik}</span>
                          </div>
                          <div class="ref-btn-row">
                            <a href="${q.referensi.docsUrl}" target="_blank" rel="noopener noreferrer" class="ref-btn ref-btn-docs">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                              <span>Baca Docs Odoo 19</span>
                            </a>
                            <a href="${q.referensi.videoUrl}" target="_blank" rel="noopener noreferrer" class="ref-btn ref-btn-video">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                              <span>Tonton Video Tutorial</span>
                            </a>
                          </div>
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('') : `
              <div class="empty-state" style="padding:var(--space-6) var(--space-4);">
                <p style="font-size:var(--text-sm);">Tidak ada pertanyaan yang sesuai dengan filter saat ini.</p>
              </div>
            `}
            ${filteredQuestions.length > 100 ? `
              <div style="text-align:center;padding:var(--space-3);font-size:var(--text-xs);color:var(--color-ink-3);">
                Menampilkan 100 dari ${filteredQuestions.length} soal. Gunakan pencarian untuk menyaring lebih spesifik.
              </div>
            ` : ''}
          </div>
        </div>

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

    // Event listeners
    container.querySelectorAll('.btn-stat-filter, .filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        updateView();
      });
    });

    const topicSelect = container.querySelector('#filter-topic-select');
    if (topicSelect) {
      topicSelect.addEventListener('change', (e) => {
        activeTopic = e.target.value;
        updateView();
      });
    }

    const searchInput = container.querySelector('#search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        // debounce or instant render
        const items = container.querySelectorAll('.q-explorer-item');
        // re-render after short timeout
        clearTimeout(searchInput._timer);
        searchInput._timer = setTimeout(() => updateView(), 250);
      });
    }

    container.querySelectorAll('.q-explorer-header').forEach(header => {
      header.addEventListener('click', () => {
        const qid = parseInt(header.dataset.qid, 10);
        expandedId = expandedId === qid ? null : qid;
        updateView();
      });
    });

    container.querySelector('#btn-train-filtered')?.addEventListener('click', () => {
      const qIds = filteredQuestions.map(q => q.id);
      if (qIds.length === 0) return;
      sessionStorage.setItem('odoopro_custom_pool', JSON.stringify(qIds));
      window.location.hash = '#quiz-custom';
    });

    container.querySelector('#btn-reset-data')?.addEventListener('click', () => {
      if (confirm('Apakah kamu yakin ingin mereset seluruh progress latihan dan riwayat ujian? Tindakan ini tidak dapat dibatalkan.')) {
        localStorage.removeItem('odoopro_state');
        localStorage.removeItem('odoopro_history');
        localStorage.removeItem('odoopro_streak');
        state._cache = null;
        state.updateHeader();
        showToast('Progress berhasil direset', 'info');
        updateView();
      }
    });
  }

  updateView();
}
