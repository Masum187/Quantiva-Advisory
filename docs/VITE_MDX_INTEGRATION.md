# Vite & MDX Integration – Technische Übersicht

> Detaillierte Erklärung zu Vite, MDX-Integration und häufigen Herausforderungen

**Zielgruppe:** Entwickler  
**Kontext:** CRA → Vite Migration  
**Status:** Referenz-Dokumentation

---

## 📋 Zusammenfassung

Vite hat **keine nativen Probleme** mit MDX-Dateien, benötigt aber eine **korrekte Konfiguration**, um sie zu verarbeiten. Ohne das richtige Plugin kann Vite MDX nicht interpretieren, was zu Build-Fehlern führt.

---

## 🔧 Häufigste Herausforderungen

### 1. Fehlende Plugins und Konfiguration

**Problem:**  
Vite benötigt ein spezielles Plugin (`@mdx-js/rollup`), um MDX-Dateien zu verstehen. Ohne dieses Plugin meldet Vite einen Parse-Fehler.

**Fehlermeldung:**
```
Failed to parse source for import analysis because the content contains invalid JS syntax.
```

**Lösung:**

```bash
# Plugin installieren
npm install @mdx-js/rollup remark-gfm
```

**vite.config.ts:**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

export default defineConfig({
  plugins: [
    // MDX MUSS vor React geladen werden!
    { enforce: 'pre', ...mdx({ remarkPlugins: [remarkGfm] }) },
    react(),
  ],
})
```

**Wichtig:**
- Das MDX-Plugin **muss** mit `enforce: 'pre'` vor dem React-Plugin geladen werden
- Async-Loading kann manchmal Probleme lösen (siehe unten)

---

### 2. Kompatibilität von Modulsystemen (ESM vs. CJS)

**Problem:**  
MDX und seine Abhängigkeiten sind reine ES-Module (ESM). Wenn Ihr Projekt oder Teile davon noch CommonJS (CJS) verwenden, kann es zu Konflikten kommen.

**Fehlermeldung:**
```
Error [ERR_REQUIRE_ESM]: require() of ES Module not supported
```

**Lösung A: Dynamischer Import**

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(async () => {
  const mdx = (await import('@mdx-js/rollup')).default
  
  return {
    plugins: [
      { enforce: 'pre', ...mdx() },
      react(),
    ],
  }
})
```

**Lösung B: package.json anpassen**

```json
{
  "type": "module"
}
```

**Hinweis:** Option B kann andere Teile Ihres Projekts beeinflussen, die CJS erwarten.

---

### 3. TypeScript-Typen für MDX

**Problem:**  
TypeScript erkennt `.mdx`-Dateien nicht als Module.

**Fehlermeldung:**
```
Cannot find module './workflow.mdx' or its corresponding type declarations.
```

**Lösung:**

**1. Typen installieren:**

```bash
npm install --save-dev @types/mdx
```

**2. Deklarationsdatei erstellen:**

**src/mdx.d.ts:**

```typescript
declare module '*.mdx' {
  import { ComponentType } from 'react'
  const MDXComponent: ComponentType<Record<string, unknown>>
  export default MDXComponent
}
```

**3. tsconfig.json anpassen:**

```json
{
  "compilerOptions": {
    "types": ["vite/client", "@types/mdx"]
  },
  "include": ["src"]
}
```

---

### 4. Probleme im Zusammenspiel mit anderen Tools

#### Storybook

**Problem:**  
Storybook versucht ebenfalls, MDX-Dateien zu verarbeiten, was zu Konflikten führen kann.

**Lösung:**

**.storybook/main.js:**

```javascript
module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config) {
    // MDX-Plugin für Storybook anpassen
    const mdx = await import('@mdx-js/rollup')
    config.plugins.push({
      ...mdx.default({
        providerImportSource: '@mdx-js/react'
      })
    })
    return config
  }
}
```

#### Jest

**Problem:**  
Jest kann MDX-Dateien nicht importieren.

**Fehlermeldung:**
```
SyntaxError: Unexpected token 'export'
```

**Lösung:**

**jest.config.js:**

```javascript
module.exports = {
  moduleNameMapper: {
    '\\.(mdx)$': '<rootDir>/__mocks__/mdxMock.js'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
```

**__mocks__/mdxMock.js:**

```javascript
module.exports = () => null
```

---

## ✅ Vollständige Vite-Konfiguration (Best Practice)

**vite.config.ts:**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        // Remark-Plugins: Markdown-Processing
        remarkPlugins: [
          remarkGfm,    // GitHub Flavored Markdown (Tabellen, Checklisten)
          remarkMath,   // Math-Formeln (optional)
        ],
        // Rehype-Plugins: HTML-Processing
        rehypePlugins: [
          rehypeKatex,             // Math-Rendering (optional)
          rehypeSlug,              // IDs für Überschriften
          rehypeAutolinkHeadings,  // Auto-Links für Überschriften
        ],
        // Provider für Custom Components
        providerImportSource: '@mdx-js/react',
      }),
    },
    react({ include: /\.(jsx|tsx|mdx)$/ }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@docs': '/src/docs',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@mdx-js/react'],
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'mdx': ['@mdx-js/react'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    hmr: true,
  },
})
```

**package.json:**

```json
{
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  },
  "dependencies": {
    "@mdx-js/react": "^3.1.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0"
  },
  "devDependencies": {
    "@mdx-js/rollup": "^3.1.1",
    "@types/mdx": "^2.0.11",
    "@types/react": "^18.2.55",
    "@types/react-dom": "^18.2.19",
    "@vitejs/plugin-react": "^4.2.1",
    "rehype-autolink-headings": "^7.1.0",
    "rehype-slug": "^6.0.0",
    "remark-gfm": "^4.0.0",
    "typescript": "^5.3.3",
    "vite": "^5.1.0"
  }
}
```

**src/mdx.d.ts:**

```typescript
declare module '*.mdx' {
  import { ComponentType } from 'react'
  
  const MDXComponent: ComponentType<Record<string, unknown>>
  export default MDXComponent
  
  export const frontmatter: Record<string, unknown>
}
```

**tsconfig.json:**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    
    "types": ["vite/client", "@types/mdx"]
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 🎯 Migration von CRA zu Vite: Step-by-Step

### Phase 1: Vorbereitung (30 Min)

1. **Backup erstellen:**
   ```bash
   git checkout -b migration/vite
   git commit -am "Backup before Vite migration"
   ```

2. **Dependencies dokumentieren:**
   ```bash
   npm list --depth=0 > pre-migration-deps.txt
   ```

### Phase 2: Dependencies (30 Min)

3. **CRA entfernen:**
   ```bash
   npm uninstall react-scripts @craco/craco @mdx-js/loader
   ```

4. **Vite installieren:**
   ```bash
   npm install -D vite @vitejs/plugin-react
   npm install -D @mdx-js/rollup remark-gfm
   npm install -D @types/mdx
   ```

### Phase 3: Konfiguration (1 Stunde)

5. **Dateien verschieben:**
   ```bash
   # index.html nach root verschieben
   mv public/index.html .
   
   # %PUBLIC_URL% durch / ersetzen in index.html
   # <script>-Tag hinzufügen: <script type="module" src="/src/index.tsx"></script>
   ```

6. **vite.config.ts erstellen** (siehe oben)

7. **MDX-Typen erstellen** (siehe oben)

8. **package.json anpassen:**
   ```json
   {
     "type": "module",
     "scripts": {
       "dev": "vite",
       "build": "tsc && vite build",
       "preview": "vite preview"
     }
   }
   ```

### Phase 4: Code-Anpassungen (1-2 Stunden)

9. **Environment Variables:**
   ```diff
   - process.env.REACT_APP_API_URL
   + import.meta.env.VITE_API_URL
   ```
   
   `.env`:
   ```
   VITE_API_URL=https://api.example.com
   ```

10. **Imports anpassen:**
    ```typescript
    // SVGs als React-Komponenten
    import Logo from './logo.svg?react'
    
    // Absolute Imports
    import Button from '@/components/Button'
    ```

### Phase 5: Testing (1-2 Stunden)

11. **Dev-Server testen:**
    ```bash
    npm run dev
    ```

12. **Build testen:**
    ```bash
    npm run build
    npm run preview
    ```

13. **Alle Features durchgehen:**
    - [ ] Routing funktioniert
    - [ ] MDX-Seiten laden
    - [ ] Styles werden angewendet
    - [ ] Assets laden (Bilder, SVGs)
    - [ ] API-Calls funktionieren

### Phase 6: Cleanup & Deployment (30 Min)

14. **Alte Dateien entfernen:**
    ```bash
    rm -rf craco.config.js
    rm -rf public/index.html
    ```

15. **Vercel-Config anpassen** (falls verwendet):
    ```json
    {
      "buildCommand": "npm run build",
      "outputDirectory": "build",
      "devCommand": "npm run dev"
    }
    ```

16. **Dokumentation aktualisieren:**
    - README.md
    - DEPLOYMENT.md

**Gesamt-Aufwand:** ~4-8 Stunden (je nach Projektgröße)

---

## 🚨 Häufige Fehler & Lösungen

### Fehler 1: "Failed to parse source"

**Ursache:** MDX-Plugin fehlt oder falsch konfiguriert

**Lösung:**
```bash
npm install @mdx-js/rollup
# vite.config.ts: enforce: 'pre' hinzufügen
```

### Fehler 2: "Cannot find module '*.mdx'"

**Ursache:** TypeScript-Deklaration fehlt

**Lösung:**
```typescript
// src/mdx.d.ts erstellen
declare module '*.mdx' { ... }
```

### Fehler 3: "require() of ES Module"

**Ursache:** CJS/ESM-Konflikt

**Lösung:**
```json
// package.json
{ "type": "module" }
```

### Fehler 4: HMR funktioniert nicht

**Ursache:** MDX-Plugin-Konfiguration

**Lösung:**
```typescript
react({ include: /\.(jsx|tsx|mdx)$/ })
```

### Fehler 5: Build schlägt fehl

**Ursache:** TypeScript-Fehler oder fehlende Typen

**Lösung:**
```bash
npm run tsc --noEmit  # Fehler finden
# tsconfig.json: "skipLibCheck": true (temporär)
```

---

## 📊 Performance-Vergleich: CRA vs. Vite

| Metrik | CRA | Vite | Verbesserung |
|--------|-----|------|--------------|
| **Dev-Server-Start** | ~15-20s | ~1-2s | 🚀 **10x schneller** |
| **Hot Module Reload** | ~1-3s | ~50-200ms | ⚡ **10-20x schneller** |
| **Build-Zeit (Small)** | ~30-60s | ~15-30s | ✅ **2x schneller** |
| **Build-Zeit (Large)** | ~2-5min | ~1-2min | ✅ **2-3x schneller** |
| **Bundle-Größe** | Baseline | -5-15% | 📦 **Kleiner** |

---

## 🎯 Wann lohnt sich die Migration?

### ✅ Migration empfohlen bei:

- 🐌 Langsamer Dev-Server (>20s Start)
- 🔥 Langsames HMR (>2s)
- 📦 Große Projekte mit vielen Dependencies
- 🆕 Neueren React-Features (React 18+)
- ⚡ Performance ist kritisch

### ⚠️ Migration NICHT empfohlen bei:

- ✅ CRA funktioniert problemlos
- 🕐 Zeitdruck im Projekt
- 👥 Team ist mit CRA vertraut
- 📦 Kleine Projekte (<50 Dateien)
- 🔧 Viele Custom Webpack-Konfigurationen

---

## 📚 Weiterführende Ressourcen

### Offizielle Dokumentation
- **Vite:** https://vitejs.dev/
- **MDX:** https://mdxjs.com/
- **Vite Plugin React:** https://github.com/vitejs/vite-plugin-react

### Migration Guides
- **CRA → Vite:** https://github.com/vitejs/vite/discussions/8131
- **Vite with MDX:** https://mdxjs.com/packages/rollup/

### Tools
- **Vite Plugins:** https://vitejs.dev/plugins/
- **Remark Plugins:** https://github.com/remarkjs/remark/blob/main/doc/plugins.md
- **Rehype Plugins:** https://github.com/rehypejs/rehype/blob/main/doc/plugins.md

---

## ✅ Checkliste für erfolgreiche Migration

- [ ] Git-Branch erstellen
- [ ] Dependencies dokumentieren
- [ ] CRA entfernen, Vite installieren
- [ ] vite.config.ts konfigurieren
- [ ] MDX-Plugin mit enforce: 'pre'
- [ ] MDX-Typen deklarieren (mdx.d.ts)
- [ ] index.html nach root verschieben
- [ ] package.json Scripts anpassen
- [ ] "type": "module" hinzufügen
- [ ] Environment Variables umstellen (REACT_APP → VITE)
- [ ] Absolute Imports testen
- [ ] Dev-Server testen
- [ ] Build testen
- [ ] Preview testen
- [ ] Alle Features durchgehen
- [ ] Deployment-Config anpassen
- [ ] Dokumentation aktualisieren
- [ ] Team informieren
- [ ] Merge & Deploy

---

**Erstellt:** Oktober 2025  
**Status:** ✅ Produktionsreif  
**Maintainer:** Quantiva Advisory Development Team

**Siehe auch:**
- [MDX Alternativen Guide](./MDX_ALTERNATIVES_GUIDE.md)
- [MDX Schnellentscheidung](./MDX_DECISION_QUICKSTART.md)


