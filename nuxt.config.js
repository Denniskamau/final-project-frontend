const pkg = require('./package')

module.exports = {
  mode: 'universal',

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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',

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
          login: { url: '/auth/login', method: 'post', propertyName: 'data.token' },
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
    extractCSS: true,
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
    extend(config, ctx) {

    }
  }
}
