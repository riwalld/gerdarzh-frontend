import ConfigSession from './ConfigSession.js';
import Session from './Session.js';
import { host } from "../Config/Config.js";

export default {
    components: {ConfigSession,Session},

    template: `
    <component :is="configSession" v-if="configSession" @generateSession="handleSession" >
</component>
<component :is="session" v-if="session"  :sessionGameData="sessionGameData"></component>
    `,

    data() {
        return {
            sessionGameData: [],
            session: null,
            configSession : ConfigSession
        }
    },

    methods: {
        async handleSession(wordTheme) {
           await fetch(host + '/sessionGameData?wordTheme=' + wordTheme, {
                method: "GET"
            }
            )
                .then(response => response.json())
                .then(sessionGameData => {
                    this.sessionGameData = sessionGameData;
                });
            this.configSession = null;
            this.session = Session;
          }
    }
}