# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern portfolio website for Mohammad Ashhar Nadeem built with TanStack Start (formerly TanStack Router). This is a **full-stack React framework** with file-based routing, server functions, and SSR capabilities. The project uses Vercel for deployment (configured via Nitro preset).

## Tech Stack

- **Framework**: TanStack Start 1.x with React 19
- **Styling**: Tailwind CSS 4.x with CSS variables
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Animations**: Motion (Framer Motion successor)
- **Build Tool**: Vite 7.x with custom `@lovable.dev/vite-tanstack-config`
- **Package Manager**: Bun
- **Runtime**: Node.js with Nitro server handler
- **Deployment**: Vercel (Nitro preset configured)

## Development Commands

```bash
# Start dev server (default: http://localhost:3000)
bun dev

# Build for production
bun run build

# Build for development (with source maps)
bun run build:dev

# Preview production build locally
bun run preview

# Lint with ESLint
bun run lint

# Format with Prettier
bun run format
```

## Architecture & File Structure

### Routing (File-Based)

All routes live in `src/routes/`. TanStack Start uses **file-based routing** — do NOT create Next.js/Remix-style directories like `src/pages/` or `app/layout.tsx`.

**Key conventions:**
- `src/routes/__root.tsx` — App shell that wraps all routes (must preserve `<Outlet />`)
- `src/routes/index.tsx` — Root `/` route
- `src/routes/about.tsx` → `/about`
- `src/routes/users/$id.tsx` → `/users/:id` (dynamic param, use bare `$`, not `{$id}`)
- `src/routes/_layout.tsx` — Layout route (renders children via `<Outlet />`)
- `src/routeTree.gen.ts` — **Auto-generated**, never edit manually

See `src/routes/README.md` for complete routing conventions.

### Server Functions

Use `createServerFn()` from `@tanstack/react-start` for server-side logic instead of separate API routes or Edge Functions.

**Pattern:**
```typescript
// src/lib/api/example.functions.ts
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const myServerFn = createServerFn({ method: "POST" })
  .inputValidator(z.object({ name: z.string() }))
  .handler(async ({ data }) => {
    // Server-only code here
    return { result: data.name };
  });
```

**Call from client:**
```typescript
const result = await myServerFn({ data: { name: "Ada" } });
```

### Server-Only Modules

Files with `.server.ts` suffix are **never bundled to the client**. Use for:
- Database credentials
- API keys
- Server-only utilities

Example: `src/lib/config.server.ts` wraps `process.env` access in functions (required for Cloudflare Workers where env binds at request time, not module-load time).

### Environment Variables

- **Server-only secrets**: Access via `process.env` inside `.server.ts` files or `createServerFn` handlers
- **Public client vars**: Prefix with `VITE_` (e.g., `VITE_PUBLIC_API_URL`) — these ship to the browser
- **Important**: On Cloudflare Workers, `process.env` reads at MODULE scope return `undefined` — always read inside a function/handler

### Component Organization

- `src/components/ui/` — shadcn/ui primitives (Button, Card, Dialog, etc.)
- `src/components/portfolio/` — Page-specific portfolio components (Hero, About, Projects, etc.)
- `src/lib/` — Utilities, server functions, and shared logic
- `src/hooks/` — React hooks (e.g., `use-mobile.tsx`)

### Styling

- **Global styles**: `src/styles.css` (Tailwind directives + CSS variables)
- **Theme**: Dark mode with CSS variables for colors
- **Utility helper**: `src/lib/utils.ts` exports `cn()` for conditional className merging

### Error Handling

The app has custom error handling layers:
- `src/lib/error-capture.ts` — Captures runtime errors
- `src/lib/error-page.ts` — Renders custom 500 error pages
- `src/server.ts` — Server entry point with error middleware
- `src/start.ts` — TanStack Start instance with error middleware
- `src/routes/__root.tsx` — Defines `ErrorComponent` and `NotFoundComponent`

## Vite Configuration

`vite.config.ts` uses `@lovable.dev/vite-tanstack-config` which **pre-configures**:
- TanStack Start plugin
- React plugin
- Tailwind CSS plugin
- TypeScript path aliases (`@/*` → `src/*`)
- Nitro (server handler)
- Component tagging (dev-only)

**DO NOT manually add these plugins** — they're already included. Override via `defineConfig({ vite: { ... } })` if needed.

## TypeScript

- `tsconfig.json` uses `strict: true`
- Path alias: `@/*` maps to `src/*`
- Module resolution: `Bundler` mode
- `noEmit: true` (Vite handles compilation)

## Important Patterns

### Server Function Best Practices

1. Always validate inputs with Zod schemas
2. Keep server-only imports inside `.handler()` body (tree-shaken from client)
3. For truly server-only helpers, use `.server.ts` files
4. Example server function: `src/lib/medium.functions.ts` (fetches Medium RSS feed)

### Adding New Routes

1. Create `src/routes/my-route.tsx`
2. Export a route with `createFileRoute()`
3. `routeTree.gen.ts` auto-updates on save (Vite plugin)

Example:
```typescript
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/my-route")({
  component: MyRoute,
});

function MyRoute() {
  return <div>My Route</div>;
}
```

### Adding UI Components

Use the shadcn/ui CLI pattern (configured in `components.json`):
```bash
npx shadcn@latest add button
```

Components install to `src/components/ui/` with:
- New York style
- Lucide icons
- Tailwind with CSS variables

### Meta Tags & SEO

Define per-route in the `head()` function:
```typescript
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Page Title" },
      { name: "description", content: "..." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});
```

Global meta tags live in `src/routes/__root.tsx`.

## Deployment

Configured for **Vercel** via `nitro.preset: "vercel"` in `vite.config.ts`.

Build output uses Nitro's Vercel adapter. On Vercel, the build command is `bun run build` and output directory is `.vercel/output`.

## Current Portfolio Structure

The home page (`src/routes/index.tsx`) renders these sections in order:
1. **Hero** — Introduction with animated name and role ticker
2. **About** — Background and career summary
3. **Expertise** — Core competencies
4. **Experience** — Professional timeline
5. **Projects** — Featured work
6. **Insights** — Medium blog integration (fetched via `getMediumPosts` server function)
7. **Contact** — Contact form

The `Navbar` component has scroll-based positioning and section navigation.

## Notes

- **Never edit** `src/routeTree.gen.ts` — it's auto-generated
- **Preserve `<Outlet />`** in layout routes — removing it breaks child route rendering
- **Server functions** run server-only — use them instead of separate API routes
- **Animations** use `motion/react` (not `framer-motion`)
- **Theme** is locked to dark mode (`<html className="dark">` in `__root.tsx`)
