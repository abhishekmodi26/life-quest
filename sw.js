var C = "lifequest-v2";
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(C).then(function(c){
    return c.addAll(["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"]);
  }));
  self.skipWaiting();
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.filter(function(k){ return k !== C; }).map(function(k){ return caches.delete(k); }));
  }));
  self.clients.claim();
});
self.addEventListener("fetch", function(e){
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function(r){
      var copy = r.clone();
      caches.open(C).then(function(c){ c.put(e.request, copy); });
      return r;
    }).catch(function(){ return caches.match(e.request); })
  );
});
self.addEventListener("notificationclick", function(e){
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(function(list){
    for (var i = 0; i < list.length; i++){ if ("focus" in list[i]) return list[i].focus(); }
    if (clients.openWindow) return clients.openWindow("./");
  }));
});
self.addEventListener("periodicsync", function(e){
  if (e.tag !== "lq-nudge") return;
  e.waitUntil(self.registration.showNotification("Life Quest", {
    body: "The arc marches on — open the board and log the day.",
    icon: "./icon-192.png", badge: "./icon-192.png", tag: "lq-bell"
  }));
});
