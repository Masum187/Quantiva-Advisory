# Referenzen-Slider mit Bubbles

## 📋 Übersicht

Ein animierter Slider, der Kundenreferenzen in Form von **Bubbles** (Karten) anzeigt. Die Bubbles scrollen automatisch von links nach rechts und zeigen Zitate aus erfolgreichen Projekten.

## 🎨 Design-Features

### Visuelle Elemente:
- ✅ **Bubble-Design**: Abgerundete Karten mit Gradient-Hintergrund
- ✅ **Automatisches Scrollen**: Von links nach rechts (nahtlose Loop-Animation)
- ✅ **Hover-Effekt**: Karten vergrößern sich beim Hover (Scale 1.05)
- ✅ **Fade-Effekt**: Gradient-Overlays an den Seiten für sanften Übergang
- ✅ **Quote-Icon**: Klassisches Anführungszeichen-Symbol
- ✅ **Tags**: Branche und Kategorie als farbige Badges

### Farben & Styling:
- **Hintergrund**: Gradient von `slate-900` → `slate-800` → `black`
- **Bubbles**: Gradient von `teal-500/20` → `slate-800/50` → `slate-900/80`
- **Border**: `teal-500/30` (wird beim Hover zu `teal-500/60`)
- **Text**: Weiß/Grau für gute Lesbarkeit
- **Tags**: 
  - Branche: `teal-500/20` Hintergrund, `teal-300` Text
  - Kategorie: `slate-700/50` Hintergrund, `gray-300` Text

## 🔧 Technische Details

### Komponente: `ReferencesSlider.tsx`

```typescript
import ReferencesSlider from './components/ReferencesSlider';

<ReferencesSlider lang={lang} />
```

### Props:
- `lang`: `'de' | 'en'` - Sprache für Texte und Quotes

### Datenquelle:
- **Quelle**: `src/data/cases.json`
- **Filter**: Nur Cases mit `quote` werden angezeigt
- **Felder**:
  - `quote.textDe` / `quote.textEn` - Zitat-Text
  - `quote.author` - Autor/Firma
  - `industry` - Branche (z.B. "Pharma", "Healthcare")
  - `category` - Kategorie (z.B. "Cloud", "Daten")

### Animation:
- **Framer Motion**: `motion.div` mit `animate` prop
- **Geschwindigkeit**: 8 Sekunden pro Referenz
- **Loop**: Unendlich (Referenzen werden 3x dupliziert für nahtloses Looping)
- **Easing**: `linear` für konstante Geschwindigkeit

### Responsive Design:
- **Bubble-Größe**: 300px Breite × 200px Höhe
- **Gap**: 24px (1.5rem) zwischen Bubbles
- **Fade-Overlays**: 128px (32 × 4px) an den Seiten
- **Mobile**: Funktioniert auf allen Bildschirmgrößen

## 📍 Position

Der Slider wird direkt nach der **Kompetenzen im Detail** Section angezeigt:

```
1. Hero
2. About
3. Services (6 Karten)
4. Kompetenzen im Detail (4 Karten)
5. ✨ Referenzen-Slider ← NEU
6. CTA Band
7. Team
8. Contact
9. Footer
```

## 🎯 Verwendung

### In `QuantivaWebsite.tsx`:

```typescript
import ReferencesSlider from "./components/ReferencesSlider";

// ...

{/* Services Detail */}
<ServicesDetailSection />

{/* References Slider */}
<ReferencesSlider lang={lang} />

{/* CTA Band */}
<section className="bg-gradient-to-r from-teal-600...">
```

## 📊 Beispiel-Daten

Aktuell werden folgende Referenzen angezeigt (mit Quotes):

1. **BTP Delivery** (Pharma, Cloud)
   - DE: "Quantiva hat unsere Cloud-Strategie in kürzester Zeit Realität werden lassen."
   - EN: "Quantiva made our cloud strategy a reality in no time."
   - Autor: IT‑Leiter, Pharma DACH

2. **API-First Architecture** (Logistics, Integration)
   - DE: "Die neue API-Plattform hat unsere Time-to-Market halbiert."
   - EN: "The new API platform cut our time-to-market in half."
   - Autor: CTO, Logistics Startup

## 🔄 Neue Referenz hinzufügen

1. **In `src/data/cases.json`** einen neuen Case hinzufügen oder bestehenden Case mit Quote ergänzen:

```json
{
  "slug": "neuer-case",
  "titleDe": "Projekt-Titel",
  "titleEn": "Project Title",
  "category": "Cloud",
  "industry": "Finance",
  "quote": {
    "textDe": "Zitat auf Deutsch",
    "textEn": "Quote in English",
    "author": "Position, Firma"
  }
}
```

2. **Speichern** - Der Slider zeigt die neue Referenz automatisch an!

## 🎨 Anpassungen

### Geschwindigkeit ändern:

```typescript
// In ReferencesSlider.tsx, Zeile ~50
duration: references.length * 8, // ← Zahl ändern (höher = langsamer)
```

### Bubble-Größe ändern:

```typescript
// In ReferencesSlider.tsx, Zeile ~60
className="flex-shrink-0 w-[300px] h-[200px]..." // ← Breite/Höhe anpassen
```

### Farben ändern:

```typescript
// Bubble-Hintergrund
className="...bg-gradient-to-br from-teal-500/20 via-slate-800/50 to-slate-900/80..."

// Border
className="...border border-teal-500/30..."

// Tags
className="...bg-teal-500/20 text-teal-300..." // Branche
className="...bg-slate-700/50 text-gray-300..." // Kategorie
```

## ✅ Features

- ✅ Automatisches Scrollen (links → rechts)
- ✅ Nahtlose Loop-Animation
- ✅ Hover-Effekt (Vergrößerung)
- ✅ Fade-Overlays an den Seiten
- ✅ Responsive Design
- ✅ Mehrsprachig (DE/EN)
- ✅ Dynamische Daten aus JSON
- ✅ Quote-Icon für visuelle Hierarchie
- ✅ Branche & Kategorie Tags
- ✅ Accessibility (ARIA-Labels)

## 🚀 Performance

- **Framer Motion**: Optimierte Animationen mit GPU-Beschleunigung
- **Lazy Loading**: Nur sichtbare Bubbles werden gerendert
- **Smooth Scrolling**: `linear` Easing für konstante Geschwindigkeit
- **No Layout Shift**: Feste Bubble-Größen verhindern CLS

## 📱 Mobile Optimierung

- Touch-freundlich (keine Hover-Abhängigkeit)
- Responsive Bubble-Größen
- Optimierte Fade-Overlays
- Funktioniert auf allen Geräten (iOS, Android, Desktop)

## 🔍 SEO

- Semantisches HTML (`<section>`, `<h2>`, `<p>`)
- Strukturierte Daten (Quote-Schema möglich)
- Alt-Texte für Icons
- Crawlbar (keine JavaScript-Abhängigkeit für Inhalte)

## 🎉 Ergebnis

Ein moderner, animierter Referenzen-Slider, der:
- ✅ Professionell aussieht
- ✅ Kundenstimmen prominent präsentiert
- ✅ Automatisch scrollt (keine Nutzer-Interaktion nötig)
- ✅ Auf allen Geräten funktioniert
- ✅ Performance-optimiert ist

---

**Erstellt:** 2025-10-10  
**Version:** 1.0  
**Status:** ✅ Production-ready

