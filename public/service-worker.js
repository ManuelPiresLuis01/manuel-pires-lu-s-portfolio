const CACHE_NAME = "manuel-portfolio-cache-v1";
const CACHE_PREFIX = "manuel-portfolio-cache-";
const CACHEABLE_DESTINATIONS = new Set(["script", "style", "image", "font"]);

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
            .map((name) => caches.delete(name)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type !== "CACHE_STATIC_RESOURCES" || !Array.isArray(event.data.urls)) {
    return;
  }

  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      const urls = event.data.urls.filter((value) => typeof value === "string");
      await Promise.all(
        urls.map(async (value) => {
          const url = new URL(value, self.location.origin);
          if (url.origin !== self.location.origin) return;

          try {
            const response = await fetch(url.href);
            if (response.ok) await cache.put(url.href, response);
          } catch (error) {
            console.error("Não foi possível guardar um ficheiro estático em cache.", error);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);

  if (
    request.method !== "GET" ||
    requestUrl.origin !== self.location.origin ||
    !CACHEABLE_DESTINATIONS.has(request.destination)
  ) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(request);
      if (cachedResponse) return cachedResponse;

      const response = await fetch(request);
      if (response.ok) {
        await cache.put(request, response.clone());
      }
      return response;
    }),
  );
});
