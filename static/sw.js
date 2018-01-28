importScripts('/_nuxt/workbox.dev.7002ba07.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-ssr",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.dc9c7b154410e90b0057.js",
    "revision": "1ee59f068cd1c46011eda45e088d0e64"
  },
  {
    "url": "/_nuxt/common.e395a740e4d937d51f45.js",
    "revision": "f4c1b6621c461a40e1d03b81fa7ef09d"
  },
  {
    "url": "/_nuxt/layouts/default.db76d73495ede0a7eb4c.js",
    "revision": "d24369b40125f07b9ada4bb1fa39971d"
  },
  {
    "url": "/_nuxt/manifest.27e473c4fe91caa1fb47.js",
    "revision": "8380f22389b009b88e6062c6ec954f83"
  },
  {
    "url": "/_nuxt/pages/foods/_id.457f67985c3390b6a647.js",
    "revision": "052e527ac42d2d4b2af62b044d417ce2"
  },
  {
    "url": "/_nuxt/pages/index.e734c5b5459ebeac930b.js",
    "revision": "1fd7169465d4a15143cba4565d294789"
  },
  {
    "url": "/_nuxt/pages/login/index.9af7058f6a075c5d1ffc.js",
    "revision": "3df322c92d064dbc7aa79ce7900da63c"
  },
  {
    "url": "/_nuxt/pages/posts/index.f5daf258d4a99a3be824.js",
    "revision": "9a6ed1b652baa14d01735f2bceec4fe9"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

