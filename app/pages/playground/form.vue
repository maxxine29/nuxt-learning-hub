<template>
  <div class="container mx-auto px-4 py-8 max-w-2xl">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Form Demo</h1>
      <p class="text-gray-600">
        Demonstrates: Nuxt UI forms, Zod validation, form submission
      </p>
    </div>

    <UCard>
      <template #header>
        <h2 class="text-2xl font-semibold">Event Registration Form</h2>
      </template>

      <form
        @submit.prevent="onSubmit"
        class="space-y-4"
      >
        <UFormGroup
          label="Full Name"
          name="fullName"
          :error="errors.fullName"
          required
        >
          <UInput
            v-model="state.fullName"
            placeholder="Enter your full name"
            size="lg"
          />
        </UFormGroup>

        <UFormGroup
          label="Email"
          name="email"
          :error="errors.email"
          required
        >
          <UInput
            v-model="state.email"
            type="email"
            placeholder="your.email@example.com"
            size="lg"
          />
        </UFormGroup>

        <UFormGroup
          label="Number of Tickets"
          name="ticketCount"
          :error="errors.ticketCount"
          required
        >
          <UInput
            v-model.number="state.ticketCount"
            type="number"
            min="1"
            max="10"
            placeholder="1-10"
            size="lg"
          />
        </UFormGroup>

        <UFormGroup
          name="agreeToTerms"
          :error="errors.agreeToTerms"
        >
          <div class="flex items-center gap-2">
            <UCheckbox
              v-model="state.agreeToTerms"
              label="I agree to the terms and conditions"
            />
          </div>
        </UFormGroup>

        <div class="flex gap-4 pt-4">
          <UButton
            type="submit"
            color="primary"
            size="lg"
            :loading="isSubmitting"
            :disabled="!isValid"
            block
          >
            Submit Registration
          </UButton>
        </div>
      </form>
    </UCard>

    <!-- Success Message -->
    <UAlert
      v-if="submitSuccess"
      color="green"
      variant="soft"
      title="Success!"
      description="Your registration has been submitted successfully."
      class="mt-6"
    />
  </div>
</template>

<script setup lang="ts">
// Demonstrates: Zod validation, Nuxt UI forms, form state management
import { z } from 'zod';

// Define Zod schema for validation
const schema = z.object({
  fullName: z.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  ticketCount: z.number()
    .min(1, 'You must purchase at least 1 ticket')
    .max(10, 'Maximum 10 tickets per order'),
  agreeToTerms: z.boolean()
    .refine(val => val === true, 'You must agree to the terms and conditions')
});

// Form state
const state = reactive({
  fullName: '',
  email: '',
  ticketCount: 1,
  agreeToTerms: false
});

// Validation state
const errors = ref<Record<string, string>>({});
const isValid = ref(false);
const isSubmitting = ref(false);
const submitSuccess = ref(false);

// Watch for validation
watch(state, async () => {
  const result = await schema.safeParseAsync(state);
  isValid.value = result.success;
  
  if (!result.success) {
    errors.value = {};
    result.error.errors.forEach((err) => {
      if (err.path[0]) {
        errors.value[err.path[0] as string] = err.message;
      }
    });
  } else {
    errors.value = {};
  }
}, { deep: true });

// Submit handler
const onSubmit = async () => {
  isSubmitting.value = true;
  submitSuccess.value = false;
  
  try {
    // Validate one more time
    const validation = await schema.safeParseAsync(state);
    if (!validation.success) {
      throw new Error('Validation failed');
    }

    // Submit to API
    await $fetch('/api/feedback', {
      method: 'POST',
      body: {
        fullName: state.fullName,
        email: state.email,
        ticketCount: state.ticketCount,
        agreeToTerms: state.agreeToTerms,
        submittedAt: new Date().toISOString()
      }
    });

    submitSuccess.value = true;
    
    // Reset form after success
    setTimeout(() => {
      state.fullName = '';
      state.email = '';
      state.ticketCount = 1;
      state.agreeToTerms = false;
      submitSuccess.value = false;
    }, 3000);
  } catch (error: any) {
    console.error('Form submission error:', error);
    // In a real app, show error toast
  } finally {
    isSubmitting.value = false;
  }
};

useHead({
  title: 'Form Demo - Nuxt Learning Hub',
  meta: [
    { name: 'description', content: 'Try out form validation with Zod' }
  ]
});
</script>
