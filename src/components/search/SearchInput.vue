<script setup lang="ts">
import { useSearchInputParametersStore } from '@/stores/basicData'
import { getAPI } from '@/utils/APIRequests'
import { WordStemDto } from '@/utils/types'
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const emit = defineEmits<{
  (e: 'lgs', value: string[]): void
  (e: 'smfields', value: string[]): void
}>()

const { t, locale } = useI18n()
const searchResult = ref(false)
const inputValue = ref('')
const includeDerived = ref<boolean>(false)
const resultList = ref<WordStemDto[]>([])
const noResult = ref<boolean>(false)
const searchInputParametersStore = useSearchInputParametersStore()

const selectedLanguages = ref<string[]>([])
const selectedSemfield = ref<string[]>([])
function toggleLanguage(code: string) {
  const idx = selectedLanguages.value.indexOf(code)
  if (idx === -1) selectedLanguages.value.push(code)
  else selectedLanguages.value.splice(idx, 1)
  emit('lgs', selectedLanguages.value)
}

function toggleSemField(code: string) {
  const idx = selectedSemfield.value.indexOf(code)
  if (idx === -1) selectedSemfield.value.push(code)
  else selectedSemfield.value.splice(idx, 1)
  emit('smfields', selectedSemfield.value)
}

const searching = async () => {
  const params = new URLSearchParams()

  if (inputValue.value) {
    params.append('q', inputValue.value)
  }

  if (selectedLanguages.value.length > 0) {
    params.append('lang', selectedLanguages.value.join(','))
  }

  if (selectedSemfield.value.length > 0) {
    params.append('field', selectedSemfield.value.join(','))
  }

  if (!includeDerived.value) {
    params.append('derived', 'false')
  }

  const url = `/search/?${params.toString()}`

  resultList.value = await getAPI(url)

  noResult.value = resultList.value?.length === 0
}

onMounted(async () => {
  await searchInputParametersStore.fetchSearchInputParameters()
})
</script>

<template>
  <div class="m-auto flex flex-col items-top gap-5 m-16">
    <!--<input
      type="text"
      v-model="inputValue"
      :placeholder="t('search')"
      @focus="searchResult = true"
      @keydown.enter="searching"
    />-->
    <div class="flex flex-row gap-16">
      <div class="w-72">
        <h2>{{ t('languages') }}</h2>
        <v-row>
          <v-col v-for="language in searchInputParametersStore.languageList" :key="language.code">
            <v-btn
              v-if="language.is_focus"
              size="x-small"
              :color="selectedLanguages.includes(language.code) ? 'light-blue' : ''"
              :id="'lang-' + language.code"
              block
              @click="toggleLanguage(language.code)"
              >{{ language.name }}
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div class="w-[500px]">
        <h2>{{ t('semantic_fields') }}</h2>
        <v-row>
          <v-col v-for="semfield in searchInputParametersStore.semfieldList" :key="semfield.id">
            <v-btn
              size="x-small"
              :color="selectedSemfield.includes(semfield.id.toString()) ? 'blue-grey' : ''"
              :id="'lang-' + semfield.id"
              class="text-sm"
              block
              @click="toggleSemField(semfield.id.toString())"
              >{{ semfield.frName }}
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
    <div
      class="absolute w-96 z-[1000] mx-auto bg-white shadow-[0px_1px_2px_#CCC]"
      v-show="searchResult"
    >
      <div v-for="result in resultList.slice(0, 5)" :key="result.name" :value="result">
        <router-link to="wordstem-detail"></router-link>
      </div>
    </div>
  </div>
</template>
