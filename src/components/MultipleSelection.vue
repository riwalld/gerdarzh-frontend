<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import { WordStemDto, Source, WordStemPayload } from '@/utils/types';
const { t } = useI18n();
const props = defineProps<{
    objectList: WordStemDto[] | Source[]
    currentPayload: WordStemPayload;
    selectedList: number[]
}>();
const emit = defineEmits(['update']);

const inputValue = ref('');

const addWordstem = (result: any) => {
    emit('update', result);
    inputValue.value = '';
};

const searchResultList = () => {
    if (!inputValue.value) {
        return [];
    }
    const input = inputValue.value.toLowerCase();
    return props.objectList.filter((pcRad) =>
        pcRad.name.toLowerCase().includes(input)
    );
};

const selectedObjects = computed(() =>
    props.objectList.filter(
        (obj) => obj.id !== undefined && props.selectedList.includes(obj.id)
    )
);

const eraseInput = () => {
    emit('update', null);
}

</script>

<template>
    <div style="width: 800px;">
        <input type="text" v-model="inputValue">
        <div class="searchResult" style=" max-width: 600px;">
            <div style="padding: 3px; border: solid 1px; border-radius: 5px; border-color: gray;"
                v-for="proposedWordstems in searchResultList().slice(0, 10)" :key="proposedWordstems.id"
                @click="addWordstem(proposedWordstems.id)">
                {{ proposedWordstems.name }}
            </div>
        </div>
        <div v-if="selectedObjects" style="display: flex; flex-wrap: wrap; max-width: 600px;">
            <div v-for="object in selectedObjects" :key="object.id"
                style="border: 1px solid black; padding: 5px; margin: 5px; background-color: azure;">
                {{ object.name }}
            </div>
            <div @click="eraseInput()">X</div>
        </div>
    </div>
</template>