importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/18b6174b49b9d65a0b9f.js",
    "revision": "ac22b4e4947698ea3cd712089cfa3451"
  },
  {
    "url": "/_nuxt/35d839d677ee6d25963a.js",
    "revision": "bef5348d73c7983860fbd6274618ea12"
  },
  {
    "url": "/_nuxt/362123367f19a9854bcd.js",
    "revision": "5b7fc7c4eb0baebb92ef87acb43d0326"
  },
  {
    "url": "/_nuxt/5727e9c4ff6b3056afcf.js",
    "revision": "4a14a84ada9f5e6c3e21bc4ff2aa5f17"
  },
  {
    "url": "/_nuxt/ce142d41d90126eb398f.js",
    "revision": "a85090b8d12ab026d385e569852c5c5b"
  },
  {
    "url": "/_nuxt/fcbeb5e1d3acc77dde5b.js",
    "revision": "313f5c38e076c402a665c667b7ae661a"
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
