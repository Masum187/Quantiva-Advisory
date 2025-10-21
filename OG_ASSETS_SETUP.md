# OG Assets & Favicons Setup Guide

## ✅ **Complete Setup Implemented**

### 📁 **File Structure Created**

```
/public/
├─ favicon.ico                    // 32×32, ICO format (placeholder)
├─ apple-touch-icon.png           // 180×180, PNG format (placeholder)
├─ icon-192.png                   // PWA-Icon 192×192 (existing)
├─ icon-512.png                   // PWA-Icon 512×512 (existing)
├─ safari-pinned-tab.svg          // monochrome SVG (placeholder)
├─ site.webmanifest               // PWA manifest ✅
├─ browserconfig.xml              // for old Edge/IE Tiles ✅
├─ assets/
│    ├─ og-default.jpg           // 1200×630 - Homepage OG (placeholder)
│    ├─ og-cases.jpg             // 1200×630 - Cases page OG (placeholder)
│    └─ cases/
│         ├─ btp-hero.jpg       // Case-specific OG images (placeholders)
│         ├─ data-hero.jpg
│         └─ integration-hero.jpg
└─ robots.txt ✅
```

### 🎨 **OG Image Specifications**

- **Size**: 1200×630 px (minimum 600×315)
- **Format**: JPEG with 80–85% quality
- **Aspect Ratio**: 1.91:1 (Facebook/LinkedIn standard)
- **Content**: Important elements in central 80% area
- **No transparency**: Avoid PNG with transparency

### 🔧 **React Helmet Integration**

#### **Global Head (Homepage)**
```jsx
<Helmet>
  {/* Favicons */}
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0f766e" />

  {/* PWA / Manifest */}
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#0f766e" />
  <meta name="msapplication-config" content="/browserconfig.xml" />

  {/* Open Graph */}
  <meta property="og:image" content="/assets/og-default.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</Helmet>
```

#### **Cases Page**
```jsx
<meta property="og:image" content="/assets/og-cases.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

#### **Case Detail Pages**
```jsx
<meta property="og:image" content={image} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

{/* Optional: OG Video */}
{caseData.heroMedia && (
  <>
    <meta property="og:video" content={absUrl(caseData.heroMedia)} />
    <meta property="og:video:type" content="video/mp4" />
    <meta property="og:video:width" content="1280" />
    <meta property="og:video:height" content="720" />
  </>
)}
```

### 🚀 **Dynamic OG Images (Optional)**

**API Route**: `/api/og.ts` ✅ Created

**Usage**:
```typescript
const dynOg = `${ORIGIN}/api/og?title=${encodeURIComponent(pageTitleText)}`;
<meta property="og:image" content={dynOg} />
```

**Features**:
- Edge runtime for fast generation
- Customizable title parameter
- Quantiva branding with teal theme
- 1200×630 output size

### 📱 **PWA Configuration**

**site.webmanifest**:
```json
{
  "name": "Quantiva Advisory",
  "short_name": "Quantiva",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0f766e",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### 🧪 **Testing Checklist**

#### **1. HTML Head Validation**
- [ ] `<link rel="icon">` present
- [ ] `<link rel="apple-touch-icon">` present  
- [ ] `<link rel="manifest">` present
- [ ] `<meta name="theme-color">` set to `#0f766e`

#### **2. Social Media Testing**
- [ ] [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

#### **3. URLs to Test**
- [ ] `https://quantivaadvisory.com/` (homepage)
- [ ] `https://quantivaadvisory.com/de/` (German)
- [ ] `https://quantivaadvisory.com/en/` (English)
- [ ] `https://quantivaadvisory.com/de/cases` (cases page)
- [ ] `https://quantivaadvisory.com/de/cases/btp-delivery` (case detail)

### 🎯 **Next Steps**

1. **Replace Placeholder Files**:
   - Create actual favicon.ico (32×32)
   - Create apple-touch-icon.png (180×180)
   - Create safari-pinned-tab.svg (monochrome)
   - Create OG images (1200×630 each)

2. **Test Social Previews**:
   - Use social media debuggers
   - Verify image display
   - Check title/description

3. **Deploy to Vercel**:
   - All configurations ready
   - SPA routing configured
   - Caching optimized

### 📊 **Performance Benefits**

- **Static Assets**: 1 year cache (CSS/JS/fonts)
- **OG Images**: Optimized caching via Vercel
- **Dynamic OG**: Edge-cached generation
- **PWA Ready**: Offline capability
- **SEO Optimized**: Complete meta tags

---

**Status**: ✅ **Complete** - Ready for asset replacement and deployment!


