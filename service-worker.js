const CACHE_NAME = 'simplekeys-v1';
// We cache the main pages and your images so the app works offline
const ASSETS_TO_CACHE = [
  '/Simplekeys/',
  '/Simplekeys/index.html',
  '/Simplekeys/about.html',
  '/Simplekeys/contact.html',
  '/Simplekeys/manifest.json',
  '/Simplekeys/my-photo.jpg',
  '/Simplekeys/elen.jpg',
  '/Simplekeys/branny.jpg',
  '/Simplekeys/fizzy.jpg',
  '/Simplekeys/ig.jpg',
  '/Simplekeys/jos.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
