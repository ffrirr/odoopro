// sw.js: OdooPro Service Worker (Network-First with Offline Cache Fallback)
const CACHE_NAME = 'odoopro-v2.0.0';

const ASSETS = [
  './',
  './index.html',
  './tokens.css',
  './style.css',
  './app.js',
  './data.js',
  './manifest.json',
  './screens/dashboard.js',
  './screens/topics.js',
  './screens/quiz.js',
  './screens/exam.js',
  './screens/flashcard.js',
  './screens/hasil.js',
  './screens/progress.js',
  './screens/audiobook.js',
  './screens/audio_player.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install: Skip waiting immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate: Delete all old caches and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network First, fallback to cache when offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Audio files (.mp3) often use HTTP 206 Range requests; stream directly without forcing cache.put
  if (url.pathname.endsWith('.mp3') || url.pathname.includes('/audio/')) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
