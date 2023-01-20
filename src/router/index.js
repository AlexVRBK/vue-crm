import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CategoriesView from '../views/CategoriesView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
    // meta: {layout: 'empty'},
    // component: () => import('./view/LoginView.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView
    // meta: {layout: 'main'},
    // component: () => import('./view/CategoriesView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
