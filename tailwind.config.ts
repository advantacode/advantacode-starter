import type { Config } from 'tailwindcss'
import brandPreset from './src/_generated/brand/adapters/tailwind.preset'

export default {
  darkMode: ['class'],
  presets: [brandPreset],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: []
} satisfies Config
