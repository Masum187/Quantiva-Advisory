# Local Development Scripts

This directory contains scripts for **local development only**. These are **not used** in production deployments.

## 📁 Contents

### `server.js` - Local Express Server

A simple Express server for **local testing** of the production build.

#### Purpose:
- Serve the production build locally (from `/build` directory)
- Test contact form API endpoint
- Simulate SPA routing locally

#### ⚠️ **NOT USED IN PRODUCTION**

**Production deployment** uses:
- **Vercel** for hosting (static SPA)
- **Vercel Serverless Functions** for API routes (if needed)
- **No Express server** required

#### Usage:

1. **Build the production app:**
   ```bash
   npm run build
   ```

2. **Start the local server:**
   ```bash
   node scripts/local-dev/server.js
   ```

3. **Visit:**
   ```
   http://localhost:3001
   ```

#### Features:

- ✅ Serves static build files
- ✅ Contact form API endpoint (`/api/contact`)
- ✅ SPA routing (catch-all handler)
- ✅ CORS enabled for local testing
- ✅ Basic validation and error handling

#### Environment Variables:

- `PORT` - Server port (default: 3001)

#### Dependencies:

These are **only used locally** and are listed in `package.json`:
- `express` - Web server framework
- `cors` - Cross-origin resource sharing
- `body-parser` - Request body parsing

---

## 🚀 Production vs. Development

| Feature | Development | Production |
|---------|-------------|------------|
| **Server** | Express (`server.js`) | Vercel (static hosting) |
| **Dev Server** | `npm start` (CRA) | - |
| **Build** | `npm run build` | `npm run build` |
| **API Routes** | `/api/contact` (Express) | Vercel Serverless (if needed) |
| **Routing** | Express catch-all | Vercel SPA rewrites |

---

## 📝 Notes

- This server is **optional** for local testing
- Most development should use `npm start` (CRA dev server)
- Production deployments **ignore** this file entirely
- Contact form submissions are **logged** (not sent) in this local setup

---

**Last Updated:** 2025-10-10

