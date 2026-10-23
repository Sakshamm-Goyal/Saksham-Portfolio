# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Quality checks
npm run lint         # ESLint check on src/
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier format
npm run format:check # Prettier check
npm run type-check   # TypeScript type checking
npm run validate     # Run all checks (type-check, lint, format:check)

# Build
npm run build        # Production build
npm run start        # Serve production build
```

Pre-commit hooks (husky + lint-staged) automatically run ESLint and Prettier on staged files.

## Architecture

This is a Next.js 16 portfolio site built as a single horizontal developer story.

### Route Structure
- `/` - Canonical AI systems and full-stack portfolio
- `/tech` - Compatibility route for the same technical portfolio
- `/growth` - Redirects to `/`

### Key Patterns

**Animation System**: Framer Motion drives reveals and component micro-interactions. GSAP owns the pinned horizontal desktop sequence; mobile uses a clean vertical flow.

**Cinematic Components** (`src/components/cinematic/`): Reusable visual effects:
- `GlitchText` - Character-by-character text reveal with glitch effect
- `ImageReveal`, `PortraitReveal` - Progressive image reveals
- `ScrollScene` - Scroll-driven scene container with progress tracking
- `FilmGrain`, `Vignette`, `CinematicOverlay` - Visual overlay effects

**Horizontal Navigation** (`src/components/horizontal/`): `HorizontalShell` coordinates the desktop pinned track, active panel, direct sticker navigation, and the vertical draw section that follows it.

**Visual System** (`src/components/zine/`): Paper textures, taped imagery, hard shadows, commit lines, stickers, and editorial display type establish the consistent scrapbook language.

### Component Locations
- `src/app/` - Next.js App Router pages
- `src/components/` - Shared React components
- `src/components/cinematic/` - Animation/visual effect components
- `src/components/horizontal/` - Horizontal track, panels, and active-state context
- `src/components/zine/` - Editorial UI primitives
- `src/components/tech/` - Saksham-specific content panels and data
- `src/lib/` - Utilities and SEO constants

## Code Style

- Prettier: 100 char width, double quotes, trailing commas (es5)
- TypeScript strict mode with `@typescript-eslint` rules
- Path alias: `@/*` → `src/*` (configured in `tsconfig.json`); prefer `@/...` imports over relative paths.
- Tailwind CSS v4 (configured via `@tailwindcss/postcss`, no `tailwind.config.js`). Theme tokens live in `src/app/globals.css`.
- Use `cn()` from `src/lib/utils.ts` for conditional Tailwind classes (wraps `clsx` + `tailwind-merge`).
- Prefer `"use client"` directive for components with animations or interactivity
- Lint rules to keep in mind: `no-console` warns (only `console.warn`/`console.error` allowed), `eqeqeq` is enforced, `consistent-type-imports` warns — use `import type { ... }` for type-only imports.

## Product boundaries

- Contact uses mailto and local clipboard copy; there is no form backend.
- `NEXT_PUBLIC_SITE_URL` must be set for production canonical URLs and structured data.
