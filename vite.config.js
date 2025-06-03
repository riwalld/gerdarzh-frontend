import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { resolve, dirname } from 'node:path'

export default defineConfig({
  plugins: [vue(),VueI18nPlugin({
    include: resolve(dirname(fileURLToPath(import.meta.url)), './path/to/src/locales/**'),
  }),],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/shared/assets', import.meta.url)) },
      { find: '@cmp', replacement: fileURLToPath(new URL('./src/shared/cmp', import.meta.url)) },
      { find: '@stores', replacement: fileURLToPath(new URL('./src/shared/stores', import.meta.url)) },
      { find: '@use', replacement: fileURLToPath(new URL('./src/shared/use', import.meta.url)) },
    ],
  },
  server: {
    host: '0.0.0.0', 
    port: 3000, 
    allowedHosts: ['gerdarzh.eu'],
    hmr: {
      protocol: 'ws', 
      host: 'localhost',
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});