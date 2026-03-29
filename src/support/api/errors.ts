import axios from 'axios'
import type { ApiErrorEnvelope } from '@/support/api/types'

export type ApiValidationErrors = Record<string, string[]>

export function normalizeApiError(error: unknown, fallback = 'Request failed. Please try again.') {
  if (!axios.isAxiosError(error)) {
    return fallback
  }

  const message = (error.response?.data as ApiErrorEnvelope | undefined)?.message
  return message || fallback
}

export function getValidationErrors(error: unknown): ApiValidationErrors {
  if (!axios.isAxiosError(error)) {
    return {}
  }

  const errors = (error.response?.data as ApiErrorEnvelope | undefined)?.errors

  return errors && typeof errors === 'object' ? errors : {}
}

export function isUnauthorizedError(error: unknown) {
  return axios.isAxiosError(error) && error.response?.status === 401
}
