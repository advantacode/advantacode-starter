import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import { createAppRouter, registerAuthGuards } from '@/app/router'
import { useAuthStore } from '@/domains/auth/stores/auth-store'

const app = createApp(App)
const pinia = createPinia()
const router = createAppRouter()

registerAuthGuards(router, pinia)

app.use(pinia)
app.use(router)

const authStore = useAuthStore(pinia)
void authStore.loadCurrentUser().catch(() => {
  // Expired or invalid tokens are handled by the store.
})

const mountApp = () => {
  app.mount('#app')
}

mountApp()
