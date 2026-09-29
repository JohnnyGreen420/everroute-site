# EverRoute Site

Marketing site for EverRoute, a Canadian technology company building calm,
practical AI products for everyday life.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4/PostCSS tooling
- ESLint 9 with the Next.js recommended rules
- Self-hosted Libre Bodoni and Inter fonts (SIL Open Font License 1.1, see
  `app/fonts/`)

## Local setup

Use the Node.js version in `.nvmrc` (Node.js 22), then install the locked
dependencies:

```sh
npm ci
```

Start the development server:

```sh
npm run dev
```

The site is available at `http://localhost:3000`.

## npm commands

- `npm run dev` starts the Next.js development server.
- `npm run lint` checks the repository with ESLint.
- `npm run typecheck` checks the repository with TypeScript.
- `npm run build` creates the production static export.
- `npm test` checks the static export in `out/` (document structure, links,
  metadata, and copy guardrails). Run `npm run build` first.
- `npm run start` invokes the Next.js production server. This is not the normal
  preview path for this repository because the site is configured as a static
  export.

The tests use only Node.js built-ins (`node:test`), so they add no
dependencies.

## Static export and deployment

`next.config.ts` sets `output: "export"`, enables trailing slashes, and disables
Next.js image optimization for static hosting. `npm run build` writes the
deployable site to `out/`.

The GitHub Actions build workflow installs from `package-lock.json` with
`npm ci`, then runs lint, typecheck, `npm run build`, and `npm test`.
Cloudflare Pages should use `npm run build` as its build command and `out` as
its output directory. See `docs/cloudflare-preview.md` for the existing preview
note.

## Design system

The visual direction follows EverRoute Brand System v1.0: a Libre Bodoni
display serif used selectively, Inter for interface and body text, a warm
white and root black palette, thin rules instead of boxes, and one restrained
accent (muted gold). Tokens live at the top of `app/globals.css`.

The header and footer wordmark is set in type as an interim treatment in
`app/components/Wordmark.tsx`. Replace it there with the approved logo artwork
once the final vectors exist; do not draw root artwork in code.

## Repository structure

- `app/` contains the active App Router pages (`/`, `/company/`, and the 404
  page), the root layout, and global design tokens in `app/globals.css`.
- `app/components/` holds the shared components, most with a CSS module.
- `app/content/` holds site facts, founder copy, the product index,
  principles, and page metadata. Add a product to `app/content/products.ts`
  only once it has an approved public description.
- `app/fonts/` holds the self-hosted font files and their licences.
- `tests/` holds the static-export checks run by `npm test`.
- `public/` contains static assets copied into the export.
- `next.config.ts` defines the static export behavior.
- `.github/workflows/build.yml` validates production builds.
- `docs/` contains deployment notes.
- `index.html` and `styles.css` are a self-contained legacy static version of
  the site; they are not inputs to the current Next.js build.

## Validation

Before opening a pull request, run:

```sh
npm ci
npm run lint
npm run typecheck
npm run build
npm test
git diff --check
```

Do not commit generated `.next/` or `out/` directories.
