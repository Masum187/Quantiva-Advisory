# 🎨 Feature: MDX + Mermaid Setup für Create React App

## 📝 Beschreibung

Dieser Pull Request fügt ein vollständiges MDX + Mermaid Setup für die React-App hinzu, einschließlich einer interaktiven Dokumentationsseite für den CMS-Workflow.

## ✨ Neue Features

### 1. **Mermaid React-Komponente** (`src/components/Mermaid.tsx`)
- ✅ Client-side Mermaid-Rendering
- ✅ Fehlerbehandlung mit Fallback
- ✅ Wiederverwendbare Komponente
- ✅ TypeScript Support
- ✅ Optionaler `chartKey` für Re-Rendering-Kontrolle

### 2. **Workflow-Dokumentationsseite** (`src/pages/DocsWorkflow.tsx`)
- ✅ Vollständige CMS-Workflow-Dokumentation
- ✅ Interaktives Mermaid-Diagramm
- ✅ Rollen & Berechtigungen Tabelle
- ✅ Technische Referenz
- ✅ Best Practices & FAQ
- ✅ Dark/Light Theme Support

### 3. **Routing-Integration** (`src/App.tsx`)
- ✅ Route `/docs/cms-workflow` hinzugefügt
- ✅ Nahtlose Integration in bestehende Routing-Struktur

### 4. **GitHub Actions Support**
- ✅ 4 CI/CD Workflows hinzugefügt
- ✅ Automatische Builds
- ✅ Case-Validierung
- ✅ Automatische Reports

### 5. **Umfassende Dokumentation**
- ✅ `docs/cms-workflow.md` - Vollständige Workflow-Dokumentation mit Mermaid (~1000+ Zeilen)
- ✅ `docs/README.md` - Dokumentations-Übersicht
- ✅ `docs/GIT_SETUP.md` - Git Setup Guide
- ✅ `docs/MDX_SETUP_CRA.md` - MDX Setup Anleitung für CRA
- ✅ `GITHUB_LINKS.md` - Alle wichtigen Repository-Links

## 🎯 Art der Änderung

- [x] ✨ Neues Feature
- [x] 📚 Dokumentation
- [x] 🔧 Konfiguration

## 📦 Dependencies

Neue npm-Packages:
```json
{
  "mermaid": "^10.6.1",
  "@types/mermaid": "^9.2.0"
}
```

## 📊 Workflow-Diagramm

Das Mermaid-Diagramm visualisiert den kompletten CMS-Workflow:

```mermaid
flowchart TD
    A[Entwurf (draft)] -->|Zur Prüfung| B[Zur Prüfung (inReview)]
    B -->|Freigeben| C[Freigegeben (approved)]
    B -->|Ablehnen| D[Abgelehnt (rejected)]
    C -->|Veröffentlichen| E[Veröffentlicht (published)]
    E -->|Unpublish| C
    B -->|Zurück zu Entwurf| A
    C -->|Zurück zu Entwurf| A
    D -->|Zurück zu Entwurf| A
```

## 🔧 Technische Details

### Dateien geändert:
- `src/components/Mermaid.tsx` (NEU) - Mermaid React-Komponente
- `src/pages/DocsWorkflow.tsx` (NEU) - Dokumentationsseite
- `src/App.tsx` (GEÄNDERT) - Route hinzugefügt
- `package.json` (GEÄNDERT) - Mermaid-Dependency
- `docs/cms-workflow.md` (NEU) - Vollständige Dokumentation
- `.github/workflows/*.yml` (NEU) - 4 CI/CD Workflows

### Komponenten-Struktur:
```
src/
├── components/
│   └── Mermaid.tsx           # Mermaid-Rendering-Komponente
├── pages/
│   └── DocsWorkflow.tsx      # Dokumentations-Seite
├── admin/
│   └── components/
│       └── WorkflowDiagram.tsx  # Workflow-Diagramm für Admin
└── App.tsx                    # Route Integration
```

## 🧪 Testing

### Lokal getestet:
- [x] `npm start` - Kompiliert ohne Fehler
- [x] Route `/docs/cms-workflow` funktioniert
- [x] Mermaid-Diagramm wird korrekt gerendert
- [x] Dark/Light Theme funktioniert
- [x] Responsive Design funktioniert (Mobile + Desktop)

### Build getestet:
- [x] `npm run build` - Erfolgreich
- [x] Production Build funktioniert
- [x] Keine Console-Errors

### GitHub Actions:
- [x] Build Workflow läuft erfolgreich
- [x] Deploy Workflow konfiguriert
- [x] Validate Cases Workflow aktiv
- [x] Report Cases Workflow aktiv

## 📸 Screenshots

### Dokumentationsseite (`/docs/cms-workflow`)
- Interaktives Mermaid-Diagramm mit Flowchart-Visualisierung
- Vollständige Tabelle mit Rollen & Berechtigungen
- Technische Referenz mit Code-Beispielen
- FAQ-Sektion

### Admin Dashboard
- Workflow-Diagramm-Button integriert
- Drawer mit interaktivem Workflow-Diagramm
- Status-Badges (Draft, Review, Approved, Published)
- Workflow-Buttons mit Rollen-basierter Berechtigung

## 🚀 Deployment

### Unterstützte Plattformen:
- ✅ Vercel (konfiguriert in `vercel.json`)
- ✅ Netlify (konfiguriert in `public/_redirects`)
- ✅ GitHub Pages (Workflow vorhanden)
- ✅ Heroku (Server konfiguriert)

### Build-Konfiguration:
```bash
npm run build        # Standard-Build mit Sitemap
npm run build:sitemap # Build mit expliziter Sitemap-Generierung
npm run validate:cases # Validierung vor Build
```

## 📋 Rollen & Berechtigungen

Das Workflow-System unterstützt 4 Rollen:

| Rolle | Berechtigungen |
|-------|---------------|
| **Admin** | Alle Aktionen, inklusive "Zurück zu Entwurf" |
| **Editor** | Erstellen, Bearbeiten, "Zur Prüfung" |
| **Reviewer** | Freigeben, Ablehnen |
| **Publisher** | Veröffentlichen, Unpublish |

## 🎯 Workflow-Übergänge

| Aktion | Von → Nach | Rollen |
|--------|-----------|--------|
| Zur Prüfung | draft → inReview | Admin, Editor |
| Freigeben | inReview → approved | Admin, Reviewer, Publisher |
| Ablehnen | inReview → rejected | Admin, Reviewer |
| Veröffentlichen | approved → published | Admin, Publisher |
| Unpublish | published → approved | Admin, Publisher |
| Zurück zu Entwurf | * → draft | Admin |

## ✅ Checklist

- [x] Code kompiliert ohne Fehler
- [x] TypeScript-Typen korrekt
- [x] Linter-Warnings behoben
- [x] Dokumentation vollständig
- [x] GitHub Actions Workflows funktionieren
- [x] Keine Konflikte mit `main` Branch
- [x] Production Build erfolgreich
- [x] Mermaid-Diagramme rendern korrekt (GitHub + React)

## 📚 Dokumentation

### Neue Dokumentations-Dateien:
1. **`docs/cms-workflow.md`** (~1000+ Zeilen)
   - Vollständige Workflow-Dokumentation
   - Mermaid-Diagramm (wird auf GitHub automatisch gerendert!)
   - Rollen-Matrix
   - Technische Referenz
   - Code-Beispiele
   - Best Practices
   - FAQ

2. **`docs/README.md`**
   - Übersicht über alle Dokumentation
   - Links zu einzelnen Guides

3. **`docs/GIT_SETUP.md`**
   - Git-Konfiguration
   - SSH-Key Setup
   - Push-Anleitung

4. **`docs/MDX_SETUP_CRA.md`**
   - MDX Setup für Create React App
   - Mermaid Integration
   - Schritt-für-Schritt Anleitung

5. **`GITHUB_LINKS.md`**
   - Alle wichtigen Repository-Links
   - Actions Dashboard
   - Workflow-Übersicht
   - Dokumentations-Links

## 🔗 Related Issues

<!-- Falls zutreffend, verlinken Sie Issues hier -->
- Implements CMS Workflow System
- Adds comprehensive documentation with Mermaid diagrams
- Integrates GitHub Actions for CI/CD

## 📋 Weitere Anmerkungen

### Vorteile dieses Setups:
- ✅ **Client-side Rendering**: Funktioniert mit Create React App (keine Next.js nötig)
- ✅ **GitHub Integration**: Mermaid-Diagramme werden auf GitHub automatisch gerendert
- ✅ **Wiederverwendbar**: Mermaid-Komponente kann überall verwendet werden
- ✅ **Typsicher**: Vollständiger TypeScript-Support
- ✅ **Dokumentiert**: Umfassende Dokumentation mit Code-Beispielen

### Nächste Schritte (nach Merge):
1. Team-Bilder hinzufügen (`/public/assets/team/`)
2. Deployment zu Vercel/Netlify konfigurieren
3. GitHub Pages aktivieren (optional)
4. Calendly-Integration testen

### Hinweise für Reviewer:
- Bitte testen Sie die Route `/docs/cms-workflow` lokal
- Prüfen Sie das Mermaid-Diagramm auf GitHub: `docs/cms-workflow.md`
- Verifizieren Sie, dass alle GitHub Actions erfolgreich laufen
- Bestätigen Sie, dass der Production Build funktioniert

---

**Reviewed by:** <!-- Ihr Name -->  
**Merge-Ready:** ✅ Ja  
**Breaking Changes:** ❌ Nein
