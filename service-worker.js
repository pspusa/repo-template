/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dace0edf5d7bdc7bca41af3bf9b963f9"
  },
  {
    "url": "assets/css/1.styles.a907e45a.css",
    "revision": "e7d587538528e4b0c6e1665f7e8f4d68"
  },
  {
    "url": "assets/css/2.styles.280bc6f1.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.b2231dc2.css",
    "revision": "cdbcfbd9a0654e6beec824fcc18d54a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a907e45a.js",
    "revision": "87b26c931f15723340e79b7706f16a71"
  },
  {
    "url": "assets/js/2.280bc6f1.js",
    "revision": "00b9d2c92af7c3412ffde73c1b6dd1a2"
  },
  {
    "url": "assets/js/3.b4cdb5d1.js",
    "revision": "8337a6d8677369938b573e629aa9fb95"
  },
  {
    "url": "assets/js/4.70a21681.js",
    "revision": "38f6ae62454f421be964f57472d1ec6b"
  },
  {
    "url": "assets/js/5.89779a9d.js",
    "revision": "fa4b754adaf1e0bedc3f799f2b4af978"
  },
  {
    "url": "assets/js/6.6c57e561.js",
    "revision": "c914a3cbe0c639c6395d49d3beb4e20d"
  },
  {
    "url": "assets/js/app.b2231dc2.js",
    "revision": "7fb64cddf6d0ed94eb272fefb5772fb6"
  },
  {
    "url": "es/guide/index.html",
    "revision": "c69173797b2c80e55253d9e700612f27"
  },
  {
    "url": "es/index.html",
    "revision": "076ef599dec012aaa025294492cc8da6"
  },
  {
    "url": "guide/index.html",
    "revision": "ab00456ceacba1d74c16bbdd6120e505"
  },
  {
    "url": "img/psp-icon.svg",
    "revision": "c1035c0cd4aba75181a9b79aad500b46"
  },
  {
    "url": "img/psp-logo.png",
    "revision": "a576bd29a1446017a809ff137d6f4b24"
  },
  {
    "url": "img/psp-logo.svg",
    "revision": "545a2c900ec309b02602db5ad5889758"
  },
  {
    "url": "index.html",
    "revision": "7e0196b7cd67843b1195a1b7312e90cf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
