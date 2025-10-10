# 📚 Docs Layout - Usage Guide

## 🎯 Übersicht

Das neue `DocsLayout` bietet ein modernes, responsives Dokumentations-Layout mit:
- ✅ Sidebar-Navigation
- ✅ Mobile-Menu
- ✅ Active Link Highlighting
- ✅ Search-Placeholder
- ✅ Dark Mode Support
- ✅ Prose Styling für Markdown-Content

---

## 📦 Was wurde erstellt

### **`src/components/DocsLayout.tsx`**

**Features:**
- Responsive Sidebar (Desktop: immer sichtbar, Mobile: Toggle-Menu)
- Navigation mit Active-State
- Search-Input (Placeholder für zukünftige Suche)
- External Links (Website, GitHub)
- Header mit Logo
- Footer

**Komponenten:**
- `DocsLayout` - Haupt-Layout
- `Sidebar` - Navigation
- `NavItem` - Active Link
- `Button` - Utility Component

---

## 🚀 Verwendung

### **Basis-Verwendung:**

```tsx
import DocsLayout from '../components/DocsLayout';

export default function MyDocsPage() {
  return (
    <DocsLayout>
      <h1>Meine Dokumentation</h1>
      <p>Content hier...</p>
    </DocsLayout>
  );
}
```

### **Mit Mermaid-Diagrammen:**

```tsx
import DocsLayout from '../components/DocsLayout';
import Mermaid from '../components/Mermaid';

export default function WorkflowDocs() {
  return (
    <DocsLayout>
      <h1>Workflow</h1>
      
      <Mermaid>
      {`flowchart TD
        A[Start] --> B[End]
      `}
      </Mermaid>
      
      <h2>Beschreibung</h2>
      <p>...</p>
    </DocsLayout>
  );
}
```

---

## 📋 Navigation anpassen

### **Sidebar-Links bearbeiten:**

Öffnen Sie `src/components/DocsLayout.tsx` und passen Sie die Navigation an:

```tsx
// Grundlagen-Sektion
<nav className="space-y-1">
  <NavItem href="/docs">Übersicht</NavItem>
  <NavItem href="/docs/cms-workflow">CMS Workflow</NavItem>
  <NavItem href="/docs/admin">Admin Dashboard</NavItem>
  <NavItem href="/docs/content-model">Content Model</NavItem>
</nav>

// Guides-Sektion
<nav className="space-y-1">
  <NavItem href="/docs/how-to/create-case">Case anlegen</NavItem>
  <NavItem href="/docs/how-to/review-publish">Review & Publish</NavItem>
  <NavItem href="/docs/how-to/assets">Assets & Medien</NavItem>
</nav>
```

### **Neue Sektion hinzufügen:**

```tsx
<div className="mt-4 text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 px-1 mb-1">
  API Reference
</div>
<nav className="space-y-1">
  <NavItem href="/docs/api/overview">API Übersicht</NavItem>
  <NavItem href="/docs/api/authentication">Authentication</NavItem>
  <NavItem href="/docs/api/endpoints">Endpoints</NavItem>
</nav>
```

---

## 🎨 Styling

### **Prose Styling:**

Der Content-Bereich verwendet Tailwind Typography (`prose`):

```tsx
<article className="prose prose-gray max-w-none dark:prose-invert 
  prose-headings:font-bold 
  prose-a:text-teal-600 
  dark:prose-a:text-teal-400">
  {children}
</article>
```

**Unterstützte Elemente:**
- `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- `p`, `ul`, `ol`, `li`
- `a`, `strong`, `em`, `code`
- `blockquote`, `pre`, `table`

### **Custom Styling:**

```tsx
<DocsLayout>
  <div className="not-prose">
    {/* Custom styled content outside prose */}
    <div className="bg-teal-50 p-4 rounded-lg">
      Custom Box
    </div>
  </div>
  
  {/* Back to prose styling */}
  <h2>Normal Heading</h2>
</DocsLayout>
```

---

## 📱 Responsive Behavior

### **Desktop (≥640px):**
- Sidebar immer sichtbar
- Content nimmt restlichen Platz ein
- Grid Layout: `grid-cols-[16rem_1fr]`

### **Mobile (<640px):**
- Sidebar versteckt
- Toggle-Button im Header
- Sidebar öffnet als Overlay
- Auto-Close bei Navigation

---

## 🔗 Routen konfigurieren

### **In `src/App.tsx`:**

```tsx
import DocsWorkflow from './pages/DocsWorkflow';
import DocsOverview from './pages/DocsOverview';
import DocsAdmin from './pages/DocsAdmin';

function App() {
  return (
    <Router>
      <Routes>
        {/* Bestehende Routes */}
        <Route path="/" element={<QuantivaWebsite />} />
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* Neue Docs Routes */}
        <Route path="/docs" element={<DocsOverview />} />
        <Route path="/docs/cms-workflow" element={<DocsWorkflow />} />
        <Route path="/docs/admin" element={<DocsAdmin />} />
        <Route path="/docs/content-model" element={<DocsContentModel />} />
        
        {/* Guides */}
        <Route path="/docs/how-to/create-case" element={<DocsCreateCase />} />
        <Route path="/docs/how-to/review-publish" element={<DocsReviewPublish />} />
        <Route path="/docs/how-to/assets" element={<DocsAssets />} />
      </Routes>
    </Router>
  );
}
```

---

## 📄 Beispiel-Seiten erstellen

### **1. Übersichtsseite (`src/pages/DocsOverview.tsx`):**

```tsx
import React from 'react';
import DocsLayout from '../components/DocsLayout';
import { BookOpen, Workflow, Settings, FileText } from 'lucide-react';

export default function DocsOverview() {
  return (
    <DocsLayout>
      <h1>Quantiva Documentation</h1>
      <p className="lead">
        Willkommen zur Quantiva Advisory Dokumentation. 
        Hier finden Sie alle Informationen zum CMS, Workflow und Admin-Dashboard.
      </p>

      <h2>Schnellstart</h2>
      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="/docs/cms-workflow" className="p-4 border rounded-lg hover:bg-gray-50">
          <Workflow className="h-8 w-8 text-teal-600 mb-2" />
          <h3 className="font-semibold mb-1">CMS Workflow</h3>
          <p className="text-sm text-gray-600">Rollenbasiertes Workflow-System</p>
        </a>
        
        <a href="/docs/admin" className="p-4 border rounded-lg hover:bg-gray-50">
          <Settings className="h-8 w-8 text-teal-600 mb-2" />
          <h3 className="font-semibold mb-1">Admin Dashboard</h3>
          <p className="text-sm text-gray-600">Content Management Interface</p>
        </a>
      </div>

      <h2>Guides</h2>
      <ul>
        <li><a href="/docs/how-to/create-case">Case Study erstellen</a></li>
        <li><a href="/docs/how-to/review-publish">Review & Publish Prozess</a></li>
        <li><a href="/docs/how-to/assets">Assets & Medien verwalten</a></li>
      </ul>
    </DocsLayout>
  );
}
```

### **2. Admin Docs (`src/pages/DocsAdmin.tsx`):**

```tsx
import React from 'react';
import DocsLayout from '../components/DocsLayout';

export default function DocsAdmin() {
  return (
    <DocsLayout>
      <h1>Admin Dashboard</h1>
      <p className="lead">
        Das Admin Dashboard bietet eine visuelle Oberfläche für das Content Management.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Visual Case Management</li>
        <li>Real-time Validation</li>
        <li>Import/Export Funktionen</li>
        <li>Bulk Operations</li>
        <li>History & Undo/Redo</li>
      </ul>

      <h2>Zugriff</h2>
      <p>
        Das Admin Dashboard ist verfügbar unter: 
        <code>/admin</code>
      </p>

      <h2>Berechtigungen</h2>
      <p>
        Zugriff auf das Dashboard benötigt Admin- oder Editor-Rechte.
      </p>
    </DocsLayout>
  );
}
```

---

## 🎨 Customization

### **Farben anpassen:**

```tsx
// In DocsLayout.tsx

// Teal → Blue
className="bg-teal-600"  // → bg-blue-600
className="text-teal-600"  // → text-blue-600

// Oder in tailwind.config.js:
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0fdfa',
        // ... weitere Farben
      }
    }
  }
}
```

### **Logo anpassen:**

```tsx
// In Sidebar-Komponente:
<div className="h-8 w-8 rounded-xl bg-teal-600 text-white grid place-items-center font-extrabold">
  Q
</div>

// Ersetzen mit Image:
<img src="/logo.svg" alt="Logo" className="h-8 w-8" />
```

---

## 🔍 Search Integration (Zukünftig)

### **Placeholder für Search:**

```tsx
<input
  placeholder="Suchen… (⌘K bald)"
  className="..."
  onKeyDown={(e)=> { 
    if (e.key === "Enter") {
      // Implement search logic
      console.log(e.currentTarget.value);
    }
  }}
/>
```

### **Integration mit Algolia/Meilisearch:**

```tsx
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

// In Sidebar:
<InstantSearch searchClient={searchClient} indexName="docs">
  <SearchBox />
  <Hits />
</InstantSearch>
```

---

## ✅ Checkliste

**Setup:**
- [x] DocsLayout erstellt
- [x] React Router Integration
- [x] Responsive Design
- [x] Dark Mode Support
- [ ] Docs-Seiten erstellen
- [ ] Routes konfigurieren
- [ ] Content migrieren
- [ ] Search implementieren (optional)

**Nächste Schritte:**
1. Erstellen Sie Docs-Seiten (`DocsOverview.tsx`, etc.)
2. Konfigurieren Sie Routes in `App.tsx`
3. Migrieren Sie bestehenden Content
4. Testen Sie auf Mobile & Desktop

---

## 📚 Ressourcen

- **Tailwind Typography:** https://tailwindcss.com/docs/typography-plugin
- **React Router:** https://reactrouter.com/
- **Lucide Icons:** https://lucide.dev/

---

**Status:** ✅ DocsLayout ist bereit  
**Nächster Schritt:** Docs-Seiten erstellen  
**Erstellt:** Oktober 2025


