# 🚀 Vercel Deployment - Next.js Anleitung

## ✅ **Next.js Deployment auf Vercel**

**Framework:** Next.js 15 mit App Router  
**Status:** Production Ready ✅

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
- ✅ Framework: `Next.js`
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm ci`
- ✅ Node.js Version: `20`

**Keine Änderungen nötig!** Einfach auf **"Deploy"** klicken.

### **Schritt 4: Deployment**

**Vercel baut jetzt:**
```
✓ Installing dependencies (npm ci)
✓ Building Next.js app (npm run build)
✓ Generating sitemap
✓ Optimizing images
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
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm ci",
  "rewrites": [
    { "source": "/(de|en)(/.*)?", "destination": "/$1$2" },
    { "source": "/cases", "destination": "/cases" },
    { "source": "/cases/(.*)", "destination": "/cases/$1" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ],
  "cleanUrls": true,
  "trailingSlash": false
}
```

**Features:**
- ✅ Next.js App Router
- ✅ Serverless API Routes
- ✅ i18n URLs (`/de/`, `/en/`)
- ✅ Clean URLs
- ✅ Security Headers
- ✅ Image Optimization
- ✅ Automatic Sitemap Generation

---

## 🔧 **API-Routes bereits verfügbar**

Next.js API-Routes funktionieren automatisch:

### **Verfügbare Endpoints:**
- `POST /api/contact` - Contact form
- `POST /api/ai-test` - AI testing
- `POST /api/video-generation` - Video generation

### **Environment Variables:**

In Vercel Dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_BASE_URL=https://quantivaadvisory.com
CONTACT_EMAIL=info@quantivaadvisory.com
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
NEXT_PUBLIC_BASE_URL=https://quantivaadvisory.com
CONTACT_EMAIL=info@quantivaadvisory.com
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
| **Image Optimization** | ✅ Next.js Images |
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
- ✅ Next.js App Router handled routing automatisch
- ✅ `rewrites` in `vercel.json` für Fallback
- ✅ Alle Routes funktionieren out-of-the-box

### **Assets werden nicht geladen**

**Problem:** CSS/JS 404

**Lösung:**
- Prüfen Sie `outputDirectory` in `vercel.json` → `.next`
- Stellen Sie sicher, dass `npm run build` lokal funktioniert
- Next.js optimiert Assets automatisch

---

## ✅ **Checkliste**

**Vor dem Deployment:**
- [x] Git Email korrekt gesetzt (`Masum187@users.noreply.github.com`)
- [x] `vercel.json` für Next.js konfiguriert
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

**Next.js Deployment ist bereit!** ✅

---

**Status:** ✅ Ready for Next.js Deployment  
**Framework:** Next.js 15 App Router  
**Erstellt:** Oktober 2025