import { getAPI } from "@/utils/APIRequests"
import { MiniWordStem, SemanticField } from "@/utils/types"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useBasicSets = defineStore('worstemSet', () => {
    const worstemSet = ref<MiniWordStem[]>([])
    const semFieldSet = ref<SemanticField[]>([])
    async function fetchBasicSets() {
        worstemSet.value = await getAPI('/wordstemstrset')
        semFieldSet.value = await getAPI('/semanticFields')
    }

    return {
        fetchWordstemSet: fetchBasicSets,
        worstemSet,
        semFieldSet
    }
})
