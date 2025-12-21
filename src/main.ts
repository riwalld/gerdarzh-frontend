import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router/index.js'
import "./main.css";
import en from './locales/en.json';
import br from './locales/br.json';
import fr from './locales/fr.json';
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
const pinia = createPinia()
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: ['br', 'fr'],
  messages: {
    en,
    br,
    fr,
  },
});

createApp(App)
  .use(router)
  .use(i18n)
  .use(pinia)
  .mount('#app')