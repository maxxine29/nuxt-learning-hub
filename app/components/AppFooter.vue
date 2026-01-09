<template>
  <footer class="bg-gray-900 text-white py-8 mt-auto">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Nuxt Learning Hub</h3>
          <p class="text-gray-400 text-sm">
            A beginner-friendly project demonstrating Nuxt 3 concepts and best practices.
          </p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Learn</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-white">Home</NuxtLink></li>
            <li><NuxtLink to="/events" class="hover:text-white">Events</NuxtLink></li>
            <li><NuxtLink to="/playground/form" class="hover:text-white">Form Demo</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Resources</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="https://nuxt.com" target="_blank" class="hover:text-white">Nuxt Docs</a></li>
            <li><a href="https://ui.nuxt.com" target="_blank" class="hover:text-white">Nuxt UI</a></li>
            <li><a href="https://tailwindcss.com" target="_blank" class="hover:text-white">Tailwind CSS</a></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Nuxt Learning Hub. Built for learning.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Demonstrates: Components, Tailwind styling
</script>
