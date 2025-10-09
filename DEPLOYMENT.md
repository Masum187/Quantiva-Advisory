# Deployment Guide - Quantiva Advisory Website

## 🚀 Production Deployment Checklist

### 1. Domain Configuration
- [x] **BASE_URL**: Set to `https://quantivaadvisory.com` in `sitemap.js`
- [x] **ORIGIN**: Updated in `QuantivaWebsite.tsx`
- [x] **robots.txt**: Points to correct sitemap URL

### 2. Language Redirect System
- [x] **Root redirect**: `/` automatically redirects to `/{de|en}/` based on user preference
- [x] **Language detection**: Uses `navigator.language` or saved preference
- [x] **Preference saving**: Language choice is saved in localStorage
- [x] **URL structure**: All routes are language-prefixed (`/de/`, `/en/`)
- [x] **Provider wrapping**: LanguageProvider wraps the entire app at the root level
- [x] **Type safety**: Proper TypeScript types for language codes and routing

### 3. Routing Structure
- [x] **Language-prefixed routes**: All routes use `/:lng/*` pattern
- [x] **Valid language codes**: Only `de` and `en` are accepted
- [x] **Invalid language handling**: Redirects to `/de/` for invalid codes
- [x] **404 handling**: Unknown routes redirect to language home
- [x] **Type safety**: Proper TypeScript types for route parameters

### 4. SPA Routing Configuration

#### Netlify
- [x] **`public/_redirects`**: `/* /index.html 200`
- [x] **Build command**: `npm run build`
- [x] **Publish directory**: `build`

#### Vercel
- [x] **`vercel.json`**: Complete Vercel configuration with SPA routing, security headers, and caching
- [x] **Framework preset**: Vite (or React)
- [x] **Build command**: `npm run build`
- [x] **SPA routing**: Handles `/de/*`, `/en/*`, `/cases/*` routes
- [x] **Security headers**: HSTS, CSP, X-Frame-Options, etc.
- [x] **Caching**: Optimized cache headers for assets and sitemap

#### Nginx
- [x] **`nginx.conf`**: Complete server configuration
- [x] **SPA fallback**: `try_files $uri $uri/ /index.html;`
- [x] **SSL/HTTPS**: Configured for production

### 5. SEO & Sitemap
- [x] **Dynamic sitemap**: Imports case studies from `src/data/cases.js`
- [x] **Hreflang alternates**: Proper language switching
- [x] **x-default URLs**: Points to language-less canonical URLs
- [x] **Automatic generation**: Via `postbuild` hook

### 6. Data Management
- [x] **Centralized data**: `src/data/cases.js` for case studies
- [x] **Dynamic imports**: Sitemap reads from data source
- [x] **Easy updates**: Add new cases by updating data file

## 🔧 Platform-Specific Instructions

### Netlify Deployment
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. The `_redirects` file will handle SPA routing automatically

### Vercel Deployment
1. Connect GitHub repository to Vercel
2. Framework preset: Vite (or React)
3. The `vercel.json` file includes:
   - SPA routing for `/de/*`, `/en/*`, `/cases/*`
   - Security headers (HSTS, CSP, X-Frame-Options, etc.)
   - Caching headers for optimal performance
   - Sitemap caching configuration

### Nginx Deployment
1. Copy `nginx.conf` to your server's sites-available directory
2. Update SSL certificate paths
3. Update document root path
4. Enable the site: `sudo ln -s /etc/nginx/sites-available/quantiva /etc/nginx/sites-enabled/`
5. Test configuration: `sudo nginx -t`
6. Reload nginx: `sudo systemctl reload nginx`

## 📊 SEO Considerations

### x-default Strategy
Current configuration uses language-less URLs as x-default:
- `https://quantivaadvisory.com/` (x-default)
- `https://quantivaadvisory.com/de/` (German)
- `https://quantivaadvisory.com/en/` (English)

**Alternative**: If you prefer `/de` as canonical:
```javascript
// In sitemap.js, change xDefault logic:
const xDefault = `${BASE_URL}/de${basePath}`;
```

### OG Images Strategy
- **Current**: Same OG images for all languages
- **Alternative**: Language-specific OG images
  - Update Helmet meta tags in each route
  - Use different image paths per language

### Content Updates
1. **Add new case study**:
   - Add to `src/data/cases.js`
   - Sitemap will automatically include it
   - No manual sitemap updates needed

2. **Update existing content**:
   - Edit `src/data/cases.js`
   - Rebuild: `npm run build`
   - Sitemap regenerates automatically

## 🚨 Important Notes

### Build Process
- Sitemap is generated automatically after each build
- No manual sitemap updates required
- Case studies are imported dynamically

### URL Structure
- All URLs include proper hreflang alternates
- Search engines can properly index multilingual content
- Clean URL structure: `/de/`, `/en/`, `/de/cases/`, etc.

### Performance
- Static assets cached for 1 year
- Gzip compression enabled
- Optimized bundle sizes

## 🔍 Testing Checklist

Before going live:
- [ ] Test all routes: `/`, `/de/`, `/en/`, `/cases`, `/de/cases`, `/en/cases`
- [ ] Test case detail pages: `/de/cases/btp-delivery`, etc.
- [ ] Verify sitemap: `https://quantivaadvisory.com/sitemap.xml`
- [ ] Check robots.txt: `https://quantivaadvisory.com/robots.txt`
- [ ] Test language switching
- [ ] Verify OG meta tags
- [ ] Test contact form functionality
- [ ] Check mobile responsiveness
- [ ] Validate HTML/CSS
- [ ] Test page load speeds

## 📈 Post-Deployment

1. **Submit sitemap to Google Search Console**
2. **Monitor Core Web Vitals**
3. **Set up analytics tracking**
4. **Configure error monitoring**
5. **Test contact form email delivery**
