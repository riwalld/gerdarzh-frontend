import {createApp} from 'vue/dist/vue.esm-bundler'
import Root from './components/Root.vue'
import router from './router/index.js'
import "./main.css";

createApp(Root)
  .use(router)
  .mount('#app')