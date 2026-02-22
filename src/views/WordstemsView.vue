<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WordstemTable from '@/components/wordstems/WordstemTable.vue'
import CreateWordstem from '@/components/wordstems/CreateWordstem.vue'
import SearchInput from '@/components/search/SearchInput.vue'
import { getAPI } from '@/utils/APIRequests'
import { SemanticField } from '@/utils/types'
import { useI18n } from 'vue-i18n'
import { useStatisticNumbersStore } from '@/stores/basicData'
const miniWordstemsStore = useStatisticNumbersStore()

onMounted(async () => {
  await miniWordstemsStore.fetchWordstems()
})

const { t } = useI18n()

const semfields = ref<SemanticField[]>([])
const sources = ref<any[]>([])
const addWordstemModal = ref(false)

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
    <h3>{{ t('number_words') }}: {{ miniWordstemsStore.miniWordstemCount }}</h3>
    <SearchInput />
    <button v-if="false" class="p-2 bg-slate-300" @click="handleAddWordstem(true)">
      {{ t('add_term') }}
    </button>
    <WordstemTable />

    <create-wordstem
      v-if="addWordstemModal"
      :sources="sources"
      :semfields="semfields"
      @handleAddWordstem="handleAddWordstem"
    />
  </section>
</template>
