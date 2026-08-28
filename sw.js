// sw.js — OdooPro Service Worker (Cache-First Offline Support)
const CACHE_NAME = 'odoopro-v1.0.4';

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
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install: Cache all critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean old caches
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

// Fetch: Cache-first, network fallback
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch fresh copy in background to keep cache up to date
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
