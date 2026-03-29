<script setup lang="ts">
import AppShell from '@/app/layouts/AppShell.vue'
import { useAuth } from '@/domains/auth/composables/use-auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const { user, signOut } = useAuth()

const quickTokens = ['primary', 'success', 'warning', 'danger']
</script>

<template>
  <AppShell>
    <!-- Hero -->
    <section class="space-y-4 py-10">
      <p class="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Protected Starter Page
      </p>
      <h1 class="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
        Authenticated dashboard example
      </h1>
      <p class="max-w-3xl text-lg text-muted-foreground">
        This page is protected by router guards and intended as the starter pattern for
        authenticated domain workflows.
      </p>
    </section>

    <Separator />

    <!-- Session + Actions -->
    <section class="grid gap-6 py-10 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardDescription>Session</CardDescription>
          <CardTitle>Current user</CardTitle>
        </CardHeader>
        <CardContent class="space-y-2 text-sm">
          <div class="flex items-center gap-2">
            <span class="font-medium text-foreground">Name</span>
            <span class="text-muted-foreground">{{ user?.name ?? '—' }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-medium text-foreground">Email</span>
            <span class="text-muted-foreground">{{ user?.email ?? '—' }}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Actions</CardDescription>
          <CardTitle>Auth controls</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" @click="signOut">
            Sign out
          </Button>
        </CardContent>
      </Card>
    </section>

    <Separator />

    <!-- Token quick check -->
    <section class="py-10">
      <Card>
        <CardHeader>
          <CardDescription>Token quick check</CardDescription>
          <CardTitle>Authenticated view token sample</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="mb-4 text-sm text-muted-foreground">
            These badges use generated semantic token variables and make it easy to verify
            updates after running
            <code class="rounded bg-muted px-1 py-0.5 font-mono text-xs">npm run brand:generate</code>.
          </p>
          <div class="flex flex-wrap gap-3">
            <Badge v-for="token in quickTokens" :key="token"
              class="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
              :style="{ backgroundColor: `var(--${token})`, color: `var(--${token}-foreground)` }">
              {{ token }}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </section>
  </AppShell>
</template>
