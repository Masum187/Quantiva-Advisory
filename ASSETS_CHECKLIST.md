# 🎨 Assets Checklist

Überprüfung aller erforderlichen Assets für SEO, PWA und Branding.

---

## ✅ Vorhandene Assets

### Favicons & Icons
- ✅ `favicon.ico` (32×32, ICO format)
- ✅ `apple-touch-icon.png` (180×180, PNG format)
- ✅ `logo192.png` (192×192, PWA icon)
- ✅ `logo512.png` (512×512, PWA icon)
- ✅ `safari-pinned-tab.svg` (monochrome SVG for macOS Safari)
- ✅ `logo-badge.svg` (Quantiva logo badge)

### PWA Configuration
- ✅ `manifest.json` (PWA manifest)
- ✅ `site.webmanifest` (alternative PWA manifest)
- ✅ `browserconfig.xml` (for old Edge/IE Tiles)

### SEO & Robots
- ✅ `robots.txt` (SEO robots file)
- ✅ `sitemap.xml` (Generated sitemap)
- ✅ `_redirects` (Netlify SPA routing)

### Open Graph Images
- ✅ `assets/og-default.jpg` (1200×630, Homepage OG)
- ✅ `assets/og-cases.jpg` (1200×630, Cases page OG)
- ✅ `assets/og/_badge.png` (Quantiva badge overlay)

### Case Study Assets
- ✅ `assets/cases/btp-hero.jpg`
- ✅ `assets/cases/btp-delivery-hero.jpg`
- ✅ `assets/cases/data-hero.jpg`
- ✅ `assets/cases/data-quality-hero.jpg`
- ✅ `assets/cases/integration-hero.jpg`
- ✅ `assets/cases/api-first-hero.jpg`

### Generated OG Images
- ✅ `assets/og/btp-delivery.jpg`
- ✅ `assets/og/data-quality.jpg`
- ✅ `assets/og/api-first.jpg`

---

## 🔍 Assets Quality Check

### Image Specifications

#### Favicons
- **favicon.ico**: 32×32px or multi-resolution (16, 32, 48, 64)
- **apple-touch-icon.png**: 180×180px, PNG
- **logo192.png**: 192×192px, PNG (for PWA)
- **logo512.png**: 512×512px, PNG (for PWA)

#### Open Graph Images
- **Size**: 1200×630px (1.91:1 aspect ratio)
- **Format**: JPEG with 80-85% quality
- **Content**: Important elements in central 80% area
- **File size**: ≤500KB for optimal loading

#### Case Hero Images
- **Recommended size**: 1920×1080px or 1600×900px
- **Format**: JPEG or WebP
- **Quality**: 80-85%
- **File size**: ≤1MB

---

## 🎯 Recommended Actions

### 1. Verify Image Quality
Run a quick visual check on all images:
```bash
# Check file sizes
find public/assets -type f -name "*.jpg" -o -name "*.png" | xargs ls -lh

# Verify image dimensions (requires ImageMagick)
identify public/assets/og-*.jpg
identify public/assets/cases/*.jpg
```

### 2. Optimize Images (Optional)
If images are too large, optimize them:
```bash
# Install sharp-cli (if not installed)
npm install -g sharp-cli

# Optimize JPEG images
npx sharp -i public/assets/og-default.jpg -o public/assets/og-default-optimized.jpg -q 85
npx sharp -i public/assets/cases/*.jpg -o public/assets/cases/{name}-optimized.jpg -q 85

# Convert to WebP for better compression
npx sharp -i public/assets/cases/*.jpg -o public/assets/cases/{name}.webp -q 85
```

### 3. Add Missing Assets (If Any)

If you need to add new case studies or services, create corresponding assets:

#### For New Case Studies:
1. Hero Image: `public/assets/cases/{slug}-hero.jpg` (1920×1080)
2. OG Image: Generated automatically via `npm run generate:og`

#### For New Services/Capabilities:
1. Create service-specific images in `public/assets/services/`
2. Update `content.json` with image paths

---

## 📊 Asset Performance Metrics

### Current Status
- **Total Assets**: ~20 images
- **Average File Size**: ~150KB per image (estimated)
- **Total Assets Size**: ~3MB (estimated)

### Performance Goals
- ✅ All OG images ≤500KB
- ✅ All case hero images ≤1MB
- ✅ Total homepage assets ≤2MB (first load)
- ✅ Lazy loading for non-critical images

---

## 🔄 Asset Generation Scripts

### Automatic Generation
```bash
# Generate OG images from case data
npm run generate:og

# Generate sitemap
npm run generate:sitemap
```

### Manual Asset Workflows

#### Create New OG Image
1. Design in Figma/Canva (1200×630px)
2. Export as JPEG (85% quality)
3. Save to `public/assets/og/{name}.jpg`
4. Update case data or content.json with image path

#### Create New Favicon
1. Design logo (512×512px minimum)
2. Use [Favicon Generator](https://realfavicongenerator.net/)
3. Download package
4. Replace files in `public/`

---

## 🎨 Design Guidelines

### Brand Colors
- **Primary**: `#0f766e` (Teal 700)
- **Secondary**: `#14b8a6` (Teal 500)
- **Accent**: `#2dd4bf` (Teal 400)
- **Background**: `#000000` (Black)
- **Text**: `#ffffff` (White)

### Typography
- **Headings**: Inter, sans-serif (bold)
- **Body**: Inter, sans-serif (regular)

### Image Guidelines
- **Style**: Professional, modern, tech-focused
- **Subjects**: Abstract tech, code, data visualization, SAP interfaces
- **Mood**: Innovative, trustworthy, expert
- **Sources**: Unsplash, Pexels, custom photography

---

## 🚀 Deployment Checklist

Before deploying to production, verify:

- [ ] All assets exist and load correctly
- [ ] OG images display correctly on Facebook Sharing Debugger
- [ ] Twitter Card images display correctly on Twitter Card Validator
- [ ] Favicons appear in all browsers (Chrome, Firefox, Safari, Edge)
- [ ] PWA icons appear when "Add to Home Screen" is used
- [ ] Images are optimized (≤500KB for OG, ≤1MB for hero)
- [ ] All images have appropriate alt text (in React components)
- [ ] Lazy loading is enabled for below-the-fold images

---

## 📚 External Tools

### Image Optimization
- [TinyPNG](https://tinypng.com/) - PNG/JPEG compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [Sharp](https://sharp.pixelplumbing.com/) - Node.js image processing

### OG Image Testing
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Favicon Generation
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Favicon.io](https://favicon.io/)

---

**Last Updated**: October 2025  
**Status**: ✅ All critical assets present  
**Next Review**: Before major releases





