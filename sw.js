const CACHE='cq-trip-v46-ui-clean';
const ASSETS=['./','./index.html','./manifest.json','./images/jiefangbei.svg','./images/hongyadong.svg','./images/bayi.svg','./images/tmpgov.svg','./images/tiansheng.svg','./images/fairymountain.svg','./images/longshuixia.svg','./images/guanyinqiao.svg','./images/jiujie.svg','./images/luohansi.svg','./images/ciqikou.svg','./images/liziba.svg','./images/ering.svg','./images/shibati.svg','./images/xiahao.svg','./images/milktea.svg','./images/yangrou.svg','./images/kaoyu.svg','./images/xiaomian.svg','./images/xiaolongxia.svg','./images/dimsum.svg','./images/furong.svg','./images/fallback.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(
    caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{
      const copy=r.clone();
      caches.open(CACHE).then(c=>c.put(e.request,copy));
      return r;
    }).catch(()=>{
      if(e.request.destination==='image') return caches.match('./images/fallback.svg');
      return caches.match('./index.html');
    }))
  );
});
