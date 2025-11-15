import { NextRequest, NextResponse } from 'next/server';
import * as Sentry from '@sentry/nextjs';

// Rate limiting (simple in-memory, use Redis in production)
const requestCounts = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT = 10; // 10 requests
const RATE_WINDOW = 60 * 60 * 1000; // per hour

function getRateLimitKey(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  return ip;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(key);

  if (!record || now > record.resetAt) {
    requestCounts.set(key, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

async function verifyRecaptcha(token?: string) {
  return Sentry.startSpan(
    {
      op: 'http.client',
      name: 'POST /recaptcha/api/siteverify',
    },
    async () => {
      const secret = process.env.RECAPTCHA_SECRET_KEY;
      if (!secret) {
        const { logger } = Sentry;
        logger.warn('reCAPTCHA secret key not configured');
        return true;
      }

      if (!token) {
        return false;
      }

      try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${secret}&response=${token}`,
        });

        const data = await response.json();
        const isValid = Boolean(data.success && (data.score ?? 0) >= 0.5);
        
        // Log verification result
        const { logger } = Sentry;
        logger.info('reCAPTCHA verification completed', {
          success: data.success,
          score: data.score,
          isValid,
        });

        return isValid;
      } catch (error) {
        const { logger } = Sentry;
        logger.error('reCAPTCHA verification failed', {
          error: error instanceof Error ? error.message : String(error),
        });
        Sentry.captureException(error);
        return false;
      }
    },
  );
}

export async function POST(req: NextRequest) {
  return Sentry.startSpan(
    {
      op: 'http.server',
      name: 'POST /api/contact',
    },
    async (span) => {
      try {
        // Rate limiting
        const rateLimitKey = getRateLimitKey(req);
        const isRateLimited = !checkRateLimit(rateLimitKey);
        
        if (isRateLimited) {
          const { logger } = Sentry;
          logger.warn('Rate limit reached for contact form', {
            endpoint: '/api/contact',
            ip: rateLimitKey,
          });
          
          span.setAttribute('rate_limited', true);
          return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { status: 429 }
          );
        }

        // Parse request body
        const body = await req.json();
        const { name, email, message, honeypot, lang, recaptchaToken } = body;

        span.setAttribute('lang', lang || 'unknown');
        span.setAttribute('has_recaptcha', !!recaptchaToken);

        // Honeypot check (bot protection)
        if (honeypot) {
          const { logger } = Sentry;
          logger.warn('Bot detected via honeypot', {
            endpoint: '/api/contact',
            ip: rateLimitKey,
          });
          
          span.setAttribute('bot_detected', true);
          return NextResponse.json(
            { error: 'Invalid submission' },
            { status: 400 }
          );
        }

        // reCAPTCHA validation
        const recaptchaValid = await verifyRecaptcha(recaptchaToken);
        if (!recaptchaValid) {
          span.setAttribute('recaptcha_failed', true);
          return NextResponse.json(
            { error: 'reCAPTCHA verification failed' },
            { status: 400 }
          );
        }

        // Validation
        if (!name || name.length < 2 || name.length > 100) {
          span.setAttribute('validation_failed', 'name');
          return NextResponse.json(
            { error: 'Invalid name' },
            { status: 400 }
          );
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          span.setAttribute('validation_failed', 'email');
          return NextResponse.json(
            { error: 'Invalid email' },
            { status: 400 }
          );
        }

        if (!message || message.length < 10 || message.length > 5000) {
          span.setAttribute('validation_failed', 'message');
          return NextResponse.json(
            { error: 'Invalid message' },
            { status: 400 }
          );
        }

        // Log structured log to Sentry
        const { logger } = Sentry;
        logger.info('New contact form submission', {
          name: name.substring(0, 50), // Truncate for privacy
          email: email.substring(0, 50), // Truncate for privacy
          messageLength: message.length,
          language: lang || 'unknown',
        });

        // TODO: Send email using SendGrid, Resend, or Nodemailer
        // Example with SendGrid:
        /*
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        
        await sgMail.send({
          to: 'info@quantivaadvisory.com',
          from: 'noreply@quantivaadvisory.com',
          subject: `New Contact from ${name}`,
          text: message,
          replyTo: email,
        });
        */

        span.setAttribute('submission_success', true);

        // Success response
        return NextResponse.json(
          { 
            success: true,
            message: lang === 'de' 
              ? 'Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.'
              : 'Thank you for your message. We will get back to you shortly.'
          },
          { status: 200 }
        );

      } catch (error) {
        const { logger } = Sentry;
        logger.error('Contact form error', {
          error: error instanceof Error ? error.message : String(error),
          endpoint: '/api/contact',
        });
        
        Sentry.captureException(error, {
          tags: {
            endpoint: 'contact',
            method: 'POST',
          },
        });
        
        return NextResponse.json(
          { error: 'An error occurred. Please try again later.' },
          { status: 500 }
        );
      }
    },
  );
}

// OPTIONS method for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}






