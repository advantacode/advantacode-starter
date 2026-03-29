<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import AppShell from '@/app/layouts/AppShell.vue'
import { useAuth } from '@/domains/auth/composables/use-auth'
import { getValidationErrors, type ApiValidationErrors } from '@/support/api/errors'
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

const registration = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const router = useRouter()
const { isLoading, errorMessage, signUp } = useAuth()
const validationErrors = ref<ApiValidationErrors>({})

const hasValidationErrors = computed(() => Object.keys(validationErrors.value).length > 0)

function fieldError(field: keyof typeof registration) {
  return validationErrors.value[field]?.[0] ?? ''
}

async function handleSubmit() {
  validationErrors.value = {}

  try {
    await signUp({ ...registration })
    await router.push({ name: 'starter-dashboard' })
  } catch (error) {
    validationErrors.value = getValidationErrors(error)
  }
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
            Create your account
          </CardTitle>
          <CardDescription>
            Registers a new user against the Laravel Sanctum auth API and starts an
            authenticated session immediately.
          </CardDescription>
        </CardHeader>

        <CardContent class="space-y-6">
          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div class="space-y-2">
              <Label for="name">Name</Label>
              <Input id="name" v-model="registration.name" autocomplete="name" placeholder="Jane Doe" required />
              <p v-if="fieldError('name')" class="text-sm text-destructive">
                {{ fieldError('name') }}
              </p>
            </div>

            <div class="space-y-2">
              <Label for="register-email">Email</Label>
              <Input id="register-email" v-model="registration.email" type="email" autocomplete="email"
                placeholder="you@example.com" required />
              <p v-if="fieldError('email')" class="text-sm text-destructive">
                {{ fieldError('email') }}
              </p>
            </div>

            <div class="space-y-2">
              <Label for="register-password">Password</Label>
              <Input id="register-password" v-model="registration.password" type="password" autocomplete="new-password"
                placeholder="At least 8 characters" minlength="8" required />
              <p v-if="fieldError('password')" class="text-sm text-destructive">
                {{ fieldError('password') }}
              </p>
            </div>

            <div class="space-y-2">
              <Label for="register-password-confirmation">Confirm password</Label>
              <Input id="register-password-confirmation" v-model="registration.password_confirmation" type="password"
                autocomplete="new-password" placeholder="Repeat your password" minlength="8" required />
              <p v-if="fieldError('password_confirmation')" class="text-sm text-destructive">
                {{ fieldError('password_confirmation') }}
              </p>
            </div>

            <p v-if="errorMessage && !hasValidationErrors" class="text-sm text-destructive">
              {{ errorMessage }}
            </p>

            <Button type="submit" class="w-full" :disabled="isLoading">
              {{ isLoading ? 'Creating account…' : 'Create account' }}
            </Button>
          </form>

          <p class="text-sm text-muted-foreground">
            Already have an account?
            <RouterLink class="font-medium text-foreground underline underline-offset-4" :to="{ name: 'auth-login' }">
              Sign in instead
            </RouterLink>
          </p>
        </CardContent>
      </Card>
    </section>
  </AppShell>
</template>
