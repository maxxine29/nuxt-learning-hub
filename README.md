# Nuxt Learning Hub

A beginner-friendly learning project that systematically demonstrates Nuxt 3 concepts and best practices.

## 🎯 Project Overview

This project is designed as a comprehensive learning resource covering:

- **Nuxt Fundamentals** (Nuxt vs Vue, SSR, file-based routing)
- **Pages & Routing** (static, dynamic, nested routes)
- **Layouts** (default and named layouts)
- **Data Fetching** (useFetch, useAsyncData)
- **Tailwind CSS** (utility-first styling)
- **Nuxt UI** (component library)
- **Zod Validation** (form validation)
- **Cloudflare Workers** (edge deployment)
- **Server Routes** (API endpoints)
- **Environment Variables** (public and private)
- **D1 Database** (Cloudflare's SQLite database)
- **Drizzle ORM** (type-safe database queries)
- **Migrations** (database schema management)
- **Multi-tenancy** (basic tenant isolation)
- **CI/CD** (GitHub Actions)

## 📁 Project Structure

```
my-nuxt-app/
├── app/
│   ├── components/          # Vue components (auto-imported)
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   └── EventCard.vue
│   ├── composables/         # Composables (auto-imported)
│   │   └── useTenant.ts
│   ├── layouts/             # Layout files
│   │   ├── default.vue      # Default layout (used by all pages)
│   │   └── marketing.vue    # Named layout (use with definePageMeta)
│   ├── middleware/          # Route middleware
│   │   └── tenant.global.ts # Global middleware (runs on every route)
│   ├── pages/               # File-based routing
│   │   ├── index.vue        # / (home page)
│   │   ├── events/
│   │   │   ├── index.vue    # /events (events list)
│   │   │   └── [id].vue     # /events/:id (dynamic route)
│   │   └── playground/
│   │       └── form.vue     # /playground/form (form demo)
│   └── app.vue              # Root component
├── server/
│   ├── api/                 # Server API routes
│   │   ├── events/
│   │   │   ├── index.get.ts # GET /api/events
│   │   │   └── [id].get.ts  # GET /api/events/:id
│   │   └── feedback/
│   │       └── index.post.ts # POST /api/feedback
│   └── db/                  # Database setup
│       ├── schema.ts        # Drizzle schema
│       └── index.ts         # Database utilities
├── drizzle/                 # Migration files
│   └── 0000_initial.sql
├── .github/
│   └── workflows/
│       └── ci.yml           # CI/CD workflow
├── drizzle.config.ts        # Drizzle configuration
├── wrangler.toml           # Cloudflare Workers config
├── nuxt.config.ts          # Nuxt configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm/yarn
- Cloudflare account (for deployment)

### Installation

1. **Install dependencies:**

```bash
pnpm install
```

2. **Set up environment variables:**

Create a `.env` file in the root directory:

```env
# Public variables (accessible in client and server)
NUXT_PUBLIC_APP_NAME=Nuxt Learning Hub
NUXT_PUBLIC_DEFAULT_TENANT=default

# Private variables (server-only)
ADMIN_TOKEN=your-secret-admin-token-here
DB_URL=file:./local.db
```

3. **Start development server:**

```bash
pnpm dev
```

Visit `http://localhost:3000` to see the app.

## 📚 Learning Guide

### 1. Nuxt Fundamentals

**Concepts demonstrated:**
- File-based routing (`app/pages/`)
- Server-Side Rendering (SSR)
- Auto-imports (components, composables)
- Layouts system

**Files to explore:**
- `app/pages/index.vue` - Home page
- `app/layouts/default.vue` - Default layout
- `nuxt.config.ts` - Nuxt configuration

### 2. Pages & Routing

**Concepts demonstrated:**
- Static routes (`/`, `/events`)
- Dynamic routes (`/events/[id]`)
- Nested routes
- Route parameters

**Files to explore:**
- `app/pages/index.vue` - Static route
- `app/pages/events/index.vue` - Static route
- `app/pages/events/[id].vue` - Dynamic route with parameter

**Try it:**
- Navigate to `/events` to see the events list
- Click on an event to see the dynamic route in action
- Try `/events/1`, `/events/2`, etc.

### 3. Layouts

**Concepts demonstrated:**
- Default layout (applied automatically)
- Named layouts (explicit selection)
- Layout switching

**Files to explore:**
- `app/layouts/default.vue` - Default layout
- `app/layouts/marketing.vue` - Named layout

**Try it:**
- All pages use the default layout automatically
- To use the marketing layout, add to a page:
  ```vue
  <script setup>
  definePageMeta({ layout: 'marketing' })
  </script>
  ```

### 4. Data Fetching

**Concepts demonstrated:**
- `useFetch` composable
- `useAsyncData` composable
- Loading states
- Error handling
- SSR data fetching

**Files to explore:**
- `app/pages/events/index.vue` - Uses `useFetch`
- `app/pages/events/[id].vue` - Uses `useAsyncData`

**Key differences:**
- `useFetch`: Higher-level, automatically handles request deduplication
- `useAsyncData`: Lower-level, more control over the fetch process

### 5. Tailwind CSS

**Concepts demonstrated:**
- Utility-first CSS
- Responsive design
- Custom styling

**Files to explore:**
- All component files use Tailwind classes
- `app/components/AppHeader.vue` - Header with Tailwind
- `app/pages/index.vue` - Home page with Tailwind grid

### 6. Nuxt UI

**Concepts demonstrated:**
- Component library
- Pre-styled components
- Form components

**Files to explore:**
- `app/components/EventCard.vue` - Uses UCard, UButton
- `app/pages/playground/form.vue` - Uses UForm, UFormGroup, UInput

**Available components:**
- `UButton`, `UCard`, `UInput`, `UForm`, `UFormGroup`, `UCheckbox`, `UAlert`, `UProgress`, `UIcon`

### 7. Zod Validation

**Concepts demonstrated:**
- Schema validation
- Form validation
- Type-safe validation

**Files to explore:**
- `app/pages/playground/form.vue` - Client-side validation
- `server/api/feedback/index.post.ts` - Server-side validation

**Try it:**
1. Go to `/playground/form`
2. Try submitting without filling fields
3. See inline validation errors
4. Submit a valid form

### 8. Server Routes (API)

**Concepts demonstrated:**
- Server API endpoints
- GET requests
- POST requests
- Request/response handling

**Files to explore:**
- `server/api/events/index.get.ts` - GET endpoint
- `server/api/events/[id].get.ts` - GET with parameter
- `server/api/feedback/index.post.ts` - POST endpoint

**Try it:**
- Visit `http://localhost:3000/api/events` in browser
- Visit `http://localhost:3000/api/events/1`
- Submit the form at `/playground/form` to test POST

### 9. Environment Variables

**Concepts demonstrated:**
- Public variables (`NUXT_PUBLIC_*`)
- Private variables (server-only)
- Runtime config

**Files to explore:**
- `nuxt.config.ts` - Runtime config setup
- `app/components/AppHeader.vue` - Uses public config
- `server/api/feedback/index.post.ts` - Could use private config

**Variables:**
- `NUXT_PUBLIC_APP_NAME` - Accessible everywhere
- `NUXT_PUBLIC_DEFAULT_TENANT` - Accessible everywhere
- `ADMIN_TOKEN` - Server-only
- `DB_URL` - Server-only

### 10. Composables

**Concepts demonstrated:**
- Creating composables
- Reactive state
- Reusable logic

**Files to explore:**
- `app/composables/useTenant.ts` - Tenant management composable
- `app/components/AppHeader.vue` - Uses the composable

**Try it:**
- Add `?tenant=acme` to any URL to see tenant switching
- Check the header to see the current tenant

### 11. Middleware

**Concepts demonstrated:**
- Global middleware
- Route middleware
- Request interception

**Files to explore:**
- `app/middleware/tenant.global.ts` - Global middleware

**Types of middleware:**
- Global: Runs on every route (`*.global.ts`)
- Named: Runs on specific routes (import in page)

### 12. Drizzle ORM + D1

**Concepts demonstrated:**
- Database schema definition
- Type-safe queries
- Migrations

**Files to explore:**
- `server/db/schema.ts` - Database schema
- `server/db/index.ts` - Database utilities
- `drizzle.config.ts` - Drizzle configuration
- `drizzle/0000_initial.sql` - Migration file

**Setup D1 Database:**

1. **Create a D1 database:**
```bash
wrangler d1 create nuxt-learning-hub
```

2. **Update `wrangler.toml`** with the database ID from the command output

3. **Generate migrations:**
```bash
pnpm db:generate
```

4. **Apply migrations:**
```bash
# Local development
wrangler d1 execute nuxt-learning-hub --local --file=./drizzle/0000_initial.sql

# Production
wrangler d1 execute nuxt-learning-hub --remote --file=./drizzle/0000_initial.sql
```

5. **Use Drizzle in code:**
```typescript
import { useDatabase } from '~/server/db'
const db = useDatabase(event)
const feedback = await db.select().from(feedbackTable)
```

### 13. Multi-tenancy

**Concepts demonstrated:**
- Tenant detection
- Tenant-aware routing
- Tenant context

**Files to explore:**
- `app/composables/useTenant.ts` - Tenant composable
- `app/middleware/tenant.global.ts` - Tenant middleware
- `app/components/AppHeader.vue` - Shows current tenant

**Try it:**
- Add `?tenant=acme` to any URL
- See the tenant change in the header
- API routes can filter by tenant

### 14. Cloudflare Workers Deployment

**Concepts demonstrated:**
- Edge deployment
- Cloudflare Workers
- Wrangler configuration

**Deployment Steps:**

1. **Build the project:**
```bash
pnpm build
```

2. **Set up Cloudflare:**
   - Create a Cloudflare account
   - Get your Account ID from the dashboard
   - Create a D1 database (see Drizzle section above)

3. **Configure Wrangler:**
   - Update `wrangler.toml` with your database ID
   - Set secrets:
     ```bash
     wrangler secret put ADMIN_TOKEN
     wrangler secret put NUXT_PUBLIC_APP_NAME
     wrangler secret put NUXT_PUBLIC_DEFAULT_TENANT
     ```

4. **Deploy:**
```bash
wrangler deploy
```

5. **Apply database migrations:**
```bash
wrangler d1 execute nuxt-learning-hub --remote --file=./drizzle/0000_initial.sql
```

### 15. Monorepo (Basic Awareness)

**Concepts demonstrated:**
- Shared code organization
- Package structure

**Files to explore:**
- `packages/shared/utils.ts` - Shared utilities

**What a monorepo would look like:**
In a full monorepo setup, you might have:
```
my-nuxt-app/
├── apps/
│   ├── web/          # Main Nuxt app
│   └── admin/        # Admin dashboard
├── packages/
│   ├── shared/       # Shared utilities
│   ├── ui/           # Shared UI components
│   └── config/       # Shared configs
└── pnpm-workspace.yaml
```

**Tools for monorepos:**
- pnpm workspaces
- Turborepo
- Nx
- Lerna

For this learning project, we keep it minimal with just a `packages/shared` folder to demonstrate the concept.

### 16. CI/CD

**Concepts demonstrated:**
- GitHub Actions
- Automated testing
- Build automation

**Files to explore:**
- `.github/workflows/ci.yml` - CI/CD workflow

**What it does:**
- Runs on push/PR to main/master
- Installs dependencies
- Runs linting (if configured)
- Builds the project
- Uploads build artifacts

## 🧪 Testing Each Feature

### Test Pages
1. **Home Page** (`/`): Overview of all concepts
2. **Events List** (`/events`): Data fetching demonstration
3. **Event Details** (`/events/1`): Dynamic routing
4. **Form Demo** (`/playground/form`): Zod validation

### Test API Routes
1. **GET /api/events**: Returns list of events
2. **GET /api/events/1**: Returns single event
3. **POST /api/feedback**: Submit form data

### Test Multi-tenancy
- Add `?tenant=acme` to any URL
- Check header for tenant indicator

### Test Layouts
- All pages use default layout
- Add `definePageMeta({ layout: 'marketing' })` to a page to test named layout

## 📝 Commands Reference

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Database
pnpm db:generate      # Generate migration files
pnpm db:migrate       # Apply migrations (local)
pnpm db:studio        # Open Drizzle Studio

# Cloudflare
wrangler dev          # Local development with Cloudflare Workers
wrangler deploy       # Deploy to Cloudflare
wrangler d1 create    # Create D1 database
wrangler d1 execute    # Execute SQL on D1
```

## 📝 Environment Variables

Create a `.env` file in the root directory with:

```env
# Public variables (accessible in client and server)
NUXT_PUBLIC_APP_NAME=Nuxt Learning Hub
NUXT_PUBLIC_DEFAULT_TENANT=default

# Private variables (server-only)
ADMIN_TOKEN=your-secret-admin-token-here
DB_URL=file:./local.db
```

**Note:** The `.env` file is gitignored. Use `.env.example` as a template (create it manually if needed).

## 🎓 Learning Checklist

Use this checklist to track your progress:

### Fundamentals
- [ ] Understand file-based routing
- [ ] Understand SSR vs CSR
- [ ] Know how auto-imports work
- [ ] Understand layouts system

### Pages & Routing
- [ ] Create static routes
- [ ] Create dynamic routes
- [ ] Use route parameters
- [ ] Handle 404 errors

### Data Fetching
- [ ] Use `useFetch` composable
- [ ] Use `useAsyncData` composable
- [ ] Handle loading states
- [ ] Handle error states

### UI & Styling
- [ ] Use Tailwind CSS utilities
- [ ] Use Nuxt UI components
- [ ] Create responsive layouts
- [ ] Style forms

### Forms & Validation
- [ ] Create forms with Nuxt UI
- [ ] Validate with Zod
- [ ] Show validation errors
- [ ] Submit form data

### Server & API
- [ ] Create GET endpoints
- [ ] Create POST endpoints
- [ ] Handle request/response
- [ ] Validate server-side

### Database
- [ ] Define Drizzle schema
- [ ] Create migrations
- [ ] Query database
- [ ] Insert data

### Advanced
- [ ] Use composables
- [ ] Create middleware
- [ ] Handle multi-tenancy
- [ ] Deploy to Cloudflare
- [ ] Understand monorepo structure

## 🔧 Troubleshooting

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build errors
```bash
# Clear Nuxt cache
rm -rf .nuxt .output
pnpm build
```

### Database connection issues
- Ensure D1 database is created
- Check `wrangler.toml` has correct database ID
- Verify migrations are applied

## 📖 Additional Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Nuxt UI Documentation](https://ui.nuxt.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zod Documentation](https://zod.dev)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers)

## 🤝 Contributing

This is a learning project. Feel free to:
- Experiment with the code
- Add new features
- Improve documentation
- Share your learnings

## 📄 License

This project is for educational purposes.

---

**Happy Learning! 🚀**
