<template>
  <section class="showWS">
    <h2>Personnages, lieux et gentilés celtiques</h2>
    <h3>Nombre de mots: {{ properNouns.length }}</h3>
    <div style="margin: 50px;">
      <table class="wstable" id="wstable">
        <thead style="background-color: rgb(204, 202, 195);">
          <tr>
            <th><a href="#" @click="sortTable(0);"> Mot</a></th>
            <th><a href="#" @click="sortTable(1);"> Thème lexical</a></th>
            <th style="max-width: 50px;"><a href="#" @click="sortTable(2);"> Période</a></th>
            <th><a href="#" @click="sortTable(3);"> Lieu</a></th>
            <th><a href="#" @click="sortTable(4);"> Pays</a></th>
            <th><a href="#" @click="sortTable(5);"> Description</a></th>
          </tr>
        </thead>
        <tbody>
          <properNoun-row v-for="propernoun in pageableProperNouns" :key="propernoun.currentName"
            :propernoun="propernoun">
          </properNoun-row>
        </tbody>
      </table>
      <div id="pagesbutton">
        <button @click=changePage(pageNum-1)>Précédent</button>
        <span>Page: {{ pageNum }}</span>
        <button @click=changePage(pageNum+1)>Suivant</button>
      </div>
      <button @click="handleAddProperNoun(true)">Ajouter un nom</button>
    </div>
    <create-proper-noun v-if="addProperNounModal" @handleAddProperNoun="handleAddProperNoun"></create-proper-noun>
  </section>
</template>

<script>
import { host, pageSize } from "../Config/Config.js";
import ProperNounRow from "./PropernounRow.vue";
import CreateProperNoun from "./CreateProperNoun.vue";

export default {

  components: { ProperNounRow, CreateProperNoun },

  template: `
    
    `,

  data() {
    return {
      properNouns: [],
      pageNum: 1,
      addProperNounModal: false,
      pcRadicals: []
    }
  },

  created() {
    fetch(host + '/properNouns/', {
      method: "GET"
    }
    )
      .then(response => response.json())
      .then(properNouns => {
        this.properNouns = properNouns;
      });
  },

  computed: {
    pageableProperNouns() {
      return this.properNouns.slice((this.pageNum - 1) * pageSize, (this.pageNum) * pageSize)
    },
  },

  methods: {
    changePage(page) {
      this.pageNum = page;
    },

    sortTable(columnIndex) {
      switch (columnIndex) {
        case 0:
          this.properNouns.sort((a, b) => (a.currentName > b.currentName) ? 1 : -1);
          break;
        case 1:
          this.properNouns.sort((a, b) => (a.wordTheme > b.wordTheme) ? 1 : -1);
          break;
        case 2:
          this.properNouns.sort((a, b) => (a.year > b.year) ? 1 : -1);
          break;
        case 3:
          this.properNouns.sort((a, b) => (a.place > b.place) ? 1 : -1);
          break;
        case 4:
          this.properNouns.sort((a, b) => (a.country > b.country) ? 1 : -1);
          break;
        case 5:
          this.properNouns.sort((a, b) => (a.shortDescrFr > b.shortDescrFr) ? 1 : -1);
          break;
        default:
          console.log(`No corresponding column to sort.`);
      }
      this.pageNum = 1
    },
    handleAddProperNoun(boolean) {
      this.addProperNounModal = boolean;
    },
  }
}
</script>