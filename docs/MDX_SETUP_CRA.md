# MDX + Mermaid Setup (Create React App)

> Anleitung für MDX-Dokumentation mit Mermaid-Diagrammen in Create React App

---

## ⚠️ Wichtiger Hinweis

Dieses Projekt verwendet **Create React App**, nicht Next.js. Für CRA gibt es zwei Optionen:

### Option 1: Statische Markdown-Dateien (Empfohlen)
✅ Einfach zu implementieren  
✅ Keine zusätzlichen Dependencies  
✅ GitHub rendert Mermaid automatisch  
✅ Bereits implementiert in `/docs`

### Option 2: MDX mit React (Komplex)
❌ Erfordert Eject oder CRACO  
❌ Komplexe Webpack-Konfiguration  
❌ Nicht empfohlen für CRA  

---

## 🎯 Empfohlene Lösung: Markdown + Mermaid Component

### 1. Mermaid React Component erstellen

**`src/components/Mermaid.tsx`**

```tsx
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({ 
  startOnLoad: false, 
  theme: 'default',
  securityLevel: 'loose'
});

type MermaidProps = {
  chart: string;
  className?: string;
};

export default function Mermaid({ chart, className }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const render = async () => {
      try {
        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.render(id, chart);
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        if (ref.current) {
          ref.current.innerHTML = `<pre style="color:#ef4444;white-space:pre-wrap;">${String(error)}</pre>`;
        }
      }
    };
    
    render();
  }, [chart]);

  return <div ref={ref} className={className} />;
}
```

### 2. Dependencies installieren

```bash
npm install mermaid
npm install --save-dev @types/mermaid
```

### 3. Workflow-Dokumentations-Seite erstellen

**`src/pages/DocsWorkflow.tsx`**

```tsx
import React from 'react';
import Mermaid from '../components/Mermaid';

const workflowChart = `
flowchart TD
    A[Entwurf<br/>draft]:::draft -->|Zur Prüfung<br/>Admin, Editor| B[In Prüfung<br/>inReview]:::review
    B -->|Freigeben<br/>Admin, Reviewer, Publisher| C[Freigegeben<br/>approved]:::approved
    B -->|Ablehnen<br/>Admin, Reviewer| D[Abgelehnt<br/>rejected]:::rejected

    C -->|Veröffentlichen<br/>Admin, Publisher| E[Veröffentlicht<br/>published]:::published
    E -->|Unpublish<br/>Admin, Publisher| C

    %% Rückwege zu Draft
    B -.->|Zurück zu Entwurf<br/>Admin| A
    C -.->|Zurück zu Entwurf<br/>Admin| A
    D -.->|Zurück zu Entwurf<br/>Admin| A
    E -.->|Zurück zu Entwurf<br/>Admin| A

    classDef draft fill:#f3f4f6,stroke:#6b7280,stroke-width:2px,color:#111827
    classDef review fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#111827
    classDef approved fill:#dbeafe,stroke:#3b82f6,stroke-width:2px,color:#111827
    classDef rejected fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#111827
    classDef published fill:#d1fae5,stroke:#10b981,stroke-width:2px,color:#111827
`;

export default function DocsWorkflow() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6">CMS Workflow & Berechtigungen</h1>
          
          {/* Workflow Diagram */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Status-Flow</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <Mermaid chart={workflowChart} />
            </div>
          </section>

          {/* Permissions Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Rollen & Berechtigungen</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left">Aktion</th>
                    <th className="border px-4 py-2 text-left">Von → Nach</th>
                    <th className="border px-4 py-2 text-left">Rollen erlaubt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Zur Prüfung</td>
                    <td className="border px-4 py-2">draft → inReview</td>
                    <td className="border px-4 py-2">Admin, Editor</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Freigeben</td>
                    <td className="border px-4 py-2">inReview → approved</td>
                    <td className="border px-4 py-2">Admin, Reviewer, Publisher</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Ablehnen</td>
                    <td className="border px-4 py-2">inReview → rejected</td>
                    <td className="border px-4 py-2">Admin, Reviewer</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Veröffentlichen</td>
                    <td className="border px-4 py-2">approved → published</td>
                    <td className="border px-4 py-2">Admin, Publisher</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Unpublish</td>
                    <td className="border px-4 py-2">published → approved</td>
                    <td className="border px-4 py-2">Admin, Publisher</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Zurück zu Entwurf</td>
                    <td className="border px-4 py-2">*alle außer draft* → draft</td>
                    <td className="border px-4 py-2">Admin</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Notes */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">💡 Hinweise</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Beim Veröffentlichen wird automatisch <code>publishedAt</code> gesetzt</li>
              <li>Alle Statuswechsel werden in der History erfasst (300ms Debouncing)</li>
              <li>Owner & Reviewer sind Metadaten im Drawer</li>
              <li>Vier-Augen-Prinzip: Editor ≠ Reviewer für Qualitätssicherung</li>
            </ul>
          </section>

          {/* Link to Admin Dashboard */}
          <div className="mt-8 text-center">
            <a 
              href="/admin" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition"
            >
              Zum Admin Dashboard →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 4. Route hinzufügen

**`src/App.tsx`** (oder wo Ihre Routes definiert sind)

```tsx
import DocsWorkflow from './pages/DocsWorkflow';

// In Ihrer Router-Konfiguration:
<Route path="/docs/cms-workflow" element={<DocsWorkflow />} />
```

### 5. Navigation-Link hinzufügen

Fügen Sie einen Link in Ihrer Navigation hinzu:

```tsx
<a href="/docs/cms-workflow" className="text-sm hover:underline">
  Workflow-Dokumentation
</a>
```

---

## 🚀 Alternative: Externe Dokumentation

### GitHub Pages (Empfohlen)

Nutzen Sie die bereits erstellten Markdown-Dateien:

1. **GitHub rendert Mermaid automatisch!**
2. Keine zusätzliche Konfiguration nötig
3. Perfekt für Dokumentation

**Workflow:**
```bash
# Dokumentation committen
git add docs/
git commit -m "docs: Add workflow documentation"
git push origin main
```

**Ergebnis:**
- Mermaid-Diagramme werden automatisch gerendert
- Markdown wird schön formatiert
- Keine Build-Konfiguration nötig

### Docsify (Alternative)

```bash
# Docsify installieren
npm i -g docsify-cli

# Docs initialisieren
docsify init ./docs

# Lokal testen
docsify serve ./docs
```

Dann in `docs/index.html`:

```html
<script src="//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
  mermaid.initialize({ startOnLoad: true });
</script>
```

---

## 📊 Vergleich der Optionen

| Option | Vorteile | Nachteile |
|--------|----------|-----------|
| **GitHub Markdown** | ✅ Einfach<br>✅ Mermaid-Support<br>✅ Keine Config | ❌ Extern |
| **React Component** | ✅ Integriert<br>✅ Styling-Kontrolle | ❌ Dependency |
| **Docsify** | ✅ Schöne UI<br>✅ Search<br>✅ Plugins | ❌ Separates Tool |
| **MDX in CRA** | ✅ Flexibel | ❌ Komplex<br>❌ Eject nötig |

---

## 🎯 Empfehlung

**Für Ihr Projekt:**

1. ✅ **Nutzen Sie die Markdown-Dateien in `/docs`**
   - GitHub rendert Mermaid automatisch
   - Keine zusätzliche Konfiguration
   - Perfekt für Team-Dokumentation

2. ✅ **Workflow-Diagramm im Admin Dashboard**
   - Bereits implementiert als React-Komponente
   - Interaktiv und integriert
   - Nutzt `WorkflowDiagram.tsx`

3. ⚠️ **Optional: Mermaid-Komponente für spezielle Seiten**
   - Nur wenn Sie Diagramme in der App selbst brauchen
   - Nutzen Sie die obige `Mermaid.tsx` Komponente

---

## 📝 Installation (wenn gewünscht)

```bash
cd /Users/herijeanmasum/Developer/quantiva-website

# Mermaid installieren
npm install mermaid
npm install --save-dev @types/mermaid

# Komponente erstellen (siehe oben)
# Route hinzufügen (siehe oben)

# Testen
npm start
# Navigiere zu http://localhost:3000/docs/cms-workflow
```

---

## 🔗 Nützliche Links

- **Mermaid Docs**: https://mermaid.js.org
- **GitHub Mermaid Support**: https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/
- **Docsify**: https://docsify.js.org
- **React Mermaid**: https://github.com/mermaid-js/mermaid

---

*Letzte Aktualisierung: Oktober 2025*

