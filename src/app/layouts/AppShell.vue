<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { primaryNavigation } from '@/support/navigation/primary-navigation'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const appName = import.meta.env.VITE_APP_NAME || 'Starter Frontend'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <RouterLink to="/" class="text-sm font-semibold tracking-tight text-foreground">
          {{ appName }}
        </RouterLink>

        <nav class="flex items-center gap-1">
          <Button v-for="item in primaryNavigation" :key="item.to" as-child variant="ghost" size="sm">
            <RouterLink :to="item.to">{{ item.label }}</RouterLink>
          </Button>
        </nav>
      </div>
      <Separator />
    </header>

    <main class="mx-auto max-w-6xl px-6 py-10">
      <slot />
    </main>
  </div>
</template>
