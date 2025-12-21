<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const wordTheme = ref(0);
const styleSelectedBtn = "themeSelected";
const styleBtn = "themebtn";
const styleFrozenbtn = "btn frozen";
const showInstructions = ref(false);
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const emit = defineEmits(['generateSession']);

const toggleNotice = () => {
    showInstructions.value = !showInstructions.value;
};

const setWordTheme = (theme: number) => {
    wordTheme.value = theme;
    for (let index = 1; index < 7; index++) {
        document.getElementById(index.toString())?.classList.remove(styleSelectedBtn);
    }
    document.getElementById(theme.toString())?.classList.add(styleSelectedBtn);
};

const generateSession = () => {
    emit('generateSession', wordTheme.value);
};

const setValidateBtn = () => {
    return wordTheme.value === 0 ? "btn validate frozen" : "btn validate";
};
</script>

<template>
    <div class="gamePage">
        <section class="quiz">

            <button @click="toggleNotice()">
                <h3>{{ t('notice_button') }}</h3>
            </button>
            <div v-show="showInstructions" class="notice">
                <div class="noticeContent">
                    <p>{{ t('notice_intro') }}</p>
                    <ul>
                        <li>💒 <i>{{ t('places') }}</i>: {{ t('places_description') }}</li>
                        <li>📜 <i>{{ t('family_names') }}</i>: {{ t('family_names_description') }}</li>
                        <li>👑 <i>{{ t('historic_figures') }}</i>: {{ t('historic_figures_description') }}
                        </li>
                        <li>⚡ <i>{{ t('mythic_figures') }}</i>: {{ t('mythic_figures_description') }}</li>
                        <li>🍀 <i>{{ t('tribes') }}</i>: {{ t('tribes_description') }}</li>
                        <li>⚔️ <i>{{ t('weapons_creatures') }}</i>: {{ t('weapons_creatures_description') }}
                        </li>
                    </ul>
                    <p>{{ t('game_instruction_1') }}</p>
                    <p>{{ t('game_instruction_2') }}</p>
                    <p>{{ t('game_instruction_3') }}</p>
                </div>
            </div>

            <div style="padding:30px">
                <button :class="setValidateBtn()" id="validate" @click="generateSession()">{{ t('validate')
                    }}</button>
                <h3>{{ t('lexical_theme_choice') }}</h3>
                <button :class="styleBtn" class="places" id="1" @click="setWordTheme(1)">{{ t('places') }}</button>
                <button :class="styleBtn" class="family" id="6" @click="setWordTheme(6)">{{ t('family_names')
                    }}</button>
                <button :class="styleBtn" class="historic" id="2" @click="setWordTheme(2)">{{ t('historic_figures')
                    }}</button>
                <button :class="styleBtn" class="mythic" id="3" @click="setWordTheme(3)">{{ t('mythic_figures')
                    }}</button>
                <button :class="styleBtn" class="tribes" id="4" @click="setWordTheme(4)">{{ t('tribes') }}</button>
                <button :class="styleBtn" class="weapons" id="5" @click="setWordTheme(5)">{{ t('weapons_creatures')
                    }}</button>
            </div>
            <div style="padding:30px">
                <h3 style="color: grey">{{ t('cultural_theme_choice') }}</h3>
                <button :class="styleFrozenbtn" id="1">{{ t('gauls') }}</button>
                <button :class="styleFrozenbtn" id="3">{{ t('ireland_scotland') }}</button>
                <button :class="styleFrozenbtn" id="2">{{ t('britain') }}</button>
                <button :class="styleFrozenbtn" id="4">{{ t('all') }}</button>
            </div>

        </section>
    </div>
</template>
