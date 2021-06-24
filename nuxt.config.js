export default {
  target: 'static',
  router: { base: '/' },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/fontawesome', {component: 'fa'}]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/content',
    ['nuxt-highlightjs', {style: 'vs2015'}]
  ],

  bootstrapVue: {
    icons: false,
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  fontawesome: {
    icons: {
      regular: [
        'faCircle',
        'faCalendarAlt'
      ],
      solid: [
        'faPhone',
        'faEnvelope',
        'faUser',
        'faBriefcase',
        'faUniversity',
        'faGraduationCap',
        'faMapMarkerAlt',
        'faEllipsisV',
        'faPlusCircle'
      ],
      brands: [
        'faFacebook',
        'faTwitter',
        'faInstagram',
        'faLinkedin',
        'faGithub'
      ]
    }
  },

  static: {
    prefix: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
