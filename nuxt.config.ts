// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      GITHUB_URL: process.env.GITHUB_URL,
      TWITTER_URL: process.env.TWITTER_URL,
      DRIBBBLE_URL: process.env.DRIBBBLE_URL,
    },
  },
  modules: ['@nuxt/content', '@nuxtjs/google-fonts', "@nuxt/image","@vueuse/motion/nuxt","nuxt-icon"],
  css: ['~/assets/css/main.css'],
  googleFonts:{
    preconnect: true,
    prefetch: true,
    preload: true,
    download:false,
    useStylesheet: true,
    families: {
      Inter: ['100','200','300','400','500','600','700','800','900'],
    },
    outputDir:'assets/fonts'
  },
  vite: {
    server: {
      watch:{
        usePolling: true,
      } ,
        hmr: {
          protocol: "ws",
          host: "localhost",
        }
    }
},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content:{
    sources:{
      content: {
        driver: 'fs',
        prefix: '/article',
        base: __dirname + '/content'
      },
      data:{
        driver: "fs",
        base: __dirname + "/data"
      }
    }
  }
})
