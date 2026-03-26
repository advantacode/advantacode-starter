# Starter Cleanup Checklist

Use this checklist when turning the frontend starter into a real product application.

## Project Identity

- [ ] Update `VITE_APP_NAME`
- [ ] Update `VITE_APP_HOST`, `VITE_PORT`, and `VITE_API_BASE_URL`
- [ ] Update README wording and example URLs
- [ ] Update `package.json` package name and metadata if needed

## Structure

- [ ] Keep shared app bootstrapping in `src/app`
- [ ] Keep reusable support code in `src/support`
- [ ] Add product-specific code under `src/domains/<domain>`
- [ ] Remove starter-only demo content from `src/domains/starter`

## Design And Brand

- [ ] Update or regenerate brand tokens
- [ ] Confirm `src/_generated/brand` output is current
- [ ] Remove any placeholder copy from starter views

## Workflow Alignment

- [ ] Keep frontend domain names aligned with backend domain names
- [ ] Confirm route naming and API wiring match the API starter
- [ ] Preserve the domain-first conventions used throughout this starter

## Verification

- [ ] Run `npm run check`
- [ ] Run `npm run build`
- [ ] Verify the app in DDEV or the chosen local environment
