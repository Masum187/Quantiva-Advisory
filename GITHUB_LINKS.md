# 🔗 Quantiva Advisory - GitHub Links

## 📦 Repository
**Main Repository:** https://github.com/Masum187/Quantiva-Advisory

---

## 🎬 GitHub Actions (CI/CD)

### Actions Dashboard
**URL:** https://github.com/Masum187/Quantiva-Advisory/actions

**Live Workflows:**
- 🔄 **Build Workflow** - Automatische Build-Verifizierung
- 🔄 **Deploy Workflow** - Produktions-Deployment
- 🔄 **Validate Cases** - Case-Daten Validierung
- 🔄 **Report Cases** - Automatische Case-Berichte

### Einzelne Workflows ansehen
- Build: https://github.com/Masum187/Quantiva-Advisory/actions/workflows/build.yml
- Deploy: https://github.com/Masum187/Quantiva-Advisory/actions/workflows/deploy.yml
- Validate: https://github.com/Masum187/Quantiva-Advisory/actions/workflows/validate-cases.yml
- Report: https://github.com/Masum187/Quantiva-Advisory/actions/workflows/report-cases.yml

---

## 📚 Dokumentation mit Mermaid-Diagrammen

### CMS Workflow Dokumentation
**URL:** https://github.com/Masum187/Quantiva-Advisory/blob/main/docs/cms-workflow.md

**Features:**
- ✨ Interaktives Mermaid-Diagramm (automatisch gerendert!)
- 📊 Workflow-Flowchart (Draft → Review → Approved → Published)
- 📋 Rollen-Matrix (Admin, Editor, Reviewer, Publisher)
- 🔧 Technische Referenz mit Code-Beispielen
- ✅ Best Practices & FAQ

### Alle Dokumentations-Dateien
**URL:** https://github.com/Masum187/Quantiva-Advisory/tree/main/docs

**Dateien:**
- `cms-workflow.md` - Vollständige Workflow-Dokumentation (~1000+ Zeilen)
- `README.md` - Dokumentations-Übersicht
- `GIT_SETUP.md` - Git Setup Guide
- `MDX_SETUP_CRA.md` - MDX Setup für Create React App

### Weitere Dokumentation
- Admin Dashboard: https://github.com/Masum187/Quantiva-Advisory/blob/main/ADMIN_DASHBOARD.md
- Deployment: https://github.com/Masum187/Quantiva-Advisory/blob/main/DEPLOYMENT.md
- Taxonomy System: https://github.com/Masum187/Quantiva-Advisory/blob/main/TAXONOMY_SYSTEM.md
- Validation System: https://github.com/Masum187/Quantiva-Advisory/blob/main/VALIDATION_SYSTEM.md

---

## 🎨 Mermaid-Diagramm Live Preview

### Auf GitHub
GitHub rendert Mermaid-Diagramme automatisch!

**Öffnen Sie:** https://github.com/Masum187/Quantiva-Advisory/blob/main/docs/cms-workflow.md

**Das Diagramm zeigt:**
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

### In der React-App
**Lokale URL:** http://localhost:3000/docs/cms-workflow

**Features:**
- Client-side Mermaid-Rendering mit `mermaid` npm-Package
- Interaktive Diagramm-Visualisierung
- Vollständige Workflow-Dokumentation
- Dark/Light Theme Support

---

## 🔧 Source Code

### Haupt-Komponenten
- Website: https://github.com/Masum187/Quantiva-Advisory/blob/main/src/QuantivaWebsite.tsx
- Admin Dashboard: https://github.com/Masum187/Quantiva-Advisory/blob/main/src/AdminDashboard.tsx
- Workflow Diagram: https://github.com/Masum187/Quantiva-Advisory/blob/main/src/admin/components/WorkflowDiagram.tsx
- Mermaid Component: https://github.com/Masum187/Quantiva-Advisory/blob/main/src/components/Mermaid.tsx
- Docs Page: https://github.com/Masum187/Quantiva-Advisory/blob/main/src/pages/DocsWorkflow.tsx

### Scripts & Tools
- Validate Cases: https://github.com/Masum187/Quantiva-Advisory/blob/main/scripts/validate-cases.mjs
- Report Cases: https://github.com/Masum187/Quantiva-Advisory/blob/main/scripts/report-cases.mjs
- Generate OG Images: https://github.com/Masum187/Quantiva-Advisory/blob/main/scripts/generate-og.mjs

### Data Files
- Cases: https://github.com/Masum187/Quantiva-Advisory/blob/main/src/data/cases.json
- Taxonomy: https://github.com/Masum187/Quantiva-Advisory/blob/main/src/data/taxonomy.json

---

## 🚀 Quick Actions

### Trigger Workflows manually
Machen Sie einen kleinen Commit und pushen Sie:
```bash
cd /Users/herijeanmasum/Developer/quantiva-website
git commit --allow-empty -m "trigger: Test workflows"
git push origin main
```

Dann sehen Sie die Workflows live: https://github.com/Masum187/Quantiva-Advisory/actions

### Testen Sie die Mermaid-Dokumentation
**Auf GitHub:** https://github.com/Masum187/Quantiva-Advisory/blob/main/docs/cms-workflow.md

**Lokal:** http://localhost:3000/docs/cms-workflow

---

## 📊 Repository-Statistiken

**Aktueller Stand:**
- 📁 92+ Dateien
- 📝 12.000+ Zeilen Code
- 🎨 4 GitHub Actions Workflows
- 📚 20+ Dokumentations-Dateien
- 🎯 Vollständiges CMS-Workflow-System mit Mermaid-Diagrammen

---

**Erstellt:** Oktober 2025  
**Letzter Push:** Heute (GitHub Actions aktiv!)  
**Status:** ✅ Production Ready


