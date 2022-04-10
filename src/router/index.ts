import {createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/login/index.vue'
import Todo from '../pages/todo/index.vue'
import Profile from '../pages/profile/index.vue'
import User from '../pages/user/user.vue'


const routes = [
{ path: '/login', 
  name: 'Login',
  component: Login},

{path: '/todo', 
 name: 'Todo',
 component: Todo},

{path: '/profile',
 name: 'Profile',
 component: Profile},

 {path: '/user',
 name: 'User',
 component: User }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;  
