<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  propernoun: Object
});

const emit = defineEmits();

const handleShowProperNoun = (ProperNoun) => {
  emit('handleShowProperNoun', ProperNoun);
};
</script>
<template>

<tr class="wstr">
    <td><b>
      <a class="entry" @click="handleShowProperNoun(propernoun)"> {{propernoun.currentName}}</a>
     </b></td>
     <td class="cell" id="wordtheme"></td>
     <td class="cell">{{propernoun.period}}</td>
     <td class="cell">{{propernoun.place}}</td>
     <td class="cell">{{propernoun.country}}</td>
     <td class="cell"></td></tr>
</template>
