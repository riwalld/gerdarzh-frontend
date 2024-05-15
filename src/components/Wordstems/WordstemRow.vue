<template>
  <tr>
    <td>
      <span class="langws" :title="wordstem.wordStemLanguage"> {{ wordstem.wordStemLanguage }} </span>
    </td>
    <td> <b><a class="entry" @click="handleShowWordstem(wordstem)">{{
      wordstem.wordStemName }} </a></b></td>
    <td>
      <span class="langws" :title="wordstem.wordClass">{{ wordstem.wordClass }}</span>
      <span class="langws" :title="wordstem.gender">{{ wordstem.gender }}</span>
    </td>
    <td>
      <span class="langws" title="français">fr.</span>
      : <i>{{ wordstem.frTranslation }}</i>
      <br><span class="langws" title="anglais">ang.</span>
      : <i>{{ wordstem.engTranslation }}</i>
    </td>
    <td>{{ wordstem.firstOccurrence }}</td>
    <td>{{ semfields[wordstem.semanticField-1].frName }}</td>
  </tr>
</template>
<script>
import { setLanguages } from "../Config/Config.js";
export default {

  props: {
    wordstem: Object,
    semfields :Array
  },

  data() {
    return {
      showWordstemArticle : false,
    }
  },

  created() {
    setLanguages();
  },

  methods:{
    handleShowWordstem(wordstem) {
      console.log(wordstem)
      this.$emit('handleShowWordstem', wordstem);
    }
  }
}</script>