/**
 * GET /api/events
 * Returns a list of events
 * Demonstrates: Server routes, API endpoints, mocked data
 */
export default defineEventHandler(async (event) => {
  // In a real app, this would fetch from D1 database
  // For now, we return mocked data
  
  // Simulate tenant-aware data (in real app, filter by tenant)
  const query = getQuery(event)
  const tenant = query.tenant as string | undefined
  
  const events = [
    {
      id: '1',
      title: 'Nuxt 3 Workshop',
      description: 'Learn the fundamentals of Nuxt 3, including SSR, data fetching, and composables. Perfect for beginners!',
      date: '2025-02-15T10:00:00Z',
      location: 'Virtual',
      capacity: 50,
      attendees: 32,
      tenant: tenant || 'default'
    },
    {
      id: '2',
      title: 'Vue.js Advanced Patterns',
      description: 'Deep dive into advanced Vue.js patterns, composition API, and performance optimization.',
      date: '2025-02-20T14:00:00Z',
      location: 'San Francisco, CA',
      capacity: 30,
      attendees: 25,
      tenant: tenant || 'default'
    },
    {
      id: '3',
      title: 'Full-Stack with Nuxt',
      description: 'Build a complete full-stack application using Nuxt 3, Drizzle ORM, and Cloudflare Workers.',
      date: '2025-03-01T09:00:00Z',
      location: 'New York, NY',
      capacity: 40,
      attendees: 15,
      tenant: tenant || 'default'
    },
    {
      id: '4',
      title: 'Tailwind CSS Masterclass',
      description: 'Master Tailwind CSS and build beautiful, responsive UIs with utility-first CSS.',
      date: '2025-03-10T13:00:00Z',
      location: 'Virtual',
      capacity: 100,
      attendees: 78,
      tenant: tenant || 'default'
    }
  ]

  // Filter by tenant if provided (simple simulation)
  const filteredEvents = tenant 
    ? events.filter(e => e.tenant === tenant)
    : events

  return filteredEvents
})
