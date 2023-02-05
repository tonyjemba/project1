// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', 'nuxt-svgo', '@pinia/nuxt', '@vueuse/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Open+Sans': [400, 500],
        'Jost': [500],
      },
    }]],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Tony Jemba',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: 'Tony Jemba is a software Engineer from kampala who is so passionate and dedicated to his work',
        },
        {
          name: 'og: title',
          hid: 'og: title',
          content: 'Tony Jemba',
        },
        {
          name: 'og: description',
          hid: 'og: description',
          content: 'Tony Jemba is a software Engineer from kampala who is so passionate and dedicated to his work',
        },

      ],
    },
  },
  typescript: {
    strict: true,
  },

})
