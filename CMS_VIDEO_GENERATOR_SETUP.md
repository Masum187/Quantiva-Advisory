# 🎬 CMS Video Generator System

## 📋 **Übersicht**

Ein vollständiges CMS-System für die Generierung und Verwaltung von KI-Videos mit Sora/Comet API und Cloudinary-Speicherung.

## 🚀 **Features**

### **1. Video Generator** (`/de/cms/video-generator`)
- ✅ **Vorlagen-basierte Generierung** für verschiedene Website-Bereiche
- ✅ **Automatischer Upload** zu Cloudinary nach Generierung
- ✅ **Mehrere Qualitäten** (480p, 720p, 1080p)
- ✅ **Flexible Dauer** (5, 8, 10 Sekunden)
- ✅ **Ordner-Organisation** für verschiedene Verwendungen
- ✅ **Echtzeit-Vorschau** der generierten Videos

### **2. Video Management** (`/de/cms/video-management`)
- ✅ **Video-Bibliothek** mit Such- und Filterfunktionen
- ✅ **Metadaten-Verwaltung** (Titel, Beschreibung, Tags)
- ✅ **Download-Funktion** für lokale Speicherung
- ✅ **URL-Kopieren** für direkte Verwendung
- ✅ **Video-Löschung** mit Bestätigung
- ✅ **Nutzungsstatistiken** und Übersicht

### **3. API Endpoints**
- ✅ **`/api/cms/video-generator`** - Generierung + Upload
- ✅ **`/api/cms/upload-video`** - Externe Video-Uploads
- ✅ **Vollständige Fehlerbehandlung** und Validierung

## 🛠️ **Setup**

### **1. Umgebungsvariablen**

```bash
# .env.local
COMETAPI_KEY=your_comet_api_key_here
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### **2. Cloudinary Konfiguration**

1. **Account erstellen:** https://cloudinary.com
2. **Cloud Name, API Key, API Secret** aus Dashboard kopieren
3. **Upload Presets** konfigurieren (optional)

### **3. Comet API Setup**

1. **Account erstellen:** https://comet.com
2. **API Key generieren**
3. **Credits aufladen** für Video-Generierung

## 📱 **Verwendung**

### **Video Generator verwenden:**

1. **Besuchen Sie:** `/de/cms/video-generator`
2. **Vorlage auswählen** oder eigenen Prompt eingeben
3. **Einstellungen anpassen** (Dauer, Qualität, Ordner)
4. **"Video generieren & hochladen"** klicken
5. **Video wird automatisch** zu Cloudinary hochgeladen

### **Video Management:**

1. **Besuchen Sie:** `/de/cms/video-management`
2. **Videos durchsuchen** mit Suchfunktion
3. **Nach Ordnern filtern**
4. **Videos herunterladen** oder URLs kopieren
5. **Metadaten verwalten** und Videos löschen

## 🎯 **Vorlagen-System**

### **Verfügbare Vorlagen:**

| Vorlage | Prompt | Verwendung | Dauer | Qualität |
|---------|--------|------------|-------|----------|
| **Hero Background** | Modern corporate office with digital transformation elements | Hero-Section | 10s | 1080p |
| **SAP Service** | SAP S/4HANA system interface with data flowing | SAP Service-Seite | 8s | 720p |
| **Cloud Service** | Cloud infrastructure visualization, servers and data centers | Cloud Service-Seite | 8s | 720p |
| **AI Service** | AI neural networks visualization, data processing | AI Service-Seite | 8s | 720p |
| **Security Service** | Cybersecurity shield protecting digital assets | Security Service-Seite | 8s | 720p |
| **Case Study** | Before and after transformation of business | Case Studies | 10s | 1080p |
| **About Team** | Professional team working on digital transformation | About-Seite | 8s | 720p |

## 🔧 **API Usage**

### **Video Generator API:**

```typescript
// POST /api/cms/video-generator
{
  "prompt": "Modern corporate office with digital transformation elements",
  "duration": 8,
  "quality": "720p",
  "folder": "service-videos",
  "title": "SAP Service Video"
}

// Response
{
  "success": true,
  "cloudinary": {
    "publicId": "service-videos/sap-service-1234567890",
    "url": "https://res.cloudinary.com/.../video.mp4",
    "duration": 8,
    "width": 1280,
    "height": 720,
    "format": "mp4",
    "size": 8388608
  },
  "comet": {
    "originalUrl": "https://comet-generated-video.mp4",
    "prompt": "...",
    "duration": 8,
    "quality": "720p",
    "model": "sora-1:1-720p-8s"
  },
  "metadata": {
    "title": "SAP Service Video",
    "folder": "service-videos",
    "generatedAt": "2024-01-15T10:30:00Z"
  }
}
```

### **Upload API:**

```typescript
// POST /api/cms/upload-video
{
  "videoUrl": "https://external-video-url.mp4",
  "folder": "uploaded-videos",
  "publicId": "custom-video-name",
  "tags": ["uploaded", "custom"]
}
```

## 📁 **Ordner-Struktur**

```
Cloudinary:
├── generated-videos/          # Generierte Videos
├── hero-videos/              # Hero-Section Videos
├── service-videos/           # Service-Seiten Videos
├── case-videos/             # Case Study Videos
├── about-videos/            # About-Seite Videos
└── uploaded-videos/         # Manuell hochgeladene Videos
```

## 🎨 **Integration in Website**

### **1. Hero-Section Video:**

```tsx
// In QuantivaWebsite.tsx
const HeroWithVideo = () => {
  const [heroVideo, setHeroVideo] = useState('');
  
  useEffect(() => {
    // Video von Cloudinary laden
    setHeroVideo('https://res.cloudinary.com/.../hero-videos/hero-background.mp4');
  }, []);

  return (
    <section className="relative min-h-screen">
      {heroVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      )}
      {/* Hero Content */}
    </section>
  );
};
```

### **2. Service-Seiten Videos:**

```tsx
// In Service-Seiten
const ServicePageWithVideo = ({ serviceType }: { serviceType: string }) => {
  const videoUrls = {
    sap: 'https://res.cloudinary.com/.../service-videos/sap-service.mp4',
    cloud: 'https://res.cloudinary.com/.../service-videos/cloud-service.mp4',
    ai: 'https://res.cloudinary.com/.../service-videos/ai-service.mp4',
    security: 'https://res.cloudinary.com/.../service-videos/security-service.mp4'
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <video
          src={videoUrls[serviceType]}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/5"></div>
      </div>
      {/* Service Content */}
    </div>
  );
};
```

## 💰 **Kosten-Optimierung**

### **Comet API Kosten:**
- **480p Videos:** ~$0.10 pro Video
- **720p Videos:** ~$0.15 pro Video  
- **1080p Videos:** ~$0.25 pro Video

### **Cloudinary Kosten:**
- **Storage:** $0.10 pro GB/Monat
- **Bandwidth:** $0.10 pro GB
- **Transformations:** Kostenlos

### **Optimierungs-Tipps:**
1. **Qualität wählen** basierend auf Verwendung
2. **Videos wiederverwenden** für ähnliche Bereiche
3. **Komprimierung nutzen** für kleinere Dateien
4. **CDN nutzen** für bessere Performance

## 🔒 **Sicherheit**

- ✅ **API Key Validierung** für alle Endpoints
- ✅ **Input Sanitization** für Prompts und Metadaten
- ✅ **Rate Limiting** für API Calls
- ✅ **Error Handling** ohne sensible Daten
- ✅ **Cloudinary Security** mit Signed URLs (optional)

## 🚀 **Deployment**

### **Vercel Deployment:**

```bash
# Umgebungsvariablen hinzufügen
npx vercel env add COMETAPI_KEY
npx vercel env add CLOUDINARY_CLOUD_NAME
npx vercel env add CLOUDINARY_API_KEY
npx vercel env add CLOUDINARY_API_SECRET

# Deploy
npx vercel --prod
```

### **Lokale Entwicklung:**

```bash
# Dependencies installieren
npm install

# Server starten
npm run dev

# CMS testen
# http://localhost:3000/de/cms/video-generator
# http://localhost:3000/de/cms/video-management
```

## 📊 **Monitoring & Analytics**

### **Cloudinary Dashboard:**
- Video-Uploads überwachen
- Bandwidth-Nutzung verfolgen
- Storage-Verbrauch kontrollieren

### **Comet API Dashboard:**
- Generierte Videos verfolgen
- Kosten überwachen
- API-Nutzung analysieren

## 🎉 **Fertig!**

Das CMS Video Generator System ist jetzt vollständig implementiert und einsatzbereit! 

**Nächste Schritte:**
1. **API Keys konfigurieren**
2. **Erstes Video generieren**
3. **In Website integrieren**
4. **Workflow optimieren**

Viel Erfolg mit Ihrem KI-Video-CMS! 🎬✨
