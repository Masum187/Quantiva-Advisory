# 🔐 Environment Variables Guide

## Alle Environment Variables für Quantiva Website

---

## 📋 **Aktuell verwendete Variablen**

### 1. **NEXT_PUBLIC_SITE_URL**
- **Zweck:** Base URL der Website für hreflang-Metadaten und Canonical URLs
- **Wo verwendet:** Alle Seiten mit Metadata (legal, cases, career, etc.)
- **Beispiel:** `https://quantivaadvisory.com`
- **Erforderlich:** Ja (für SEO)

### 2. **NEXT_PUBLIC_SENTRY_DSN**
- **Zweck:** Sentry DSN für Error Tracking
- **Wo verwendet:** `sentry.client.config.ts`, `sentry.server.config.ts`, `sentry.edge.config.ts`
- **Beispiel:** `https://xxx@sentry.io/xxx`
- **Erforderlich:** Optional (für Production Error Monitoring)

### 3. **NEXT_PUBLIC_GA_ID**
- **Zweck:** Google Analytics 4 Measurement ID
- **Wo verwendet:** `app/components/AnalyticsGate.tsx`
- **Beispiel:** `G-MSHTJ0J8EW`
- **Erforderlich:** Optional (nur wenn Google Analytics verwendet werden soll)
- **Hinweis:** Wird nur geladen, wenn Nutzer "Alles akzeptieren" im Cookie-Banner wählt

### 4. **NEXT_PUBLIC_PLAUSIBLE_DOMAIN**
- **Zweck:** Plausible Analytics Domain (Alternative zu Google Analytics)
- **Wo verwendet:** `app/components/AnalyticsGate.tsx`
- **Beispiel:** `quantivaadvisory.com`
- **Erforderlich:** Optional (nur wenn Plausible verwendet werden soll)

### 5. **REACT_APP_CLOUDINARY_CLOUD_NAME**
- **Zweck:** Cloudinary Cloud Name für Suno-Musik CDN
- **Wo verwendet:** `src/pages/TeamPage.tsx`
- **Beispiel:** `quantiva-advisory`
- **Erforderlich:** Ja (für Team-Seite Hintergrundmusik)

### 6. **REACT_APP_ELEVENLABS_KEY**
- **Zweck:** ElevenLabs API Key für Premium AI Voice
- **Wo verwendet:** `src/pages/CareerPage.tsx`
- **Beispiel:** `sk_abc123...`
- **Erforderlich:** Optional (fallback auf Browser TTS)

---

## 🔧 **Setup**

### **Lokal (.env.local)**

Erstellen Sie die Datei:
```bash
/Users/herijeanmasum/Developer/quantiva-website/.env.local
```

Fügen Sie hinzu:
```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://quantivaadvisory.com

# Error Tracking (Sentry)
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx

# Analytics (nur eine davon aktivieren)
NEXT_PUBLIC_GA_ID=G-MSHTJ0J8EW
# NEXT_PUBLIC_PLAUSIBLE_DOMAIN=quantivaadvisory.com

# Cloudinary Configuration
REACT_APP_CLOUDINARY_CLOUD_NAME=ihr_cloud_name

# ElevenLabs API Key
REACT_APP_ELEVENLABS_KEY=sk_your_api_key_here
```

**Wichtig:** `.env.local` ist in `.gitignore` und wird **nicht** committed!

---

### **Vercel (Production)**

#### Methode 1: Dashboard UI

1. Gehen Sie zu: https://vercel.com/masum187s-projects/quantiva-advisory/settings/environment-variables

2. Fügen Sie jede Variable hinzu:
   ```
   Name:   REACT_APP_CLOUDINARY_CLOUD_NAME
   Value:  quantiva-advisory
   Target: ✅ Production
           ✅ Preview
           ✅ Development
   ```

3. Klicken Sie **"Save"**

4. Wiederholen Sie für alle Variablen

5. **Redeploy erforderlich!** Klicken Sie **"Deployments"** → **"..."** → **"Redeploy"**

#### Methode 2: Vercel CLI

```bash
# Login
vercel login

# Link project
cd /Users/herijeanmasum/Developer/quantiva-website
vercel link

# Set variables
vercel env add REACT_APP_CLOUDINARY_CLOUD_NAME
# Eingeben: quantiva-advisory
# Select: Production, Preview, Development

vercel env add REACT_APP_ELEVENLABS_KEY
# Eingeben: sk_your_key
# Select: Production, Preview, Development

# Redeploy
vercel --prod
```

---

## 🔍 **Variables im Detail**

### **REACT_APP_CLOUDINARY_CLOUD_NAME**

#### Wo bekomme ich den Wert?
1. Gehen Sie zu: https://cloudinary.com/console
2. Dashboard oben links: **"Cloud Name: xyz"**
3. Kopieren Sie den Namen

#### Verwendung im Code:
```typescript
// src/pages/TeamPage.tsx
const CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'YOUR_CLOUD_NAME';

const musicPlaylist = [
  {
    url: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/track.mp3`,
    // ...
  }
];
```

#### Fallback:
Wenn nicht gesetzt, wird `'YOUR_CLOUD_NAME'` verwendet (funktioniert nicht, Musik lädt nicht).

---

### **REACT_APP_ELEVENLABS_KEY**

#### Wo bekomme ich den Wert?
1. Gehen Sie zu: https://elevenlabs.io/app/settings/api-keys
2. Klicken Sie **"Create API Key"**
3. Kopieren Sie den Key (beginnt mit `sk_`)

#### Verwendung im Code:
```typescript
// src/pages/CareerPage.tsx
const apiKey = process.env.REACT_APP_ELEVENLABS_KEY || elevenLabsKey;
```

#### Fallback:
Wenn nicht gesetzt, verwendet die App:
1. User-eingegeben Key im UI
2. Browser-native TTS (Web Speech API)

---

## 🚀 **Deployment-Workflow**

### Neue Variable hinzufügen:

1. **Lokal testen:**
   ```bash
   # .env.local aktualisieren
   echo "REACT_APP_NEW_VAR=test" >> .env.local
   
   # Neu starten (wichtig!)
   npm start
   ```

2. **In Code verwenden:**
   ```typescript
   const myVar = process.env.REACT_APP_NEW_VAR || 'default';
   ```

3. **Zu Vercel hinzufügen:**
   ```bash
   vercel env add REACT_APP_NEW_VAR
   ```

4. **Dokumentieren:**
   - Diese Datei (`ENV_VARIABLES.md`) aktualisieren
   - Ggf. Setup-Guide erstellen

---

## ⚠️ **Best Practices**

### ✅ DO:
- Alle API Keys als Environment Variables
- Nie Keys im Code hardcoden
- `.env.local` für lokale Entwicklung
- Vercel Dashboard für Production
- Dokumentation aktuell halten

### ❌ DON'T:
- `.env.local` committen (ist in `.gitignore`)
- API Keys in Code schreiben
- Sensible Daten in Public Repo
- Environment Variables ohne `REACT_APP_` Prefix (wird nicht exponiert!)

---

## 🔐 **Sicherheit**

### Frontend Environment Variables
React-Apps exponieren alle `REACT_APP_*` Variablen im Browser!

**Bedeutet:**
- Jeder kann die Werte im Browser-Source sehen
- Nur für **Public** API Keys verwenden
- Für sensible Keys: Backend API verwenden

### Was ist sicher zu exponieren?
- ✅ **Cloudinary Cloud Name** (public)
- ⚠️ **ElevenLabs API Key** (rate-limited, aber sichtbar)
- ❌ **Database Credentials** (nie im Frontend!)

### ElevenLabs Key schützen:
1. **Rate Limiting:** Setzen Sie in ElevenLabs Account
2. **Domain Restriction:** Nur `quantivaadvisory.com` erlauben (falls verfügbar)
3. **Alternative:** Eigenes Backend-API für Voice-Generation

---

## 📊 **Übersicht**

| Variable                             | Erforderlich | Sichtbar | Wo verwendet                    |
|--------------------------------------|--------------|----------|---------------------------------|
| `NEXT_PUBLIC_SITE_URL`               | Ja           | Public   | Alle Seiten (hreflang/SEO)      |
| `NEXT_PUBLIC_SENTRY_DSN`             | Optional     | Public   | Error Tracking                  |
| `NEXT_PUBLIC_GA_ID`                 | Optional     | Public   | AnalyticsGate (Google Analytics)|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`      | Optional     | Public   | AnalyticsGate (Plausible)      |
| `REACT_APP_CLOUDINARY_CLOUD_NAME`   | Ja           | Public   | TeamPage (Musik)                |
| `REACT_APP_ELEVENLABS_KEY`           | Optional     | Public   | CareerPage (Voice)              |

---

## 🧪 **Testing**

### Lokal testen:
```bash
# Variablen prüfen (dev mode)
npm start

# Browser Console:
console.log(process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
```

### Production testen:
```bash
# Build mit env vars
npm run build

# Build prüfen
ls -lh build/static/js/main.*.js
# Sollte env vars enthalten (als plain text!)
```

---

## 🆘 **Troubleshooting**

### Problem: "undefined" im Code
**Ursache:** Variable nicht gesetzt oder Prefix falsch

**Lösung:**
1. Prüfen: Heißt die Variable `REACT_APP_*`?
2. Prüfen: Ist `.env.local` im Project Root?
3. **Wichtig:** App neu starten nach `.env.local` Änderung!

### Problem: Vercel deployment hat falsche Werte
**Ursache:** Alte Environment Variable oder Build-Cache

**Lösung:**
1. Gehen Sie zu Vercel → Environment Variables
2. Prüfen Sie den Wert
3. **Redeploy** (nicht Re-Build!)
4. Falls noch falsch: Build-Cache löschen

### Problem: Variable funktioniert lokal, aber nicht auf Vercel
**Ursache:** Variable nicht in Vercel gesetzt

**Lösung:**
1. Prüfen Sie Vercel Dashboard → Environment Variables
2. Stellen Sie sicher: **Target = Production** (nicht nur Preview!)
3. Redeploy

---

## 📚 **Ressourcen**

- [Create React App: Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [Vercel: Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Cloudinary: Getting Started](https://cloudinary.com/documentation/how_to_integrate_cloudinary)
- [ElevenLabs: API Documentation](https://elevenlabs.io/docs/api-reference/overview)

---

## ✅ **Quick Reference**

**Neue Variable hinzufügen:**
```bash
# 1. Lokal
echo "REACT_APP_MY_VAR=value" >> .env.local

# 2. Vercel
vercel env add REACT_APP_MY_VAR

# 3. Code
const myVar = process.env.REACT_APP_MY_VAR || 'default';

# 4. Dokumentieren
# → ENV_VARIABLES.md aktualisieren
```

**Alle Variables auflisten:**
```bash
# Lokal
cat .env.local

# Vercel
vercel env ls
```

**Variable löschen:**
```bash
# Vercel
vercel env rm REACT_APP_MY_VAR production
```

---

**🔐 Halten Sie diese Dokumentation aktuell, wenn Sie neue Variables hinzufügen!**






