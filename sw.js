/* কোরআন অ্যাপ — Service Worker (অ্যাপ শেল + ফন্ট অফলাইন ক্যাশ) */
const CACHE = 'quran-shell-v21';
const SHELL = ['./', './index.html', './script.js', './hub-hero.js', './manifest.json', './icon.svg'];
const FONTS = 'https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Amiri:wght@400;700&family=Hind+Siliguri:wght@400;500;600;700&family=Lateef:wght@400;600;700&family=Noto+Naskh+Arabic:wght@400;600;700&family=Reem+Kufi:wght@500;700&family=Scheherazade+New:wght@400;500;600;700&display=swap';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      Promise.all(SHELL.concat([FONTS]).map((u) => c.add(u).catch(() => {})))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('quran-shell-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // অডিও ও কুরআন ডেটা অ্যাপ নিজেই সংরক্ষণ করে (Cache Storage / IndexedDB)
  if (/\.mp3$/i.test(url.pathname) || /alquran\.cloud|quranenc\.com|everyayah\.com|islamic\.network/.test(url.hostname)) return;
  if (req.headers.has('range')) return;

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then((res) => { const cp = res.clone(); caches.open(CACHE).then((c) => c.put('./index.html', cp)); return res; })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then((cached) => {
      const net = fetch(req).then((res) => {
        if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(CACHE).then((c) => c.put(req, cp)); }
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
