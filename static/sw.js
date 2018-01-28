importScripts('/_nuxt/workbox.dev.7002ba07.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-ssr",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c6e94f40c981fb843a2b.js",
    "revision": "88d05bf5f80c810b82385a089cdc3649"
  },
  {
    "url": "/_nuxt/common.e395a740e4d937d51f45.js",
    "revision": "f4c1b6621c461a40e1d03b81fa7ef09d"
  },
  {
    "url": "/_nuxt/layouts/default.a6d7dabb059c3e3da5eb.js",
    "revision": "42b429a8add8015164cab369b04ee071"
  },
  {
    "url": "/_nuxt/manifest.4f7173fa327665a94f66.js",
    "revision": "8204c847a8b7ed19626650f9d46074e5"
  },
  {
    "url": "/_nuxt/pages/foods/_id.96b29808d60deeb95bd9.js",
    "revision": "45bb08ec3f84f75443c915cebb8d5329"
  },
  {
    "url": "/_nuxt/pages/index.dc96dbeebd9f017399f9.js",
    "revision": "3182500580057d219d6552d7627c4fd6"
  },
  {
    "url": "/_nuxt/pages/login/index.777fd019454184d6854f.js",
    "revision": "61ccf10bedee02b5cfa83b6cd5165585"
  },
  {
    "url": "/_nuxt/pages/posts/index.351f77756084e6442fe3.js",
    "revision": "a859c8f9fa448e99e990ea0f1491b1b1"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

