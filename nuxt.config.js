export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'a55 - Mexico',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', href: '//fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap', as:"style", crossorigin: 'anonymous' },
      { rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap', crossorigin: "anonymous" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  styleResources: {
    stylus: [
      './assets/css/normalize.styl', 
      './assets/css/functions.styl'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/vuelidate.js' },
    { src: '~plugins/v-mask.js', ssr: false },
    { src: '~plugins/vue-awesome-swiper.js', ssr: false },
    { src: '~plugins/vue-animate-number.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading: false,
  publicRuntimeConfig: {
    baseAPI: process.env.BASE_API
  }
}
