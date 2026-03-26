import type { RouteRecordRaw } from 'vue-router'

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'auth-login',
    meta: {
      guestOnly: true
    },
    component: () => import('@/domains/auth/views/LoginView.vue')
  }
]

export default authRoutes
