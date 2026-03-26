import axios from 'axios'

const tokenStorageKey = 'auth_token'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(tokenStorageKey)

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export function setAuthToken(token: string) {
  localStorage.setItem(tokenStorageKey, token)
}

export function clearAuthToken() {
  localStorage.removeItem(tokenStorageKey)
}

export function getStoredAuthToken() {
  return localStorage.getItem(tokenStorageKey)
}
