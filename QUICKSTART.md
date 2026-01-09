# Quick Start Guide

## 🚀 Initial Setup

### 1. Install Dependencies

```bash
pnpm install
```

This will install:
- Nuxt 4
- Nuxt UI
- Tailwind CSS
- Zod
- Drizzle ORM
- Wrangler (Cloudflare CLI)

### 2. Create Environment File

Create a `.env` file in the root:

```env
NUXT_PUBLIC_APP_NAME=Nuxt Learning Hub
NUXT_PUBLIC_DEFAULT_TENANT=default
ADMIN_TOKEN=your-secret-admin-token-here
DB_URL=file:./local.db
```

### 3. Start Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000`

## 📋 Testing Checklist

### Test Pages
- [ ] Visit `/` - See home page
- [ ] Visit `/events` - See events list with loading state
- [ ] Click an event - See dynamic route `/events/1`
- [ ] Visit `/playground/form` - Test form validation

### Test API Routes
- [ ] Visit `http://localhost:3000/api/events` - See JSON response
- [ ] Visit `http://localhost:3000/api/events/1` - See single event
- [ ] Submit form at `/playground/form` - Test POST endpoint

### Test Features
- [ ] Add `?tenant=acme` to any URL - See tenant change in header
- [ ] Try invalid form submission - See validation errors
- [ ] Submit valid form - See success message

## 🗂️ Final Folder Structure

```
my-nuxt-app/
├── .github/
│   └── workflows/
│       └── ci.yml                    # CI/CD workflow
├── app/
│   ├── components/                    # Auto-imported components
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   └── EventCard.vue
│   ├── composables/                   # Auto-imported composables
│   │   └── useTenant.ts
│   ├── layouts/                       # Layout files
│   │   ├── default.vue               # Default layout
│   │   └── marketing.vue             # Named layout
│   ├── middleware/                    # Route middleware
│   │   └── tenant.global.ts          # Global middleware
│   ├── pages/                         # File-based routing
│   │   ├── index.vue                 # / (home)
│   │   ├── events/
│   │   │   ├── index.vue             # /events
│   │   │   └── [id].vue              # /events/:id
│   │   └── playground/
│   │       └── form.vue              # /playground/form
│   └── app.vue                        # Root component
├── server/
│   ├── api/                           # Server API routes
│   │   ├── events/
│   │   │   ├── index.get.ts          # GET /api/events
│   │   │   └── [id].get.ts           # GET /api/events/:id
│   │   └── feedback/
│   │       └── index.post.ts         # POST /api/feedback
│   └── db/                            # Database setup
│       ├── schema.ts                  # Drizzle schema
│       └── index.ts                   # DB utilities
├── drizzle/                           # Migration files
│   └── 0000_initial.sql
├── packages/
│   └── shared/                        # Monorepo awareness
│       └── utils.ts
├── .gitignore
├── drizzle.config.ts                   # Drizzle config
├── nuxt.config.ts                     # Nuxt config
├── package.json
├── QUICKSTART.md                      # This file
├── README.md                          # Full documentation
├── tsconfig.json
└── wrangler.toml                      # Cloudflare config
```

## 🎯 Key Files to Understand

### Frontend
- `app/pages/index.vue` - Home page (static route)
- `app/pages/events/index.vue` - Events list (useFetch demo)
- `app/pages/events/[id].vue` - Event details (dynamic route, useAsyncData)
- `app/pages/playground/form.vue` - Form with Zod validation
- `app/components/EventCard.vue` - Reusable component
- `app/composables/useTenant.ts` - Custom composable
- `app/middleware/tenant.global.ts` - Global middleware

### Backend
- `server/api/events/index.get.ts` - GET endpoint
- `server/api/events/[id].get.ts` - GET with parameter
- `server/api/feedback/index.post.ts` - POST endpoint with validation
- `server/db/schema.ts` - Database schema
- `server/db/index.ts` - Database utilities

### Configuration
- `nuxt.config.ts` - Nuxt configuration (modules, runtime config)
- `drizzle.config.ts` - Drizzle ORM configuration
- `wrangler.toml` - Cloudflare Workers configuration

## 🔧 Common Commands

```bash
# Development
pnpm dev                    # Start dev server
pnpm build                  # Build for production
pnpm preview                # Preview production build

# Database (when D1 is set up)
pnpm db:generate            # Generate migration files
wrangler d1 execute nuxt-learning-hub --local --file=./drizzle/0000_initial.sql

# Deployment
pnpm build                  # Build first
wrangler deploy             # Deploy to Cloudflare
```

## 📚 Next Steps

1. **Read the full README.md** for detailed explanations
2. **Explore each page** and understand what it demonstrates
3. **Check the code comments** - each file has explanations
4. **Try modifying** the code to see how it works
5. **Add new features** to practice what you've learned

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies not installing
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build errors
```bash
rm -rf .nuxt .output
pnpm build
```

---

**Ready to learn? Start with `pnpm dev` and visit `http://localhost:3000`! 🚀**
