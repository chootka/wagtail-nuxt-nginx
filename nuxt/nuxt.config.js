
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'MYSITE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MYSITE' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/apple-icon-57x57.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/apple-icon-60x60.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/apple-icon-72x72.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/apple-icon-76x76.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/apple-icon-114x114.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/apple-icon-120x120.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/apple-icon-144x144.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/apple-icon-152x152.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/manifest.json' },
      { rel: 'manifest', href: '/favicon.ico' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/admin': 'http://cms:8000', // your cms entry point
    '/api/v2/': 'http://cms:8000',
    '/static/': 'http://cms:8000',
    '/media/': 'http://cms:8000',
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
