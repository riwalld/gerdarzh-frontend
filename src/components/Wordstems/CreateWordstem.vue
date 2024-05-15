<template>
  <div id="modal-bg" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
      <h2>Proposer un nouveau terme:</h2>
      <form @submit.prevent="submit">
        <label for="wordStemName">Terme :</label>
        <input type="text" v-model="wordstemDto.wordStemName" required><br><br>

        <label for="wordStemLanguage">Langue du mot :</label>
        <select v-model="wordstemDto.wordStemLanguage" required>
          <option value="LB">Breton</option>
          <option value="BBQ">Brittonique</option>
          <option value="LC">Cornique</option>
          <option value="LE">Anglais</option>
          <option value="LF">Français</option>
          <option value="LG">Gaulois</option>
          <option value="LGER">Germanique</option>
          <option value="LIE">Proto-indo-européen</option>
          <option value="LIR">Irlandais</option>
          <option value="LOI">vieil Irlandais</option>
          <option value="LS">Gaélique écossais</option>
          <option value="LPC">Proto-celte</option>
          <option value="LW">Gallois</option>
          <option value="LLT">Latin</option>
        </select><br><br>

        <label for="phonetic">Phonétique :</label>
        <input type="text" v-model="wordstemDto.phonetic" required><br><br>

        <label for="gender">Genre :</label>
        <select v-model="wordstemDto.gender" required>
          <option value="GM">Masculin</option>
          <option value="GF">Féminin</option>
          <option value="GN">Neutre</option>
          <option value="GU">Inconnu</option>
          <option value="NO">N/A</option>
        </select><br><br>

        <label for="wordClass">Classe du mot :</label>
        <select v-model="wordstemDto.wordClass" required>
          <option value="WN">Nom</option>
          <option value="WV">Verbe</option>
          <option value="WADJ">Adjectif</option>
          <option value="WADV">Adverbe</option>
          <option value="WART">Article</option>
          <option value="WPRN">Pronom</option>
          <option value="WPREP">Préposition</option>
          <option value="WCONJ">Conjonction</option>
          <option value="WAF">Affixe</option>
        </select><br><br>

        <label for="engTranslation">Traduction en anglais :</label>
        <input type="text" v-model="wordstemDto.engTranslation" required><br><br>

        <label for="frTranslation">Traduction en français :</label>
        <input type="text" v-model="wordstemDto.frTranslation" required><br><br>

        <label for="semanticField">Champ sémantique :</label>
        <select v-model="wordstemDto.semanticField" required>
          <option v-for="semfield in semfields" :key="semfield.id" :value="semfield.id">
            {{ semfield.frName }}
          </option>
        </select><br><br>

        <label for="firstOccurence">Première occurrence :</label>
        <input type="number" v-model="wordstemDto.firstOccurrence" required><br><br>

        <label for="source">Livre de référence :</label>
        <select v-model="source" required>
          <option v-for="source in sources" :key="source.sourceId" :value="source.sourceId">
            ( {{ source.sourceAbbreviation }} ) :
            {{ source.sourceOriginalName }}
          </option>
        </select><br><br>

        <input type="submit" value="Ajouter">
      </form>
    </div>
  </div>

</template>

<script>

import { host } from '../Config/Config';

export default {

  props: {
    wordstem: { type: Object, required: true },
    semfields: { type: Array, required: true },
    sources: { type: Array, required: true }
  },

  data() {
    return {
      wordstemDto: {
        gender: '',
        wordClass: '',
        wordStemLanguage: '',
        wordStemName: '',
        firstOccurrence: '',
        semanticField: '',
        descr_eng: '',
        descr_fr: '',
        phonetic: '',
        engTranslation: '',
        frTranslation: '',
        sources: []
      },
      message: '',
      source: '',
    };
  },

  methods: {
    async submit() {
      console.log(this.wordstemDto)
      this.wordstemDto.sources.push(this.source);
      try {
        await fetch(host + "/wordstems/", {
          body: JSON.stringify(this.wordstemDto),
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        });
        this.message = 'Word Stem added successfully!';
        this.close();
      } catch (error) {
        this.message = 'There was an error adding the Word Stem.';
        console.error(error);
      }
    },
    
    close() {
      this.$emit('handleAddWordstem', false);
    }
  }
}


</script>