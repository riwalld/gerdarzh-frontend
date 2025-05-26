<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { onBeforeMount, ref, watch } from 'vue';
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
watch(() => route.params.wordStemId, async (newId) => {
  wordstem.value = await getAPI('/wordstems/', String(newId));
});
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
          <h1 style="color:grey; margin: 0 auto; ">{{ wordstem.name }}</h1>

          <p>
            <span :title="t(wordstem.wordClass)">{{ t(wordstem.wordClass) }}</span>
            &nbsp;&nbsp;
            <span :title="t(wordstem.gender)">{{ t(wordstem.gender) }}</span>
          </p>

          <p style="text-align: center; width: 50%; margin: auto; margin-bottom: 30px;">{{ wordstem.frDescription }}</p>
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
            <div v-for="parent in wordstem.parents" :key="parent.word_stem_id">
              <p> <span class="langws" :title="t(parent.word_stem_language)"> {{ t(wordstem.wordStemLanguage +
                '_abbr') }}
                </span> : <router-link
                  :to="{ name: 'wordstem-detail', params: { wordStemName: parent.name, wordStemId: parent.word_stem_id } }"
                  class="bg-gray-200 p-2 m-1 rounded-md"><b>{{ parent.name }}</b></router-link></p>

              <div v-for="grandParent in parent.child_stems" :key="grandParent.word_stem_id">
                <p> <span class="langws" :title="t(grandParent.word_stem_language)"> {{ t(wordstem.wordStemLanguage +
                  '_abbr') }}
                  </span> : <router-link
                    :to="{ name: 'wordstem-detail', params: { wordStemName: grandParent.name, wordStemId: grandParent.word_stem_id } }"
                    class="bg-gray-200 p-2 m-1 rounded-md"><b>{{ grandParent.name }}</b></router-link></p>

              </div>
            </div>
            <div v-for="child in wordstem.children" :key="child.word_stem_id">
              <p> <span class="langws" :title="t(child.word_stem_language)"> {{ t(wordstem.wordStemLanguage +
                '_abbr') }}
                </span> : <router-link
                  :to="{ name: 'wordstem-detail', params: { wordStemName: child.name, wordStemId: child.word_stem_id } }"
                  class="bg-gray-200 p-2 m-1 rounded-md"><b>{{ child.name }}</b></router-link></p>

              <div v-for="grandChild in child.child_stems" :key="grandChild.word_stem_id">
                <p> <span class="langws" :title="t(grandChild.word_stem_language)"> {{ t(wordstem.wordStemLanguage +
                  '_abbr') }}
                  </span> : <router-link
                    :to="{ name: 'wordstem-detail', params: { wordStemName: grandChild.name, wordStemId: grandChild.word_stem_id } }"
                    class="bg-gray-200 p-2 m-1 rounded-md"><b>{{ grandChild.name }}</b></router-link></p>
              </div>
            </div>
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
        <ul v-if="wordstem?.sources && sources">
          <li v-for="src in wordstem.sources" :key="src - 1">
            <div>
              {{ sources[src].abbreviation }} :
              {{ src.sourceOriginalName }} ({{ src.sourceEngName }})</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
