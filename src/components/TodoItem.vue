<template>
    <p>{{ index + 1}}</p> 
    <p>{{ task }}</p>
    <button @click="$emit('deleteTodo')">X</button>
</template>

<script setup lang="ts">

interface Props {
    task: string,
    index: number,
}

interface Emits {
    (e: "deleteTodo"): void;
}

const props = defineProps<Props>();

const emit = defineEmits<Emits>();
</script>