# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wedding website for Ali & Cole's Istanbul wedding (June 6, 2026). Built with Next.js 15 (App Router), React 19, TypeScript 5, Tailwind CSS 4, and Vercel Postgres.

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npx prettier . --write` — Format code
- `npm run seed` — Seed database from CSV guest list (`scripts/seed.js`)
- `make format` — Lint + Prettier in one step

No test framework is configured.

## Architecture

### Routing & Pages

App Router (`app/` directory). Key routes:
- `/` — Home page with schedule, countdown, hero section
- `/rsvp/[id]` — Dynamic RSVP form (server-rendered, fetches guest data)
- `/travel` — Hotel recommendations and transportation info
- `/faqs` — Accordion FAQ section
- `/how-we-met`, `/registry` — Static content pages
- `/api/rsvps` — GET endpoint returning all guests

### Data Layer

- **Database**: Vercel Postgres with `wedding_rsvps` and `wedding_guests` tables (UUID primary keys)
- **Queries**: `app/data/wedding.ts` — direct SQL via `@vercel/postgres`
- **Mutations**: `app/data/actions.ts` — Server Actions (e.g., `updateRSVP`) with `revalidatePath`
- **Seeding**: `scripts/seed.js` imports from CSV files in `scripts/`

### Client vs Server

- Pages and interactive components use `"use client"` (home, travel, faqs, rsvp form, popups)
- Server Actions (`"use server"`) handle data mutations
- The RSVP detail page (`/rsvp/[id]`) is a server component that fetches data then renders client form

### Styling

- Tailwind CSS 4 with `tailwind-merge` and `clsx` (utility: `lib/utils.ts` exports `cn()`)
- Color palette: primary `#659eb2` (teal), background `rgb(248, 245, 239)` (cream)
- Fonts: `Alice` (headings), `Almarai` (body), loaded via Google Fonts in layout
- Custom keyframe animations in `tailwind.config.ts` (fade-in with delays)
- CSS modules used for navbar (`app/ui/navbar.module.css`)

### UI Components

- `app/ui/` — Shared UI (navbar, footer, rsvp-popup, rsvp-form, success-popup, countdown-popup)
- `app/components/` — Reusable animation wrappers (FadeInOnScroll, TypewriterText)
- `app/hooks/useScrollAnimation.ts` — Intersection Observer hook for scroll-triggered animations

### Notifications

`app/utils/telegram.ts` sends Telegram messages on RSVP updates/errors. Requires `PALACE_TELEGRAM_BOT_TOKEN` env var.

### Key Environment Variables

- `POSTGRES_URL` — Vercel Postgres connection string
- `PALACE_TELEGRAM_BOT_TOKEN` — Telegram bot for notifications
- `NEXT_PUBLIC_ROOM_BLOCK_URL` — Hotel booking link

### Path Alias

`@/*` maps to project root (configured in `tsconfig.json`).

## Deployment

Deployed on Vercel with auto-deploy from GitHub. Uses Vercel Analytics (`@vercel/analytics`).
