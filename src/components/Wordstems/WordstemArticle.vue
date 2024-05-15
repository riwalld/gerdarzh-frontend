<template>
  <div id="modal-bg" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
      <h1 style="color:grey" class="wordstemname">{{
        wordstem.wordStemName }}</h1>
      <table style="width: 100%;">
        <tr>
          <td>
            <h3>Nature grammaticale</h3>
            <p><span  :title=wordstem.wordClass>{{ wordstem.wordClass }}</span>
              &nbsp&nbsp<span  :title=wordstem.gender>{{ wordstem.gender }}</span>
            </p>
          </td>
          <td>
            <h3>Langue associée</h3>
            <p >{{ wordstem.wordStemLanguage }}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h3>Traduction Française</h3>
            <p> {{ wordstem.frTranslation }}</p>
          </td>
          <td>
            <h3>Traduction Anglaise</h3>
            <p> {{ wordstem.engTranslation }}</p>
          </td>
        </tr>
      </table><br>
      <h3>Champs Sémantique</h3>
      <p> {{ semfields[wordstem.semanticField-1].frName }}</p>
      <h3>Details</h3>
      <p> {{ wordstem.descrFr }}</p>
      <h3>Sources</h3>
      <ul>
        <li v-for="src in wordstem.sources" :key="src.id"> {{ sources[src].sourceAbbreviation }} :
          {{ sources[src].sourceOriginalName }} ({{ sources[src].sourceEngName }})</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { setLanguages } from "../Config/Config.js";
export default {

  props: {
    wordstem: { type: Object, required: true },
    semfields: { type: Array, required: true },
    sources: { type: Array, required: true }
  },

  created() {
    setLanguages();
    /*
    fetch(host + '/wordstems/' + this.wordstem.wordstemId, { 
      method: "GET",     
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    } })
      .then(response => response.json())
      .then(wordStems => {
        this.wordStems = wordStems;
      });*/
  },

  methods: {
    close() {
      this.$emit('handleShowWordstem', null);
    }
  }
}
</script>