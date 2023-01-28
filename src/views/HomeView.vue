<template>
    <div class="flex flex-col h-screen place-items-center">
        <div class="border-8 p-16 items-center m-auto bg-gradient-to-b from-cyan-400 to-yellow-100/80 shadow-lg h-[530px]" style="background-image: url(https://i.gifer.com/origin/7c/7c3b7a0f3dec2723c1be12064a5002bc.gif);">

            <h1 class="text-5xl font-bold text-white text-center rounded-lg">todo list</h1>

            <div class="text-white flex flex-row justify-center gap-2">
                <button>All</button>
                <button>Active</button>
                <button>Complete</button>
            </div>

            <div class="relative mt-4">
                <input
                    type="text"
                    v-model="state.todo"
                    class="block w-full p-3 border-2 bg-opacity-80 rounded-lg bg-white shadow-xl outline-none text-stone-700"
                    placeholder="Add todo..."
                    maxlength="50"
                    @keyup.enter="addTodo()"
                    />
                   
            </div>

            <div class="mt-10 max-h-52 overflow-auto">
                
                <div
                v-for="(todo, index) in state.todos"
                :key="index"
                class="bg-opacity-80 bg-white"
                >
                    <p class="p-1 text-stone-700 flex flex-row justify-between gap-3">
                        <TodoItem :index="index" :task="todo.task" @deleteTodo="deleteTodo(index)"/> 
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import TodoItem from '../components/TodoItem.vue'

interface Todo {
    task: string;
    isCompleted: boolean;
}

const state = reactive({
    todos: [
        {
            task: "Make todo list",
            isCompleted: false,
        }
    ] as Todo[],

    todo: "",

    filter: "all",
})

function addTodo() {
    const newTodo = {
        task: state.todo,
        isCompleted: false 
    };
    state.todos.push(newTodo);
    state.todo="";
}

function deleteTodo(index: number) {
    state.todos.splice(index, 1);
    state.todo="";
}

</script>