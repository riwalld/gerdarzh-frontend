import {createApp} from 'vue/dist/vue.esm-bundler'
import Root from './components/Root.vue'
import router from './router/index.js'
import "./main.css";
import en from './locales/en.json';
import br from './locales/br.json';
import fr from './locales/fr.json';
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: ['br','fr'],
  messages: {
    en,
    br,
    fr,
  },
});

createApp(Root)
  .use(router)
  .use(i18n)
  .mount('#app')