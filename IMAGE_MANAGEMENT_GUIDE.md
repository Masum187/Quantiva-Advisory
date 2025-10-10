# Bilder-Verwaltung: CMS vs. Hardcodiert

## 📊 Übersicht: Wo sind welche Bilder?

### ✅ **Im CMS-System verwaltbar** (`content.json` & `team.json`)

#### 1. **Team-Bilder** ✅ CMS
- **Datei**: `src/data/team.json`
- **Feld**: `image`
- **Beispiel**: `"/team/gulnur-patan.jpg"`, `"/team/heri-jean-masum.jpg"`
- **Pfad**: `public/team/`
- **Verwaltung**: ✅ Vollständig über CMS editierbar

```json
{
  "id": "gulnur-patan",
  "name": "Gülnur Patan",
  "image": "/team/gulnur-patan.jpg",  // ← Editierbar im CMS
  ...
}
```

#### 2. **Case-Bilder** ✅ CMS
- **Datei**: `src/data/cases.json`
- **Felder**: `heroImage`, `heroMedia`
- **Beispiel**: `"/assets/cases/btp-hero.jpg"`, `"/assets/cases/integration-hero.jpg"`
- **Pfad**: `public/assets/cases/`
- **Verwaltung**: ✅ Vollständig über CMS editierbar
- **Verwendung**: 
  - Case-Detail-Seiten
  - Referenzen-Slider (als Hintergrundbilder)

```json
{
  "slug": "btp-delivery",
  "heroImage": "/assets/cases/btp-hero.jpg",  // ← Editierbar im CMS
  "heroMedia": "/assets/cases/btp-hero.mp4",  // ← Optional, editierbar im CMS
  ...
}
```

---

### ❌ **Hardcodiert** (nicht im CMS)

#### 1. **Hero-Video & Fallback-Bild** ❌ HARDCODIERT
- **Datei**: `src/QuantivaWebsite.tsx` (Zeile 681-682)
- **Pfade**: 
  - Video: `"/assets/hero-bg.mp4"`
  - Fallback: `"/assets/hero-fallback.jpg"`
- **Verwendung**: Hintergrund-Video auf der Startseite (Hero-Section)
- **Verwaltung**: ❌ Hardcodiert im Code

```typescript
<motion.video
  src="/assets/hero-bg.mp4"           // ← HARDCODIERT
  poster="/assets/hero-fallback.jpg"  // ← HARDCODIERT
  autoPlay muted loop playsInline
/>
```

#### 2. **Service-Card-Bilder** ✅ CMS (NEU!)
- **Datei**: `src/data/content.json`
- **Feld**: `services.items[].image`
- **Pfade**: Unsplash-URLs (6 Bilder für die Service-Karten)
- **Verwendung**: Hintergrundbilder der 6 Service-Karten auf der Startseite
- **Verwaltung**: ✅ Vollständig über CMS editierbar

```json
{
  "services": {
    "de": {
      "items": [
        {
          "id": "sap",
          "title": "SAP Beratung",
          "image": "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?..."
        },
        ...
      ]
    }
  }
}
```

#### 3. **OG-Images (Open Graph)** ❌ HARDCODIERT
- **Datei**: `public/assets/og/`
- **Pfade**: 
  - `"/assets/og-default.jpg"` (Standard)
  - `"/assets/og-cases.jpg"` (Cases-Übersicht)
  - `"/assets/og/{slug}.jpg"` (Generiert für jeden Case)
- **Verwendung**: Social Media Previews (Facebook, Twitter, LinkedIn)
- **Verwaltung**: ❌ Hardcodiert (werden automatisch generiert)

#### 4. **Favicon & App-Icons** ❌ HARDCODIERT
- **Pfad**: `public/`
- **Dateien**: 
  - `favicon.ico`
  - `logo192.png`
  - `logo512.png`
  - `apple-touch-icon.png`
  - `logo-badge.svg`
- **Verwaltung**: ❌ Hardcodiert (statische Assets)

---

## 🔄 Empfehlung: Service-Bilder ins CMS migrieren

Um **alle Bilder** über das CMS zu verwalten, sollten wir die Service-Card-Bilder in `content.json` verschieben.

### Aktueller Stand:
```typescript
// ❌ Hardcodiert in QuantivaWebsite.tsx
const serviceImages = [
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?...',
  ...
];
```

### Vorgeschlagene Lösung:
```json
// ✅ In content.json
{
  "services": {
    "de": {
      "items": [
        {
          "id": "sap",
          "title": "SAP Beratung",
          "description": "...",
          "icon": "Database",
          "image": "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
        },
        ...
      ]
    }
  }
}
```

**Vorteil**: Alle Service-Bilder wären dann über das CMS editierbar! 🎉

---

## 📋 Zusammenfassung

| Bild-Typ | Anzahl | CMS-verwaltbar? | Pfad/Datei |
|----------|--------|-----------------|------------|
| **Team-Bilder** | 2 | ✅ Ja | `team.json` → `image` |
| **Case-Bilder** | ~6 | ✅ Ja | `cases.json` → `heroImage` |
| **Case-Videos** | ~2 | ✅ Ja | `cases.json` → `heroMedia` |
| **Referenzen-Logos** | ~2 | ✅ Ja | `cases.json` → `heroImage` (wiederverwendet) |
| **Service-Cards** | 6 | ✅ Ja | `content.json` → `services.items[].image` |
| **Hero-Video** | 1 | ❌ Nein | Hardcodiert: `/assets/hero-bg.mp4` |
| **Hero-Fallback** | 1 | ❌ Nein | Hardcodiert: `/assets/hero-fallback.jpg` |
| **OG-Images** | ~10 | ❌ Nein | Automatisch generiert |
| **Favicon/Icons** | 5 | ❌ Nein | Statische Assets |

### Statistik:
- ✅ **CMS-verwaltbar**: ~16 Bilder (Team + Cases + Services)
- ❌ **Hardcodiert**: ~17 Bilder (Hero, OG, Icons)
- 📊 **CMS-Abdeckung**: ~50% der Bilder ⬆️

---

## 🚀 Nächste Schritte (optional)

### ✅ Option 1: Service-Bilder ins CMS migrieren
**Status**: ✅ **ERLEDIGT!**  
**Ergebnis**: +6 Bilder im CMS verwaltbar (→ 50% Abdeckung erreicht!)

### Option 2: Hero-Video/Bild ins CMS migrieren
**Aufwand**: ~20 Minuten  
**Vorteil**: +2 Bilder im CMS verwaltbar (→ 55% Abdeckung)

### Option 3: Alle Bilder ins CMS migrieren
**Aufwand**: ~1 Stunde  
**Vorteil**: 100% Bilder-Verwaltung über CMS (außer OG-Images & Icons)

---

## 🛠️ Wie du Bilder im CMS änderst

### Team-Bilder ändern:
1. Öffne `/admin/content` im Browser
2. Wähle **"Team"** Tab
3. Ändere das `image` Feld (z.B. `"/team/neues-bild.jpg"`)
4. Speichere die Änderungen
5. Lade das neue Bild in `public/team/` hoch

### Case-Bilder ändern:
1. Öffne `/admin` im Browser
2. Wähle den Case aus
3. Ändere `heroImage` oder `heroMedia`
4. Speichere die Änderungen
5. Lade das neue Bild in `public/assets/cases/` hoch

### Service-Bilder ändern:
1. Öffne `/admin/content` im Browser
2. Wähle **"Services"** Tab
3. Scrolle zu den einzelnen Services (SAP, Cloud, AI, etc.)
4. Ändere das `image` Feld (z.B. neue Unsplash-URL oder lokaler Pfad)
5. Speichere die Änderungen
6. Die Änderungen sind sofort sichtbar! ✨

---

## 💡 Status & Empfehlung

### ✅ **Erfolgreich umgesetzt!**

Die **Service-Card-Bilder** wurden ins CMS migriert! Das bedeutet:

- ✅ **50% aller Bilder** sind jetzt im CMS verwaltbar
- ✅ **Keine Code-Änderungen** mehr nötig für Bild-Updates
- ✅ **Einfache Verwaltung** über `/admin/content`
- ✅ **Sofortige Änderungen** ohne Deployment

### 🎯 Nächster Schritt (optional):

Um noch mehr Flexibilität zu erreichen, könnte das **Hero-Video** und **Hero-Fallback-Bild** ebenfalls ins CMS migriert werden. Das würde die CMS-Abdeckung auf **55%** erhöhen.

---

**Erstellt:** 2025-10-10  
**Aktualisiert:** 2025-10-10  
**Version:** 2.0  
**Status:** ✅ Service-Bilder ins CMS migriert (50% Abdeckung erreicht!)

