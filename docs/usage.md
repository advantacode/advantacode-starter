# AdvantaCode Starter Usage

## Setup

```bash
git clone <repo-url>
cd advantacode
npm install
ddev start
npm run dev

npm run dev → local dev server

npm run build → production build

npm run preview → preview built site

Adding New Pages

Create new Vue file in src/views/

Add route in src/router/index.ts

Wrap in layout shell if needed

Add relevant Pinia store or composable

Adding Components

Create file in src/components/

Follow Tailwind + shadcn conventions

Document props/usage in docs/components.md (optional)

Tailwind Customization

Edit tailwind.config.ts to modify:

Colors

Spacing

Fonts

Rebuild using npm run build or dev server auto-reload