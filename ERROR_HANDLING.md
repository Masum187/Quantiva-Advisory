# 🛡️ Error Handling Documentation

## Overview

This Next.js application uses multiple layers of error handling to provide a robust user experience and helpful debugging information.

---

## Error Boundary Hierarchy

```
┌─────────────────────────────────────┐
│ app/global-error.tsx (Critical)    │ ← Root-level errors
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│ app/error.tsx (Application)        │ ← App-wide errors
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│ app/[lang]/error.tsx (optional)    │ ← Language-specific errors
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│ ErrorBoundary Component            │ ← Component-level errors
└─────────────────────────────────────┘
```

---

## 1. Global Error Handler (`app/global-error.tsx`)

**Purpose:** Catches critical errors that break the entire application, including errors in the root layout.

**When it triggers:**
- Errors in `app/layout.tsx`
- Server-side rendering failures
- Hydration errors
- Critical React errors

**Features:**
- ✅ Inline CSS (no dependencies)
- ✅ Minimal design
- ✅ Error logging
- ✅ Reset functionality
- ✅ Development error details

**Example:**
```typescript
// This error will be caught by global-error.tsx
throw new Error('Critical app initialization error');
```

---

## 2. Application Error Handler (`app/error.tsx`)

**Purpose:** Catches errors in route segments and their children.

**When it triggers:**
- Component render errors
- Data fetching errors
- Event handler errors
- Lifecycle method errors

**Features:**
- ✅ Animated UI (Framer Motion)
- ✅ User-friendly error messages
- ✅ "Try Again" and "Go Home" buttons
- ✅ Development error details
- ✅ Support email link

**Example:**
```typescript
// This error will be caught by error.tsx
const MyComponent = () => {
  throw new Error('Component render error');
};
```

---

## 3. 404 Not Found Pages

### Root 404 (`app/not-found.tsx`)
```typescript
// Triggered when no route matches
https://quantivaadvisory.com/nonexistent-page
```

### Language-Specific 404
- `app/de/not-found.tsx` (German)
- `app/en/not-found.tsx` (English)

**Features:**
- ✅ Beautiful 404 design
- ✅ Animated magnifying glass illustration
- ✅ Quick navigation links
- ✅ Language-specific messages

**Example:**
```typescript
// Manually trigger 404
import { notFound } from 'next/navigation';

export default function MyPage() {
  const data = await fetchData();
  if (!data) {
    notFound(); // Shows not-found.tsx
  }
}
```

---

## 4. Reusable ErrorBoundary Component

**Location:** `app/components/ErrorBoundary.tsx`

**Usage:**

### Basic Usage
```typescript
import { ErrorBoundary } from '@/app/components/ErrorBoundary';

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

### With Custom Fallback
```typescript
<ErrorBoundary
  fallback={
    <div>Custom error message</div>
  }
>
  <YourComponent />
</ErrorBoundary>
```

### With Error Handler
```typescript
<ErrorBoundary
  onError={(error, errorInfo) => {
    console.log('Custom error handling', error);
    // Send to analytics, etc.
  }}
>
  <YourComponent />
</ErrorBoundary>
```

### Inline Error Boundary
```typescript
import { InlineErrorBoundary } from '@/app/components/ErrorBoundary';

<InlineErrorBoundary errorMessage="Dieser Bereich ist momentan nicht verfügbar.">
  <OptionalFeature />
</InlineErrorBoundary>
```

---

## 5. API Route Error Handling

**Location:** `app/api/contact/route.ts`

**Error Types:**

### Rate Limiting (429)
```typescript
// Triggered after 5 requests per hour per IP
POST /api/contact
Response: 429 Too Many Requests
```

### Validation Errors (400)
```typescript
// Invalid input data
POST /api/contact
Response: 400 Bad Request
Body: { "error": "Invalid email" }
```

### Server Errors (500)
```typescript
// Internal server error
POST /api/contact
Response: 500 Internal Server Error
Body: { "error": "An error occurred. Please try again later." }
```

---

## Error Logging Strategy

### Development Mode
- ✅ Full error details in UI
- ✅ Console logs with stack traces
- ✅ Error IDs (digest)

### Production Mode
- ✅ User-friendly error messages
- ✅ Hidden technical details
- ✅ Error tracking (TODO: integrate Sentry)

### Integration Points (TODO)

```typescript
// In error.tsx, global-error.tsx, ErrorBoundary.tsx
useEffect(() => {
  console.error('Error:', error);
  
  // TODO: Send to error tracking service
  if (process.env.NODE_ENV === 'production') {
    Sentry.captureException(error);
  }
}, [error]);
```

---

## Testing Error Boundaries

### 1. Test Application Error
Create a test page:

```typescript
// app/test-error/page.tsx
'use client';

export default function TestError() {
  return (
    <button onClick={() => { throw new Error('Test error'); }}>
      Trigger Error
    </button>
  );
}
```

### 2. Test Global Error
Modify `app/layout.tsx`:

```typescript
export default function RootLayout({ children }) {
  if (process.env.TEST_GLOBAL_ERROR === 'true') {
    throw new Error('Test global error');
  }
  return <html>{children}</html>;
}
```

### 3. Test 404
Visit: `https://quantivaadvisory.com/this-does-not-exist`

### 4. Test Component Error
```typescript
import { ErrorBoundary } from '@/app/components/ErrorBoundary';

<ErrorBoundary>
  <button onClick={() => { throw new Error('Component error'); }}>
    Test Component Error
  </button>
</ErrorBoundary>
```

---

## Best Practices

### ✅ DO:
- Use `ErrorBoundary` for optional features
- Log errors with context
- Provide clear user guidance
- Test error scenarios
- Use appropriate error levels

### ❌ DON'T:
- Catch errors that should crash the app
- Show technical details to users (production)
- Ignore error logging
- Use error boundaries for flow control
- Forget to add "Try Again" functionality

---

## Error Monitoring Setup (TODO)

### Sentry Integration

1. **Install Sentry:**
```bash
npm install --save @sentry/nextjs
npx @sentry/wizard -i nextjs
```

2. **Configure:**
```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});
```

3. **Update Error Boundaries:**
```typescript
// In error.tsx
useEffect(() => {
  Sentry.captureException(error, {
    tags: {
      errorBoundary: 'app-error',
    },
  });
}, [error]);
```

---

## Error Response Format

### API Errors
```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "timestamp": "2025-10-12T10:00:00Z",
  "requestId": "req_123456"
}
```

### Component Errors
```typescript
interface ErrorState {
  hasError: boolean;
  error: Error | null;
  errorInfo?: ErrorInfo;
}
```

---

## Support & Contact

If errors persist or you need help:

**Email:** support@quantivaadvisory.com  
**Response Time:** Within 24 hours

---

## Changelog

### v1.0.0 (2025-10-12)
- ✅ Initial error boundary implementation
- ✅ Global error handler
- ✅ Application error handler
- ✅ 404 pages (DE/EN)
- ✅ Reusable ErrorBoundary component
- ✅ API error handling
- ✅ Documentation

### Future Improvements
- [ ] Sentry integration
- [ ] Error analytics dashboard
- [ ] Custom error pages per route
- [ ] Error recovery strategies
- [ ] User feedback on errors
