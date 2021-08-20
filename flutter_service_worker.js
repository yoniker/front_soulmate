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
"assets/assets/images/back_arrow.png": "8ecdbcc484a381285f05af38cd45eca4",
"assets/assets/images/match_tab_icon_inactive.png": "e189aee7038a521b5d2eb164aa4574ec",
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
"assets/AssetManifest.json": "777795dc63f9cc4d0793aa2f1f332ef2",
"assets/NOTICES": "c218c7a77bf9fe9e51007d8661145c2b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"index.html": "5455150eca4cbc35b1ba0d0cc1e5686c",
"/": "5455150eca4cbc35b1ba0d0cc1e5686c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "808bf5ff9f920e9c0247efe835685c6d",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "aa9100451f3936d369c6a58dcf5b8063",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/heads/master": "a5cb20b661d6d1fca336ed848af5e2fa",
".git/logs/refs/remotes/origin/master": "b84a17405a9faf173ecf0df18c0dffb8",
".git/logs/HEAD": "a5cb20b661d6d1fca336ed848af5e2fa",
".git/refs/heads/master": "1324c3f78b214fa021aade7948dec26d",
".git/refs/remotes/origin/master": "1324c3f78b214fa021aade7948dec26d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/config": "4f4891e828cca96460bb9ad4559d8321",
".git/index": "0455125dc688bb899ef0f15cdd10499d",
".git/objects/4c/39c0ae412800397f3637d2e4b1c623aab438c2": "371a2a27718bf0e8882a943ba6e39311",
".git/objects/4c/b43fc005c7ea55e00dcd89f1e671eff00f1ded": "a3bed9e25cfc6ff123095e7b7de6ccc2",
".git/objects/ad/56724f956a4e9c6c19657f5d9090f27277136e": "651041479b22adda12c827e9c44953ed",
".git/objects/00/c5c254e42018c86ad73890bbaa36b1b83d0179": "2421c739c75824af515d4bcec66b13b3",
".git/objects/87/1a9dd22e65367718b2de4909bf8e4c462d69e3": "892a6711c604b80502f6045865093dbb",
".git/objects/0a/e558603d07ed6bd515b09b76c4c3f1968b052f": "31fbcb568633b8c155220dfc93393d44",
".git/objects/51/f1f11c4a37cd7d6b0d55138809a0719a837f55": "6b7b65bd8764baadc056a6bb59321334",
".git/objects/7c/9caf8844d606c0c31d2f7fff70582b4c6a1bf4": "81bfad411857927410c03fd0e7a1bbfc",
".git/objects/92/05a35a53c42c5fc359256400aca222012d1b8e": "fae29cb182a9f1f17b3a2ae6e94986c8",
".git/objects/3a/30359dc759aac83f1750fd9804323930c47157": "7a18082afe2decf75321bdedd7c0af6a",
".git/objects/3f/c4b5a532a8abfe1e76d798a9cceb0b33ae6b53": "adb227180aad5a4eb12bf9361774202f",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/03/46113bc683a4ed85513c0b69484c22395a42b4": "87a9bbbd42a755fede35a7546e52944b",
".git/objects/9e/bc01e0a3dc17e3c31d801ef8f8d1e586172733": "7a5b56038dc626efd6d0538d14777a58",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/36/8468ce4b77fd44a05f3d43ab873215cb6ed9b1": "7ffde59841988d05b268c89ad032e584",
".git/objects/f6/26dc8cd8bb6a05413075c4baf4176a90a070d2": "b40be500137c8bf6668f60fd1644698b",
".git/objects/c8/67a227ae59862945e66add518a2fa24d6301fb": "3bca7bd769afcc5498e2d73b67d12924",
".git/objects/c8/c90b7c2c97e1f78ab3c09687d0d7f9a2a60cae": "4d51cc92b66c7944539ec97202c36527",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/35/d1f11d6f598b00994bebfbf82db17e286afbbc": "66a68c672189c2d0da5f68399d319f61",
".git/objects/76/fa99d790305669b93f671cc03f361e6ac1b32d": "ff8858237755620ca5c6ae24d1d694f5",
".git/objects/18/f368028499eee58e0066daaa8fa9577b746508": "8503f8a60852f734867dd3331717b5b7",
".git/objects/18/7f298f80cdebc68cca68681ff9327b80749756": "66031fea1c7f043d999238cd63628a49",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/dc/daddc9cf79bbd1eaa53c4c3ddf03a7deb71e6e": "3cea8d63f54ade6036b36660c864feee",
".git/objects/ba/03cc1e3a3b49d67817b326e7c6b4203c8ef022": "c136a02fb3887d1cb999cd245c9d693d",
".git/objects/cb/71780060d4ba4dcd2b039d6c5f71a25fe2f0ad": "3dd5326319f937b1cb27c240d542f932",
".git/objects/8f/5e1f62303b044e0c1fe799395e4111c5adf5c9": "3792ef732dc5079fdc54c13616836369",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ae/5d11e582aa321a4ed43ba5e346a7c6f22c858e": "39b69b05819b5a1552cdeb0fdea637e4",
".git/objects/25/1c471196503a74974f033fb5d90ff8b972343e": "15a7e1952043ba77c77fefe8084cabd6",
".git/objects/9f/19076ae7adf44fbaecb12bd58dc0580c52dee9": "2ea0dace3430c4e9a16bfe2295f2eec6",
".git/objects/df/d2b5ecd8df817e42ceb210a9c9ea55a75816e3": "98705548d1ee4e2d64ff1f9473142218",
".git/objects/8a/eab1e30829c6400be9db29b9cf6d973724ef77": "c8eb1ba84d9d757e4e565c2c653cf365",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/6b9fdc8ac88f134f6747ed17a185bd598a4038": "60468f6ef592a1cc3570bbd2d8e5c3cf",
".git/objects/91/a88ea59c92fe69a3ea00d3e09a4a34f53cae3b": "430a94b06b25baac579dc281da7bd264",
".git/objects/e4/fe5d0b0fdbaf0ba9d2f3bf1cc0ebeefef2dd59": "8125381578663e10ee7e2d98f18b2697",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/4d/1d82a3cfa900463a3c58c5ce504fad3ed8f6a4": "e0fc57e54975084b5dd9c738707594b7",
".git/objects/ee/4fe32a450ccca4d953ecf5af0742730cb1cdd0": "0252765552b2219ce9d226a20b74aafc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/71a9c089752d24ac1c1893181e6ac388ba8515": "361bc93bb5243c21953f0006f0bba5d4",
".git/objects/8b/393f2680793088f12fe93bf9a9ce13986f603c": "132b96a6936227d07b139cba68fa9b9d",
".git/objects/6e/215cfe29f972a2cd1f2317df85e09c96a0c540": "ed04e73363b782cca96ff0db717dbc2d",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/8c/5f0e6589e1f405afec59f1919e0d704ddbbc2e": "e89edbfe72998c1af32bbaf2cb4f764b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/e8/845a28576c6c77c31de65db4abbe463d6fcee9": "5561817988059a4b544e13a5638ca844",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/9a/c7b31af8290a306f5c0a2bc7057f64446796e1": "5c97a3f06ad8e045975ff69df2b1b4f5",
".git/objects/9a/0f59e9d968becb026f54c99fe27c0785f419d4": "84f0d67c7f7abb137862f90d90cf86fd",
".git/objects/e5/ed838c164aa0cef0ccd195250fc629e2b279ee": "d8a15f00d8772a228ac50c1117ce6858",
".git/objects/e5/150e7868afb577e781de93022ed98dc1cf180f": "d38480cc05cc9014132b66d77cb69d35",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/cc5308e6a9f2d62c4772f3b6c1a20366db85ce": "376bf4cd864ed334bbe8ee46f1b96daf",
".git/objects/f1/664ed1906f66c2f0e3bee4fa4f6a085aa54dfa": "e61f5f4ff98d277de2c5dff97e76b724",
".git/objects/10/e5df76020ca30d64ee36be8ebf520b08becf7c": "14a93e9a10722179b8997b38af0a83fe",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/90/b4ba29f6374a1e76ab11fa042d33a32a64d53c": "00e94f1f736456e493d5207ac3df95b6",
".git/objects/d0/7018fb6fda91f1fdb73df03849aa0406b26894": "a38b772b15bf8d601826eb6566ca8047",
".git/objects/e9/11abc433c79b0e72c4acb60136af5a2b0de325": "38b48258115472c48033a9721831e861",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/c3/d4c001992580260fd40a6f0c70481d9dd5a867": "38221a863ced1f795fccae979e063408",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/COMMIT_EDITMSG": "753fa9cc3f343e2bae85c2180e993d1a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
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
