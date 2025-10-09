# 🔄 GitHub Actions Workflows

## ✅ Aktive Workflows

### 1. **Build** (`build.yml`)
**Trigger:** Bei jedem Push  
**Status:** ✅ Aktiv

**Was es tut:**
- Installiert Dependencies
- Baut die React-App
- Generiert Sitemap
- Verifiziert Build-Output

---

### 2. **Deploy** (`deploy.yml`)
**Trigger:** Push zu `main` Branch  
**Status:** ✅ Aktiv

**Was es tut:**
- Baut Production-Version
- Deployment zu Vercel/Netlify/GitHub Pages
- (Deployment-Methode muss konfiguriert werden)

---

## ⏸️ Deaktivierte Workflows (Manual Trigger Only)

### 3. **Validate Cases** (`validate-cases.yml`)
**Trigger:** `workflow_dispatch` (manuell)  
**Status:** ⏸️ Temporär deaktiviert

**Warum deaktiviert:**
- Benötigt vollständiges Case-Data-System
- Validation-Scripts benötigen zusätzliche Dependencies
- Wird aktiviert, sobald Case-Management implementiert ist

**Reaktivieren:**
Entfernen Sie die Kommentare in `validate-cases.yml`:
```yaml
on:
  push:
    paths:
      - "src/data/cases.json"
  pull_request:
    paths:
      - "src/data/cases.json"
```

---

### 4. **Report Cases in PR** (`report-cases.yml`)
**Trigger:** `workflow_dispatch` (manuell)  
**Status:** ⏸️ Temporär deaktiviert

**Warum deaktiviert:**
- Benötigt Case-Reporting-System
- Generiert automatische PR-Kommentare mit Case-Statistiken
- Wird aktiviert, sobald Case-Management implementiert ist

**Reaktivieren:**
Entfernen Sie die Kommentare in `report-cases.yml`:
```yaml
on:
  pull_request:
    branches: [ main, master ]
```

---

## 🚀 Manuell triggern

Deaktivierte Workflows können manuell ausgeführt werden:

1. Gehen Sie zu: https://github.com/Masum187/Quantiva-Advisory/actions
2. Wählen Sie den Workflow
3. Klicken Sie auf **"Run workflow"**
4. Wählen Sie den Branch
5. Klicken Sie auf **"Run workflow"**

---

## 📋 Workflow-Übersicht

| Workflow | Status | Trigger | Zweck |
|----------|--------|---------|-------|
| **Build** | ✅ Aktiv | Push | Build-Verifizierung |
| **Deploy** | ✅ Aktiv | Push zu `main` | Production-Deployment |
| **Validate Cases** | ⏸️ Deaktiviert | Manuell | Case-Daten validieren |
| **Report Cases** | ⏸️ Deaktiviert | Manuell | Case-Berichte in PRs |

---

## 🔧 Benötigte Setup-Schritte für Case-Workflows

### Für `validate-cases.yml`:

1. **Dependencies installieren:**
   ```bash
   npm install ajv
   ```

2. **Case-Data erstellen:**
   ```bash
   # Erstellen Sie src/data/cases.json mit validen Daten
   ```

3. **Validation-Script prüfen:**
   ```bash
   npm run validate:cases
   ```

4. **Workflow reaktivieren:**
   - Entfernen Sie Kommentare in `validate-cases.yml`

---

### Für `report-cases.yml`:

1. **Dependencies installieren:**
   ```bash
   npm install ajv cli-table3 chalk
   ```

2. **Reporting-Script prüfen:**
   ```bash
   npm run report:cases
   ```

3. **Workflow reaktivieren:**
   - Entfernen Sie Kommentare in `report-cases.yml`

---

## 📊 Workflow-Status prüfen

**GitHub Actions Dashboard:**
```
https://github.com/Masum187/Quantiva-Advisory/actions
```

**Badge für README:**
```markdown
![Build](https://github.com/Masum187/Quantiva-Advisory/actions/workflows/build.yml/badge.svg)
![Deploy](https://github.com/Masum187/Quantiva-Advisory/actions/workflows/deploy.yml/badge.svg)
```

---

## 🎯 Empfehlungen

**Für Production:**
1. ✅ Behalten Sie Build & Deploy aktiv
2. ⏸️ Aktivieren Sie Case-Workflows später bei Bedarf
3. 🔔 Konfigurieren Sie Benachrichtigungen für fehlgeschlagene Builds

**Für Development:**
1. Testen Sie Workflows lokal vor dem Push
2. Verwenden Sie `workflow_dispatch` für Tests
3. Prüfen Sie Logs bei Fehlern

---

## 🐛 Troubleshooting

### Workflow schlägt fehl

**1. Dependencies fehlen:**
```bash
npm ci
npm run build
```

**2. Script-Fehler:**
```bash
# Prüfen Sie package.json scripts
npm run validate:cases
npm run report:cases
```

**3. Permissions:**
- Prüfen Sie Repository Settings → Actions → Permissions
- Stellen Sie sicher, dass Workflows Schreibrechte haben

---

## 📚 Weitere Ressourcen

- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **Workflow Syntax:** https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions
- **Vercel Deployment:** https://vercel.com/docs/concepts/git/vercel-for-github

---

**Erstellt:** Oktober 2025  
**Status:** Workflows optimiert für aktuelles Setup  
**Nächste Schritte:** Case-Management-System implementieren, dann Workflows reaktivieren
