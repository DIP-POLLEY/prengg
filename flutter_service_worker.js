'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ce007674a9a93b18608ba31d4d9731a3",
"assets/AssetManifest.bin.json": "32cbe77f31702ed27ea6c9c6a6324c94",
"assets/AssetManifest.json": "38a8318c1a42c5c61ea4bf85dc3decce",
"assets/assets/images/Client%2520Logos/Image1.png": "df65de248c8d89dc82b0f4213de8a8f5",
"assets/assets/images/Client%2520Logos/image10.png": "63bed12400cc01d629a9bc8c2b7667a5",
"assets/assets/images/Client%2520Logos/image11.jpg": "c4a4805ee3851ae55d0d7968380128d3",
"assets/assets/images/Client%2520Logos/image12.jpg": "1ecae7fadf36365000c5ccdc634a72d7",
"assets/assets/images/Client%2520Logos/image13.png": "48c07a9f79fe20205dc153fb41c92b2e",
"assets/assets/images/Client%2520Logos/image14.png": "4e450765411f0bd937ffe8dbd81229d6",
"assets/assets/images/Client%2520Logos/image15.png": "e0f17266bde06feccf663152f209e011",
"assets/assets/images/Client%2520Logos/image16.png": "f181b85c78e0298f05ead2a165813fec",
"assets/assets/images/Client%2520Logos/image17.png": "839c7ec7737f8ebfe5ba1ff8150af99c",
"assets/assets/images/Client%2520Logos/image18.png": "77eaa687e1584abd8a9b470ac5b23883",
"assets/assets/images/Client%2520Logos/image19.png": "5b8fad496276002b8f23bc2735070e1c",
"assets/assets/images/Client%2520Logos/Image2.png": "319b32dc726b85978237de6d02e118a8",
"assets/assets/images/Client%2520Logos/image3.jpg": "822c8c994e3e1ff8399342e42db68141",
"assets/assets/images/Client%2520Logos/image4.jpg": "24368002dd5945104f61361982a1bc99",
"assets/assets/images/Client%2520Logos/image5.png": "7221f782c96e4807656c6c3b58171608",
"assets/assets/images/Client%2520Logos/image6.jpg": "96b1137091d1c6fca479abad6cb7a3f4",
"assets/assets/images/Client%2520Logos/image7.jpg": "51c9ccec9fb4f9e214e6a37f3400e457",
"assets/assets/images/Client%2520Logos/image8.png": "56d6f82ac3a9208009fa9365a761ae53",
"assets/assets/images/Client%2520Logos/image9.jpg": "e34408cd64d74a67177f131c84324144",
"assets/assets/images/Comdirimage.jpg": "7760681e9ee0e6599f5e8c5ed3bd820d",
"assets/assets/images/image1.jpg": "39d0f89abd65d9b931eb0f65211d01f7",
"assets/assets/images/image10.jpg": "87d5caff94d1dab274149c814f986820",
"assets/assets/images/image11.jpg": "647271ceb028a9cf88687a59ecd323b2",
"assets/assets/images/image12.jpg": "f0697b2ab9a854737d7764f68ee6dd9e",
"assets/assets/images/image2.jpg": "a7b33a0c002bfdae873ebe8200d9de89",
"assets/assets/images/image3.png": "c60461501651e4a7b392ae398638913c",
"assets/assets/images/image4.jpg": "dfd31f7a4bfe04e656daebcd1fa1778a",
"assets/assets/images/image5.jpg": "f793dd3d0203af7a5d753c0c3a0cbd96",
"assets/assets/images/image6.jpg": "c912d002f2e6f8b6a8da1540c971c1e8",
"assets/assets/images/image7.jpg": "5d6f3361cf09a0e5e719a41b5a913b82",
"assets/assets/images/image8.jpg": "917454799713808ada15c63d44085d26",
"assets/assets/images/image9.jpg": "93ee6d67551c75c71ca3cce14e405fb6",
"assets/assets/images/PREWLogo.png": "449c42809a9e51744620e3eeefc7a19f",
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
"flutter_bootstrap.js": "30addef30f53fec9331a047e4e853fb5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d5cc29be3a678bc5d85a9f89de8c5fa",
"/": "2d5cc29be3a678bc5d85a9f89de8c5fa",
"main.dart.js": "767df7ed97d83120a3f7830454355011",
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
