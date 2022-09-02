import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: import(/* webpackChunkName: "router-home" */ '@/views/Home.vue')
  },
  {
    path: '/routerex',
    name: 'RouterEx',
    component: import(/* webpackChunkName: "router-ex" */ '@/views/RouterEx.vue')
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
