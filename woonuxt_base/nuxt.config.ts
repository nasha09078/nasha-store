import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Terminal from 'vite-plugin-terminal'


export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  app: {
    
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    
    },
    pageTransition: { name: 'page', mode: 'out-in' },
cdnURL: '/wp-content/themes/nasha-store/public/'
    
    // baseURL: 'http://192.168.39.185/wordpress',

  
  },

  experimental: {
    sharedPrerenderData: true,
  
  },
 
  // buildDir: 'wp-content/themes/nasha-store/public/.nuxt',  
  // generate: {
  //   routes: 'wp-content/themes/nasha-store/public',  
  // },

 


  css: [
    resolve('./public/css/global.less')
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [resolve('./app/plugins/init.ts')],

  components: [{ path: resolve('./app/components'), pathPrefix: false }],

  modules: [
    'woonuxt-settings',
    'nuxt-graphql-client',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    "@bg-dev/nuxt-naiveui",
    '@pinia/nuxt',
  
  
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },



  'graphql-client': {
    clients: {
      default: {
        host: process.env.GQL_HOST || 'http://localhost:4000/graphql',
        corsOptions: { mode: "cors", credentials: 'include' },
      },
    },
  },


  alias: {
    '#constants': resolve('./app/constants'),
    '#woo': '../.nuxt/gql/default',
    // '@stores': resolve('./app/stores'),  
    // '@utils': resolve('./app/utils'),  
  },

  // nitro: {
  //   routeRules: {
  //     '/': { prerender: true },
  //   },
  // },
  hooks: {
    'pages:extend'(pages) {
      const addPage = (name: string, path: string, file: string) => {
        pages.push({ name, path, file: resolve(`./app/pages/${file}`) });
      };

      addPage('product-page-pager', '/products/page/:pageNumber', 'products.vue');
      addPage('product-category-page', '/product-category/:categorySlug', 'product-category/[slug].vue');
      addPage('product-category-page-pager', '/product-category/:categorySlug/page/:pageNumber', 'product-category/[slug].vue');
      addPage('order-received', '/checkout/order-received/:orderId', 'order-summary.vue');
      addPage('order-summary', '/order-summary/:orderId', 'order-summary.vue');
    },
  },

  nitro: {
    routeRules: {
      // '/': { prerender: true },
      // '/products/**': { swr: 3600 },
      '/checkout/order-received/**': { ssr: false },
      '/order-summary/**': { ssr: false },
    },
  },



  // Multilingual support
  i18n: {
    locales: [
      { code: 'en_US', file: 'en-US.json', name: 'English 🇺🇸' },
      { code: 'ar_SA', file: 'ar-SA.json', name: 'العربية 🇸🇦' , dir: "rtl" },
      // { code: 'de_DE', file: 'de-DE.json', name: 'Deutsch 🇩🇪' },
      // { code: 'es_ES', file: 'es-ES.json', name: 'Español 🇪🇸' },
      // { code: 'fr_FR', file: 'fr-FR.json', name: 'Français 🇫🇷' },
      // { code: 'it_IT', file: 'it-IT.json', name: 'Italiano 🇮🇹' },
      // { code: 'pt_BR', file: 'pt-BR.json', name: 'Português 🇧🇷' },
    ],
    langDir: 'locales',
    defaultLocale: 'en_US',
    strategy: 'no_prefix',
  },

  vite: {
    optimizeDeps: {
      exclude: ['manifest-route-rule']
    },
    plugins: [
      AutoImport({
        imports: [
          'vue',
          {
           
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()],
        
      }),

      Terminal({
        output: ['terminal', 'console']
      })
    ]
  },
});
