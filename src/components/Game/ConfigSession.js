export default {
    template: `
    <section class="quiz">
    <h3>Principe du jeu</h3>
    <p>Des noms d'origine celtique vont s'afficher succivement. Vous devrez alors trouver la signification littérale du nom.<br>
    Les radicaux comosant le nom sont proposés comme aide, vous pouvez voir la traduction correspondante en cliquant dessus. <p>
    <p>Bonne chance !</p>
<h3>Choisissez un thème lexical:</h3>
<div style="padding:30px">
<button :class=styleBtn id="1" @click="setWordTheme(1)">Lieux et Pays</button>
<button :class=styleBtn id="2" @click="setWordTheme(2)">Figures Historiques</button>
<button :class=styleBtn id="3" @click="setWordTheme(3)">Figures Mythiques</button>
<button :class=styleBtn id="4" @click="setWordTheme(4)">Peuples et Tribus</button>
<button :class=styleBtn id="5" @click="setWordTheme(5)">Armes et Créatures</button>
</div>
<div style="padding:30px">
<h3 style="color: grey">Choisissez un thème culturelle (à venir)</h3>
<button :class=styleFrozenbtn id="1">Gaules</button>
<button :class=styleFrozenbtn id="3">Irlande et Écosse</button>
<button :class=styleFrozenbtn id="2">Grande et petite Bretagne</button>
<button :class=styleFrozenbtn id="4">Tous</button>
</div>
<button :class=styleBtn id="validate" @click="generateSession()" v-if="wordTheme > 0">Valider</button>
    </section>
    `,

    data() {
        return {
            wordTheme: 0,
            styleSelectedBtn : "btn selected",
            styleBtn : "btn",
            styleFrozenbtn : "btn frozen"
        }
    },
    methods: {
        setWordTheme(wordTheme) {
            this.wordTheme = wordTheme;
            for (let index = 1; index < 6; index++) {
                document.getElementById(index).className = this.styleBtn;
            }
            document.getElementById(wordTheme).className = this.styleSelectedBtn;
        },
        
        generateSession() {

          this.$emit('generateSession', this.wordTheme);
        }
    }
}