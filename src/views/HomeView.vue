<template>
    <div class="bg-blue-300">Hello</div>
</template>

<script setup lang="ts">
import "@/assets/index.css";
import { reactive } from 'vue';


const state = reactive({
    todos: [],
})

</script>




















<!-- INPUT -->
<!-- <template>
    <div>Input</div>
    <input v-model="state.inputValue"/>

    <div class="input">{{ state.inputValue }}</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const state = reactive({
    inputValue: "",
})

// function updateInput(input: any) {
//     state.inputValue = input.target.value;
// }

</script>

<style>
.counter {
    background-color: aqua;
    font-size: 30px;
    text-align: ce;
    padding: 10px;
}
</style> -->



<!-- COUNTER  -->
<!-- <template>
    <div>Counter</div>
    <button @click="incrementCounter(1)">Increase</button>
    <button @click="incrementCounter(-1)">Decrease</button>
    <div class="counter">{{ state.counter }}</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const state = reactive({
    counter: 0,
})

function incrementCounter(value: number) {
    state.counter+=value;
}

</script>

<style>
.counter {
    background-color: aqua;
    font-size: 30px;
    text-align: ce;
    padding: 10px;
}
</style> -->