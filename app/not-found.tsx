'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="de">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full text-center"
          >
            {/* 404 Number */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-9xl md:text-[12rem] font-bold text-teal-600 mb-4"
            >
              404
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Seite nicht gefunden
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 max-w-md mx-auto"
            >
              Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
            </motion.p>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <svg
                className="w-64 h-64 mx-auto text-teal-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/de"
                className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Zur Startseite
              </Link>

              <button
                onClick={() => window.history.back()}
                className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
              >
                Zurück
              </button>
            </motion.div>

            {/* Popular Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 mb-4">
                Beliebte Seiten:
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/de"
                  className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/de/about"
                  className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                >
                  Über Uns
                </Link>
                <Link
                  href="/de/career"
                  className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                >
                  Karriere
                </Link>
                <a
                  href="mailto:info@quantivaadvisory.com"
                  className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                >
                  Kontakt
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </body>
    </html>
  );
}

