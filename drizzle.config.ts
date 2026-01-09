/**
 * Drizzle ORM configuration
 * Demonstrates: Drizzle setup for Cloudflare D1
 */
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './server/db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  driver: 'd1',
  dbCredentials: {
    wranglerConfigPath: './wrangler.toml',
    dbName: 'nuxt-learning-hub'
  }
})
