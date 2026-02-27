const CACHE_NAME = "mail-templates-pwa-v4";

const APP_SHELL = [
  "./",
  "./index.html",
  "./app.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icon-192.svg",
  "./assets/icon-512.svg",
  "./templates/templates.json",
  "./templates/personal-minimal.html",
  "./templates/personal-card.html",
  "./templates/personal-sunset.html",
  "./templates/personal-outline.html",
  "./templates/personal-ribbon.html",
  "./templates/personal-letterhead.html",
  "./templates/personal-cleanlines.html",
  "./templates/personal-glass.html",
  "./templates/personal-journal.html",
  "./templates/personal-band.html",
  "./templates/personal-note.html",
  "./templates/personal-mono.html",
  "./templates/personal-midnight.html",
  "./templates/personal-postcard.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(staleWhileRevalidate(event.request));
});

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const networkPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    return cached;
  }

  const networkResponse = await networkPromise;
  if (networkResponse) {
    return networkResponse;
  }

  if (request.mode === "navigate") {
    return cache.match("./index.html");
  }

  return new Response("Offline", {
    status: 503,
    statusText: "Offline",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
  });
}
