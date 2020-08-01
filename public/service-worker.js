importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
 
if (workbox) {
  console.log(`Workbox berhasil dimuat`);
  workbox.precaching.precacheAndRoute([
    { url: '/nav.html', revision: '7.1' },
    { url: '/index.html', revision: '7.1' },
    { url: '/teams.html', revision: '7.1' },
    { url: '/pages/home.html', revision: '7.1' },
    { url: '/pages/about.html', revision: '7.1' },    
    { url: '/pages/saved.html', revision: '7.1' },
    { url: '/css/loader.css', revision: '7.1' },
    { url: '/css/materialize.min.css', revision: '7.1' },    
    { url: '/js/api.js', revision: '7.1' },
    { url: '/js/db.js', revision: '7.1' },
    { url: '/js/idb.js', revision: '7.1' },    
    { url: '/js/materialize.min.js', revision: '7.1' },
    { url: '/js/nav.js', revision: '7.1' },
    { url: '/js/registersw.js', revision: '7.1' },    
    { url: '/js/standings.js', revision: '7.1' },    
    { url: '/manifest.json', revision: '7.1' },
    { url: '/img/background_uerosport.jpg', revision: '7.1' },
    { url: '/img/favicon.ico', revision: '7.1' },    
    { url: '/img/icon-128x128.png', revision: '7.1' },
    { url: '/img/icon-192x192.png', revision: '7.1' },
    { url: '/img/icon-512x512.png', revision: '7.1' },
    { url: '/img/icon-512x512.png', revision: '7.1' },
    { url: '/img/poi.gif', revision: '7.1' },
    { url: 'https://fonts.googleapis.com/icon?family=Material+Icons', revision: '7.1' },
    { url: 'https://code.jquery.com/jquery-2.2.1.min.js', revision: '7.1' },
    { url: 'https://fonts.gstatic.com/s/materialicons/v53/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2', revision: '7.1' }
], {
  ignoreUrlParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
  new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'pages'
    })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
          new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
          }),
      ],
  }),
);

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static',
  })
);

workbox.routing.registerRoute(
  ({url}) => url.origin === 'https://api.football-data.org/v2/',
  workbox.strategies.staleWhileRevalidate({
    cacheExpiration: {
          maxAgeSeconds: 60 * 30 //cache diperbarui setiap 30 menit
    }
  })
);

} else {
  console.log(`Workbox gagal dimuat`)
}
  self.addEventListener('push', function(event) {
    var body;
    if (event.data) {
      body = event.data.text();
    } else {
      body = 'Push message no payload';
    }
    var options = {
      body: body,
      icon: './img/icon-128x128.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });