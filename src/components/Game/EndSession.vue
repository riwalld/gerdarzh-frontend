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
        //this.audio = new Audio('@/sound/trumpet_fanfare.mp3');

        console.log(this.audio)
        this.audio.addEventListener('canplaythrough', () => {
            // Audio is ready to playthth
            console.log('Audio file loaded successfully.');
        }, false);

        this.audio.addEventListener('error', (e) => {
            // Error occurred while loading the this.audio
            console.error('Error loading this.audio:', e);
        }, false);
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
            //this.this.audio.play(); } }, generateNewSession() { this.$emit('generateNewSession', this.score); } }
            this.audio.play();
        }
    }
}
</script>