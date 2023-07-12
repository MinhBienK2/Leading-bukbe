const ResourceCache = [];

const addResourcesToCache = async resources => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open('v1');
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to use the preloaded response, if it's there
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    // putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one

    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
};

const enableNavigationPreload = async () => {
  /* eslint-disable-next-line no-restricted-globals */
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!

    /* eslint-disable-next-line no-restricted-globals */
    await self.registration.navigationPreload.enable();
  }
};

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('activate', event => {
  event.waitUntil(enableNavigationPreload());
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', event => {
  event.waitUntil(addResourcesToCache(ResourceCache));
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('fetch', event => {
  console.log(event.request);
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: '',
    }),
  );
});
