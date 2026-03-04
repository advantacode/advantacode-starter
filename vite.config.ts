import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: Number(process.env.VITE_PORT) || 5173,
    strictPort: true,
    allowedHosts: ['.ngrok-free.app', 'advantacode-web.ddev.site'],
    origin: `https://advantacode-web.ddev.site:${Number(process.env.VITE_PORT) || 5173}`,
    hmr: {
      host: 'advantacode-web.ddev.site',
      protocol: 'wss',
    },
  },
})
