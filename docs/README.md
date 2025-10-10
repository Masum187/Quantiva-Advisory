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

### Weitere Dokumentation

*(Platzhalter für zukünftige Dokumentation)*

- **API-Dokumentation** – REST API Endpoints
- **Komponenten-Bibliothek** – UI-Komponenten
- **Deployment-Guide** – Production Deployment
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
├── README.md              # Diese Datei
├── cms-workflow.md        # Workflow & Berechtigungen
├── api/                   # API-Dokumentation (geplant)
├── components/            # Komponenten-Docs (geplant)
└── deployment/            # Deployment-Guides (geplant)
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

