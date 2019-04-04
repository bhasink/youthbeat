const pkg = require('./package')
import webpack from 'webpack'


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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
      script: [
          {
              src:"/js/jquery.min.js",
              type: "text/javascript",
              async: true
          },

          {
              src:"/js/popper.min.js",
              type: "text/javascript",
              async: true
          },
          {
              src:"/js/bootstrap.min.js",
              type: "text/javascript",
              async: true
          },
          {
              src:"/js/owl.carousel.min.js",
              type: "text/javascript",
              async: true
          },
          {
              src: "/js/wow.min.js",
              type: "text/javascript",
              async: true
          },

          {
              src:"/js/main.js",
              type: "text/javascript",
              async: true
          },
      ],

  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */

    css: ["@/assets/css/animate.css","@/assets/css/owl.theme.default.min.css","@/assets/css/bootstrap.min.css", "@/assets/css/bootstrap-theme.min.css", "@/assets/css/animate.css","@/assets/css/font-awesome.css","@/assets/css/main.css","@/assets/css/animate.css"

  ],

    router:{
      middleware:["clearValidationErrors"],
      extendRoutes (routes, resolve) {
        routes.push({
          name: 'custom',
          path: '*',
          component: resolve(__dirname, 'pages/404.vue')
        })

      }
    },

    render: {
      static: {
        maxAge: 1000 * 60 * 60 * 24 * 7
      }
    },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      'plugins/axios.js','plugins/mixins/validation.js','plugins/vue-moment.js',
      {src: 'plugins/owl.js', ssr: false},
      { src: 'plugins/social-sharing.js', ssr: false },
      { src: 'plugins/wow.js', ssr: false }

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
      '@nuxtjs/onesignal',
      '@nuxtjs/pwa',
      '@nuxtjs/axios',
      '@nuxtjs/dotenv',
  ],

    // Options
    oneSignal: {
      cdn: true,
		  OneSignalSDK: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js',
      init: {
        appId: "42c3bd8f-982a-47e8-b6ad-3e32812659e2",
        autoRegister: false,
        allowLocalhostAsSecureOrigin: true,
        welcomeNotification: {
            disable: false
        }
      }
  },

  /*
  ** Axios module configuration
  */
  axios: {

    baseURL: "https://phplaravel-163112-711576.cloudwaysapps.com",
      credentials : false,
      proxy: false,
      debug: false,
      retry: {
          retries: 3
      },

    //   baseURL: "https://phplaravel-163112-681199.cloudwaysapps.com/api"
    //   proxyHeaders:false,
    // credentials:false,
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
      // publicPath: 'https://youthbeat.sgp1.cdn.digitaloceanspaces.com',
      maxChunkSize: 300000,
      plugins:[
        new webpack.ProvidePlugin({
            '$':'jquery',
            '_':'lodash'
        })
      ],

    extend(config, ctx) {

    }
  }
}
