<script setup lang="ts">
import { WordStemDto } from '../../utils/types'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import { useSearchInputParametersStore } from '@/stores/basicData'
const basicSets = useSearchInputParametersStore()

const props = defineProps<{
  wordstem: WordStemDto
}>()
</script>

<template>
  <tr v-if="wordstem && basicSets.semfieldList">
    <td>
      <span class="langws" :title="t(props.wordstem.language.name)">
        {{ t(props.wordstem.language.name) }}
      </span>
    </td>
    <td>
      <router-link
        :to="{
          name: 'wordstem-detail',
          params: { wordStemName: wordstem.name, wordStemId: wordstem.id }
        }"
        class="flex flex-row p-2 m-1 rounded-md justify-between"
      >
        <b>{{ wordstem.name }}</b>
        <div>
          <span class="langws" :title="t(wordstem.wordClass)">{{
            t(wordstem.wordClass + '_abbr')
          }}</span>
          <span class="langws" :title="t(wordstem.gender)">{{ t(wordstem.gender + '_abbr') }}</span>
        </div>
      </router-link>
    </td>
    <td>
      <span v-for="translation in wordstem.translations" v-if="locale == 'fr'">{{
        translation
      }}</span>
    </td>
    <td>{{ wordstem.firstOccurrence }}</td>
    <td
      v-if="
        basicSets.semfieldList &&
        wordstem.semanticField > 0 &&
        wordstem.semanticField <= basicSets.semfieldList.length
      "
    >
      {{ basicSets.semfieldList[wordstem.semanticField - 1].frName }}
    </td>
  </tr>
</template>
