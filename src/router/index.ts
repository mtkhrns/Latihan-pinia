import {createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/login/index.vue'
import Todo from '../pages/todo/index.vue'
import Profile from '../pages/profile/index.vue'


const router = [
{ path: '/login', component: Login},

{path: '/todo', component: Todo},

{path: '/profile',component: Profile }
]

export default router;  
