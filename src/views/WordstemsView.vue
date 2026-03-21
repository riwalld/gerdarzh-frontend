<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WordstemTable from '@/components/wordstems/WordstemTable.vue'
import CreateWordstem from '@/components/wordstems/CreateWordstem.vue'
import SearchInput from '@/components/search/SearchInput.vue'
import { getAPI } from '@/utils/APIRequests'
import { SemanticField } from '@/utils/types'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const semfields = ref<SemanticField[]>([])
const selectedLanguages = ref<string[]>(['all'])
const selectedSemFields = ref<string[]>(['all'])
const sources = ref<any[]>([])
const addWordstemModal = ref(false)

const updateLgs = (lgs: string[]) => {
  selectedLanguages.value = lgs
}
const updateSemfields = (sm: string[]) => {
  selectedSemFields.value = sm
}
const handleAddWordstem = (value: boolean) => {
  addWordstemModal.value = value
}

onMounted(async () => {
  semfields.value = await getAPI('/semanticFields/')
  sources.value = await getAPI('/sources/')
})
</script>

<template>
  <section class="text-center justify-center m-auto">
    <h2>{{ t('etymolgical_lexic') }}</h2>
    <SearchInput @lgs="updateLgs($event)" @smfields="updateSemfields($event)" />
    <button v-if="false" class="p-2 bg-slate-300" @click="handleAddWordstem(true)">
      {{ t('add_term') }}
    </button>
    <WordstemTable :lgs="selectedLanguages" :smfields="selectedSemFields" />

    <create-wordstem
      v-if="addWordstemModal"
      :sources="sources"
      :semfields="semfields"
      @handleAddWordstem="handleAddWordstem"
    />
  </section>
</template>
