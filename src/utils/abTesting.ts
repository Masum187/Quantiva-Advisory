/**
 * A/B Testing Utilities
 * Simple client-side A/B testing with localStorage persistence
 */

import { trackEvent } from './analytics';

export type Variant = 'A' | 'B';

interface ABTest {
  name: string;
  variants: Variant[];
  weights?: number[]; // Optional weights (default: equal distribution)
}

/**
 * Get or assign a variant for a user
 * Persists in localStorage for consistent experience
 */
export function getVariant(testName: string, variants: Variant[] = ['A', 'B'], weights?: number[]): Variant {
  if (typeof window === 'undefined') return 'A';

  const storageKey = `ab_test_${testName}`;
  
  // Check if user already has a variant assigned
  const existingVariant = localStorage.getItem(storageKey) as Variant | null;
  if (existingVariant && variants.includes(existingVariant)) {
    return existingVariant;
  }

  // Assign new variant
  const variant = assignVariant(variants, weights);
  localStorage.setItem(storageKey, variant);

  // Track assignment
  trackEvent('admin_action', {
    action: 'ab_test_assigned',
    test: testName,
    variant
  });

  return variant;
}

/**
 * Assign a variant based on weights
 */
function assignVariant(variants: Variant[], weights?: number[]): Variant {
  if (!weights || weights.length !== variants.length) {
    // Equal distribution
    return variants[Math.floor(Math.random() * variants.length)];
  }

  // Weighted distribution
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  let random = Math.random() * totalWeight;

  for (let i = 0; i < variants.length; i++) {
    random -= weights[i];
    if (random <= 0) {
      return variants[i];
    }
  }

  return variants[0];
}

/**
 * Track conversion for A/B test
 */
export function trackConversion(testName: string, conversionType: string = 'default') {
  if (typeof window === 'undefined') return;

  const storageKey = `ab_test_${testName}`;
  const variant = localStorage.getItem(storageKey) as Variant | null;

  if (variant) {
    trackEvent('admin_action', {
      action: 'ab_test_conversion',
      test: testName,
      variant,
      conversion_type: conversionType
    });
  }
}

/**
 * Reset all A/B tests (useful for testing)
 */
export function resetAllTests() {
  if (typeof window === 'undefined') return;

  const keys = Object.keys(localStorage);
  keys.forEach(key => {
    if (key.startsWith('ab_test_')) {
      localStorage.removeItem(key);
    }
  });
}

/**
 * Example usage:
 * 
 * // In your component:
 * const variant = getVariant('hero_cta_test', ['A', 'B']);
 * 
 * // Render different content based on variant:
 * {variant === 'A' ? <ButtonA /> : <ButtonB />}
 * 
 * // Track conversion when user clicks:
 * onClick={() => {
 *   trackConversion('hero_cta_test', 'button_click');
 *   // ... rest of your logic
 * }}
 */




