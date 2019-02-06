importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/32ff98408ac62630072a.js",
    "revision": "fee5b89b01fde0f52f083faafae4d83d"
  },
  {
    "url": "/_nuxt/3354c8b7d95c3599076f.js",
    "revision": "bb49cfc9049d90cdeddaa964bdb88901"
  },
  {
    "url": "/_nuxt/4a232fb85166fbfcf4c9.js",
    "revision": "7a80b14af6075f33da12778b2f63f0b5"
  },
  {
    "url": "/_nuxt/4e14ecbdf7029d392f04.js",
    "revision": "8129da950a00a852a70278e198ef11de"
  },
  {
    "url": "/_nuxt/7d97b6a85b451f38b104.js",
    "revision": "59d088be538983d759ab5558b1759a82"
  },
  {
    "url": "/_nuxt/7e1860ae7eb3a15bba58.js",
    "revision": "34995eeb802e428140f90196860f30f3"
  },
  {
    "url": "/_nuxt/81d26cda752ccbcb455a.js",
    "revision": "f08b369aa20412099b8e7c68a85b0173"
  },
  {
    "url": "/_nuxt/90f6c646309ade4acb1e.js",
    "revision": "119270655f354c94d1d22f10397ea8f6"
  },
  {
    "url": "/_nuxt/bd6baa9dfcce09e199a7.js",
    "revision": "8049c13be9f43dd59465049aaa30a0be"
  },
  {
    "url": "/_nuxt/d65d42892d4af91e521c.js",
    "revision": "0dd0faba1a39e6eed3cbbde525d806f0"
  },
  {
    "url": "/_nuxt/e574fb28f300d5c42d6d.js",
    "revision": "156cec110bc287ebe1dc738d191bdf7f"
  },
  {
    "url": "/_nuxt/f78c221cb83bb0b535a1.js",
    "revision": "376c71d20d74695d2d02aca713730b20"
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
