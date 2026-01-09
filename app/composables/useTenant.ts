/**
 * Composable for tenant management
 * Demonstrates: Composables in Nuxt 3, reactive state, SSR-safe state
 * 
 * This composable provides tenant context throughout the app.
 * The tenant ID is extracted from query params or defaults to the configured default.
 */
export const useTenant = () => {
  const route = useRoute()
  const config = useRuntimeConfig()
  
  // Get tenant from query param or use default
  const tenantId = computed(() => {
    const queryTenant = route.query.tenant as string | undefined
    return queryTenant || config.public.defaultTenant
  })
  
  // Helper to create tenant-aware URLs
  const withTenant = (path: string) => {
    const url = new URL(path, 'http://localhost')
    url.searchParams.set('tenant', tenantId.value)
    return url.pathname + url.search
  }
  
  return {
    tenantId,
    withTenant
  }
}
