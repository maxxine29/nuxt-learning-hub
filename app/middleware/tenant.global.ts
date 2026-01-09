/**
 * Global middleware for tenant detection
 * Demonstrates: Middleware in Nuxt 3, route handling
 * 
 * This middleware runs on every route and extracts tenant information.
 * In a real app, this could validate tenant, set headers, or redirect.
 */
export default defineNuxtRouteMiddleware((to) => {
  // Extract tenant from query param
  const tenant = to.query.tenant as string | undefined
  
  // In a real app, you might:
  // - Validate tenant exists
  // - Set tenant context for API calls
  // - Redirect if tenant is invalid
  // - Load tenant-specific config
  
  // For this demo, we just log it (in dev mode)
  if (process.dev && tenant) {
    console.log(`[Tenant Middleware] Detected tenant: ${tenant}`)
  }
  
  // You could also extract from path segments like /t/[tenant]/events
  // const pathTenant = to.path.split('/')[2] // if using /t/[tenant]/...
})
