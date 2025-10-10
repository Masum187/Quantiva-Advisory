# ✅ Merge Checklist – Quality Assurance

Checkliste für Quality Assurance vor Merge zu `main`.

---

## 📋 Pre-Merge Quality Gates

Vor dem Merge einer Pull Request müssen alle folgenden Kriterien erfüllt sein:

### 🔧 Code Quality

- [ ] **ESLint**: Keine Errors, max. 5 Warnings
  ```bash
  npm run lint
  ```
  - ✅ **Threshold**: 0 errors, ≤5 warnings
  - ❌ **Fails**: Any ESLint error, >5 warnings

- [ ] **TypeScript**: Keine Type Errors
  ```bash
  npx tsc --noEmit
  ```
  - ✅ **Threshold**: 0 type errors
  - ❌ **Fails**: Any TypeScript error

- [ ] **Build**: Erfolgreicher Production Build
  ```bash
  npm run build
  ```
  - ✅ **Threshold**: Exit code 0
  - ❌ **Fails**: Build errors, missing dependencies

### 🎨 UI/UX Quality

- [ ] **Responsive Design**: Getestet auf Mobile (375px), Tablet (768px), Desktop (1440px)
- [ ] **Dark Mode**: Funktioniert korrekt (wenn implementiert)
- [ ] **Accessibility**:
  - ARIA labels vorhanden
  - Keyboard navigation funktioniert
  - Color contrast ratio ≥ 4.5:1
  - Screen reader friendly

### ⚡ Performance Thresholds

- [ ] **Lighthouse Performance**: ≥90
  ```bash
  # Build & serve locally
  npm run build
  npx serve -s build
  
  # Run Lighthouse in Chrome DevTools or via CLI
  npx lighthouse http://localhost:3000 --view
  ```
  
  **Thresholds**:
  - 🟢 **Performance**: ≥90
  - 🟢 **Accessibility**: ≥95
  - 🟢 **Best Practices**: ≥90
  - 🟢 **SEO**: ≥95

- [ ] **Core Web Vitals**:
  - **LCP** (Largest Contentful Paint): ≤2.5s
  - **FID** (First Input Delay): ≤100ms
  - **CLS** (Cumulative Layout Shift): ≤0.1
  - **FCP** (First Contentful Paint): ≤1.8s
  - **TTFB** (Time to First Byte): ≤600ms

- [ ] **Bundle Size**: Check bundle size impact
  ```bash
  npm run build
  ls -lh build/static/js/*.js
  ```
  - ✅ **Threshold**: Main bundle ≤500KB (gzipped)
  - ⚠️ **Warning**: >500KB – Review for unnecessary dependencies
  - ❌ **Fails**: >1MB – Must optimize

### 🔍 SEO & Content

- [ ] **Sitemap**: Aktuell und gültig
  ```bash
  npm run generate:sitemap
  # Validate at https://www.xml-sitemaps.com/validate-xml-sitemap.html
  ```

- [ ] **Meta Tags**: Alle Seiten haben:
  - `<title>` (≤60 Zeichen)
  - `<meta name="description">` (≤160 Zeichen)
  - Open Graph tags (`og:title`, `og:description`, `og:image`)
  - Twitter Card tags

- [ ] **OG Images**: Alle Cases haben gültige OG Images (1200×630)
  ```bash
  npm run generate:og
  ```

- [ ] **robots.txt**: Korrekt konfiguriert
- [ ] **Canonical URLs**: Gesetzt für alle Seiten

### 🧪 Testing

- [ ] **Unit Tests**: Alle Tests bestehen (wenn vorhanden)
  ```bash
  npm test -- --coverage --watchAll=false
  ```
  - ✅ **Threshold**: 100% passing, ≥80% coverage

- [ ] **E2E Tests**: Kritische User Flows funktionieren (wenn vorhanden)
  - Homepage load
  - Navigation
  - Case detail pages
  - Contact form
  - Language switching

- [ ] **Manual Testing**:
  - [ ] Homepage (DE + EN)
  - [ ] Cases page (DE + EN)
  - [ ] Case detail pages (alle Slugs)
  - [ ] Admin Dashboard (wenn geändert)
  - [ ] Contact form
  - [ ] Navigation & Scrolling
  - [ ] Responsive Breakpoints

### 🔒 Security & Privacy

- [ ] **Dependencies**: Keine kritischen Vulnerabilities
  ```bash
  npm audit --production
  ```
  - ✅ **Threshold**: 0 high/critical vulnerabilities
  - ⚠️ **Warning**: Medium vulnerabilities – Review & document
  - ❌ **Fails**: High/critical vulnerabilities

- [ ] **Secrets**: Keine hardcoded Secrets im Code
  ```bash
  # Check for common secret patterns
  grep -r "PRIVATE_KEY\|SECRET\|PASSWORD\|API_KEY" src/ --exclude-dir=node_modules
  ```

- [ ] **HTTPS**: Alle externe Links verwenden HTTPS
- [ ] **Cookie Banner**: Funktioniert korrekt (GDPR compliance)
- [ ] **Analytics**: Vercel Analytics korrekt eingebunden

### 📊 Data Validation

- [ ] **Cases JSON**: Validierung erfolgreich
  ```bash
  npm run validate:cases:strict
  ```
  - ✅ **Threshold**: 0 errors, ≤3 warnings

- [ ] **Content JSON**: Keine Syntax-Errors
  ```bash
  node -c src/data/content.json
  ```

- [ ] **Taxonomy**: Alle Kategorien/Branchen sind valide
  ```bash
  npm run report:cases
  ```

### 📝 Documentation

- [ ] **README**: Aktuell und vollständig
- [ ] **CHANGELOG**: Neue Features/Fixes dokumentiert
- [ ] **Code Comments**: Komplexe Logik ist kommentiert
- [ ] **Types**: TypeScript Interfaces/Types dokumentiert

### 🚀 Deployment

- [ ] **Environment Variables**: Alle erforderlichen env vars in Vercel gesetzt
- [ ] **Vercel Preview**: Preview-Build erfolgreich
- [ ] **GitHub Actions**: Alle CI/CD Workflows erfolgreich
  - Build workflow
  - Validation workflow
  - Report workflow

---

## 🎯 Quick Check Commands

Führe alle relevanten Checks in einer Sitzung aus:

```bash
# 1. Linting & Type Checking
npm run lint
npx tsc --noEmit

# 2. Build
npm run build

# 3. Data Validation
npm run validate:cases:strict
npm run report:cases

# 4. Security Audit
npm audit --production

# 5. Sitemap
npm run generate:sitemap

# 6. Test (if applicable)
npm test -- --coverage --watchAll=false
```

---

## ⚠️ Common Issues & Fixes

### ESLint Warnings
- **Unused variables**: Remove or prefix with `_`
- **Missing dependencies**: Add to `useEffect`/`useCallback` deps array
- **Console logs**: Remove or use debug utility

### TypeScript Errors
- **Missing types**: Add type annotations
- **Type mismatches**: Fix types or use type assertions (sparingly)
- **Null/undefined**: Use optional chaining `?.` or nullish coalescing `??`

### Build Failures
- **Missing dependencies**: `npm install <package>`
- **Outdated lock file**: `npm install` (regenerate package-lock.json)
- **Memory issues**: `NODE_OPTIONS=--max-old-space-size=4096 npm run build`

### Performance Issues
- **Large bundle**: Use code splitting, lazy loading
- **Slow images**: Optimize images (WebP, AVIF), use responsive sizes
- **Excessive re-renders**: Memoize components with `React.memo`, `useMemo`, `useCallback`

### Lighthouse Issues
- **Low Performance**: Check bundle size, optimize images, use lazy loading
- **Low Accessibility**: Fix ARIA labels, color contrast, keyboard navigation
- **Low SEO**: Fix meta tags, sitemap, structured data

---

## 📈 Performance Budgets

| Metric | Target | Warning | Critical |
|--------|--------|---------|----------|
| **Lighthouse Performance** | ≥95 | <90 | <80 |
| **LCP** | ≤2.0s | >2.5s | >4.0s |
| **FID** | ≤50ms | >100ms | >300ms |
| **CLS** | ≤0.05 | >0.1 | >0.25 |
| **FCP** | ≤1.5s | >1.8s | >3.0s |
| **TTFB** | ≤400ms | >600ms | >1.0s |
| **Bundle Size (JS)** | ≤300KB | >500KB | >1MB |
| **Bundle Size (CSS)** | ≤50KB | >100KB | >200KB |
| **Total Page Size** | ≤1MB | >2MB | >5MB |

---

## 🔄 Automation

**GitHub Actions** automatically run most checks on every PR:
- ✅ Build validation
- ✅ ESLint & TypeScript checks
- ✅ Data validation
- ✅ Sitemap generation
- ✅ Case report generation

**Manual checks** required before merge:
- 🔍 Visual regression testing
- 🧪 E2E testing
- 📱 Manual device testing
- ⚡ Lighthouse performance audit

---

## ✅ Final Checklist Before Merge

- [ ] All automated CI/CD checks passing ✅
- [ ] Lighthouse scores meet thresholds ⚡
- [ ] Manual testing completed on 3+ devices 📱
- [ ] Code review approved by 1+ reviewer 👥
- [ ] No merge conflicts with `main` 🔀
- [ ] Branch is up-to-date with `main` 🔄
- [ ] Commit messages follow convention 📝
- [ ] PR description is clear and complete 📄

---

**Last Updated**: October 2025  
**Version**: 1.0.0  
**Maintained by**: Quantiva Engineering Team
