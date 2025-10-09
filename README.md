# Quantiva Advisory Website

A modern, responsive website for Quantiva Advisory with internationalization (German/English), SEO optimization, case studies, and advanced animations.

## Features

- 🌐 **Bilingual Support**: German and English language switching with URL prefixes (/de/, /en/)
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🔍 **Advanced SEO**: Meta tags, OpenGraph, Twitter Cards, JSON-LD structured data
- 🎬 **Smooth Animations**: Framer Motion powered animations and transitions
- 📄 **Case Studies**: Dedicated pages for case studies and service offerings
- 🧭 **Smart Navigation**: ScrollSpy navigation with active state indicators
- 🎨 **Modern UI**: Clean, professional design with parallax effects
- ⚡ **Fast Loading**: Optimized React build with code splitting

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **SEO**: React Helmet
- **Backend**: Express.js (for contact form API)
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd quantiva-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

1. Start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running with API Server

To test the contact form functionality, run both the React app and the API server:

```bash
npm run dev
```

This will start:
- React development server on port 3000
- Express API server on port 3001

### Building for Production

1. **Automatic sitemap generation**: The sitemap is automatically generated after each build:
   ```bash
   npm run build
   ```

2. **Manual sitemap generation**: Generate sitemap independently:
   ```bash
   npm run generate:sitemap
   ```

3. **Build with sitemap**: Explicitly build with sitemap generation:
   ```bash
   npm run build:sitemap
   ```

4. Start the production server:
   ```bash
   npm run server
   ```

The production build will be served on port 3001 (or the PORT environment variable).

### Migration to Vite (Optional)

If you want to migrate from Create React App to Vite for faster builds:

1. Install Vite and plugins:
   ```bash
   npm install --save-dev vite @vitejs/plugin-react
   ```

2. Update package.json scripts:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     }
   }
   ```

3. The sitemap generation will continue to work with the `postbuild` hook.

## Project Structure

```
quantiva-website/
├── .github/
│   └── workflows/         # GitHub Actions CI/CD
│       ├── build.yml      # Basic build workflow
│       └── deploy.yml     # Production deployment workflow
├── public/                # Static files
│   ├── _redirects        # Netlify SPA routing
│   ├── sitemap.xml       # Generated sitemap
│   └── robots.txt        # SEO robots file
├── src/
│   ├── data/
│   │   └── cases.js      # Centralized case studies data
│   ├── QuantivaWebsite.tsx # Main website component with all pages
│   ├── App.tsx           # App wrapper with routing
│   └── index.css         # Tailwind CSS imports
├── sitemap.js            # Dynamic sitemap generation script
├── server.js             # Express API server
├── vercel.json           # Vercel deployment configuration
├── nginx.conf            # Nginx server configuration
├── deploy.sh             # Deployment script
├── DEPLOYMENT.md         # Comprehensive deployment guide
├── package.json          # Dependencies and scripts
└── tailwind.config.js    # Tailwind configuration
```

## Pages & Routes

- `/` or `/de/` or `/en/` - Main homepage
- `/cases` or `/de/cases` or `/en/cases` - Case studies overview
- `/cases/:slug` or `/de/cases/:slug` or `/en/cases/:slug` - Individual case study details

## API Endpoints

### POST /api/contact

Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services.",
  "lang": "en"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message. We will get back to you soon!"
}
```

## OG Assets & Favicons Setup

### Required Files in `/public/`

The following files need to be created with actual assets (currently placeholders):

```
/public/
├─ favicon.ico                    // 32×32, ICO format
├─ apple-touch-icon.png           // 180×180, PNG format
├─ icon-192.png                   // PWA-Icon 192×192, PNG
├─ icon-512.png                   // PWA-Icon 512×512, PNG
├─ safari-pinned-tab.svg          // monochrome SVG for macOS Safari
├─ site.webmanifest               // PWA manifest (✅ created)
├─ browserconfig.xml              // for old Edge/IE Tiles (✅ created)
├─ assets/
│    ├─ og-default.jpg           // 1200×630 (1.91:1) - Homepage OG
│    ├─ og-cases.jpg             // 1200×630 - Cases page OG
│    └─ cases/
│         ├─ btp-hero.jpg       // Case-specific OG images
│         ├─ data-hero.jpg
│         └─ integration-hero.jpg
└─ robots.txt (✅ created)
```

### OG Image Specifications

- **Size**: 1200×630 px (minimum 600×315)
- **Format**: JPEG with 80–85% quality
- **Content**: Important elements in central 80% area
- **No transparency**: Avoid PNG with transparency

### PWA Configuration

The `site.webmanifest` includes:
- App name: "Quantiva Advisory"
- Theme color: `#0f766e` (teal)
- Icons: 192×192 and 512×512
- Display mode: standalone

### Centralized Data Management

The website uses a centralized JSON data source for all case studies:

1. **Data Source**: `src/data/cases.json` (✅ created)
2. **Features**:
   - Single source of truth for all case data
   - Bilingual content (German/English)
   - Complete case details (goals, solutions, results, tech stack)
   - Used by React components and build scripts

3. **Data Structure**:
   ```json
   {
     "slug": "btp-delivery",
     "titleDe": "BTP Delivery in 12 Wochen",
     "titleEn": "BTP Delivery in 12 Weeks",
     "heroImage": "/assets/cases/btp-hero.jpg",
     "goalsDe": ["Schnellere Deployments"],
     "tech": ["SAP BTP", "GitHub Actions"]
   }
   ```

### Data Validation System

The website includes a comprehensive validation system for case data:

1. **Validation Script**: `scripts/validate-cases.mjs` (✅ created)
2. **Features**:
   - JSON Schema validation with AJV
   - Custom business logic checks
   - Asset file existence validation
   - Strict mode for production builds
   - CLI flag support (`--strict`)

3. **Usage**:
   ```bash
   # Soft validation (warnings allowed)
   npm run validate:cases
   
   # Strict validation (errors fail build)
   npm run validate:cases:strict
   ```

4. **Validation Rules**:
   - Unique slugs across all cases
   - Required titles in at least one language
   - Valid file paths for images/videos
   - Proper quote structure
   - Asset file existence (strict mode)

5. **Build Integration**:
   - Automatic strict validation in `postbuild`
   - Build fails if validation errors found
   - GitHub Actions workflow for CI validation

### Terminal Dashboard & Reporting

The website includes a comprehensive reporting system with taxonomy validation:

1. **Terminal Dashboard**: `scripts/report-cases.mjs` (✅ created)
2. **Features**:
   - Colorized terminal table with case status
   - Asset existence validation (Hero, OG, Media)
   - Bilingual content verification
   - **Taxonomy whitelist validation** (Categories & Industries)
   - **Distribution statistics** for categories and industries
   - Markdown export for PR comments
   - OK/WARN status counting

3. **Usage**:
   ```bash
   npm run report:cases
   ```

4. **Output**:
   - Terminal table with colorized status
   - **Distribution statistics** for categories and industries
   - **Invalid taxonomy values** marked with `(!)` in red
   - Markdown report: `reports/cases-report.md`
   - Status summary (OK/WARN counts)

5. **GitHub Actions Integration**:
   - Automatic PR comments with case reports
   - Sticky comments (updates existing, no spam)
   - Runs after build and validation

### Taxonomy Management

The website includes a centralized taxonomy system for consistent categorization:

1. **Taxonomy Configuration**: `src/data/taxonomy.json` (✅ created)
2. **Features**:
   - **Whitelist validation** for categories and industries
   - **Case-sensitive** validation for consistency
   - **Soft validation** (warnings) vs **strict validation** (errors)
   - **Distribution tracking** in reports

3. **Configuration**:
   ```json
   {
     "categories": ["Cloud", "Data", "Daten", "Integration", "Security", "Quality", "Enablement"],
     "industries": ["Pharma", "Healthcare", "Logistics", "Logistik", "Manufacturing", "Retail", "Finance", "Public"]
   }
   ```

4. **Validation Behavior**:
   - **Soft mode** (`npm run validate:cases`): Shows warnings for invalid taxonomy
   - **Strict mode** (`npm run validate:cases:strict`): Fails build on invalid taxonomy
   - **Build integration**: Strict validation runs in `postbuild` script

5. **Report Integration**:
   - **Invalid values** marked with `(!)` in terminal output
   - **Distribution statistics** show usage counts
   - **Whitelist reference** included in markdown reports

### Admin Dashboard

The website includes a comprehensive admin dashboard for case management:

1. **Admin Dashboard**: `src/AdminDashboard.tsx` (✅ created)
2. **Features**:
   - **Visual case management** with data grid
   - **Real-time validation** with error highlighting
   - **Import/Export** JSON functionality
   - **Bulk operations** (select, delete multiple cases)
   - **Distribution charts** for categories and industries
   - **Dark/Light theme** support
   - **Responsive design** for mobile and desktop

3. **Access**:
   - **URL**: `/admin` (no language prefix required)
   - **Features**: Full CRUD operations for case studies
   - **Validation**: Real-time validation with detailed error messages
   - **Data persistence**: Local storage for demo data

4. **UI Components**:
   - **Data Grid**: Sortable, filterable table with case information
   - **Drawer Editor**: Slide-out panel for editing cases
   - **KPI Cards**: Statistics overview (total cases, filtered, selected)
   - **Charts**: Bar chart showing category distribution
   - **Search & Filters**: Real-time search and taxonomy filtering

5. **Validation Features**:
   - **Live validation** during editing
   - **Taxonomy whitelist** enforcement
   - **File path validation** for images and videos
   - **Required field** validation
   - **Error tooltips** with detailed messages

### Automated OG Image Generation

The website includes an automated OG image generation system:

1. **Script**: `scripts/generate-og.mjs` (✅ created)
2. **Features**:
   - Reads case data from JSON source
   - Generates professional OG images for each case study
   - Uses hero images when available, skips invalid files gracefully
   - Includes Quantiva branding badge
   - Optimized for 1200×630 social media format
   - Automatic generation during build process

3. **Usage**:
   ```bash
   npm run generate:og
   ```

4. **Generated Files**:
   - `public/assets/og/btp-delivery.jpg`
   - `public/assets/og/data-quality.jpg`
   - `public/assets/og/api-first.jpg`

### Dynamic OG Images (Optional)

For dynamic OG image generation on Vercel:

1. **API Route**: `/api/og.ts` (✅ created)
2. **Usage**: Replace static images with dynamic URLs:
   ```typescript
   const dynOg = `${ORIGIN}/api/og?title=${encodeURIComponent(pageTitleText)}`;
   <meta property="og:image" content={dynOg} />
   ```

### Testing Checklist

1. **HTML Head Validation**:
   - [ ] `<link rel="icon">` present
   - [ ] `<link rel="apple-touch-icon">` present
   - [ ] `<link rel="manifest">` present
   - [ ] `<meta name="theme-color">` set

2. **Social Media Testing**:
   - [ ] Facebook Sharing Debugger
   - [ ] Twitter Card Validator
   - [ ] LinkedIn Post Inspector

3. **URLs to Test**:
   - [ ] `https://quantivaadvisory.com/` (homepage)
   - [ ] `https://quantivaadvisory.com/de/` (German)
   - [ ] `https://quantivaadvisory.com/en/` (English)
   - [ ] `https://quantivaadvisory.com/de/cases` (cases page)
   - [ ] `https://quantivaadvisory.com/de/cases/btp-delivery` (case detail)

## SEO & Sitemap Management

### Sitemap Generation

The website includes an advanced sitemap generator that creates a comprehensive `sitemap.xml` file with:

- **Clean Structure**: Only localized URLs (`/de/`, `/en/`) with proper hreflang alternates
- **SEO Optimized**: Each URL includes all language alternatives and x-default
- **Efficient**: 10 URLs total (2 static pages + 3 case studies × 2 languages)
- **Automatic**: Generated after each build via `postbuild` hook
- **Configurable**: Easy to add new pages or case studies

**Automatic Generation**: The sitemap is automatically generated after each build via the `postbuild` hook.

**Manual Generation**:
```bash
npm run generate:sitemap
# or
npm run sitemap
```

### Updating Case Studies

When adding new case studies:

1. Add the case slug to the `caseSlugs` array in `sitemap.js`
2. Add the case details to the `CASE_DETAILS` array in `QuantivaWebsite.tsx`
3. Regenerate the sitemap: `npm run sitemap`

### SEO Configuration

- **IMPORTANT**: Update `BASE_URL` in `sitemap.js` to your production domain:
  ```javascript
  const BASE_URL = "https://your-domain.com"; // Replace with your actual domain
  ```
- Modify meta tags in the Helmet components
- Update structured data (JSON-LD) as needed

## Customization

### Updating Content

All text content is stored in the `T` object at the top of `QuantivaWebsite.tsx`. You can easily modify:

- Company information
- Service descriptions
- Contact details
- SEO metadata

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Component styles directly in the JSX
- Responsive breakpoints

### Career Form URL

Update the `CAREER_FORM_URL` constant to point to your actual career application form (Google Forms, Typeform, etc.).

## Deployment

### Automated Deployment with GitHub Actions

The project includes GitHub Actions workflows for automated building and deployment:

1. **Basic Build Workflow** (`.github/workflows/build.yml`):
   - Runs on every push
   - Builds the project with automatic sitemap generation
   - Verifies build output

2. **Production Deployment** (`.github/workflows/deploy.yml`):
   - Runs on pushes to `main` branch
   - Includes deployment options for Vercel, Netlify, and GitHub Pages
   - Uncomment the deployment method you prefer

### Manual Deployment

Use the included deployment script:
```bash
./deploy.sh
```

Or build manually:
```bash
npm run build
# Upload build/ directory to your web server
```

### Deployment Platforms

#### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the React app and deploy it
3. The sitemap will be automatically generated on each deployment

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. The sitemap will be automatically generated on each build

#### GitHub Pages
1. Uncomment the GitHub Pages section in `.github/workflows/deploy.yml`
2. Push to `main` branch to trigger deployment
3. Enable GitHub Pages in repository settings

#### Heroku
1. Create a Heroku app
2. Set the buildpack to Node.js
3. Deploy:
   ```bash
   git push heroku main
   ```

## Environment Variables

- `PORT`: Server port (default: 3001)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Quantiva Advisory.

## Contact

For questions or support, contact:
- Email: info@quantiva.example
- Phone: +49 123 456 7890
