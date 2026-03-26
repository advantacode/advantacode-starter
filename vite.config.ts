import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const appHost = env.VITE_APP_HOST || 'starter-web.ddev.site'
  const port = Number(env.VITE_PORT || 5173)

  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [vue(), tailwindcss()],
    server: {
      host: '0.0.0.0',
      port,
      strictPort: true,
      allowedHosts: ['.ngrok-free.app', appHost],
      origin: `https://${appHost}:${port}`,
      hmr: {
        host: appHost,
        protocol: 'wss'
      }
    }
  }
})
