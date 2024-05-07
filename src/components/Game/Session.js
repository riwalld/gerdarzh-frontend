
export default {
    template: `
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
        @click="selectResponse(index)"
        >{{responseChoice.responseChoice}}</button>
        </div>
        <button class="btn" @click="verifyResponse()" v-if="selectedResponse > -1">Valider</button>
        <button class="btn" @click="nextStep()" v-if="done">Suivant</button>
    </section>
    `,

    props: {
        sessionGameData: Array
    },

    data() {
        return {
            currentSessionStep: null,
            step: -1,
            score:0,
            selectedResponse: -1,
            done: false,
            imageURL: null
        }
    },

    created() {
        this.nextStep();
    },

    computed: {
        imageSrc() {
          return new URL(`../../images/nouns/${this.currentSessionStep.properName.image}`, import.meta.url).href;
        },
      },

    methods: {
        nextStep() {
            this.step++;
            this.done = false;
            this.selectedResponse= -1;
            console.log(this.sessionGameData);
            this.currentSessionStep = this.sessionGameData[this.step];
            import(`@/images/nouns/${this.currentSessionStep.properName.image}`)
            .then(imageUrl => {
              this.imageURL = imageUrl.default; // Assign the imported URL to data property
            })
        },
        selectResponse(index){
            this.selectedResponse=index;
        },

        verifyResponse(){
            if (this.currentSessionStep.proposedLiteralTranslationList[this.selectedResponse].correctness == true) {
                console.log("la gagne")
                this.score++;
            }
            else{console.log("la loose")}
            this.done = true;
        }
    }
}