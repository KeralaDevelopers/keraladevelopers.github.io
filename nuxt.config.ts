// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/styles/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  pages: true,
  content: {
    highlight: {
      theme: 'github-light',
    },
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
  },
});
