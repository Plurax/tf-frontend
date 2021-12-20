require("dotenv").config();

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  //  ssr: false,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt-hero-icons/solid/nuxt',
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxt-hero-icons/solid/nuxt'
  ],
  axios: {
    baseURL: 'http://localhost:1337'
  },
  apollo: {
    clientConfigs: {
      //      default: '~/plugins/apollo-client.js'
      default: {
        httpEndpoint: 'http://localhost:1337/graphql',
        tokenName: 'rawJwt'
      }
    },
    watchLoading: "@/apollo/loadingHandler.js",
    errorHandler: "@/apollo/errorHandler.js",
    defaultOptions: {
      $query: {
        fetchPolicy: "network-only",
        errorPolicy: "all"
      }
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'todo App',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: ["auth"]
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/tasks',
      home: '/tasks'
    },
    strategies: {
      local: {
        token: {
          property: 'jwt',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: '',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/local', method: 'post' },
          logout: false,
          user: { url: '/api/users/me', method: 'get' }
        }
      }
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
