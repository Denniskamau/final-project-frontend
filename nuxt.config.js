const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Hisia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', herf: 'https://fonts.googleapis.com/css?family=Nunito|Pacifico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,

  /*
  ** Global CSS
  */
  css: [
    // CSS file in the project
    //{ src: '~assets/css/forms.css', lang: 'css' },
     '@/assets/css/forms.css',
     '@/assets/css/main.css'

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/validate',
    { src: "~/plugins/chart", ssr: false }

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/auth',


  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://127.0.0.1:5000'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post'},
          //register: { url: '/auth/register', method: 'post', propertyName: 'data.token' },
          logout: false,
          user: false
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: false,
    cssSourceMap: false,
    // postcss: {
    //   preset: {
    //     features: {
    //       customProperties: false
    //     }
    //   }
    // },
    /*
    ** You can extend webpack config here
    */
   extend (config, { isDev }) {
    if (isDev && process.client) {
    config.module.rules.push({
    enforce: 'pre',
    test: /\.(js|vue)$/,
    loader: 'css-loader',
    exclude: /(node_modules)/
    })
    }
    }
  }
}
