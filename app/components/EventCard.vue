<template>
  <UCard class="hover:shadow-lg transition-shadow cursor-pointer" @click="navigateToEvent">
    <template #header>
      <h3 class="text-xl font-semibold text-gray-900">{{ event.title }}</h3>
    </template>
    
    <div class="space-y-3">
      <p class="text-gray-600 line-clamp-2">{{ event.description }}</p>
      
      <div class="flex items-center gap-4 text-sm text-gray-500">
        <div class="flex items-center gap-1">
          <UIcon name="i-heroicons-calendar" class="w-4 h-4" />
          <span>{{ formatDate(event.date) }}</span>
        </div>
        <div class="flex items-center gap-1">
          <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
          <span>{{ event.location }}</span>
        </div>
      </div>
      
      <div v-if="event.capacity" class="text-sm text-gray-500">
        Capacity: {{ event.attendees || 0 }} / {{ event.capacity }}
      </div>
    </div>
    
    <template #footer>
      <div class="flex justify-end">
        <UButton 
          color="primary" 
          variant="solid"
          @click.stop="navigateToEvent"
        >
          View Details
        </UButton>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
// Demonstrates: Components, props, Nuxt UI components, navigation

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  capacity?: number;
  attendees?: number;
}

const props = defineProps<{
  event: Event;
}>();

const navigateToEvent = () => {
  navigateTo(`/events/${props.event.id}`);
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>
