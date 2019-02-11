importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ba92f7ca0a6e9d67cad.js",
    "revision": "fadb1d1eba597188e690acb56ad30b9a"
  },
  {
    "url": "/_nuxt/265660e99dadd4c229f2.js",
    "revision": "f55de6ec949f463c89045cc8af4e3ee8"
  },
  {
    "url": "/_nuxt/39c7cb4459b0399065fd.js",
    "revision": "82bc5b679f81b048f3be8e400394d1fc"
  },
  {
    "url": "/_nuxt/4099f917aea0d9aef7d4.js",
    "revision": "a161e7bcf2ff5be01a6856478fe3a8f9"
  },
  {
    "url": "/_nuxt/66f840faf5d2a1aceef5.js",
    "revision": "0c017f2b3491ffd174613509ce968f0a"
  },
  {
    "url": "/_nuxt/6c28615cac8ac961e20d.js",
    "revision": "0e92faec98dcbd3a59fc9fe0f216b6c8"
  },
  {
    "url": "/_nuxt/7bf66334741f4f6aa954.js",
    "revision": "490a5d5f6e5e3c4b2eb81cd870f20ed4"
  },
  {
    "url": "/_nuxt/95049307f25d023bd97d.js",
    "revision": "f4801241468fb10512c074b9b15e3030"
  },
  {
    "url": "/_nuxt/a48fad70f04c387907e6.js",
    "revision": "4ab766ce94dc56ea13dd7e8f6c1f42be"
  },
  {
    "url": "/_nuxt/afe8ffffa7435464a0dc.js",
    "revision": "dfa73437cad9c68aedbbc21696bcf9d8"
  },
  {
    "url": "/_nuxt/b7a83c40e52b0e8092ef.js",
    "revision": "1be9e20feb8717abbca35a3e3903f843"
  },
  {
    "url": "/_nuxt/be81344258eb826c29d0.js",
    "revision": "e1e3f0a923bdf4af9d772601f1660007"
  },
  {
    "url": "/_nuxt/bfac6478c9aae4672704.js",
    "revision": "c344346b75c50cce8b12832c4acbf7ed"
  },
  {
    "url": "/_nuxt/dae54fec8f0b44815ecf.js",
    "revision": "5335c0463f8070db9c0c387117455aec"
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
