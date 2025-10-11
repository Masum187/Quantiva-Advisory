# Quantiva CMS – Dokumentation

> Vollständige Dokumentation für das Quantiva Enterprise Content Management System

---

## 📚 Dokumentations-Übersicht

### Workflow & Berechtigungen
- **[CMS Workflow](./cms-workflow.md)** – Rollenbasiertes Workflow-System
  - Status-Flow Diagramm
  - Rollen & Berechtigungen
  - Best Practices
  - Technische Referenz
  - FAQ

### Setup & Technologie

#### MDX & Vite
- **[MDX Alternativen – Schnellentscheidung](./MDX_DECISION_QUICKSTART.md)** ⚡ – 2-Minuten-Guide
  - Soll ich bei MDX bleiben oder wechseln?
  - Vergleich: MDX, Markdoc, Astro, Contentlayer
  - Vite-Migration Quick Start
- **[MDX Alternativen – Vollständiger Guide](./MDX_ALTERNATIVES_GUIDE.md)** 📚 – Detaillierte Analyse
  - Vite-Integration & Herausforderungen
  - Ausführliche Alternative-Beschreibungen
  - Migration-Guides & Code-Beispiele
  - Entscheidungsbaum & Vergleichstabellen
- **[Vite & MDX Integration](./VITE_MDX_INTEGRATION.md)** 🔧 – Technische Dokumentation
  - Häufigste Herausforderungen & Lösungen
  - Vollständige Vite-Konfiguration (Best Practice)
  - CRA → Vite Migration Step-by-Step
  - Performance-Vergleich & Troubleshooting
- **[MDX Setup für CRA](./MDX_SETUP_CRA.md)** – Aktuelles Setup
- **[MDX Future Setup](./MDX_FUTURE_SETUP.md)** – Zukünftige Erweiterungen

#### Weitere Setup-Dokumentation
- **[Git Setup Guide](./GIT_SETUP.md)** – GitHub Repository Setup
- **[Mermaid Integration](./MERMAID_INTEGRATION_GUIDE.md)** – Diagramme in Dokumentation

### Deployment & Git Workflow

- **[Deployment Workflow](./DEPLOYMENT_WORKFLOW.md)** 🚀 – Preview vs. Production
  - Branch-Strategie (`main` vs. `develop`)
  - Vercel-Konfiguration
  - Environment Variables
  - Workflows im Alltag
  - Troubleshooting
- **[Vercel Setup Guide](./VERCEL_SETUP_GUIDE.md)** ⚙️ – Schritt-für-Schritt
  - Git-Integration konfigurieren
  - Domains einrichten
  - Environment Variables trennen
  - Build-Einstellungen
  - Verifikation & Testing
- **[Git Workflow Quick Reference](./GIT_WORKFLOW_QUICKREF.md)** ⚡ – Copy & Paste
  - Neues Feature entwickeln
  - Hotfix für Production
  - Branch-Management
  - Commit-Konventionen
  - Häufige Probleme & Lösungen

### Weitere Dokumentation

*(Platzhalter für zukünftige Dokumentation)*

- **API-Dokumentation** – REST API Endpoints
- **Komponenten-Bibliothek** – UI-Komponenten

---

## 🚀 Schnellstart

### Admin Dashboard öffnen
```bash
npm start
# Öffne http://localhost:3000
# Navigiere zu /admin
```

### Workflow-Diagramm anzeigen
1. Öffne das Admin Dashboard
2. Klicke auf **"Workflow"** Button (Toolbar)
3. Siehe den vollständigen Status-Flow

### Rolle wechseln (Testing)
1. Wähle eine Rolle im Dropdown (Topbar, rechts)
2. Beobachte, wie Buttons aktiviert/deaktiviert werden
3. Teste den Workflow mit verschiedenen Rollen

---

## 📖 Dokumentations-Struktur

```
docs/
├── README.md                      # Diese Datei
├── cms-workflow.md                # Workflow & Berechtigungen
│
├── MDX & Vite
│   ├── MDX_DECISION_QUICKSTART.md     # ⚡ MDX vs. Alternativen (Quick)
│   ├── MDX_ALTERNATIVES_GUIDE.md      # 📚 MDX vs. Alternativen (Vollständig)
│   ├── VITE_MDX_INTEGRATION.md        # 🔧 Vite & MDX Integration (Technisch)
│   ├── MDX_SETUP_CRA.md               # MDX Setup für CRA (aktuell)
│   └── MDX_FUTURE_SETUP.md            # MDX Migration für Zukunft
│
├── Deployment & Git
│   ├── DEPLOYMENT_WORKFLOW.md         # 🚀 Preview vs. Production
│   ├── VERCEL_SETUP_GUIDE.md          # ⚙️ Vercel Setup Step-by-Step
│   └── GIT_WORKFLOW_QUICKREF.md       # ⚡ Git Quick Reference
│
├── Setup
│   ├── GIT_SETUP.md                   # Git Repository Setup
│   └── MERMAID_INTEGRATION_GUIDE.md   # Mermaid-Diagramme
│
└── Geplant
    ├── api/                           # API-Dokumentation
    └── components/                    # Komponenten-Docs
```

---

## 🔗 Nützliche Links

### Projekt
- **Website**: https://quantiva.com
- **Admin Dashboard**: `/admin`
- **GitHub**: (Repository URL hier einfügen)

### Dokumentation
- **Workflow**: [cms-workflow.md](./cms-workflow.md)
- **Mermaid-Diagramme**: Werden automatisch in GitHub/GitLab gerendert

### Support
- **E-Mail**: support@quantiva.com
- **Issues**: GitHub Issues

---

## 📝 Beitragen

### Dokumentation erweitern

1. **Neue Dokumentation erstellen:**
   ```bash
   cd docs
   touch neue-dokumentation.md
   ```

2. **Mermaid-Diagramme verwenden:**
   ````markdown
   ```mermaid
   flowchart TD
       A[Start] --> B[Ende]
   ```
   ````

3. **In README verlinken:**
   ```markdown
   - **[Neue Dokumentation](./neue-dokumentation.md)** – Beschreibung
   ```

### Dokumentations-Standards

- **Markdown**: Verwende Standard-Markdown
- **Diagramme**: Mermaid für Flowcharts
- **Code-Beispiele**: TypeScript mit Syntax-Highlighting
- **Struktur**: Klare Überschriften und Inhaltsverzeichnis

---

## 🎯 Roadmap

### Geplante Dokumentation

- [x] **Deployment-Guide** ✅
  - [x] Vercel Deployment
  - [x] Environment Variables
  - [x] Preview vs. Production
  - [x] Git Workflow
  
- [ ] **API-Dokumentation**
  - REST Endpoints
  - Authentication
  - Rate Limiting
  
- [ ] **Komponenten-Bibliothek**
  - UI-Komponenten
  - Props & Events
  - Beispiele
  
- [ ] **Entwickler-Handbuch**
  - Setup & Installation
  - Development Workflow
  - Testing
  - Code-Standards

---

*Letzte Aktualisierung: Oktober 2025*

