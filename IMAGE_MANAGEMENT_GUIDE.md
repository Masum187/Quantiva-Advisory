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

### ✅ **Neu im CMS** (vorher hardcodiert)

#### 1. **Hero-Video & Fallback-Bild** ✅ CMS (NEU!)
- **Datei**: `src/data/content.json`
- **Felder**: `hero.backgroundVideo`, `hero.backgroundImage`
- **Pfade**: 
  - Video: `"/assets/hero-bg.mp4"`
  - Fallback: `"/assets/hero-fallback.jpg"`
- **Verwendung**: Hintergrund-Video auf der Startseite (Hero-Section)
- **Verwaltung**: ✅ Vollständig über CMS editierbar

```json
{
  "hero": {
    "de": {
      "backgroundVideo": "/assets/hero-bg.mp4",
      "backgroundImage": "/assets/hero-fallback.jpg",
      ...
    }
  }
}
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

---

### ❌ **Weiterhin Hardcodiert**

#### 1. **OG-Images (Open Graph)** ❌ HARDCODIERT
- **Datei**: `public/assets/og/`
- **Pfade**: 
  - `"/assets/og-default.jpg"` (Standard)
  - `"/assets/og-cases.jpg"` (Cases-Übersicht)
  - `"/assets/og/{slug}.jpg"` (Generiert für jeden Case)
- **Verwendung**: Social Media Previews (Facebook, Twitter, LinkedIn)
- **Verwaltung**: ❌ Hardcodiert (werden automatisch generiert)

#### 2. **Favicon & App-Icons** ❌ HARDCODIERT
- **Pfad**: `public/`
- **Dateien**: 
  - `favicon.ico`
  - `logo192.png`
  - `logo512.png`
  - `apple-touch-icon.png`
  - `logo-badge.svg`
- **Verwaltung**: ❌ Hardcodiert (statische Assets)


---

## 📋 Zusammenfassung

| Bild-Typ | Anzahl | CMS-verwaltbar? | Pfad/Datei |
|----------|--------|-----------------|------------|
| **Team-Bilder** | 2 | ✅ Ja | `team.json` → `image` |
| **Case-Bilder** | ~6 | ✅ Ja | `cases.json` → `heroImage` |
| **Case-Videos** | ~2 | ✅ Ja | `cases.json` → `heroMedia` |
| **Referenzen-Logos** | ~2 | ✅ Ja | `cases.json` → `heroImage` (wiederverwendet) |
| **Service-Cards** | 6 | ✅ Ja | `content.json` → `services.items[].image` |
| **Hero-Video** | 1 | ✅ Ja | `content.json` → `hero.backgroundVideo` |
| **Hero-Fallback** | 1 | ✅ Ja | `content.json` → `hero.backgroundImage` |
| **OG-Images** | ~10 | ❌ Nein | Automatisch generiert |
| **Favicon/Icons** | 5 | ❌ Nein | Statische Assets |

### Statistik:
- ✅ **CMS-verwaltbar**: ~18 Bilder (Team + Cases + Services + Hero)
- ❌ **Hardcodiert**: ~15 Bilder (OG, Icons)
- 📊 **CMS-Abdeckung**: ~55% der Bilder ⬆️⬆️

---

## 🚀 Migration abgeschlossen!

### ✅ Option 1: Service-Bilder ins CMS migrieren
**Status**: ✅ **ERLEDIGT!**  
**Ergebnis**: +6 Bilder im CMS verwaltbar

### ✅ Option 2: Hero-Video/Bild ins CMS migrieren
**Status**: ✅ **ERLEDIGT!**  
**Ergebnis**: +2 Bilder im CMS verwaltbar

### 🎯 Ergebnis:
- **55% CMS-Abdeckung erreicht!** (von 30% auf 55%)
- **18 von 33 Bildern** sind jetzt CMS-verwaltbar
- **Keine Code-Änderungen** mehr nötig für die meisten Bild-Updates

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

### Hero-Video/Bild ändern:
1. Öffne `/admin/content` im Browser
2. Wähle **"Hero"** Tab
3. Ändere `backgroundVideo` (z.B. `/assets/neues-video.mp4`)
4. Ändere `backgroundImage` (z.B. `/assets/neues-bild.jpg`)
5. Speichere die Änderungen
6. Lade die neuen Dateien in `public/assets/` hoch
7. Die Änderungen sind sofort sichtbar! 🎥

---

## 💡 Status & Empfehlung

### ✅ **Vollständig umgesetzt!**

Die **Service-Card-Bilder** und **Hero-Medien** wurden ins CMS migriert! Das bedeutet:

- ✅ **55% aller Bilder** sind jetzt im CMS verwaltbar (von 30% auf 55%!)
- ✅ **Keine Code-Änderungen** mehr nötig für Bild-Updates
- ✅ **Einfache Verwaltung** über `/admin/content`
- ✅ **Sofortige Änderungen** ohne Deployment
- ✅ **Hero-Video & Fallback** jetzt auch CMS-verwaltbar

### 🎯 Was jetzt im CMS verwaltbar ist:

1. **Team-Bilder** (2) → `/admin/content` → Team Tab
2. **Case-Bilder & Videos** (~8) → `/admin` → Cases
3. **Service-Card-Bilder** (6) → `/admin/content` → Services Tab
4. **Hero-Video & Fallback** (2) → `/admin/content` → Hero Tab

**Gesamt: 18 von 33 Bildern (55%)** 🎉

---

**Erstellt:** 2025-10-10  
**Aktualisiert:** 2025-10-10  
**Version:** 3.0  
**Status:** ✅ Service-Bilder & Hero-Medien ins CMS migriert (55% Abdeckung erreicht!)

