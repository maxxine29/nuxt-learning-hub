/**
 * POST /api/feedback
 * Accepts form submission and stores in D1 database
 * Demonstrates: POST requests, request body parsing, Drizzle ORM, database operations
 */
import { z } from 'zod'

// Validation schema (server-side validation)
const feedbackSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  ticketCount: z.number().min(1).max(10),
  agreeToTerms: z.boolean().refine(val => val === true),
  submittedAt: z.string().optional()
})

export default defineEventHandler(async (event) => {
  // Only allow POST
  assertMethod(event, 'POST')

  try {
    // Get request body
    const body = await readBody(event)

    // Validate with Zod
    const validated = feedbackSchema.parse(body)

    // In a real app, you would:
    // 1. Get D1 database from Cloudflare environment
    // 2. Use Drizzle to insert the feedback
    // For now, we'll simulate it and log the data
    
    // Example Drizzle usage (commented out until DB is set up):
    /*
    const db = getDrizzle(event)
    await db.insert(feedbackTable).values({
      fullName: validated.fullName,
      email: validated.email,
      ticketCount: validated.ticketCount,
      agreeToTerms: validated.agreeToTerms,
      submittedAt: new Date(validated.submittedAt || Date.now())
    })
    */

    // For now, just return success
    // In production, you'd return the created record
    return {
      success: true,
      message: 'Feedback submitted successfully',
      data: {
        id: `feedback-${Date.now()}`,
        ...validated,
        submittedAt: validated.submittedAt || new Date().toISOString()
      }
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation error',
        data: error.errors
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to submit feedback'
    })
  }
})
