<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-gray-900 mb-4">
          Welcome to {{ appName }}
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          A beginner-friendly learning project demonstrating Nuxt 3 concepts and best practices
        </p>
        <div class="flex gap-4 justify-center">
          <UButton to="/events" size="lg" color="primary">
            Explore Events
          </UButton>
          <UButton to="/playground/form" size="lg" variant="outline">
            Try Form Demo
          </UButton>
        </div>
      </div>

      <!-- Learning Concepts Grid -->
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-semibold">Nuxt Fundamentals</h2>
          </template>
          <ul class="space-y-2 text-gray-600">
            <li>✓ File-based routing</li>
            <li>✓ Server-Side Rendering (SSR)</li>
            <li>✓ Auto-imports</li>
            <li>✓ Layouts system</li>
          </ul>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-2xl font-semibold">Data Fetching</h2>
          </template>
          <ul class="space-y-2 text-gray-600">
            <li>✓ useFetch composable</li>
            <li>✓ useAsyncData composable</li>
            <li>✓ Server API routes</li>
            <li>✓ Loading & error states</li>
          </ul>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-2xl font-semibold">UI & Styling</h2>
          </template>
          <ul class="space-y-2 text-gray-600">
            <li>✓ Tailwind CSS</li>
            <li>✓ Nuxt UI components</li>
            <li>✓ Responsive design</li>
            <li>✓ Form validation with Zod</li>
          </ul>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-2xl font-semibold">Advanced Features</h2>
          </template>
          <ul class="space-y-2 text-gray-600">
            <li>✓ Drizzle ORM + D1</li>
            <li>✓ Multi-tenancy</li>
            <li>✓ Middleware</li>
            <li>✓ Cloudflare Workers</li>
          </ul>
        </UCard>
      </div>

      <!-- Quick Links -->
      <div class="bg-primary-50 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Quick Navigation</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <NuxtLink 
            to="/events" 
            class="p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 class="font-semibold mb-2">Events List</h3>
            <p class="text-sm text-gray-600">See data fetching in action</p>
          </NuxtLink>
          <NuxtLink 
            to="/playground/form" 
            class="p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 class="font-semibold mb-2">Form Demo</h3>
            <p class="text-sm text-gray-600">Zod validation example</p>
          </NuxtLink>
          <div class="p-4 bg-white rounded-lg">
            <h3 class="font-semibold mb-2">API Routes</h3>
            <p class="text-sm text-gray-600">Check /api/events endpoint</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Demonstrates: Pages, runtime config, Nuxt UI components
const { appName } = useRuntimeConfig().public

// Set page metadata
useHead({
  title: 'Home - Nuxt Learning Hub',
  meta: [
    { name: 'description', content: 'Learn Nuxt 3 through hands-on examples' }
  ]
})
</script>
