<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Events</h1>
      <p class="text-gray-600">
        Demonstrates: Data fetching with useFetch, loading states, error handling
      </p>
    </div>

    <!-- Loading State -->
    <div v-if="pending" class="flex justify-center items-center py-12">
      <div class="text-center">
        <UIcon name="i-heroicons-arrow-path" class="w-12 h-12 animate-spin text-primary-600 mx-auto mb-4" />
        <p class="text-gray-600">Loading events...</p>
      </div>
    </div>

    <!-- Error State -->
    <UAlert
      v-else-if="error"
      color="red"
      variant="soft"
      title="Error loading events"
      :description="error.message"
      class="mb-6"
    />

    <!-- Events Grid -->
    <div v-else-if="data" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <EventCard
        v-for="event in data"
        :key="event.id"
        :event="event"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
      <p class="text-gray-600">No events found.</p>
    </div>
  </div>
</template>

<script setup>
// Demonstrates: useFetch, data fetching, loading/error states
// useFetch automatically handles:
// - SSR data fetching
// - Client-side refetching
// - Loading states
// - Error handling
// - Request deduplication

const { data, pending, error } = await useFetch('/api/events', {
  // Options can include:
  // server: true, // Only fetch on server
  // lazy: true,   // Don't block navigation
  // default: () => [], // Default value
  // transform: (data) => data.events // Transform response
})

useHead({
  title: 'Events - Nuxt Learning Hub',
  meta: [
    { name: 'description', content: 'Browse upcoming events' }
  ]
})
</script>
