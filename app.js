// app.js: OdooPro Router, State Manager & Gamification
import { renderDashboard } from './screens/dashboard.js';
import { renderTopics } from './screens/topics.js';
import { renderQuiz } from './screens/quiz.js';
import { renderExam, renderExamQuiz } from './screens/exam.js';
import { renderFlashcards } from './screens/flashcard.js';
import { renderHasil } from './screens/hasil.js';
import { renderProgress } from './screens/progress.js';
import { renderAudiobook } from './screens/audiobook.js';
import { audioPlayer } from './screens/audio_player.js';
import { QUESTIONS, TOPICS } from './data.js';

// ===== TOAST =====
export function showToast(message, type = 'info') {
  const c = document.getElementById('toast-container');
  if (!c) return;
  const t = document.createElement('div');
  t.className = `toast-item toast-${type}`;
  t.textContent = message;
  c.appendChild(t);
  setTimeout(() => {
    t.style.animation = 'toastOut 0.2s forwards';
    setTimeout(() => t.remove(), 200);
  }, 3000);
}

// ===== STATE =====
const STATE_KEY = 'odoopro_state';
const HISTORY_KEY = 'odoopro_history';
const STREAK_KEY = 'odoopro_streak';

export const state = {
  _cache: null,

  getAll() {
    if (this._cache) return this._cache;
    try {
      this._cache = JSON.parse(localStorage.getItem(STATE_KEY) || '{}');
    } catch { this._cache = {}; }
    return this._cache;
  },

  save() {
    localStorage.setItem(STATE_KEY, JSON.stringify(this._cache || {}));
  },

  getQuestion(qId) {
    const all = this.getAll();
    return all[qId] || { status: null, confidence: null, correct: 0, attempts: 0, lastReviewed: null, nextReview: null, repetitions: 0 };
  },

  saveAnswer(qId, isCorrect, confidence) {
    const all = this.getAll();
    const prev = all[qId] || { correct: 0, attempts: 0, repetitions: 0 };
    const attempts = (prev.attempts || 0) + 1;
    const correct = (prev.correct || 0) + (isCorrect ? 1 : 0);
    const status = isCorrect ? 'correct' : 'wrong';
    const now = new Date().toISOString();

    // SM-2 simplified
    let interval, repetitions;
    if (!isCorrect || confidence === 'tebak') {
      interval = 1; repetitions = 0;
    } else if (confidence === 'ragu') {
      const rep = (prev.repetitions || 0);
      if (rep === 0) { interval = 1; repetitions = 1; }
      else if (rep === 1) { interval = 3; repetitions = 2; }
      else { interval = Math.round((prev.interval || 7) * 1.5); repetitions = rep + 1; }
    } else {
      const rep = (prev.repetitions || 0);
      if (rep === 0) { interval = 1; repetitions = 1; }
      else if (rep === 1) { interval = 3; repetitions = 2; }
      else if (rep === 2) { interval = 7; repetitions = 3; }
      else { interval = Math.round((prev.interval || 7) * 2.5); repetitions = rep + 1; }
    }

    const nextReview = new Date(Date.now() + interval * 86400000).toISOString();

    all[qId] = { status, confidence, correct, attempts, lastReviewed: now, nextReview, repetitions, interval };
    this._cache = all;
    this.save();
  },

  recordAnswer(qId, topic, isCorrect, confidence) {
    this.saveAnswer(qId, isCorrect, confidence);
  },

  getTopicMastery(topicId) {
    const all = this.getAll();
    const qs = QUESTIONS.filter(q => q.topic === topicId);
    if (qs.length === 0) return { total: 0, attempted: 0, correct: 0, pct: 0 };
    let attempted = 0, correct = 0;
    qs.forEach(q => {
      const s = all[q.id];
      if (s && s.attempts > 0) {
        attempted++;
        if (s.status === 'correct') correct++;
      }
    });
    return { total: qs.length, attempted, correct, pct: attempted > 0 ? Math.round((correct / attempted) * 100) : 0 };
  },

  getOverallStats() {
    const all = this.getAll();
    let attempted = 0, correct = 0;
    QUESTIONS.forEach(q => {
      const s = all[q.id];
      if (s && s.attempts > 0) {
        attempted++;
        if (s.status === 'correct') correct++;
      }
    });
    return { total: QUESTIONS.length, attempted, correct, pct: attempted > 0 ? Math.round((correct / attempted) * 100) : 0 };
  },

  getWeakTopics() {
    return TOPICS.map(t => ({ ...t, ...this.getTopicMastery(t.id) }))
      .filter(t => t.attempted > 0 && t.pct < 70)
      .sort((a, b) => a.pct - b.pct);
  },

  getDueReviews() {
    const all = this.getAll();
    const now = new Date().toISOString();
    return QUESTIONS.filter(q => {
      const s = all[q.id];
      return s && s.nextReview && s.nextReview <= now;
    });
  },

  // XP
  getTotalXP() {
    const all = this.getAll();
    let xp = 0;
    Object.values(all).forEach(s => {
      if (s.attempts > 0) xp += s.status === 'correct' ? 10 : 2;
    });
    return xp;
  },

  // Streak
  getStreak() {
    try {
      const data = JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":1,"lastDate":""}');
      const today = new Date().toDateString();
      if (data.lastDate === today) return data.count;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (data.lastDate === yesterday) {
        const c = data.count + 1;
        localStorage.setItem(STREAK_KEY, JSON.stringify({ count: c, lastDate: today }));
        return c;
      }
      localStorage.setItem(STREAK_KEY, JSON.stringify({ count: 1, lastDate: today }));
      return 1;
    } catch { return 1; }
  },

  recordActivity() {
    const today = new Date().toDateString();
    try {
      const data = JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":1,"lastDate":""}');
      if (data.lastDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        const count = data.lastDate === yesterday ? data.count + 1 : 1;
        localStorage.setItem(STREAK_KEY, JSON.stringify({ count, lastDate: today }));
      }
    } catch {
      localStorage.setItem(STREAK_KEY, JSON.stringify({ count: 1, lastDate: today }));
    }
  },

  // Exam history
  getHistory() {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
    catch { return []; }
  },

  addHistory(entry) {
    const h = this.getHistory();
    h.unshift({ ...entry, date: new Date().toISOString() });
    if (h.length > 20) h.length = 20;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(h));
  },

  updateHeader() {
    const xpEl = document.getElementById('xp-pill');
    const streakNum = document.getElementById('streak-num');
    const streakEl = document.getElementById('streak-pill');
    if (xpEl) xpEl.textContent = `${this.getTotalXP()} XP`;
    if (streakNum) streakNum.textContent = `${this.getStreak()}`;
    else if (streakEl) streakEl.textContent = `${this.getStreak()}`;
  }
};

// ===== ROUTER =====
function updateBottomNav(hash) {
  document.querySelectorAll('.bottom-nav .nav-tab, .sidebar-nav .sidebar-link').forEach(t => t.classList.remove('active'));
  let tab = 'dashboard';
  if (hash.startsWith('#topics') || hash.startsWith('#quiz-')) tab = 'topics';
  else if (hash.startsWith('#audiobook')) tab = 'audiobook';
  else if (hash.startsWith('#exam')) tab = 'exam';
  else if (hash.startsWith('#flashcard')) tab = 'flashcards';
  else if (hash.startsWith('#progress') || hash.startsWith('#hasil')) tab = 'progress';
  document.querySelector(`.bottom-nav [data-tab="${tab}"]`)?.classList.add('active');
  document.querySelector(`.sidebar-nav [data-tab="${tab}"]`)?.classList.add('active');
}

// ===== MINI PLAYER SYNC =====
function updateMiniPlayer() {
  const mini = document.getElementById('audio-mini-player');
  if (!mini) return;
  const hash = window.location.hash || '';
  const isAudioScreen = hash.startsWith('#audiobook');
  const s = audioPlayer.getState();

  if (s.isPlaying && !isAudioScreen && s.currentQuestion) {
    mini.style.display = 'flex';
    const titleEl = document.getElementById('mini-player-title');
    const subEl = document.getElementById('mini-player-sub');
    const toggleBtn = document.getElementById('mini-player-toggle');

    if (titleEl) titleEl.textContent = `Soal #${s.currentQuestion.id}`;
    if (subEl) subEl.textContent = `${s.currentTopic ? s.currentTopic.nama : ''} · ${s.currentQuestion.soal.slice(0, 40)}…`;
    if (toggleBtn) {
      toggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1"></rect>
          <rect x="14" y="4" width="4" height="16" rx="1"></rect>
        </svg>
      `;
    }
  } else if (!s.isPlaying && !isAudioScreen && s.currentQuestion && mini.style.display === 'flex') {
    const toggleBtn = document.getElementById('mini-player-toggle');
    if (toggleBtn) {
      toggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
    }
  } else {
    mini.style.display = 'none';
  }
}

function initMiniPlayer() {
  const miniInfo = document.getElementById('mini-player-info');
  const miniToggle = document.getElementById('mini-player-toggle');
  const miniClose = document.getElementById('mini-player-close');

  if (miniInfo) {
    miniInfo.addEventListener('click', () => {
      window.location.hash = '#audiobook';
    });
  }

  if (miniToggle) {
    miniToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      audioPlayer.togglePlay();
    });
  }

  if (miniClose) {
    miniClose.addEventListener('click', (e) => {
      e.stopPropagation();
      if (audioPlayer.isPlaying) audioPlayer.togglePlay();
      const mini = document.getElementById('audio-mini-player');
      if (mini) mini.style.display = 'none';
    });
  }

  audioPlayer.on('play', updateMiniPlayer);
  audioPlayer.on('pause', updateMiniPlayer);
  audioPlayer.on('change', updateMiniPlayer);
}

function router() {
  const hash = window.location.hash || '#dashboard';
  const app = document.getElementById('app');
  if (!app) return;

  updateBottomNav(hash);
  updateMiniPlayer();
  state.updateHeader();
  window.scrollTo({ top: 0, behavior: 'instant' });

  if (hash === '#dashboard' || hash === '' || hash === '#') {
    renderDashboard(app);
  } else if (hash === '#topics') {
    renderTopics(app);
  } else if (hash.startsWith('#quiz-')) {
    const topicId = hash.replace('#quiz-', '');
    renderQuiz(app, topicId);
  } else if (hash.startsWith('#audiobook')) {
    const params = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
    const topicId = params.get('topic') || null;
    const qId = params.get('q') || null;
    renderAudiobook(app, topicId, qId);
  } else if (hash === '#exam') {
    renderExam(app);
  } else if (hash.startsWith('#exam-play')) {
    const params = new URLSearchParams(hash.split('?')[1] || '');
    renderExamQuiz(app, params);
  } else if (hash === '#flashcards' || hash.startsWith('#flashcard')) {
    const topicId = hash.includes('-') ? hash.split('-').slice(1).join('-') : null;
    renderFlashcards(app, topicId);
  } else if (hash === '#progress') {
    renderProgress(app);
  } else if (hash.startsWith('#hasil')) {
    const params = new URLSearchParams(hash.split('?')[1] || '');
    renderHasil(app, params);
  } else {
    renderDashboard(app);
  }
}

// ===== INIT =====
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  initMiniPlayer();
  router();
  // Register service worker with auto-update
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      reg.update();
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showToast('Versi baru telah diperbarui!', 'success');
            }
          });
        }
      });
    }).catch(() => {});
  }
});
