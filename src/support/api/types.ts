export interface ApiSuccessEnvelope<TData> {
  message?: string
  data?: TData
  meta?: Record<string, unknown>
}

export interface ApiErrorEnvelope {
  message: string
  errors?: Record<string, string[]>
  meta?: Record<string, unknown>
}

export interface AuthUser {
  id: number
  name: string
  email: string
  email_verified_at: string | null
  created_at: string
  updated_at: string
}

export interface LoginPayload {
  email: string
  password: string
  device_name?: string
}

export interface LoginData {
  token: string
  user: AuthUser
}

export interface RegisterPayload {
  name: string
  email: string
  password: string
  password_confirmation: string
  device_name?: string
}

export interface RegisterData {
  token: string
  user: AuthUser
}

export interface MeData {
  user: AuthUser
}
