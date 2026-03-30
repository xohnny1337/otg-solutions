# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Norwegian business website for OTG Solutions AS (IT consulting/development). Built with Astro 5, React 19, Tailwind CSS 4, and shadcn/ui (new-york style).

## Commands

- `bun dev` — start dev server
- `bun run build` — production build
- `bun run preview` — preview production build

## Architecture

- **Astro pages** in `src/pages/` (index, om-oss, kontakt) — all use Norwegian URL paths
- **Layout** in `src/layouts/Layout.astro` — shared shell with Header/Footer, `lang="no"`
- **Components**: Astro components in `src/components/`, React components in `src/components/ui/` (shadcn/ui)
- **Styling**: Tailwind CSS 4 via Vite plugin (`@tailwindcss/vite`), global CSS with CSS variables in `src/styles/global.css`
- **Path aliases**: `@/` maps to `src/` (e.g., `@/components`, `@/lib/utils`)
- **shadcn/ui**: configured via `components.json`, uses `class-variance-authority` + `clsx` + `tailwind-merge` (utility in `src/lib/utils.ts`)
- **Package manager**: Bun
