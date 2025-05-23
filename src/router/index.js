import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/login/success',
      name: 'LoginSuccess',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../layouts/DashboardLayout.vue'),
    }
  ],
})

export default router
