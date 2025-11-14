# Vercel Environment Variables Setup

## Required Environment Variables

Set these in **Vercel Dashboard → Settings → Environment Variables**:

### Production

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://quantivaadvisory.com

# Contentful CMS
REACT_APP_CONTENTFUL_SPACE_ID=your-space-id
REACT_APP_CONTENTFUL_ACCESS_TOKEN=your-access-token
REACT_APP_CONTENTFUL_PREVIEW_TOKEN=your-preview-token

# Cloudinary CDN
REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name

# reCAPTCHA v3 (optional, for contact form)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key

# Sentry (after installation)
SENTRY_DSN=https://[your-dsn]@[org-id].ingest.sentry.io/[project-id]
SENTRY_ORG=your-org
SENTRY_PROJECT=your-project
SENTRY_AUTH_TOKEN=your-auth-token
```

## Setup Instructions

1. **Go to Vercel Dashboard**
   - Select your project
   - Navigate to **Settings** → **Environment Variables**

2. **Add Variables**
   - Click **Add New**
   - Enter variable name and value
   - Select environments (Production, Preview, Development)
   - Click **Save**

3. **Redeploy**
   - After adding variables, trigger a new deployment
   - Or wait for next automatic deployment

## Important Notes

- `NEXT_PUBLIC_*` variables are exposed to the browser
- Never commit secrets to Git
- Use Vercel's environment variable encryption
- Test in Preview environment before Production

## Verification

After deployment, verify variables are loaded:

```bash
# Check in browser console
console.log(process.env.NEXT_PUBLIC_SITE_URL);
```

Or check Vercel deployment logs for environment variable usage.

