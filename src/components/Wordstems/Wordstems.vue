<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import WordstemRow from "@/components/Wordstems/WordstemRow.vue";
import CreateWordstem from "@/components/Wordstems/CreateWordstem.vue";
import WordstemArticle from "@/components/Wordstems/WordstemArticle.vue";
import { getAPI } from '@/utils/APIRequests';
import { SemanticField, WordStemDto } from '@/utils/types';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const wordStems = ref<WordStemDto[]>([]);
const inputValue = ref('');
const pageNum = ref<number>(1);
const addWordstemModal = ref(false);
const showWordstem = ref<WordStemDto | null>(null);
const semfields = ref<SemanticField[]>([]);
const sources = ref<any[]>([]);
const lgColumun = ref(true);
const wordColumun = ref(true);
const wordclassColumun = ref(true);
const translationColumun = ref(true);
const occurrenceColumun = ref(true);
const semfieldColumun = ref(true);
const searchResult = ref(false);

const resultList = computed(() => {
  if (!inputValue.value) {
    return [];
  }
  const inputValueLower = inputValue.value.toLowerCase();
  return wordStems.value.filter((ws) =>
    ws.wordStemName.toLowerCase().includes(inputValueLower)
  );
});

const pageableWordstems = computed(() => {
  return wordStems.value.slice((pageNum.value - 1) * 10, pageNum.value * 10);
});

const handleAddWordstem = (boolean: boolean) => {
  addWordstemModal.value = boolean;
};

const handleShowWordstem = (wordstem: WordStemDto) => {
  inputValue.value = '';
  searchResult.value = false;
  showWordstem.value = wordstem;
};

const checkOrder = (nameA: string, nameB: string) => {
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

const changePage = (page: number) => {
  pageNum.value = page;
};

const sortTable = (columnIndex: number) => {
  switch (columnIndex) {
    case 0:
      if (lgColumun.value) {
        wordStems.value.sort((a, b) => checkOrder(a.wordStemLanguage, b.wordStemLanguage));
        lgColumun.value = false;
      } else {
        wordStems.value.sort((a, b) => checkOrder(b.wordStemLanguage, a.wordStemLanguage));
        lgColumun.value = true;
      }
      break;
    case 1:
      if (wordColumun.value) {
        wordStems.value.sort((a, b) => checkOrder(a.wordStemName, b.wordStemName));
        wordColumun.value = false;
      } else {
        wordStems.value.sort((a, b) => checkOrder(b.wordStemName, a.wordStemName));
        wordColumun.value = true;
      }
      break;
    case 2:
      if (wordclassColumun.value) {
        wordStems.value.sort((a, b) => checkOrder(a.wordClass, b.wordClass));
        wordclassColumun.value = false;
      } else {
        wordStems.value.sort((a, b) => checkOrder(b.wordClass, a.wordClass));
        wordclassColumun.value = true;
      }
      break;
    case 3:
      if (translationColumun.value) {
        wordStems.value.sort((a, b) => checkOrder(a.frTranslation, b.frTranslation));
        translationColumun.value = false;
      } else {
        wordStems.value.sort((a, b) => checkOrder(b.frTranslation, a.frTranslation));
        translationColumun.value = true;
      }
      break;
    case 4:
      if (occurrenceColumun.value) {
        wordStems.value.sort((a, b) => checkOrder(a.firstOccurrence, b.firstOccurrence));
        occurrenceColumun.value = false;
      } else {
        wordStems.value.sort((a, b) => checkOrder(b.firstOccurrence, a.firstOccurrence));
        occurrenceColumun.value = true;
      }
      break;
    case 5:
      if (semfieldColumun.value) {
        wordStems.value.sort((a, b) => checkOrder(semfields.value[a.semanticField - 1].frName, semfields.value[b.semanticField - 1].frName));
        semfieldColumun.value = false;
      } else {
        wordStems.value.sort((a, b) => checkOrder(semfields.value[b.semanticField - 1].frName, semfields.value[a.semanticField - 1].frName));
        semfieldColumun.value = true;
      }
      break;
    default:
      console.log(`No corresponding column to sort.`);
  }
  pageNum.value = 1;
};

onMounted(async () => {
  wordStems.value = await getAPI("/wordstems", '')
  semfields.value = await getAPI("/semanticFields/", '')
  sources.value = await getAPI("/sources/", '')
  wordStems.value.sort((a, b) => checkOrder(a.wordStemName, b.wordStemName));
});
</script>

<template>
  <section class="showWS">
    <h2>{{ t('etymolgical_lexic') }}</h2>
    <h3>{{ t('number_words') }}: {{ wordStems.length }}</h3>
    <div class="searchBar">
      <input type="text" v-model="inputValue" placeholder="Search..." @focus="searchResult = true" />

      <div class="searchResult" v-show=searchResult>
        <div v-for="result in resultList.slice(0, 5)" :key="result.wordStemName" :value="result">
          <div @click="handleShowWordstem(result)"> {{ result.wordStemName }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="pageableWordstems" style="margin: 50px;">
      <table class="wstable" id="wstable">
        <thead style="background-color: rgb(204, 202, 195);">
          <tr>
            <th style="width: 20px;"><a href="#" @click="sortTable(0);"> Lg.</a></th>
            <th><a href="#" @click="sortTable(1);"> {{ t('word') }}</a></th>
            <th><a href="#" @click="sortTable(2);"> {{ t('grammatical_nature') }}</a></th>
            <th><a href="#" @click="sortTable(3);"> {{ t('translation') }}</a></th>
            <th><a href="#" @click="sortTable(4);"> {{ t('occurence_year') }}</a></th>
            <th><a href="#" @click="sortTable(5);">{{ t('lexical_field') }} </a></th>
          </tr>
        </thead>
        <tbody v-if="pageableWordstems && semfields">
          <wordstem-row v-for="wordstem in pageableWordstems" :key="wordstem.id" :wordstem="wordstem"
            :semfields="semfields" @handleShowWordstem="handleShowWordstem">
          </wordstem-row>
        </tbody>
      </table>
      <div id="pagesbutton">
        <button v-if="pageNum > 1" @click="changePage(pageNum - 1)">{{ t('previous') }}</button>
        <span>Page: {{ pageNum }}</span>
        <button v-if="pageNum < wordStems.length / 10" @click="changePage(pageNum + 1)">{{ t('next') }}</button>
      </div>
      <button @click="handleAddWordstem(true)">{{ t('add_term') }}</button>
    </div>
    <create-wordstem v-if="addWordstemModal" :wordstem="showWordstem" :sources="sources" :semfields="semfields"
      @handleAddWordstem="handleAddWordstem"></create-wordstem>
    <WordstemArticle v-if="showWordstem !== null" :wordstem="showWordstem" :sources="sources" :semfields="semfields"
      @handleShowWordstem="handleShowWordstem">
    </WordstemArticle>
  </section>
</template>
