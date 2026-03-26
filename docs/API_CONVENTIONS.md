# API Conventions

This starter expects a versioned Laravel API contract under `/api/v1`.

## Base URL

Configure the base URL in `.env`:

```env
VITE_API_BASE_URL=https://starter-api-laravel.ddev.site/api/v1
```

The frontend Axios client uses this value as its `baseURL`.

## Auth Contract (Sanctum Tokens)

The auth domain example is wired to these API endpoints:

- `POST /auth/login`
- `GET /auth/me`
- `POST /auth/logout`
- `POST /auth/logout-all`

The login endpoint is expected to return a bearer token and current user payload.

Frontend typing reference:

- `ApiSuccessEnvelope<TData>` and `ApiErrorEnvelope` in `src/support/api/types.ts`
- Auth payloads (`LoginData`, `MeData`, `AuthUser`) in `src/support/api/types.ts`

## Frontend API Structure

- `src/support/api/http.ts` owns Axios defaults and auth header injection
- `src/domains/<domain>/services/*` owns domain-specific API calls
- `src/domains/<domain>/stores/*` owns request state and domain state
- `src/domains/<domain>/composables/*` exposes a view-friendly API

## Error Handling

- Keep API error parsing in services/stores, not views
- Return clear fallback messages for network failures
- Treat `401` as unauthenticated and clear local auth state

## Naming

- Keep frontend domain names aligned with backend domains where possible
- Keep route naming and resource naming consistent across both templates
- Keep endpoint usage centralized in domain services
