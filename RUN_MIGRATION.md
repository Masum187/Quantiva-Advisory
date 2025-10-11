# 🚀 Migration ausführen

## JETZT: Daten von JSON nach Contentful migrieren

---

## 📋 **Schritt 1: Management Token holen**

### **Öffnen Sie:**
```
https://app.contentful.com/account/profile/cma_tokens
```

### **Actions:**
1. Click **"Generate personal token"**
2. Name: `Migration Script`
3. **WICHTIG:** Kopieren Sie den Token SOFORT (wird nur einmal angezeigt!)
4. Speichern Sie ihn sicher

---

## ⚡ **Schritt 2: Migration ausführen**

### **Im Terminal:**
```bash
cd /Users/herijeanmasum/Developer/quantiva-website

# Export tokens (temporär für diese Session)
export CONTENTFUL_SPACE_ID="bg0up8emai7s"
export CONTENTFUL_MANAGEMENT_TOKEN="CFPAT-IHR_MANAGEMENT_TOKEN_HIER"

# Migration starten
npm run contentful:migrate
```

---

## 📊 **Was wird migriert:**

### **Page Content:**
```
✅ hero (DE + EN)
✅ about (DE + EN)
✅ services (DE + EN)
✅ navigation (DE + EN)
✅ footer (DE + EN)
```

### **Services:**
```
✅ SAP Beratung
✅ Cloud Solutions
✅ AI & Machine Learning
✅ System Integration
✅ Cyber Security
✅ Enablement & Training
```

### **Team Members:**
```
✅ Alle Team-Mitglieder (falls vorhanden in team.json)
```

### **Case Studies:**
```
✅ BTP Delivery
✅ Data Quality
✅ API-First Integration
✅ (alle aus cases.json)
```

---

## ✅ **Erfolgreiche Migration sieht so aus:**

```
🚀 Contentful Migration Tool
───────────────────────────────────────────

Space ID:     bg0up8emai7s
Environment:  master

📂 Loading local JSON data...

🔌 Connecting to Contentful...
✅ Connected!

📄 Migrating Page Content...
  ✅ hero (de)
  ✅ hero (en)
  ✅ about (de)
  ✅ about (en)
  ✅ navigation (de)
  ✅ navigation (en)
  ✅ footer (de)
  ✅ footer (en)

🛠️ Migrating Services...
  ✅ SAP Beratung
  ✅ Cloud Solutions
  ✅ AI & Machine Learning
  ✅ System Integration
  ✅ Cyber Security
  ✅ Enablement & Training

👥 Migrating Team Members...
  ✅ (alle Team-Mitglieder)

📚 Migrating Case Studies...
  ✅ btp-delivery
  ✅ data-quality
  ✅ api-first
  ✅ (alle weiteren)

✅ Migration Complete!
```

---

## 🆘 **Troubleshooting**

### **Error: "Management token missing"**
```bash
# Check ob export funktioniert hat:
echo $CONTENTFUL_MANAGEMENT_TOKEN

# Sollte den Token zeigen, nicht leer sein
```

### **Error: "Content type not found"**
```
→ Prüfen Sie ob alle 4 Content Models erstellt sind:
  https://app.contentful.com/spaces/bg0up8emai7s/content_types

Müssen vorhanden sein:
✅ pageContent
✅ service
✅ teamMember
✅ caseStudy
```

### **Error: "Field ID mismatch"**
```
→ Field IDs müssen EXAKT sein:
  titleDe (nicht title_de)
  buttonText (nicht button_text)
  
→ Prüfen Sie Field IDs in Content Models
→ Vergleichen Sie mit CONTENTFUL_MODELS_SETUP.md
```

---

## 🎯 **Nach erfolgreicher Migration:**

### **Check in Contentful:**
```
https://app.contentful.com/spaces/bg0up8emai7s/entries

Sollte zeigen:
✅ Alle Page Content Entries
✅ 6 Services
✅ Team Members
✅ Case Studies
```

### **Check lokal:**
```bash
# Dev-Server sollte laufen
http://localhost:3000/

→ Content sollte von Contentful laden!
→ Check Browser Console (F12) für Errors
```

---

## ✨ **Ready für Production!**

Nach erfolgreicher Migration:
1. ✅ Vercel Environment Variables setzen
2. ✅ Webhook konfigurieren
3. ✅ Deployen
4. ✅ FERTIG!

