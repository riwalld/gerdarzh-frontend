<script setup lang="ts">
import { useSearchInputParametersStore } from '@/stores/basicData'
import { getAPI } from '@/utils/APIRequests'
import { WordStemDto } from '@/utils/types'
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const burger = ref(false)
const { t, locale } = useI18n()
const searchResult = ref(false)
const inputValue = ref('')
const lexicalField = ref('')
const includeDerived = ref<boolean>(false)
const showWordstem = ref<WordStemDto | null>(null)
const resultList = ref<WordStemDto[]>([])
const noResult = ref<boolean>(false)
const searchInputParametersStore = useSearchInputParametersStore()

const selectedLanguages = ref<string[]>([])
const handleShowWordstem = (wordstem: WordStemDto) => {
  inputValue.value = ''
  searchResult.value = false
  showWordstem.value = wordstem
}
function toggleLanguage(code: string) {
  const idx = selectedLanguages.value.indexOf(code)
  if (idx === -1) selectedLanguages.value.push(code)
  else selectedLanguages.value.splice(idx, 1)
}

const searching = async () => {
  const params = new URLSearchParams()

  if (inputValue.value) {
    params.append('q', inputValue.value)
  }

  if (selectedLanguages.value.length > 0) {
    params.append('lang', selectedLanguages.value.join(','))
  }

  if (lexicalField.value) {
    params.append('field', lexicalField.value)
  }

  if (!includeDerived.value) {
    params.append('derived', 'false')
  }

  const url = `/search/?${params.toString()}`

  resultList.value = await getAPI(url)

  noResult.value = resultList.value?.length === 0
}

onMounted(async () => {
  await searchInputParametersStore.fetchSearchInputParameters()
})
</script>

<template>
  <div class="w-96 m-auto flex flex-col items-top gap-5">
    <input
      type="text"
      v-model="inputValue"
      :placeholder="t('search')"
      @focus="searchResult = true"
      @keydown.enter="searching"
    />{{ selectedLanguages }}
    <v-row>
      <v-col
        v-for="language in searchInputParametersStore.languageList"
        :key="language.code"
        cols="3"
      >
        <v-btn
          :class="{ 'active-btn': selectedLanguages.includes(language.code) }"
          :id="'lang-' + language.code"
          block
          @click="toggleLanguage(language.code)"
          >{{ language.code }}
        </v-btn>
      </v-col>
    </v-row>

    <div
      class="absolute w-96 z-[1000] mx-auto bg-white shadow-[0px_1px_2px_#CCC]"
      v-show="searchResult"
    >
      <div v-for="result in resultList.slice(0, 5)" :key="result.name" :value="result">
        <router-link to="wordstem-detail"></router-link>
      </div>
    </div>
  </div>
</template>
