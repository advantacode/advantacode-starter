<script setup lang="ts">
import AppShell from '@/app/layouts/AppShell.vue'

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
    <section class="space-y-6 py-10">
      <p class="text-sm uppercase tracking-[0.2em] text-muted-foreground">
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

    <section class="grid gap-6 border-t border-border py-10 md:grid-cols-2">
      <article class="rounded-2xl border border-border bg-card p-6">
        <p class="text-sm font-medium text-muted-foreground">Frontend template</p>
        <h2 class="mt-3 text-2xl font-semibold">What this starter owns</h2>
        <ul class="mt-6 space-y-3 text-sm text-muted-foreground">
          <li v-for="item in frontendOutputs" :key="item">
            {{ item }}
          </li>
        </ul>
      </article>

      <article class="rounded-2xl border border-border bg-card p-6">
        <p class="text-sm font-medium text-muted-foreground">Backend template</p>
        <h2 class="mt-3 text-2xl font-semibold">What the API starter owns</h2>
        <ul class="mt-6 space-y-3 text-sm text-muted-foreground">
          <li v-for="item in backendOutputs" :key="item">
            {{ item }}
          </li>
        </ul>
      </article>
    </section>

    <section class="grid gap-6 border-t border-border py-10 lg:grid-cols-[1.2fr_0.8fr]">
      <article class="rounded-2xl border border-border bg-card p-6">
        <p class="text-sm font-medium text-muted-foreground">Auth integration example</p>
        <h2 class="mt-3 text-2xl font-semibold">Sanctum-ready frontend flow</h2>

        <div class="mt-6 space-y-4 text-sm text-muted-foreground">
          <p>
            The starter includes a base Axios API client in <code>src/support/api</code> and an
            auth domain store/composable/service example under <code>src/domains/auth</code>.
          </p>

          <p>
            Use those files as the pattern for new domains: route module, view, service,
            store, and composable wired to the API starter contracts.
          </p>
        </div>
      </article>

      <article class="rounded-2xl border border-border bg-card p-6">
        <p class="text-sm font-medium text-muted-foreground">Environment</p>
        <h2 class="mt-3 text-2xl font-semibold">Current API base</h2>

        <p class="mt-6 break-all rounded-xl bg-muted px-4 py-3 font-mono text-sm text-foreground">
          {{ apiBaseUrl }}
        </p>
      </article>
    </section>

    <section class="grid gap-6 border-t border-border py-10 lg:grid-cols-[1.2fr_0.8fr]">
      <article class="rounded-2xl border border-border bg-card p-6">
        <p class="text-sm font-medium text-muted-foreground">Live token preview</p>
        <h2 class="mt-3 text-2xl font-semibold">Semantic colors from generated tokens</h2>

        <p class="mt-4 text-sm text-muted-foreground">
          Update colors in <code>brand.config.ts</code>, run <code>npm run brand:generate</code>,
          and refresh this page to verify token output instantly.
        </p>

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <div
            v-for="token in semanticTokens"
            :key="token"
            class="rounded-xl border border-border p-4"
            :style="{ backgroundColor: `var(--${token})`, color: `var(--${token}-foreground)` }"
          >
            <p class="text-sm font-semibold uppercase tracking-wide">{{ token }}</p>
            <p class="mt-1 text-xs opacity-85">var(--{{ token }})</p>
          </div>
        </div>
      </article>

      <article class="rounded-2xl border border-border bg-card p-6">
        <p class="text-sm font-medium text-muted-foreground">Typography & spacing</p>
        <h2 class="mt-3 text-2xl font-semibold">Non-color token sample</h2>

        <div class="mt-6 space-y-4">
          <p class="text-sm text-muted-foreground">Font tokens:</p>

          <p class="text-lg" :style="{ fontFamily: 'var(--font-sans)' }">
            Sans sample using <code>var(--font-sans)</code>
          </p>

          <p class="text-sm" :style="{ fontFamily: 'var(--font-mono)' }">
            Mono sample using <code>var(--font-mono)</code>
          </p>

          <div class="space-y-3 pt-2">
            <div v-for="spaceToken in spacingTokens" :key="spaceToken" class="text-xs">
              <p class="mb-1 font-mono text-muted-foreground">{{ spaceToken }}</p>
              <div class="rounded bg-primary" :style="{ height: '10px', width: `calc(var(--${spaceToken}) * 8)` }" />
            </div>
          </div>
        </div>
      </article>
    </section>
  </AppShell>
</template>
