const pkg = require('./package')
const webpack = require("webpack");


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
              src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
              type: "text/javascript"
          },
          {
              src:
                  "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
              type: "text/javascript"
          },
          {
              src:
                  "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
              type: "text/javascript"
          },
          {
              src:
                  "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js",
              type: "text/javascript"
          },
          {
              src:
                  "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js",
              type: "text/javascript"
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

    css: ["@/assets/css/animate.css","@/assets/css/owl.theme.default.min.css","@/assets/css/bootstrap.min.css", "@/assets/css/bootstrap-theme.min.css", "@/assets/css/animate.css", "@/assets/css/main.css",

  ],

    router:{
      middleware:["clearValidationErrors"]
    },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      'plugins/axios.js','plugins/mixins/validation.js',
      {src: 'plugins/owl.js', ssr: false},
      // { src: 'plugins/vue-lazyload.js', ssr: false }

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
      '@nuxtjs/axios',
      '@nuxtjs/dotenv',
      [
          "nuxt-imagemin",
          {
              optipng: { optimizationLevel: 5 },
              gifsicle: { optimizationLevel: 2 }
          }
      ],
      // '@nuxtjs/pwa'



  ],
  /*
  ** Axios module configuration
  */
  axios: {

    baseURL: "http://phplaravel-163112-711576.cloudwaysapps.com/api/"

  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
      // publicPath: 'https://youthbeat.sgp1.cdn.digitaloceanspaces.com',

    extend(config, ctx) {

    }
  }
}
