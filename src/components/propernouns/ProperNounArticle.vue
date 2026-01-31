<script setup lang="ts">
import { ref, defineProps, defineEmits, onBeforeMount, PropType } from 'vue'
import { getImage, getPropernoun } from '../../utils/utils'
import { Propernoun } from '../..//utils/types'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const props = defineProps({
  currentName: { type: String as PropType<string | null>, required: true }
})

const emit = defineEmits(['handleShowProperNoun'])

const propernoun = ref<Propernoun | null>(null)

onBeforeMount(async () => {
  if (props.currentName) propernoun.value = await getPropernoun(props.currentName)
})

function close() {
  emit('handleShowProperNoun', null)
}
</script>

<template>
  <div id="modal-bg" class="modal">
    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
      <div style="display: flex; padding: 10px">
        <div v-if="propernoun">
          <div class="etymoInfo">
            <div>
              <img :src="getImage(propernoun.image)" />
            </div>

            <div style="display: flex; flex-direction: column">
              <div style="padding: 30px">
                <h2 style="padding-bottom: 20px">{{ propernoun.currentName }}</h2>
                <div style="font-size: larger; font-weight: bold">{{ propernoun.descrFr }}</div>
              </div>
              <div class="flex gap-3">
                {{ t('literal_meaning') }}:
                <div v-if="locale == 'fr'">{{ propernoun.litTrans.litTransFr }}</div>
                <div v-if="locale == 'br'">{{ propernoun.litTrans.litTransBr }}</div>
              </div>
              <div>{{ t('etymological_form') }}: {{ propernoun.etymoName }}</div>
              <div class="flex gap-3">
                {{ t('radicals') }}:
                <div v-for="wordstem in propernoun.wordStemsPC" class="g">
                  <div>{{ wordstem.name }}</div>
                </div>
              </div>
              <div>{{ t('place') }}: {{ propernoun.place }}, {{ propernoun.country }}</div>
              <div>{{ t('period') }}: {{ propernoun.period }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
