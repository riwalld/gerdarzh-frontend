<script setup lang="ts">
import { getAPI } from '@/utils/APIRequests'
import { WordStemDto } from '@/utils/types'
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const burger = ref(false)
const { t, locale } = useI18n()
const searchResult = ref(false)
const inputValue = ref('')
const showWordstem = ref<WordStemDto | null>(null)
const resultList = ref<WordStemDto[]>([])
const noResult = ref<boolean>(false)

const handleShowWordstem = (wordstem: WordStemDto) => {
  inputValue.value = ''
  searchResult.value = false
  showWordstem.value = wordstem
}

const searching = async () => {
  resultList.value = await getAPI('/search/?q=' + inputValue.value)
  if (resultList.value && resultList.value.length === 0) {
    noResult.value = true
  }
}
</script>

<template>
  <div class="w-96 m-auto flex flex-row items-top gap-5">
    <input
      type="text"
      v-model="inputValue"
      :placeholder="t('search')"
      @focus="searchResult = true"
      @keydown.enter="searching"
    />
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
