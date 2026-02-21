<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const props = defineProps<{
  router: string
  text: string
}>()
</script>

<template>
  <router-link
    :to="{ name: router }"
    class="transition duration-300 text-white font-sans p-1 hover:text-white hover:font-bold hover:translate-x-1"
  >
    {{ t(text) }}</router-link
  >
</template>
