<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import AppShell from '@/app/layouts/AppShell.vue'
import { useAuth } from '@/domains/auth/composables/use-auth'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api/v1'

const credentials = reactive({
  email: '',
  password: ''
})

const router = useRouter()

const { user, isLoading, errorMessage, isAuthenticated, signIn, signOut } = useAuth()

async function handleSubmit() {
  await signIn({ ...credentials })
  await router.push({ name: 'starter-dashboard' })
}
</script>

<template>
  <AppShell>
    <section class="mx-auto max-w-xl py-10">
      <div class="rounded-2xl border border-border bg-card p-8">
        <p class="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Auth Domain
        </p>

        <h1 class="mt-4 text-3xl font-semibold tracking-tight">
          Sanctum login flow example
        </h1>

        <p class="mt-4 text-sm text-muted-foreground">
          This route demonstrates a full domain slice: auth composable, Pinia store,
          and API service wiring for Laravel Sanctum token endpoints.
        </p>

        <form class="mt-8 space-y-4" @submit.prevent="handleSubmit">
          <div class="space-y-2">
            <label class="text-sm font-medium text-foreground" for="email">Email</label>
            <input
              id="email"
              v-model="credentials.email"
              type="email"
              autocomplete="email"
              class="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-foreground" for="password">Password</label>
            <input
              id="password"
              v-model="credentials.password"
              type="password"
              autocomplete="current-password"
              class="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              placeholder="••••••••"
              required
            />
          </div>

          <p v-if="errorMessage" class="text-sm text-red-500">
            {{ errorMessage }}
          </p>

          <div class="flex items-center gap-3">
            <button
              type="submit"
              :disabled="isLoading"
              class="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
            >
              {{ isLoading ? 'Signing in...' : 'Sign in' }}
            </button>

            <button
              v-if="isAuthenticated"
              type="button"
              class="rounded-lg border border-border px-4 py-2 text-sm"
              @click="signOut"
            >
              Sign out
            </button>
          </div>
        </form>

        <div v-if="isAuthenticated && user" class="mt-6 rounded-xl bg-muted px-4 py-3 text-sm">
          <span class="font-medium text-foreground">Authenticated user:</span>
          <span class="ml-2 text-muted-foreground">{{ user.email }}</span>
        </div>

        <div class="mt-8 rounded-xl bg-muted px-4 py-3 text-sm">
          <span class="font-medium text-foreground">Expected API base:</span>
          <span class="ml-2 font-mono text-muted-foreground">{{ apiBaseUrl }}</span>
        </div>
      </div>
    </section>
  </AppShell>
</template>
