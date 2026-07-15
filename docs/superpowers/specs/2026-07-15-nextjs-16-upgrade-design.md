# Design Spec: Next.js 16 Upgrade Reference Fixes

This specification details the updates needed to clean up all leftover string references and repository names from Next.js 15 to Next.js 16.

## Proposed Changes

### Configuration

#### [MODIFY] [package.json](file:///home/antpt/workspaces/nextjs-codebase/package.json)
- Update `"name"` from `"nextjs-15-starter-shadcn"` to `"nextjs-16-starter-shadcn"`.
- Update `"website"` from `"https://nextjs-15-starter-shadcn.vercel.app/"` to `"https://nextjs-16-starter-shadcn.vercel.app/"`.

### App Layout and Pages

#### [MODIFY] [layout.tsx](file:///home/antpt/workspaces/nextjs-codebase/src/app/layout.tsx)
- Update metadata title in `metadata` export to use "NextJS 16" instead of "NextJS 15".

#### [MODIFY] [page.tsx](file:///home/antpt/workspaces/nextjs-codebase/src/app/page.tsx)
- Update page title heading (`<h1>`) inside the main layout to use "NextJS 16" instead of "NextJS 15".

### Documentation

#### [MODIFY] [README.md](file:///home/antpt/workspaces/nextjs-codebase/README.md)
- Update main header to `# Next.js 16 + Shadcn UI + TailwindCSS 4`.
- Update attribution link to `https://github.com/siddharthamaity/nextjs-16-starter-shadcn`.
- Update link text from `Next.js 15 docs` to `Next.js 16 docs`.
- Update intro/features list items from "Next.js 15" to "Next.js 16".

---

## Verification Plan

### Automated Verification
- Run `pnpm build` to verify that changing these names does not break compilation, typescript compilation, linting, or formatting.
