/**
 * 🖼️ Cloudinary Asset Management
 * 
 * Zentrale Verwaltung aller Cloudinary-Assets für das CMS
 * Automatische Optimierung, responsive URLs, Transformationen
 */

// Cloudinary Configuration
const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'dbrisux8i';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

// Asset Base Path
const ASSET_PATH = 'quantiva-assets';

/**
 * Image Transformations
 */
export const ImageTransform = {
  // Auto-optimization (format + quality)
  AUTO: 'f_auto,q_auto',
  // Responsive widths
  SM: 'w_400',
  MD: 'w_800',
  LG: 'w_1200',
  XL: 'w_1920',
  // Effects
  BLUR: 'e_blur:2000,q_auto:low,w_50',
  GRAYSCALE: 'e_grayscale',
  // Crop modes
  FILL: 'c_fill',
  FIT: 'c_fit',
  SCALE: 'c_scale',
} as const;

/**
 * Video Transformations
 */
export const VideoTransform = {
  AUTO: 'f_auto,q_auto',
  HD: 'w_1280,h_720',
  FHD: 'w_1920,h_1080',
  PREVIEW: 'w_640,h_360,q_auto:low',
} as const;

/**
 * Generate Cloudinary Image URL
 */
export function getImageUrl(
  path: string,
  options: {
    width?: number;
    height?: number;
    quality?: 'auto' | 'auto:low' | 'auto:good' | 'auto:best';
    format?: 'auto' | 'jpg' | 'png' | 'webp' | 'avif';
    crop?: 'fill' | 'fit' | 'scale' | 'pad';
    gravity?: 'auto' | 'face' | 'center';
    effect?: string;
  } = {}
): string {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'scale',
    gravity,
    effect,
  } = options;

  const transformations: string[] = [];

  // Format & Quality
  transformations.push(`f_${format}`, `q_${quality}`);

  // Dimensions
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  
  // Crop mode
  if (width || height) transformations.push(`c_${crop}`);
  
  // Gravity (for cropping)
  if (gravity) transformations.push(`g_${gravity}`);
  
  // Effects
  if (effect) transformations.push(`e_${effect}`);

  const transformString = transformations.join(',');
  return `${BASE_URL}/image/upload/${transformString}/${ASSET_PATH}/${path}`;
}

/**
 * Generate Cloudinary Video URL
 */
export function getVideoUrl(
  path: string,
  options: {
    width?: number;
    height?: number;
    quality?: 'auto' | 'auto:low' | 'auto:good';
    format?: 'auto' | 'mp4' | 'webm';
  } = {}
): string {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
  } = options;

  const transformations: string[] = [];

  transformations.push(`f_${format}`, `q_${quality}`);
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);

  const transformString = transformations.join(',');
  return `${BASE_URL}/video/upload/${transformString}/${ASSET_PATH}/${path}`;
}

/**
 * Generate responsive srcset for images
 */
export function getResponsiveSrcSet(
  path: string,
  widths: number[] = [400, 800, 1200, 1920]
): string {
  return widths
    .map((width) => {
      const url = getImageUrl(path, { width });
      return `${url} ${width}w`;
    })
    .join(', ');
}

/**
 * Get LQIP (Low Quality Image Placeholder) for lazy loading
 */
export function getLQIP(path: string): string {
  return getImageUrl(path, {
    width: 50,
    quality: 'auto:low',
    effect: 'blur:2000',
  });
}

/**
 * CMS Asset Paths
 */
export const AssetPaths = {
  // Services
  services: {
    sapConsulting: 'services/sap-consulting',
    cloudSolutions: 'services/cloud-solutions',
    aiMl: 'services/ai-ml',
    integration: 'services/integration',
    security: 'services/security',
    enablement: 'services/enablement',
  },
  
  // Case Studies
  cases: {
    apiFirst: 'cases/api-first-hero',
    btpDelivery: 'cases/btp-delivery-hero',
    btp: 'cases/btp-hero',
    data: 'cases/data-hero',
    dataQuality: 'cases/data-quality-hero',
    integration: 'cases/integration-hero',
  },
  
  // Open Graph Images
  og: {
    default: 'og/default',
    cases: 'og/cases',
    apiFirst: 'og/api-first',
    btpDelivery: 'og/btp-delivery',
    dataQuality: 'og/data-quality',
  },
  
  // Brand Assets
  brand: {
    logoBadge: 'brand/logo-badge',
    appleTouchIcon: 'brand/apple-touch-icon',
    logo192: 'brand/logo-192',
    logo512: 'brand/logo-512',
  },
  
  // Videos
  videos: {
    heroBg: 'videos/hero-bg',
  },
} as const;

/**
 * Quick access helpers for common assets
 */
export const Assets = {
  // Service Images (1200px wide, optimized)
  getServiceImage: (service: keyof typeof AssetPaths.services) =>
    getImageUrl(AssetPaths.services[service], { width: 1200 }),
  
  // Case Study Hero Images (1920px wide, optimized)
  getCaseImage: (caseStudy: keyof typeof AssetPaths.cases) =>
    getImageUrl(AssetPaths.cases[caseStudy], { width: 1920 }),
  
  // OG Images (1200x630 for social media)
  getOGImage: (og: keyof typeof AssetPaths.og) =>
    getImageUrl(AssetPaths.og[og], { width: 1200, height: 630, crop: 'fill' }),
  
  // Brand Logo (SVG, no transformation)
  getLogo: () => `${BASE_URL}/image/upload/${ASSET_PATH}/brand/logo-badge.svg`,
  
  // Hero Video (1920x1080, optimized)
  getHeroVideo: () =>
    getVideoUrl(AssetPaths.videos.heroBg, { width: 1920, height: 1080 }),
  
  // Hero Video Poster (fallback image)
  getHeroVideoPoster: () =>
    getImageUrl(AssetPaths.videos.heroBg, { width: 1920, format: 'jpg' }),
} as const;

/**
 * Example Usage:
 * 
 * // Simple image URL
 * const url = getImageUrl('services/sap-consulting', { width: 1200 });
 * 
 * // Responsive srcset
 * const srcset = getResponsiveSrcSet('services/sap-consulting');
 * 
 * // LQIP for lazy loading
 * const placeholder = getLQIP('services/sap-consulting');
 * 
 * // Quick access
 * const serviceImage = Assets.getServiceImage('sapConsulting');
 * const caseImage = Assets.getCaseImage('apiFirst');
 * const ogImage = Assets.getOGImage('default');
 */

