
export default {
    template: `
    <section class="quiz">
<h3>Votre score est de {{result}} sur 15</h3>
<p>{{sentence}}</p>
<div class="summary-btn"><router-link to="/sessionGame">Rejouer</router-link></div>
</section>
    `,

    props: {
        result: Number
    },
    data() {
        return {
            sentence : null
        }
    },
    created() {
        console.log(this.result)
        if (this.result > 12) {

            this.sentence = "Félicitions !"
        }
        else if(this.result > 9 && result < 13) {
            this.sentence = "Pas mal !"
        }
        else {
            this.sentence = "Encore quelques efforts !"
        }
    }
}