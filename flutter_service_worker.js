'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "07e46d1d9258461e4faba6d9bb077a1c",
"assets/AssetManifest.bin.json": "081ac87f07fca2ce788ac7f3f6a42eb9",
"assets/AssetManifest.json": "8b098f55e99d35411d4d508324316e9d",
"assets/assets/images/Client%2520Logos/image1.png": "95e5f7c6576addc225705116fd5478a4",
"assets/assets/images/Client%2520Logos/image10.png": "b98dc9f717b0ee330ee52efcf7e82205",
"assets/assets/images/Client%2520Logos/image11.jpg": "c4a4805ee3851ae55d0d7968380128d3",
"assets/assets/images/Client%2520Logos/image11.png": "2ffb27362c9055d88dc309f6bed0ce2e",
"assets/assets/images/Client%2520Logos/image12.jpg": "1ecae7fadf36365000c5ccdc634a72d7",
"assets/assets/images/Client%2520Logos/image12.png": "96fba8f7ca4c6ad9c33273c26de32aac",
"assets/assets/images/Client%2520Logos/image13.png": "04db3fc79885066430ba87e5c7ae4908",
"assets/assets/images/Client%2520Logos/image14.png": "1f877567c0cf2004c939d028583671be",
"assets/assets/images/Client%2520Logos/image15.png": "d65edac88da4159478527f55528d70f7",
"assets/assets/images/Client%2520Logos/image16.png": "f181b85c78e0298f05ead2a165813fec",
"assets/assets/images/Client%2520Logos/image17.png": "839c7ec7737f8ebfe5ba1ff8150af99c",
"assets/assets/images/Client%2520Logos/image18.png": "77eaa687e1584abd8a9b470ac5b23883",
"assets/assets/images/Client%2520Logos/image19.png": "5b8fad496276002b8f23bc2735070e1c",
"assets/assets/images/Client%2520Logos/image2.png": "ec8475d331bff54cfc483b2c84e19fd8",
"assets/assets/images/Client%2520Logos/image3.jpg": "822c8c994e3e1ff8399342e42db68141",
"assets/assets/images/Client%2520Logos/image3.png": "fc4d681ee78cd61181bb41c83b75d50d",
"assets/assets/images/Client%2520Logos/image4.jpg": "24368002dd5945104f61361982a1bc99",
"assets/assets/images/Client%2520Logos/image5.png": "7221f782c96e4807656c6c3b58171608",
"assets/assets/images/Client%2520Logos/image6.jpg": "96b1137091d1c6fca479abad6cb7a3f4",
"assets/assets/images/Client%2520Logos/image6.png": "1c41ccbac50c73ea080b8557954c27c5",
"assets/assets/images/Client%2520Logos/image7.jpg": "51c9ccec9fb4f9e214e6a37f3400e457",
"assets/assets/images/Client%2520Logos/image7.png": "75f4987ce3d79384a33ddae656ebd626",
"assets/assets/images/Client%2520Logos/image8.png": "6d68cdcde9d67db82c743aa280c94104",
"assets/assets/images/Client%2520Logos/image9.jpg": "e34408cd64d74a67177f131c84324144",
"assets/assets/images/Comdirimage.jpg": "7760681e9ee0e6599f5e8c5ed3bd820d",
"assets/assets/images/image1.jpg": "39d0f89abd65d9b931eb0f65211d01f7",
"assets/assets/images/image10.jpg": "abdf22abca51db3ad2f551e12841dca1",
"assets/assets/images/image11.jpg": "361d2c9bb8569b52de7d3fbd879e97de",
"assets/assets/images/image11_1.jpg": "1d9b0d2e322ae6019d35f176dc1b2979",
"assets/assets/images/image12.jpg": "f0697b2ab9a854737d7764f68ee6dd9e",
"assets/assets/images/image13.jpg": "8f7eecf80e9a46c280debe6304aab433",
"assets/assets/images/image14.jpg": "bffc2c5f17015e3fc7e7dba607cdb0bf",
"assets/assets/images/image15.jpg": "d91a53155dd2c5a51f11d038cf19fa4a",
"assets/assets/images/image16.jpg": "ceb3f75dafac26e05de48b65b56eb0f7",
"assets/assets/images/image2.jpg": "a7b33a0c002bfdae873ebe8200d9de89",
"assets/assets/images/image3.png": "c60461501651e4a7b392ae398638913c",
"assets/assets/images/image4.jpg": "28fcfb7e002ad41c1b68acc03dad97ce",
"assets/assets/images/image5.jpg": "a6851664f93d2d8371566b4cfdbd1a48",
"assets/assets/images/image6.jpg": "889c01f7564d22181d665653fe2a7c06",
"assets/assets/images/image7.jpg": "5d6f3361cf09a0e5e719a41b5a913b82",
"assets/assets/images/image8.jpg": "917454799713808ada15c63d44085d26",
"assets/assets/images/image9.jpg": "d1ff6f5300823f9df01c3c549fdf30f9",
"assets/assets/images/img.png": "8fc4710fa3ab728e5c952cb212dec738",
"assets/assets/images/img_1.png": "8fc4710fa3ab728e5c952cb212dec738",
"assets/assets/images/img_2.png": "16ff3f6c75ddc83ba0c2ba75f06d1308",
"assets/assets/images/img_3.png": "16ff3f6c75ddc83ba0c2ba75f06d1308",
"assets/assets/images/PREWLogo.png": "695872c5f8b729627873c92d2a403ed4",
"assets/assets/images/PREWLogo2.png": "b9da18077bd58bff6e41e1a984f23cba",
"assets/assets/images/PREWLogo3.png": "704c99b06feae8ea801868d049e4b6c2",
"assets/assets/images/PREWLogo4.png": "449c42809a9e51744620e3eeefc7a19f",
"assets/assets/images/PREWLogo5.jpg": "c0b7d29b61ef1efd2813641ad2bbe8e7",
"assets/assets/images/TechdirImage.jpg": "a1c476f58225606c496c28fec762351e",
"assets/assets/maps/india.svg": "0ea291a16a5d9b31d5e49b83f2b811ec",
"assets/assets/maps/indiaHigh.svg": "7fe898af5055e60b6d5aa4065ae8d94e",
"assets/assets/videos/isolator.gif": "58bbd7c6b07ee2050affd676188d24b3",
"assets/assets/videos/isolator.mp4": "b6447435e5226b09de20d4ca4eec3f54",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "19e13fade1fa3d44532532fd01f2244c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6963f82c2db9e9700ebdecd036beecc2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a142f2aaf95753d1f3e5b2d167639505",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d5cc29be3a678bc5d85a9f89de8c5fa",
"/": "2d5cc29be3a678bc5d85a9f89de8c5fa",
"main.dart.js": "a495137dfe264f8ec56551f969769ab1",
"manifest.json": "19cbc4ff697b15db17f1a9e6a842e8bf",
"version.json": "b4db5351b36d62615438c12547843ce3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
