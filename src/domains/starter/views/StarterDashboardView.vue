<script setup lang="ts">
import AppShell from '@/app/layouts/AppShell.vue'
import { useAuth } from '@/domains/auth/composables/use-auth'

const { user, signOut } = useAuth()

const quickTokens = ['primary', 'success', 'warning', 'danger']
</script>

<template>
  <AppShell>
    <section class="space-y-6 py-10">
      <p class="text-sm uppercase tracking-[0.2em] text-muted-foreground">
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

    <section class="grid gap-6 border-t border-border py-10 md:grid-cols-2">
      <article class="rounded-2xl border border-border bg-card p-6">
        <p class="text-sm font-medium text-muted-foreground">Session</p>
        <h2 class="mt-3 text-2xl font-semibold">Current user</h2>

        <div class="mt-6 space-y-2 text-sm text-muted-foreground">
          <p><span class="font-medium text-foreground">Name:</span> {{ user?.name }}</p>
          <p><span class="font-medium text-foreground">Email:</span> {{ user?.email }}</p>
        </div>
      </article>

      <article class="rounded-2xl border border-border bg-card p-6">
        <p class="text-sm font-medium text-muted-foreground">Actions</p>
        <h2 class="mt-3 text-2xl font-semibold">Auth controls</h2>

        <button
          type="button"
          class="mt-6 rounded-lg border border-border px-4 py-2 text-sm"
          @click="signOut"
        >
          Sign out
        </button>
      </article>
    </section>

    <section class="border-t border-border py-10">
      <article class="rounded-2xl border border-border bg-card p-6">
        <p class="text-sm font-medium text-muted-foreground">Token quick check</p>
        <h2 class="mt-3 text-2xl font-semibold">Authenticated view token sample</h2>

        <p class="mt-4 text-sm text-muted-foreground">
          These chips use generated semantic token variables and make it easy to verify
          updates after running <code>npm run brand:generate</code>.
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="token in quickTokens"
            :key="token"
            class="rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wide"
            :style="{ backgroundColor: `var(--${token})`, color: `var(--${token}-foreground)` }"
          >
            {{ token }}
          </span>
        </div>
      </article>
    </section>
  </AppShell>
</template>
