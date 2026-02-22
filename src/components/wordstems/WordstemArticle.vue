<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getAPI } from '../../utils/APIRequests'
import { SemanticField, Source, WordStemDto } from '@/utils/types'
import EtymologicalNode from './EtymologicalNode.vue'

const route = useRoute()
const { t, locale } = useI18n()
const wordstem = ref<WordStemDto>()
const semfields = ref<SemanticField[]>()
const sources = ref<Source[]>()

const emit = defineEmits(['handleShowWordstem'])
const getSrc = (id: number) => {
  if (sources) {
    return sources.value?.find((source) => source.id === id)
  }
}
watch(
  () => route.params.wordStemId,
  async (newId) => {
    wordstem.value = await getAPI('/wordstem/' + newId)
  }
)
onBeforeMount(async () => {
  wordstem.value = await getAPI('/wordstem/' + route.params.wordStemId)
  semfields.value = await getAPI('/semanticFields/')
  sources.value = await getAPI('/sources/')
})
</script>
<template>
  <div v-if="wordstem" class="w-[1000px] m-auto">
    <div style="width: 100%">
      <div class="flex flex-col justify-center text-center">
        <div class="bg-grey-500 text-5xl p-5 trajan">{{ wordstem.name }}</div>
        <div class="flex flex-row gap-4 justify-center">
          <div
            class="flex flex-row gap-2 p-2 bg-slate-200 rounded-md text-gray-800 items-center h-16"
          >
            <img
              class="h-10"
              :src="'/media/flags/flag_' + wordstem.wordStemLanguage + '.png'"
              height="15"
              :alt="t(wordstem.wordStemLanguage)"
            />
            {{ t(wordstem.wordStemLanguage) }}
          </div>
          <div class="bg-slate-200 rounded-md p-2">
            <span :title="t(wordstem.wordClass)">{{ t(wordstem.wordClass) }}</span>
            &nbsp;&nbsp;
            <span :title="t(wordstem.gender)">{{ t(wordstem.gender) }}</span>
            <p style="text-align: center; width: 50%; margin: auto">{{ wordstem.frDescription }}</p>
          </div>
        </div>
      </div>

      <div class="flex flex-row gap-5 justify-center">
        <div class="w-72">
          <div class="definition-box">
            <h3>{{ t('pronunciation') }}</h3>
            <p>
              /<b>{{ t(wordstem.phonetic) }}</b
              >/
            </p>
          </div>
          <div class="definition-box">
            <h3>{{ t('translations') }}</h3>
            <div>
              <div v-if="locale == 'fr'">{{ wordstem.frTranslation }}</div>
              <div v-if="locale == 'en'">{{ wordstem.engTranslation }}</div>
            </div>
          </div>
          <div class="definition-box">
            <h3>{{ t('sources') }}</h3>
            <ul v-if="wordstem?.sources && sources">
              <li v-for="src in wordstem.sources" :key="src - 1">
                {{ getSrc(src)?.name }} ({{ getSrc(src)?.abbreviation }})
              </li>
            </ul>
          </div>
        </div>
        <div class="w-72">
          <div class="definition-box">
            <h3>{{ t('etymology') }}</h3>
            <div
              class="flex flex-col-reverse"
              v-for="parent in wordstem.parents"
              :key="parent.word_stem_id"
            >
              <EtymologicalNode :related="parent"></EtymologicalNode>
              <div
                v-for="grandParent in parent.parent_stems_reverse"
                :key="grandParent.word_stem_id"
                class="pl-10"
              >
                <EtymologicalNode :related="grandParent"></EtymologicalNode>
              </div>
            </div>
            <div v-for="child in wordstem.children" :key="child.word_stem_id">
              <EtymologicalNode :related="child"></EtymologicalNode>
              <div
                v-for="grandChild in child.child_stems"
                :key="grandChild.word_stem_id"
                class="pl-10"
              >
                <EtymologicalNode :related="grandChild"></EtymologicalNode>
              </div>
            </div>
          </div>
          <div
            v-if="
              semfields && wordstem.semanticField > 0 && wordstem.semanticField <= semfields.length
            "
            class="definition-box"
          >
            <h3>{{ t('semantic_field') }}</h3>
            <p>{{ semfields[wordstem.semanticField - 1].frName }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
