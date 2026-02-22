import { getAPI } from '@/utils/APIRequests'
import { Language, MiniWordStem, SemanticField } from '@/utils/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchInputParametersStore = defineStore('searchInputParameters', {
  state: () => ({
    semfieldList: ref<SemanticField[]>([]),
    languageList: ref<Language[]>([]),
    miniWordstemList: ref<MiniWordStem[]>([])
  }),
  actions: {
    async fetchSearchInputParameters() {
      //this.semfieldList = await getAPI('/semfields')
      this.languageList = await getAPI('/languages')
      //this.miniWordstemList = await getAPI('/miniwordstems')
    }
  }
})

export const useStatisticNumbersStore = defineStore('miniwordstems', {
  state: () => ({
    miniWordstemCount: ref<number>(0)
  }),
  actions: {
    async fetchWordstems() {
      this.miniWordstemCount = await getAPI('/wordstemstrcount')
    }
  }
})

export const useLanguageStore = defineStore('languages', {
  state: () => ({
    languageList: ref<Language[]>([])
  }),
  actions: {
    async fetchLanguages() {
      this.languageList = await getAPI('/languagesset')
    }
  }
})
