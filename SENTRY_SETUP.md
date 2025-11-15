# Sentry Setup für Quantiva Advisory

## ✅ Installation abgeschlossen

```bash
npm install @sentry/nextjs
```

Die Konfigurationsdateien wurden erstellt:
- ✅ `sentry.client.config.ts` - Client-side Konfiguration
- ✅ `sentry.server.config.ts` - Server-side Konfiguration
- ✅ `sentry.edge.config.ts` - Edge runtime Konfiguration
- ✅ `instrumentation.ts` - Automatische Instrumentierung
- ✅ Error Boundaries aktiviert in:
  - `app/error.tsx`
  - `app/global-error.tsx`
  - `app/components/ErrorBoundary.tsx`
- ✅ CSP-Header aktualisiert für Sentry-Domains
- ✅ `next.config.js` aktualisiert mit `NEXT_PUBLIC_SENTRY_DSN`

## Konfiguration

### 1. Environment Variables in Vercel

**Erforderlich:**
```bash
NEXT_PUBLIC_SENTRY_DSN=https://[your-dsn]@[org-id].ingest.sentry.io/[project-id]
```

**Optional (für Source Maps Upload):**
```bash
SENTRY_ORG=[your-org]
SENTRY_PROJECT=[your-project]
SENTRY_AUTH_TOKEN=[your-auth-token]
```

### 2. Error Boundaries aktiviert ✅

Alle Error Boundaries sind jetzt konfiguriert und senden Fehler an Sentry in Production:
- `app/error.tsx` - Application-level errors
- `app/global-error.tsx` - Critical/fatal errors
- `app/components/ErrorBoundary.tsx` - Component-level errors

### 3. Konfiguration Details

**Client-Side (`sentry.client.config.ts`):**
- Session Replay aktiviert (10% Sample Rate)
- Error Replay: 100% Sample Rate
- Performance Tracing: 10% in Production, 100% in Development
- **Logging aktiviert** (`enableLogs: true`)
- **Console Logging Integration** (log, warn, error)
- Browser Extension Errors werden gefiltert

**Server-Side (`sentry.server.config.ts`):**
- Performance Tracing: 10% in Production, 100% in Development
- **Logging aktiviert** (`enableLogs: true`)
- **Console Logging Integration** (log, warn, error)
- Development Connection Errors werden gefiltert

**Edge Runtime (`sentry.edge.config.ts`):**
- Performance Tracing: 10% in Production, 100% in Development

## Implementierte Tracing & Logging

### ✅ API Routes mit Tracing

**`app/api/contact/route.ts`:**
- Haupt-Span für `POST /api/contact` mit Attributen (lang, has_recaptcha, etc.)
- Child-Span für reCAPTCHA-Verifizierung
- Structured Logging mit `logger.info()`, `logger.warn()`, `logger.error()`
- Exception Handling mit `Sentry.captureException()`

### ✅ Client Components mit Tracing

**`app/components/ContactForm.tsx`:**
- UI-Click-Span für Form-Submission
- Child-Span für API-Call (`POST /api/contact`)
- Attribute für Validation, reCAPTCHA-Status, etc.
- Exception Handling für Fehlerfälle

### Logger-Beispiele

Die folgenden Logger-Levels sind verfügbar:

```typescript
import * as Sentry from '@sentry/nextjs';
const { logger } = Sentry;

// Trace (niedrigste Priorität)
logger.trace('Starting database connection', { database: 'users' });

// Debug
logger.debug(logger.fmt`Cache miss for user: ${userId}`);

// Info
logger.info('New contact form submission', {
  name: name.substring(0, 50),
  email: email.substring(0, 50),
  messageLength: message.length,
  language: lang,
});

// Warn
logger.warn('Rate limit reached for endpoint', {
  endpoint: '/api/contact',
  ip: rateLimitKey,
});

// Error
logger.error('Failed to process payment', {
  orderId: 'order_123',
  amount: 99.99,
});

// Fatal (höchste Priorität)
logger.fatal('Database connection pool exhausted', {
  database: 'users',
  activeConnections: 100,
});
```

## Testing

### Lokales Testing

```bash
# Development Server starten
npm run dev

# In der Browser-Konsole einen Test-Fehler auslösen:
# throw new Error('Test Sentry Integration');
```

### Production Testing

1. Setze `NEXT_PUBLIC_SENTRY_DSN` in Vercel Environment Variables
2. Deploye die Anwendung
3. Teste einen Fehler (z.B. durch eine fehlerhafte Route)
4. Prüfe das Sentry Dashboard auf den Fehler

### Manueller Test-Endpoint (optional)

Erstelle eine Test-Route zum Testen von Sentry:

```typescript
// app/api/test-sentry/route.ts
import * as Sentry from '@sentry/nextjs';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    throw new Error('Test Sentry Error');
  } catch (error) {
    Sentry.captureException(error);
    return NextResponse.json({ error: 'Test error sent to Sentry' }, { status: 500 });
  }
}
```

## Monitoring

- Sentry Dashboard: https://sentry.io/organizations/[org]/issues/
- Alerts konfigurieren für:
  - Critical Errors
  - Performance Issues
  - Security Issues

## Wichtige Hinweise

- ✅ DSN niemals in Git committen (nur über Environment Variables)
- ✅ Auth Token nur in Vercel Environment Variables setzen
- ✅ Source Maps können automatisch via Sentry CLI hochgeladen werden (optional)
- ✅ CSP-Header wurden aktualisiert, um Sentry-Domains zu erlauben
- ✅ Fehler werden nur in Production an Sentry gesendet (Development-Fehler werden gefiltert)

## Nächste Schritte

1. **Sentry Account erstellen** (falls noch nicht vorhanden):
   - Gehe zu https://sentry.io/signup/
   - Erstelle ein neues Projekt (Next.js)

2. **DSN konfigurieren**:
   - Kopiere den DSN aus dem Sentry Dashboard
   - Setze `NEXT_PUBLIC_SENTRY_DSN` in Vercel Environment Variables

3. **Source Maps Upload (optional)**:
   ```bash
   # Installiere Sentry CLI
   npm install -g @sentry/cli
   
   # Konfiguriere .sentryclirc
   [auth]
   token=your-auth-token
   
   [defaults]
   org=your-org
   project=your-project
   ```

4. **Alerts konfigurieren**:
   - Im Sentry Dashboard → Alerts
   - Erstelle Alerts für:
     - Critical Errors (Level: Fatal)
     - Performance Issues (P95 > 2s)
     - Security Issues

## Troubleshooting

**Fehler werden nicht an Sentry gesendet:**
- Prüfe, ob `NEXT_PUBLIC_SENTRY_DSN` gesetzt ist
- Prüfe, ob `NODE_ENV === 'production'` (Development-Fehler werden nicht gesendet)
- Prüfe Browser-Konsole auf CSP-Verletzungen

**CSP-Fehler:**
- Die CSP wurde bereits aktualisiert, um `*.sentry.io` und `*.ingest.sentry.io` zu erlauben
- Falls weitere Domains benötigt werden, aktualisiere `next.config.js`

