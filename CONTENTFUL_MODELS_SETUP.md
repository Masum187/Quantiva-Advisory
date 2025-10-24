# 🎯 Contentful Content Models - Step by Step

## Erstellen Sie diese 4 Content Models JETZT

---

## 📍 **Öffnen Sie:**
```
https://app.contentful.com/spaces/bg0up8emai7s/content_types
```

---

## 1️⃣ **Content Model 1: Page Content**

### **Klicken Sie: "Add content type"**

**Name:** `Page Content`
**API Identifier:** `pageContent` (sollte automatisch sein)
**Description:** `Website page content (hero, about, etc.)`

### **Click "Create" → Dann "Add field":**

#### **Field 1: Internal Name**
```
Type: Text → Short text
Name: Internal Name
Field ID: internalName
✅ Required
✅ Unique
```

#### **Field 2: Section**
```
Type: Text → Short text
Name: Section
Field ID: section
✅ Required
Help: hero, about, services, navigation, footer
```

#### **Field 3: Language**
```
Type: Text → Short text
Name: Language
Field ID: language
✅ Required
Validations: Limit to values → de, en
```

#### **Field 4: Title**
```
Type: Text → Short text
Name: Title
Field ID: title
```

#### **Field 5: Subtitle**
```
Type: Text → Short text
Name: Subtitle
Field ID: subtitle
```

#### **Field 6: Description**
```
Type: Text → Long text
Name: Description
Field ID: description
```

#### **Field 7: Button Text**
```
Type: Text → Short text
Name: Button Text
Field ID: buttonText
```

#### **Field 8: Button Link**
```
Type: Text → Short text
Name: Button Link
Field ID: buttonLink
```

#### **Field 9: Image**
```
Type: Media → Single media
Name: Image
Field ID: image
```

#### **Field 10: Video URL**
```
Type: Text → Short text
Name: Video URL
Field ID: videoUrl
```

**✅ Click "Save"**

---

## 2️⃣ **Content Model 2: Service**

### **Click "Add content type"**

**Name:** `Service`
**API Identifier:** `service`
**Description:** `Service offerings`

### **Add fields:**

#### **Field 1: ID**
```
Type: Text → Short text
Name: ID
Field ID: id
✅ Required
✅ Unique
```

#### **Field 2: Title (DE)**
```
Type: Text → Short text
Name: Title (DE)
Field ID: titleDe
✅ Required
```

#### **Field 3: Title (EN)**
```
Type: Text → Short text
Name: Title (EN)
Field ID: titleEn
✅ Required
```

#### **Field 4: Description (DE)**
```
Type: Text → Long text
Name: Description (DE)
Field ID: descriptionDe
✅ Required
```

#### **Field 5: Description (EN)**
```
Type: Text → Long text
Name: Description (EN)
Field ID: descriptionEn
✅ Required
```

#### **Field 6: Icon**
```
Type: Text → Short text
Name: Icon
Field ID: icon
Help: lucide-react icon name (e.g., Database, Cloud)
```

#### **Field 7: Image**
```
Type: Media → Single media
Name: Image
Field ID: image
```

#### **Field 8: Order**
```
Type: Number → Integer
Name: Order
Field ID: order
✅ Required
Validations: Range → 1 to 100
```

**✅ Click "Save"**

---

## 3️⃣ **Content Model 3: Team Member**

### **Click "Add content type"**

**Name:** `Team Member`
**API Identifier:** `teamMember`
**Description:** `Team member profiles`

### **Add fields:**

#### **Field 1: Name**
```
Type: Text → Short text
Name: Name
Field ID: name
✅ Required
```

#### **Field 2: Role (DE)**
```
Type: Text → Short text
Name: Role (DE)
Field ID: roleDe
✅ Required
```

#### **Field 3: Role (EN)**
```
Type: Text → Short text
Name: Role (EN)
Field ID: roleEn
✅ Required
```

#### **Field 4: Bio (DE)**
```
Type: Text → Long text
Name: Bio (DE)
Field ID: bioDe
```

#### **Field 5: Bio (EN)**
```
Type: Text → Long text
Name: Bio (EN)
Field ID: bioEn
```

#### **Field 6: Image**
```
Type: Media → Single media
Name: Image
Field ID: image
```

#### **Field 7: Email**
```
Type: Text → Short text
Name: Email
Field ID: email
Validations: Format → Email
```

#### **Field 8: LinkedIn**
```
Type: Text → Short text
Name: LinkedIn
Field ID: linkedin
```

#### **Field 9: Order**
```
Type: Number → Integer
Name: Order
Field ID: order
✅ Required
Validations: Range → 1 to 100
```

**✅ Click "Save"**

---

## 4️⃣ **Content Model 4: Case Study**

### **Click "Add content type"**

**Name:** `Case Study`
**API Identifier:** `caseStudy`
**Description:** `Client case studies and references`

### **Add fields:**

#### **Field 1: Slug**
```
Type: Text → Short text
Name: Slug
Field ID: slug
✅ Required
✅ Unique
Help: URL slug (e.g., btp-delivery, api-first)
```

#### **Field 2: Title (DE)**
```
Type: Text → Short text
Name: Title (DE)
Field ID: titleDe
✅ Required
```

#### **Field 3: Title (EN)**
```
Type: Text → Short text
Name: Title (EN)
Field ID: titleEn
✅ Required
```

#### **Field 4: Subtitle (DE)**
```
Type: Text → Short text
Name: Subtitle (DE)
Field ID: subtitleDe
```

#### **Field 5: Subtitle (EN)**
```
Type: Text → Short text
Name: Subtitle (EN)
Field ID: subtitleEn
```

#### **Field 6: Category**
```
Type: Text → Short text
Name: Category
Field ID: category
Help: Cloud, Data, Integration, Security, etc.
```

#### **Field 7: Industry**
```
Type: Text → Short text
Name: Industry
Field ID: industry
Help: Pharma, Healthcare, Logistics, etc.
```

#### **Field 8: Hero Image**
```
Type: Media → Single media
Name: Hero Image
Field ID: heroImage
```

#### **Field 9: Goals (DE)**
```
Type: Text → Short text, list
Name: Goals (DE)
Field ID: goalsDe
```

#### **Field 10: Goals (EN)**
```
Type: Text → Short text, list
Name: Goals (EN)
Field ID: goalsEn
```

#### **Field 11: Solution (DE)**
```
Type: Text → Short text, list
Name: Solution (DE)
Field ID: solutionDe
```

#### **Field 12: Solution (EN)**
```
Type: Text → Short text, list
Name: Solution (EN)
Field ID: solutionEn
```

#### **Field 13: Results (DE)**
```
Type: Text → Short text, list
Name: Results (DE)
Field ID: resultsDe
```

#### **Field 14: Results (EN)**
```
Type: Text → Short text, list
Name: Results (EN)
Field ID: resultsEn
```

#### **Field 15: Technologies**
```
Type: Text → Short text, list
Name: Technologies
Field ID: technologies
Help: SAP BTP, GitHub Actions, etc.
```

#### **Field 16: Quote Text (DE)**
```
Type: Text → Long text
Name: Quote Text (DE)
Field ID: quoteTextDe
```

#### **Field 17: Quote Text (EN)**
```
Type: Text → Long text
Name: Quote Text (EN)
Field ID: quoteTextEn
```

#### **Field 18: Quote Author**
```
Type: Text → Short text
Name: Quote Author
Field ID: quoteAuthor
```

#### **Field 19: Published At**
```
Type: Date and time
Name: Published At
Field ID: publishedAt
```

#### **Field 20: Status**
```
Type: Text → Short text
Name: Status
Field ID: status
✅ Required
Validations: Limit to values → draft, published
```

**✅ Click "Save"**

---

## ✅ **Fertig mit Content Models!**

### **Checklist:**
- [ ] pageContent erstellt (10 fields)
- [ ] service erstellt (8 fields)
- [ ] teamMember erstellt (9 fields)
- [ ] caseStudy erstellt (20 fields)

---

## 🚀 **Nächster Schritt:**

Sagen Sie mir **"Models fertig"** und ich führe die Migration durch!

Oder wenn Probleme:
- Screenshot des Errors
- Welches Model
- Welches Field

**Geschätzte Zeit für alle 4 Models: 10-15 Minuten**






