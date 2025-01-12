
<script setup>
import { setLanguages } from '../Config/Config.js';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  wordstem: { type: Object, required: true },
  semfields: { type: Array, required: true },
  sources: { type: Array, required: true },
});

const emit = defineEmits(['handleShowWordstem']);

setLanguages();

function close() {
  emit('handleShowWordstem', null);
}
</script>
<template>
  <div id="modal-bg" class="modal">
    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
      <h1 style="color:grey" class="wordstemname">{{ wordstem.wordStemName }}</h1>
      <table style="width: 100%;">
        <tr>
          <td>
            <h3>{{ t('grammatical_nature') }}</h3>
            <p>
              <span :title="wordstem.wordClass">{{ wordstem.wordClass }}</span>
              &nbsp;&nbsp;
              <span :title="wordstem.gender">{{ wordstem.gender }}</span>
            </p>

            <h3>{{ t('associated_language') }}</h3>
            <p>{{ wordstem.wordStemLanguage }}</p>

          <tr>
            <td>
              <h3>{{ t('french_translation') }}</h3>
              <p>{{ wordstem.frTranslation }}</p>
            </td>
            <td>
              <h3>{{ t('english_translation') }}</h3>
              <p>{{ wordstem.engTranslation }}</p>
            </td>
          </tr>

          <h3>{{ t('semantic_field') }}</h3>
          <p>{{ semfields[wordstem.semanticField - 1].frName }}</p>

          <h3>{{ t('details') }}</h3>
          <p>{{ wordstem.descrFr }}</p>

          <h3>{{ t('sources') }}</h3>
          <ul>
            <li v-for="src in wordstem.sources" :key="src.id - 1">
              {{ sources[src - 1].sourceAbbreviation }} :
              {{ sources[src - 1].sourceOriginalName }} ({{ sources[src - 1].sourceEngName }})
            </li>
          </ul>
        </td>
      </tr>
      </table>
    </div>
  </div>
</template>
