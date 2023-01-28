<template>
    <div class="flex flex-col h-screen place-items-center">
        <div class="border-8 p-16 items-center m-auto bg-gradient-to-b from-cyan-400 to-yellow-100/80 shadow-lg h-[530px]" style="background-image: url(https://i.gifer.com/origin/7c/7c3b7a0f3dec2723c1be12064a5002bc.gif);">

            <h1 class="text-5xl font-bold text-white text-center rounded-lg">todo list</h1>

            <div class="text-white flex flex-row justify-center gap-2 text-lg">
                <button
                    class="focus:shadow-2xl focus:underline decoration-2"
                    @click="state.filter = 'all'"
                >
                    All
                </button>

                <button
                    class="focus:shadow-2xl focus:underline decoration-2"
                    @click="state.filter = 'active'"
                >
                    Active
                </button>

                <button
                    class="focus:shadow-2xl focus:underline decoration-2"
                    @click="state.filter = 'completed'"
                >
                    Completed
                </button>
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
                    v-if="state.filter === 'all'"
                    v-for="(todo, index) in state.todos"
                    :key="index"
                    class="bg-opacity-80 bg-white"
                    >
                        <div class="p-1 text-stone-700 flex flex-row justify-between gap-3">

                            <TodoItem :index="index" :task="todo.task" @deleteTodo="deleteTodo(index)"/> 
                        </div>
                </div>

                <div
                    v-if="state.filter === 'active'"
                    v-for="(todo, index) in activeTasks"
                    :key="index"
                    class="bg-opacity-80 bg-white"
                    >
                        <div 
                            class="p-1 text-stone-700 flex flex-row justify-between gap-3 cursor-pointer"
                            @click="todo.isCompleted = true"
                            >
                            <TodoItem :index="index" :task="todo.task" @deleteTodo="deleteTodo(index)"/> 
                        </div>
                </div>

                <div
                    v-if="state.filter === 'completed'"
                    v-for="(todo, index) in completedTasks"
                    :key="index"
                    class="bg-opacity-80 bg-white"
                    >
                        <div 
                            class="p-1 text-stone-700 flex flex-row justify-between gap-3 cursor-pointer"
                            @click="todo.isCompleted = false"
                        >
                            <TodoItem :index="index" :task="todo.task" @deleteTodo="deleteTodo(index)"/> 
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

const completedTasks = computed(() => {
    const tasks: Todo[] = [];

    state.todos.forEach(todo => {
        if(todo.isCompleted) {
            tasks.push(todo);
        }
    });

    return tasks;
});

const activeTasks = computed(() => {
    const tasks: Todo[] = [];

    state.todos.forEach(todo => {
        if(!todo.isCompleted) {
            tasks.push(todo);
        }
    });

    return tasks;
});

function addTodo() {
    const newTodo = {
        task: state.todo,
        isCompleted: false 
    };
    state.todos.push(newTodo);
    state.todo="";
};

function deleteTodo(index: number) {
    state.todos.splice(index, 1);
    state.todo="";
};

</script>