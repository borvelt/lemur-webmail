const pkg = require('./package')
const langConfig = require('./lang/config')

module.exports = {
  mode: 'universal',
  // mode: 'spa',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff', height: '5px' },

  /*
   ** Global CSS
   */
  css: ['~assets/defaults.sass'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/mail.js',
    '~/plugins/i18n.js',
    '~/plugins/interceptor.js',
    { src: '~/plugins/ga.js', ssr: false },
    '~/plugins/directives/ga.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    // nuxt internationalization
    ['nuxt-i18n', langConfig]
    // Google Analytics
    // [
    //   '@nuxtjs/google-analytics',
    //   {
    //     id: 'UA-130545560-1'
    //   }
    // ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: false
  },
  proxy: {
    '/yesnowtf': 'https://yesno.wtf/api'
  },
  //Router middleware:
  router: { middleware: 'router-store' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // I want to use `fs` node js module in $axios interceptor.
      config.node = { fs: 'empty' }
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
