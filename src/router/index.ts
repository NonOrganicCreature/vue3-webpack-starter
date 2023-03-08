import { createRouter, createWebHistory } from 'vue-router'

const Home = () =>
  import(/* webpackChunkName: "HomePage" */ '../pages/HomePage.vue')

import TestPage from '../pages/TestPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/test-page', component: TestPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
