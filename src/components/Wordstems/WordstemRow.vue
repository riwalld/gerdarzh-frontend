<script setup lang='ts'>
import { SemanticField, WordStemDto } from '../../utils/types';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const props = defineProps<{
  wordstem: WordStemDto,
  semfields: SemanticField[]
}>();

</script>

<template>
  <tr v-if="wordstem && semfields">
    <td>
      <span class="langws" :title="t(props.wordstem.wordStemLanguage)"> {{ t(wordstem.wordStemLanguage + '_abbr') }}
      </span>
    </td>
    <td> <router-link
        :to="{ name: 'wordstem-detail', params: { wordStemName: wordstem.name, wordStemId: wordstem.id } }"
        class="flex flex-row p-2 m-1 rounded-md justify-between">
        <b>{{ wordstem.name
        }}</b>
        <div> <span class="langws" :title="t(wordstem.wordClass)">{{
          t(wordstem.wordClass + '_abbr') }}</span>
          <span class="langws" :title="t(wordstem.gender)">{{ t(wordstem.gender + '_abbr') }}</span>
        </div>
      </router-link>
    </td>
    <td><i v-if="locale == 'fr'">{{ wordstem.frTranslation }}</i>
      <i v-if="locale == 'en'">{{ wordstem.engTranslation }}</i>
    </td>
    <td>{{ wordstem.firstOccurrence }}</td>
    <td v-if="semfields && wordstem.semanticField > 0 && wordstem.semanticField <= semfields.length">{{
      semfields[wordstem.semanticField - 1].frName }}</td>
  </tr>
</template>