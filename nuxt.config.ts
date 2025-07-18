// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/stylelint-module',
    'nuxt-quasar-ui'
  ],
  devtools: {
    enabled: true, telemetry: false
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
        translate: 'no'
      },
      title: 'Job helper',
      meta: [
        {
          name: 'google',
          content: 'notranslate'
        }
      ],
      link: [
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: `${import.meta.env.NUXT_APP_BASE_URL || '/'}favicon.ico`
        }
      ]
    }
  },
  compatibilityDate: '2025-05-15',
  telemetry: {
    enabled: false
  },

  eslint: {
    config: {
      nuxt: {
        sortConfigKeys: true
      },
      stylistic: {
        semi: false,
        arrowParens: true,
        blockSpacing: true,
        commaDangle: 'never',
        indent: 2,
        quotes: 'single'
      }
    }
  },
  fonts: {
    families: [
      {
        name: 'Roboto',
        display: 'swap',
        provider: 'google',
        weights: [
          400,
          500,
          700
        ],
        subsets: [
          'cyrillic',
          'latin'
        ]
      }
    ]
  },

  quasar: {
    lang: 'ru',
    extras: {
      font: null
    },
    cssAddon: true,
    sassVariables: 'assets/scss/variables.scss',
    components: {
      defaults: {
        QBtn: {
          noCaps: true
        },
        QTabs: {
          noCaps: true
        },
        QTab: {
          noCaps: true
        },
        QRouteTab: {
          noCaps: true
        },
        QPage: {
          padding: true
        },
        QTable: {
          loadingLabel: 'Загрузка...',
          tableHeaderClass: 'bg-grey-3'
        },
        QInnerLoading: {
          label: 'Загрузка...'
        }
      }
    },
    config: {
      brand: {
        primary: '#066a45'
      }
    }
  },

  stylelint: {
    cache: false,
    extensions: [
      'css',
      'vue',
      'scss'
    ]
  }
})
