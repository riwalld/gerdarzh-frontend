<template>
    <section class="quiz">
        <h3>Votre score est de {{ result }} sur 15</h3>
        <p>{{ sentence }}</p>
        <div>
                <img :src="imageBackground" />
            </div>
            <div class="btn"><a :href="$router.resolve({ name: 'SessionGame' }).href">Retourner au menu</a></div>
    </section>
</template>
<script>
import trumpet from '@/sound/trumpet_fanfare.mp3'
import failTrumpet from '@/sound/dramatic_defeat.mp3'


export default {

    props: {
        result: Number,
        isVictory: Boolean,
        imageBackground : Image
    },
    data() {
        return {
            sentence: null,
            victory: new Audio(trumpet),
            fail: new Audio(failTrumpet),
        }
    },
    created() {
        console.log("gah3")
        if (this.isVictory) {
            if (this.result > 12) {
                this.victory.play();
                this.sentence = "Félicitions !"
            }
            else if (this.result > 9 && this.result < 13) {
                this.sentence = "Pas mal !"
                this.victory.play();
            }
            else {
                this.sentence = "Encore quelques efforts !"
                this.victory.play();
            }
        }
        else {
            this.fail.play();
            this.sentence = "La gaule est perdue."
        }
    }
}
</script>