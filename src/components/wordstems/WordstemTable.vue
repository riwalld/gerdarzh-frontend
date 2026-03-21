<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import WordstemRow from '@/components/wordstems/WordstemRow.vue'
import { WordStemDto, SemanticField } from '@/utils/types'
import { useI18n } from 'vue-i18n'
import { getAPI } from '@/utils/APIRequests'
const { t } = useI18n()

const props = defineProps<{
  lgs: string[]
  smfields: string[]
}>()

const wordStemSet = ref<WordStemDto[]>([])
const emit = defineEmits<{
  (e: 'handleShowWordstem', wordstem: WordStemDto): void
}>()

// Pagination
const pageNum = ref(1)
const pageSize = ref(10)
const pageAmount = ref(1)
const orderingType = ref('word')
const wsCount = ref(0)

const updatePage = async (page: number, ordType: string) => {
  const lgs = props.lgs.join(',')
  const smfields = props.smfields.join(',')
  const response = await getAPI(
    '/wordstemList/' + orderingType.value + '/' + lgs + '/' + smfields + '/?page=' + page
  )
  wordStemSet.value = response.results
  pageNum.value = page
  orderingType.value = ordType
}

const updateWs = async () => {
  const lgs = props.lgs.join(',')
  const smfields = props.smfields.join(',')
  const response = await getAPI(
    '/wordstemList/' + orderingType.value + '/' + lgs + '/' + smfields + '/?page=1'
  )
  wordStemSet.value = response.results
  pageAmount.value = Math.ceil(response.count / pageSize.value)
  wsCount.value = response.count
}

watch(() => [props.lgs, props.smfields], updateWs)

onMounted(async () => {
  updateWs()
})
</script>

<template>
  <h3>{{ t('number_words') }}: {{ wsCount }}</h3>
  <div class="m-5">
    <div class="flex flex-row justify-end">
      <button
        class="mx-2 p-1 bg-slate-300 border border-gray-500 rounded-lg"
        v-if="pageNum > 1"
        @click="updatePage(pageNum - 1, orderingType)"
      >
        {{ t('previous') }}
      </button>
      <div
        v-if="pageNum > 1"
        class="mx-2 p-1 bg-slate-300 border border-gray-500 rounded-lg cursor-pointer"
        @click="updatePage(pageNum - 1, orderingType)"
      >
        {{ pageNum - 1 }}
      </div>
      <div class="mx-2 p-1 bg-slate-100 border border-gray-500 rounded-lg">{{ pageNum }}</div>
      <div
        v-if="pageNum < pageAmount"
        class="mx-2 p-1 bg-slate-300 border border-gray-500 rounded-lg cursor-pointer"
        @click="updatePage(pageNum + 1, orderingType)"
      >
        {{ pageNum + 1 }}
      </div>
      <button
        class="mx-2 p-1 bg-slate-300 border border-gray-500 rounded-lg"
        v-if="pageNum < pageAmount"
        @click="updatePage(pageNum + 1, orderingType)"
      >
        {{ t('next') }}
      </button>
    </div>
    <table class="text-sm w-[700px]">
      <thead class="bg-white">
        <tr>
          <th class="w-5">
            <div href="#" @click="updatePage(1, 'lang')">Lg.</div>
          </th>
          <th>
            <div href="#" @click="updatePage(1, 'word')">{{ t('word') }}</div>
          </th>
          <th>
            <div href="#" @click="updatePage(1, 'trans')">{{ t('translation') }}</div>
          </th>
          <th>
            <div href="#" @click="updatePage(1, 'year')">{{ t('occurence_year') }}</div>
          </th>
          <th>
            <div href="#" @click="updatePage(1, 'sem')">{{ t('lexical_field') }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <wordstem-row
          v-for="wordstem in wordStemSet"
          :key="wordstem.id"
          :wordstem="wordstem"
          @handleShowWordstem="emit('handleShowWordstem', $event)"
        />
      </tbody>
    </table>
  </div>
</template>
