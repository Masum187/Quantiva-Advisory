# 🚨 Vercel Deployment Fix - routes-manifest.json Error

## Problem

```
Error: The file "/vercel/path0/build/routes-manifest.json" couldn't be found.
```

Vercel sucht nach `build/routes-manifest.json` statt `.next/routes-manifest.json`.

---

## Root Cause

Das Problem wird durch **alte Vercel Project Settings** verursacht:
- Vercel Project hat `outputDirectory: "build"` gespeichert (von Create React App Migration)
- Next.js 15 verwendet aber `.next/` als Output-Verzeichnis

---

## ✅ Solution: Vercel Dashboard Settings

### **WICHTIG: Diese Änderung MUSS im Vercel Dashboard gemacht werden!**

1. **Gehe zu:** https://vercel.com/your-project/settings

2. **Build & Development Settings:**
   ```
   Framework Preset: Next.js
   
   Build Command: (leave empty or "next build")
   
   Output Directory: (MUST BE EMPTY or ".next")  ← WICHTIG!
   
   Install Command: npm ci --legacy-peer-deps
   ```

3. **Output Directory korrigieren:**
   ```
   ❌ FALSCH: build
   ❌ FALSCH: ./build
   ✅ RICHTIG: (leer lassen)
   ✅ ODER: .next
   ```

4. **Save** und **Redeploy**

---

## Alternative: vercel.json Override

Falls Vercel Dashboard Settings nicht helfen, können wir vercel.json verwenden:

```json
{
  "framework": "nextjs",
  "installCommand": "npm ci --legacy-peer-deps"
}
```

**NICHT** hinzufügen:
- ❌ `"buildCommand"` (Vercel auto-detect lassen)
- ❌ `"outputDirectory"` (Vercel auto-detect lassen)

---

## Debugging Steps

### 1. Check Vercel Build Logs

```bash
# Suche nach:
"Detected Next.js version: 15.5.4"
"Output Directory: build"  ← Wenn das erscheint, ist es falsch!
```

### 2. Check Local Build

```bash
cd /Users/herijeanmasum/Developer/quantiva-website
npm run build

# Sollte erstellen:
ls -la .next/routes-manifest.json  # ✅ Sollte existieren
ls -la build/                       # ❌ Sollte NICHT existieren
```

### 3. Check Git History

```bash
git log --all --oneline | grep -i "build\|vercel"
```

---

## Why This Happens

### **Migration von Create React App zu Next.js:**

1. **Alte Config (CRA):**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "build"  ← CRA verwendet "build"
   }
   ```

2. **Neue Config (Next.js):**
   ```json
   {
     "framework": "nextjs"
     // outputDirectory: auto-detect (".next")
   }
   ```

### **Vercel cached alte Settings:**
- Settings werden im Vercel Project gespeichert
- `vercel.json` kann diese NICHT überschreiben
- Muss manuell im Dashboard geändert werden

---

## ✅ Complete Fix Checklist

- [ ] Vercel Dashboard → Settings → Build & Development Settings
- [ ] Framework Preset: **Next.js** (nicht Custom oder Other)
- [ ] Output Directory: **LEER LASSEN** oder `.next`
- [ ] Build Command: **LEER LASSEN** oder `next build`
- [ ] Install Command: `npm ci --legacy-peer-deps`
- [ ] Save Changes
- [ ] Trigger Redeploy (Settings → Deployments → Redeploy)

---

## Expected Result

```bash
✓ Compiled successfully
✓ Collecting build traces
✓ Finalizing page optimization

Route (app)                                 Size  First Load JS
┌ ○ /_not-found                            127 B         102 kB
├ ƒ /api/contact                           127 B         102 kB
└ ○ /de                                    173 B         162 kB

✓ Deployment successful
```

---

## If Still Not Working

### Option 1: Delete and Re-import Project

1. Vercel Dashboard → Project → Settings → Advanced
2. **Delete Project**
3. Import from GitHub again
4. Vercel will auto-detect Next.js correctly

### Option 2: Create .vercel/project.json

```json
{
  "orgId": "your-org-id",
  "projectId": "your-project-id",
  "settings": {
    "framework": "nextjs"
  }
}
```

---

## Contact Support

Falls nichts funktioniert:

**Vercel Support:** https://vercel.com/support

**Gib an:**
- Project URL: https://vercel.com/your-project
- Error: "routes-manifest.json not found in /vercel/path0/build/"
- Framework: Next.js 15.5.4
- Migration: From Create React App to Next.js

---

## Summary

**Problem:** Vercel sucht `build/` statt `.next/`
**Cause:** Alte CRA Settings im Vercel Project
**Solution:** Vercel Dashboard → Output Directory → LEER LASSEN
**Status:** ⏳ Wartet auf Dashboard-Änderung


