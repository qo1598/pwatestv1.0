const CACHE_NAME = 'snake-game-v1';
const urlsToCache = [
    '/pwatestv1.0/',
    '/pwatestv1.0/index.html',
    '/pwatestv1.0/manifest.json',
    'https://i.ibb.co/bM0dfyWc/maskable-icon-x192.png',
    'https://i.ibb.co/YFCGbNgv/maskable-icon-x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return new Response('오프라인 상태입니다.');
            })
    );
});
