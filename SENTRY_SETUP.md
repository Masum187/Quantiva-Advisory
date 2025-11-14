# Sentry Setup für Quantiva Advisory

## Installation

```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

Der Wizard wird automatisch:
- `sentry.client.config.ts` erstellen
- `sentry.server.config.ts` erstellen
- `sentry.edge.config.ts` erstellen
- `next.config.js` anpassen
- `.sentryclirc` erstellen (optional)

## Konfiguration

### 1. Environment Variables in Vercel

```bash
SENTRY_DSN=https://[your-dsn]@[org-id].ingest.sentry.io/[project-id]
SENTRY_ORG=[your-org]
SENTRY_PROJECT=[your-project]
SENTRY_AUTH_TOKEN=[your-auth-token]
```

### 2. Error Boundaries aktivieren

Nach Installation die TODO-Kommentare in folgenden Dateien entfernen:

- `app/error.tsx` (Zeile 18-21)
- `app/global-error.tsx` (Zeile 16-17)
- `app/components/ErrorBoundary.tsx` (Zeile 50-59)

### 3. Beispiel-Integration

```typescript
// app/error.tsx
import * as Sentry from '@sentry/nextjs';

useEffect(() => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.captureException(error);
  }
}, [error]);
```

## Testing

```bash
# Test Error Tracking
npm run dev
# Öffne http://localhost:3000/test-error (wenn Route existiert)
```

## Monitoring

- Sentry Dashboard: https://sentry.io/organizations/[org]/issues/
- Alerts konfigurieren für:
  - Critical Errors
  - Performance Issues
  - Security Issues

## Wichtige Hinweise

- DSN niemals in Git committen
- Auth Token nur in Vercel Environment Variables
- Source Maps automatisch via Sentry CLI

