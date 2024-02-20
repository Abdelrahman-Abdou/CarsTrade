export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss","@vueuse/nuxt","@nuxtjs/supabase"],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000/api',
      UPLOADS_BASE_URL: process.env.UPLOADS_BASE_URL || 'http://localhost:3000',
    },
  },
});
