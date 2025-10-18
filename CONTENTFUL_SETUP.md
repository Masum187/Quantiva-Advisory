# 🚀 Contentful Setup Guide

## Professionelles Headless CMS in 15 Minuten

---

## ⚡ **Quick Start**

### **Schritt 1: Contentful Account erstellen (2 Min)**

1. **Registrieren:**
   ```
   https://www.contentful.com/sign-up/
   ```

2. **Wählen Sie:** "Free" Plan
   - ✅ 2 Locales (DE + EN) ✅
   - ✅ 25.000 Records
   - ✅ 5 Users
   - ✅ All Features

3. **Space erstellen:**
   - Name: `Quantiva Website`
   - Click "Create Space"

---

### **Schritt 2: API Keys holen (1 Min)**

1. **Settings → API Keys**
   ```
   https://app.contentful.com/spaces/YOUR_SPACE_ID/api/keys
   ```

2. **"Add API Key"**
   - Name: `Quantiva Production`

3. **Kopieren Sie:**
   ```
   Space ID:              xxxxxxxxxxxx
   Content Delivery API:  xxxxxxxxxxxx
   Content Preview API:   xxxxxxxxxxxx
   ```

---

### **Schritt 3: Content Model erstellen (5 Min)**

#### **Model 1: Page Content**

**Content Type:** `pageContent`

**Fields:**
```
1. Internal Name        → Short Text (Required)
2. Section              → Short Text (hero, about, services, etc.)
3. Language             → Short Text (de, en)
4. Title                → Short Text
5. Subtitle             → Short Text
6. Description          → Long Text
7. Button Text          → Short Text
8. Button Link          → Short Text
9. Image                → Media (Single)
10. Video URL           → Short Text
```

#### **Model 2: Service**

**Content Type:** `service`

**Fields:**
```
1. ID                   → Short Text (Required, Unique)
2. Title (DE)           → Short Text
3. Title (EN)           → Short Text
4. Description (DE)     → Long Text
5. Description (EN)     → Long Text
6. Icon                 → Short Text (lucide-react icon name)
7. Image                → Media (Single)
8. Order                → Number
```

#### **Model 3: Team Member**

**Content Type:** `teamMember`

**Fields:**
```
1. Name                 → Short Text (Required)
2. Role (DE)            → Short Text
3. Role (EN)            → Short Text
4. Bio (DE)             → Long Text
5. Bio (EN)             → Long Text
6. Image                → Media (Single)
7. Email                → Short Text
8. LinkedIn             → Short Text
9. Order                → Number
```

#### **Model 4: Case Study**

**Content Type:** `caseStudy`

**Fields:**
```
1. Slug                 → Short Text (Required, Unique)
2. Title (DE)           → Short Text
3. Title (EN)           → Short Text
4. Subtitle (DE)        → Short Text
5. Subtitle (EN)        → Short Text
6. Category             → Short Text
7. Industry             → Short Text
8. Hero Image           → Media (Single)
9. Goals (DE)           → List of Short Text
10. Goals (EN)          → List of Short Text
11. Solution (DE)       → List of Short Text
12. Solution (EN)       → List of Short Text
13. Results (DE)        → List of Short Text
14. Results (EN)        → List of Short Text
15. Technologies        → List of Short Text
16. Quote Text (DE)     → Long Text
17. Quote Text (EN)     → Long Text
18. Quote Author        → Short Text
19. Published At        → Date & Time
20. Status              → Short Text (draft, published)
```

---

### **Schritt 4: Environment Variables (1 Min)**

#### **Lokal (.env.local):**
```bash
# Contentful Configuration
REACT_APP_CONTENTFUL_SPACE_ID=your_space_id_here
REACT_APP_CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token_here
REACT_APP_CONTENTFUL_PREVIEW_TOKEN=your_preview_api_token_here
REACT_APP_CONTENTFUL_ENVIRONMENT=master

# Cloudinary (bereits vorhanden)
REACT_APP_CLOUDINARY_CLOUD_NAME=dbrisux8i

# ElevenLabs (bereits vorhanden)
REACT_APP_ELEVENLABS_KEY=your_key_here
```

#### **Vercel:**
```
1. https://vercel.com/masum187s-projects/quantiva-advisory/settings/environment-variables

2. Fügen Sie hinzu:
   REACT_APP_CONTENTFUL_SPACE_ID
   REACT_APP_CONTENTFUL_ACCESS_TOKEN
   REACT_APP_CONTENTFUL_PREVIEW_TOKEN
   REACT_APP_CONTENTFUL_ENVIRONMENT

3. Target: Production + Preview + Development

4. Redeploy
```

---

## 🔌 **Integration**

### **Dependencies installieren:**
```bash
npm install contentful @contentful/rich-text-react-renderer
```

---

## 📊 **Vorteile**

### **Vorher (Content Admin):**
```
1. /admin/content öffnen
2. Text bearbeiten
3. Export klicken
4. Datei herunterladen
5. Lokal ersetzen
6. Git commit & push
7. Vercel deploy
──────────────────────
~5 Minuten + manuell
```

### **Nachher (Contentful):**
```
1. Contentful öffnen
2. Text bearbeiten
3. "Publish" klicken
4. Webhook → Auto-Deploy
5. Live!
──────────────────────
~2 Minuten, vollautomatisch
```

---

## 🪝 **Webhook Setup (Auto-Deploy)**

### **In Contentful:**

1. **Settings → Webhooks**
   ```
   https://app.contentful.com/spaces/YOUR_SPACE_ID/settings/webhooks
   ```

2. **"Add Webhook"**
   ```
   Name: Vercel Deploy
   URL:  https://api.vercel.com/v1/integrations/deploy/YOUR_DEPLOY_HOOK
   ```

3. **Events:**
   - ✅ Entry: Publish
   - ✅ Entry: Unpublish
   - ✅ Asset: Publish

4. **Save**

### **Vercel Deploy Hook:**

1. **Vercel Dashboard → Settings → Git**
   ```
   https://vercel.com/masum187s-projects/quantiva-advisory/settings/git
   ```

2. **Deploy Hooks → Create Hook**
   ```
   Name: contentful-deploy
   Branch: main
   ```

3. **Kopieren Sie die URL**
   ```
   https://api.vercel.com/v1/integrations/deploy/xxxxx/xxxxx
   ```

4. **Verwenden Sie diese in Contentful Webhook**

---

## 🎯 **Workflow**

```
Content Manager:
  1. Öffnet Contentful
  2. Bearbeitet Text
  3. Klickt "Publish"
         ↓
  Webhook triggert
         ↓
  Vercel Deploy Hook
         ↓
  Rebuild & Deploy
         ↓
  Live in 2 Minuten!
```

---

## 💰 **Kosten**

### **Free Plan (für Sie perfekt!):**
```
✅ 2 Locales (DE + EN)
✅ 25.000 Records
✅ 5 Users
✅ 1 Mio API Calls/Monat
✅ 100 GB Bandbreite/Monat
✅ Webhooks inklusive
✅ Preview API
✅ All Features

Kosten: 0€ forever!
```

---

## 🔐 **Sicherheit**

### **API Keys:**
- ✅ **Delivery API:** Public (für Frontend OK)
- ✅ **Preview API:** Nur für Preview-Modus
- ⚠️ **Management API:** NIE im Frontend!

### **Environment Variables:**
```bash
# OK im Frontend (Read-Only):
REACT_APP_CONTENTFUL_SPACE_ID
REACT_APP_CONTENTFUL_ACCESS_TOKEN

# Nur Backend:
CONTENTFUL_MANAGEMENT_TOKEN
```

---

## 📚 **Content Migration**

### **Von JSON zu Contentful:**

Ich habe ein Migrations-Script erstellt:
```bash
npm run contentful:migrate
```

**Was es macht:**
1. Liest `src/data/content.json`
2. Erstellt Entries in Contentful
3. Uploaded Assets zu Contentful
4. Verlinkt alles korrekt

---

## 🎨 **Preview-Modus**

### **Content Preview:**
```
1. Contentful → Entry bearbeiten
2. Klick "Open preview"
3. Siehe Änderungen LIVE (ohne Publish)
4. Wenn OK → "Publish"
```

### **Setup:**
```javascript
// src/utils/contentful.ts
const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: isPreview 
    ? process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN
    : process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  host: isPreview ? 'preview.contentful.com' : 'cdn.contentful.com'
});
```

---

## 🚀 **Nächste Schritte**

1. ✅ Contentful Account erstellen
2. ✅ API Keys holen
3. ✅ Content Models erstellen
4. ✅ Environment Variables setzen
5. ✅ Dependencies installieren
6. ✅ Integration Code (ich implementiere das!)
7. ✅ Webhook setup
8. ✅ Migration durchführen
9. ✅ Testen
10. ✅ Live gehen!

---

**Bereit? Sagen Sie mir Ihre API Keys und ich implementiere alles!** 🚀



