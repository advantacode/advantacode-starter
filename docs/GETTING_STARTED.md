# Getting Started

Use this guide to turn the frontend starter into a real application while keeping it aligned with the Laravel API starter.

## 1. Bootstrap The Starter

```bash
ddev start
npm install
npm run brand:setup
npm run dev
```

Default starter URL:

- `https://starter-web.ddev.site:5173`

## 2. Customize Project Identity

All project identity, branding, and API configuration is controlled by environment variables in `.env`. This file is the single source of truth for your application configuration and is referenced by `brand.config.ts`.

**Before product work begins, update `.env` with:**

- **Company & Branding:** `COMPANY_NAME`, `VITE_APP_NAME`
- **Development:** `VITE_APP_HOST`, `VITE_PORT`
- **API:** `VITE_API_BASE_URL` (backend API endpoint)
- **Brand Colors:** `PRIMARY_COLOR`, `SECONDARY_COLOR`, `ACCENT_COLOR`, `INFO_COLOR`, `SUCCESS_COLOR`, `WARNING_COLOR`, `DANGER_COLOR` (use Tailwind color names)
- **CSS Prefix:** `CSS_PREFIX` (optional, for custom CSS property namespacing)

See [brand.config.ts](../brand.config.ts) for all configuration options and defaults.

**Copy `.env.example` as a template:**

```bash
cp .env.example .env
```

**Additional customizations:**

- DDEV hostnames if this repo is cloned into a project-specific frontend template
- README wording and example URLs
- `package.json` package name if the repo becomes a real application
- Brand colors via Tailwind's color palette in `.env`

## 3. Verify Setup (Optional)

To verify the branding system is working correctly:

```bash
npm run brand:generate  # Regenerate tokens after .env changes
npm run test           # Run integration tests
npm run check          # Full validation (lint, type-check, test)
```

See [TESTING.md](TESTING.md) for more details about the test suite.

## 4. Starter Expectations

- Keep shared bootstrapping in `src/app`
- Keep product logic in `src/domains`
- Keep reusable utilities in `src/support`
- Add product domains deliberately, not as empty placeholders
- Keep frontend domain names aligned with backend domain names where possible

## 5. Add The First Product Domain

1. Create `src/domains/<domain-name>`
2. Add a route module for that domain
3. Add views, composables, stores, and UI for that domain only as needed
4. Connect the domain to the backend API starter contract
5. Update docs if the public workflow or structure changes

## 6. Sanctum Token Usage Pattern (Recommended)

The starter includes a ready-to-copy auth integration pattern:

- `src/support/api/http.ts` for base Axios configuration
- `src/domains/auth/services/auth-service.ts` for endpoint functions
- `src/domains/auth/stores/auth-store.ts` for auth state and token lifecycle
- `src/domains/auth/composables/use-auth.ts` for view-level interaction
- `src/domains/starter/views/StarterDashboardView.vue` as an authenticated-only starter page

This keeps frontend conventions aligned with the API starter's Sanctum endpoints:

- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me`
- `POST /api/v1/auth/logout`
- `POST /api/v1/auth/logout-all`
