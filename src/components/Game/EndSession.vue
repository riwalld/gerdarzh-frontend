<template>
    <section class="quiz">
        <h3>Votre score est de {{ result }} sur 10</h3>
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
import failImg from '../../images/background_game_fail.jpg'
import victoryImg from '../../images/arthur-sword.jpg'

export default {

    props: {
        result: Number,
        isVictory: Boolean,
    },
    data() {
        return {
            sentence: null,
            victory: new Audio(trumpet),
            fail: new Audio(failTrumpet),
            imageBackground : null
        }
    },
    created() {
        console.log("gah3")
        if (this.isVictory) {
            this.imageBackground = victoryImg;
            if (this.result > 8) {
                this.victory.play();
                this.sentence = "Félicitions !"
            }
            else if (this.result > 6 && this.result < 8) {
                this.sentence = "Pas mal !"
                this.victory.play();
            }
            else {
                this.sentence = "Encore quelques efforts !"
                this.victory.play();
            }
        }
        else {
            this.imageBackground = failImg;
            this.fail.play();
            this.sentence = "La Graal est perdu..."
        }
    }
}
</script>