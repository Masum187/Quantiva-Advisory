# Merge Checklist

Use this short checklist before merging to main.

## Lint & Typecheck
- [ ] npm run test passes (if applicable)
- [ ] No ESLint errors/warnings in editor
- [ ] TypeScript typecheck clean

## Lighthouse Targets (desktop/mobile)
- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 90
- [ ] Best Practices ≥ 90
- [ ] SEO ≥ 90

## Functionality
- [ ] Hero video/image renders
- [ ] Services images load (from CMS)
- [ ] Cookie banner shows and consent toggles Analytics
- [ ] Docs pages render (MDX + Mermaid)
- [ ] Admin content editor works (save, download, upload)

## Analytics
- [ ] Speed Insights and Analytics render in production
- [ ] Custom events visible in Vercel dashboard

## Content
- [ ] Sitemap updated (CI will generate on push)
- [ ] OG images generated (postbuild)
- [ ] i18n routes resolve (/de/, /en/)

## Deployment
- [ ] vercel.json SPA rewrites present
- [ ] No serverless API routes in /api (static build)

> Tip: run Chrome DevTools Lighthouse and verify key pages: /de/, /de/cases, one case detail, /docs.
