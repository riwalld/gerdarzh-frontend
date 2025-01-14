<template>
    <component :is="configSession" v-if="configSession" @generateSession="handleSession">
    </component>
    <component :is="session" v-if="session" :sessionGameData="sessionGameData" @generateEndSession="handleEndSession">
    </component>
    <component :is="endSession" v-if="endSession" :result="result" :isVictory="isVictory"></component>
</template>
<script>

import ConfigSession from './ConfigSession.vue';
import Session from './Session.vue';
import EndSession from './EndSession.vue';
import failImg from '../../images/fail_king_arthur.png'

export default {
    components: { ConfigSession, Session, EndSession },

    data() {
        return {
            sessionGameData: [],
            session: null,
            endSession: null,
            configSession: ConfigSession,
            result: null,
            isVictory : null,
            imgBackground : null
        }
    },

    methods: {
        async handleSession(wordTheme) {
            await fetch("http://localhost:8000" + '/sessionGameData/?wordTheme=' + wordTheme, {
                method: "GET"
            }
            )
                .then(response => response.json())
                .then(sessionGameData => {
                    console.log(sessionGameData)
                    this.sessionGameData = sessionGameData;
                });
            this.configSession = null;
            this.session = Session;
        },

        handleEndSession(result, isVictory) {
            if(!isVictory){
                this.imgBackground = failImg;
            }
            this.isVictory = isVictory;
            this.session = null;
            this.endSession = EndSession;
            this.result = result;
        }
    }
}
</script>