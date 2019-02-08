importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08731e59efe683ae7ac6.js",
    "revision": "663a0524363e0b4d160d94d393880961"
  },
  {
    "url": "/_nuxt/0ec822fa1606868d00e8.js",
    "revision": "6b7e9503077a2039dcb22693fc1b64b9"
  },
  {
    "url": "/_nuxt/47e4119699b1fd5aa749.js",
    "revision": "6f460ad170539d42b53c0e9cbe5a9672"
  },
  {
    "url": "/_nuxt/62ca2367b4380f750e33.js",
    "revision": "4a225d4c657f853ef87c4dc3e9137f52"
  },
  {
    "url": "/_nuxt/7e1860ae7eb3a15bba58.js",
    "revision": "34995eeb802e428140f90196860f30f3"
  },
  {
    "url": "/_nuxt/82197e0e04bcb871fe98.js",
    "revision": "7de6108cb29a97187fcd5bc9ec6f8b92"
  },
  {
    "url": "/_nuxt/90f6c646309ade4acb1e.js",
    "revision": "119270655f354c94d1d22f10397ea8f6"
  },
  {
    "url": "/_nuxt/a93e8b2dea8c42daab66.js",
    "revision": "8a628d47d5edc4eaa2b0a6ff4e33421f"
  },
  {
    "url": "/_nuxt/b830bcb730d7d02c2b84.js",
    "revision": "d25b6fa8d44c89778ac71fa815a04d6f"
  },
  {
    "url": "/_nuxt/bd6baa9dfcce09e199a7.js",
    "revision": "8049c13be9f43dd59465049aaa30a0be"
  },
  {
    "url": "/_nuxt/cac86e88953fe6153494.js",
    "revision": "77beb08e2e3164059f1fc42b6faea6f8"
  },
  {
    "url": "/_nuxt/d9e1f974fe548e00b018.js",
    "revision": "4e9881e3c0d75ada218a436b3075a90a"
  },
  {
    "url": "/_nuxt/fd45e07b79d3fa0c25c8.js",
    "revision": "af3307005df498c20a70b37709505a01"
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
