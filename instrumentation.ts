// This file configures the automatic instrumentation for Sentry.
// This instrumentation is automatically invoked when the server starts.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#instrumentation-file

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}

