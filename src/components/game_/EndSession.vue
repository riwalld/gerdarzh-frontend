<script setup lang="ts">
import { ref, defineProps, watch } from 'vue';
import trumpet from '@/sound/trumpet_fanfare.mp3';
import failTrumpet from '@/sound/dramatic_defeat.mp3';
import failImg from '../../images/background_game_fail.jpg';
import victoryImg from '../../images/arthur-sword.jpg';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const props = defineProps({ result: { type: Number, required: true }, isVictory: { type: Boolean, required: true } });

const sentence = ref("");
const victory = new Audio(trumpet);
const fail = new Audio(failTrumpet);
const imageBackground = ref(victoryImg);

watch([props.isVictory, props.result], () => {
    if (props.isVictory) {
        imageBackground.value = victoryImg;
        if (props.result > 8) {
            victory.play();
            sentence.value = "Félicitions !";
        } else if (props.result > 6 && props.result < 8) {
            sentence.value = "Pas mal !";
            victory.play();
        } else {
            sentence.value = "Encore quelques efforts !";
            victory.play();
        }
    } else {
        imageBackground.value = failImg;
        fail.play();
        sentence.value = "La Graal est perdu...";
    }
});
</script>

<template>
    <section class="quiz">
        <h3>{{ result }} / 10</h3>
        <p>{{ sentence }}</p>
        <div>
            <img :src="imageBackground" />
        </div>
        <div class="btn"><a :href="$router.resolve({ name: 'game' }).href">{{ t('back-to-menu') }}</a></div>
    </section>
</template>
