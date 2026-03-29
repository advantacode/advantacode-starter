<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import AppShell from '@/app/layouts/AppShell.vue'
import { useAuth } from '@/domains/auth/composables/use-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

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
    <section class="mx-auto max-w-md py-10">
      <Card>
        <CardHeader>
          <p class="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Auth Domain
          </p>
          <CardTitle class="mt-2 text-2xl">
            Sanctum login flow
          </CardTitle>
          <CardDescription>
            Full domain slice: auth composable, Pinia store, and API service wiring
            for Laravel Sanctum token endpoints.
          </CardDescription>
        </CardHeader>

        <CardContent class="space-y-6">
          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div class="space-y-2">
              <Label for="email">Email</Label>
              <Input id="email" v-model="credentials.email" type="email" autocomplete="email"
                placeholder="you@example.com" required />
            </div>

            <div class="space-y-2">
              <Label for="password">Password</Label>
              <Input id="password" v-model="credentials.password" type="password" autocomplete="current-password"
                placeholder="••••••••" required />
            </div>

            <p v-if="errorMessage" class="text-sm text-destructive">
              {{ errorMessage }}
            </p>

            <div class="flex items-center gap-3 pt-1">
              <Button type="submit" :disabled="isLoading">
                {{ isLoading ? 'Signing in…' : 'Sign in' }}
              </Button>

              <Button v-if="isAuthenticated" type="button" variant="outline" @click="signOut">
                Sign out
              </Button>
            </div>
          </form>

          <div v-if="isAuthenticated && user"
            class="rounded-lg bg-success/10 px-4 py-3 text-sm text-success-foreground ring-1 ring-success/20">
            <span class="font-medium">Authenticated:</span>
            <span class="ml-2 text-muted-foreground">{{ user.email }}</span>
          </div>

          <div class="rounded-lg bg-muted px-4 py-3 text-sm">
            <span class="font-medium text-foreground">API base:</span>
            <span class="ml-2 font-mono text-muted-foreground">{{ apiBaseUrl }}</span>
          </div>
        </CardContent>
      </Card>
    </section>
  </AppShell>
</template>
