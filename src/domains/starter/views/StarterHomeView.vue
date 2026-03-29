<script setup lang="ts">
import AppShell from '@/app/layouts/AppShell.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api/v1'

const backendOutputs = [
  'Domain actions, requests, resources, routes, and tests',
  'API versioning and standardized JSON errors',
  'Sanctum token auth endpoints'
]

const frontendOutputs = [
  'Domain route modules and views',
  'Shared app shell, support code, and brand tokens',
  'Frontend state, forms, and API wiring for the new entity'
]

const semanticTokens = [
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'danger'
]

const spacingTokens = ['space-xs', 'space-sm', 'space-md', 'space-lg', 'space-xl']
</script>

<template>
  <AppShell>
    <!-- Hero -->
    <section class="space-y-4 py-10">
      <p class="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Domain-Based Frontend Starter
      </p>
      <h1 class="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
        A Vue starter built to grow in parallel with the Laravel API starter.
      </h1>
      <p class="max-w-3xl text-lg text-muted-foreground">
        This template is structured around domains, shared support code, and predictable
        route modules so frontend and backend slices can stay aligned as the product grows.
      </p>
    </section>

    <Separator />

    <!-- Ownership split -->
    <section class="grid gap-6 py-10 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardDescription>Frontend template</CardDescription>
          <CardTitle>What this starter owns</CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="space-y-3 text-sm text-muted-foreground">
            <li v-for="item in frontendOutputs" :key="item" class="flex items-start gap-2">
              <span class="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {{ item }}
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Backend template</CardDescription>
          <CardTitle>What the API starter owns</CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="space-y-3 text-sm text-muted-foreground">
            <li v-for="item in backendOutputs" :key="item" class="flex items-start gap-2">
              <span class="mt-0.5 size-1.5 shrink-0 rounded-full bg-secondary" />
              {{ item }}
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <Separator />

    <!-- Auth + Env -->
    <section class="grid gap-6 py-10 lg:grid-cols-[1.2fr_0.8fr]">
      <Card>
        <CardHeader>
          <CardDescription>Auth integration example</CardDescription>
          <CardTitle>Sanctum-ready frontend flow</CardTitle>
        </CardHeader>
        <CardContent class="space-y-3 text-sm text-muted-foreground">
          <p>
            The starter includes a base Axios API client in <code
              class="rounded bg-muted px-1 py-0.5 font-mono text-xs">src/support/api</code> and an
            auth domain store/composable/service under <code
              class="rounded bg-muted px-1 py-0.5 font-mono text-xs">src/domains/auth</code>.
          </p>
          <p>
            Use those files as the pattern for new domains: route module, view, service,
            store, and composable wired to the API starter contracts.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Environment</CardDescription>
          <CardTitle>Current API base</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="break-all rounded-lg bg-muted px-4 py-3 font-mono text-sm text-foreground">
            {{ apiBaseUrl }}
          </p>
        </CardContent>
      </Card>
    </section>

    <Separator />

    <!-- Token preview -->
    <section class="grid gap-6 py-10 lg:grid-cols-[1.2fr_0.8fr]">
      <Card>
        <CardHeader>
          <CardDescription>Live token preview</CardDescription>
          <CardTitle>Semantic colors from generated tokens</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="mb-4 text-sm text-muted-foreground">
            Update colors in <code class="rounded bg-muted px-1 py-0.5 font-mono text-xs">brand.config.ts</code>, run
            <code class="rounded bg-muted px-1 py-0.5 font-mono text-xs">npm run brand:generate</code>,
            and refresh to verify token output instantly.
          </p>
          <div class="grid gap-3 sm:grid-cols-2">
            <div v-for="token in semanticTokens" :key="token"
              class="flex items-center justify-between rounded-lg border border-border p-3"
              :style="{ backgroundColor: `var(--${token})`, color: `var(--${token}-foreground)` }">
              <span class="text-sm font-semibold uppercase tracking-wide">{{ token }}</span>
              <code class="text-xs opacity-75">var(--{{ token }})</code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Typography & spacing</CardDescription>
          <CardTitle>Non-color token sample</CardTitle>
        </CardHeader>
        <CardContent class="space-y-5">
          <div>
            <p class="mb-2 text-xs text-muted-foreground">Font tokens</p>
            <p class="text-base" :style="{ fontFamily: 'var(--font-sans)' }">
              Sans — <code class="text-xs">var(--font-sans)</code>
            </p>
            <p class="mt-1 text-sm" :style="{ fontFamily: 'var(--font-mono)' }">
              Mono — <code class="text-xs">var(--font-mono)</code>
            </p>
          </div>

          <div class="space-y-3">
            <p class="text-xs text-muted-foreground">Spacing tokens</p>
            <div v-for="spaceToken in spacingTokens" :key="spaceToken" class="flex items-center gap-3 text-xs">
              <Badge variant="outline" class="w-20 justify-center font-mono text-[10px]">
                {{ spaceToken }}
              </Badge>
              <div class="h-2.5 rounded bg-primary" :style="{ width: `calc(var(--${spaceToken}) * 8)` }" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  </AppShell>
</template>
