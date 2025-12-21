<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { relatedWordstemDTO } from '@/utils/types';
const { t } = useI18n();
const props = defineProps<{
  related: relatedWordstemDTO
}>();
</script>
<template>
  <div class="p-2"> <span class="langws" :title="t(related.word_stem_language)"> {{
    t(related.word_stem_language +
      '_abbr') }}
    </span> : <router-link
      :to="{ name: 'wordstem-detail', params: { wordStemName: related.name, wordStemId: related.word_stem_id } }"
      class="bg-gray-200 p-2 m-1 rounded-md"><b>{{ related.name }}</b></router-link></div>
</template>
