'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as Sentry from '@sentry/nextjs';

interface ContactFormProps {
  lang: 'de' | 'en';
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm({ lang }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState('');
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!recaptchaSiteKey) return;
    if (typeof window === 'undefined') return;
    if (document.querySelector('script[data-recaptcha]')) return;

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    script.setAttribute('data-recaptcha', 'true');
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [recaptchaSiteKey]);

  const t = {
    de: {
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      submit: 'Senden',
      sending: 'Wird gesendet...',
      success: 'Vielen Dank! Wir melden uns in Kürze.',
      errorGeneric: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      nameRequired: 'Bitte geben Sie Ihren Namen ein',
      emailRequired: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      messageRequired: 'Bitte geben Sie eine Nachricht ein (mindestens 10 Zeichen)',
    },
    en: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
      sending: 'Sending...',
      success: 'Thank you! We will get back to you shortly.',
      errorGeneric: 'An error occurred. Please try again later.',
      nameRequired: 'Please enter your name',
      emailRequired: 'Please enter a valid email address',
      messageRequired: 'Please enter a message (at least 10 characters)',
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create a transaction/span to measure performance
    return Sentry.startSpan(
      {
        op: 'ui.click',
        name: 'Contact Form Submit',
      },
      async (span) => {
        setStatus('loading');
        setError('');

        const formData = new FormData(e.currentTarget);
        let recaptchaToken: string | undefined;

        // Get reCAPTCHA token if available
        if (recaptchaSiteKey && window.grecaptcha) {
          try {
            await new Promise<void>((resolve) => {
              window.grecaptcha?.ready(() => resolve());
            });
            recaptchaToken = await window.grecaptcha.execute(recaptchaSiteKey, { action: 'contact' });
            span.setAttribute('recaptcha_token_obtained', true);
          } catch (tokenError) {
            const { logger } = Sentry;
            logger.error('reCAPTCHA token error', {
              error: tokenError instanceof Error ? tokenError.message : String(tokenError),
            });
            Sentry.captureException(tokenError instanceof Error ? tokenError : new Error(String(tokenError)));
            span.setAttribute('recaptcha_token_error', true);
          }
        } else {
          span.setAttribute('recaptcha_available', false);
        }

        const data = {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          message: formData.get('message') as string,
          honeypot: formData.get('honeypot') as string,
          lang,
          recaptchaToken,
        };

        span.setAttribute('lang', lang);
        span.setAttribute('message_length', data.message?.length || 0);

        // Client-side validation
        if (!data.name || data.name.length < 2) {
          span.setAttribute('validation_failed', 'name');
          setStatus('error');
          setError(t[lang].nameRequired);
          return;
        }

        if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
          span.setAttribute('validation_failed', 'email');
          setStatus('error');
          setError(t[lang].emailRequired);
          return;
        }

        if (!data.message || data.message.length < 10) {
          span.setAttribute('validation_failed', 'message');
          setStatus('error');
          setError(t[lang].messageRequired);
          return;
        }

        try {
          // Create child span for API call
          const response = await Sentry.startSpan(
            {
              op: 'http.client',
              name: 'POST /api/contact',
            },
            async (apiSpan) => {
              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });

              apiSpan.setAttribute('http.status_code', res.status);
              apiSpan.setAttribute('http.method', 'POST');
              
              return res;
            },
          );

          if (!response.ok) {
            const errorData = await response.json();
            const error = new Error(errorData.error || 'Submission failed');
            span.setAttribute('api_error', true);
            span.setAttribute('api_status', response.status);
            throw error;
          }

          span.setAttribute('submission_success', true);
          setStatus('success');
          e.currentTarget.reset();
          
          // Reset success message after 5 seconds
          setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
          span.setAttribute('submission_failed', true);
          setStatus('error');
          const errorMessage = err instanceof Error ? err.message : t[lang].errorGeneric;
          setError(errorMessage);
          
          // Capture exception if it's a real error
          if (err instanceof Error) {
            Sentry.captureException(err, {
              tags: {
                component: 'ContactForm',
                action: 'submit',
              },
            });
          }
        }
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {t[lang].name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={100}
          disabled={status === 'loading'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {t[lang].email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={status === 'loading'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {t[lang].message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          disabled={status === 'loading'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors resize-y"
        />
      </div>

      {/* Honeypot (hidden field for bot protection) */}
      <input
        type="text"
        name="honeypot"
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
        }}
        aria-hidden="true"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? t[lang].sending : t[lang].submit}
      </button>

      {/* Success Message */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
          role="status"
          aria-live="polite"
        >
          {t[lang].success}
        </motion.div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
          role="alert"
        >
          {error || t[lang].errorGeneric}
        </motion.div>
      )}
    </form>
  );
}






