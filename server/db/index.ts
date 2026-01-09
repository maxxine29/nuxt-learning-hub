/**
 * Database connection utility
 * Demonstrates: Drizzle ORM setup, Cloudflare D1 integration
 */
import { drizzle } from 'drizzle-orm/d1'
import * as schema from './schema'

/**
 * Get Drizzle database instance from Cloudflare D1
 * In Cloudflare Workers, D1 is available via event.context
 */
export function getDrizzle(event?: any) {
  // In Cloudflare Workers, D1 is bound to the environment
  // For local development, we'd use a different approach
  if (process.env.NODE_ENV === 'development') {
    // Local dev: could use better-sqlite3 or mock
    // For now, return null and handle gracefully
    return null
  }

  // In production (Cloudflare Workers), D1 is available via event context
  if (event?.context?.DB) {
    return drizzle(event.context.DB, { schema })
  }

  return null
}

/**
 * Helper to use database in server routes
 */
export function useDatabase(event: any) {
  const db = getDrizzle(event)
  
  if (!db) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Database not available'
    })
  }

  return db
}
