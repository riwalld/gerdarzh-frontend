<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { Propernoun } from '../..//utils/types';
const props = defineProps({
  propernoun: {
    type: Object as PropType<Propernoun>,
    required: true
  }
});

const emit = defineEmits(['handleShowProperNoun']);

const handleShowProperNoun = (properNoun: Propernoun) => {
  emit('handleShowProperNoun', properNoun);
};
</script>
<template>

  <tr v-if="propernoun" class="wstr">
    <td><b>
        <a class="entry" @click="handleShowProperNoun(props.propernoun)"> {{ propernoun.currentName }}</a>
      </b></td>
    <td class="cell" id="wordtheme"></td>
    <td class="cell">{{ propernoun.period }}</td>
    <td class="cell">{{ propernoun.place }}</td>
    <td class="cell">{{ propernoun.country }}</td>
    <td class="cell"></td>
  </tr>
</template>
