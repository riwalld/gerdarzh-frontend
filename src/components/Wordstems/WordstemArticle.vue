<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  wordstem: { type: Object, required: true },
  semfields: { type: Array, required: true },
  sources: { type: Array, required: true },
});

const emit = defineEmits(['handleShowWordstem']);

function close() {
  emit('handleShowWordstem', null);
}
</script>
<template>
  <div id="modal-bg" class="modal">
    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
      <div style="display: flex; flex-direction: row; align-items: center; position: relative;">
        <div style=" background-color: darkslategrey; color: aliceblue; padding: 5px; position: absolute; 
        border-radius: 7px; font-size: 20px;">
          {{ t(wordstem.wordStemLanguage) }}</div>
        <h1 style="color:grey; margin: 0 auto; text-align: center; width: 100%;">{{ wordstem.wordStemName }}</h1>
      </div>
      <p style="text-align: center; width: 50%; margin: auto; margin-bottom: 30px;">{{ wordstem.descrFr }}</p>

      <div style="display: flex; flex-direction: row;">
        <div style="width: 50%;">
          <div>
            <p>
              <span :title="t(wordstem.wordClass)">{{ t(wordstem.wordClass) }}</span>
              &nbsp;&nbsp;
              <span :title="t(wordstem.gender)">{{ t(wordstem.gender) }}</span>
            </p>
          </div>

          <div>
            <h3>{{ t('pronunciation') }}</h3>
            <p>/{{ t(wordstem.phonetic) }}/</p>
          </div>
          <div>
            <h3>{{ t('translations') }}</h3>
            <div>
              <li><span>{{ t('french') }}: </span>{{ wordstem.frTranslation }}</li>
              <li><span>{{ t('english') }}: </span>{{ wordstem.engTranslation }}</li>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>{{ t('semantic_field') }}</h3>
            <p>{{ semfields[wordstem.semanticField - 1].frName }}</p>
          </div>
          <h3>{{ t('etymological_links') }}</h3>
          wordstem.parent
        </div>
      </div>
      <h3>{{ t('sources') }}</h3>
      <ul>
        <li v-for="src in wordstem.sources" :key="src.id - 1">
          {{ sources[src - 1].sourceAbbreviation }} :
          {{ sources[src - 1].sourceOriginalName }} ({{ sources[src - 1].sourceEngName }})
        </li>
      </ul>
    </div>
  </div>
</template>
