<template>
  <div id="modal-bg" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
      <h2>Proposer une nouvelle entité au jeu:</h2>
      <form @submit.prevent="submit">
        <div style="display: flex; padding: 10px;">
          <div style="padding-right: 65px;">
            <label for="pNCurrentName">Nom de l'entité :</label>
            <input type="text" v-model="properNounDto.currentName" required><br><br>

            <label for="litTransFr">Traduction littérale :</label>
            <input type="text" v-model="properNounDto.litTrans.litTransFr" required><br><br>

            <label for="litTransEng">Traduction littérale anglaise:</label>
            <input type="text" v-model="properNounDto.litTrans.litTransEng" required><br><br>
          </div>
          <div>
            <label for="wordTheme">Thème lexical :</label>
            <select v-model="properNounDto.wordTheme" required>
              <option value="1">Lieux et Pays</option>
              <option value="2">Figures Historiques</option>
              <option value="3">Figures Mythiques</option>
              <option value="4">Peuples et Tribus</option>
              <option value="5">Armes et Créatures</option>
              <option value="6">Prénoms et Noms de famille</option>
            </select><br><br>

            <label for="culturalAera">Aire culturelle :</label>
            <select v-model="properNounDto.culturalArea" required>
              <option value="1">Gaules</option>
              <option value="2">Bretagne</option>
              <option value="3">Pays de Galles</option>
              <option value="4">Irlande et Écosse</option>
            </select><br><br>

            <label for="litTransType">Type de traduction :</label>
            <select v-model="properNounDto.litTrans.litTransType" required>
              <option value="1">Nom de personne masculin</option>
              <option value="2">Nom de personne féminin</option>
              <option value="3">Nom d'un clan ou d'une tribu</option>
              <option value="4">Nom singulier masculin d'un lieu</option>
              <option value="5">Nom singulier féminin d'un lieu</option>
              <option value="6">Nom pluriel d'un lieu</option>
              <option value="10">Nom d'arme ou objet</option>
            </select><br><br>

            <label for="pNEtymoName">Forme ancienne ou étymologique :</label>
            <input type="text" v-model="properNounDto.etymoName" required><br><br>

            <label for="radicalPCInput">Radicaux proto-celtique :</label>
            <input type="text" v-model="pcRadicalInputValue">
            <div class="searchResult">
              <div v-for="result in resultList(pcRadicalInputValue).slice(0, 5)" :key="result.id" :value="result.id">
                <div @click="addPcRadical(result.id)"> {{ result.name }}
                </div>
              </div>
            </div>
            <div style="display: flex;">
              <div style="border: 1px solid black; padding: 5px; margin: 5px; background-color: azure;"
                v-for="selectedRadicalPC in properNounDto.wordStemsPC" :key="selectedRadicalPC">
                {{ selectedRadicalPC }}
              </div>
            </div><br>

          </div>
        </div>
        <label for="descrFr">Description (une cinquantaine de mots au plus) :</label>
        <textarea type="text" v-model="properNounDto.descrFr" rows="7" cols="90"
          style="max-width: 90%;"></textarea><br><br>

        <label for="descrEng">Description en anglais (une cinquantaine de mots au plus) :</label>
        <textarea type="text" v-model="properNounDto.descrEng" rows="7" cols="90" style="max-width: 90%;"></textarea>


        <input type="submit" value="Ajouter">
      </form>
    </div>
  </div>

</template>

<script>

import { host } from '../Config/Config';

export default {

  data() {
    return {
      properNounDto: {
        currentName: '',
        etymoName: '',
        wordStemsPC: [],
        descrFr: '',
        descrEng: '',
        shortDescrFr: '',
        shortDescrEng: '',
        wordTheme: '',
        culturalArea: '',
        litTrans: {
          litTransFr: '',
          litTransEng: '',
          litTransType: ''
        },
        place: '',
        country: '',
        period: '',
        year: 1000,
      },
      pcRadicalInputValue: '',
      pcRadicals: [],
      message: '',
      source: '',
    };
  },

  created() {
    fetch(host + "/wordstems/Str/", {
      method: "GET"
    }
    ).then(response => response.json())
      .then(pcRadicals => {
        this.pcRadicals = pcRadicals;
        console.log(this.pcRadicals)
      })

  },

  methods: {

    async submit() {
      console.log(this.properNounDto)
      try {
        await fetch(host + "/properNouns/", {
          body: JSON.stringify(this.properNounDto),
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        });
        this.message = 'Word Stem added successfully!';
        this.close();
      } catch (error) {
        this.message = 'There was an error while adding the noun.';
        console.error(error);
      }
    },

    close() {
      this.$emit('handleAddProperNoun', false);
    },
    resultList() {
      if (!this.pcRadicalInputValue) {
        return [];
      }
      const inputValue = this.pcRadicalInputValue.toLowerCase();
      return this.pcRadicals.filter((pcRad) =>
        pcRad.name.toLowerCase().includes(inputValue)
      );

    },
    addPcRadical(result) {
      this.properNounDto.wordStemsPC.push(result)
      console.log(this.properNounDto.wordStemsPC)
      this.pcRadicalInputValue = '';
    }
  }

}


</script>