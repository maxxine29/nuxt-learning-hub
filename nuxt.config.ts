// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Enable Nuxt UI (includes Tailwind v4 integration)
  modules: [
    '@nuxt/ui'
  ],

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
