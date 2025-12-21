<script setup lang="ts">
import { ref, onMounted } from 'vue';
import WordstemTable from "@/components/Wordstems/WordstemTable.vue";
import CreateWordstem from "@/components/Wordstems/CreateWordstem.vue";
import SearchInput from '@/components/search/SearchInput.vue';
import { getAPI } from '@/utils/APIRequests';
import { WordStemDto, SemanticField } from '@/utils/types';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const wordStems = ref<WordStemDto[]>([]);
const semfields = ref<SemanticField[]>([]);
const sources = ref<any[]>([]);
const addWordstemModal = ref(false);

const handleAddWordstem = (value: boolean) => {
  addWordstemModal.value = value;
};

onMounted(async () => {

  semfields.value = await getAPI("/semanticFields/");
  sources.value = await getAPI("/sources/");
  wordStems.value.sort((a, b) => a.name.localeCompare(b.name));
});
</script>

<template>
  <section class="text-center justify-center m-auto">
    <h2>{{ t('etymolgical_lexic') }}</h2>
    <h3>{{ t('number_words') }}: {{ wordStems.length }}</h3>
    <SearchInput />
    <button class="p-2 bg-slate-300" @click="handleAddWordstem(true)">
      {{ t('add_term') }}
    </button>
    <WordstemTable v-if="wordStems.length && semfields.length" :wordstems="wordStems" :semfields="semfields" />
    <create-wordstem v-if="addWordstemModal" :sources="sources" :semfields="semfields"
      @handleAddWordstem="handleAddWordstem" />
  </section>
</template>