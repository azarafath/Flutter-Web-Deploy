'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "82000ad8fc542ddc1e44de07a54a2c42",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "914ce1dc5dea183a85c4c1fed5d1ff2e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6b2e3d7962b6f270e9c75ee763d24a6c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0eee1a4325b0245d40e7f251a788f4e3",
".git/logs/refs/heads/master": "4f861a3701da76b1068b30920b11d2f4",
".git/logs/refs/remotes/origin/master": "6861879275b93177b9521e94725f4ab1",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/02/7eefd5e84fb887d308ed378baa59b2f1a3c6ce": "3ba02fb3a9b60712c1c553996fc6c5d7",
".git/objects/06/30242ecc54e2c38aeddd7f139ae7af52c94d29": "e47626813294510b7e71ad91a6dcfa84",
".git/objects/06/b85010ce34a2c36578be6ad0955a4b51a388e9": "f54701a4935682fff77eec1eda35a300",
".git/objects/08/78b75af6bcc16542102ac45d14535ddc6917c6": "40750479e2787748c058699f083cdc4a",
".git/objects/0b/55e9b6803652940048709e4fda52b0ee83a4b4": "1d11cceeca1fabf4dd8f5caedced5461",
".git/objects/0c/0ac55ed7a03fb915f30c9d2fde677c55c52684": "d49285ef4d88b8731a7fc169bd217c12",
".git/objects/1b/7d1c1b87d4b8f26971e3ffce758a363320aa3c": "07b8f264964348bde66484f010646d00",
".git/objects/1f/fb28428fdecec85ed50dd9d8813f6311e25888": "6919719e80ba2ed0d6817dfd075b50e0",
".git/objects/2c/84e34ed027bb3501ee25bef4b444b99905aafb": "9e3d3577ef18303a5b136a0bc6176bfb",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/30/c12dde16b03f21a2daf33291092d3fa19c4120": "122478770d1b72f922c7049a41b0f367",
".git/objects/34/799296a816d0ec71932ccf7d131bccb812610f": "99193e8753e97e1c5334a64777cd52b7",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/a8d5589e8f0bcb6b7da81086c726f6f42b4216": "bd22ea62cf9d6745f64aacd23bc77ad2",
".git/objects/39/49d1433c15f109378abef84b694f65e9707053": "968bcd6840e48dbaf76b8df306d37748",
".git/objects/44/51397e9912c96a70f8e17059d5c803c07ac9e7": "9c86c973e4863d9b931cae5aaba449c7",
".git/objects/46/320a4858e745abccfbfb5362fbd9969d8951f0": "b1896edc37e203bb6a57c5d5d70377d2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b57ece5c9203005c7c84dca0e62db2d24e7ff0": "6488d1a23e7a0ee18406c02a844f0912",
".git/objects/48/b46486cf82db1773ff96b5c2c84a39b2c465a4": "d47654c44cfda5c3c785bc8913e4c332",
".git/objects/49/fd66598b7d04529347eccd14b2b2db042e6848": "ea118ba581704fbe15a39da115f3e5ac",
".git/objects/4b/ed45d4c1b1b61655f9791636ce93b60c7e1b17": "1d721472ec0c19df404c94aed13c1a02",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/3969fc5a1f196dd73141e02424063105f99abb": "321fa3239ee184d1e5d32a6402008b35",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/61/62c5095c52a91a3ab8118493e3ad9b5fe8914f": "07673f08dd1699975b25ce65a6414bea",
".git/objects/77/8194ee780287b4b630ca95b62ca58662bd159c": "8489a05a2138aeee993a8e96539bb0f1",
".git/objects/77/e69d81a951b76173dac7a4281623fae08c0a59": "789424b3b914309dfd733adc05cb67f5",
".git/objects/78/20386d8a445730f176f86ac80f9a6166f17c11": "16902ddf04e0a8a2f70795f4db4139c0",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/1720867f93230ec03d8d6252a23bb06e7318b3": "3efcb20e6a97a9f82742242831a898bb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/de94507b7ab439b181c2acb92e44668f8527b4": "7163b0ac42e371b1280c3b8b43bbef1d",
".git/objects/a1/0bd0b85dc4000adb144589d762022596ff83bc": "a42190db4aabb9f4093749b572ece9e9",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/15bffcdcd51acf949804afdf902bc8d8039e68": "823725a6e2c2bd6aa297a4cb2a2df12f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c4/56853f56549c81ebee18262472fe8e0dd7a630": "3a7847ba1dc9df0eba94c1ee14db959c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/016c1dd452a0eb00a6225ffb5cdd99d33d6347": "5910bfa115c5a6ea935c0a2dfb75d7f2",
".git/objects/e4/77891f8a4c67dab6e53b1eb8084cfca1c1b72b": "f5be503988961139dd84166637ffa00d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/cf7722b7769ba6b0a4abe8e9a6e2818883a97e": "f03c5551eaf606afb1c8151e50a4c987",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/e21b98c6a9503755ed24849da46738a14e47c0": "9e90bb31e86df2613ce4cc1f887faaef",
".git/ORIG_HEAD": "01d7e4fec00a0bf61f9060596b8a1aa8",
".git/refs/heads/master": "01d7e4fec00a0bf61f9060596b8a1aa8",
".git/refs/remotes/origin/master": "01d7e4fec00a0bf61f9060596b8a1aa8",
"assets/AssetManifest.bin": "ed6272c9ab15e8e2ccef9287ca2ed9ab",
"assets/AssetManifest.json": "8f57b2fc22cc3536fcd6f938fe01bc7a",
"assets/assets/icons/icon_logo_jateng.webp": "a8af07b970dfa8eb54616112e0ddcc5c",
"assets/assets/icons/icon_logo_wonosobo.webp": "1a9140b1bf93540755e14539bc5a0b55",
"assets/assets/icons/icon_more.webp": "ba1d5c592d5eb8e8a61981bcef02457c",
"assets/assets/icons/icon_tourism_attraction.webp": "311a25e8cad6e30c436d7cb100a967ac",
"assets/assets/icons/icon_tourism_destination.webp": "ff07d40895916ea1b2b69c263a02570f",
"assets/assets/icons/icon_tourism_development.webp": "b3551dd39230e33f0f4c8b8dde8556b4",
"assets/assets/icons/icon_tourism_license.webp": "350113408d10b3b1b1abcb838ee79fb7",
"assets/assets/icons/icon_tourism_partnership.webp": "46660d8184317c9d745d3e05e9c15e65",
"assets/assets/icons/icon_tourism_policy.webp": "58d224ca4148e8863eb01583dbae4591",
"assets/assets/icons/icon_tourism_promotion.webp": "e6065a19f999d9500e03ba88cb5bec29",
"assets/assets/icons/icon_tourism_resource.webp": "cef9b911abfbbdfb803cba39bd41b82a",
"assets/assets/images/background.webp": "eb83416da11b5f44302073dda9ac2302",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "6c39348273ecd4536f0a3ae2d862c9a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "57d9d1c595742ac1c14d3f7ceb96088a",
"/": "57d9d1c595742ac1c14d3f7ceb96088a",
"main.dart.js": "8aadc1132f64a41665062cc75bd4bf6d",
"manifest.json": "86ddacc98f1f0c987525b46d3432933e",
"README.md": "19568d5909e3d8eaad6683de1067fe77",
"version.json": "ea92f7edbeaa4c911f33a6707290e105"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
