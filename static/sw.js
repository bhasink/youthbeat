importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/171cbdef11f21bc58343.js",
    "revision": "5262b5f3b9a3a329586f767e6a09df14"
  },
  {
    "url": "/_nuxt/21051f66c6557ffdc5fe.js",
    "revision": "8755eb44a0c485c91c37ad6c1308056e"
  },
  {
    "url": "/_nuxt/3d06a2af06b407aa3bf3.js",
    "revision": "40110842ca94d50f09b141cd99b2df21"
  },
  {
    "url": "/_nuxt/52bd9aab282ab614c485.js",
    "revision": "cb52eedfd6d1865fb6974ea0ee2525d6"
  },
  {
    "url": "/_nuxt/5433ff3fcb50b0753474.js",
    "revision": "56d37f901b41a197af675324d55a82ba"
  },
  {
    "url": "/_nuxt/5af36b7e0d89e170627d.js",
    "revision": "f09c812391bd71c9272b209a8473f4d4"
  },
  {
    "url": "/_nuxt/67af4878d116927db362.js",
    "revision": "ab8c213467209583e9e820845e7abe79"
  },
  {
    "url": "/_nuxt/6e28496d0076bde8a8f3.js",
    "revision": "aa225c991ae6794a4d4a8fe1955884e2"
  },
  {
    "url": "/_nuxt/74bcf9d6e62a2402e6a4.js",
    "revision": "9d004a0a623fbcfcb17c363502af0829"
  },
  {
    "url": "/_nuxt/8385dccfc829ed828f22.js",
    "revision": "413f79e1c7b7d712ab8c349a827962c6"
  },
  {
    "url": "/_nuxt/980aff306696946e41a2.js",
    "revision": "1dcb48f02775a3d7e7642f2862a59d32"
  },
  {
    "url": "/_nuxt/9d38c1cf9e96284c8974.js",
    "revision": "565af2826d804e26a72c479543cb8ffa"
  },
  {
    "url": "/_nuxt/ba4e9e025ac07b590af1.js",
    "revision": "6b53e327e58512458a53ff47a64b4065"
  },
  {
    "url": "/_nuxt/c6948a880efa1a0b1786.js",
    "revision": "5c0f096ba54460feed304cf82c2cfd14"
  },
  {
    "url": "/_nuxt/d30e5543412fe6af43c5.js",
    "revision": "6228a20aeabdff9ea7fa59791ada0927"
  },
  {
    "url": "/_nuxt/eea873f9eb430583ef97.js",
    "revision": "f8e72535a139fefb36fac23348dbc536"
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
