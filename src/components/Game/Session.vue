<template>
    <div style="display: flex; justify-content: center;">
        <div class="progress-container">
            <div class="progress-bar" :style="'width:' + progressbarWidth + '%'">
                <div class="progress-bar-in">
                </div>
            </div>
        </div>
    </div>
    <section class="quiz">
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
                <button class="etymoBtn2" v-for="etymo in currentSessionStep.pcelticRadicals"
                :key="etymo.name"
                :alt="etymo.translation">
                    {{ etymo.name }}
                </button>
            </div>
        </div>
        <div class="answersForm">
            <button class="btn" v-for="(responseChoice, index) in currentSessionStep.proposedLiteralTranslationList"
            :key="responseChoice.responseChoice"
                :class="setStyle(index)" @click="selectResponse(index)">{{ responseChoice.responseChoice }}</button>
        </div>

        <button :class="setValidateBtn()" @click="selectedResponse > -1 ? verifyResponse() : null"
            v-if="!done">Valider</button>

        <button class="btn validate" @click="nextStep" v-if="done">Suivant</button>
    </section>
</template>
<script>

import trumpet from '../../sound/good_answer.mp3'
export default {
    props: {
        sessionGameData: Array
    },

    data() {
        return {
            currentSessionStep: null,
            step: -1,
            score: 0,
            selectedResponse: -1,
            done: false,
            imageURL: null,
            progressbarWidth: 0,
            correctAudio: new Audio(trumpet)
        }
    },

    created() {
        this.nextStep();
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
            if (this.step < this.sessionGameData.length) {
                this.done = false;
                this.selectedResponse = -1;
                this.progressbarWidth = this.step * 6.6
                this.currentSessionStep = this.sessionGameData[this.step];
                import(`@/images/nouns/${this.currentSessionStep.properName.image}.jpg`)
                    .then(imageUrl => {
                        this.imageURL = imageUrl.default;
                    })
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
            this.done = true;
        },

        generateEndSession() {
            this.$emit('generateEndSession', this.score);
        }
    }
}
</script>