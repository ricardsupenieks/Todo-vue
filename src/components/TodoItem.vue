<template>
    <div class="p-1 px-2 text-stone-700 flex flex-row text-sm">
        <div>
            {{ index + 1}}
        </div>
        <div class="ml-5">
            <input type="text" v-if="isEdited" v-model="newEditValue" class="bg-transparent w-[189px]" maxlength="26"/>
            <p v-else @click="onComplete" class="cursor-pointer whitespace-nowrap">{{ task }}</p>
        </div>
        <div class="flex flex-row w-full justify-end gap-2">
            <button v-if="!isEdited" @click="isEdited = true" class="">Edit</button>
            <button v-if="isEdited" @click="isEdited = false" class="">Cancel</button>
            <button v-if="isEdited" @click="onSave" class="">Save</button>
        </div>
        <div class="ml-2">
            <button @click="$emit('deleteTask')">X</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


interface Props {
    task: string,
    isCompleted: boolean,
    index: number,
}

const props = defineProps<Props>();
const isEdited = ref(false);
const newEditValue = ref(props.task);

interface Emits {
    (e: "deleteTask"): void;
    (e: "updateTask", newValue: string): void;
    (e: "changeTaskState", newValue: boolean): void;
}

const onComplete = (): void => {
    emit("changeTaskState", !props.isCompleted);
}

const onSave = (): void => {
    if(newEditValue.value.length === 0) {
        emit("deleteTask");
    }
    emit("updateTask", newEditValue.value);
    isEdited.value = false;
}

const emit = defineEmits<Emits>();
</script>