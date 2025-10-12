/**
 * Unsplash API Client
 * 
 * Professional integration with Unsplash API for:
 * - Dynamic image loading
 * - Collections management
 * - Automatic attribution
 * - Rate limiting
 * 
 * Documentation: https://unsplash.com/documentation
 */

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const UNSPLASH_API_BASE = 'https://api.unsplash.com';

export interface UnsplashPhoto {
  id: string;
  width: number;
  height: number;
  color: string;
  description: string | null;
  alt_description: string | null;
  likes?: number;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    links: {
      self: string;
      html: string;
      photos: string;
    };
  };
  blur_hash?: string;
}

export interface UnsplashSearchResult {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}

/**
 * Fetch a random photo from Unsplash
 */
export async function getRandomPhoto(query?: string): Promise<UnsplashPhoto> {
  if (!UNSPLASH_ACCESS_KEY) {
    throw new Error('NEXT_PUBLIC_UNSPLASH_ACCESS_KEY is not configured');
  }

  const params = new URLSearchParams({
    ...(query && { query }),
  });

  const response = await fetch(
    `${UNSPLASH_API_BASE}/photos/random?${params}`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  if (!response.ok) {
    throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Search photos on Unsplash
 */
export async function searchPhotos(
  query: string,
  page: number = 1,
  perPage: number = 10
): Promise<UnsplashSearchResult> {
  if (!UNSPLASH_ACCESS_KEY) {
    throw new Error('NEXT_PUBLIC_UNSPLASH_ACCESS_KEY is not configured');
  }

  const params = new URLSearchParams({
    query,
    page: page.toString(),
    per_page: perPage.toString(),
  });

  const response = await fetch(
    `${UNSPLASH_API_BASE}/search/photos?${params}`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  if (!response.ok) {
    throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Get a specific photo by ID
 */
export async function getPhoto(photoId: string): Promise<UnsplashPhoto> {
  if (!UNSPLASH_ACCESS_KEY) {
    throw new Error('NEXT_PUBLIC_UNSPLASH_ACCESS_KEY is not configured');
  }

  const response = await fetch(
    `${UNSPLASH_API_BASE}/photos/${photoId}`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
      next: { revalidate: 86400 }, // Cache for 24 hours
    }
  );

  if (!response.ok) {
    throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Track a photo download (required by Unsplash API guidelines)
 * This should be called when a photo is displayed to the user
 */
export async function trackDownload(downloadLocation: string): Promise<void> {
  if (!UNSPLASH_ACCESS_KEY) {
    console.warn('NEXT_PUBLIC_UNSPLASH_ACCESS_KEY is not configured');
    return;
  }

  try {
    await fetch(downloadLocation, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
  } catch (error) {
    console.error('Failed to track Unsplash download:', error);
  }
}

/**
 * Generate a proper attribution for Unsplash photos
 * Required by Unsplash API guidelines
 */
export function getAttribution(photo: UnsplashPhoto): {
  text: string;
  photographerName: string;
  photographerUrl: string;
  unsplashUrl: string;
} {
  return {
    text: `Photo by ${photo.user.name} on Unsplash`,
    photographerName: photo.user.name,
    photographerUrl: `${photo.user.links.html}?utm_source=quantiva-advisory&utm_medium=referral`,
    unsplashUrl: 'https://unsplash.com/?utm_source=quantiva-advisory&utm_medium=referral',
  };
}

/**
 * Utility: Get optimized image URL with specific dimensions
 */
export function getOptimizedUrl(
  photo: UnsplashPhoto,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'jpg' | 'png' | 'webp' | 'avif';
  } = {}
): string {
  const { width, height, quality = 80, format } = options;
  
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  if (quality) params.set('q', quality.toString());
  if (format) params.set('fm', format);
  params.set('fit', 'crop');
  params.set('auto', 'format');

  return `${photo.urls.raw}?${params}`;
}

/**
 * Predefined collections for common use cases
 */
export const UNSPLASH_COLLECTIONS = {
  AI_TECHNOLOGY: '9855896', // AI & Machine Learning
  CYBER_SECURITY: '1995475', // Cybersecurity
  BUSINESS: '1065976', // Business & Work
  TEAMWORK: '1590912', // Team Collaboration
  DATA: '3330445', // Data & Analytics
  CLOUD: '4433525', // Cloud Computing
} as const;

/**
 * Get photos from a collection
 */
export async function getCollectionPhotos(
  collectionId: string,
  page: number = 1,
  perPage: number = 10
): Promise<UnsplashPhoto[]> {
  if (!UNSPLASH_ACCESS_KEY) {
    throw new Error('NEXT_PUBLIC_UNSPLASH_ACCESS_KEY is not configured');
  }

  const params = new URLSearchParams({
    page: page.toString(),
    per_page: perPage.toString(),
  });

  const response = await fetch(
    `${UNSPLASH_API_BASE}/collections/${collectionId}/photos?${params}`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  if (!response.ok) {
    throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fallback static URLs (used when API is unavailable)
 */
export const FALLBACK_IMAGES = {
  AI: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
  CYBER_SECURITY: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
  MICROSERVICES: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
  SAP: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  BUSINESS: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
  TEAMWORK: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
} as const;

