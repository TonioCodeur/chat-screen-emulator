# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ChatFrame is a Next.js web application that simulates chat screens (SMS, WhatsApp, Messenger, Telegram) on iOS or Android devices.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (via PostCSS plugin)
- **UI Components**: shadcn/ui (new-york style, RSC-enabled, Lucide icons)
- **Database**: PostgreSQL via Prisma (client output: `lib/generated/prisma`)
- **Auth**: better-auth (email/password + GitHub + Google OAuth)
- **Validation**: Zod v4
- **Toasts**: sonner (via shadcn/ui `<Toaster>` in root layout)
- **Theme**: next-themes (class-based, system default)
- **Package Manager**: pnpm

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — run ESLint
- `pnpm dlx shadcn add <component>` — add shadcn/ui components to `components/ui/`

## Path Aliases

`@/*` maps to the project root (e.g., `@/lib/utils`, `@/components/ui/button`).

## Architecture

- `app/` — Next.js App Router pages and layouts
- `app/api/auth/[...all]/` — better-auth catch-all API route
- `lib/auth.ts` — server-side better-auth config (Prisma adapter, social providers)
- `lib/auth-client.ts` — client-side auth exports: `signIn`, `signUp`, `signOut`, `useSession`
- `lib/validations/` — Zod schemas (e.g., `auth.ts` for sign-in/sign-up)
- `lib/utils.ts` — `cn()` helper for class merging
- `components/` — app-level React components
- `components/ui/` — shadcn/ui primitives (auto-generated, do not edit manually)
- `prisma/` — Prisma schema and migrations
- `prisma.config.ts` — Prisma config (uses `DATABASE_URL` env var)

## Key Patterns

- **Auth flow**: Client components call `signIn.email()`, `signUp.email()`, or `signIn.social({ provider })` from `@/lib/auth-client`. Use `useSession()` hook for session state. Server-side auth config lives in `lib/auth.ts`.
- **Validation**: Zod schemas in `lib/validations/` with `safeParse()` for inline field errors in forms. Type exports via `z.infer<>`.
- **Theme**: `ThemeProvider` wraps the app in `app/layout.tsx` with `attribute="class"` and `defaultTheme="system"`. The `<html>` tag requires `suppressHydrationWarning`. Dark mode uses the `.dark` class variant defined in `globals.css`.
- **Toasts**: Use `toast.success()` / `toast.error()` from `sonner` for user notifications. The `<Toaster richColors closeButton />` is mounted in the root layout.
- **Prisma client**: Generated to `lib/generated/prisma` (not the default location). Import from `@/lib/generated/prisma/client`.
