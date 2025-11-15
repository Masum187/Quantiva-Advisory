'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log critical error
    console.error('Critical application error:', error);
    
    // Send to Sentry with fatal level
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error, {
        level: 'fatal',
        tags: {
          errorBoundary: 'global-error',
        },
        extra: {
          digest: error.digest,
        },
      });
    }
  }, [error]);

  return (
    <html>
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          maxWidth: '600px',
          padding: '48px',
          background: 'white',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          textAlign: 'center',
        }}>
          {/* Critical Error Icon */}
          <div style={{
            width: '80px',
            height: '80px',
            background: '#fee2e2',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <h1 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '16px',
          }}>
            Kritischer Fehler
          </h1>

          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            marginBottom: '32px',
            lineHeight: '1.6',
          }}>
            Es ist ein schwerwiegender Fehler aufgetreten. Die Anwendung konnte nicht geladen werden.
            Bitte laden Sie die Seite neu oder kontaktieren Sie unseren Support.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <div style={{
              padding: '16px',
              background: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              marginBottom: '24px',
              textAlign: 'left',
            }}>
              <p style={{
                fontSize: '12px',
                fontFamily: 'monospace',
                color: '#dc2626',
                wordBreak: 'break-all',
                margin: 0,
              }}>
                {error.message}
              </p>
              {error.digest && (
                <p style={{
                  fontSize: '10px',
                  color: '#9ca3af',
                  marginTop: '8px',
                  marginBottom: 0,
                }}>
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
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
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#134e4a'}
              onMouseOut={(e) => e.currentTarget.style.background = '#0f766e'}
            >
              Erneut versuchen
            </button>

            <button
              onClick={() => window.location.href = '/'}
              style={{
                padding: '12px 32px',
                background: 'white',
                color: '#374151',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#f9fafb'}
              onMouseOut={(e) => e.currentTarget.style.background = 'white'}
            >
              Zur Startseite
            </button>
          </div>

          {/* Support Info */}
          <p style={{
            fontSize: '14px',
            color: '#9ca3af',
            marginTop: '32px',
            marginBottom: 0,
          }}>
            Support:{' '}
            <a
              href="mailto:support@quantivaadvisory.com"
              style={{
                color: '#0f766e',
                textDecoration: 'underline',
              }}
            >
              support@quantivaadvisory.com
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
