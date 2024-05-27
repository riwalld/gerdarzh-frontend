<template>
    <div class="gamePage">
        <section class="quiz">
            
            <button @click="toggleNotice()"><h3>Consulter la notice du jeu<br>▼</h3></button>
            <div v-show="showInstructions" class="notice">
                <div class="noticeContent">
                <p>Le jeu consiste en une série de 10 questions aléatoirement selectionnées en fonction d'un thème lexicale choisie:</p>
                <ul>
                    <li>💒 <i>Lieux et Pays</i>: regroupant le termes essentiellement toponymiques d'origine gauloise, bretonne ou brittanique.</li>
                    <li>👑<i>Figures Historiques</i>: regroupant des personnages connus de l'histoire du monde celte.</li>
                    <li>⚡<i>Figures Mythiques</i>: regroupant des dieux ou héros légendaires issus des épopée irlandaise, breton, ou du panthéon gaulois.</li>
                    <li>🍀<i>Peuples et Tribus</i>: regroupant des gentilés gaulois et noms de clans irlandais, écossais.</li>
                    <li>⚔️<i>Armes et Créatures</i>: regroupant des noms données à des armes légendaires et des créature du folklore celtique.</li>
                </ul>
                <p>Tous les noms présentés étant d'origine celtique, votre mission va être de deviner le sens littérale du nom et de choisir la bonne réponse parmi cinq propositions.</p>
                <p>Les radicaux composant le nom sont affichés comme aide, vous pouvez voir la traduction correspondante
                    en
                    cliquant sur le radical correspondant. </p>
                <p>Bonne chance !</p>
            </div>
            </div>


            <div style="padding:30px">
                <h3>Choisissez un thème lexical:</h3>
                <button :class=styleBtn class="places" id="1" @click="setWordTheme(1)">Lieux et Pays</button>
                <button :class=styleBtn class="historic" id="2" @click="setWordTheme(2)">Figures Historiques</button>
                <button :class=styleBtn class="mythic" id="3" @click="setWordTheme(3)">Figures Mythiques</button>
                <button :class=styleBtn class="tribes" id="4" @click="setWordTheme(4)">Peuples et Tribus</button>
                <button :class=styleBtn class="weapons" id="5" @click="setWordTheme(5)">Armes et Créatures</button>
            </div>
            <div style="padding:30px">
                <h3 style="color: grey">Choisissez un thème culturel (à venir)</h3>
                <button :class=styleFrozenbtn id="1">Gaules</button>
                <button :class=styleFrozenbtn id="3">Irlande et Écosse</button>
                <button :class=styleFrozenbtn id="2">Grande et petite Bretagne</button>
                <button :class=styleFrozenbtn id="4">Tous</button>
            </div>
            <button :class="setValidateBtn()" id="validate" @click="generateSession()">Valider</button>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wordTheme: 0,
            styleSelectedBtn: "themeSelected",
            styleBtn: "themebtn",
            styleFrozenbtn: "btn frozen",
            showInstructions: false
        }
    },
    methods: {
        toggleNotice() {
                    this.showInstructions = !this.showInstructions},
        setWordTheme(wordTheme) {
            this.wordTheme = wordTheme;
            for (let index = 1; index < 6; index++) {
                document.getElementById(index).classList.remove(this.styleSelectedBtn);
            }
            document.getElementById(wordTheme).classList.add(this.styleSelectedBtn);
        },

        generateSession() {

            this.$emit('generateSession', this.wordTheme);
        },
        setValidateBtn() {
            if (this.wordTheme == 0) {
                return "btn validate frozen";
            }
            else return "btn validate"
        },
    }
}
</script>