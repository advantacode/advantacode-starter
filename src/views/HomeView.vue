<script setup lang="ts">
import LayoutShell from '@/layouts/LayoutShell.vue'
</script>

<template>
  <LayoutShell>
    <!-- Hero Section -->
    <section class="text-center py-20 space-y-6">
      <h1 class="text-4xl md:text-6xl font-heading font-bold tracking-tight">
        Building Intelligent Systems That Scale
      </h1>

      <p class="max-w-2xl mx-auto text-lg text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum in neque et nisl facilisis sodales.
        Suspendisse potenti. Sed at risus vitae purus pretium ultricies.
      </p>

      <div class="flex justify-center gap-4 pt-4">
        <button class="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
          View Portfolio
        </button>
        <button class="border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition">
          Get in Touch
        </button>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 border-t border-border">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-heading font-semibold">What We Build</h2>
        <p class="text-muted-foreground mt-4 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6 rounded-xl border border-border bg-card">
          <h3 class="font-semibold text-xl mb-3">Automation Systems</h3>
          <p class="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </p>
        </div>

        <div class="p-6 rounded-xl border border-border bg-card">
          <h3 class="font-semibold text-xl mb-3">Web Applications</h3>
          <p class="text-muted-foreground">
            Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </div>

        <div class="p-6 rounded-xl border border-border bg-card">
          <h3 class="font-semibold text-xl mb-3">Cloud Infrastructure</h3>
          <p class="text-muted-foreground">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Sed posuere consectetur est at lobortis.
          </p>
        </div>
      </div>
    </section>

    <!-- Portfolio Preview Section -->
    <section class="py-20 border-t border-border">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-3xl font-heading font-semibold">Selected Work</h2>
        <button class="text-primary font-medium hover:underline">
          View All →
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="p-6 rounded-xl border border-border bg-card">
          <div class="h-48 bg-muted rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold">Project Alpha</h3>
          <p class="text-muted-foreground mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum id ligula porta felis euismod semper.
          </p>
        </div>

        <div class="p-6 rounded-xl border border-border bg-card">
          <div class="h-48 bg-muted rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold">Project Beta</h3>
          <p class="text-muted-foreground mt-2">
            Maecenas faucibus mollis interdum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 border-t border-border text-center">
      <h2 class="text-3xl font-heading font-semibold mb-6">
        Ready to Build Something Scalable?
      </h2>

      <p class="max-w-xl mx-auto text-muted-foreground mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur blandit tempus porttitor.
        Integer posuere erat a ante venenatis dapibus.
      </p>

      <button class="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
        Start a Conversation
      </button>
    </section>
  </LayoutShell>
</template>