<script setup lang="ts">
import { ref, defineProps, defineEmits,  onBeforeMount } from 'vue';
import { getImage, getPropernoun } from '@/utils/utils';
import { Propernoun } from '@/utils/types';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const props = defineProps({
  currentName: { type: String, required: true }
});

const emit = defineEmits(['handleShowProperNoun']);

const propernoun = ref<Propernoun | null>(null);

onBeforeMount(async () => {
  propernoun.value = await getPropernoun(props.currentName);
});

function close() {
  emit('handleShowProperNoun', null);
}
</script>

<template>
  <div id="modal-bg" class="modal">
    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
        <div style="display: flex; padding: 10px;">
          <div class="etymoInfo">
            <div>
             
              <img :src="getImage(propernoun.image)" /></div>
                
                <div style="display: flex; flex-direction: column;">
                <div style="padding: 30px;">
                    <h2 style="padding-bottom: 20px;">{{ propernoun.currentName }} </h2>
                    <div style="font-size: larger; font-weight: bold;">{{ propernoun.descrFr }}</div>
                </div>
                <div> {{t('literal_meaning')}}: {{ propernoun.litTrans.litTransFr }}</div>
                <div> {{t('etymological_form')}}: {{ propernoun.etymoName }}</div>
                <div> {{t('place')}}: {{ propernoun.place }}, {{ propernoun.country }}</div>
                <div> {{t('period')}}: {{ propernoun.period }}</div>
            </div>
            </div>
          </div>
    </div>
  </div>

</template>
