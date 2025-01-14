<script setup lang='ts'>
import { defineProps, defineEmits, ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();


const props = defineProps({
  wordstem: Object,
    semfields: {
    type: Array as () => Object[], // Typage explicite ici
    required: true
  }
});
const emit = defineEmits(['handleShowWordstem']);

const handleShowWordstem = (wordstem : Object) => {
  console.log(wordstem);
  emit('handleShowWordstem', wordstem);
};


</script>

<template>
  <tr v-if="wordstem">
    <td>
      <span class="langws" :title="t(wordstem.wordStemLanguage)"> {{ t(wordstem.wordStemLanguage+'_abbr') }} </span>
    </td>
    <td> <b><a class="entry" @click="handleShowWordstem(wordstem)">{{
      wordstem.wordStemName }} </a></b></td>
    <td>
      <span class="langws" :title="t(wordstem.wordClass)">{{ t(wordstem.wordClass+'_abbr') }}</span>
      <span class="langws" :title="t(wordstem.gender)">{{ t(wordstem.gender+'_abbr') }}</span>
    </td>
    <td>
      <span class="langws" title="français">fr.</span>
      : <i>{{ wordstem.frTranslation }}</i>
      <br><span class="langws" title="anglais">ang.</span>
      : <i>{{ wordstem.engTranslation }}</i>
    </td>
    <td>{{ wordstem.firstOccurrence }}</td>
    <td v-if="semfields">{{ semfields[wordstem.semanticField-1].frName }}</td>
  </tr>
</template>