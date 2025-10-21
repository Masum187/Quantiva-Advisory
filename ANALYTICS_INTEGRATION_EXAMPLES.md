# 📊 Analytics Integration - Praktische Beispiele

Vollständige Code-Beispiele für die Integration von Analytics in deine Komponenten.

---

## ✅ Bereits implementiert

Die folgenden Tracking-Events sind bereits in der App integriert:

### 1. **Language Switch Tracking** ✅
**Datei:** `src/QuantivaWebsite.tsx`  
**Location:** `setLang` Funktion

```tsx
const setLang: LangCtx['setLang'] = (l, opts) => {
  const oldLang = lang;
  _setLang(l);
  try { localStorage.setItem('qlang', l); } catch {}
  
  // ✅ Track language switch
  if (oldLang !== l) {
    analytics.trackLanguageSwitch(oldLang, l);
  }
  
  if (opts?.navigate !== false && typeof window !== 'undefined') {
    const nextPath = replaceLocaleInPath(window.location.pathname, l);
    window.location.assign(nextPath + window.location.search + window.location.hash);
  }
};
```

### 2. **Navigation Click Tracking** ✅
**Datei:** `src/QuantivaWebsite.tsx`  
**Location:** `scrollTo` Funktion

```tsx
const scrollTo = (id: string) => {
  // ✅ Track navigation
  analytics.trackNavigationClick(id, window.location.pathname);
  
  if (id === 'caseslink') { window.location.href = localePath('/cases'); return; }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
```

### 3. **Case Study View Tracking** ✅
**Datei:** `src/QuantivaWebsite.tsx`  
**Location:** `CaseDetailPage` component

```tsx
export function CaseDetailPage() {
  const { lang, localePath } = useLanguage();
  const slug = (typeof window !== 'undefined') ? window.location.pathname.split('/').filter(Boolean).pop() || '' : '';
  const caseData = casesData.find(c => c.slug === slug) as any;

  // ✅ Track case view
  useEffect(() => {
    if (caseData && slug) {
      analytics.trackCaseView(slug, caseData.category || 'unknown');
    }
  }, [slug, caseData]);

  // ... rest of component
}
```

### 4. **Calendly Button Tracking** ✅
**Datei:** `src/QuantivaWebsite.tsx`  
**Location:** Calendly fallback button

```tsx
<a
  href={CALENDLY_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-medium text-white hover:bg-teal-500 shadow-lg shadow-teal-500/20 transition"
  onClick={() => analytics.trackCalendlyOpen('fallback_button')}
>
  {lang==='de'?'Zu Calendly →':'Go to Calendly →'}
</a>
```

---

## 🎯 Weitere Tracking-Möglichkeiten

### 5. **Contact Form Submission**

Füge dies zu deinem Kontaktformular hinzu (wenn vorhanden):

```tsx
function ContactForm() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Deine Submit-Logik hier
      await submitContactForm({ email, subject, message });
      
      // ✅ Track successful submission
      analytics.trackContactFormSubmit(email, subject);
      analytics.trackFormSubmit('contact_form', true);
      
      alert('Nachricht gesendet!');
    } catch (error) {
      // ✅ Track failed submission
      analytics.trackFormSubmit('contact_form', false);
      
      alert('Fehler beim Senden');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-Mail"
        required
      />
      <input 
        type="text" 
        value={subject} 
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Betreff"
      />
      <textarea 
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Nachricht"
        required
      />
      <button type="submit">Senden</button>
    </form>
  );
}
```

### 6. **CTA Button Tracking**

Für Hero-CTAs und andere wichtige Buttons:

```tsx
function HeroSection() {
  const { lang, localePath } = useLanguage();

  return (
    <section>
      <h1>{lang === 'de' ? 'Willkommen' : 'Welcome'}</h1>
      
      {/* Primary CTA */}
      <button
        onClick={() => {
          // ✅ Track button click
          analytics.trackButtonClick('hero_primary_cta', 'hero_section');
          
          // Navigate or open modal
          window.location.href = localePath('/contact');
        }}
        className="bg-teal-600 text-white px-6 py-3 rounded-xl"
      >
        {lang === 'de' ? 'Jetzt starten' : 'Get Started'}
      </button>

      {/* Secondary CTA */}
      <button
        onClick={() => {
          // ✅ Track button click
          analytics.trackButtonClick('hero_secondary_cta', 'hero_section');
          
          // Navigate to cases
          window.location.href = localePath('/cases');
        }}
        className="border border-gray-300 px-6 py-3 rounded-xl"
      >
        {lang === 'de' ? 'Referenzen ansehen' : 'View Cases'}
      </button>
    </section>
  );
}
```

### 7. **Download Tracking**

Für PDF-Downloads, Case Studies, etc.:

```tsx
function CaseStudyDownload({ caseSlug }: { caseSlug: string }) {
  const handleDownload = () => {
    // ✅ Track download
    analytics.trackDownload(`${caseSlug}-case-study.pdf`, 'pdf');
    
    // Trigger download
    const link = document.createElement('a');
    link.href = `/assets/cases/${caseSlug}.pdf`;
    link.download = `${caseSlug}-case-study.pdf`;
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg"
    >
      <Download className="h-4 w-4" />
      Case Study herunterladen
    </button>
  );
}
```

### 8. **External Link Tracking**

Für Links zu Partner-Websites, Social Media, etc.:

```tsx
function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a
        href="https://linkedin.com/company/quantiva"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          // ✅ Track external link
          analytics.trackExternalLinkClick(
            'https://linkedin.com/company/quantiva',
            'LinkedIn'
          );
        }}
      >
        <Linkedin className="h-6 w-6" />
      </a>

      <a
        href="https://twitter.com/quantiva"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          // ✅ Track external link
          analytics.trackExternalLinkClick(
            'https://twitter.com/quantiva',
            'Twitter'
          );
        }}
      >
        <Twitter className="h-6 w-6" />
      </a>
    </div>
  );
}
```

### 9. **Video Play Tracking**

Für Hero-Videos oder Case Study Videos:

```tsx
function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasTrackedPlay, setHasTrackedPlay] = useState(false);

  const handlePlay = () => {
    if (!hasTrackedPlay) {
      // ✅ Track video play (only once)
      analytics.trackButtonClick('hero_video_play', 'hero_section');
      setHasTrackedPlay(true);
    }
  };

  return (
    <video
      ref={videoRef}
      onPlay={handlePlay}
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/assets/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
```

### 10. **Scroll Depth Tracking**

Track wie weit Nutzer scrollen:

```tsx
function useScrollDepth() {
  const [maxDepth, setMaxDepth] = useState(0);
  const hasTracked25 = useRef(false);
  const hasTracked50 = useRef(false);
  const hasTracked75 = useRef(false);
  const hasTracked100 = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      setMaxDepth(Math.max(maxDepth, scrollPercent));

      // Track milestones
      if (scrollPercent >= 25 && !hasTracked25.current) {
        analytics.trackButtonClick('scroll_depth_25', 'page');
        hasTracked25.current = true;
      }
      if (scrollPercent >= 50 && !hasTracked50.current) {
        analytics.trackButtonClick('scroll_depth_50', 'page');
        hasTracked50.current = true;
      }
      if (scrollPercent >= 75 && !hasTracked75.current) {
        analytics.trackButtonClick('scroll_depth_75', 'page');
        hasTracked75.current = true;
      }
      if (scrollPercent >= 100 && !hasTracked100.current) {
        analytics.trackButtonClick('scroll_depth_100', 'page');
        hasTracked100.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxDepth]);
}

// Usage in component:
function MyPage() {
  useScrollDepth(); // Automatically tracks scroll depth
  
  return <div>...</div>;
}
```

---

## 🧪 A/B Testing Beispiele

### 11. **Hero CTA A/B Test**

Test verschiedene CTA-Texte:

```tsx
import { getVariant, trackConversion } from '@/utils/abTesting';

function HeroSection() {
  // Get variant (A or B) - persists in localStorage
  const ctaVariant = getVariant('hero_cta_test', ['A', 'B']);
  
  const ctaText = ctaVariant === 'A' 
    ? 'Jetzt starten' 
    : 'Kostenlos testen';
  
  const ctaColor = ctaVariant === 'A'
    ? 'bg-teal-600'
    : 'bg-blue-600';

  return (
    <button
      className={`${ctaColor} text-white px-6 py-3 rounded-xl`}
      onClick={() => {
        // ✅ Track conversion
        trackConversion('hero_cta_test', 'click');
        
        // Navigate
        window.location.href = '/contact';
      }}
    >
      {ctaText}
    </button>
  );
}
```

### 12. **Pricing Layout A/B Test**

Test verschiedene Layouts:

```tsx
import { getVariant, trackConversion } from '@/utils/abTesting';

function PricingSection() {
  const layoutVariant = getVariant('pricing_layout_test', ['A', 'B']);

  return (
    <section>
      {layoutVariant === 'A' ? (
        // Horizontal layout
        <div className="flex gap-6">
          <PricingCard plan="basic" />
          <PricingCard plan="pro" />
          <PricingCard plan="enterprise" />
        </div>
      ) : (
        // Vertical layout
        <div className="space-y-6">
          <PricingCard plan="basic" />
          <PricingCard plan="pro" />
          <PricingCard plan="enterprise" />
        </div>
      )}
    </section>
  );
}

function PricingCard({ plan }: { plan: string }) {
  return (
    <div className="border rounded-xl p-6">
      <h3>{plan}</h3>
      <button
        onClick={() => {
          // ✅ Track conversion
          trackConversion('pricing_layout_test', `select_${plan}`);
          
          // Navigate to checkout
          window.location.href = `/checkout?plan=${plan}`;
        }}
      >
        Auswählen
      </button>
    </div>
  );
}
```

### 13. **Weighted A/B Test**

70% Variant A, 30% Variant B:

```tsx
import { getVariant, trackConversion } from '@/utils/abTesting';

function FeatureSection() {
  // 70% get variant A, 30% get variant B
  const variant = getVariant('feature_highlight_test', ['A', 'B'], [70, 30]);

  return (
    <section>
      {variant === 'A' ? (
        <div className="bg-gray-50 p-8">
          <h2>Unsere Features</h2>
          {/* Standard layout */}
        </div>
      ) : (
        <div className="bg-teal-50 p-8">
          <h2>🚀 Unsere Features</h2>
          {/* Highlighted layout with emoji */}
        </div>
      )}
    </section>
  );
}
```

---

## 🔒 Privacy-Friendly Tracking

### 14. **Consent-Aware Tracking**

Nur tracken, wenn Nutzer zugestimmt hat:

```tsx
import { hasAnalyticsConsent } from '@/utils/privacy';
import { analytics } from '@/utils/analytics';

function MyComponent() {
  const handleAction = () => {
    // Check consent before tracking
    if (hasAnalyticsConsent()) {
      analytics.trackButtonClick('action_button', 'my_component');
    }
    
    // Your action logic
    doSomething();
  };

  return <button onClick={handleAction}>Action</button>;
}
```

### 15. **Anonymous User ID**

Für User-spezifisches Tracking ohne PII:

```tsx
import { getAnonymousUserId } from '@/utils/privacy';
import { trackEvent } from '@/utils/analytics';

function trackUserAction(action: string) {
  const userId = getAnonymousUserId(); // 'anon_abc123_1234567890'
  
  trackEvent('button_click', {
    action,
    user_id: userId, // Anonymous, no PII
    timestamp: Date.now()
  });
}
```

---

## 📊 Admin Dashboard Tracking

### 16. **Admin Actions**

Track wichtige Admin-Aktionen:

```tsx
// In AdminDashboard.tsx

const publishCase = (slug: string) => {
  // Publish logic
  updateCaseStatus(slug, 'published');
  
  // ✅ Track admin action
  analytics.trackAdminAction('case_published', slug);
  
  showToast('Case veröffentlicht!');
};

const deleteCase = (slug: string) => {
  if (!confirm('Wirklich löschen?')) return;
  
  // Delete logic
  removeCaseFromDatabase(slug);
  
  // ✅ Track admin action
  analytics.trackAdminAction('case_deleted', slug);
  
  showToast('Case gelöscht');
};

const bulkUpdate = (slugs: string[], action: string) => {
  // Bulk update logic
  updateMultipleCases(slugs, action);
  
  // ✅ Track bulk action
  analytics.trackAdminAction('bulk_update', `${action}_${slugs.length}_cases`);
  
  showToast(`${slugs.length} Cases aktualisiert`);
};
```

---

## 🎯 Best Practices

### ✅ DO:
- Track meaningful user interactions
- Use descriptive event names
- Include context in properties
- Respect user privacy
- Test tracking in development

### ❌ DON'T:
- Track every mouse move
- Include personal data (emails, names)
- Use generic event names
- Track sensitive information
- Forget to test

---

## 🧪 Testing Your Tracking

### Development Console:

Web Vitals werden automatisch in der Konsole geloggt:

```
📊 Web Vital: {
  name: 'LCP',
  value: 1234,
  rating: 'good',
  delta: 123,
  id: 'v3-1234567890'
}
```

### Manual Testing:

```tsx
// Test in browser console:
import { analytics } from './utils/analytics';

// Test button click
analytics.trackButtonClick('test_button', 'test_location');

// Test form submit
analytics.trackFormSubmit('test_form', true);

// Test case view
analytics.trackCaseView('test-slug', 'Cloud');
```

### Vercel Dashboard:

1. Go to: https://vercel.com/dashboard
2. Select: Quantiva Advisory
3. Click: "Analytics"
4. View: Custom Events tab
5. Filter: By event name

---

## 📚 Weitere Ressourcen

- **Analytics Guide:** `/ANALYTICS_GUIDE.md`
- **Analytics Utils:** `/src/utils/analytics.ts`
- **A/B Testing Utils:** `/src/utils/abTesting.ts`
- **Privacy Utils:** `/src/utils/privacy.ts`
- **Vercel Docs:** https://vercel.com/docs/analytics

---

**Fragen?** Schau dir die Beispiele an oder teste direkt in deiner App!

**Last Updated:** October 10, 2025








