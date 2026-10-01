const CACHE_NAME = 'quiz-hub-v6';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './maths.html',
  './maths-manifest.json',
  './english.html',
  './english-manifest.json',
  './history.html',
  './history-manifest.json',
  './science.html',
  './science-manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // Network-first: always try to get the latest page/asset when online (so
  // redesigns aren't masked by a stale cache), falling back to the cache
  // when offline, and only ever falling back to a clean network-error
  // response (never `undefined`, which Chrome reports as net::ERR_FAILED).
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => cached || Response.error())
      )
  );
});
