// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  app:{
    head: {
      // Other head properties...
  
      // Include the FontAwesome Kit script
      script: [
        {
          src: 'https://kit.fontawesome.com/cb81ab2c27.js',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
