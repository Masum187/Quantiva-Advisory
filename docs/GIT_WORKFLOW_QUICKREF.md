# Git Workflow: Quick Reference

## 🚀 Tägliche Workflows (Copy & Paste)

### 🎯 Neues Feature entwickeln

```bash
# 1. Auf develop wechseln und updaten
git checkout develop
git pull origin develop

# 2. Feature-Branch erstellen
git checkout -b feature/mein-feature

# 3. Entwickeln und committen
git add .
git commit -m "feat: neue Funktion hinzugefügt"

# 4. Pushen
git push origin feature/mein-feature

# 5. Pull Request erstellen
# → GitHub: Create Pull Request von feature/mein-feature → develop

# 6. Nach Merge: Branch löschen (optional)
git checkout develop
git pull origin develop
git branch -d feature/mein-feature
```

---

### 🔥 Hotfix für Production

```bash
# 1. Von main abzweigen
git checkout main
git pull origin main
git checkout -b hotfix/kritischer-bug

# 2. Fix durchführen
git add .
git commit -m "fix: kritischer Bug behoben"

# 3. Direkt nach main mergen
git push origin hotfix/kritischer-bug
# → GitHub: Create Pull Request von hotfix/kritischer-bug → main

# 4. Zurück nach develop mergen
git checkout develop
git merge main
git push origin develop

# 5. Branch aufräumen
git branch -d hotfix/kritischer-bug
```

---

### 📦 Von develop nach Production deployen

```bash
# 1. Sicherstellen, dass develop aktuell ist
git checkout develop
git pull origin develop

# 2. Merge nach main (via PR oder direkt)
git checkout main
git pull origin main
git merge develop
git push origin main

# Alternativ: Via GitHub Pull Request
# → GitHub: Create Pull Request von develop → main
```

---

### ♻️ Branch aufräumen

```bash
# Lokale Branches anzeigen
git branch

# Lokalen Branch löschen
git branch -d feature/alter-branch

# Remote-Branch löschen
git push origin --delete feature/alter-branch

# Alle gelöschten Remote-Branches lokal aufräumen
git fetch --prune
```

---

## 📝 Commit-Message-Konventionen

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Beschreibung | Beispiel |
|------|-------------|----------|
| `feat` | Neue Funktion | `feat: add user authentication` |
| `fix` | Bugfix | `fix: resolve login redirect issue` |
| `docs` | Dokumentation | `docs: update deployment guide` |
| `style` | Code-Formatierung (kein Logic-Change) | `style: format components with prettier` |
| `refactor` | Code-Umstrukturierung | `refactor: extract auth logic to hook` |
| `test` | Tests hinzufügen/ändern | `test: add unit tests for api client` |
| `chore` | Build/Config-Änderungen | `chore: update dependencies` |
| `perf` | Performance-Optimierung | `perf: optimize image loading` |

### Beispiele

```bash
# Einfach
git commit -m "feat: add dark mode toggle"

# Mit Scope
git commit -m "fix(auth): resolve token expiry handling"

# Mit Body
git commit -m "feat: add user profile page

- Add profile component
- Implement edit functionality
- Add avatar upload"

# Mit Breaking Change
git commit -m "feat!: migrate to new API

BREAKING CHANGE: API endpoints have changed from /api/v1 to /api/v2"
```

---

## 🌳 Branch-Naming-Konventionen

### Pattern

```
<type>/<short-description>
```

### Beispiele

```
feature/user-authentication
feature/dark-mode
fix/login-redirect
fix/mobile-navigation
docs/deployment-guide
refactor/api-client
chore/update-dependencies
```

---

## 🔍 Nützliche Git-Befehle

### Status & Logs

```bash
# Aktueller Status
git status

# Letzte 5 Commits
git log --oneline -5

# Graphische Darstellung aller Branches
git log --oneline --graph --all

# Änderungen seit letztem Commit
git diff

# Änderungen einer bestimmten Datei
git diff src/App.tsx
```

### Branches

```bash
# Alle Branches anzeigen (lokal + remote)
git branch -a

# Aktuellen Branch anzeigen
git branch --show-current

# Branch wechseln
git checkout develop

# Branch erstellen und wechseln
git checkout -b feature/neue-funktion

# Branch umbenennen
git branch -m alter-name neuer-name
```

### Synchronisation

```bash
# Neueste Änderungen holen (ohne merge)
git fetch origin

# Neueste Änderungen holen und mergen
git pull origin develop

# Lokale Änderungen pushen
git push origin feature/mein-feature

# Force Push (NUR für eigene Feature-Branches!)
git push --force-with-lease origin feature/mein-branch
```

### Undo/Revert

```bash
# Letzte Datei-Änderung rückgängig (vor commit)
git checkout -- src/App.tsx

# Alle Änderungen rückgängig (vor commit)
git reset --hard

# Letzten Commit rückgängig (behält Änderungen)
git reset --soft HEAD~1

# Letzten Commit komplett löschen
git reset --hard HEAD~1

# Einen Commit revertieren (erstellt neuen Commit)
git revert <commit-hash>
```

### Stashing (Änderungen zwischenspeichern)

```bash
# Änderungen temporär speichern
git stash

# Mit Nachricht
git stash save "Work in progress on feature X"

# Gespeicherte Änderungen anzeigen
git stash list

# Neueste Änderungen wiederherstellen
git stash pop

# Bestimmten Stash wiederherstellen
git stash apply stash@{1}

# Stash löschen
git stash drop stash@{0}
```

---

## 🚨 Häufige Probleme & Lösungen

### Problem: Merge-Konflikt

```bash
# 1. Dateien mit Konflikt anzeigen
git status

# 2. Konflikt manuell in Editor lösen
# Suche nach: <<<<<<<, =======, >>>>>>>

# 3. Datei als resolved markieren
git add src/conflicted-file.tsx

# 4. Merge abschließen
git commit

# Alternative: Merge abbrechen
git merge --abort
```

### Problem: Falscher Branch

```bash
# Änderungen in anderen Branch verschieben
git stash
git checkout richtiger-branch
git stash pop
```

### Problem: Commit im falschen Branch

```bash
# Wenn noch nicht gepusht:
# 1. Commit rückgängig machen (behält Änderungen)
git reset --soft HEAD~1

# 2. Zum richtigen Branch wechseln
git checkout richtiger-branch

# 3. Erneut committen
git add .
git commit -m "..."
```

### Problem: Versehentlich auf main gepusht

```bash
# ⚠️ NUR wenn noch niemand gepullt hat!

# 1. Lokalen Commit rückgängig
git reset --hard HEAD~1

# 2. Force Push (GEFÄHRLICH!)
# Besser: Mit Team abklären und manuell fixen!
```

---

## 📊 Branch-Übersicht

```
main (Production)
├─ hotfix/* → direkt nach main
│
develop (Preview)
├─ feature/*
├─ fix/*
├─ refactor/*
└─ docs/*
```

---

## ✅ Pre-Push Checklist

Vor jedem Push:

```
[ ] Code läuft lokal ohne Fehler: npm start
[ ] Build funktioniert: npm run build
[ ] Alle Tests bestanden: npm test (falls vorhanden)
[ ] Linter-Fehler behoben: npm run lint (falls vorhanden)
[ ] Commit-Message ist aussagekräftig
[ ] Richtiger Branch ausgewählt
[ ] Keine Secrets/Passwörter im Code
[ ] .gitignore ist aktuell
```

---

## 🔗 Weiterführende Infos

- **Workflow-Details:** `/docs/DEPLOYMENT_WORKFLOW.md`
- **Vercel-Setup:** `/docs/VERCEL_SETUP_GUIDE.md`
- **Git-Docs:** https://git-scm.com/doc

---

**Quick Tip:** Erstelle Git-Aliase für häufige Befehle:

```bash
# In ~/.gitconfig oder via Terminal
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --all"

# Dann kannst du verwenden:
git co develop
git st
git lg
```






