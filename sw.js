self.addEventListener('fetch', (event) => {
  // Basic fetch handler (required for PWA)
  event.respondWith(fetch(event.request));
});