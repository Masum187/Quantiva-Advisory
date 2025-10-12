# 🎬 Hero Video Setup Guide

## Eigenes Hintergrund-Video für den Hero-Bereich

---

## 🎯 **Was Sie brauchen:**

Ein professionelles **Corporate/Tech-Video** (30-60 Sekunden):
- **Auflösung:** Mindestens 1920x1080 (Full HD)
- **Format:** MP4 (H.264 codec)
- **Größe:** Unter 20MB (für optimale Ladezeiten)
- **Inhalt:** Abstrakte Tech-Motive, Business-Szenen, oder animierte Grafiken

---

## 📹 **Video-Quellen (Kostenlos & Lizenzfrei):**

### **1. Pexels Videos** (Empfohlen)
```
https://www.pexels.com/videos/
```
**Suche nach:**
- "corporate technology"
- "digital transformation"
- "data visualization"
- "abstract tech"
- "business meeting"

### **2. Pixabay Videos**
```
https://pixabay.com/videos/
```

### **3. Coverr**
```
https://coverr.co/
```

### **4. Videezy**
```
https://www.videezy.com/
```

---

## 📂 **Schritt 1: Video herunterladen**

1. Gehen Sie zu Pexels Videos
2. Suchen Sie nach "corporate technology background"
3. Wählen Sie ein Video mit **dunklem, professionellem Look**
4. Klicken Sie auf "Free Download" → **Full HD (1920x1080)**
5. Speichern Sie die Datei (z.B. `hero-corporate-tech.mp4`)

**Beispiel-Videos:**
- https://www.pexels.com/video/digital-projection-of-abstract-geometrical-lines-3129671/
- https://www.pexels.com/video/futuristic-digital-data-visualization-4565125/
- https://www.pexels.com/video/abstract-digital-grid-7534201/

---

## ☁️ **Schritt 2: Zu Cloudinary hochladen**

### 2.1 Cloudinary öffnen:
```
https://console.cloudinary.com/console/c-YOUR_CLOUD_NAME/media_library
```
(Ersetzen Sie `YOUR_CLOUD_NAME` durch Ihren Cloud Name)

### 2.2 Ordner erstellen (falls noch nicht vorhanden):
1. Klicken Sie auf **"Add folder"**
2. Erstellen Sie: `quantiva-assets/videos`

### 2.3 Video hochladen:
1. Navigieren Sie zu `quantiva-assets/videos`
2. Klicken Sie auf **"Upload"** (oben rechts)
3. Wählen Sie Ihre heruntergeladene `hero-corporate-tech.mp4`
4. Warten Sie, bis der Upload abgeschlossen ist

### 2.4 Public ID anpassen:
1. Klicken Sie auf das hochgeladene Video
2. Klicken Sie auf das **"Edit"**-Icon (Stift-Symbol)
3. Ändern Sie die **"Public ID"** zu: `hero-corporate-tech`
4. Klicken Sie auf **"Save"**

---

## 💻 **Schritt 3: Cloud Name konfigurieren (falls noch nicht geschehen)**

### Option A: Environment Variable (Empfohlen)

**Lokal (.env.local):**
```bash
REACT_APP_CLOUDINARY_CLOUD_NAME=ihr_cloud_name
```

**Vercel:**
1. Gehen Sie zu: https://vercel.com/.../settings/environment-variables
2. Fügen Sie hinzu:
   - **Name:** `REACT_APP_CLOUDINARY_CLOUD_NAME`
   - **Value:** Ihr Cloud Name (z.B. `quantiva-advisory`)
   - **Targets:** ✅ Production, ✅ Preview, ✅ Development
3. Klicken Sie auf **"Save"**
4. Triggeren Sie ein neues Deployment

### Option B: Direkt im Code (für Quick Start)

Öffnen Sie `src/QuantivaWebsite.tsx` (Zeile ~681) und ersetzen Sie `demo`:
```typescript
src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'IHR_CLOUD_NAME'}/video/upload/q_auto:good,w_1920/v1/quantiva-assets/videos/hero-corporate-tech.mp4`}
```

---

## 🖼️ **Schritt 4: Fallback-Bild (optional)**

Falls das Video nicht lädt, wird ein Fallback-Bild angezeigt.

### 4.1 Screenshot vom Video erstellen:
1. Öffnen Sie Ihr Video in einem Video-Player (z.B. VLC, QuickTime)
2. Pausieren Sie bei einem passenden Frame
3. Erstellen Sie einen Screenshot
4. Speichern Sie als `hero-fallback.jpg`

### 4.2 Zu Cloudinary hochladen:
1. Gehen Sie zu Cloudinary Media Library
2. Upload zu `quantiva-assets/` (Hauptordner)
3. Public ID: `hero-fallback`

---

## 🚀 **Schritt 5: Testen & Deployen**

### 5.1 Lokal testen:
```bash
# Im Projekt-Root:
npm start
```
Öffnen Sie: http://localhost:3000/de

Das Video sollte jetzt im Hero-Bereich laufen! 🎬

### 5.2 Deployen:
```bash
git add -A
git commit -m "feat: add custom hero background video"
git push origin main
```

Vercel wird automatisch deployen. Nach ~2 Minuten ist Ihr Video live!

---

## 💡 **Best Practices**

### **Video-Optimierung:**
- **Dauer:** 30-60 Sekunden (für smooth Loops)
- **Bitrate:** 3-5 Mbps für gute Qualität bei kleiner Dateigröße
- **Codec:** H.264 (beste Browser-Kompatibilität)
- **Audio:** Entfernen (nicht benötigt, spart Dateigröße)

### **Performance:**
- Cloudinary optimiert Videos automatisch mit `q_auto:good`
- Mobile Geräte laden automatisch kleinere Versionen
- Der Fallback-Poster wird während des Ladens angezeigt

### **Content-Empfehlungen:**
✅ **Gut:**
- Abstrakte Tech-Animationen
- Dunkle, professionelle Farben
- Langsame, smooth Bewegungen
- Loops ohne harte Cuts

❌ **Vermeiden:**
- Zu helle Videos (schlechte Lesbarkeit)
- Schnelle, ablenkende Bewegungen
- Videos mit Text/Branding anderer Firmen
- Zu große Dateien (>20MB)

---

## 🎨 **Alternative: Eigenes Video erstellen**

### **Tools:**
- **Canva Video:** https://www.canva.com/video-editor/ (kostenlos)
- **Adobe Express:** https://www.adobe.com/express/create/video
- **Runway ML:** https://runwayml.com/ (KI-generierte Videos)

### **Template-Ideen:**
1. Animierte Partikel/Netzwerke
2. Abstrakte 3D-Formen
3. Daten-Visualisierungen
4. Gradient-Animationen
5. Morphing-Logos

---

## 🔧 **Troubleshooting**

### Problem: Video lädt nicht
**Lösung:**
1. Überprüfen Sie die Video-URL im Browser
2. Stellen Sie sicher, dass der Cloud Name korrekt ist
3. Überprüfen Sie, ob die Public ID stimmt: `hero-corporate-tech`

### Problem: Video ist zu groß/langsam
**Lösung:**
1. Cloudinary verwendet automatisch `q_auto:good` für Optimierung
2. Ändern Sie zu `q_auto:low` für noch kleinere Dateien:
   ```typescript
   q_auto:low,w_1920
   ```

### Problem: Video läuft nicht smooth
**Lösung:**
- Stellen Sie sicher, dass das Video mindestens 24 FPS hat
- Verwenden Sie ein Video mit smooth Loop-Punkten

---

## 📚 **Weitere Anpassungen**

### Video-URL ändern (in `src/QuantivaWebsite.tsx`):
```typescript
// Zeile ~681
src={`https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto:good,w_1920/v1/quantiva-assets/videos/IHR_VIDEO_NAME.mp4`}
```

### Overlay-Intensität anpassen (Zeile ~692-694):
```typescript
// Stärker (dunkleres Overlay für bessere Lesbarkeit):
from-slate-950/95 via-slate-900/60 to-black/90

// Schwächer (mehr Video sichtbar):
from-slate-950/70 via-slate-900/30 to-black/60
```

---

**Viel Erfolg mit Ihrem individuellen Hero-Video! 🎬**


