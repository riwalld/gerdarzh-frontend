<template>
  <section class="showWS">
    <h2>Lexique etymologique</h2>
    <h3>Nombre de mots: {{ wordStems.length }}</h3>
    <div>
      <table class="wstable" id="wstable">
        <thead style="background-color: rgb(204, 202, 195);">
          <tr>
            <th style="width: 20px;"><a href="#" @click="sortTable(0);"> Lg.</a></th>
            <th><a href="#" @click="sortTable(1);"> Mot</a></th>
            <th><a href="#" @click="sortTable(2);"> Nature<br>grammaticale</a></th>
            <th><a href="#" @click="sortTable(3);"> Traduction</a></th>
            <th><a href="#" @click="sortTable(4);"> Année<br>d'occurence</a></th>
            <th><a href="#" @click="sortTable(5);"> Champs Lexical</a></th>
          </tr>
        </thead>
        <tbody>
          <wordstem-row 
          v-for="wordstem in pageableWordstems"
          :key="wordstem.wordStemName"
          :wordstem="wordstem">
          </wordstem-row>
        </tbody>
      </table>
      <div id="pagesbutton">
        <button @click=changePage(pageNum-1)>Précédent</button>
        <span>Page: {{ pageNum }}</span>
        <button @click=changePage(pageNum+1)>Suivant</button>
      </div>
      <button @click="popAddWordstem()">Ajouter un terme</button>
    </div>
    <create-wordstem></create-wordstem>
  </section>
</template>

<script>
  import WordstemRow from "./WordstemRow.vue"; import CreateWordstem from "./CreateWordstem.vue"; import {
    host, pageSize
  } from "../Config/Config.js"; export default {
    components: { WordstemRow, CreateWordstem }, template: ` `,
    data() { return { wordStems: [], pageNum: 1 } }, created() {
      fetch(host + '/wordstems', { method: "GET" })
      .then(response => response.json())
      .then(wordStems => {
        this.wordStems = wordStems;
      });

      //insertdata(data, pageNum, pageSize);
    },

    computed: {
      pageableWordstems() {
        return this.wordStems.slice((this.pageNum - 1) * pageSize, (this.pageNum) * pageSize)
      },
      filters() {
        return {
          isBreton: this.wordStems.filter(wordstem => wordstem.wordstemLanguage == "LB")
        };
      }
    },

    methods: {
      changePage(page) {
        this.pageNum = page;
      },

      popAddWordstem() {
      },

      sortTable(columnIndex) {
        switch (columnIndex) {
          case 0:
            this.wordStems.sort((a, b) => (a.wordStemLanguage > b.wordStemLanguage) ? 1 : -1);
            break;
          case 1:
            this.wordStems.sort((a, b) => (a.wordStemName > b.wordStemName) ? 1 : -1);
            break;
          case 2:
            this.wordStems.sort((a, b) => (a.wordClass > b.wordClass) ? 1 : -1);
            break;
          case 3:
            this.wordStems.sort((a, b) => (a.frTranslation > b.frTranslation) ? 1 : -1);
            break;
          case 4:
            this.wordStems.sort((a, b) => (a.firstOccurence > b.firstOccurence) ? 1 : -1);
            break;
          case 5:
            this.wordStems.sort((a, b) => (a.semanticField > b.semanticField) ? 1 : -1);
            break;
          default:
            console.log(`No corresponding column to sort.`);
        }
        this.pageNum = 1
      }
    }
  }
</script>