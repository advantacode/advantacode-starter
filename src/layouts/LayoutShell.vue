<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground">
    <!-- Navbar -->
    <header class="bg-background border-b border-border shadow-sm">
      <div class="container mx-auto flex items-center justify-between py-4 px-6">
        <div class="text-xl font-heading font-semibold">AdvantaCode</div>
        <nav class="space-x-4">
          <RouterLink v-for="item in navItems" :key="item.name" :to="item.to"
            class="text-foreground hover:text-primary font-medium transition-colors">
            {{ item.name }}
          </RouterLink>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 container mx-auto py-8 px-6">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-primary border-t border-border mt-auto py-4 px-6 text-center text-sm text-muted">
      © {{ new Date().getFullYear() }} AdvantaCode. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Contact', to: '/contact' },
]
</script>