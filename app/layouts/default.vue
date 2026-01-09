<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
// Default layout - used by all pages unless specified otherwise
// Demonstrates: Layouts in Nuxt 3
</script>
