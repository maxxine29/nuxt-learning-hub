/**
 * Drizzle ORM schema
 * Demonstrates: Database schema definition, Drizzle ORM
 */
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// Feedback submissions table
export const feedbackTable = sqliteTable('feedback', {
  id: text('id').primaryKey(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  ticketCount: integer('ticket_count').notNull(),
  agreeToTerms: integer('agree_to_terms', { mode: 'boolean' }).notNull(),
  submittedAt: integer('submitted_at', { mode: 'timestamp' }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).defaultNow().notNull()
})

// Events table (for future use)
export const eventsTable = sqliteTable('events', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  date: integer('date', { mode: 'timestamp' }).notNull(),
  location: text('location').notNull(),
  capacity: integer('capacity'),
  attendees: integer('attendees').default(0),
  tenant: text('tenant').notNull().default('default'),
  createdAt: integer('created_at', { mode: 'timestamp' }).defaultNow().notNull()
})

// Export types for TypeScript
export type Feedback = typeof feedbackTable.$inferSelect
export type NewFeedback = typeof feedbackTable.$inferInsert
export type Event = typeof eventsTable.$inferSelect
export type NewEvent = typeof eventsTable.$inferInsert
