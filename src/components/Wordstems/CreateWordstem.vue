<script setup lang="ts">
import { ref, defineEmits, onMounted } from 'vue';
import { getAPI, postAPI } from "../../utils/APIRequests"
import { useI18n } from 'vue-i18n';
import { SemanticField, Source, WordStemDto } from '../../utils/types';
const { t } = useI18n();
const semFieldl = ref<SemanticField>({
  id: 0,
  frName: '',
  engName: ''
});
const wordstemDto = ref<WordStemDto>({
  id: 0,
  gender: '',
  wordClass: '',
  wordStemLanguage: '',
  wordStemName: '',
  wordStemParents: [],
  firstOccurrence: '',
  semanticField: semFieldl.value.id,
  descrEng: '',
  descrFr: '',
  phonetic: '',
  engTranslation: '',
  frTranslation: '',
  sources: [],
});


const sourceList = ref<Source[]>();
const semfields = ref<SemanticField[]>([]);

const emit = defineEmits(['handleAddWordstem']);
const handleAddWordstem = (value: boolean) => {
  emit('handleAddWordstem', value);
};

const close = () => {
  handleAddWordstem(false);
};

const postWordstem = async () => {
  postAPI('/wordstems/', wordstemDto);
};
onMounted(async () => {
  semfields.value = await getAPI('/semanticFields/', '');
  sourceList.value = await getAPI('/sources/', '');
});

</script>
<template>
  <div id="modal-bg" class="modal">

    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
      <h2>{{ t('propose_new_term') }}</h2>
      <form @submit.prevent="postWordstem">
        <label for="wordStemName">{{ t('term') }}</label>
        <input type="text" v-model="wordstemDto.wordStemName" required><br><br>

        <label for="wordStemLanguage">{{ t('language_of_word') }}</label>
        <select v-model="wordstemDto.wordStemLanguage" required>
          <option value="LB">{{ t('breton') }}</option>
          <option value="BBQ">{{ t('brittonic') }}</option>
          <option value="LC">{{ t('cornish') }}</option>
          <option value="LE">{{ t('english') }}</option>
          <option value="LF">{{ t('french') }}</option>
          <option value="LG">{{ t('gaulish') }}</option>
          <option value="LGER">{{ t('germanic') }}</option>
          <option value="LIE">{{ t('proto_indoeuropean') }}</option>
          <option value="LIR">{{ t('irish') }}</option>
          <option value="LOI">{{ t('old_irish') }}</option>
          <option value="LS">{{ t('scottish_gaelic') }}</option>
          <option value="LPC">{{ t('proto_celtic') }}</option>
          <option value="LW">{{ t('welsh') }}</option>
          <option value="LLT">{{ t('latin') }}</option>
        </select><br><br>

        <label for="phonetic">{{ t('phonetic') }}</label>
        <input type="text" v-model="wordstemDto.phonetic" required><br><br>

        <label for="gender">{{ t('gender') }}</label>
        <select v-model="wordstemDto.gender" required>
          <option value="GM">{{ t('masculine') }}</option>
          <option value="GF">{{ t('feminine') }}</option>
          <option value="GN">{{ t('neutral') }}</option>
          <option value="GU">{{ t('unknown') }}</option>
          <option value="NO">{{ t('na') }}</option>
        </select><br><br>

        <label for="wordClass">{{ t('word_class') }}</label>
        <select v-model="wordstemDto.wordClass" required>
          <option value="WN">{{ t('noun') }}</option>
          <option value="WV">{{ t('verb') }}</option>
          <option value="WADJ">{{ t('adjective') }}</option>
          <option value="WADV">{{ t('adverb') }}</option>
          <option value="WART">{{ t('article') }}</option>
          <option value="WPRN">{{ t('pronoun') }}</option>
          <option value="WPREP">{{ t('preposition') }}</option>
          <option value="WCONJ">{{ t('conjunction') }}</option>
          <option value="WAF">{{ t('affix') }}</option>
        </select><br><br>

        <label for="engTranslation">{{ t('english_translation') }}</label>
        <input type="text" v-model="wordstemDto.engTranslation" required><br><br>

        <label for="frTranslation">{{ t('french_translation') }}</label>
        <input type="text" v-model="wordstemDto.frTranslation" required><br><br>

        <label for="semanticField">{{ t('semantic_field') }}</label>
        <select v-model="wordstemDto.semanticField" required>
          <option v-for="semfield in semfields" :key="semfield.id" :value="semfield.id">
            {{ semfield.frName }}
          </option>
        </select><br><br>

        <label for="firstOccurence">{{ t('first_occurrence') }}</label>
        <input type="number" v-model="wordstemDto.firstOccurrence" required><br><br>

        <label for="source">{{ t('reference_book') }}</label>
        <select v-if="sourceList" v-model="wordstemDto.sources" required>
          <option v-for="source in sourceList" :key="source.source_id" :value="source">{{ source.sourceOriginalName }}

          </option>
        </select>
      </form>
    </div>
  </div>

</template>
