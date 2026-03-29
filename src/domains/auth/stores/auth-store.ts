import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { clearAuthToken, getStoredAuthToken, setAuthToken } from '@/support/api/http'
import { isUnauthorizedError, normalizeApiError } from '@/support/api/errors'
import { fetchCurrentUser, login, logout, register } from '@/domains/auth/services/auth-service'
import type { AuthUser, LoginPayload, RegisterPayload } from '@/support/api/types'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<AuthUser | null>(null)
  const token = ref<string | null>(getStoredAuthToken())
  const isLoading = ref(false)
  const errorMessage = ref('')

  const isAuthenticated = computed(() => Boolean(token.value && user.value))

  function applySession(nextToken: string, nextUser: AuthUser) {
    token.value = nextToken
    user.value = nextUser
    setAuthToken(nextToken)
  }

  function resetRequestState() {
    isLoading.value = true
    errorMessage.value = ''
  }

  async function signUp(payload: RegisterPayload) {
    resetRequestState()

    try {
      const data = await register({ ...payload, device_name: 'web' })
      applySession(data.token, data.user)
    } catch (error) {
      errorMessage.value = normalizeApiError(
        error,
        'Registration failed. Check your details and try again.'
      )
      throw error
    } finally {
      isLoading.value = false
    }
  }

  async function signIn(payload: LoginPayload) {
    resetRequestState()

    try {
      const data = await login({ ...payload, device_name: 'web' })
      applySession(data.token, data.user)
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

    resetRequestState()

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
    signUp,
    signOut,
    loadCurrentUser,
    clearSession
  }
})
