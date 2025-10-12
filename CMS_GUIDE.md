# Content Management System (CMS) - Benutzerhandbuch

## 🎯 Übersicht

Das Quantiva CMS ermöglicht die **zentrale Verwaltung aller Website-Inhalte** ohne Code-Änderungen direkt in den React-Komponenten.

### ✅ Was ist CMS-verwaltet?

- ✅ **Website-Texte** (Hero, About, Services, Contact, etc.)
- ✅ **Team-Mitglieder** (Name, Rolle, Expertise, Beschreibung)
- ✅ **Case Studies** (bereits im Admin Dashboard)
- ✅ **Navigation** (Menü-Items, CTA-Buttons)
- ✅ **Footer** (Links, Kontakt, Social Media)

### ❌ Was ist noch hart codiert?

- Strukturelle Layouts (werden über Code geändert)
- Styling & Design (Tailwind CSS in Komponenten)
- Interaktionen & Animationen (Framer Motion)

---

## 📁 Datei-Struktur

```
src/
├── data/
│   ├── content.json      # 🆕 Alle Website-Texte (DE/EN)
│   ├── team.json          # 🆕 Team-Mitglieder
│   └── cases.json         # ✅ Case Studies (bereits vorhanden)
├── contexts/
│   └── ContentContext.tsx # 🆕 React Context für Content-Zugriff
├── ContentAdmin.tsx       # 🆕 Visual Content Editor
└── QuantivaWebsite.tsx    # Verwendet Content aus JSON
```

---

## 🚀 Content Editor nutzen

### **1. Editor öffnen**

```
https://quantiva-advisory-37je.vercel.app/admin/content
```

oder lokal:

```bash
npm start
# Dann: http://localhost:3000/admin/content
```

### **2. Content bearbeiten**

#### **a) Sprache wählen**
- Klicke auf "Deutsch" oder "English" in der Sidebar

#### **b) Sektion auswählen**
- Wähle eine Sektion (z.B. "hero", "about", "services")

#### **c) Bearbeiten**
- **Code-Modus:** Bearbeite JSON direkt im Textarea
- **Preview-Modus:** Klicke "Preview" um formatierte Ansicht zu sehen

#### **d) Speichern**
- Klicke **"Export"** → Download `content.json`
- Ersetze `src/data/content.json` mit der neuen Datei
- Commit & Push zu GitHub

### **3. Team-Mitglieder bearbeiten**

- Klicke auf **"Team Members"** Tab
- Bearbeite JSON oder nutze die Card-Ansicht
- Export → Download `team.json`
- Ersetze `src/data/team.json`

---

## 📝 Content-Struktur

### **Hero Section**

```json
{
  "hero": {
    "de": {
      "title": "Digitale Transformation für dein Unternehmen",
      "subtitle": "SAP · Cloud · AI · Integration",
      "description": "Strategische Beratung...",
      "ctaPrimary": "Jetzt Beraten lassen",
      "ctaSecondary": "Referenzen ansehen"
    },
    "en": { ... }
  }
}
```

**Verwendung in Code:**
```tsx
const hero = useHero(lang);
<h1>{hero.title}</h1>
```

### **Team Member**

```json
{
  "id": "gulnur-patan",
  "name": "Gülnur Patan",
  "initials": "GP",
  "roleDe": "CEO & Founder",
  "roleEn": "CEO & Founder",
  "expertiseDe": "Strategie, Leadership...",
  "expertiseEn": "Strategy, leadership...",
  "descriptionDe": "Visionäre Führungskraft...",
  "descriptionEn": "Visionary leader...",
  "image": "/team/gulnur-patan.jpg",
  "email": "gulnur.patan@quantivaadvisory.com",
  "linkedin": "https://linkedin.com/in/gulnur-patan",
  "order": 1
}
```

**Verwendung in Code:**
```tsx
const team = useTeam(); // Sorted by order
team.map(member => <Card>{member.name}</Card>)
```

---

## 🔄 Workflow: Content ändern

### **Variante 1: Visual Editor (Empfohlen)**

1. Öffne `/admin/content`
2. Bearbeite Texte
3. Export → Download JSON
4. Ersetze Datei in `src/data/`
5. Commit & Push
6. Vercel deployed automatisch

### **Variante 2: Direkt in GitHub**

1. Gehe zu GitHub Repository
2. Navigiere zu `src/data/content.json`
3. Klicke "Edit" (Stift-Icon)
4. Bearbeite JSON
5. Commit direkt auf `main` Branch
6. Vercel deployed automatisch

### **Variante 3: Lokal mit VS Code**

1. Öffne `src/data/content.json` in VS Code
2. Bearbeite JSON (mit Auto-Complete)
3. Save & Commit
4. Push to GitHub
5. Vercel deployed automatisch

---

## 🛠️ Entwickler: Custom Hooks

```tsx
import {
  useHero,
  useAbout,
  useServices,
  useContactContent,
  useMeetingContent,
  useCareersContent,
  useFooterContent,
  useNavigationContent,
  useTeam
} from './contexts/ContentContext';

function MyComponent() {
  const { lang } = useLanguage();
  const hero = useHero(lang);
  const team = useTeam();
  
  return (
    <div>
      <h1>{hero.title}</h1>
      {team.map(member => <Card key={member.id}>{member.name}</Card>)}
    </div>
  );
}
```

---

## 📊 Content-Sektionen

| Sektion | Beschreibung | Verwendung |
|---------|--------------|------------|
| `hero` | Hero Section (Title, Subtitle, CTA) | Homepage Top |
| `about` | Über uns (Text, Stats) | About Section |
| `services` | Services-Liste (6 Items) | Services Section |
| `contact` | Kontaktformular (Labels, Success/Error) | Contact Section |
| `meeting` | Calendly (Title, Subtitle, URL) | Meeting Section |
| `careers` | Karriere (Positionen, Description) | Careers Section |
| `footer` | Footer (Links, Legal, Social) | Footer Component |
| `navigation` | Navigation (Menu Items, CTA) | Header Navigation |

---

## 🎨 Neue Inhalte hinzufügen

### **Neue Service hinzufügen:**

1. Öffne `content.json` → `services.de.items`
2. Füge neues Item hinzu:
```json
{
  "id": "new-service",
  "title": "Neuer Service",
  "description": "Beschreibung...",
  "icon": "Database"
}
```
3. Wiederhole für `services.en.items`
4. Icon muss in `lucide-react` verfügbar sein

### **Neue Position hinzufügen:**

1. Öffne `content.json` → `careers.de.positions`
2. Füge neue Position hinzu:
```json
{
  "id": "new-position",
  "title": "Neue Position",
  "location": "Standort / Remote",
  "type": "Vollzeit"
}
```
3. Wiederhole für `careers.en.positions`

### **Neues Team-Mitglied:**

1. Öffne `team.json`
2. Füge neues Member-Objekt hinzu
3. `order` bestimmt die Reihenfolge
4. Bild hochladen nach `/public/team/`

---

## 🔮 Roadmap: Phase 3 (Optional)

### **Headless CMS Integration**

Für professionellen Editor mit Live-Preview:

- **Sanity.io** (Empfohlen)
  - Visual Editor
  - Real-time Collaboration
  - Asset Management
  - Free Tier verfügbar

- **Strapi**
  - Self-hosted
  - Open Source
  - GraphQL API

- **Contentful**
  - Enterprise-ready
  - Multi-language Support
  - Paid

**Migration:** JSON-Struktur bleibt gleich, nur Backend ändert sich!

---

## ❓ FAQ

### **Warum JSON und nicht Datenbank?**
- ✅ Einfach & transparent
- ✅ Git-Versionskontrolle
- ✅ Keine Datenbank notwendig
- ✅ Schnell implementiert

### **Wie kann ich Live-Änderungen machen?**
Für Live-Änderungen ohne Deployment:
→ Headless CMS (Sanity/Strapi/Contentful)

### **Kann ich die Struktur ändern?**
Ja! Bearbeite einfach die JSON-Dateien und passe die TypeScript-Typen an.

---

## 📞 Support

Bei Fragen zum CMS:
- GitHub Issues: https://github.com/Masum187/Quantiva-Advisory/issues
- Email: dev@quantivaadvisory.com

---

## 🎉 Zusammenfassung

**Was du jetzt hast:**
✅ Zentrales Content Management  
✅ Keine hart codierten Texte mehr  
✅ Visual Editor (`/admin/content`)  
✅ Import/Export Funktionalität  
✅ Multi-Language Support (DE/EN)  
✅ Team-Verwaltung  
✅ Einfach erweiterbar  

**Nächste Schritte:**
1. Content-Texte anpassen über `/admin/content`
2. Team-Mitglieder aktualisieren
3. Optional: Headless CMS integrieren (Sanity.io)

Viel Erfolg! 🚀






