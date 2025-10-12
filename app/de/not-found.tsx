'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DeNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
            Vielleicht finden Sie auf unserer Startseite, wonach Sie suchen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/de"
            className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Zur Startseite
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg border-2 border-gray-300 transition-colors duration-200"
          >
            Zurück
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 mb-4">
            Oder besuchen Sie eine dieser Seiten:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/de" className="text-teal-600 hover:text-teal-700 underline">
              Home
            </Link>
            <Link href="/de/about" className="text-teal-600 hover:text-teal-700 underline">
              Über uns
            </Link>
            <Link href="/de/career" className="text-teal-600 hover:text-teal-700 underline">
              Karriere
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

