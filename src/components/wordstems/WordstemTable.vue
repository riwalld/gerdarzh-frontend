<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import WordstemRow from "@/components/wordstems/WordstemRow.vue";
import { WordStemDto, SemanticField } from '@/utils/types';
import { useI18n } from 'vue-i18n';
import { getAPI } from '@/utils/APIRequests';
const { t } = useI18n();

const wordStemSet = ref<WordStemDto[]>([]);
const emit = defineEmits<{
  (e: 'handleShowWordstem', wordstem: WordStemDto): void
}>();



// Pagination
const pageNum = ref(1);
const pageSize = ref(10);
const pageAmount = ref(1);
const orderingType = ref('abc')

const updatePage = async (page: number, ordType: string) => {
  const response = await getAPI("/wordstems/" + ordType + "/?page=" + page);
  wordStemSet.value = response.results
  pageNum.value = page;
  orderingType.value = ordType;
};


onMounted(async () => {
  const response = await getAPI("/wordstems/word/?page=1");
  wordStemSet.value = response.results
  pageAmount.value = Math.ceil(response.count / pageSize.value)
});

</script>

<template>
  <div class="m-10">
    <table class="text-sm w-full">
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
        <wordstem-row v-for="wordstem in wordStemSet" :key="wordstem.id" :wordstem="wordstem"
          @handleShowWordstem="emit('handleShowWordstem', $event)" />
      </tbody>
    </table>

    <div class="text-center mt-4">
      <button v-if="pageNum > 1" @click="updatePage(pageNum - 1, orderingType)">{{ t('previous') }}</button>
      <span class="mx-2">Page: {{ pageNum }}</span>
      <button v-if="pageNum < pageAmount" @click="updatePage(pageNum + 1, orderingType)">{{
        t('next') }}</button>
    </div>
  </div>
</template>