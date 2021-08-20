'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/images/progeney_tree_divider.png": "b936b6d2eb9f08f11b196df416fe2e75",
"assets/assets/images/children3.png": "396666682dac31ab2f103458950ca991",
"assets/assets/images/children2.jpg": "429b57108e14df6bc5c3128a4f03dda1",
"assets/assets/images/heart_united_01.png": "8fa17eb71cb90b5ae45476a8209f7710",
"assets/assets/images/children.png": "cc2231737659270a88e1b3db8e256685",
"assets/assets/images/celebrity2.png": "f67443c6fbf011aa9cdf27dec954a210",
"assets/assets/images/children4.jpg": "3de0f7a3c24b40456ef3479eb0103b65",
"assets/assets/images/celebrity.png": "d7679b98cdee74abff40f15392085c5f",
"assets/assets/celebs.json": "305bf3a845a9f78418073f6aaea5d273",
"assets/assets/beta_logo_01.png": "220bcbaba60d8079f3b6ddd143b8473c",
"assets/assets/fonts/Nunito/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/assets/fonts/Nunito/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/assets/fonts/Nunito/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/assets/fonts/Nunito/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/assets/fonts/Nunito/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/assets/fonts/Nunito/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/assets/fonts/Nunito/Nunito-ExtraLightItalic.ttf": "ade1717e588935bdec3d38ca19bd1050",
"assets/assets/fonts/Nunito/Nunito-LightItalic.ttf": "55032f4e811253da318f967e0db3d7e9",
"assets/assets/fonts/Nunito/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/assets/fonts/Nunito/Nunito-SemiBoldItalic.ttf": "59cf0995782240777656a355cf08b234",
"assets/assets/fonts/Nunito/Nunito-ExtraBoldItalic.ttf": "5f67429d0ff76ec74d98b915439692ee",
"assets/assets/fonts/Nunito/Nunito-BoldItalic.ttf": "b21199decd37bf9a096e0f495bb20ffd",
"assets/assets/fonts/Nunito/Nunito-BlackItalic.ttf": "8bf9ce6e0c5434ca0ac97f90196d0c66",
"assets/assets/fonts/Nunito/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/assets/fonts/RougeScript-Regular.ttf": "8861cdc29d259bdc9a93a83418a25439",
"assets/assets/fonts/Yantramanav/Yantramanav-Thin.ttf": "18474f8b74da5aad380b239c6ebcd342",
"assets/assets/fonts/Yantramanav/Yantramanav-Black.ttf": "db9bf429e9ff134af63444e222b2eb9c",
"assets/assets/fonts/Yantramanav/Yantramanav-Medium.ttf": "c30b000de81d69a5ddc613a375b9476c",
"assets/assets/fonts/Yantramanav/Yantramanav-Light.ttf": "e7f65fcb5ebb73ea77160cc3a4b12034",
"assets/assets/fonts/Yantramanav/Yantramanav-Regular.ttf": "fe211ddc0f1b060d7632fb83756be113",
"assets/assets/fonts/Yantramanav/Yantramanav-Bold.ttf": "ef2d31ead84495c3afecba6847adfdce",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/FontManifest.json": "4f6ed86ac0b2dbe53aadeedd26500616",
"assets/AssetManifest.json": "c5faebf48dd6541e32afc74d738a3db8",
"assets/NOTICES": "d65a30c1d4ce0330b06822a5e2ec179a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"index.html": "477c67aa5585a58fc91b04b986e69e1e",
"/": "477c67aa5585a58fc91b04b986e69e1e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "03ba43d7b9344c6ae667b57bdbf4468c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "aa9100451f3936d369c6a58dcf5b8063",
"manifest.json": "75dee1a4b125a333e89dfbcc01026ab6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
