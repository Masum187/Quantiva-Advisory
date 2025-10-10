# 🚀 Vercel Deployment - Anleitung

## ✅ **Problem behoben!**

**Fehler:**
```
Cannot find module '@vercel/node'
builder.build is not a function
```

**Ursache:**
- `vercel.json` wollte API-Routes bauen (`api/create-pr.ts`, `api/upload.ts`)
- Dependencies `@vercel/node` und `@vercel/edge` fehlten

**Lösung:**
- API-Routes aus Build-Konfiguration entfernt
- Nur static React-App wird gebaut
- API-Routes können später hinzugefügt werden

---

## 🚀 **Deployment auf Vercel**

### **Schritt 1: Vercel öffnen**

**URL:** https://vercel.com/new

### **Schritt 2: Repository importieren**

1. Login mit GitHub
2. Suchen Sie: `Masum187/Quantiva-Advisory`
3. Klicken Sie auf **"Import"**

### **Schritt 3: Projekt konfigurieren**

**Vercel erkennt automatisch:**
- ✅ Framework: `Create React App`
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `build`
- ✅ Install Command: `npm ci`

**Keine Änderungen nötig!** Einfach auf **"Deploy"** klicken.

### **Schritt 4: Deployment**

**Vercel baut jetzt:**
```
✓ Installing dependencies (npm ci)
✓ Building (npm run build)
✓ Generating sitemap
✓ Optimizing
✓ Deploying to CDN
```

**Dauer:** ~2-3 Minuten

### **Schritt 5: Live!** 🎉

**Production URL:**
```
https://quantiva-advisory.vercel.app
```

Oder custom domain später hinzufügen.

---

## 📋 **Aktuelle Vercel-Konfiguration**

**`vercel.json`:**
```json
{
  "version": 2,
  "framework": "create-react-app",
  "builds": [
    { "src": "package.json", "use": "@vercel/static-build" }
  ],
  "installCommand": "npm ci",
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "rewrites": [
    { "source": "/(de|en)(/.*)?", "destination": "/index.html" },
    { "source": "/cases", "destination": "/index.html" },
    { "source": "/cases/(.*)", "destination": "/index.html" }
  ],
  "cleanUrls": true,
  "trailingSlash": false
}
```

**Features:**
- ✅ Static Build für React
- ✅ SPA Routing (rewrites zu index.html)
- ✅ i18n URLs (`/de/`, `/en/`)
- ✅ Clean URLs
- ✅ Security Headers
- ✅ Cache-Control für Assets

---

## 🔧 **Optional: API-Routes später hinzufügen**

Wenn Sie später API-Funktionen benötigen:

### **1. Dependencies installieren**

```bash
npm install @vercel/node @octokit/rest
```

### **2. vercel.json erweitern**

```json
{
  "builds": [
    { "src": "package.json", "use": "@vercel/static-build" },
    { "src": "api/*.ts", "use": "@vercel/node" }
  ]
}
```

### **3. Environment Variables setzen**

In Vercel Dashboard → Settings → Environment Variables:
```
GITHUB_TOKEN=ghp_...
GITHUB_OWNER=Masum187
GITHUB_REPO=Quantiva-Advisory
GITHUB_BASE_BRANCH=main
```

---

## 🎯 **Nach dem Deployment**

### **Automatische Deployments**

Vercel deployt automatisch bei:
- ✅ Push zu `main` → Production Deployment
- ✅ Push zu anderen Branches → Preview Deployment
- ✅ Pull Requests → Preview URL im PR-Kommentar

### **Custom Domain hinzufügen**

1. Vercel Dashboard → Projekt → Settings → Domains
2. Domain hinzufügen: `quantivaadvisory.com`
3. DNS-Einträge konfigurieren (Vercel zeigt diese an)
4. Fertig! ✅

### **Environment Variables**

Für Production:
```
NODE_ENV=production
REACT_APP_API_URL=https://api.quantivaadvisory.com
```

### **Analytics aktivieren**

Vercel Dashboard → Projekt → Analytics → Enable

Sehen Sie:
- 📊 Visitor-Statistiken
- ⚡ Performance-Metriken
- 🌍 Geo-Verteilung

---

## 📊 **Was Vercel automatisch macht**

| Feature | Status |
|---------|--------|
| **HTTPS/SSL** | ✅ Automatisch |
| **Global CDN** | ✅ Aktiviert |
| **Gzip/Brotli** | ✅ Komprimierung |
| **Image Optimization** | ✅ (für Next.js Images) |
| **Analytics** | ✅ Verfügbar |
| **Build Caching** | ✅ Schnellere Builds |
| **Preview Deployments** | ✅ Für jeden PR |

---

## 🐛 **Troubleshooting**

### **Build schlägt fehl**

**1. Dependencies fehlen:**
```bash
# Lokal testen
npm ci
npm run build
```

**2. Build-Logs prüfen:**
Vercel Dashboard → Deployments → [neuester] → Build Logs

**3. Environment Variables:**
Stellen Sie sicher, dass alle benötigten Variablen gesetzt sind.

### **Routing funktioniert nicht**

**Problem:** 404 bei `/de/` oder `/cases/slug`

**Lösung:**
- ✅ `rewrites` in `vercel.json` konfiguriert (bereits erledigt)
- Alle SPA-Routes werden zu `index.html` geroutet

### **Assets werden nicht geladen**

**Problem:** CSS/JS 404

**Lösung:**
- Prüfen Sie `outputDirectory` in `vercel.json` → `build`
- Stellen Sie sicher, dass `npm run build` lokal funktioniert

---

## ✅ **Checkliste**

**Vor dem Deployment:**
- [x] Git Email korrekt gesetzt (`Masum187@users.noreply.github.com`)
- [x] `vercel.json` vereinfacht (nur static build)
- [x] Code zu GitHub gepusht
- [x] Lokaler Build funktioniert (`npm run build`)

**Deployment:**
- [ ] Vercel-Account erstellt
- [ ] Mit GitHub verbunden
- [ ] Repository importiert
- [ ] Deployment erfolgreich
- [ ] Production-URL funktioniert

**Nach dem Deployment:**
- [ ] Alle Routes testen (`/`, `/de/`, `/en/`, `/cases`)
- [ ] GitHub Actions aktiviert (Auto-Deploy)
- [ ] Custom Domain konfiguriert (optional)
- [ ] Analytics aktiviert (optional)

---

## 🔗 **Wichtige Links**

| Ressource | URL |
|-----------|-----|
| **Vercel Dashboard** | https://vercel.com/dashboard |
| **Neues Projekt** | https://vercel.com/new |
| **Vercel Docs** | https://vercel.com/docs |
| **GitHub Repo** | https://github.com/Masum187/Quantiva-Advisory |

---

## 🎊 **Nächste Schritte**

1. **Öffnen Sie:** https://vercel.com/new
2. **Import:** `Masum187/Quantiva-Advisory`
3. **Deploy:** Klicken Sie auf "Deploy"
4. **Warten:** ~2-3 Minuten
5. **Live!** 🚀

**Der Build-Fehler ist behoben. Deployment sollte jetzt funktionieren!** ✅

---

**Status:** ✅ Ready for Deployment  
**Commit:** `45a577e` - Fix Vercel build configuration  
**Erstellt:** Oktober 2025


