<script setup lang="ts">
import { ref, defineEmits, onMounted } from 'vue';
import { API_URL } from '../../utils/utils';
import { LitTrans, PcRadicals, Propernoun } from '../../utils/types';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const litTransl = ref<LitTrans>({
  litTransFr: '',
  litTransEng: '',
  litTransType: ''
})
const properNounDto = ref<Propernoun>({
  litTrans: litTransl.value,
  currentName: '',
  etymoName: '',
  descrFr: '',
  descrEng: '',
  shortDescrFr: '',
  shortDescrEng: '',
  wordTheme: null,
  culturalArea: null,
  place: '',
  country: '',
  period: 'XIIIème s.',
  year: 1200,
  image: '',
  imgCaption: '',
  wordStemsPC: [],
});
const pcRadicalInputValue = ref('');
const pcRadicals = ref<PcRadicals[]>([]);
const message = ref('');

const emit = defineEmits(['handleAddProperNoun']);
const handleAddProperNoun = (value: boolean) => {
  emit('handleAddProperNoun', value);
};

const submit = async () => {
  try {
    await fetch(API_URL + '/properNouns/', {
      body: JSON.stringify(properNounDto.value),
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    message.value = 'Word Stem added successfully!';
    close();
  } catch (error) {
    message.value = 'There was an error while adding the noun.';
    console.error(error);
  }
};

const close = () => {
  handleAddProperNoun(false);
};

const pcRadicalsSearchResultList = () => {
  if (!pcRadicalInputValue.value) {
    return [];
  }
  const inputValue = pcRadicalInputValue.value.toLowerCase();
  return pcRadicals.value.filter((pcRad) =>
    pcRad.name.toLowerCase().includes(inputValue)
  );
};

const addPcRadical = (result: any) => {
  properNounDto.value.wordStemsPC.push(result);
  pcRadicalInputValue.value = '';
};
onMounted(() => {
  fetch(API_URL + '/wordstems/Str/', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(pcRadicalsData => {
      pcRadicals.value = pcRadicalsData;
      console.log(pcRadicals.value);
    });
});
</script>

<template>
  <div id="modal-bg" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <h2>{{ t('propose_new_proper_noun') }}</h2>
      <form @submit.prevent="submit">
        <div style="display: flex; padding: 10px; gap: 70px;">
          <div>
            <div style="padding-right: 65px;">
              <label for="pNCurrentName">{{ t('entity_name') }}:</label>
              <input type="text" v-model="properNounDto.currentName" required><br><br>
            </div>
            <div>
              <label for="litTransFr">{{ t('literal_translation_fr') }}:</label>
              <input type="text" v-model="properNounDto.litTrans.litTransFr" required><br><br>
            </div>
            <div>
              <label for="litTransEng">{{ t('literal_translation_eng') }}:</label>
              <input type="text" v-model="properNounDto.litTrans.litTransEng" required><br><br>
            </div>
            <div>
              <label for="place">{{ t('geographical_place') }}:</label>
              <input type="text" v-model="properNounDto.place" required><br>
            </div>
            <div>
              <label for="country">{{ t('country') }}:</label>
              <input type="text" v-model="properNounDto.country" required><br>
            </div>
          </div>
          <div>
            <div>
              <label for="wordTheme">{{ t('lexical_theme') }}:</label>
              <select v-model="properNounDto.wordTheme" required>
                <option value="1">{{ t('places_and_countries') }}</option>
                <option value="2">{{ t('historical_figures') }}</option>
                <option value="3">{{ t('mythical_figures') }}</option>
                <option value="4">{{ t('peoples_and_tribes') }}</option>
                <option value="5">{{ t('weapons_and_creatures') }}</option>
                <option value="6">{{ t('first_and_last_names') }}</option>
              </select><br><br>
            </div>
            <div>
              <label for="culturalAera">{{ t('cultural_area') }}:</label>
              <select v-model="properNounDto.culturalArea" required>
                <option value="1">{{ t('gaule') }}</option>
                <option value="2">{{ t('brittany') }}</option>
                <option value="3">{{ t('wales') }}</option>
                <option value="4">{{ t('ireland_and_scotland') }}</option>
              </select><br><br>
            </div>
            <div>
              <label for="litTransType">{{ t('translation_type') }}:</label>
              <select v-model="properNounDto.litTrans.litTransType" required>
                <option value="1">{{ t('masculine_person_name') }}</option>
                <option value="2">{{ t('feminine_person_name') }}</option>
                <option value="3">{{ t('clan_or_tribe_name') }}</option>
                <option value="4">{{ t('singular_masculine_place_name') }}</option>
                <option value="5">{{ t('singular_feminine_place_name') }}</option>
                <option value="6">{{ t('plural_place_name') }}</option>
                <option value="10">{{ t('weapon_or_object_name') }}</option>
              </select><br><br>
            </div>
            <div>
              <label for="pNEtymoName">{{ t('etymological_form') }}:</label>
              <input type="text" v-model="properNounDto.etymoName" required><br><br>
            </div>
            <div>
              <label for="radicalPCInput">{{ t('proto_celtic_radicals') }}:</label>
              <input type="text" v-model="pcRadicalInputValue">
              <div class="searchResult">
                <div v-for="proposedPcRadicals in pcRadicalsSearchResultList().slice(0, 5)" :key="proposedPcRadicals.id"
                  @click="addPcRadical(proposedPcRadicals)">
                  {{ proposedPcRadicals.name }}
                </div>
              </div>
              <div style="display: flex;">
                <div v-for="selectedRadicalPC in properNounDto.wordStemsPC" :key="selectedRadicalPC.id"
                  style="border: 1px solid black; padding: 5px; margin: 5px; background-color: azure;">
                  {{ selectedRadicalPC.name }}
                </div>
              </div>
            </div>
            <div>
              <label for="period">{{ t('period') }}:</label>
              <input type="text" v-model="properNounDto.period" required><br>
            </div>
            <div>
              <label for="year">{{ t('approximate_year') }}:</label>
              <input type="text" v-model="properNounDto.year" required>
            </div>
          </div>
        </div>
        <div>
          <div style="display:flex; flex-direction: column;">
            <label for="descrFr">{{ t('description') }}:</label>
            <textarea type="text" v-model="properNounDto.descrFr" rows="5" cols="90" style="max-width: 90%;"></textarea>
          </div>
          <div style="display:flex; flex-direction: column;">
            <label for="descrEng">{{ t('image_caption') }}:</label>
            <textarea type="text" v-model="properNounDto.imgCaption" rows="3" cols="90"
              style="max-width: 90%;"></textarea>
          </div>
        </div>
        <input type="submit" value="{{ t('add') }}">
      </form>
    </div>
  </div>
</template>