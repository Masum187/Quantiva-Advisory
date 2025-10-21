# Deployment Workflow: Preview vs. Production

## 📋 Übersicht

Dieses Projekt verwendet eine professionelle Branch-Strategie mit automatischen Preview- und Production-Deployments über Vercel.

```
develop (Preview) → Pull Request → main (Production)
```

---

## 🌳 Branch-Strategie

### `main` – Production Branch
- **Zweck:** Produktionsreife Releases
- **Deployment:** Automatisch auf `www.quantivaadvisory.com`
- **Schutz:** Nur via Pull Requests oder manueller Freigabe
- **Status:** Muss immer stabil und getestet sein

### `develop` – Preview/Staging Branch
- **Zweck:** Integration und Testing neuer Features
- **Deployment:** Automatisch auf `quantiva-advisory-37je.vercel.app`
- **Workflow:** Hier werden alle Feature-Branches gemerged
- **Status:** Darf experimentell sein, sollte aber lauffähig bleiben

### Feature Branches
- **Naming:** `feature/beschreibung`, `fix/bug-name`, `docs/thema`
- **Workflow:** Wird in `develop` gemerged, nie direkt in `main`
- **Deployment:** Optional eigene Preview-URLs via Pull Request

---

## 🚀 Vercel-Konfiguration

### 1. Git-Einstellungen

**Projekt → Settings → Git:**

```
✅ Production Branch: main
✅ Create Deploy Previews for all Pull Requests: ON
✅ Automatically Expose System Environment Variables: ON
⚠️  Protect Production Deployments: ON (empfohlen für Sicherheit)
```

### 2. Domain-Zuordnung

**Projekt → Settings → Domains:**

| Domain | Environment | Branch |
|--------|-------------|--------|
| `www.quantivaadvisory.com` | Production | `main` |
| `quantivaadvisory.com` | Production | `main` (Redirect zu www) |
| `quantiva-advisory-37je.vercel.app` | Preview | `develop` |
| `preview.quantivaadvisory.com` | Preview | `develop` (optional) |

#### Optional: Custom Preview Domain

Für eine schönere Preview-URL:

1. **IONOS DNS:** CNAME-Record erstellen:
   ```
   preview.quantivaadvisory.com → cname.vercel-dns.com
   ```

2. **Vercel:** Domain hinzufügen und auf `develop` Branch mappen

### 3. Environment Variables

**Projekt → Settings → Environment Variables:**

Variablen können auf unterschiedliche Environments beschränkt werden:

```
REACT_APP_API_URL
├─ Production: https://api.quantivaadvisory.com
└─ Preview:    https://api-staging.quantivaadvisory.com

REACT_APP_ANALYTICS_ID
├─ Production: G-XXXXXXXXXX
└─ Preview:    (leer oder Test-ID)
```

**Target-Optionen:**
- `Production` – Nur für `main` Branch
- `Preview` – Für alle anderen Branches
- `Development` – Nur für lokale Entwicklung

---

## 🔄 Workflow im Alltag

### Szenario 1: Neues Feature entwickeln

```bash
# 1. Entwickeln auf Feature Branch
git checkout develop
git pull origin develop
git checkout -b feature/neue-komponente

# 2. Änderungen committen
git add .
git commit -m "feat: neue Komponente hinzugefügt"
git push origin feature/neue-komponente

# 3. Pull Request erstellen
# GitHub: Create Pull Request von feature/neue-komponente → develop
# Vercel erstellt automatisch eine Preview-URL

# 4. Nach Review: Merge in develop
# Vercel deployed automatisch auf quantiva-advisory-37je.vercel.app

# 5. Testen auf Preview-URL
# Alles ok? → Pull Request von develop → main

# 6. Merge in main
# Vercel deployed automatisch auf www.quantivaadvisory.com
```

### Szenario 2: Hotfix direkt auf Production

```bash
# 1. Hotfix-Branch von main
git checkout main
git pull origin main
git checkout -b hotfix/kritischer-bug

# 2. Fix committen
git add .
git commit -m "fix: kritischer Bug behoben"
git push origin hotfix/kritischer-bug

# 3. Pull Request direkt nach main
# GitHub: Create Pull Request von hotfix/kritischer-bug → main
# Nach Merge: Sofortiger Production-Deploy

# 4. Zurück-Merge in develop
git checkout develop
git merge main
git push origin develop
```

### Szenario 3: Production-Deploy aus Preview

```bash
# Auf develop entwickelt und getestet
git checkout develop
git add .
git commit -m "feat: mehrere Features kombiniert"
git push origin develop

# Option A: Via Pull Request
# GitHub: Create Pull Request develop → main

# Option B: Direkt in Vercel Dashboard
# 1. Preview-Deployment öffnen
# 2. "Promote to Production" klicken
# 3. Bestätigen
```

---

## 📊 Deployment-Status überwachen

### Vercel Dashboard

**Projekt → Deployments:**

```
✅ Production  main     ca18684  www.quantivaadvisory.com
🔍 Preview     develop  761506f  quantiva-advisory-37je.vercel.app
⏳ Preview     PR #12   abc1234  quantiva-advisory-git-feature-xyz.vercel.app
```

### GitHub Actions (optional)

Status Badges in `README.md`:

```markdown
![Production](https://img.shields.io/github/deployments/Masum187/Quantiva-Advisory/production?label=production)
![Develop](https://img.shields.io/github/deployments/Masum187/Quantiva-Advisory/preview?label=preview)
```

---

## 🛡️ Best Practices

### ✅ DO's

- **Immer auf `develop` entwickeln**, nie direkt auf `main`
- **Pull Requests verwenden** für Code-Review und Dokumentation
- **Preview-URLs testen**, bevor auf Production gemerged wird
- **Semantic Commit Messages** verwenden (`feat:`, `fix:`, `docs:`)
- **Environment Variables** nach Target trennen

### ❌ DON'Ts

- **Nie direkt auf `main` pushen** (außer bei Hotfixes)
- **Keine Secrets in Git committen** (nur Environment Variables in Vercel)
- **Nicht ohne Testing mergen** (immer Preview prüfen)
- **Keine Force-Pushes auf `main` oder `develop`**
- **Nicht Production und Preview mischen** (klare Trennung)

---

## 🔧 Troubleshooting

### Problem: Preview deployed nicht automatisch

**Lösung:**
1. Vercel → Settings → Git → "Create Deploy Previews" aktivieren
2. Branch pushen und Pull Request öffnen

### Problem: Production deployed bei jedem Push

**Lösung:**
1. Prüfe, ob auf `main` Branch gepusht wird
2. Wechsle zu `develop`: `git checkout develop`
3. Aktiviere "Protect Production Deployments" in Vercel

### Problem: Environment Variables fehlen

**Lösung:**
1. Vercel → Settings → Environment Variables
2. Target auf richtiges Environment setzen (`Production` vs. `Preview`)
3. Redeploy triggern: `git commit --allow-empty -m "chore: redeploy"`

### Problem: Domain zeigt altes Deployment

**Lösung:**
1. Vercel → Domains → Domain-Zuordnung prüfen
2. Cache leeren: Deployment → ⋯ → "Clear Build Cache and Redeploy"
3. Browser-Cache leeren: Hard-Refresh (Cmd+Shift+R)

---

## 📚 Weiterführende Ressourcen

- [Vercel Git Integration](https://vercel.com/docs/concepts/git)
- [Branch Protection auf GitHub](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
- [Environment Variables Best Practices](https://vercel.com/docs/concepts/projects/environment-variables)
- [Semantic Versioning](https://semver.org/)

---

## 🎯 Checkliste: Initiales Setup

- [x] `develop` Branch erstellt und gepusht
- [ ] Vercel: Production Branch auf `main` gesetzt
- [ ] Vercel: Preview-Deployments aktiviert
- [ ] Vercel: Domain `www.quantivaadvisory.com` auf `main` gemapped
- [ ] Vercel: Domain `quantiva-advisory-37je.vercel.app` auf `develop` gemapped
- [ ] Optional: Custom Preview-Domain via IONOS CNAME eingerichtet
- [ ] Environment Variables nach Target getrennt
- [ ] GitHub: Branch-Protection-Rules für `main` aktiviert
- [ ] Team über neuen Workflow informiert

---

**Status:** 🟢 `develop` Branch eingerichtet, ready für Preview-Workflow!

**Nächster Schritt:** Vercel Dashboard konfigurieren (siehe Checkliste oben)




