# fix(ci,docs): align sitemap paths with Next.js + update docs

## 🎯 **Zusammenfassung**

Dieser PR behebt alle verbleibenden Inkonsistenzen zwischen der alten CRA/SPA-Struktur und der neuen Next.js 15 App Router Architektur.

## 🔧 **Was wurde geändert?**

### **CI/CD Workflows**
- ✅ **build.yml**: Sitemap-Prüfung von `.next/server/app/sitemap.xml` → `public/sitemap.xml`
- ✅ **sitemap.yml**: Trigger-Pfade von `src/data/*` → `app/lib/data/*` und `app/components/**/*`
- ✅ **validate-cases.yml**: Kommentierte Pfade von `src/data/*` → `app/lib/data/*`

### **Dokumentation**
- ✅ **README.md**: Vollständig von CRA auf Next.js 15 umgestellt
- ✅ **DEPLOYMENT.md**: `sitemap.js` → `sitemap.mjs`, SPA → Next.js App Router
- ✅ **JSON_DATA_SYSTEM.md**: `src/data/*` → `app/lib/data/*`, `sitemap.js` → `sitemap.mjs`
- ✅ **VERCEL_DEPLOYMENT.md**: Komplett von CRA auf Next.js umgeschrieben
- ✅ **Admin-Dashboard-Docs**: Alle 4 Admin-Dokumentationen auf `app/` Struktur aktualisiert
- ✅ **GITHUB_LINKS.md**: Komponenten- und Datenpfade aktualisiert
- ✅ **HERO_VIDEO_*.md**: `src/QuantivaWebsite.tsx` → `app/page.tsx`

### **Scripts & Tools**
- ✅ **report-cases.mjs**: Pfade von `src/data/` → `app/lib/data/`
- ✅ **deploy.sh**: Entfernt (nicht mehr benötigt mit Vercel)

## 📊 **Statistiken**
- **12+ Dateien geändert** insgesamt
- **Alle veralteten `src/*` Referenzen** entfernt
- **Konsistente Next.js 15 App Router Struktur** 🚀

## 🧪 **Testing**
- ✅ Lokaler Build funktioniert: `npm run build`
- ✅ Sitemap wird korrekt in `public/sitemap.xml` generiert
- ✅ Alle Workflows verwenden korrekte Pfade
- ✅ Dokumentation ist konsistent

## 🎉 **Ergebnis**
Das Projekt ist jetzt vollständig auf Next.js 15 App Router migriert mit konsistenter Dokumentation und korrekten CI/CD-Pfaden. Keine veralteten CRA/SPA Referenzen mehr vorhanden!

---

**Commits in diesem PR:**
- `e21ecc3` - fix: Update HERO_VIDEO documentation for Next.js App Router
- `5b8dbca` - fix: Complete final Next.js migration fixes  
- `ad42a2a` - fix: Complete Next.js migration - fix remaining path inconsistencies
- `141747e` - fix: Update all documentation and scripts for Next.js