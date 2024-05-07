import ConfigSession from './ConfigSession.js';
import Session from './Session.js';
import EndSession from './EndSession.js';
import { host } from "../Config/Config.js";

export default {
    components: {ConfigSession,Session, EndSession},

    template: `
    <component :is="configSession" v-if="configSession" @generateSession="handleSession" >
</component>
<component 
:is="session" v-if="session"  
:sessionGameData="sessionGameData" 
@generateEndSession="handleEndSession">
</component>
<component :is="endSession" v-if="endSession" :result="result"></component>
    `,

    data() {
        return {
            sessionGameData: [],
            session: null,
            endSession: null,
            configSession : ConfigSession,
            result: null
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
          },

        handleEndSession(result) {
            console.log("rzqr");
             this.session = null;
             this.endSession = EndSession;
             this.result = result;
           }
    }
}