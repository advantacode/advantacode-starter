import { apiClient } from '@/support/api/http'
import type {
  ApiSuccessEnvelope,
  LoginData,
  LoginPayload,
  MeData,
  RegisterData,
  RegisterPayload
} from '@/support/api/types'

export async function register(payload: RegisterPayload) {
  const response = await apiClient.post<ApiSuccessEnvelope<RegisterData>>('/auth/register', payload)

  if (!response.data.data) {
    throw new Error('Registration response did not include data payload.')
  }

  return response.data.data
}

export async function login(payload: LoginPayload) {
  const response = await apiClient.post<ApiSuccessEnvelope<LoginData>>('/auth/login', payload)

  if (!response.data.data) {
    throw new Error('Login response did not include data payload.')
  }

  return response.data.data
}

export async function fetchCurrentUser() {
  const response = await apiClient.get<ApiSuccessEnvelope<MeData>>('/auth/me')

  if (!response.data.data?.user) {
    throw new Error('Current user response did not include user payload.')
  }

  return response.data.data.user
}

export async function logout() {
  await apiClient.post('/auth/logout')
}

export async function logoutAll() {
  await apiClient.post('/auth/logout-all')
}
