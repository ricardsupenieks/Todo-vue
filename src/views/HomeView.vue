<template>
    <div class="flex flex-col h-screen place-items-center">
        <div class="border-8 p-16 items-center m-auto shadow-lg h-[530px] w-[500px]"
            style="background-image: url(https://i.gifer.com/origin/7c/7c3b7a0f3dec2723c1be12064a5002bc.gif);">

            <h1 class="text-5xl font-bold text-white text-center rounded-lg subpixel-antialiased	">todo list</h1>

            <div v-if="state.filter === 'all'" class="text-white flex flex-row justify-center gap-2 text-lg subpixel-antialiased">
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

            <div v-if="state.filter === 'active'" class="text-white flex flex-row justify-center gap-2 text-lg subpixel-antialiased">
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

            <div v-if="state.filter === 'completed'" class="text-white flex flex-row justify-center gap-2 text-lg subpixel-antialiased">
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
                    placeholder="Add todo..." maxlength="26" @keyup.enter="addTodo()" />
            </div>

            <div class="mt-10 max-h-52 overflow-auto rounded">
                <div v-for="(todo, index) in filteredTasks" :key="index" class="bg-opacity-80 bg-white">
                    <div class="p-1 px-2 text-stone-700">
                        <TodoItem :index="index" :task="todo.task" :isCompleted="todo.isCompleted"
                            @deleteTask="deleteTodo(index)" @updateTask="(newValue) => (todo.task = newValue)"
                            @changeTaskState="(newValue) => (todo.isCompleted = newValue)" />
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

type Filter = "all" | "active" | "completed";

const state = reactive({
    todos: [
        {
            task: "Make todo list",
            isCompleted: false,
        }
    ] as Todo[],

    todo: "",

    filter: "all" as Filter,
});

const filteredTasks = computed((): Todo[] => {
    switch (state.filter) {
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