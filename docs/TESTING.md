# Testing

This project uses **Vitest** for unit and integration testing. Tests verify that the branding system integrates correctly with the application.

## Running Tests

```bash
npm run test        # Run tests once
npm run test:ui     # Interactive UI (Vitest Inspector)
npm run test:watch   # Watch mode (re-run on file changes)
```

## Brander Integration Tests

Located in `test/brander.integration.test.ts`, these tests verify:

### Brand Configuration

- `brand.config.ts` properly exports a configuration object
- Environment variables are read from `.env`
- Company name, app settings, and color palette are defined

### Generated Tokens

- Output directory path is created (`src/_generated/brand`)
- Required files are generated:
  - `tokens.css` — CSS custom properties
  - `tokens.ts` — TypeScript token exports
  - `tokens.json` — Machine-readable token format
- Generated files contain valid syntax and expected content

### Framework Adapters

- **Tailwind preset** (`adapters/tailwind.preset.ts`) is generated and valid
- Preset can be loaded and used by Tailwind configuration

### Theme Outputs

- Light and dark theme CSS files are generated
- Theme files contain CSS variables for styling applications

### Environment Setup

- `.env` file exists and is properly configured
- `.env.example` provides template documentation
- `.gitignore` properly excludes `.env` from version control

## Why These Tests Matter

The brander is critical to the template because:

1. It generates design tokens that all components depend on
2. It ties environment configuration to visual styling
3. It integrates with Tailwind CSS for the entire build
4. It ensures consistency across generated outputs

These tests catch issues like:

- Missing or malformed generated files (breaks the build)
- Environment variables not being read properly (styling issues)
- Invalid Tailwind preset syntax (Tailwind fails to build)
- Stale or corrupted generated tokens

## Adding New Tests

When modifying brander integration or configuration:

1. Add tests for new environment variables or config options
2. Verify generated outputs are valid
3. Test against both default and custom configurations
4. Run tests before committing

Example test structure:

```typescript
describe('New Feature', () => {
  it('should handle new configuration', () => {
    // Import or read new config
    // Assert expected output
    expect(result).toBe(expected)
  })
})
```

## Debugging Tests

```bash
# Run a specific test file
npm run test -- test/brander.integration.test.ts

# Run tests matching a pattern
npm run test -- --grep "Brand Configuration"

# Show verbose output
npm run test -- --reporter=verbose
```

## CI/CD Integration

Before merging pull requests, tests must pass:

```bash
# Pre-commit check (recommended in git hooks)
npm run check
```

This runs:

1. Type checking (`npm run type-check`)
2. Linting (`npm run lint`)
3. All tests (`npm run test`)

All must pass before merging.
