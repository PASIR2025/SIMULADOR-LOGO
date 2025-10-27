const CACHE_NAME = "logicsoft-cache-v1";
const urlsToCache = [
  "/SIMULADOR-LOGO/",
  "/SIMULADOR-LOGO/index.html",
  "/SIMULADOR-LOGO/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
