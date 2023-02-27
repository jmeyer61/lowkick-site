// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  build: {

  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    '~/plugins/fontawesome.js',
  ],
  runtimeConfig: {
    public: {
      strapiBaseUri: process.env.API_URL || "http://localhost:1337"
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo',
    '@nuxt/image-edge',
  ],
  buildModules: [

  ],
  image: {

  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
      }
    },
  },
  head: {
    css: [
        "~/assets/style/main.css"
    ],
  },
});
