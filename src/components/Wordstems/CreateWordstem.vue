<script setup lang="ts">
import { ref, defineEmits, onMounted, watch } from 'vue';
import { getAPI, postAPI } from "../../utils/APIRequests"
import { useI18n } from 'vue-i18n';
import { SemanticField, Source, WordStemDto, WordStemPayload } from '../../utils/types';
const { t } = useI18n();
const semFieldl = ref<SemanticField>({
  id: 0,
  frName: '',
  engName: ''
});
const wordstemDto = ref<WordStemPayload>({
  gender: '',
  wordClass: '',
  wordStemLanguage: '',
  wordStemName: '',
  parents_ids: [],
  children_ids: [],
  firstOccurrence: '',
  semanticField: semFieldl.value.id,
  engDescription: '',
  frDescription: '',
  phonetic: '',
  engTranslation: '',
  frTranslation: '',
  sources: [],
});


const sourceList = ref<Source[]>();
const semfields = ref<SemanticField[]>([]);
const childrenInputValue = ref('');
const parentInputValue = ref('');
const wordstems = ref<WordStemDto[]>([]);

const emit = defineEmits(['handleAddWordstem']);
const handleAddWordstem = (value: boolean) => {
  emit('handleAddWordstem', value);
};

const close = () => {
  handleAddWordstem(false);
};

const postWordstem = async () => {
  postAPI('/wordstems/', wordstemDto.value);
};

const parentSearchResultList = () => {
  if (!parentInputValue.value) {
    return [];
  }
  const inputValue = parentInputValue.value.toLowerCase();
  return wordstems.value.filter((pcRad) =>
    pcRad.wordStemName.toLowerCase().includes(inputValue)
  );
};

const childrenSearchResultList = () => {
  if (!childrenInputValue.value) {
    return [];
  }
  const inputValue = childrenInputValue.value.toLowerCase();
  return wordstems.value.filter((pcRad) =>
    pcRad.wordStemName.toLowerCase().includes(inputValue)
  );
};

const addWordstem = (result: any, parent: boolean) => {
  if (parent) {
    wordstemDto.value.parents_ids.push(result);
    parentInputValue.value = '';
  } else {
    wordstemDto.value.children_ids.push(result);
    childrenInputValue.value = '';
  }

};

const deleteParents = () => {
  wordstemDto.value.parents_ids = [];
}
const deleteChildren = () => {
  wordstemDto.value.children_ids = [];
}
watch(
  () => wordstemDto.value.sources,
  (val) => {
    if (!Array.isArray(val)) {
      wordstemDto.value.sources = [val]
    }
  }
)

onMounted(async () => {
  semfields.value = await getAPI('/semanticFields/', '');
  sourceList.value = await getAPI('/sources/', '');
  wordstems.value = await getAPI('/wordstems/', '');
});
</script>

<template>
  <div id="modal-bg" class="modal">
    {{ }}
    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
      <h2>{{ t('propose_new_term') }}</h2>
      <form @submit.prevent="postWordstem">
        <div style="display: flex; flex-direction: row; gap: 40px;">
          <div>
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

            <label for="engDescription">{{ t('english_Description') }}</label>
            <input type="text" v-model="wordstemDto.engDescription" required><br><br>

            <label for="frDescription">{{ t('french_Description') }}</label>
            <input type="text" v-model="wordstemDto.frDescription" required><br><br>
          </div>
          <div style="width: 200px;">
            <label for="semanticField">{{ t('semantic_field') }}</label>
            <select v-model="wordstemDto.semanticField" required>
              <option v-for="semfield in semfields" :key="semfield.id" :value="semfield.id">
                {{ semfield.frName }}
              </option>
            </select><br><br>

            <label for="firstOccurence">{{ t('first_occurrence') }}</label>
            <input type="number" v-model="wordstemDto.firstOccurrence" required><br><br>
            <div>
              <label for="parentsInput">{{ t('parents_wordstems') }}:</label>
              <input type="text" v-model="parentInputValue">
              <div class="searchResult">
                <div v-for="proposedWordstems in parentSearchResultList().slice(0, 5)" :key="proposedWordstems.id"
                  @click="addWordstem(proposedWordstems, true)">
                  {{ proposedWordstems.wordStemName }}
                </div>
              </div>
              <div style="display: flex;">
                <div v-for="parentId in wordstemDto.parents_ids" :key="parentId"
                  style="border: 1px solid black; padding: 5px; margin: 5px; background-color: azure;">
                  {{ wordstems[parentId].wordStemName }}
                </div>
                <div @click="deleteParents()">X</div>
              </div>
            </div>
            <div>
              <label for=" childrenInput">{{ t('children_wordstems') }}:</label>
              <input type="text" v-model="childrenInputValue">
              <div class="searchResult">
                <div v-for="proposedWordstems in childrenSearchResultList().slice(0, 5)" :key="proposedWordstems.id"
                  @click="addWordstem(proposedWordstems, false)">
                  {{ proposedWordstems.wordStemName }}
                </div>
              </div>
              <div style="display: flex;">
                <div v-for="childrenId in wordstemDto.children_ids" :key="childrenId"
                  style="border: 1px solid black; padding: 5px; margin: 5px; background-color: azure;">
                  {{ wordstems[childrenId].wordStemName }}
                </div>
                <div @click="deleteChildren()">X</div>
              </div>
            </div>
            <label for="sources">{{ t('reference_book') }}</label>
            <select v-if="sourceList" v-model="wordstemDto.sources" multiple required>
              <option v-for="source in sourceList" :key="source.sourceId" :value="source.sourceId">{{
                source.sourceOriginalName }}
              </option>
            </select>
            <button type="submit">Envoyer</button>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>
