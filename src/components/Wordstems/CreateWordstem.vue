<template>
  <div id="modal-bg" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Proposer une nouveau terme:</h2>
      <form id="wordstemForm">
        <label for="wordStemName">Terme :</label>
        <input type="text" id="wordStemName" name="wordStemName" required><br><br>

        <label for="wordStemLanguage">Langue du mot :</label>
        <select id="wordStemLanguage" name="wordStemLanguage">
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
        <input type="text" id="phonetic" name="phonetic"><br><br>

        <label for="gender">Genre :</label>
        <select id="gender" name="gender">
          <option value="GM">Masculin</option>
          <option value="GF">Féminin</option>
          <option value="GN">Neutre</option>
          <option value="GU">Inconnu</option>
          <option value="NO">N/A</option>
        </select><br><br>

        <label for="wordClass">Classe du mot :</label>
        <select id="wordClass" name="wordClass">
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
        <input type="text" id="engTranslation" name="engTranslation"><br><br>

        <label for="frTranslation">Traduction en français :</label>
        <input type="text" id="frTranslation" name="frTranslation"><br><br>

        <label for="semanticField">Champ sémantique :</label>
        <select id="semanticField" name="semanticField">
          <option value="1">Militaire</option>
          <option value="2">Famille</option>
          <option value="3">Travail</option>
          <option value="4">Religion</option>
          <option value="5">Couleur</option>
          <option value="6">Émotions</option>
          <option value="7">Végétation</option>
          <option value="8">Cosmos</option>
          <option value="9">Outil</option>
          <option value="10">Esprit</option>
          <option value="11">Mathématique</option>
          <option value="12">Minéral</option>
          <option value="13">Architecture</option>
          <option value="14">Frontière</option>
          <option value="15">Abstractions</option>
          <option value="16">Animal</option>
          <option value="17">Anatomie</option>
          <option value="18">Nombre</option>
          <option value="19">Communication</option>
          <option value="20">Nature</option>
          <option value="21">Action</option>
          <option value="22">Adjectif</option>
          <option value="23">Géométrie</option>
        </select><br><br>

        <label for="firstOccurence">Première occurrence :</label>
        <input type="number" id="firstOccurence" name="firstOccurence"><br><br>

        <label for="source">Livre de référence :</label>
        <select id="source" name="source">
        </select><br><br>

        <input type="submit" value="Ajouter">
      </form>
    </div>
  </div>

</template>
<script>
export default {
}
</script>