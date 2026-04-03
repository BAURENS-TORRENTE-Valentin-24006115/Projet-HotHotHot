const CACHE_NAME = "hothothot-v1";
const ASSETS_TO_CACHE = [
    '/',
    '/index.php',
    '/assets_/css/TD2CompWeb.css',
    '/assets_/img/icon/tosvg.svg'
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
        fetch(event.request).catch(() => caches.match(event.request))
    );
});