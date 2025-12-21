<script setup lang="ts">
import { WordStemDto } from '@/utils/types';
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const burger = ref(false);
const { t, locale } = useI18n();
const searchResult = ref(false);
const inputValue = ref('');
const showWordstem = ref<WordStemDto | null>(null);
const wordStems = ref<WordStemDto[]>([]);

const handleShowWordstem = (wordstem: WordStemDto) => {
  inputValue.value = '';
  searchResult.value = false;
  showWordstem.value = wordstem;
};

const resultList = computed(() => {
  if (!inputValue.value) {
    return [];
  }
  const inputValueLower = inputValue.value.toLowerCase();
  return wordStems.value.filter((ws) =>
    ws.name.toLowerCase().includes(inputValueLower)
  );
});
</script>

<template>
  <div class="w-96 m-auto flex flex-row items-top gap-5">
    <input type="text" v-model="inputValue" placeholder="Search..." @focus="searchResult = true" />
    <div class="absolute w-96 z-[1000] mx-auto bg-white shadow-[0px_1px_2px_#CCC]" v-show=searchResult>
      <div v-for="result in resultList.slice(0, 5)" :key="result.name" :value="result">
        <router-link to="wordstem-detail"></router-link>
      </div>
    </div>
  </div>
</template>
