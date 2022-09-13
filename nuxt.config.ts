import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiToken: process.env.STORYBLOK_API_KEY,
  },
  modules: [
    ["@storyblok/nuxt", { accessToken: 'Rl1KuJr5dqsodvNBeEm4QAtt' }]
    // ...
  ],
  buildModules: ['nuxt-windicss'],
  css: ['~/styles/base.css'],
})
