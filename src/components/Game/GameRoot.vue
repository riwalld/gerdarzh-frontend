<template>
    <component :is="configSession" v-if="configSession" @generateSession="handleSession">
    </component>
    <component :is="session" v-if="session" :sessionGameData="sessionGameData" @generateEndSession="handleEndSession">
    </component>
    <component :is="endSession" v-if="endSession" :result="result"></component>
</template>
<script>

import ConfigSession from './ConfigSession.vue';
import Session from './Session.vue';
import EndSession from './EndSession.vue';
import { host } from "../Config/Config.js";

export default {
    components: { ConfigSession, Session, EndSession },

    data() {
        return {
            sessionGameData: [],
            session: null,
            endSession: null,
            configSession: ConfigSession,
            result: null
        }
    },

    methods: {
        async handleSession(wordTheme) {
            await fetch(host + '/sessionGameData/?wordTheme=' + wordTheme, {
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

        handleEndSession(result) {
            this.session = null;
            this.endSession = EndSession;
            this.result = result;
        }
    }
}
</script>