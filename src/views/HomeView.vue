<template>
    <div class="flex flex-col h-screen place-items-center">
        <div class="border-8 p-16 items-center m-auto shadow-lg h-[530px]"
            style="background-image: url(https://i.gifer.com/origin/7c/7c3b7a0f3dec2723c1be12064a5002bc.gif);">

            <h1 class="text-5xl font-bold text-white text-center rounded-lg">todo list</h1>

            <div v-if="state.filter === 'all'" class="text-white flex flex-row justify-center gap-2 text-lg">
                <button class="focus:shadow-2xl underline decoration-2" @click="state.filter = 'all'">
                    All
                </button>

                <button @click="state.filter = 'active'"> 
                    Active
                </button>

                <button @click="state.filter = 'completed'">
                    Completed
                </button>
            </div>

            <div v-if="state.filter === 'active'" class="text-white flex flex-row justify-center gap-2 text-lg">
                <button @click="state.filter = 'all'">
                    All
                </button>

                <button @click="state.filter = 'active'" class="focus:shadow-2xl underline decoration-2">
                    Active
                </button>

                <button @click="state.filter = 'completed'">
                    Completed
                </button>
            </div>

            <div v-if="state.filter === 'completed'" class="text-white flex flex-row justify-center gap-2 text-lg">
                <button @click="state.filter = 'all'">
                    All
                </button>

                <button @click="state.filter = 'active'">
                    Active
                </button>

                <button @click="state.filter = 'completed'" class="focus:shadow-2xl underline decoration-2">
                    Completed
                </button>
            </div>

            <div class="relative mt-4">
                <input type="text" v-model="state.todo"
                    class="block w-full p-3 border-2 bg-opacity-80 rounded-lg bg-white shadow-xl outline-none text-stone-700"
                    placeholder="Add todo..." maxlength="50" @keyup.enter="addTodo()" />
            </div>

            <div class="mt-10 max-h-52 overflow-auto">
                <div v-for="(todo, index) in filteredTasks" :key="index"
                    class="bg-opacity-80 bg-white rounded">
                    <div class="p-1 text-stone-700 flex flex-row justify-between gap-3">

                        <TodoItem :index="index" :task="todo.task" @deleteTodo="deleteTodo(index)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { computed } from 'vue';
import TodoItem from '../components/TodoItem.vue'

interface Todo {
    task: string;
    isCompleted: boolean;
};

const state = reactive({
    todos: [
        {
            task: "Make todo list",
            isCompleted: false,
        }
    ] as Todo[],

    todo: "",

    filter: "all",
});

const filteredTasks = computed((): Todo[] => {
    switch(state.filter) {
        case 'completed':
            return state.todos.filter(todo => todo.isCompleted);
        case 'active':
            return state.todos.filter(todo => !todo.isCompleted); 
    }
    return state.todos;
})

function addTodo(): void {
    const newTodo = {
        task: state.todo,
        isCompleted: false
    };
    state.todos.push(newTodo);
    state.todo = "";
};

function deleteTodo(index: number): void {
    state.todos.splice(index, 1);
    state.todo = "";
};

</script>