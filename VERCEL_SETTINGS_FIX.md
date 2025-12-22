# 🔧 Vercel Settings Synchronisieren - Schritt-für-Schritt

## Problem
"Configuration Settings in the current Production deployment differ from your current Project Settings."

## ✅ Lösung: Settings im Vercel Dashboard anpassen

### Schritt 1: Öffne dein Vercel Projekt

**Direkter Link zu den Settings:**
```
https://vercel.com/masum187s-projects/quantiva-website/settings
```

Oder manuell:
1. Gehe zu: https://vercel.com/dashboard
2. Klicke auf dein Projekt: **quantiva-website**
3. Klicke auf **Settings** (oben im Menü)

---

### Schritt 2: Gehe zu "Build & Development Settings"

1. Im Settings-Menü links: Klicke auf **"Build & Development Settings"**
2. Oder direkter Link:
   ```
   https://vercel.com/masum187s-projects/quantiva-website/settings/general
   ```

---

### Schritt 3: Passe die Settings an

**WICHTIG: Diese Einstellungen müssen exakt so sein:**

#### Framework Preset
```
✅ Next.js
```
(Dropdown: Wähle "Next.js")

#### Build Command
```
✅ LEER LASSEN
```
(Entferne alles, lass das Feld leer - Vercel erkennt Next.js automatisch)

#### Output Directory
```
✅ LEER LASSEN
```
(Entferne alles, lass das Feld leer - Vercel verwendet automatisch `.next`)

#### Install Command
```
✅ npm ci --legacy-peer-deps
```
(Das sollte bereits so sein)

#### Node.js Version
```
✅ 22.x
```
(Sollte automatisch aus `package.json` kommen, da dort `"engines": { "node": "^22.0.0" }` steht)

---

### Schritt 4: Speichern

1. Scrolle nach unten
2. Klicke auf **"Save"** (oder **"Save Changes"**)

---

### Schritt 5: Redeploy

Nach dem Speichern:

1. Gehe zu **"Deployments"** (oben im Menü)
2. Klicke auf das neueste Deployment
3. Klicke auf **"Redeploy"** (drei Punkte → Redeploy)
4. Warte, bis das Deployment fertig ist

---

## 📋 Checkliste

- [ ] Framework Preset: **Next.js**
- [ ] Build Command: **LEER**
- [ ] Output Directory: **LEER**
- [ ] Install Command: **npm ci --legacy-peer-deps**
- [ ] Node.js Version: **22.x** (automatisch)
- [ ] **Save** geklickt
- [ ] **Redeploy** durchgeführt

---

## 🎯 Erwartetes Ergebnis

Nach dem Redeploy sollte:
- ✅ Die Warnung verschwinden
- ✅ Das Deployment erfolgreich sein
- ✅ Kein `routes-manifest.json` Fehler mehr auftreten

---

## 🔍 Falls du die Settings nicht findest

**Alternative Wege:**

1. **Über das Projekt-Dashboard:**
   - https://vercel.com/dashboard
   - Klicke auf **quantiva-website**
   - Klicke auf **Settings** (oben)
   - Klicke auf **General** (links)
   - Scrolle zu **"Build & Development Settings"**

2. **Über die URL direkt:**
   ```
   https://vercel.com/masum187s-projects/quantiva-website/settings/general
   ```

3. **Falls du mehrere Projekte hast:**
   - Suche nach: **quantiva-website** oder **quantiva-advisory**
   - Project ID: `prj_EqfXhSVzIQf9d5VmowWYYHM5qPcx`

---

## ⚠️ Wichtig

- **Output Directory** MUSS leer sein (nicht `build`, nicht `.next`)
- **Build Command** MUSS leer sein (Vercel erkennt Next.js automatisch)
- Nach Änderungen IMMER **Redeploy** durchführen

---

## 📞 Falls es nicht funktioniert

1. Prüfe die Build Logs im neuesten Deployment
2. Kontaktiere Vercel Support: https://vercel.com/support
3. Oder erstelle ein neues Issue im GitHub Repository

