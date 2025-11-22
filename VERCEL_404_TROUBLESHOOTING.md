# Vercel 404 Error Troubleshooting

## Problem: 404 NOT_FOUND Error auf Vercel

Wenn du einen 404-Fehler auf Vercel siehst, kann das verschiedene Ursachen haben.

---

## 🔍 Diagnose

### 1. Welche URL wurde aufgerufen?

Prüfe, welche URL den 404-Fehler verursacht hat:
- Root-URL: `https://quantivaadvisory.com/`
- Spezifische Route: z.B. `/de/services/xyz`
- API-Route: z.B. `/api/contact`

### 2. Prüfe Vercel Logs

1. Gehe zu: https://vercel.com/dashboard
2. Wähle dein Projekt: **quantiva-Advisory**
3. Gehe zu: **Deployments** → neuestes Deployment
4. Klicke auf: **Functions** Tab
5. Prüfe die Logs für Fehler

### 3. Prüfe Build-Logs

1. Gehe zu: **Deployments** → neuestes Deployment
2. Klicke auf: **Build Logs**
3. Suche nach Fehlern oder Warnungen

---

## ✅ Häufige Lösungen

### Lösung 1: Route existiert nicht

**Problem:** Die aufgerufene URL existiert nicht in der App.

**Prüfe:**
- Existiert die Route in `app/de/` oder `app/en/`?
- Ist die Route korrekt geschrieben?
- Gibt es einen Typo in der URL?

**Beispiel:**
- ❌ `/de/service/sap` (falsch - sollte `/de/services/sap` sein)
- ✅ `/de/services/sap` (korrekt)

### Lösung 2: API-Route Problem

**Problem:** Eine API-Route gibt 404 zurück.

**Prüfe:**
- Existiert die Route in `app/api/`?
- Ist die Route-Methode (GET, POST) korrekt?
- Gibt es einen Fehler in der Route-Datei?

**Bekannte API-Routen:**
- ✅ `/api/contact` (POST)
- ✅ `/api/ai-test`
- ✅ `/api/cms/upload-video`
- ✅ `/api/cms/video-generator`
- ✅ `/api/video-generation`

### Lösung 3: Middleware-Redirect Problem

**Problem:** Middleware leitet falsch um.

**Prüfe:**
- Wird die Root-URL `/` korrekt zu `/de/` oder `/en/` umgeleitet?
- Gibt es einen Redirect-Loop?

**Test:**
```bash
# Lokal testen
npm run dev
# Öffne: http://localhost:3000/
# Sollte zu http://localhost:3000/de/ oder /en/ umleiten
```

### Lösung 4: Build-Problem

**Problem:** Route wurde nicht im Build generiert.

**Lösung:**
1. Lokal builden: `npm run build`
2. Prüfe, ob die Route in der Build-Ausgabe erscheint
3. Falls nicht: Prüfe die Route-Datei auf Fehler

### Lösung 5: Vercel Cache

**Problem:** Vercel zeigt alte Version.

**Lösung:**
1. Gehe zu: **Deployments**
2. Klicke: **"..."** → **Redeploy**
3. Warte bis Deployment fertig ist

---

## 🧪 Testing

### Lokal testen

```bash
# Build lokal
npm run build

# Start production server
npm start

# Teste verschiedene Routen:
# http://localhost:3000/
# http://localhost:3000/de
# http://localhost:3000/en
# http://localhost:3000/de/services/sap
# http://localhost:3000/api/contact
```

### Vercel Preview testen

1. Nach jedem Push erstellt Vercel eine Preview-URL
2. Teste die Preview-URL vor dem Production-Deploy
3. Prüfe, ob alle Routen funktionieren

---

## 📋 Checkliste

- [ ] Route existiert in `app/de/` oder `app/en/`
- [ ] Route-Datei hat keine Syntax-Fehler
- [ ] Build ist erfolgreich (`npm run build`)
- [ ] Lokal funktioniert die Route (`npm start`)
- [ ] Vercel Deployment ist erfolgreich
- [ ] Keine Fehler in Vercel Logs
- [ ] Middleware leitet korrekt um

---

## 🆘 Wenn nichts hilft

1. **Prüfe Vercel Logs:**
   - Deployments → Functions → Logs
   - Suche nach dem Error-ID: `fra1::887gp-1763834799528-d8ad272e1a0b`

2. **Prüfe Build-Output:**
   ```bash
   npm run build
   # Prüfe, ob die Route in der Liste erscheint
   ```

3. **Kontaktiere Vercel Support:**
   - Mit Error-ID und betroffener URL
   - Mit Build-Logs
   - Mit Deployment-Link

---

## 🔗 Wichtige Routen (sollten alle funktionieren)

### DE-Routen:
- ✅ `/de` - Homepage
- ✅ `/de/about` - Über uns
- ✅ `/de/team` - Team
- ✅ `/de/cases` - Cases
- ✅ `/de/career` - Karriere
- ✅ `/de/contact` - Kontakt
- ✅ `/de/services/*` - Services
- ✅ `/de/impressum` - Impressum
- ✅ `/de/datenschutz` - Datenschutz

### EN-Routen:
- ✅ `/en` - Homepage
- ✅ `/en/about` - About
- ✅ `/en/team` - Team
- ✅ `/en/cases` - Cases
- ✅ `/en/career` - Career
- ✅ `/en/contact` - Contact
- ✅ `/en/services/*` - Services
- ✅ `/en/imprint` - Imprint
- ✅ `/en/privacy` - Privacy
- ✅ `/en/terms` - Terms

### API-Routen:
- ✅ `/api/contact` (POST)
- ✅ `/api/ai-test`
- ✅ `/api/cms/*`

---

**💡 Tipp:** Wenn du mir die spezifische URL sagst, die den 404-Fehler verursacht, kann ich dir gezielt helfen!

