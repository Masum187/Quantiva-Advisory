# Google Analytics Setup Guide

## Problem: "Datenerhebung ist nicht aktiv"

Wenn Google Analytics meldet, dass die Datenerhebung nicht aktiv ist, liegt das meist an einer fehlenden Environment Variable oder einem fehlenden Deployment.

---

## ✅ Lösung: Environment Variable setzen

### Schritt 1: Vercel Dashboard

1. Gehe zu: https://vercel.com/dashboard
2. Wähle dein Projekt: **quantiva-Advisory**
3. Gehe zu: **Settings** → **Environment Variables**
4. Klicke auf: **Add New**

### Schritt 2: Variable hinzufügen

**Variable 1: Google Analytics ID**
- **Name:** `NEXT_PUBLIC_GA_ID`
- **Value:** `G-MSHTJ0J8EW`
- **Environment:** ✅ Production, ✅ Preview, ✅ Development
- Klicke **Save**

**Variable 2: Site URL (falls noch nicht gesetzt)**
- **Name:** `NEXT_PUBLIC_SITE_URL`
- **Value:** `https://quantivaadvisory.com`
- **Environment:** ✅ Production, ✅ Preview, ✅ Development
- Klicke **Save**

### Schritt 3: Redeploy

**WICHTIG:** Nach dem Setzen der Variablen muss die Website neu deployed werden!

1. Gehe zu: **Deployments**
2. Klicke auf das **"..."** Menü beim neuesten Deployment
3. Wähle: **Redeploy**
4. Warte bis das Deployment fertig ist (ca. 2-3 Minuten)

---

## 🧪 Testing: Tag-Verification

### Option A: Temporär Force-Load (für Google's Test-Tool)

**Nur für Testing!** Setze temporär:

**Variable 3: Force Load (temporär)**
- **Name:** `NEXT_PUBLIC_GA_FORCE_LOAD`
- **Value:** `true`
- **Environment:** ✅ Production (nur temporär!)
- Klicke **Save**
- **Redeploy**

**Nach dem Test:**
- Variable wieder löschen oder auf `false` setzen
- **Redeploy**

### Option B: Manuell testen (empfohlen)

1. Öffne: https://quantivaadvisory.com
2. Klicke im Cookie-Banner: **"Alles akzeptieren"**
3. Öffne Browser DevTools (F12)
4. Gehe zu: **Network** Tab
5. Suche nach: `gtag/js?id=G-MSHTJ0J8EW`
6. Wenn der Request erscheint → ✅ Tag ist aktiv!

### Option C: Google Analytics Real-Time

1. Öffne: https://analytics.google.com
2. Gehe zu: **Reports** → **Real-time**
3. Besuche: https://quantivaadvisory.com
4. Klicke: **"Alles akzeptieren"** im Cookie-Banner
5. In Real-time sollte dein Besuch erscheinen (nach 10-30 Sekunden)

---

## 🔍 Troubleshooting

### Problem: Tag wird nicht geladen

**Prüfe:**
1. ✅ Ist `NEXT_PUBLIC_GA_ID` in Vercel gesetzt?
2. ✅ Wurde nach dem Setzen **Redeploy** gemacht?
3. ✅ Wurde im Cookie-Banner **"Alles akzeptieren"** geklickt?
4. ✅ Ist die Variable in allen Environments gesetzt (Production, Preview, Development)?

### Problem: Tag wird geladen, aber keine Daten

**Mögliche Ursachen:**
- ⏱️ Google Analytics braucht bis zu 48 Stunden für die erste Datenerhebung
- 🔒 Browser-Blocker (AdBlock, Privacy Badger) blockiert Analytics
- 🍪 Cookie-Banner wurde nicht akzeptiert
- 🌐 Falsche Domain in Google Analytics konfiguriert

**Lösung:**
1. Warte 24-48 Stunden
2. Teste in Incognito-Modus (ohne Browser-Erweiterungen)
3. Prüfe Real-time Reports (dort sollten Daten sofort erscheinen)

### Problem: "Tag nicht gefunden" in Google's Test-Tool

**Ursache:** Der Tag wird nur nach Consent geladen, Google's Test-Tool kann das nicht simulieren.

**Lösung:**
1. Setze temporär `NEXT_PUBLIC_GA_FORCE_LOAD=true`
2. Redeploy
3. Führe Google's Test-Tool aus
4. Entferne `NEXT_PUBLIC_GA_FORCE_LOAD` wieder
5. Redeploy

---

## 📋 Checkliste

- [ ] `NEXT_PUBLIC_GA_ID=G-MSHTJ0J8EW` in Vercel gesetzt
- [ ] `NEXT_PUBLIC_SITE_URL=https://quantivaadvisory.com` in Vercel gesetzt
- [ ] Nach dem Setzen **Redeploy** gemacht
- [ ] Cookie-Banner funktioniert (erscheint beim ersten Besuch)
- [ ] Tag wird geladen (DevTools → Network → `gtag/js`)
- [ ] Real-time Reports zeigen Daten (nach Cookie-Akzeptanz)

---

## 🔐 Datenschutz-Hinweis

**Wichtig:** Der Google Analytics Tag wird **nur** geladen, wenn:
- Der Nutzer im Cookie-Banner **"Alles akzeptieren"** klickt
- Oder `NEXT_PUBLIC_GA_FORCE_LOAD=true` gesetzt ist (nur für Testing!)

Dies ist **DSGVO-konform** und entspricht den Anforderungen für EU-Websites.

---

## 📚 Weitere Ressourcen

- [Google Analytics 4 Setup](https://support.google.com/analytics/answer/9304153)
- [Google Tag Assistant](https://tagassistant.google.com/)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)

