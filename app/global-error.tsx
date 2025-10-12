'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log critical error
    console.error('Global application error:', error);
    
    // TODO: Send to error tracking service with high priority
    // Example with Sentry:
    // Sentry.captureException(error, { level: 'fatal' });
  }, [error]);

  return (
    <html>
      <head>
        <title>Quantiva Advisory - Error</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)',
            padding: '20px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div
            style={{
              maxWidth: '600px',
              width: '100%',
              background: 'white',
              borderRadius: '16px',
              padding: '48px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              textAlign: 'center',
            }}
          >
            {/* Error Icon */}
            <div
              style={{
                width: '80px',
                height: '80px',
                background: '#fee',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#dc2626"
                strokeWidth="2"
              >
                <path
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Error Title */}
            <h1
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#111',
                marginBottom: '16px',
              }}
            >
              Kritischer Fehler
            </h1>

            {/* Error Message */}
            <p
              style={{
                fontSize: '16px',
                color: '#666',
                marginBottom: '32px',
                lineHeight: '1.6',
              }}
            >
              Es ist ein schwerwiegender Fehler aufgetreten. Bitte laden Sie die
              Seite neu oder kontaktieren Sie unseren Support, wenn das Problem
              weiterhin besteht.
            </p>

            {/* Development Details */}
            {process.env.NODE_ENV === 'development' && (
              <div
                style={{
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '24px',
                  textAlign: 'left',
                }}
              >
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#991b1b',
                    marginBottom: '8px',
                  }}
                >
                  Development Details:
                </p>
                <p
                  style={{
                    fontSize: '11px',
                    color: '#7f1d1d',
                    fontFamily: 'monospace',
                    wordBreak: 'break-all',
                  }}
                >
                  {error.message}
                </p>
                {error.digest && (
                  <p
                    style={{
                      fontSize: '11px',
                      color: '#991b1b',
                      marginTop: '8px',
                    }}
                  >
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={reset}
                style={{
                  padding: '12px 32px',
                  background: '#0f766e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#0d5d56';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#0f766e';
                }}
              >
                Nochmal versuchen
              </button>

              <a
                href="/"
                style={{
                  padding: '12px 32px',
                  background: '#f3f4f6',
                  color: '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#e5e7eb';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#f3f4f6';
                }}
              >
                Zur Startseite
              </a>
            </div>

            {/* Support Contact */}
            <div
              style={{
                marginTop: '32px',
                paddingTop: '24px',
                borderTop: '1px solid #e5e7eb',
              }}
            >
              <p style={{ fontSize: '14px', color: '#6b7280' }}>
                Problem besteht weiterhin?{' '}
                <a
                  href="mailto:support@quantivaadvisory.com"
                  style={{
                    color: '#0f766e',
                    textDecoration: 'underline',
                  }}
                >
                  Kontaktieren Sie unseren Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

