import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@pinia/nuxt',
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_API_KEY }],
    // ...
  ],
  buildModules: ['nuxt-windicss'],
  css: ['~/styles/base.css'],
})
