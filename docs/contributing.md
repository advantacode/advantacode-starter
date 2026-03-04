
---

## 4️⃣ `contributing.md`

```md
# Contributing to AdvantaCode Starter

## Branch Strategy

- `main` → production
- `develop` → integration / testing
- `feature/*` → new features

Workflow: feature → develop → main

---

## Commit Conventions

- `feat:` → new feature
- `fix:` → bug fix
- `chore:` → maintenance
- `refactor:` → code restructuring

---

## Pull Request Process

1. Push feature branch to remote
2. Create PR against `develop`
3. Ensure lint and type-check pass
4. Request review
5. Merge after approval

---

## Code Standards

- ESLint + Prettier enforced
- TypeScript strict checks
- Lint-staged + Husky run on pre-commit