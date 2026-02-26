---
description: Clean Code & Clean Architecture rules for this Next.js monolithic app
globs: **/*.{ts,tsx}
---

# Clean Code & Clean Architecture

This project follows a **monolithic layered architecture with three layers**. Each layer can only communicate with its direct neighbor — never skip a layer.

## The Three Layers

```
┌─────────────────────────────────┐
│  Presentation (UI)              │  ← app/, components/
│  React components, pages, hooks │
├─────────────────────────────────┤
│  Application (Business Logic)   │  ← lib/services/, lib/actions/
│  Use cases, orchestration       │
├─────────────────────────────────┤
│  Data (Infrastructure)          │  ← lib/repositories/, prisma/
│  Database access, external APIs │
└─────────────────────────────────┘
```

## Strict Layer Communication Rules

- **Presentation → Application → Data** : the flow always goes top-down through each layer in order.
- **Presentation MUST NOT import from Data directly.** A React component or page must never import Prisma client, repositories, or database utilities. It must go through the Application layer (services or server actions).
- **Application can import from Data** to read/write data, and exposes results to Presentation.
- **Data layer has no knowledge of upper layers.** Repositories and DB access modules never import from services or components.

### Allowed imports per layer

| Layer | Can import from |
|-------|----------------|
| Presentation (`app/`, `components/`, `hooks/`) | Application (`lib/services/`, `lib/actions/`), shared utils (`lib/utils.ts`), validations (`lib/validations/`) |
| Application (`lib/services/`, `lib/actions/`) | Data (`lib/repositories/`), validations, shared utils |
| Data (`lib/repositories/`, `prisma/`) | Prisma client (`lib/generated/prisma`), shared utils |

## Clean Code Principles

- **Single Responsibility** : each file, function, and component does one thing well.
- **Meaningful naming** : variables, functions, and files should clearly express intent. No abbreviations, no generic names like `data`, `info`, `handler` without context.
- **Small functions** : prefer short, focused functions over long procedural blocks. Extract logic into well-named helpers when a function exceeds ~30 lines.
- **No dead code** : do not leave commented-out code, unused imports, or unreachable branches.
- **DRY where it matters** : extract repeated logic into shared utilities, but do not abstract prematurely for a single use case.
- **Explicit over implicit** : prefer explicit types, explicit return types on exported functions, and explicit error handling over silent failures.

## Next.js Specific Guidelines

- **Server Actions** (`lib/actions/`) are the primary bridge between Presentation and Application. Use `"use server"` functions that call services internally.
- **Server Components** (default in `app/`) should call server actions or services directly when rendering server-side data.
- **Client Components** (`"use client"`) should call server actions via form actions or invoke them explicitly — never import repositories or Prisma directly.
- **Validation schemas** (`lib/validations/`) are shared across layers — they are the contract between Presentation and Application.
