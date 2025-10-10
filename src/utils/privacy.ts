/**
 * Privacy-Friendly Analytics Configuration
 * GDPR-compliant analytics without cookies
 */

/**
 * Check if user has given consent for analytics
 * By default, Vercel Analytics is privacy-friendly and doesn't require consent
 * But you can implement a consent banner if needed
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check localStorage for consent
  const consent = localStorage.getItem('analytics_consent');
  
  // If no consent stored, assume consent (Vercel Analytics is privacy-friendly by default)
  // Change this to 'false' if you want explicit opt-in
  return consent !== 'false';
}

/**
 * Set analytics consent
 */
export function setAnalyticsConsent(consent: boolean) {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('analytics_consent', consent ? 'true' : 'false');
  
  // Reload page to apply consent
  if (!consent) {
    window.location.reload();
  }
}

/**
 * Anonymize IP address (Vercel Analytics does this by default)
 */
export function anonymizeIP(ip: string): string {
  const parts = ip.split('.');
  if (parts.length === 4) {
    // IPv4: Replace last octet with 0
    return `${parts[0]}.${parts[1]}.${parts[2]}.0`;
  }
  // IPv6: Return first 4 segments
  const ipv6Parts = ip.split(':');
  return ipv6Parts.slice(0, 4).join(':') + '::';
}

/**
 * Privacy-friendly user identifier
 * Creates a hash without storing personal data
 */
export function getAnonymousUserId(): string {
  if (typeof window === 'undefined') return 'anonymous';
  
  let userId = localStorage.getItem('anonymous_user_id');
  
  if (!userId) {
    // Generate random ID (not tied to personal data)
    userId = `anon_${Math.random().toString(36).substr(2, 9)}_${Date.now()}`;
    localStorage.setItem('anonymous_user_id', userId);
  }
  
  return userId;
}

/**
 * Clear all analytics data (for GDPR "right to be forgotten")
 */
export function clearAnalyticsData() {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('analytics_consent');
  localStorage.removeItem('anonymous_user_id');
  
  // Clear all A/B test data
  const keys = Object.keys(localStorage);
  keys.forEach(key => {
    if (key.startsWith('ab_test_')) {
      localStorage.removeItem(key);
    }
  });
  
  console.log('✅ All analytics data cleared');
}

/**
 * Privacy Policy compliance check
 */
export const privacyConfig = {
  // Vercel Analytics features
  cookieless: true,              // No cookies used
  anonymousIP: true,             // IP addresses are anonymized
  noPersonalData: true,          // No personal data collected
  gdprCompliant: true,           // GDPR compliant by default
  ccpaCompliant: true,           // CCPA compliant
  
  // Data retention
  dataRetentionDays: 90,         // Vercel default: 90 days
  
  // What we track
  trackedData: [
    'Page views',
    'Navigation events',
    'Button clicks',
    'Form submissions (no personal data)',
    'Performance metrics (Web Vitals)',
    'Device type & browser',
    'Geographic location (country/city level)',
    'Referrer URL'
  ],
  
  // What we DON'T track
  notTracked: [
    'Email addresses',
    'Names',
    'Phone numbers',
    'Credit card information',
    'Passwords',
    'Personal messages',
    'Precise geolocation (GPS)',
    'Cross-site tracking'
  ]
};

/**
 * Example Cookie Banner Component (optional)
 * 
 * import { hasAnalyticsConsent, setAnalyticsConsent } from './utils/privacy';
 * 
 * function CookieBanner() {
 *   const [show, setShow] = useState(!hasAnalyticsConsent());
 *   
 *   if (!show) return null;
 *   
 *   return (
 *     <div className="cookie-banner">
 *       <p>We use privacy-friendly analytics to improve our website.</p>
 *       <button onClick={() => {
 *         setAnalyticsConsent(true);
 *         setShow(false);
 *       }}>Accept</button>
 *       <button onClick={() => {
 *         setAnalyticsConsent(false);
 *         setShow(false);
 *       }}>Decline</button>
 *     </div>
 *   );
 * }
 */



