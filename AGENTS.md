<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# R66 Solutions — Agent Notes

Corporate website for R66 Solutions.

## Stack

- **Framework:** Next.js (App Router), React, TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui (`src/components/ui`) + Lucide React
- **Motion:** Framer Motion

## Commands

```bash
npm ci          # install deps (Cloud Agent install script)
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # ESLint
```

## Project layout

- `src/app/` — App Router pages and layouts
- `src/components/ui/` — shadcn components (`npx shadcn@latest add <name>`)
- `src/lib/utils.ts` — `cn()` helper
- `components.json` — shadcn config

## Cursor Cloud

- Environment config: `.cursor/environment.json`
- Install is idempotent via `npm ci`
- Dev server starts automatically in the `dev` terminal on port 3000
- No secrets required for local/dev bootstrap; add dashboard secrets when integrations land
