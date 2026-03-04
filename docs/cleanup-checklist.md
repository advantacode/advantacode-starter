# AdvantaCode Boilerplate Cleanup Checklist

When starting a project from scratch (instead of cloning the starter), remove unused boilerplate to keep repo clean.

---

## 1. Git / Repo

- [ ] Remove `.git` if copying into new repo
- [ ] Update `README.md`
- [ ] Update `package.json` name, version, author

---

## 2. Node Modules & Configs

- [ ] Delete `node_modules/` and `package-lock.json` (fresh install)
- [ ] Review `package.json` dependencies & remove unused
- [ ] Update scripts (`dev`, `build`, `lint`) if needed
- [ ] Check `tsconfig.json` — remove unnecessary path aliases

---

## 3. Tailwind + Theme

- [ ] Remove placeholder colors or old Tailwind config
- [ ] Update fonts & design tokens in `tailwind.config.ts`
- [ ] Remove example CSS in `src/assets/base.css` if not needed

---

## 4. Vue Components

- [ ] Delete example pages in `src/views/`
- [ ] Remove demo components in `src/components/`
- [ ] Keep `LayoutShell.vue` / essential base components only

---

## 5. Router & Store

- [ ] Remove demo routes in `src/router/index.ts`
- [ ] Remove demo Pinia stores in `src/stores/`

---

## 6. Docs

- [ ] Remove unnecessary example docs
- [ ] Keep brand-system.md, dev-setup.md if reusable
- [ ] Create `usage.md` for your new project

---

## 7. Deployment & CI/CD

- [ ] Update Cloudflare Pages project name
- [ ] Update GitHub workflows if using CI/CD
- [ ] Remove old preview/deploy scripts if unrelated