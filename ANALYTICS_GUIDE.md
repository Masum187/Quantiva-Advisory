# 📊 Quantiva Analytics & Tracking Guide

Comprehensive guide for analytics, A/B testing, and privacy-friendly tracking.

---

## 🎯 Overview

This project uses **Vercel Analytics** and **Speed Insights** for privacy-friendly, GDPR-compliant tracking without cookies.

### What's Included:

1. ✅ **Vercel Analytics** - Visitor tracking & page views
2. ✅ **Speed Insights** - Real-time performance monitoring
3. ✅ **Custom Events** - Track user interactions
4. ✅ **A/B Testing** - Test different variations
5. ✅ **Web Vitals** - Core performance metrics
6. ✅ **Privacy-Friendly** - GDPR & CCPA compliant

---

## 📈 1. Custom Events Tracking

Track user interactions throughout your app.

### Basic Usage:

```tsx
import { analytics } from '@/utils/analytics';

// Track button click
analytics.trackButtonClick('cta_button', 'hero_section');

// Track form submission
analytics.trackFormSubmit('contact_form', true);

// Track case study view
analytics.trackCaseView('btp-delivery', 'Cloud');

// Track Calendly open
analytics.trackCalendlyOpen('hero_section');

// Track navigation
analytics.trackNavigationClick('/cases', '/');

// Track download
analytics.trackDownload('case-study.pdf', 'pdf');

// Track external link
analytics.trackExternalLinkClick('https://example.com', 'Partner Link');

// Track language switch
analytics.trackLanguageSwitch('de', 'en');

// Track admin action
analytics.trackAdminAction('case_published', 'btp-delivery');
```

### Example Implementation:

```tsx
// In QuantivaWebsite.tsx - Track CTA button click
<button 
  onClick={() => {
    analytics.trackButtonClick('contact_cta', 'hero');
    // ... rest of your logic
  }}
>
  Kontakt aufnehmen
</button>

// Track case study views
useEffect(() => {
  if (caseSlug) {
    analytics.trackCaseView(caseSlug, caseData?.category);
  }
}, [caseSlug]);

// Track Calendly widget open
<button 
  onClick={() => {
    analytics.trackCalendlyOpen('meeting_section');
    // Open Calendly
  }}
>
  Meeting buchen
</button>
```

---

## 🧪 2. A/B Testing

Test different variations of your UI to optimize conversions.

### Basic Usage:

```tsx
import { getVariant, trackConversion } from '@/utils/abTesting';

function HeroSection() {
  // Get variant (A or B) - persists in localStorage
  const variant = getVariant('hero_cta_test', ['A', 'B']);
  
  return (
    <div>
      {variant === 'A' ? (
        <button onClick={() => {
          trackConversion('hero_cta_test', 'button_click');
          // ... handle click
        }}>
          Jetzt starten
        </button>
      ) : (
        <button onClick={() => {
          trackConversion('hero_cta_test', 'button_click');
          // ... handle click
        }}>
          Kostenlos testen
        </button>
      )}
    </div>
  );
}
```

### Weighted Distribution:

```tsx
// 70% get variant A, 30% get variant B
const variant = getVariant('pricing_test', ['A', 'B'], [70, 30]);
```

### Multiple Conversion Points:

```tsx
// Track different conversion types
trackConversion('hero_cta_test', 'button_click');
trackConversion('hero_cta_test', 'form_submit');
trackConversion('hero_cta_test', 'purchase');
```

### Reset Tests (for testing):

```tsx
import { resetAllTests } from '@/utils/abTesting';

// Clear all A/B test assignments
resetAllTests();
```

---

## 📊 3. Web Vitals Monitoring

Automatic performance tracking with detailed metrics.

### Metrics Tracked:

- **LCP** (Largest Contentful Paint) - Loading performance
- **FID** (First Input Delay) - Interactivity
- **CLS** (Cumulative Layout Shift) - Visual stability
- **FCP** (First Contentful Paint) - Initial render
- **TTFB** (Time to First Byte) - Server response

### View in Development:

Web Vitals are logged to console in development mode:

```
📊 Web Vital: {
  name: 'LCP',
  value: 1234,
  rating: 'good',
  delta: 123,
  id: 'v3-1234567890'
}
```

### Thresholds:

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP | ≤ 2.5s | ≤ 4.0s | > 4.0s |
| FID | ≤ 100ms | ≤ 300ms | > 300ms |
| CLS | ≤ 0.1 | ≤ 0.25 | > 0.25 |
| FCP | ≤ 1.8s | ≤ 3.0s | > 3.0s |
| TTFB | ≤ 800ms | ≤ 1.8s | > 1.8s |

### Custom Reporting:

```tsx
import { getPerformanceRating, formatMetricValue } from '@/reportWebVitals';

// Get rating for a metric
const rating = getPerformanceRating('LCP', 2300); // 'good'

// Format value for display
const formatted = formatMetricValue('LCP', 2345); // '2345ms'
const clsFormatted = formatMetricValue('CLS', 0.123); // '0.123'
```

---

## 🔒 4. Privacy-Friendly Configuration

GDPR & CCPA compliant by default.

### Privacy Features:

✅ **No Cookies** - Cookieless tracking  
✅ **Anonymous IPs** - IP addresses are anonymized  
✅ **No Personal Data** - No PII collected  
✅ **90-Day Retention** - Data automatically deleted  
✅ **Right to be Forgotten** - Easy data deletion  

### Check Consent:

```tsx
import { hasAnalyticsConsent, setAnalyticsConsent } from '@/utils/privacy';

// Check if user has consented
if (hasAnalyticsConsent()) {
  // Track analytics
}

// Set consent
setAnalyticsConsent(true);  // Accept
setAnalyticsConsent(false); // Decline
```

### Clear User Data:

```tsx
import { clearAnalyticsData } from '@/utils/privacy';

// Clear all analytics data (GDPR "right to be forgotten")
clearAnalyticsData();
```

### Anonymous User ID:

```tsx
import { getAnonymousUserId } from '@/utils/privacy';

// Get privacy-friendly user ID (not tied to personal data)
const userId = getAnonymousUserId(); // 'anon_abc123_1234567890'
```

### Privacy Configuration:

```tsx
import { privacyConfig } from '@/utils/privacy';

console.log(privacyConfig);
// {
//   cookieless: true,
//   anonymousIP: true,
//   noPersonalData: true,
//   gdprCompliant: true,
//   ccpaCompliant: true,
//   dataRetentionDays: 90,
//   trackedData: [...],
//   notTracked: [...]
// }
```

---

## 📱 5. Vercel Dashboard

### Access Analytics:

1. Go to: https://vercel.com/dashboard
2. Select project: **Quantiva Advisory**
3. Click **"Analytics"** in the menu

### Available Metrics:

#### Analytics Tab:
- **Visitors** - Unique visitors count
- **Page Views** - Total page views
- **Top Pages** - Most visited pages
- **Referrers** - Traffic sources
- **Locations** - Geographic distribution
- **Devices** - Desktop, Mobile, Tablet
- **Browsers** - Browser breakdown
- **Custom Events** - Your tracked events

#### Speed Insights Tab:
- **Real User Monitoring** - Actual user performance
- **Core Web Vitals** - LCP, FID, CLS scores
- **Performance Score** - Overall rating (0-100)
- **Performance Trends** - Over time
- **Page-Level Insights** - Per route performance
- **Device Breakdown** - Desktop vs Mobile

---

## 🎯 6. Example Use Cases

### Track Contact Form Submission:

```tsx
function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    
    try {
      await submitForm({ email, subject });
      
      // Track successful submission
      analytics.trackContactFormSubmit(email, subject);
      analytics.trackFormSubmit('contact_form', true);
      
    } catch (error) {
      // Track failed submission
      analytics.trackFormSubmit('contact_form', false);
    }
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

### Track Case Study Engagement:

```tsx
function CaseDetailPage() {
  const { slug } = useParams();
  const caseData = getCaseBySlug(slug);
  
  useEffect(() => {
    // Track case view
    analytics.trackCaseView(slug, caseData.category);
  }, [slug]);
  
  return (
    <div>
      <h1>{caseData.title}</h1>
      
      <button onClick={() => {
        analytics.trackDownload(`${slug}-case-study.pdf`, 'pdf');
        // Download logic
      }}>
        Download Case Study
      </button>
    </div>
  );
}
```

### A/B Test Hero CTA:

```tsx
function Hero() {
  const ctaVariant = getVariant('hero_cta_test', ['A', 'B']);
  
  const ctaText = ctaVariant === 'A' 
    ? 'Jetzt starten' 
    : 'Kostenlos testen';
  
  const ctaColor = ctaVariant === 'A'
    ? 'bg-blue-600'
    : 'bg-green-600';
  
  return (
    <button 
      className={ctaColor}
      onClick={() => {
        trackConversion('hero_cta_test', 'click');
        analytics.trackButtonClick('hero_cta', 'hero_section');
        // Navigate to contact
      }}
    >
      {ctaText}
    </button>
  );
}
```

### Track Language Switch:

```tsx
function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  
  const switchLanguage = (newLang) => {
    analytics.trackLanguageSwitch(lang, newLang);
    setLang(newLang);
  };
  
  return (
    <select value={lang} onChange={(e) => switchLanguage(e.target.value)}>
      <option value="de">Deutsch</option>
      <option value="en">English</option>
    </select>
  );
}
```

---

## 🚀 7. Best Practices

### DO:
✅ Track meaningful user interactions  
✅ Use descriptive event names  
✅ Include context in event properties  
✅ Test A/B variants with sufficient traffic  
✅ Monitor Web Vitals regularly  
✅ Respect user privacy  

### DON'T:
❌ Track personal data (emails, names, etc.)  
❌ Over-track (every mouse move)  
❌ Use generic event names  
❌ Run too many A/B tests simultaneously  
❌ Ignore performance warnings  
❌ Store sensitive data in localStorage  

---

## 📚 8. Resources

### Official Documentation:
- [Vercel Analytics](https://vercel.com/docs/analytics)
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)
- [Web Vitals](https://web.dev/vitals/)

### Internal Files:
- `/src/utils/analytics.ts` - Custom events
- `/src/utils/abTesting.ts` - A/B testing
- `/src/utils/privacy.ts` - Privacy config
- `/src/reportWebVitals.ts` - Web Vitals
- `/src/index.tsx` - Integration

---

## 🛠️ 9. Troubleshooting

### Analytics not showing in dashboard?

1. Wait 5-10 minutes for data to appear
2. Check if deployment is live on Vercel
3. Verify Analytics is enabled in Vercel project settings
4. Check browser console for errors

### A/B tests not working?

1. Clear localStorage: `localStorage.clear()`
2. Check variant assignment: `console.log(getVariant('test_name'))`
3. Verify test name matches in all places

### Web Vitals not logging?

1. Check if in development mode: `process.env.NODE_ENV === 'development'`
2. Open browser console (F12)
3. Reload page and check for "📊 Web Vital" logs

---

## 📊 10. Summary

### Installed Packages:
- `@vercel/analytics` - Visitor tracking
- `@vercel/speed-insights` - Performance monitoring

### Created Files:
- `/src/utils/analytics.ts` - Custom events API
- `/src/utils/abTesting.ts` - A/B testing utilities
- `/src/utils/privacy.ts` - Privacy configuration
- `/ANALYTICS_GUIDE.md` - This guide

### Modified Files:
- `/src/index.tsx` - Added Analytics & Speed Insights
- `/src/reportWebVitals.ts` - Enhanced Web Vitals

### Features:
✅ Privacy-friendly (no cookies, GDPR compliant)  
✅ Custom event tracking  
✅ A/B testing framework  
✅ Web Vitals monitoring  
✅ Real-time analytics dashboard  
✅ Performance insights  

---

**Questions?** Check the Vercel Dashboard or review the code in `/src/utils/`.

**Last Updated:** October 10, 2025



