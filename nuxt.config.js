import en from "./locales/en.json";
import ar from "./locales/ar.json";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/i18n.js",
    "~/plugins/directives.js",
    "~plugins/bl-components",
    { src: "~/plugins/vueflags.js" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/dotenv",
    "@nuxtjs/google-analytics"
  ],
  colorMode: {
    classSuffix: ""
  },
  dotenv: {
    /* module options */
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    [
      "nuxt-i18n",
      {
        detectBrowserLanguage: false,
        locales: [
          {
            code: "ar",
            name: "arabic",
            dir: "rtl",
            flag: "sa"
          },
          {
            code: "en",
            name: "english",
            dir: "ltr",
            flag: "us"
          }
        ],
        defaultLocale: "ar",

        vueI18n: {
          fallbackLocale: "ar",
          messages: { ar, en }
        }
      }
    ]
  ],
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css"
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  watchers: {
    webpack: {
      ignored: /node_modules/
    }
  }
};
