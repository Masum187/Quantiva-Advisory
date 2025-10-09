# 🚀 MDX Setup Guide - Future Enhancement

> Leitfaden für die zukünftige Migration zu MDX für erweiterte Dokumentations-Features

---

## 📋 Aktueller Status

**Current Implementation:**
- ✅ React-Komponente für Mermaid (`src/components/Mermaid.tsx`)
- ✅ TypeScript-basierte Dokumentations-Seiten (`src/pages/DocsWorkflow.tsx`)
- ✅ GitHub Markdown mit Mermaid-Support (`docs/cms-workflow.md`)

**Warum MDX?**
- 📝 Markdown mit React-Komponenten mischen
- 🎨 Interaktive Dokumentation
- 🔧 Wiederverwendbare Komponenten in Docs
- ⚡ Bessere DX (Developer Experience)

---

## 🎯 MDX Migration Plan

### Option A: Next.js Migration (Empfohlen für Production)

#### 1. Installation

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install remark-gfm remark-math rehype-katex  # Optional plugins
```

#### 2. Next.js Configuration

**`next.config.mjs`:**
```javascript
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,  // Use Rust-based MDX compiler
  },
}

export default withMDX(nextConfig)
```

#### 3. MDX Dokumentations-Seite

**`app/docs/cms-workflow/page.mdx`:**
```mdx
---
title: 'CMS Workflow'
description: 'Rollenbasiertes Workflow-System'
---

import Mermaid from '@/components/Mermaid'
import { Callout } from '@/components/Callout'

# Quantiva CMS – Workflow

<Mermaid>
{`flowchart TD
  A[Entwurf (draft)] -->|Zur Prüfung| B[Zur Prüfung (inReview)]
  B -->|Freigeben| C[Freigegeben (approved)]
  B -->|Ablehnen| D[Abgelehnt (rejected)]
  C -->|Veröffentlichen| E[Veröffentlicht (published)]
  E -->|Unpublish| C
`}
</Mermaid>

<Callout type="info">
  Alle Statusübergänge werden durch Rollen-Berechtigungen geschützt.
</Callout>

## Rollen & Berechtigungen

| Rolle | Berechtigungen |
|-------|----------------|
| Admin | Alle Aktionen |
| Editor | Draft erstellen, zur Prüfung senden |
| Reviewer | Freigeben, Ablehnen |
| Publisher | Veröffentlichen, Unpublish |
```

---

### Option B: Create React App + MDX (Current Setup Enhancement)

#### 1. Installation

```bash
npm install @mdx-js/react @mdx-js/loader
npm install --save-dev @types/mdx
```

#### 2. Webpack Configuration

**`config-overrides.js`:** (requires `react-app-rewired`)
```javascript
const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.mdx?$/,
    use: [
      {
        loader: '@mdx-js/loader',
        options: {},
      },
    ],
  })
);
```

**`package.json`:**
```json
{
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test"
  }
}
```

#### 3. MDX Provider

**`src/App.tsx`:**
```typescript
import { MDXProvider } from '@mdx-js/react';
import Mermaid from './components/Mermaid';

const components = {
  Mermaid,
  // Weitere Custom Components...
};

function App() {
  return (
    <MDXProvider components={components}>
      <Router>
        <Routes>
          {/* Routes... */}
        </Routes>
      </Router>
    </MDXProvider>
  );
}
```

#### 4. MDX-Datei verwenden

**`src/docs/workflow.mdx`:**
```mdx
# CMS Workflow

<Mermaid>
{`flowchart TD
  A[Start] --> B[End]
`}
</Mermaid>
```

**`src/pages/DocsWorkflow.tsx`:**
```typescript
import WorkflowDoc from '../docs/workflow.mdx';

function DocsWorkflow() {
  return (
    <div className="container">
      <WorkflowDoc />
    </div>
  );
}
```

---

## 🎨 Custom Components für MDX

### Callout Component

**`src/components/Callout.tsx`:**
```typescript
type CalloutProps = {
  type: 'info' | 'warning' | 'error' | 'success';
  children: React.ReactNode;
};

export function Callout({ type, children }: CalloutProps) {
  const styles = {
    info: 'bg-blue-50 border-blue-500 text-blue-900',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-900',
    error: 'bg-red-50 border-red-500 text-red-900',
    success: 'bg-green-50 border-green-500 text-green-900',
  };

  return (
    <div className={`border-l-4 p-4 ${styles[type]}`}>
      {children}
    </div>
  );
}
```

### Code Block Component

**`src/components/CodeBlock.tsx`:**
```typescript
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeBlockProps = {
  children: string;
  language: string;
  filename?: string;
};

export function CodeBlock({ children, language, filename }: CodeBlockProps) {
  return (
    <div className="relative">
      {filename && (
        <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm">
          {filename}
        </div>
      )}
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
```

### Tab Component

**`src/components/Tabs.tsx`:**
```typescript
import { useState } from 'react';

type TabsProps = {
  items: { label: string; content: React.ReactNode }[];
};

export function Tabs({ items }: TabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex border-b">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`px-4 py-2 ${active === idx ? 'border-b-2 border-teal-600' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="p-4">{items[active].content}</div>
    </div>
  );
}
```

---

## 📚 Erweiterte MDX-Features

### Frontmatter Support

```mdx
---
title: 'CMS Workflow'
author: 'Quantiva Team'
date: '2025-10-09'
tags: ['workflow', 'cms', 'documentation']
---

# {frontmatter.title}

By {frontmatter.author} on {frontmatter.date}
```

### Imports in MDX

```mdx
import { Callout } from '@/components/Callout'
import { Chart } from '@/components/Chart'
import data from './data.json'

<Chart data={data} />
```

### Dynamic Content

```mdx
export const stats = {
  cases: 42,
  users: 156,
  reviews: 89
};

## Statistics

We have {stats.cases} case studies and {stats.users} users!
```

---

## 🔧 Migration Schritte

### Phase 1: Setup (1-2 Stunden)
- [ ] Entscheide: Next.js oder CRA + rewired
- [ ] Installiere MDX-Dependencies
- [ ] Konfiguriere Webpack/Next.js
- [ ] Setup MDX Provider

### Phase 2: Component Library (2-3 Stunden)
- [ ] Erstelle Callout-Komponente
- [ ] Erstelle CodeBlock-Komponente
- [ ] Erstelle Tabs-Komponente
- [ ] Erstelle weitere Custom Components

### Phase 3: Content Migration (3-4 Stunden)
- [ ] Konvertiere `DocsWorkflow.tsx` zu `.mdx`
- [ ] Migriere weitere Dokumentations-Seiten
- [ ] Update Routing
- [ ] Test alle Links

### Phase 4: Testing & Optimization (1-2 Stunden)
- [ ] Test alle MDX-Seiten
- [ ] Performance-Optimierung
- [ ] SEO-Check
- [ ] Accessibility-Check

---

## 🚀 Vorteile der MDX-Migration

### Für Entwickler
- ✅ Markdown schreiben, React-Komponenten verwenden
- ✅ Type-safe mit TypeScript
- ✅ Hot Module Replacement (HMR)
- ✅ Bessere IDE-Unterstützung

### Für Content-Ersteller
- ✅ Einfaches Markdown
- ✅ Interaktive Elemente ohne Code
- ✅ Wiederverwendbare Komponenten
- ✅ Live-Preview

### Für Nutzer
- ✅ Schnellere Ladezeiten (Code Splitting)
- ✅ Interaktive Dokumentation
- ✅ Bessere UX
- ✅ Responsive Design

---

## 📊 Vergleich: Current vs. MDX

| Feature | Current (TSX) | Mit MDX |
|---------|---------------|---------|
| **Markdown** | ❌ HTML in JSX | ✅ Natives Markdown |
| **Components** | ✅ React | ✅ React |
| **Type Safety** | ✅ TypeScript | ✅ TypeScript |
| **Content Editing** | ⚠️ Code-Kenntnisse nötig | ✅ Einfaches Markdown |
| **Hot Reload** | ✅ Ja | ✅ Ja |
| **Build Time** | ⚡ Schnell | ⚡ Schnell |
| **Flexibility** | ⚠️ Mittel | ✅ Hoch |

---

## 🎯 Empfehlung

### Für Quantiva Advisory

**Current Setup beibehalten, wenn:**
- ✅ Primär Entwickler editieren Docs
- ✅ Wenige Dokumentations-Seiten
- ✅ Keine häufigen Content-Updates

**Zu MDX migrieren, wenn:**
- ✅ Content-Team soll Docs editieren
- ✅ Viele interaktive Dokumentations-Seiten
- ✅ Häufige Content-Updates geplant
- ✅ Mehr Custom Components benötigt

---

## 📖 Ressourcen

### Offizielle Dokumentation
- **MDX:** https://mdxjs.com/
- **Next.js + MDX:** https://nextjs.org/docs/app/building-your-application/configuring/mdx
- **MDX Plugins:** https://github.com/mdx-js/mdx/blob/main/docs/guides/plugins.mdx

### Tutorials
- **MDX Playground:** https://mdxjs.com/playground/
- **Next.js MDX Example:** https://github.com/vercel/next.js/tree/canary/examples/with-mdx

### Community
- **Discord:** https://discord.gg/mdx
- **GitHub Discussions:** https://github.com/mdx-js/mdx/discussions

---

## ✅ Fazit

**Aktueller Stand:**
- ✅ Mermaid funktioniert perfekt mit React-Komponenten
- ✅ GitHub Markdown rendert Mermaid automatisch
- ✅ Dokumentation ist vollständig und wartbar

**MDX-Migration:**
- 🎯 Optional für zukünftige Erweiterungen
- 📚 Macht Sinn bei mehr Dokumentations-Seiten
- ⚡ Kann schrittweise erfolgen

**Empfehlung:**
Aktuelles Setup beibehalten und MDX bei Bedarf später hinzufügen.

---

**Status:** 📋 Planung für zukünftige Enhancement  
**Priorität:** 🟡 Medium (Optional)  
**Aufwand:** ~8-12 Stunden  
**Erstellt:** Oktober 2025
