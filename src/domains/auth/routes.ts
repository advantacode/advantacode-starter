import type { RouteRecordRaw } from 'vue-router'

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/register',
    name: 'auth-register',
    meta: {
      guestOnly: true
    },
    component: () => import('@/domains/auth/views/RegisterView.vue')
  },
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
