# MDX vs. Alternativen – Schnellentscheidung

> 2-Minuten-Guide: Soll ich bei MDX bleiben oder wechseln?

---

## 🎯 TL;DR – Empfehlung

**✅ Bei MDX bleiben** – Ihr aktuelles Setup ist ideal!

**Grund:** CRA + CRACO + MDX funktioniert stabil, Ihr Team ist technisch versiert, und die 7 MDX-Dateien nutzen komplexe React-Integration.

---

## ⚡ Schnellcheck

### Bleiben Sie bei MDX, wenn:

- ✅ Ihr aktuelles Setup funktioniert
- ✅ Ihr Team kennt React/TypeScript
- ✅ Sie interaktive Dokumentation brauchen
- ✅ Sie React-Komponenten in Docs einbetten wollen

### Wechseln Sie zu Markdoc, wenn:

- ✅ Non-Tech-Autoren sollen Docs schreiben
- ✅ Sie JSX-Syntax in Docs vermeiden wollen
- ✅ Content und Code strikt trennen wollen

### Migrieren Sie zu Astro, wenn:

- ✅ Neuaufbau oder komplette Umstellung geplant
- ✅ Performance ist absolut kritisch
- ✅ Sie verschiedene Frameworks mixen wollen (React + Vue + Svelte)

### Fügen Sie Contentlayer hinzu, wenn:

- ✅ Sie >20 Content-Dateien haben
- ✅ Typsicherheit für Content kritisch ist
- ✅ Automatische Validierung gewünscht
- ✅ Next.js-Projekt

### Wechseln Sie zu Markdown + Hydration, wenn:

- 🚫 **NICHT EMPFOHLEN** – Nur für sehr simple Blogs

---

## 🔄 Migration zu Vite (Optional)

Falls Sie irgendwann von CRA zu Vite wechseln:

### Quick Start (5 Minuten):

```bash
# 1. Dependencies
npm install @mdx-js/rollup remark-gfm @types/mdx

# 2. vite.config.js anpassen
# (Kommentare in der Datei auskommentieren)

# 3. MDX-Typen aktivieren
mv src/vite-mdx.d.ts src/mdx.d.ts

# 4. package.json Scripts
# "dev": "vite"
# "build": "tsc && vite build"

# 5. Testen
npm run dev
```

**Details:** Siehe `/docs/MDX_ALTERNATIVES_GUIDE.md`

---

## 📊 Vergleich auf einen Blick

| Lösung | Setup | Vite | React | Aufwand | Empfehlung |
|--------|-------|------|-------|---------|------------|
| **MDX (aktuell)** | 🟡 | 🟡 | 🟢 | ✅ 0h | ⭐⭐⭐⭐⭐ |
| **MDX + Vite** | 🟡 | 🟢 | 🟢 | ⏱️ 2-4h | ⭐⭐⭐⭐ |
| **Markdoc** | 🟡 | 🟢 | 🟡 | ⏱️ 1-2 Tage | ⭐⭐⭐ |
| **Astro** | 🟠 | 🟢 | 🟢 | ⏱️ 3-5 Tage | ⭐⭐ |
| **Contentlayer** | 🟠 | 🟡 | 🟢 | ⏱️ 4-8h | ⭐⭐⭐ |
| **Markdown** | 🟢 | 🟢 | 🔴 | ⏱️ 1 Tag | ⭐ |

---

## 🎬 Nächste Schritte

### Jetzt:
- ✅ Bei MDX bleiben
- ✅ Diese Dokumentation als Referenz nutzen
- ✅ Normal weiterarbeiten

### Bei zukünftigen Events:

| Event | Aktion |
|-------|--------|
| **Vite-Migration nötig** | → `/docs/MDX_ALTERNATIVES_GUIDE.md` lesen → Vite + MDX Setup |
| **Non-Tech-Autoren kommen** | → Markdoc evaluieren |
| **>20 Content-Dateien** | → Contentlayer evaluieren |
| **Performance-Probleme** | → Astro evaluieren |

---

## 📚 Vollständige Dokumentation

Für detaillierte Infos, Code-Beispiele und Migration-Guides:

📖 **[MDX_ALTERNATIVES_GUIDE.md](./MDX_ALTERNATIVES_GUIDE.md)**

---

## 💡 FAQ

**Q: Warum funktioniert MDX nicht mit Vite "out of the box"?**  
A: Vite versteht MDX nicht nativ. Es braucht das `@mdx-js/rollup` Plugin, um MDX-Dateien zu parsen.

**Q: Ist Vite besser als CRA?**  
A: Vite ist schneller (HMR, Build), aber CRA funktioniert zuverlässig. Migration lohnt sich nur bei Problemen.

**Q: Soll ich jetzt zu Vite migrieren?**  
A: Nein, nur wenn Sie konkrete Probleme mit CRA haben.

**Q: Was ist der Unterschied zwischen MDX und Markdoc?**  
A: MDX = Markdown + JSX direkt. Markdoc = Markdown + Custom Tags (keine JSX-Syntax).

**Q: Funktioniert Contentlayer mit CRA?**  
A: Theoretisch ja, aber es ist primär für Next.js optimiert.

---

**Erstellt:** Oktober 2025  
**Status:** ✅ Aktiv  
**Nächste Review:** Bei Bedarf oder nach 6 Monaten






