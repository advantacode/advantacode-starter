import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { Pinia } from 'pinia'
import authRoutes from '@/domains/auth/routes'
import starterRoutes from '@/domains/starter/routes'
import { useAuthStore } from '@/domains/auth/stores/auth-store'

const routes: RouteRecordRaw[] = [...starterRoutes, ...authRoutes]

export function createAppRouter() {
  return createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
      return { top: 0 }
    }
  })
}

export function registerAuthGuards(router: ReturnType<typeof createAppRouter>, pinia: Pinia) {
  router.beforeEach(async (to) => {
    const authStore = useAuthStore(pinia)

    if (authStore.token && !authStore.user) {
      try {
        await authStore.loadCurrentUser()
      } catch {
        // Store handles message and session cleanup for unauthorized state.
      }
    }

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
      return {
        name: 'auth-login'
      }
    }

    if (to.meta.guestOnly && authStore.isAuthenticated) {
      return {
        name: 'starter-dashboard'
      }
    }

    return true
  })
}
