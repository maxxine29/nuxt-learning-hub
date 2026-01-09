/**
 * GET /api/events/[id]
 * Returns a single event by ID
 * Demonstrates: Dynamic server routes, route params
 */
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Event ID is required'
    })
  }

  // In a real app, this would query D1 database
  // For now, we return mocked data
  
  const events = [
    {
      id: '1',
      title: 'Nuxt 3 Workshop',
      description: 'Learn the fundamentals of Nuxt 3, including SSR, data fetching, and composables. Perfect for beginners! This workshop covers everything from file-based routing to server-side rendering and beyond.',
      date: '2025-02-15T10:00:00Z',
      location: 'Virtual',
      capacity: 50,
      attendees: 32
    },
    {
      id: '2',
      title: 'Vue.js Advanced Patterns',
      description: 'Deep dive into advanced Vue.js patterns, composition API, and performance optimization. Learn from real-world examples and best practices.',
      date: '2025-02-20T14:00:00Z',
      location: 'San Francisco, CA',
      capacity: 30,
      attendees: 25
    },
    {
      id: '3',
      title: 'Full-Stack with Nuxt',
      description: 'Build a complete full-stack application using Nuxt 3, Drizzle ORM, and Cloudflare Workers. We\'ll cover database setup, API routes, and deployment.',
      date: '2025-03-01T09:00:00Z',
      location: 'New York, NY',
      capacity: 40,
      attendees: 15
    },
    {
      id: '4',
      title: 'Tailwind CSS Masterclass',
      description: 'Master Tailwind CSS and build beautiful, responsive UIs with utility-first CSS. Learn advanced techniques and component patterns.',
      date: '2025-03-10T13:00:00Z',
      location: 'Virtual',
      capacity: 100,
      attendees: 78
    }
  ]

  const foundEvent = events.find(e => e.id === id)

  if (!foundEvent) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Event not found'
    })
  }

  return foundEvent
})
