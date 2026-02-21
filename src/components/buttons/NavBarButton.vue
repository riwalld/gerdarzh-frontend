<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps<{
  title: string
  route: string
}>()
</script>

<template>
  <RouterLink
    class="px-2 hover:text-gray-300 transition-colors duration-200"
    :to="{ name: route }"
    >{{ t(title) }}</RouterLink
  >
</template>
