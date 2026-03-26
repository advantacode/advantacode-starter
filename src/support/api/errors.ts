import axios from 'axios'
import type { ApiErrorEnvelope } from '@/support/api/types'

export function normalizeApiError(error: unknown, fallback = 'Request failed. Please try again.') {
  if (!axios.isAxiosError(error)) {
    return fallback
  }

  const message = (error.response?.data as ApiErrorEnvelope | undefined)?.message
  return message || fallback
}

export function isUnauthorizedError(error: unknown) {
  return axios.isAxiosError(error) && error.response?.status === 401
}
