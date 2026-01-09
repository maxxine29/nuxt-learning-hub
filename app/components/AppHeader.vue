<template>
  <header class="bg-white shadow-sm border-b">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-900 hover:text-primary-600">
          {{ appName }}
        </NuxtLink>
        
        <nav class="flex items-center gap-6">
          <NuxtLink 
            to="/" 
            class="text-gray-700 hover:text-primary-600 transition-colors"
            active-class="text-primary-600 font-semibold"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/events" 
            class="text-gray-700 hover:text-primary-600 transition-colors"
            active-class="text-primary-600 font-semibold"
          >
            Events
          </NuxtLink>
          <NuxtLink 
            to="/playground/form" 
            class="text-gray-700 hover:text-primary-600 transition-colors"
            active-class="text-primary-600 font-semibold"
          >
            Form Demo
          </NuxtLink>
          
          <!-- Tenant indicator -->
          <div class="ml-4 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
            Tenant: {{ tenantId }}
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// Demonstrates: Components, composables, runtime config
const { appName } = useRuntimeConfig().public
const { tenantId } = useTenant()
</script>
