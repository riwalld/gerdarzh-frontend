
export default {
    template: `
    <section class="quiz">
<h3>Votre score est de {{result}} sur 15</h3>
<p>{{sentence}}</p>
<div class="summary-btn"><a :href="$router.resolve({name: 'SessionGame'}).href">Retourner au menu</a></div>
</section>
    `,

    props: {
        result: Number
    },
    data() {
        return {
            sentence : null,
            //audio : new Audio(require('@/sound/trumpet_fanfare.mp3'))
        }
    },
    created() {
        if (this.result > 12) {
trumpet_fanfare.mp3
            this.sentence = "Félicitions !"
        }
        else if(this.result > 9 && result < 13) {
            this.sentence = "Pas mal !"
        }
        else {
            this.sentence = "Encore quelques efforts !"
            //this.audio.play();
        }
    },
    generateNewSession() {
        this.$emit('generateNewSession', this.score);
    }
}