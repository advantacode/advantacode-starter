import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { clearAuthToken, getStoredAuthToken, setAuthToken } from '@/support/api/http'
import { isUnauthorizedError, normalizeApiError } from '@/support/api/errors'
import { fetchCurrentUser, login, logout } from '@/domains/auth/services/auth-service'
import type { AuthUser, LoginPayload } from '@/support/api/types'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<AuthUser | null>(null)
  const token = ref<string | null>(getStoredAuthToken())
  const isLoading = ref(false)
  const errorMessage = ref('')

  const isAuthenticated = computed(() => Boolean(token.value && user.value))

  async function signIn(payload: LoginPayload) {
    isLoading.value = true
    errorMessage.value = ''

    try {
      const data = await login({ ...payload, device_name: 'web' })
      token.value = data.token
      user.value = data.user
      setAuthToken(data.token)
    } catch (error) {
      errorMessage.value = normalizeApiError(
        error,
        'Login failed. Check credentials and try again.'
      )
      throw error
    } finally {
      isLoading.value = false
    }
  }

  async function loadCurrentUser() {
    if (!token.value) {
      return
    }

    isLoading.value = true
    errorMessage.value = ''

    try {
      user.value = await fetchCurrentUser()
    } catch (error) {
      if (isUnauthorizedError(error)) {
        clearSession()
        errorMessage.value = 'Session expired. Please sign in again.'
      } else {
        errorMessage.value = normalizeApiError(error, 'Unable to load current user.')
      }
      throw error
    } finally {
      isLoading.value = false
    }
  }

  async function signOut() {
    try {
      if (token.value) {
        await logout()
      }
    } finally {
      clearSession()
    }
  }

  function clearSession() {
    user.value = null
    token.value = null
    clearAuthToken()
  }

  return {
    user,
    token,
    isLoading,
    errorMessage,
    isAuthenticated,
    signIn,
    signOut,
    loadCurrentUser,
    clearSession
  }
})
