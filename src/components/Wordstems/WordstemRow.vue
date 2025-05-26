<script setup lang='ts'>
import { defineProps, PropType } from 'vue';
import { SemanticField, WordStemDto } from '../../utils/types';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps({
  wordstem: {
    type: Object as PropType<WordStemDto>,
    required: true
  },
  semfields: {
    type: Array as PropType<SemanticField[]>,
    required: true
  }
});
/*
const emit = defineEmits(['handleShowWordstem']);

const handleShowWordstem = (wordstem: Object) => {
  console.log(wordstem);
  emit('handleShowWordstem', wordstem);
};
*/
</script>

<template>
  <tr v-if="wordstem && semfields">
    <td>
      <span class="langws" :title="t(props.wordstem.wordStemLanguage)"> {{ t(wordstem.wordStemLanguage + '_abbr') }}
      </span>
    </td>
    <td> <router-link
        :to="{ name: 'wordstem-detail', params: { wordStemName: wordstem.name, wordStemId: wordstem.id } }"
        class="bg-gray-200 p-2 m-1 rounded-md"><b>{{ wordstem.name }}</b></router-link>

    </td>
    <td>
      <span class="langws" :title="t(wordstem.wordClass)">{{ t(wordstem.wordClass + '_abbr') }}</span>
      <span class="langws" :title="t(wordstem.gender)">{{ t(wordstem.gender + '_abbr') }}</span>
    </td>
    <td>
      <span class="langws" title="français">fr.</span>
      : <i>{{ wordstem.frTranslation }}</i>
      <br><span class="langws" title="anglais">ang.</span>
      : <i>{{ wordstem.engTranslation }}</i>
    </td>
    <td>{{ wordstem.firstOccurrence }}</td>
    <td v-if="semfields && wordstem.semanticField > 0 && wordstem.semanticField <= semfields.length">{{
      semfields[wordstem.semanticField - 1].frName }}</td>
  </tr>
</template>