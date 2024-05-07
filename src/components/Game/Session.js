
export default {
    template: `
    <div style="display: flex; justify-content: center;">

    <div class="progress-container">
        <div class="progress-bar" :style="'width:'+ progressbarWidth + '%'" >
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
                <h2>{{currentSessionStep.properName.currentName}} </h2>
                <div class="description">{{currentSessionStep.properName.descr}}</div>
            </div>
        </div>
        <div class="etymoForm" id="etymoForm">
            <div id="pres">Radicaux composant le nom:</div>
            <div id="etymoName">
            <button class="etymoBtn2" 
            v-for="etymo in currentSessionStep.pcelticRadicals" 
            :alt="etymo.translation"
            >
            {{etymo.name}}
            </button>
            </div>
        </div>
        <div class="answersForm">
        <button class="btn"
        v-for="(responseChoice, index) in currentSessionStep.proposedLiteralTranslationList"
        :style=setStyle(index)
        @click="selectResponse(index)"
        >{{responseChoice.responseChoice}}</button>
        </div>
        <button class="btn" @click="verifyResponse()" v-if="selectedResponse > -1 && !done">Valider</button>
        <button class="btn" @click="nextStep()" v-if="done">Suivant</button>
    </section>
    `,

    props: {
        sessionGameData: Array
    },

    data() {
        return {
            currentSessionStep: null,
            step: 12,
            score: 0,
            selectedResponse: -1,
            done: false,
            imageURL: null,
            progressbarWidth: 0
        }
    },

    created() {
        this.nextStep();
    },

    methods: {
        nextStep() {
            this.step++;
            if(this.step < this.sessionGameData.length){
            this.done = false;
            this.selectedResponse = -1;
            this.progressbarWidth = this.step * 6.6
            this.currentSessionStep = this.sessionGameData[this.step];
            import(`@/images/nouns/${this.currentSessionStep.properName.image}`)
                .then(imageUrl => {
                    this.imageURL = imageUrl.default;
                })}
                else {
                    this.generateEndSession();
                }
        },

        setStyle(index) {
            if (index == this.selectedResponse) {
                return {
                    background: 'rgb(233, 224, 200)',
                    color: '#111'
                  };
                }
        },

        selectResponse(index) {
            this.selectedResponse = index;
        },

        verifyResponse() {
            if (this.currentSessionStep.proposedLiteralTranslationList[this.selectedResponse].correctness == true) {
                this.score++;
            }
            this.done = true;
        },

        generateEndSession() {
            this.$emit('generateEndSession', this.score);
        }
    }
}