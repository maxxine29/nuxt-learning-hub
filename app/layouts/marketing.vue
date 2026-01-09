<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
    <AppHeader />
    <main class="flex-1 py-8">
      <div class="container mx-auto px-4">
        <slot />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
// Named layout - demonstrates layout switching
// Use this layout by adding: definePageMeta({ layout: 'marketing' })
</script>
