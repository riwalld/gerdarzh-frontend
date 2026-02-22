import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router/index.js'
import './main.css'
import en from './locales/en.json'
import br from './locales/br.json'
import fr from './locales/fr.json'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const pinia = createPinia()
const i18n = createI18n({
  locale: 'br',
  fallbackLocale: ['en', 'fr'],
  messages: {
    en,
    br,
    fr
  }
})

createApp(App).use(vuetify).use(router).use(i18n).use(pinia).mount('#app')
