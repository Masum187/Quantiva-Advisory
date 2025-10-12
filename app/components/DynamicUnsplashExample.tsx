/**
 * Example: Dynamic Unsplash Integration
 * 
 * This component demonstrates how to use the Unsplash API
 * for dynamic image loading. It can be used as a template
 * for implementing dynamic images across the site.
 */

'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, ExternalLink } from 'lucide-react';
import { getRandomPhoto, searchPhotos, type UnsplashPhoto } from '../lib/utils/unsplash';
import UnsplashImage from './UnsplashImage';

interface DynamicUnsplashExampleProps {
  query: string;
  title?: string;
  subtitle?: string;
}

export default function DynamicUnsplashExample({
  query,
  title = 'Dynamic Unsplash Images',
  subtitle = 'Powered by Unsplash API',
}: DynamicUnsplashExampleProps) {
  const [photo, setPhoto] = useState<UnsplashPhoto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPhoto = React.useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const newPhoto = await getRandomPhoto(query);
      setPhoto(newPhoto);
    } catch (err) {
      console.error('Failed to fetch Unsplash photo:', err);
      setError('Failed to load image from Unsplash');
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchPhoto();
  }, [fetchPhoto]);

  return (
    <div className="relative w-full">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05, rotate: 180 }}
          whileTap={{ scale: 0.95 }}
          onClick={fetchPhoto}
          disabled={loading}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50"
          title="Load new image"
        >
          <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
        </motion.button>
      </div>

      {/* Image Container */}
      <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-teal-500/30">
        {loading && !photo && (
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-blue-900/20 animate-pulse" />
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-900/20 text-white text-center p-6">
            <div>
              <p className="font-semibold mb-2">⚠️ {error}</p>
              <button
                onClick={fetchPhoto}
                className="text-sm underline hover:no-underline"
              >
                Try again
              </button>
            </div>
          </div>
        )}

        {photo && (
          <UnsplashImage
            photo={photo}
            alt={photo.alt_description || photo.description || query}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            showAttribution={true}
            attributionPosition="bottom-right"
            onLoad={() => setLoading(false)}
          />
        )}
      </div>

      {/* Photo Info */}
      {photo && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-300 mb-1">
                {photo.description || photo.alt_description || 'No description'}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>📷 {photo.user.name}</span>
                {photo.user.location && <span>• 📍 {photo.user.location}</span>}
                <span>• 💚 {photo.likes || 0} likes</span>
              </div>
            </div>
            <a
              href={photo.links.html + '?utm_source=quantiva-advisory&utm_medium=referral'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 transition-colors"
            >
              View on Unsplash
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}

/**
 * Example: Search-based Gallery
 */
export function UnsplashGalleryExample({ query }: { query: string }) {
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchPhotos(query, 1, 6).then((result) => {
      setPhotos(result.results);
      setLoading(false);
    });
  }, [query]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-800 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="relative aspect-square rounded-lg overflow-hidden"
        >
          <UnsplashImage
            photo={photo}
            alt={photo.alt_description || photo.description || query}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            showAttribution={false}
          />
        </motion.div>
      ))}
    </div>
  );
}

