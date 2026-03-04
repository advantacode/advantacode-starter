# AdvantaCode Dev Setup

## Editor
**Primary Editor:** VSCode

### Recommended Extensions
- **Core**
  - Vue (Official)
  - TypeScript Vue Plugin (Volar)
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier
  - GitLens
  - EditorConfig
- **Optional but Useful**
  - Error Lens
  - Path IntelliSense
  - DotENV
  - Thunder Client (API testing)
  - Markdown All in One

---

## VSCode Workspace Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "files.eol": "\n",
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```