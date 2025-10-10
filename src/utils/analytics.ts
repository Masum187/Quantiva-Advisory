/**
 * Custom Analytics Events
 * Track user interactions and custom events with Vercel Analytics
 */

import { track } from '@vercel/analytics';

// Event Types
export type AnalyticsEvent = 
  | 'button_click'
  | 'form_submit'
  | 'case_view'
  | 'contact_form_submit'
  | 'calendly_open'
  | 'navigation_click'
  | 'download'
  | 'external_link_click'
  | 'language_switch'
  | 'admin_action';

// Track custom events
export function trackEvent(
  event: AnalyticsEvent,
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined') {
    track(event, properties);
  }
}

// Convenience functions for common events
export const analytics = {
  // Track button clicks
  trackButtonClick: (buttonName: string, location?: string) => {
    trackEvent('button_click', { 
      button: buttonName,
      location: location || 'unknown'
    });
  },

  // Track form submissions
  trackFormSubmit: (formName: string, success: boolean = true) => {
    trackEvent('form_submit', { 
      form: formName,
      success: success ? 'true' : 'false'
    });
  },

  // Track case study views
  trackCaseView: (caseSlug: string, category?: string) => {
    trackEvent('case_view', { 
      slug: caseSlug,
      category: category || 'unknown'
    });
  },

  // Track contact form submissions
  trackContactFormSubmit: (email: string, subject?: string) => {
    trackEvent('contact_form_submit', { 
      email_domain: email.split('@')[1] || 'unknown',
      subject: subject || 'general'
    });
  },

  // Track Calendly opens
  trackCalendlyOpen: (source: string) => {
    trackEvent('calendly_open', { 
      source 
    });
  },

  // Track navigation clicks
  trackNavigationClick: (destination: string, from?: string) => {
    trackEvent('navigation_click', { 
      destination,
      from: from || window.location.pathname
    });
  },

  // Track downloads
  trackDownload: (fileName: string, fileType?: string) => {
    trackEvent('download', { 
      file: fileName,
      type: fileType || 'unknown'
    });
  },

  // Track external link clicks
  trackExternalLinkClick: (url: string, linkText?: string) => {
    trackEvent('external_link_click', { 
      url,
      text: linkText || 'unknown'
    });
  },

  // Track language switches
  trackLanguageSwitch: (from: string, to: string) => {
    trackEvent('language_switch', { 
      from,
      to
    });
  },

  // Track admin actions
  trackAdminAction: (action: string, details?: string) => {
    trackEvent('admin_action', { 
      action,
      details: details || 'none'
    });
  }
};



