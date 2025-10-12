# 🛡️ Error Handling & Error Boundaries

## Overview

This project uses Next.js 15's built-in error handling system with custom error boundaries for a professional user experience.

---

## Error Boundary Files

### 1. **`app/error.tsx`** - Root Error Boundary
Catches errors in the root application level.

**Features:**
- ✅ Beautiful error UI with animations
- ✅ "Try Again" functionality
- ✅ Development mode shows error details
- ✅ Production mode hides sensitive info
- ✅ Support contact information

**Triggers when:**
- JavaScript errors in components
- Failed data fetching in Server Components
- Rendering errors

### 2. **`app/global-error.tsx`** - Global Error Boundary
Catches critical errors in the root layout (rare, but important).

**Features:**
- ✅ Inline styles (no external CSS needed)
- ✅ Works even if CSS fails to load
- ✅ Minimal dependencies
- ✅ Critical error reporting

**Triggers when:**
- Root layout errors
- Critical app-level failures
- Errors in `app/layout.tsx`

### 3. **`app/not-found.tsx`** - 404 Error Page
Custom 404 page for missing routes.

**Features:**
- ✅ Beautiful animated 404 design
- ✅ Helpful navigation links
- ✅ "Go back" functionality
- ✅ Popular pages suggestions

**Triggers when:**
- User navigates to non-existent route
- `notFound()` function is called
- Route not defined in file structure

### 4. **Language-Specific Error Boundaries**
- `app/de/error.tsx` - German error messages
- `app/en/error.tsx` - English error messages

**Features:**
- ✅ Localized error messages
- ✅ Stack trace in development mode
- ✅ Consistent with language context

---

## Error Hierarchy

```
┌─────────────────────────────────────┐
│     app/global-error.tsx            │ ← Catches root layout errors
│     (CRITICAL - Inline styles)      │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│     app/error.tsx                   │ ← Catches app-level errors
│     (Uses Tailwind + Framer)        │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│     app/de/error.tsx                │ ← Catches German route errors
│     app/en/error.tsx                │ ← Catches English route errors
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│     app/not-found.tsx               │ ← 404 errors
└─────────────────────────────────────┘
```

---

## Usage Examples

### Trigger Error (for testing)

```typescript
// In any Server Component:
export default async function Page() {
  throw new Error('Test error'); // ← Caught by error.tsx
}

// In any Client Component:
'use client';
export default function Component() {
  const [error, setError] = useState(false);
  
  if (error) {
    throw new Error('Client error'); // ← Caught by error.tsx
  }
  
  return <button onClick={() => setError(true)}>Trigger Error</button>;
}

// 404 Error:
import { notFound } from 'next/navigation';

export default function Page({ params }: { params: { id: string } }) {
  const item = await fetchItem(params.id);
  
  if (!item) {
    notFound(); // ← Shows app/not-found.tsx
  }
  
  return <div>{item.name}</div>;
}
```

---

## Error Reporting Integration

### Setup Sentry (Recommended)

```bash
npm install --save @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

### Update Error Boundaries

```typescript
// app/error.tsx
import * as Sentry from '@sentry/nextjs';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Send to Sentry
    Sentry.captureException(error, {
      level: 'error',
      tags: {
        component: 'ErrorBoundary',
        route: window.location.pathname,
      },
    });
  }, [error]);
  
  // ... rest of component
}
```

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
SENTRY_AUTH_TOKEN=your_auth_token
SENTRY_ORG=your_org
SENTRY_PROJECT=quantiva-advisory
```

---

## Best Practices

### ✅ DO:

1. **Log errors appropriately:**
   ```typescript
   console.error('User action failed:', error);
   ```

2. **Provide helpful error messages:**
   ```typescript
   if (!user) {
     throw new Error('User not found. Please check your credentials.');
   }
   ```

3. **Use error boundaries for async errors:**
   ```typescript
   try {
     await fetchData();
   } catch (error) {
     throw new Error('Failed to load data');
   }
   ```

4. **Test error states:**
   ```bash
   # Add error trigger in development:
   if (process.env.NODE_ENV === 'development' && window.location.search.includes('test-error')) {
     throw new Error('Test error');
   }
   ```

### ❌ DON'T:

1. **Don't expose sensitive information:**
   ```typescript
   // ❌ BAD
   throw new Error(`API key ${apiKey} is invalid`);
   
   // ✅ GOOD
   throw new Error('Authentication failed');
   ```

2. **Don't ignore errors:**
   ```typescript
   // ❌ BAD
   try {
     await riskyOperation();
   } catch (error) {
     // Silently fail
   }
   
   // ✅ GOOD
   try {
     await riskyOperation();
   } catch (error) {
     console.error('Operation failed:', error);
     throw error; // Re-throw to be caught by Error Boundary
   }
   ```

3. **Don't use Error Boundaries for expected errors:**
   ```typescript
   // ❌ BAD - Use Error Boundary
   const user = await fetchUser(); // Might fail
   
   // ✅ GOOD - Handle expected errors
   try {
     const user = await fetchUser();
   } catch (error) {
     return <div>User not found</div>;
   }
   ```

---

## Testing Error Boundaries

### Manual Testing

```bash
# Add to URL to trigger error:
http://localhost:3000/de?test-error=true

# Or add to component:
if (searchParams.get('test-error')) {
  throw new Error('Test error triggered');
}
```

### Unit Testing

```typescript
// __tests__/error-boundary.test.tsx
import { render, screen } from '@testing-library/react';
import Error from '@/app/error';

describe('Error Boundary', () => {
  it('renders error message', () => {
    const error = new Error('Test error');
    render(<Error error={error} reset={() => {}} />);
    
    expect(screen.getByText(/Oops! Etwas ist schiefgelaufen/i)).toBeInTheDocument();
  });
  
  it('shows error details in development', () => {
    process.env.NODE_ENV = 'development';
    const error = new Error('Detailed error message');
    render(<Error error={error} reset={() => {}} />);
    
    expect(screen.getByText('Detailed error message')).toBeInTheDocument();
  });
});
```

---

## Error Monitoring Dashboard

### Recommended Tools:

1. **Sentry** (https://sentry.io)
   - ✅ Real-time error tracking
   - ✅ Source maps support
   - ✅ User context
   - ✅ Performance monitoring

2. **LogRocket** (https://logrocket.com)
   - ✅ Session replay
   - ✅ Console logs
   - ✅ Network requests
   - ✅ Redux/Zustand integration

3. **Datadog** (https://datadoghq.com)
   - ✅ Full-stack monitoring
   - ✅ APM (Application Performance Monitoring)
   - ✅ Log aggregation
   - ✅ Infrastructure monitoring

---

## Common Error Scenarios

### 1. Network Errors

```typescript
try {
  const response = await fetch('/api/data');
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
} catch (error) {
  if (error instanceof TypeError && error.message === 'Failed to fetch') {
    throw new Error('Network connection lost. Please check your internet.');
  }
  throw error;
}
```

### 2. Authentication Errors

```typescript
if (response.status === 401) {
  // Redirect to login
  redirect('/login');
}

if (response.status === 403) {
  throw new Error('You do not have permission to access this resource.');
}
```

### 3. Validation Errors

```typescript
import { z } from 'zod';

try {
  const schema = z.object({
    email: z.string().email(),
  });
  schema.parse(data);
} catch (error) {
  if (error instanceof z.ZodError) {
    throw new Error(`Validation failed: ${error.errors[0].message}`);
  }
}
```

---

## Production Checklist

- [ ] Error boundaries in place
- [ ] Error reporting service configured (Sentry/LogRocket)
- [ ] Error messages are user-friendly
- [ ] No sensitive data in error messages
- [ ] 404 page is styled and helpful
- [ ] Stack traces hidden in production
- [ ] Error monitoring alerts configured
- [ ] Support contact info is correct
- [ ] Error boundaries tested manually
- [ ] Error logs reviewed regularly

---

## Support

For questions about error handling:
- **Technical Lead:** [Your Name]
- **Email:** support@quantivaadvisory.com
- **Documentation:** https://nextjs.org/docs/app/building-your-application/routing/error-handling

---

**Last Updated:** October 2025  
**Version:** 1.0  
**Status:** Production Ready ✅

