// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "active",
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/stylesheets/all.scss"],
});
