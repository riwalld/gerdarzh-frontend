<template>

<tr class="wstr">
    <td><b>
      <a class="entry" @click="handleShowProperNoun(propernoun)"> {{propernoun.currentName}}</a>
     </b></td>
     <td class="cell" id="wordtheme"></td>
     <td class="cell">{{propernoun.period}}</td>
     <td class="cell">{{propernoun.place}}</td>
     <td class="cell">{{propernoun.country}}</td>
     <td class="cell"></td></tr>
</template>
<script>
import { setLanguages } from "../Config/Config.js";
export default {
    template: `
    
    `,

    props: {
        propernoun: Object
    },

    created() {
      setLanguages();
      //getWordTheme(this.properNoun.wordTheme)
    },

    methods: {
      getWordTheme(wordTheme) {
        switch (wordTheme) {
          case 1:
            return "Ville et Pays";
          case 2:
            return "Fig. historique";
          case 3:
            return "Fig. mythiques";
          case 4:
            return "Peuples et Tribus";
          case 5:
            return "Armes et Créatures";
          default:
            console.log(`No corresponding wortheme for the number.`);
        }
      },

    handleShowProperNoun(ProperNoun) {
      console.log(ProperNoun)
      this.$emit('handleShowProperNoun', ProperNoun);
    }
  }
    
}
</script>