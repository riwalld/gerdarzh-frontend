<template>
    <section class="quiz">
        <h3>Votre score est de {{ result }} sur 15</h3>
        <p>{{ sentence }}</p>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'SessionGame' }).href">Retourner au menu</a></div>
    </section>
</template>
<script>
import trumpet from '@/sound/trumpet_fanfare.mp3'
export default {

    props: {
        result: Number
    },
    data() {
        return {
            sentence: null,
            audio : new Audio(trumpet)
        }
    },
    created() {
        if (this.result > 12) {
            this.audio.play();
            this.sentence = "Félicitions !"
        }
        else if (this.result > 9 && this.result < 13) {
            this.sentence = "Pas mal !"
            this.audio.play();
        }
        else {
            this.sentence = "Encore quelques efforts !"
            this.audio.play();
        }
    }
}
</script>