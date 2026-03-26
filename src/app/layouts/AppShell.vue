<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { primaryNavigation } from '@/support/navigation/primary-navigation'

const appName = import.meta.env.VITE_APP_NAME || 'Starter Frontend'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="border-b border-border bg-background/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <RouterLink to="/" class="font-semibold tracking-tight text-foreground">
          {{ appName }}
        </RouterLink>

        <nav class="flex items-center gap-4 text-sm">
          <RouterLink
            v-for="item in primaryNavigation"
            :key="item.to"
            :to="item.to"
            class="text-muted-foreground transition hover:text-foreground"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-6 py-10">
      <slot />
    </main>
  </div>
</template>
