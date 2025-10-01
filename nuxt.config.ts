import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css', '@/assets/css/output.css'],
  modules: ['@nuxtjs/tailwindcss'],
  // add any runtime config or modules you need
})
