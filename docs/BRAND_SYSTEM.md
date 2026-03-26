# Brand System

This project uses `@advantacode/brander` to generate design tokens and CSS variables from a centralized brand configuration.

Package reference: [@advantacode/brander on npm](https://www.npmjs.com/package/@advantacode/brander).

## Configuration

All brand configuration lives in two places:

1. **`.env`** — Environment variables for colors, company name, and CSS prefix
2. **`brand.config.ts`** — Read-only source of truth that consolidates all `.env` variables

Never edit `brand.config.ts` directly. Instead, update `.env` and regenerate:

```bash
npm run brand:generate
```

## Initial Setup

When cloning or setting up this project:

```bash
npm run brand:setup
```

This initializes the brand system and generates all tokens in `src/_generated/brand/`.

## Brand Colors

Configure via environment variables in `.env`:

- `PRIMARY_COLOR` — Primary brand color
- `SECONDARY_COLOR` — Secondary color
- `ACCENT_COLOR` — Accent/highlight color
- `INFO_COLOR` — Info state (notifications, alerts)
- `SUCCESS_COLOR` — Success state
- `WARNING_COLOR` — Warning state
- `DANGER_COLOR` — Error/danger state

Use Tailwind color names (e.g., `purple-500`, `zinc-700`). See [Tailwind colors](https://tailwindcss.com/docs/customizing-colors#color-palette) for the full palette.

## Generated Output

Running `npm run brand:generate` creates:

- `src/_generated/brand/tokens.css` — CSS variables
- `src/_generated/brand/tokens.json` — JSON tokens
- `src/_generated/brand/tokens.ts` — TypeScript exports
- `src/_generated/brand/adapters/` — Framework-specific (Tailwind preset, etc.)
- `src/_generated/brand/themes/` — Light/dark theme variants

Import tokens in your app:

```ts
// In src/main.ts or style.css
import '@advantacode/brander/tokens.css'
```

## Company Name

Set `COMPANY_NAME` in `.env` to customize:

- Page titles
- Branded references in generated documentation
- Error messages and UI text

## CSS Prefix

Optionally namespace CSS variables with `CSS_PREFIX`:

```env
CSS_PREFIX="myapp-"
```

This converts `--color-primary` to `--myapp-color-primary`.

## Workflow

1. Update `.env` with your brand colors and company name
2. Run `npm run brand:generate` to regenerate tokens
3. Tailwind CSS automatically uses the generated token presets
4. Import CSS variables where needed in components

---

## Starter Brand Direction (Example)

- **Positioning:** Reliable, clear, and product-ready
- **Tone:** Confident, intentional, technical, modern
- **Vibe:** Clean and implementation-focused
- **Emotions:** Trust, clarity, maintainability, momentum

### Default Color Palette

- **Primary:** Purple 500 (confidence, technical)
- **Secondary:** Zinc 700 (neutral, balanced)
- **Accent:** Purple 400 (highlights)
- **Info:** Sky 500
- **Success:** Green 500
- **Warning:** Yellow 500
- **Danger:** Red 500

### Typography

- **Headings:** Inter (600, 700 weights)
- **Body:** Inter (400, 500 weights)
- **Code:** JetBrains Mono

### Layout Principles

- Generous whitespace
- Clear hierarchy
- Strong CTA contrast
- Minimal animations (motion for clarity only)
- Subtle shadows and light borders
