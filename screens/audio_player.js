// screens/audio_player.js: Global Singleton Audio Engine & MediaSession Controller
import { QUESTIONS, TOPICS } from '../data.js';

const STORAGE_RATE_KEY = 'odoopro_audio_rate';
const STORAGE_AUTOPLAY_KEY = 'odoopro_audio_autoplay';
const STORAGE_VOLUME_KEY = 'odoopro_audio_volume';
const STORAGE_REPEAT_KEY = 'odoopro_audio_repeat';
const STORAGE_SHUFFLE_KEY = 'odoopro_audio_shuffle';

class AudioPlayerEngine {
  constructor() {
    const isBrowser = typeof window !== 'undefined';
    this.audio = isBrowser && typeof Audio !== 'undefined' ? new Audio() : {
      addEventListener: () => {},
      removeEventListener: () => {},
      play: async () => {},
      pause: () => {},
      duration: 0,
      currentTime: 0,
      playbackRate: 1.0,
      volume: 1.0,
      preload: 'metadata'
    };
    this.currentQuestionId = null;
    this.currentTopicId = 'all';
    this.originalPlaylist = QUESTIONS.map(q => q.id);
    this.playlist = [...this.originalPlaylist];
    this.isPlaying = false;
    this.playbackRate = isBrowser && typeof localStorage !== 'undefined' ? parseFloat(localStorage.getItem(STORAGE_RATE_KEY) || '1.0') : 1.0;
    this.volume = isBrowser && typeof localStorage !== 'undefined' ? parseFloat(localStorage.getItem(STORAGE_VOLUME_KEY) || '1.0') : 1.0;
    this.repeatMode = isBrowser && typeof localStorage !== 'undefined' ? (localStorage.getItem(STORAGE_REPEAT_KEY) || 'all') : 'all'; // 'all', 'one', 'off'
    this.isShuffle = isBrowser && typeof localStorage !== 'undefined' ? (localStorage.getItem(STORAGE_SHUFFLE_KEY) === 'true') : false;
    this.autoplay = this.repeatMode !== 'off';
    this.sleepTimerId = null;
    this.sleepTimerEnd = null;
    this.manifest = null;
    this.listeners = new Map();
    this.isUsingSpeechSynthesis = false;
    this.synthUtterance = null;

    if (isBrowser) {
      this.audio.preload = 'metadata';
      this.audio.playbackRate = this.playbackRate;
      this.audio.volume = this.volume;
      this._bindAudioEvents();
      this._setupMediaSession();
      this.loadManifest();
    }
  }

  async loadManifest() {
    try {
      const res = await fetch('audio/manifest.json');
      if (res.ok) {
        this.manifest = await res.json();
      }
    } catch (e) {
      this.manifest = { audios: {} };
    }
  }

  _bindAudioEvents() {
    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this._emit('play', this.getState());
      this._emit('change', this.getState());
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this._emit('pause', this.getState());
      this._emit('change', this.getState());
    });

    this.audio.addEventListener('timeupdate', () => {
      this._emit('timeupdate', {
        currentTime: this.audio.currentTime || 0,
        duration: this.audio.duration || 0,
        percent: this.audio.duration ? (this.audio.currentTime / this.audio.duration) * 100 : 0
      });
    });

    this.audio.addEventListener('loadedmetadata', () => {
      this._emit('loadedmetadata', {
        duration: this.audio.duration || 0,
        currentTime: this.audio.currentTime || 0
      });
      this._emit('change', this.getState());
    });

    this.audio.addEventListener('canplay', () => {
      this._emit('canplay', this.getState());
    });

    this.audio.addEventListener('ended', () => {
      this._emit('ended', this.getState());
      if (this.repeatMode === 'one') {
        this.audio.currentTime = 0;
        this.audio.play().catch(e => console.warn(e));
      } else if (this.repeatMode === 'all' || this.autoplay) {
        this.next();
      } else {
        this.isPlaying = false;
        this._emit('pause', this.getState());
        this._emit('change', this.getState());
      }
    });

    this.audio.addEventListener('error', (e) => {
      console.warn('HTML5 Audio playback error for src:', this.audio.src, e);
      this.isPlaying = false;
      this._emit('pause', this.getState());
      this._emit('change', this.getState());
    });
  }

  _setupMediaSession() {
    if (!('mediaSession' in navigator)) return;

    navigator.mediaSession.setActionHandler('play', () => this.togglePlay());
    navigator.mediaSession.setActionHandler('pause', () => this.togglePlay());
    navigator.mediaSession.setActionHandler('previoustrack', () => this.prev());
    navigator.mediaSession.setActionHandler('nexttrack', () => this.next());
    navigator.mediaSession.setActionHandler('seekbackward', (details) => {
      this.skip(-(details.seekOffset || 10));
    });
    navigator.mediaSession.setActionHandler('seekforward', (details) => {
      this.skip(details.seekOffset || 10);
    });
  }

  _updateMediaSessionMetadata(question, topic) {
    if (!('mediaSession' in navigator) || !question) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: `Soal #${question.id}: ${question.soal.slice(0, 50)}…`,
      artist: 'OdooPro MP3 Audiobook',
      album: topic ? topic.nama : 'Sertifikasi Odoo 19',
      artwork: [
        { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }
      ]
    });
  }

  setPlaylist(topicId = 'all', startQuestionId = null) {
    this.currentTopicId = topicId;
    if (topicId === 'all' || !topicId) {
      this.originalPlaylist = QUESTIONS.map(q => q.id);
    } else {
      this.originalPlaylist = QUESTIONS.filter(q => q.topic === topicId).map(q => q.id);
    }

    if (this.isShuffle) {
      this._applyShuffle();
    } else {
      this.playlist = [...this.originalPlaylist];
    }

    if (startQuestionId && this.playlist.includes(startQuestionId)) {
      this.playQuestion(startQuestionId);
    } else if (!this.currentQuestionId || !this.playlist.includes(this.currentQuestionId)) {
      if (this.playlist.length > 0) {
        this.currentQuestionId = this.playlist[0];
        const q = this.getQuestion(this.currentQuestionId);
        const topic = this.getTopic(q?.topic);
        this._updateMediaSessionMetadata(q, topic);
      }
    }
    this._emit('playlistchange', this.getState());
    this._emit('change', this.getState());
  }

  _applyShuffle() {
    const list = [...this.originalPlaylist];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    // Put current song first if available
    if (this.currentQuestionId) {
      const idx = list.indexOf(this.currentQuestionId);
      if (idx > -1) {
        list.splice(idx, 1);
        list.unshift(this.currentQuestionId);
      }
    }
    this.playlist = list;
  }

  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_SHUFFLE_KEY, this.isShuffle.toString());
    }
    if (this.isShuffle) {
      this._applyShuffle();
    } else {
      this.playlist = [...this.originalPlaylist];
    }
    this._emit('shufflechange', this.isShuffle);
    this._emit('change', this.getState());
    return this.isShuffle;
  }

  toggleRepeatMode() {
    // all -> one -> off -> all
    if (this.repeatMode === 'all') {
      this.repeatMode = 'one';
    } else if (this.repeatMode === 'one') {
      this.repeatMode = 'off';
    } else {
      this.repeatMode = 'all';
    }
    this.autoplay = (this.repeatMode !== 'off');
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_REPEAT_KEY, this.repeatMode);
    }
    this._emit('repeatchange', this.repeatMode);
    this._emit('change', this.getState());
    return this.repeatMode;
  }

  getQuestion(qId) {
    return QUESTIONS.find(q => q.id === qId) || null;
  }

  getTopic(topicId) {
    return TOPICS.find(t => t.id === topicId) || { id: 'all', nama: 'Semua Topik' };
  }

  async playQuestion(qId) {
    const q = this.getQuestion(qId);
    if (!q) return;

    this.currentQuestionId = qId;
    const topic = this.getTopic(q.topic);
    this._updateMediaSessionMetadata(q, topic);

    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    this.isUsingSpeechSynthesis = false;

    const audioSrc = `audio/q_${qId}.mp3`;
    this.audio.src = audioSrc;
    this.audio.playbackRate = this.playbackRate;
    this.audio.volume = this.volume;

    try {
      await this.audio.play();
      this.isPlaying = true;
      this._emit('change', this.getState());
    } catch (err) {
      console.warn(`HTML5 Audio play failed for ${audioSrc}:`, err);
      this.isPlaying = false;
      this._emit('pause', this.getState());
      this._emit('change', this.getState());
    }
  }

  _playWithSpeechSynthesis(qId) {
    if (!('speechSynthesis' in window)) {
      this.isPlaying = false;
      this._emit('pause', this.getState());
      this._emit('change', this.getState());
      return;
    }

    const q = this.getQuestion(qId);
    if (!q) return;

    window.speechSynthesis.cancel();
    this.isUsingSpeechSynthesis = true;

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const optsEn = q.pilihan.map((p, i) => `Option ${letters[i] || i + 1}: ${p}`).join('. ');
    const correctLetter = letters[q.jawaban] || (q.jawaban + 1);
    const correctText = q.pilihan[q.jawaban] || '';

    const segments = [
      { lang: 'id-ID', text: `Soal nomor ${q.id}. Topik ${q.topic}. Pertanyaan:` },
      { lang: 'en-US', text: q.soal },
      { lang: 'id-ID', text: 'Pilihan jawaban:' },
      { lang: 'en-US', text: optsEn },
      { lang: 'id-ID', text: `Jawaban yang tepat adalah pilihan ${correctLetter}:` },
      { lang: 'en-US', text: correctText },
      { lang: 'id-ID', text: `Pembahasan: ${q.penjelasan}` }
    ];

    const voices = window.speechSynthesis.getVoices();
    const idVoice = voices.find(v => v.lang.startsWith('id') || v.lang.startsWith('in'));
    const enVoice = voices.find(v => v.lang.startsWith('en'));

    let currentIdx = 0;

    const speakNext = () => {
      if (!this.isUsingSpeechSynthesis) return;

      if (currentIdx >= segments.length) {
        this.isUsingSpeechSynthesis = false;
        this._emit('ended', this.getState());
        if (this.repeatMode === 'one') {
          this._playWithSpeechSynthesis(qId);
        } else if (this.repeatMode === 'all' || this.autoplay) {
          this.next();
        } else {
          this.isPlaying = false;
          this._emit('pause', this.getState());
          this._emit('change', this.getState());
        }
        return;
      }

      const seg = segments[currentIdx++];
      const utter = new SpeechSynthesisUtterance(seg.text);
      utter.rate = this.playbackRate;
      utter.lang = seg.lang;
      if (seg.lang.startsWith('id') && idVoice) utter.voice = idVoice;
      else if (seg.lang.startsWith('en') && enVoice) utter.voice = enVoice;

      if (currentIdx === 1) {
        utter.onstart = () => {
          this.isPlaying = true;
          this._emit('play', this.getState());
          this._emit('change', this.getState());
        };
      }

      utter.onend = () => {
        speakNext();
      };

      utter.onerror = () => {
        this.isUsingSpeechSynthesis = false;
        this.isPlaying = false;
        this._emit('pause', this.getState());
        this._emit('change', this.getState());
      };

      this.synthUtterance = utter;
      window.speechSynthesis.speak(utter);
    };

    speakNext();
  }

  togglePlay() {
    if (!this.currentQuestionId) {
      const firstId = this.playlist[0] || 1;
      this.playQuestion(firstId);
      return;
    }

    if (this.isUsingSpeechSynthesis) {
      if (window.speechSynthesis.speaking) {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
          this.isPlaying = true;
          this._emit('play', this.getState());
        } else {
          window.speechSynthesis.pause();
          this.isPlaying = false;
          this._emit('pause', this.getState());
        }
      } else {
        this._playWithSpeechSynthesis(this.currentQuestionId);
      }
      this._emit('change', this.getState());
      return;
    }

    if (this.audio.paused) {
      this.audio.play().catch(e => console.warn(e));
    } else {
      this.audio.pause();
    }
  }

  next() {
    if (!this.playlist.length) return;
    const currentIndex = this.playlist.indexOf(this.currentQuestionId);
    if (currentIndex >= 0 && currentIndex < this.playlist.length - 1) {
      const nextId = this.playlist[currentIndex + 1];
      this.playQuestion(nextId);
    } else {
      if (this.repeatMode === 'all') {
        this.playQuestion(this.playlist[0]);
      } else {
        this.isPlaying = false;
        this._emit('pause', this.getState());
        this._emit('change', this.getState());
      }
    }
  }

  nextTrack() {
    this.next();
  }

  prev() {
    if (!this.playlist.length) return;
    if (!this.isUsingSpeechSynthesis && this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
      this._emit('timeupdate', {
        currentTime: 0,
        duration: this.audio.duration || 0,
        percent: 0
      });
      return;
    }
    const currentIndex = this.playlist.indexOf(this.currentQuestionId);
    if (currentIndex > 0) {
      const prevId = this.playlist[currentIndex - 1];
      this.playQuestion(prevId);
    } else {
      this.playQuestion(this.playlist[this.playlist.length - 1]);
    }
  }

  previousTrack() {
    this.prev();
  }

  seek(seconds) {
    if (this.isUsingSpeechSynthesis) return;
    if (isFinite(seconds)) {
      this.audio.currentTime = Math.max(0, Math.min(seconds, this.audio.duration || 0));
      this._emit('timeupdate', {
        currentTime: this.audio.currentTime,
        duration: this.audio.duration || 0,
        percent: this.audio.duration ? (this.audio.currentTime / this.audio.duration) * 100 : 0
      });
    }
  }

  skip(delta) {
    if (this.isUsingSpeechSynthesis) return;
    this.seek(this.audio.currentTime + delta);
  }

  seekBy(delta) {
    this.skip(delta);
  }

  setPlaybackRate(rate) {
    this.playbackRate = rate;
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_RATE_KEY, rate.toString());
    this.audio.playbackRate = rate;
    this._emit('ratechange', rate);
    this._emit('change', this.getState());
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_VOLUME_KEY, this.volume.toString());
    this.audio.volume = this.volume;
    this._emit('volumechange', this.volume);
    this._emit('change', this.getState());
  }

  setSleepTimer(minutes) {
    if (this.sleepTimerId) {
      clearTimeout(this.sleepTimerId);
      this.sleepTimerId = null;
      this.sleepTimerEnd = null;
    }

    if (!minutes || minutes <= 0) {
      this._emit('sleeptimer', null);
      this._emit('change', this.getState());
      return;
    }

    const ms = minutes * 60 * 1000;
    this.sleepTimerEnd = Date.now() + ms;
    this.sleepTimerId = setTimeout(() => {
      if (this.isPlaying) {
        this.togglePlay();
      }
      this.sleepTimerId = null;
      this.sleepTimerEnd = null;
      this._emit('sleeptimer', null);
      this._emit('change', this.getState());
    }, ms);

    this._emit('sleeptimer', { minutes, endsAt: this.sleepTimerEnd });
    this._emit('change', this.getState());
  }

  getState() {
    const q = this.getQuestion(this.currentQuestionId);
    const topic = q ? this.getTopic(q.topic) : null;
    const playlistIndex = this.playlist.indexOf(this.currentQuestionId);

    return {
      currentQuestion: q,
      currentTopic: topic,
      currentTopicId: this.currentTopicId,
      currentQuestionId: this.currentQuestionId,
      playlist: this.playlist,
      playlistIndex,
      playlistTotal: this.playlist.length,
      isPlaying: this.isPlaying,
      playbackRate: this.playbackRate,
      volume: this.volume,
      repeatMode: this.repeatMode,
      isShuffle: this.isShuffle,
      autoplay: this.autoplay,
      currentTime: this.audio.currentTime || 0,
      duration: this.audio.duration || 0,
      isUsingSpeechSynthesis: this.isUsingSpeechSynthesis,
      sleepTimerEnd: this.sleepTimerEnd
    };
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
    return () => this.listeners.get(event)?.delete(callback);
  }

  subscribe(callback) {
    const unsub1 = this.on('play', callback);
    const unsub2 = this.on('pause', callback);
    const unsub3 = this.on('timeupdate', callback);
    const unsub4 = this.on('change', callback);
    const unsub5 = this.on('ratechange', callback);
    const unsub6 = this.on('sleeptimer', callback);
    const unsub7 = this.on('volumechange', callback);
    const unsub8 = this.on('repeatchange', callback);
    const unsub9 = this.on('shufflechange', callback);
    return () => {
      unsub1(); unsub2(); unsub3(); unsub4(); unsub5(); unsub6(); unsub7(); unsub8(); unsub9();
    };
  }

  _emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(cb => {
        try { cb(data); } catch (err) { console.error('AudioPlayer event error:', err); }
      });
    }
  }
}

export const audioPlayer = new AudioPlayerEngine();
