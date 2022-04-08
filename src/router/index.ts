import {createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/login/index.vue'
import Todo from '../pages/todo/index.vue'
import Profile from '../pages/profile/index.vue'

const routes = [
{name: Login,
  path: '/login', 
  component: Login},

{path: '/todo',
   component: Todo},

{path: '/profile', 
component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

  export default router;  