importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02c5e6e60dea22195d04.js",
    "revision": "7baf7df54916d642a670ede31abe4092"
  },
  {
    "url": "/_nuxt/07a62a472821ece0a56c.js",
    "revision": "1f0549a1cde795332c4d6f2a93aa3f96"
  },
  {
    "url": "/_nuxt/2a505be14a492bdf04bf.js",
    "revision": "f7a92fac92ee299d864f091932345ee1"
  },
  {
    "url": "/_nuxt/52bd9aab282ab614c485.js",
    "revision": "cb52eedfd6d1865fb6974ea0ee2525d6"
  },
  {
    "url": "/_nuxt/56c6b0ced2e9dffb07b0.js",
    "revision": "aff94c2f842ba0c8b2e6a4a711748483"
  },
  {
    "url": "/_nuxt/5af36b7e0d89e170627d.js",
    "revision": "f09c812391bd71c9272b209a8473f4d4"
  },
  {
    "url": "/_nuxt/66476236b6281f8bec12.js",
    "revision": "9fc2ad031ff051263102cfd264d36482"
  },
  {
    "url": "/_nuxt/6f99369d07381f07ba8e.js",
    "revision": "beac94189236fbe8baf54b09dcb01dcb"
  },
  {
    "url": "/_nuxt/71b7c4dbc557292bb001.js",
    "revision": "8d26b3cedcda7766cbca5ed99ec1330b"
  },
  {
    "url": "/_nuxt/7977d61779d3688ba6da.js",
    "revision": "fa59b973b801ef0e6cc268f96e6ac91f"
  },
  {
    "url": "/_nuxt/806905822957988535d1.js",
    "revision": "8812128006473ad0e5a5f254a99fe1f9"
  },
  {
    "url": "/_nuxt/9d38c1cf9e96284c8974.js",
    "revision": "565af2826d804e26a72c479543cb8ffa"
  },
  {
    "url": "/_nuxt/a3f3c888af0307ec40a7.js",
    "revision": "2d65cea2d75ec2cc4574b50cc444328a"
  },
  {
    "url": "/_nuxt/ad9de77d474e5c44dbec.js",
    "revision": "a2dc92958963616d32facd91d9f5da54"
  },
  {
    "url": "/_nuxt/eea873f9eb430583ef97.js",
    "revision": "f8e72535a139fefb36fac23348dbc536"
  },
  {
    "url": "/_nuxt/f8b73964ef02e24b9017.js",
    "revision": "93b7e4fefe41287aba42d90641bfd0f6"
  }
], {
  "cacheId": "YouthBeat",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
