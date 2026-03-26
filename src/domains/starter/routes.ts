import type { RouteRecordRaw } from 'vue-router'

const starterRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'starter-home',
    component: () => import('@/domains/starter/views/StarterHomeView.vue')
  },
  {
    path: '/dashboard',
    name: 'starter-dashboard',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/domains/starter/views/StarterDashboardView.vue')
  }
]

export default starterRoutes
