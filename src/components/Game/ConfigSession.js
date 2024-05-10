export default {
    template: `
    <section class="quiz">
    <h3>Principe du jeu</h3>
    <p>Des noms d'origine celtique vont s'afficher succivement. Vous devrez alors trouver la signification littérale du nom.<br>
    Les radicaux comosant le nom sont proposés comme aide, vous pouvez voir la traduction correspondante en cliquant dessus. </p>
    <p>Bonne chance !</p>

<div style="padding:30px">
<h3>Choisissez un thème lexical:</h3>
<button :class=styleBtn class="places" id="1" @click="setWordTheme(1)">Lieux et Pays</button>
<button :class=styleBtn class="historic" id="2" @click="setWordTheme(2)">Figures Historiques</button>
<button :class=styleBtn class="mythic" id="3" @click="setWordTheme(3)">Figures Mythiques</button>
<button :class=styleBtn class="tribes" id="4" @click="setWordTheme(4)">Peuples et Tribus</button>
<button :class=styleBtn class="weapons" id="5" @click="setWordTheme(5)">Armes et Créatures</button>
</div>
<div style="padding:30px">
<h3 style="color: grey">Choisissez un thème culturelle (à venir)</h3>
<button :class=styleFrozenbtn id="1">Gaules</button>
<button :class=styleFrozenbtn id="3">Irlande et Écosse</button>
<button :class=styleFrozenbtn id="2">Grande et petite Bretagne</button>
<button :class=styleFrozenbtn id="4">Tous</button>
</div>
<button :class="setValidateBtn()" id="validate" @click="generateSession()">Valider</button>
    </section>
    `,

    data() {
        return {
            wordTheme: 0,
            styleSelectedBtn : "themeSelected",
            styleBtn : "themebtn",
            styleFrozenbtn : "btn frozen"
        }
    },
    methods: {
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