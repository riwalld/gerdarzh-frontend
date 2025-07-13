<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import trumpet from '../../sound/good_answer.mp3';
import breakshield from '../../sound/answer_bad.mp3';
import shield from '../../images/celtic-icon2.png';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const props = defineProps({
    sessionGameData: Array
});
const emit = defineEmits(['generateEndSession'])
const currentSessionStep = ref(null);
const step = ref(0);
const score = ref(0);
const isCorrect = ref(true);
const selectedResponse = ref(-1);
const done = ref(false);
const imageURL = ref(null);
const progressbarWidth = ref(0);
const correctAudio = new Audio(trumpet);
const badAudio = new Audio(breakshield);
const transitionQuiz = ref("quiz initquiz");
const shields = ref([shield, shield, shield]);
const clue = ref(false);

const onPressEnter = (event) => {
    if (event.key === "Enter") {
        if (selectedResponse.value > -1) {
            if (!done.value) {
                verifyResponse();
            } else {
                nextStep();
            }
        }
    }
};

const nextStep = () => {
    step.value++;
    currentSessionStep.value = props.sessionGameData[step.value];
    isCorrect.value = true;
    if (shields.value.length > 0) {
        if (step.value < props.sessionGameData.length) {
            transitionQuiz.value = "quiz transquiz";
            if (currentSessionStep.value.properName.image !== null) {
                imageURL.value = `/media/images/${currentSessionStep.value.properName.image}.jpg`;
            } else {
                imageURL.value = null;
            }
            setTimeout(() => setQuizTranslation(), 300);
        } else {
            generateEndSession();
        }
    } else {
        generateEndSession();
    }
};

const setStyle = (index) => {
    if (index === selectedResponse.value) {
        if (done.value) {
            return currentSessionStep.value.proposedLiteralTranslationList[selectedResponse.value].correctness ? "correct" : "incorrect";
        } else {
            return "selected";
        }
    } else if (done.value) {
        if (currentSessionStep.value.proposedLiteralTranslationList[index].correctness) {
            return "correct";
        }
    }
};

const setQuizTranslation = () => {
    done.value = false;
    selectedResponse.value = -1;
    progressbarWidth.value = step.value * 10;
    transitionQuiz.value = "quiz transquiz2";
    setTimeout(() => transitionQuiz.value = "quiz initquiz", 50);
};

const isLast = (index) => {
    if (index === shields.value.length - 1) {
        return "lastShield";
    }
};

const setValidateBtn = () => {
    return selectedResponse.value === -1 ? "btn validate frozen" : "btn validate";
};

const selectResponse = (index) => {
    selectedResponse.value = index;
};

const verifyResponse = () => {
    if (currentSessionStep.value.proposedLiteralTranslationList[selectedResponse.value].correctness) {
        score.value++;
        correctAudio.play();
    } else {
        badAudio.play();
        const lastShieldClass = document.getElementById('lastShield');
        lastShieldClass?.classList.add("shieldHeartsBroken");
        shields.value.pop();
    }
    done.value = true;
};

const toggleClue = () => {
    clue.value = !clue.value;
};

const generateEndSession = () => {
    const victory = score.value >= 5;
    emit('generateEndSession', score.value, victory);
};
onMounted(() => {
    currentSessionStep.value = props.sessionGameData[0];
    imageURL.value = `/media/images/${currentSessionStep.value.properName.image}.jpg`;
    document.addEventListener("keydown", onPressEnter);
});
onUnmounted(() => {
    document.removeEventListener("keydown", onPressEnter);
});
</script>


<template>
    <div class="gamePage">
        <div style="display: flex; justify-content: center;">
            <div class="progress-container">
                <div class="progress-bar" :style="'width:' + progressbarWidth + '%'">
                    <div class="progress-bar-in">
                    </div>
                </div>
            </div>
            <div style="display: flex; flex-direction: row; justify-items: center; margin-top: 5px;">
                <span class=" shield" v-for="(shield, index) in shields" :key="shield" :id="isLast(index)">
                    <img :src="shield" />
                </span>
            </div>
        </div>
        <section v-if="currentSessionStep" :class=transitionQuiz>
            <div class="etymoInfo">
                <div>
                    <img :src="imageURL" />
                </div>
                <div style="display: flex; flex-direction: column;">
                    <div style="padding: 30px;">
                        <h2 style="padding-bottom: 20px;">{{ currentSessionStep.properName.currentName }} </h2>
                        <div class="description" style="font-size: larger; font-weight: bold;">{{
                            currentSessionStep.properName.descr }}</div>
                    </div>
                    <div style="margin-top: auto; text-align: left; padding: 5px; max-width: 250px;">
                        <div class="description">{{ currentSessionStep.properName.imgCaption }}</div>
                    </div>
                </div>
            </div>
            <div style="display: flex; padding-left: 100px; height: 105px;">
                <button @click="toggleClue()" style="height: 30px; margin-top: 60px;">
                    <h3>{{ t('clue') }} ▶</h3>
                </button>
                <div class="etymoForm" id="etymoForm" v-show="clue">
                    <div id="pres">{{ t('radicals_for_name') }}:</div>
                    <div id="etymoName">
                        <button class="etymoBtn2" v-for="etymo in currentSessionStep.celticRadicals" :key="etymo.name"
                            :alt="etymo.translation">
                            {{ etymo.name }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="answersForm">
                <button class="btn" v-for="(responseChoice, index) in currentSessionStep.proposedLiteralTranslationList"
                    :key="responseChoice.responseChoice" :class="setStyle(index)" @click="selectResponse(index)">{{
                        responseChoice.responseChoice }}</button>
            </div>

            <button :class="setValidateBtn()" @click="selectedResponse > -1 ? verifyResponse() : null" v-if="!done">{{
                t('validate') }}</button>

            <button class="btn validate" @click="nextStep" v-if="done">{{ t('next') }}</button>
        </section>
    </div>
</template>
