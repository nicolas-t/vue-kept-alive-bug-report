import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/Page1',
    name: 'Page1',
    component: () => import('../views/Page1.vue')
  },
  {
    path: '/Page2',
    name: 'Page2',
    component: () => import('../views/Page2.vue')
  },
  {
    path: '/Page3',
    name: 'Page3',
    component: () => import('../views/Page3.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
