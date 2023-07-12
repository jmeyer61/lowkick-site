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
      strapiBaseUri: process.env.STRAPI_URL || "http://localhost:1337"
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@nuxtjs/strapi',
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  buildModules: [

  ],
  image: {

  },
  head: {
    css: [
        "~/assets/style/main.css"
    ],
  },
});
