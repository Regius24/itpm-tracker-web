import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt/'
  },
  build: {
    publicPath: '/nuxt/'
  },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
  ]
})
