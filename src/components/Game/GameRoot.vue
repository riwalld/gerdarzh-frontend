<script setup>
import { ref } from 'vue';
import ConfigSession from './ConfigSession.vue';
import Session from './Session.vue';
import EndSession from './EndSession.vue';
import failImg from '../../images/fail_king_arthur.png';
import { BACKEND_URL } from '@/utils/utils';
const sessionGameData = ref([]);
const session = ref(null);
const endSession = ref(null);
const configSession = ref(ConfigSession);
const result = ref(null);
const isVictory = ref(null);
const imgBackground = ref(null);

const handleSession = async (wordTheme) => {
    const response = await fetch(BACKEND_URL + '/sessionGameData/?wordTheme=' + wordTheme, {
        method: "GET",
    });
    const data = await response.json();
    sessionGameData.value = data;

    configSession.value = null;
    session.value = Session;
};

const handleEndSession = (resultValue, isVictoryValue) => {
    if (!isVictoryValue) {
        imgBackground.value = failImg;
    }
    isVictory.value = isVictoryValue;
    session.value = null;
    endSession.value = EndSession;
    result.value = resultValue;
};
</script>

<template>
    <configSession v-if="configSession" @generateSession="handleSession">
    </configSession>
    <session v-if="session" :sessionGameData="sessionGameData" @generateEndSession="handleEndSession">
    </session>
    <endSession v-if="endSession" :result="result" :isVictory="isVictory">
    </endSession>
</template>