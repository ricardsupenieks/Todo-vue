import { createRouter, createWebHistory } from 'vue-router'
import TodoViewVue from '../views/TodoView.vue'
import HomeView from '../views/TodoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoViewVue
    },
  ]
})

export default router
