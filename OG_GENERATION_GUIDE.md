# Automated OG Image Generation System

## ✅ **Complete Implementation**

### 🎯 **What's Been Implemented:**

1. **Automated OG Generation Script** (`scripts/generate-og.mjs`):
   - ✅ Generates professional OG images for each case study
   - ✅ Uses Sharp for high-quality image processing
   - ✅ Fallback to gradient backgrounds when hero images unavailable
   - ✅ Includes Quantiva branding badge
   - ✅ Optimized for 1200×630 social media format

2. **Logo Badge** (`public/logo-badge.svg`):
   - ✅ Professional Quantiva branding
   - ✅ Teal gradient design
   - ✅ Optimized for overlay on OG images

3. **Build Integration**:
   - ✅ Automatic generation during `npm run build`
   - ✅ Post-build script runs sitemap + OG generation
   - ✅ Generated images automatically used in case detail pages

### 📁 **File Structure**

```
/public/
├─ logo-badge.svg              // Quantiva branding badge
├─ assets/
│    ├─ og/                    // Generated OG images
│    │    ├─ btp-delivery.jpg
│    │    ├─ data-quality.jpg
│    │    └─ api-first.jpg
│    └─ cases/                 // Hero images (optional)
│         ├─ btp-delivery-hero.jpg
│         ├─ data-quality-hero.jpg
│         └─ api-first-hero.jpg
/scripts/
└─ generate-og.mjs             // OG generation script
```

### 🎨 **OG Image Features**

- **Size**: 1200×630 px (perfect for social media)
- **Format**: JPEG with 85% quality
- **Background**: Teal gradient or hero image
- **Overlay**: Dark gradient with white text
- **Badge**: Quantiva logo in top-left corner
- **Text**: Case title + "Strategie · Engineering · Enablement"

### 🔧 **Usage**

#### **Manual Generation**
```bash
npm run generate:og
```

#### **Automatic Generation**
```bash
npm run build  # Includes OG generation via postbuild
```

#### **Generated Images**
- `public/assets/og/btp-delivery.jpg`
- `public/assets/og/data-quality.jpg`
- `public/assets/og/api-first.jpg`

### 📝 **Case Configuration**

The script uses this configuration in `scripts/generate-og.mjs`:

```javascript
const CASES = [
  { slug: "btp-delivery",     title: "BTP Delivery in 12 Wochen" },
  { slug: "data-quality",     title: "Stammdatenqualität & Audit" },
  { slug: "api-first",        title: "API-First Integration" }
];
```

### 🎯 **How It Works**

1. **Hero Image Detection**: Looks for hero images in `/public/assets/cases/`
2. **Image Validation**: Checks if files are valid image formats
3. **Background Selection**: Uses hero image or gradient background
4. **Composition**: Overlays text and badge on background
5. **Output**: Saves optimized JPEG to `/public/assets/og/`

### 🔄 **Integration with React**

The case detail pages automatically use generated OG images:

```typescript
// In QuantivaWebsite.tsx
const ogCandidate = `/assets/og/${caseData.slug}.jpg`;
const image = caseData.heroImage ? ogCandidate : '/assets/og-default.jpg';
```

### 🚀 **Adding New Cases**

1. **Add to script configuration**:
   ```javascript
   const CASES = [
     // ... existing cases
     { slug: "new-case", title: "New Case Title" }
   ];
   ```

2. **Optional**: Add hero image to `/public/assets/cases/new-case-hero.jpg`

3. **Run generation**:
   ```bash
   npm run generate:og
   ```

### 📊 **Performance Benefits**

- **Optimized Images**: 85% JPEG quality with mozjpeg
- **Consistent Branding**: All OG images follow same design
- **Automatic Generation**: No manual image creation needed
- **Social Media Ready**: Perfect dimensions for all platforms
- **Fallback System**: Works even without hero images

### 🧪 **Testing**

1. **Check Generated Images**:
   ```bash
   ls -la public/assets/og/
   ```

2. **Test Social Previews**:
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - LinkedIn Post Inspector

3. **Verify Integration**:
   - Check case detail pages use generated images
   - Verify OG meta tags are correct

### 🎉 **Ready for Production!**

The OG generation system is fully integrated and production-ready:

- ✅ **Automatic generation** during build
- ✅ **Professional design** with Quantiva branding
- ✅ **Social media optimized** dimensions
- ✅ **Fallback system** for missing hero images
- ✅ **Easy to extend** for new cases

Your website now generates beautiful, professional OG images automatically! 🚀

