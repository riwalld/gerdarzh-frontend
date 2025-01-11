import {createApp} from 'vue/dist/vue.esm-bundler'
import Root from './components/Root.vue'
import router from './router/index.js'
import "./main.css";

import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: ['br','fr'],
  messages
});

createApp(Root)
  .use(router)
  .use(i18n)
  .mount('#app')