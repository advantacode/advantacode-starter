import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/domains/auth/stores/auth-store'

export function useAuth() {
  const authStore = useAuthStore()
  const { user, token, isLoading, errorMessage, isAuthenticated } = storeToRefs(authStore)

  return {
    user,
    token,
    isLoading,
    errorMessage,
    isAuthenticated,
    signIn: authStore.signIn,
    signUp: authStore.signUp,
    signOut: authStore.signOut,
    loadCurrentUser: authStore.loadCurrentUser,
    clearSession: authStore.clearSession
  }
}
