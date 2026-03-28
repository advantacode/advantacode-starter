# Frontend Starter Template

Vue 3 + TypeScript + Vite starter aligned to the same domain-based process as the Laravel API starter.

## Included Foundation

- Vue 3 with TypeScript and Vite
- Domain-oriented frontend structure
- Shared app shell and router composition
- Pinia-ready application bootstrap
- Brand token support via `@advantacode/brander`
- Domain scaffolding support via `@advantacode/cli`
- DDEV-friendly Vite host configuration

Starter documentation:

- [Getting started](./docs/GETTING_STARTED.md)
- [API conventions](./docs/API_CONVENTIONS.md)
- [Tech overview](./docs/TECH_OVERVIEW.md)
- [Domain workflow](./docs/DOMAIN_WORKFLOW.md)
- [Brand system](./docs/BRAND_SYSTEM.md)
- [Testing](./docs/TESTING.md)
- [Trademark policy](./TRADEMARKS.md)
- [Contributing](./docs/CONTRIBUTING.md)

## Starter Routes

- `/`
- `/login`

## Project Structure

- `src/app` coordinates app bootstrapping, layouts, and router creation
- `src/domains` holds domain-specific route modules and views
- `src/support` holds shared frontend support code
- `src/_generated/brand` holds generated brand tokens and theme output

## Development

```bash
ddev start
npm install
npm run brand:setup    # Initialize brand system with Figma tokens
npm run dev            # Start development server
```

**Configuration:**

Copy `.env.example` to `.env` and customize:

```bash
cp .env.example .env
```

Edit environment variables for your company name, API endpoint, brand colors, and development settings. See [brand.config.ts](./brand.config.ts) for all options.

Run `npm run brand:generate` after updating `.env` to regenerate brand tokens.

For full setup and customization steps, see [docs/GETTING_STARTED.md](./docs/GETTING_STARTED.md).
