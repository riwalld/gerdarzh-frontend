export default {
    template: `
    <section class="quiz">
<h3>Choisissez un thème lexical:</h3>
<div style="padding:30px">
<button class="btn" @click="setWordTheme(1)">Lieux et Pays</button>
<button class="btn" @click="setWordTheme(2)">Figures Historiques</button>
<button class="btn" @click="setWordTheme(3)">Figures Mythiques</button>
<button class="btn" @click="setWordTheme(4)">Peuples et Tribus</button>
<button class="btn" @click="setWordTheme(5)">Armes et Créatures</button>
</div>
<button class="btn" @click="generateSession()" v-if="wordTheme > 0">Valider</button>
    </section>
    `,

    data() {
        return {
            wordTheme: 0,
        }
    },
    methods: {
        setWordTheme(wordTheme) {
            this.wordTheme = wordTheme;
        },
        generateSession() {

          this.$emit('generateSession', this.wordTheme);
        }
    }
}