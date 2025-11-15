// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Enable logging to Sentry
  enableLogs: true,

  integrations: [
    // Send console.log, console.warn, and console.error calls as logs to Sentry
    Sentry.consoleLoggingIntegration({ levels: ['log', 'warn', 'error'] }),
  ],

  // Set tags for better filtering in Sentry
  initialScope: {
    tags: {
      component: 'server',
    },
  },

  // Filter out known non-critical errors
  beforeSend(event, hint) {
    // Ignore specific error types if needed
    if (event.exception) {
      const error = hint.originalException;
      if (error && typeof error === 'object' && 'message' in error) {
        const message = String(error.message);
        // Ignore connection errors that are expected in development
        if (process.env.NODE_ENV === 'development' && message.includes('ECONNREFUSED')) {
          return null;
        }
      }
    }
    return event;
  },
});

