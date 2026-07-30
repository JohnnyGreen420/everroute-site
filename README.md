# EverRoute Site

Marketing site for EverRoute, a Canadian technology company building calm,
practical AI products for everyday life.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4/PostCSS tooling
- ESLint 9 with the Next.js recommended rules

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
- `npm run start` invokes the Next.js production server. This is not the normal
  preview path for this repository because the site is configured as a static
  export.

There is no dedicated test script. To run the TypeScript check separately, use:

```sh
npm run typecheck
```

## Static export and deployment

`next.config.ts` sets `output: "export"`, enables trailing slashes, and disables
Next.js image optimization for static hosting. `npm run build` writes the
deployable site to `out/`.

The GitHub Actions build workflow installs from `package-lock.json` with
`npm ci` and runs `npm run build`. Cloudflare Pages should use `npm run build`
as its build command and `out` as its output directory. See
`docs/cloudflare-preview.md` for the existing preview note.

## Repository structure

- `app/` contains the active App Router page, layout, and styles.
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
git diff --check
```

Do not commit generated `.next/` or `out/` directories.
