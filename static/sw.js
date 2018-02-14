/*
This is a modified version of Ethan Marcotte's service worker (https://ethanmarcotte.com/theworkerofservices.js),
which is in turn a modified version of Jeremy Keith's service worker (https://adactio.com/serviceworker.js),
with a few additional edits borrowed from Filament Group's. (https://www.filamentgroup.com/sw.js)
*/

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  });
  window.addEventListener('load', function() {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({'command': 'trimCaches'});
    }
  });
}

(function() {
  const version = 'v1';
  const cacheName = version + '::renemnet:';

  const staticCacheName = cacheName + 'static';
  const pagesCacheName = cacheName + 'pages';

  const staticAssets = [
    '/',
    '/about/',
    '/archive/',
    '/post/',
    '/offline/',
    '/css/bundle.css',
    '/js/helpers.js',
    '/assets/ACC2B4B2.asc',
    '/assets/renem_profile.png'
  ];

  function updateStaticCache() {
    // These items must be cached for the Service Worker to complete installation
    return caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(staticAssets.map(url => new Request(url, {credentials: 'include'})));
    });
  }

  function stashInCache(cacheName, request, response) {
    caches.open(cacheName)
    .then(cache => cache.put(request, response));
  }

  // Limit the number of items in a specified cache.
  function trimCache(cacheName, maxItems) {
    caches.open(cacheName)
    .then(cache => {
      cache.keys()
      .then(keys => {
        if (keys.length > maxItems) {
          cache.delete(keys[ 0 ])
          .then(trimCache(cacheName, maxItems));
        }
      });
    });
  }

  // Remove caches whose name is no longer valid
  function clearOldCaches() {
    return caches.keys()
    .then(keys => {
      return Promise.all(keys
        .filter(key => key.indexOf(version) !== 0)
        .map(key => caches.delete(key))
       );
    });
  }

  // Events!
  self.addEventListener('message', event => {
    if (event.data.command === 'trimCaches') {
      trimCache(pagesCacheName, 35);
    }
  });

  self.addEventListener('install', event => {
    event.waitUntil(updateStaticCache()
      .then(() => self.skipWaiting())
     );
  });

  self.addEventListener('activate', event => {
    event.waitUntil(clearOldCaches()
      .then(() => self.clients.claim())
     );
  });

  self.addEventListener('message', event => {
    if (event.data.command === 'trimCaches') {
      trimCache(pagesCacheName, 35);
    }
  });

  self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);

    if (url.href.indexOf('https://renem.net') !== 0) {
      return;
    }

    // Ignore non-GET requests
    if (request.method !== 'GET') {
      return;
    }

    // Ignore query-stringed requests
    if (url.href.indexOf('?') !== -1) {
      return;
    }

    // Try the network first, fall back to the cache, finally the offline page (for HTML requests)
    event.respondWith(
      fetch(request)
      .then(response => {
        // NETWORK
        // Stash a copy of this page in the pages cache
        const copy = response.clone();
        stashInCache(staticCacheName, request, copy);
        return response;
      })
      .catch(() => {
        // CACHE or FALLBACK
        if (request.headers.get('Accept').indexOf('text/html') !== -1) {
          return caches.match(request)
            .then(response => response || caches.match('/offline/'));
        } else {
          return caches.match(request).then(response => response);
        }
      })
    );
    return;

  });
})();
