'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { hasAnalyticsConsent } from '../lib/utils/privacy';

export default function ConditionalAnalytics() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    // Check consent status
    const checkConsent = () => {
      setConsent(hasAnalyticsConsent());
    };
    
    checkConsent();

    // Listen for storage changes (cross-tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'analytics_consent') {
        checkConsent();
      }
    };

    // Listen for custom consent change event (same tab)
    const handleConsentChange = () => {
      checkConsent();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('analyticsConsentChanged', handleConsentChange);
    // Also check on focus (in case consent was changed in another tab)
    window.addEventListener('focus', checkConsent);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('analyticsConsentChanged', handleConsentChange);
      window.removeEventListener('focus', checkConsent);
    };
  }, []);

  // Only render analytics if consent is given
  if (consent === false) {
    return null;
  }

  // If consent is null (not yet decided), also don't load analytics
  // This ensures we wait for user consent
  if (consent === null) {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

