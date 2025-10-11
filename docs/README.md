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

### Media & Assets

#### Suno Music Integration
- **[Cloudinary Setup für Suno-Musik](../CLOUDINARY_SETUP.md)** ☁️ – CDN-Integration (Empfohlen)
  - Account erstellen & konfigurieren
  - Tracks hochladen & verwalten
  - URLs generieren & optimieren
  - Environment Variables Setup
  - Best Practices & Troubleshooting
- **[Suno Music Setup – Lokale Dateien](../SUNO_MUSIC_SETUP.md)** 🎵 – Alternative für Quick Start
  - Tracks von Suno herunterladen
  - Lokale Integration in public/audio
  - Playlist-Konfiguration

#### Environment Variables
- **[Environment Variables Guide](../ENV_VARIABLES.md)** 🔐 – Alle Umgebungsvariablen
  - REACT_APP_CLOUDINARY_CLOUD_NAME (Cloudinary CDN)
  - REACT_APP_ELEVENLABS_KEY (AI Voice für Career Page)
  - Setup für lokal & Vercel
  - Sicherheits-Best-Practices

### Weitere Dokumentation

*(Platzhalter für zukünftige Dokumentation)*

- **API-Dokumentation** – REST API Endpoints
- **Komponenten-Bibliothek** – UI-Komponenten
- **Entwickler-Handbuch** – Setup & Development

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
├── MDX_DECISION_QUICKSTART.md     # ⚡ MDX vs. Alternativen (Quick)
├── MDX_ALTERNATIVES_GUIDE.md      # 📚 MDX vs. Alternativen (Vollständig)
├── VITE_MDX_INTEGRATION.md        # 🔧 Vite & MDX Integration (Technisch)
├── MDX_SETUP_CRA.md               # MDX Setup für CRA (aktuell)
├── MDX_FUTURE_SETUP.md            # MDX Migration für Zukunft
├── GIT_SETUP.md                   # Git Repository Setup
├── MERMAID_INTEGRATION_GUIDE.md   # Mermaid-Diagramme
├── api/                           # API-Dokumentation (geplant)
├── components/                    # Komponenten-Docs (geplant)
└── deployment/                    # Deployment-Guides (geplant)
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

- [ ] **API-Dokumentation**
  - REST Endpoints
  - Authentication
  - Rate Limiting
  
- [ ] **Komponenten-Bibliothek**
  - UI-Komponenten
  - Props & Events
  - Beispiele
  
- [ ] **Deployment-Guide**
  - Vercel Deployment
  - Environment Variables
  - CI/CD Pipeline
  
- [ ] **Entwickler-Handbuch**
  - Setup & Installation
  - Development Workflow
  - Testing
  - Code-Standards

---

*Letzte Aktualisierung: Oktober 2025*

