"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function AnalyticsGate() {
  const [consent, setConsent] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initial consent check
    const storedConsent = localStorage.getItem("consent");
    setConsent(storedConsent);

    // Listen for consent updates
    const handleConsentUpdate = (event: CustomEvent) => {
      setConsent(event.detail.type);
    };

    window.addEventListener("consent-updated", handleConsentUpdate as EventListener);
    
    return () => {
      window.removeEventListener("consent-updated", handleConsentUpdate as EventListener);
    };
  }, []);

  // Nur Analytics laden wenn Consent "all" ist
  if (!mounted || consent !== "all") {
    return null;
  }

  // Vercel Analytics wird bereits im Layout geladen, hier können zusätzliche Analytics hinzugefügt werden
  // Beispiel: Plausible, Google Analytics, etc.
  
  return (
    <>
      {/* Beispiel für Plausible Analytics (optional) */}
      {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
        <Script
          strategy="afterInteractive"
          data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
        />
      )}
      
      {/* Beispiel für Google Analytics (optional) */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}
    </>
  );
}

