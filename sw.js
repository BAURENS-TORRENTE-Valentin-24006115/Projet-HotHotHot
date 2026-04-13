const CACHE_NAME = "hothothot-v1";
const ASSETS_TO_CACHE = [
    './',
    './index.php',
    './Main.js',

    './assets_/css/TD2CompWeb.css',
    './assets_/json/manifest.json',
    './assets_/img/icon/tosvg.svg',
    './assets_/img/icon/180fav.png',
    './assets_/img/icon/192fav.png',
    './assets_/img/icon/512fav.png',

    './controllers/Alert.js',
    './controllers/Display.js',
    './controllers/DonutGraph.js',
    './controllers/History.js',
    './controllers/MinMax.js',
    './controllers/PwaHandler.js',
    './controllers/TabsManual.js',

    './models/SensorManager.js',
    './models/Temperature.js',
    './models/WebSocket.js',

    './views/Account.php',
    './views/Documentation.php'
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