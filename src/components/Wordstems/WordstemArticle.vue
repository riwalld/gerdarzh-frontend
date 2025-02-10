<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from "vue-router";
import { getAPI } from "../../utils/APIRequests"
import navLogo from '../../images/flag_bzhg.png';
import { SemanticField, Source, WordStemDto } from '@/utils/types';
const route = useRoute();
const { t } = useI18n();
const wordstem = ref<WordStemDto>();
const semfields = ref<SemanticField[]>();
const sources = ref<Source>();


const emit = defineEmits(['handleShowWordstem']);

function close() {
  emit('handleShowWordstem', null);
}

onBeforeMount(async () => {
  wordstem.value = await getAPI('/wordstems/', String(route.params.wordStemId));
  semfields.value = await getAPI('/semanticFields/', '');
  sources.value = await getAPI('/sources/', '');
});
</script>
<template>
  <div style="width:70%; margin: auto;">
    <div v-if="wordstem" style="width: 100%;">
      <span class="close" @click="close()">&times;</span>

      <div style="display: flex; flex-direction: row; align-items: center; position: relative;">
        <div style=" background-color: darkslategrey; color: aliceblue; padding: 5px; position: absolute; 
        border-radius: 7px; font-size: 20px;">
          {{ t(wordstem.wordStemLanguage) }} <img style="margin-left: 10px;" :src=navLogo height="15"
            alt="logo gerdarzh">

        </div>
        <div style="text-align: center; width: 100%;">
          <h1 style="color:grey; margin: 0 auto; ">{{ wordstem.wordStemName }}</h1>

          <p>
            <span :title="t(wordstem.wordClass)">{{ t(wordstem.wordClass) }}</span>
            &nbsp;&nbsp;
            <span :title="t(wordstem.gender)">{{ t(wordstem.gender) }}</span>
          </p>

          <p style="text-align: center; width: 50%; margin: auto; margin-bottom: 30px;">{{ wordstem.descrFr }}</p>
        </div>
      </div>

      <div style="display: flex; flex-direction: row;">
        <div style="width: 50%;">


          <div class="definition-box">
            <h3>{{ t('pronunciation') }}</h3>
            <p>/<b>{{ t(wordstem.phonetic) }}</b>/</p>
          </div>
          <div class="definition-box">
            <h3>{{ t('translations') }}</h3>
            <div>
              <li><b>{{ t('french') }}: </b>{{ wordstem.frTranslation }}</li>
              <li><b>{{ t('english') }}: </b>{{ wordstem.engTranslation }}</li>
            </div>
          </div>
        </div>
        <div>
          <div class="definition-box">
            <h3>{{ t('etymology') }}</h3>
            <p>{{ wordstem.wordStemParents }}</p>
          </div>
          <div v-if="semfields && wordstem.semanticField > 0 && wordstem.semanticField <= semfields.length"
            class="definition-box">
            <h3>{{ t('semantic_field') }}</h3>
            <p>{{ semfields[wordstem.semanticField - 1].frName }}</p>
          </div>

        </div>
      </div>
    </div>
    <div>

      <div style="display:flex; flex-direction: row; align-items: center;">
        <div>{{ t('sources') }}</div>
        <ul v-if="wordstem?.sources">
          <li v-for="src in wordstem.sources" :key="src.source_id - 1">
            <div>
              {{ src.abbreviation }} :
              {{ src.sourceOriginalName }} ({{ src.sourceEngName }})</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
