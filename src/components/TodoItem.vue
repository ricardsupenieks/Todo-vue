<template>
    <div class="p-1 px-2 text-stone-700 cursor-pointer flex flex-row">
        <div>
            {{ index + 1}}
        </div>
        <div class="ml-5">
            <input type="text" v-if="isEdited" v-model="newEditValue" class="bg-transparent w-40" />
            <p v-else>{{ task }}</p>
        </div>
        <div class="flex flex-row gap-3 ">
            <button v-if="!isEdited" @click="isEdited = true" class="ml-[180px]">Edit</button>
            <button v-if="isEdited" @click="isEdited = false" class="ml-5">Cancel</button>
            <button v-if="isEdited" @click="onSave" class="">Save</button>
        </div>
        <div class="ml-auto">
            <button @click="$emit('deleteTask')">X</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


interface Props {
    task: string,
    index: number,
}

const props = defineProps<Props>();

const isEdited = ref(false);
const newEditValue = ref(props.task);

interface Emits {
    (e: "deleteTask"): void;
    (e: "updateTask", newValue: string): void
}

const onSave = () => {
    emit("updateTask", newEditValue.value);
    isEdited.value = false;
}

const emit = defineEmits<Emits>();
</script>