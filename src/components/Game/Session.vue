<template>
    <div class="gamePage">
        <div style="display: flex; justify-content: center;">
            <div class="progress-container">
                <div class="progress-bar" :style="'width:' + progressbarWidth + '%'">
                    <div class="progress-bar-in">
                    </div>
                </div>
            </div>
            <div >
                <span class="shield" v-for="(shield, index) in shields" :key="shield" :id="isLast(index)">
                    <img :src="shield" />
                </span>
            </div>
        </div>
        <section :class=transitionQuiz>
            <div class="etymoInfo">
                <div>
                    <img :src="imageURL" />
                </div>
                <div style="padding: 30px;">
                    <h2>{{ currentSessionStep.properName.currentName }} </h2>
                    <div class="description">{{ currentSessionStep.properName.descr }}</div>
                </div>
            </div>
            <div class="etymoForm" id="etymoForm">
                <div id="pres">Radicaux composant le nom:</div>
                <div id="etymoName">
                    <button class="etymoBtn2" v-for="etymo in currentSessionStep.celticRadicals" :key="etymo.name"
                        :alt="etymo.translation">
                        {{ etymo.name }}
                    </button>
                </div>
            </div>
            <div class="answersForm">
                <button class="btn" v-for="(responseChoice, index) in currentSessionStep.proposedLiteralTranslationList"
                    :key="responseChoice.responseChoice" :class="setStyle(index)" @click="selectResponse(index)">{{
                        responseChoice.responseChoice }}</button>
            </div>

            <button :class="setValidateBtn()" @click="selectedResponse > -1 ? verifyResponse() : null"
                v-if="!done">Valider</button>

            <button class="btn validate" @click="nextStep" v-if="done">Suivant</button>
        </section>
    </div>
</template>
<script>

import trumpet from '../../sound/good_answer.mp3'
import breakshield from '../../sound/answer_bad.mp3'
import shield from '../../images/celtic-icon2.png'
export default {
    props: {
        sessionGameData: Array
    },

    data() {
        return {
            currentSessionStep: null,
            step: 0,
            score: 0,
            isCorrect: true,
            selectedResponse: -1,
            done: false,
            imageURL: null,
            progressbarWidth: 0,
            correctAudio: new Audio(trumpet),
            badAudio: new Audio(breakshield),
            transitionQuiz: "quiz transquiz2",
            shields: [shield, shield, shield, shield, shield]
        }
    },

    created() {
        this.done = false;
        this.selectedResponse = -1;
        this.progressbarWidth = this.step * 10
        this.currentSessionStep = this.sessionGameData[this.step];
        this.transitionQuiz = "quiz init"
        import(`@/images/nouns/${this.sessionGameData[this.step].properName.image}.jpg`).then(imageUrl => {
            this.imageURL = imageUrl.default;
        })

        document.addEventListener("keydown", (event) => { this.onPressEnter(event) })
    },

    methods: {

        onPressEnter(event) {

            if (event.key === "Enter") {
                if (this.selectedResponse > -1) {
                    if (!this.done) {
                        this.verifyResponse();
                    }
                    else {
                        this.nextStep();
                    }

                }
            }
        },

        nextStep() {
            this.step++;
            this.isCorrect=true;
            if (this.shields.length > 0) {
                if (this.step < this.sessionGameData.length) {
                    this.transitionQuiz = "quiz transquiz"
                    import(`@/images/nouns/${this.sessionGameData[this.step].properName.image}.jpg`).then(imageUrl => {
                        this.imageURL = imageUrl.default;
                    })
                    setTimeout(() =>
                        this.setQuizTranslation()
                        , 300)
                }
                else {
                    this.generateEndSession();
                }
            }
            else {
                this.generateEndSession();
            }
        },

        setStyle(index) {
            if (index == this.selectedResponse) {
                if (this.done) {
                    if (this.currentSessionStep.proposedLiteralTranslationList[this.selectedResponse].correctness == true) {
                        return "correct";
                    }
                    else return "incorrect";
                }
                else return "selected";
            }
            else if (this.done) {
                if (this.currentSessionStep.proposedLiteralTranslationList[index].correctness == true) {
                    return "correct";
                }
            }
        },
        setQuizTranslation() {
            this.done = false;
            this.selectedResponse = -1;
            this.progressbarWidth = this.step * 6.6
            this.currentSessionStep = this.sessionGameData[this.step];
            this.transitionQuiz = "quiz transquiz2"
            setTimeout(() =>
                this.transitionQuiz = "quiz initquiz"
                , 50)

        },

        isLast(index) {
            if(index === this.shields.length - 1){
                return "lastShield";
            }

        },

        setValidateBtn() {
            if (this.selectedResponse == -1) {
                return "btn validate frozen";
            }
            else return "btn validate"
        },

        selectResponse(index) {
            this.selectedResponse = index;
        },

        verifyResponse() {
            if (this.currentSessionStep.proposedLiteralTranslationList[this.selectedResponse].correctness == true) {
                this.score++;
                this.correctAudio.play();
            }
            else {
                this.badAudio.play();
                let lastShieldClass = document.getElementById('lastShield')
                console.log(lastShieldClass)
                lastShieldClass.classList.add("shieldHeartsBroken")
                
                setTimeout(() =>
                this.shields.pop()
                , 1000)
            }
            this.done = true;


        },

        generateEndSession() {
            if (this.step < 15) {
                this.$emit('generateEndSession', this.score, false);
            }
            else {
                this.$emit('generateEndSession', this.score, true);
            }
        }
    }
}
</script>