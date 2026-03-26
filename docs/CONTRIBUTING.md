# Contributing

## Governance Model

This starter follows a **closed governance model**.

The template is maintainer-led, and core development decisions are managed by the maintainer.

External pull requests may not be accepted in order to keep architecture and starter direction consistent across repositories.

## Trademark Requirements

If you use this template for a real project or public distribution, replace starter branding defaults (`COMPANY_NAME`, app names, hostnames, copy) with your own.

See [TRADEMARKS.md](../TRADEMARKS.md) for trademark restrictions and permitted descriptive references.

## Issues and Feature Requests

Bug reports and feature suggestions are welcome through GitHub issues.

Bug reports should include:

- the problem
- reproduction steps
- expected behavior

Feature requests should include:

- the problem to solve
- the proposed approach
- alternatives considered

## Setup

1. Copy `.env.example` to `.env` and customize as needed
2. Run `npm install`
3. Run `npm run brand:setup` to initialize the brand system

Note: `.env` is ignored by Git. Never commit `.env` files—use `.env.example` as a template.

## Before Opening A PR

1. Update `.env.example` if any new environment variables are added
2. Run `npm run check` (linting, type checking, and tests)
   - This runs `npm run lint`, `npm run type-check`, and `npm run test` sequentially
3. Run `npm run brand:generate` if brand colors or settings change
4. Run `npm run build` to verify production build succeeds
5. Verify docs still reflect the current starter structure

### Testing

This project includes integration tests that verify the brander setup works correctly:

```bash
npm run test           # Run tests once
npm run test:ui       # Open Vitest UI (interactive)
npm run test:watch    # Watch mode
```

**Brander Integration Tests** (`test/brander.integration.test.ts`):

- Brand configuration reads environment variables correctly
- Token files are generated with expected structure and content
- Tailwind preset adapter is properly formatted
- Theme files (light/dark) exist and are valid
- Generated CSS/JSON/TS files have expected content
- Environment variables are properly configured

## Contribution Standards

- Keep the starter generic and template-ready
- Prefer domain-based structure over flat page-based growth
- Avoid product-specific placeholders unless they demonstrate a reusable pattern
- Keep frontend conventions aligned with the API starter where practical
- Update `brand.config.ts` comments if new environment variables are added
- Ensure `.env.example` and `brand.config.ts` stay in sync
