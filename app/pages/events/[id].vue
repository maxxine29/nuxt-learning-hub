<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Loading State -->
    <div v-if="pending" class="flex justify-center items-center py-12">
      <div class="text-center">
        <UIcon name="i-heroicons-arrow-path" class="w-12 h-12 animate-spin text-primary-600 mx-auto mb-4" />
        <p class="text-gray-600">Loading event details...</p>
      </div>
    </div>

    <!-- Error State -->
    <UAlert
      v-else-if="error"
      color="red"
      variant="soft"
      title="Error loading event"
      :description="error.message"
      class="mb-6"
    />

    <!-- Event Details -->
    <div v-else-if="data" class="max-w-3xl mx-auto">
      <UButton
        to="/events"
        variant="ghost"
        icon="i-heroicons-arrow-left"
        class="mb-6"
      >
        Back to Events
      </UButton>

      <UCard>
        <template #header>
          <h1 class="text-4xl font-bold text-gray-900">{{ data.title }}</h1>
        </template>

        <div class="space-y-6">
          <div>
            <h2 class="text-lg font-semibold text-gray-900 mb-2">Description</h2>
            <p class="text-gray-600">{{ data.description }}</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-sm font-semibold text-gray-500 uppercase mb-2">Date & Time</h3>
              <p class="text-lg text-gray-900">
                {{ formatDate(data.date) }}
              </p>
            </div>

            <div>
              <h3 class="text-sm font-semibold text-gray-500 uppercase mb-2">Location</h3>
              <p class="text-lg text-gray-900">{{ data.location }}</p>
            </div>
          </div>

          <div v-if="data.capacity" class="pt-6 border-t">
            <h3 class="text-sm font-semibold text-gray-500 uppercase mb-2">Attendance</h3>
            <div class="flex items-center gap-4">
              <div class="flex-1">
                <div class="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Registered</span>
                  <span>{{ data.attendees || 0 }} / {{ data.capacity }}</span>
                </div>
                <UProgress
                  :value="((data.attendees || 0) / data.capacity) * 100"
                  color="primary"
                />
              </div>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex gap-4">
            <UButton
              to="/playground/form"
              color="primary"
              size="lg"
            >
              Register for Event
            </UButton>
            <UButton
              variant="outline"
              size="lg"
            >
              Share Event
            </UButton>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
// Demonstrates: Dynamic routes, useAsyncData, route params
const route = useRoute();
const eventId = route.params.id as string;

// useAsyncData is similar to useFetch but gives more control
// Here we use it to fetch with a dynamic parameter
const { data, pending, error } = await useAsyncData(
  `event-${eventId}`,
  () => $fetch(`/api/events/${eventId}`)
);

// Handle 404
if (!pending.value && !data.value && !error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Event not found'
  });
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

useHead({
  title: data.value ? `${data.value.title} - Events` : 'Event Details',
  meta: [
    { name: 'description', content: data.value?.description || 'Event details' }
  ]
});
</script>
