<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import ProperNounRow from "./PropernounRow.vue";
import CreateProperNoun from "./CreateProperNoun.vue";
import ProperNounArticle from "./ProperNounArticle.vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
defineProps({});
defineEmits([]);

const properNouns = ref<any[]>([]);
const pageNum = ref(1);
const addProperNounModal = ref(false);
const showProperNoun = ref(false);
const currentName = ref<string | null>(null);

onMounted(async () => {
  
  try {
    const response = await fetch(`http://localhost:8000/properNouns/`, { method: "GET" });
    const data = await response.json();
    properNouns.value = data;
  } catch (error) {
    console.error("Erreur lors de la récupération des noms propres :", error);
  }
});

const pageableProperNouns = computed(() => {
  const start = (pageNum.value - 1) * 10;
  const end = pageNum.value * 10;
  return properNouns.value.slice(start, end);
});

function changePage(page: number) {
  pageNum.value = page;
}

function sortTable(columnIndex: number) {
  switch (columnIndex) {
    case 0:
      properNouns.value.sort((a, b) => (a.currentName > b.currentName ? 1 : -1));
      break;
    case 1:
      properNouns.value.sort((a, b) => (a.wordTheme > b.wordTheme ? 1 : -1));
      break;
    case 2:
      properNouns.value.sort((a, b) => (a.year > b.year ? 1 : -1));
      break;
    case 3:
      properNouns.value.sort((a, b) => (a.place > b.place ? 1 : -1));
      break;
    case 4:
      properNouns.value.sort((a, b) => (a.country > b.country ? 1 : -1));
      break;
    case 5:
      properNouns.value.sort((a, b) => (a.shortDescrFr > b.shortDescrFr ? 1 : -1));
      break;
    default:
      console.log(`No corresponding column to sort.`);
  }
  pageNum.value = 1;
}

function handleAddProperNoun(boolean: boolean) {
  addProperNounModal.value = boolean;
}

function handleShowProperNoun(properNoun: any | null) {
  if (properNoun != null) {
    currentName.value = properNoun.currentName;
    showProperNoun.value = true;
  } else {
    currentName.value = null;
    showProperNoun.value = false;
  }
}
</script>

<template>
  <section class="showWS">
    <h2>{{t('characters_places_and_demonym')}}</h2>
    <h3>{{t('word_count')}}: {{ properNouns.length }}</h3>
    <div style="margin: 50px;">
      <table class="wstable" id="wstable">
        <thead style="background-color: rgb(204, 202, 195);">
          <tr>
            <th><a href="#" @click="sortTable(0);"> {{t('word')}}</a></th>
            <th><a href="#" @click="sortTable(1);"> Thème lexical</a></th>
            <th style="max-width: 50px;"><a href="#" @click="sortTable(2);"> Période</a></th>
            <th><a href="#" @click="sortTable(3);"> Lieu</a></th>
            <th><a href="#" @click="sortTable(4);"> Pays</a></th>
            <th><a href="#" @click="sortTable(5);"> Description</a></th>
          </tr>
        </thead>
        <tbody>
          <properNoun-row v-for="propernoun in pageableProperNouns" :key="propernoun.currentName"
            :propernoun="propernoun" @handleShowProperNoun="handleShowProperNoun">
          </properNoun-row>
        </tbody>
      </table>
      <div id="pagesbutton">
        <button @click=changePage(pageNum-1)>{{t('previous')}}</button>
        <span>{{t('page')}}: {{pageNum}}</span>
        <button @click=changePage(pageNum+1)>{{t('next')}}</button>
      </div>
      <button @click="handleAddProperNoun(true)">{{t('add_name')}}</button>
    </div>
    <ProperNounArticle v-if="showProperNoun" :currentName="currentName"
      @handleShowProperNoun="handleShowProperNoun">
    </ProperNounArticle>
    <create-proper-noun v-if="addProperNounModal" @handleAddProperNoun="handleAddProperNoun"></create-proper-noun>
  </section>
</template>
