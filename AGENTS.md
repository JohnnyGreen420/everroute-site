# AGENTS.md — EverRoute Site Agent Guide

This file defines repository-specific rules for AI agents working in this codebase.

It applies to the entire repository unless a more specific `AGENTS.md` exists in a subdirectory.

## Repository purpose

`everroute-site` is the public marketing website for EverRoute.

EverRoute is the parent company. Current products and projects include Haven, RouteWorth, Alex's World, and Founder OS. Founder OS is EverRoute's internal operating system and is not customer-facing.

This repository is for the EverRoute public website only. Do not add unrelated product application code or Founder OS runtime infrastructure here.

## Active application

The active site is a Next.js application using:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4 / PostCSS
- Node.js 22
- npm with `package-lock.json`

The active application is under `app/`.

`next.config.ts` configures a static export:

- `output: "export"`
- trailing slashes enabled
- Next.js image optimization disabled

A successful production build writes the deployable static site to `out/`.

## Repository map

Important locations include:

- `app/` — active Next.js App Router application
- `public/` — static assets
- `.github/workflows/build.yml` — GitHub Actions build workflow
- `docs/` — repository and deployment notes
- `next.config.ts` — static export configuration
- `package.json` and `package-lock.json` — dependency and command definitions
- `index.html` and `styles.css` — legacy root-level static-site files

Treat root-level `index.html` and `styles.css` as legacy until a separate reviewed task proves they are safe to remove. Do not delete or substantially rewrite them as incidental cleanup.

## Branch as workroom

Treat one feature branch as one bounded development workroom.

The branch, local Dev Agent evidence, GitHub pull request, validation results, review discussion, approval, and merge decision should all refer to the same task and code state.

Use a short descriptive branch such as:

```text
founder-os/<task-name>
feature/<task-name>
fix/<task-name>
docs/<task-name>
chore/<task-name>
```

Do not perform routine development directly on `main`.

## Agent identity

For Founder OS records, the current logical execution actor is:

```text
agent_id: dev-agent-codex-v0.1
agent_type: coding-agent
tool: Codex CLI
authorizing_human: Marc Cormier
```

This is a logical audit identity, not an independent security principal. Codex currently operates through Marc's local authenticated environment. Do not claim independent credentials or cryptographic identity.

## Allowed actions

When explicitly requested and within the current branch scope, an agent may:

- inspect files inside this repository
- make small, reviewable edits
- add or update documentation
- run approved local validation
- prepare a clear final report
- leave changes for human review

Use the smallest change that satisfies the task.

## Prohibited actions

Do not:

- use `sudo`
- access parent or sibling folders
- inspect unrelated repositories
- access secrets, API keys, shell history, SSH material, keychains, browser profiles, or cloud credentials
- push, merge, deploy, publish, or contact external services unless the task explicitly authorizes that exact action
- modify DNS or Cloudflare configuration
- add paid services
- perform a major redesign or architecture rewrite without explicit scope
- run `npm audit fix` or broad dependency upgrades
- delete legacy files as incidental cleanup
- commit generated `.next/`, `out/`, cache, or local evidence directories
- widen scope to fix unrelated problems

If a required action is prohibited or unclear, stop and report the blocker.

## Dependency installation

Prefer reproducible installation:

```bash
npm ci
```

Use a repository- or runner-provided npm cache when the normal user cache is unavailable. Do not repair the user's global npm cache or use `sudo` as part of an agent task.

Do not alter `package-lock.json` unless the task requires a dependency change and the resulting lockfile diff has been reviewed.

## Validation

Inspect `package.json` before running commands. Do not assume scripts are valid.

For the current baseline, use:

```bash
npm ci
npm run lint
npx --no-install tsc --noEmit
npm run build
git diff --check
git status --short --branch
```

### Lint

The current baseline configures the ESLint CLI through `eslint.config.mjs`, and the `lint` script runs `eslint .`.

Therefore:

- run `npm run lint` as part of the applicable validation
- do not silently add or change lint tooling unless lint repair is part of the approved task
- if a future branch does not contain a reviewed ESLint CLI configuration and a valid `lint` script, report lint as unavailable on that branch

Do not claim a validation passed unless the command was actually run and completed successfully.

## Copy and accessibility changes

Make only clear, low-risk corrections unless broader copy or design work is explicitly requested.

Appropriate examples:

- obvious grammar or spelling error
- missing accessible label
- incorrect heading relationship
- safe semantic HTML correction
- clearly misleading link text

Do not perform subjective rewrites, broad content changes, or visual redesign as incidental cleanup.

## Git and pull-request rules

Before changing files:

1. Confirm the repository root.
2. Confirm the branch is not `main` or `master`.
3. Confirm the working tree is clean.
4. Record the starting commit.
5. Confirm the requested scope.

Before proposing a commit or pull request:

1. Inspect every changed and untracked file.
2. Run applicable validation.
3. Run `git diff --check`.
4. Confirm the diff matches the stated scope.
5. Confirm no secrets, runtime evidence, or unrelated files are included.
6. Leave consequential actions for human approval.

Approval for merge must be bound to the exact pull request and reviewed head SHA. If the head SHA changes, prior merge approval is invalid and must be repeated.

## Evidence and final report

A bounded Dev Agent session should record:

- repository
- branch
- starting commit
- ending commit or head state
- logical agent identity
- files changed
- commands run
- validation results
- failures and limitations
- prohibited actions avoided
- current Git state
- recommended human review

The final report must distinguish:

- what was observed
- what was changed
- what passed
- what failed
- what was deferred
- what still requires approval

Do not hide failures or present partial validation as a complete pass.

## Stop conditions

Stop and return to human review when:

- the working tree was already dirty
- the requested scope is ambiguous
- a change would affect deployment, DNS, Cloudflare, credentials, privacy, security, billing, or public publishing
- validation reveals an unrelated problem requiring broader changes
- the branch or repository does not match the task
- the approved code state changes after review
- completing the task requires access outside this repository

The goal is controlled, auditable progress—not maximum autonomy.
