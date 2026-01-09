// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Enable Nuxt UI (includes Tailwind)
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss'
  ],

  // Cloudflare Workers preset for deployment
  // Note: For local development, you can comment this out
  // For production deployment to Cloudflare, uncomment and ensure wrangler is installed
  nitro: {
    // preset: 'cloudflare-workers', // Commented for local dev - uncomment for Cloudflare deployment
    experimental: {
      wasm: true
    }
  },

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server)
    adminToken: process.env.ADMIN_TOKEN,
    dbUrl: process.env.DB_URL,
    
    // Public keys (exposed to client)
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'Nuxt Learning Hub',
      defaultTenant: process.env.NUXT_PUBLIC_DEFAULT_TENANT || 'default'
    }
  }
})
