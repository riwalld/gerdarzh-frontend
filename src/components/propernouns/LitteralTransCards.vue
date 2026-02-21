<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { getImage } from '../../utils/utils'
import { API_URL } from '@/utils/utils'
import { Propernoun } from '@/utils/types'
const { t } = useI18n()
defineProps({})
defineEmits([])

const properNouns = ref<Propernoun[]>([])

onMounted(async () => {
  try {
    const response = await fetch(API_URL + `/properNouns/`, { method: 'GET' })
    const data = await response.json()
    properNouns.value = data
  } catch (error) {
    console.error('Erreur lors de la récupération des noms propres :', error)
  }
})
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-5 p-6">
    <div v-for="propernoun in properNouns">
      <div class="w-[190px] h-[280px] my-6 py-6 border border-gray-400 rounded-md relative">
        <div
          class="absolute h-14 w-14 bg-white -mt-5 rounded-full shadow-md flex justify-center items-center"
        >
          <div v-if="propernoun.wordTheme == 1">Lec'h</div>
          <div v-if="propernoun.wordTheme == 2">Den</div>
          <div v-if="propernoun.wordTheme == 3">Doue</div>
          <div v-if="propernoun.wordTheme == 4">Pobl</div>
          <div v-if="propernoun.wordTheme == 5">Arm</div>
          <div v-if="propernoun.wordTheme == 6">Boud</div>
        </div>
        <div style="display: flex; flex-direction: column; margin-top: 60px">
          <div class="m-auto">
            <!--<h2 class="text-center text-sm h-24">{{ propernoun.litTrans.litTransBr }}</h2>-->
            <div v-for="wf in propernoun.wordStemsPC" class="flex justify-center">
              <div class="text-center text-xs h-12">{{ wf.fr }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
