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
          <wordstem-row v-for="wordstem in pageableWordstems" :key="wordstem.wordStemName" :wordstem="wordstem"
            :semfields="semfields" @handleShowWordstem="handleShowWordstem">
          </wordstem-row>
        </tbody>
      </table>
      <div id="pagesbutton">
        <button @click=changePage(pageNum-1)>Précédent</button>
        <span>Page: {{ pageNum }}</span>
        <button @click=changePage(pageNum+1)>Suivant</button>
      </div>
      <button @click="handleAddWordstem(true)">Ajouter un terme</button>
    </div>
    <create-wordstem v-if="addWordstemModal" :wordstem="showWordstem" :sources="sources" :semfields="semfields"
      @handleAddWordstem="handleAddWordstem"></create-wordstem>
    <WordstemArticle v-if="showWordstem !== null" :wordstem="showWordstem" :sources="sources" :semfields="semfields"
      @handleShowWordstem="handleShowWordstem">
    </WordstemArticle>
  </section>
</template>

<script>
import WordstemRow from "./WordstemRow.vue";
import CreateWordstem from "./CreateWordstem.vue";
import { host, pageSize } from "../Config/Config.js";
import WordstemArticle from "./WordstemArticle.vue";

export default {
  components: { WordstemRow, CreateWordstem, WordstemArticle },

  data() {
    return {
      wordStems: [],
      pageNum: 1,
      addWordstemModal: false,
      showWordstem: null,
      semfields: [],
      sources: [],
      lgColumun: true,
      wordColumun: true,
      wordclassColumun: true,
      translationColumun: true,
      occurrenceColumun: true,
      semfieldColumun: true,
    }
  },

  created() {
    fetch(host + '/wordstems/', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(wordStems => {

        this.wordStems = wordStems;
      });
    this.getSemanticField()
    this.getSources()
  },

  computed: {
    pageableWordstems() {
      return this.wordStems.slice((this.pageNum - 1) * pageSize, (this.pageNum) * pageSize)
    }
  },

  methods: {

    async getSemanticField() {
      try {
        const response = await fetch(host + "/semanticFields/", {
          method: "GET"
        }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        this.semfields = await response.json();
        console.log(this.semfields)
      } catch (error) {
        console.error(error);
      }
    },
    async getSources() {
      try {
        const response = await fetch(host + "/sources/", {
          method: "GET"
        }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        this.sources = await response.json();
        console.log(this.sources)
      } catch (error) {
        console.error(error);
      }
    },
    changePage(page) {
      this.pageNum = page;
    },

    handleAddWordstem(boolean) {
      this.addWordstemModal = boolean;
    },

    handleShowWordstem(wordstem) {
      console.log(wordstem)
      this.showWordstem = wordstem;
    },

    checkOrder(nameA, nameB) {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    },

    sortTable(columnIndex) {
      switch (columnIndex) {
        case 0:
          if(this.lgColumun){
          this.wordStems.sort((a, b) => this.checkOrder(a.wordStemLanguage, b.wordStemLanguage));
          this.lgColumun = false}
          else {
            this.wordStems.sort((a, b) => this.checkOrder(b.wordStemLanguage, a.wordStemLanguage));
            this.lgColumun = true
          }
          break;
        case 1:
        if(this.wordColumun){
          this.wordStems.sort((a, b) => this.checkOrder(a.wordStemName, b.wordStemName));
          this.wordColumun = false}
          else {
            this.wordStems.sort((a, b) => this.checkOrder(b.wordStemName, a.wordStemName));
            this.wordColumun = true
          }
          break;
        case 2:
        if(this.wordclassColumun){
          this.wordStems.sort((a, b) => this.checkOrder(a.wordClass, b.wordClass));
          this.wordclassColumun = false}
          else {
            this.wordStems.sort((a, b) => this.checkOrder(b.wordClass, a.wordClass));
            this.wordclassColumun = true
          }
          break;
        case 3:
        if(this.translationColumun){
          this.wordStems.sort((a, b) => this.checkOrder(a.frTranslation, b.frTranslation));
          this.translationColumun = false}
          else {
            this.wordStems.sort((a, b) => this.checkOrder(b.frTranslation, a.frTranslation));
            this.translationColumun = true
          }
         break;
        case 4:
        if(this.occurrenceColumun){
          this.wordStems.sort((a, b) => this.checkOrder(a.firstOccurrence, b.firstOccurrence));
          this.occurrenceColumun = false}
          else {
            this.wordStems.sort((a, b) => this.checkOrder(b.firstOccurrence, a.firstOccurrence));
            this.occurrenceColumun = true
          }
          break;
        case 5:
        if(this.semfieldColumun){
          this.wordStems.sort((a, b) => this.checkOrder(this.semfields[a.semanticField - 1].frName , this.semfields[b.semanticField - 1].frName ));
          this.semfieldColumun = false}
          else {
            this.wordStems.sort((a, b) => this.checkOrder(this.semfields[b.semanticField - 1].frName , this.semfields[a.semanticField - 1].frName ));
            this.semfieldColumun = true
          }
          break;
        default:
          console.log(`No corresponding column to sort.`);
      }
      this.pageNum = 1
    }
  }
}
</script>