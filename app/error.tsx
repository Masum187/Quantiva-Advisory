'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Sentry from '@sentry/nextjs';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console
    console.error('Application error:', error);
    
    // Send to Sentry in production
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error, {
        tags: {
          errorBoundary: 'app-error',
        },
        extra: {
          digest: error.digest,
        },
      });
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg
            className="w-10 h-10 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </motion.div>

        {/* Error Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4"
        >
          Oops! Etwas ist schiefgelaufen
        </motion.h1>

        {/* Error Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-center mb-8"
        >
          Es tut uns leid, aber es ist ein unerwarteter Fehler aufgetreten.
          Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
        </motion.p>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <p className="text-sm font-mono text-red-600 break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-gray-500 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Try Again Button */}
          <button
            onClick={reset}
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Erneut versuchen
          </button>

          {/* Home Button */}
          <Link
            href="/"
            className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg border-2 border-gray-300 transition-colors duration-200 inline-block text-center"
          >
            Zur Startseite
          </Link>
        </motion.div>

        {/* Support Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-gray-500 text-center mt-8"
        >
          Wenn das Problem weiterhin besteht, kontaktieren Sie uns bitte unter{' '}
          <a
            href="mailto:support@quantivaadvisory.com"
            className="text-teal-600 hover:text-teal-700 underline"
          >
            support@quantivaadvisory.com
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}
