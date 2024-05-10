<template>
  <tr>
    <td>
      <span class="langws" :title="wordstem.wordStemLanguage"> {{ wordstem.wordStemLanguage }} </span>
    </td>
    <td> <b><a style="color: rgb(50, 50, 150)" :href="'/lexique/entree?nom=' + wordstem.wordStemName">{{
      wordstem.wordStemName }} </a></b></td>
    <td>
      <span class="langws" :title="wordstem.wordClass">{{ wordstem.wordClass }}</span>
      &nbsp;
      <span class="langws" :title="wordstem.wordGender">{{ wordstem.wordGender }}</span>
    </td>
    <td>
      <span class="langws" title="français">fr.</span>
      : <i>{{ wordstem.frTranslation }}</i>
      <br><span class="langws" title="anglais">ang.</span>
      : <i>{{ wordstem.engTranslation }}</i>
    </td>
    <td>{{ wordstem.firstOccurence }}</td>
    <td>{{ wordstem.semanticField }}</td>
  </tr>
</template>
<script>
import { setLanguages } from "../Config/Config.js";
export default {
  template: `

`,

  props: {
    wordstem: Object
  },

  created() {
    setLanguages();
  },
}</script>