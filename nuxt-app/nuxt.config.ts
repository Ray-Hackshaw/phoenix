// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    "/": { prerender: true },
  },
  typescript: {
    typeCheck: true,
  },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  googleFonts: {
    families: {
      "Work+Sans": true,
    },
  },
  image: {
    // Options
    quality: 100,
  },
});
