import { NextRequest, NextResponse } from 'next/server';

// Rate limiting (simple in-memory, use Redis in production)
const requestCounts = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT = 5; // 5 requests
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

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(req);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await req.json();
    const { name, email, message, honeypot, lang } = body;

    // Honeypot check (bot protection)
    if (honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Validation
    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Invalid name' },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email' },
        { status: 400 }
      );
    }

    if (!message || message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      );
    }

    // Log to console (in production, send to email service)
    console.log('📧 New contact form submission:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log(`Language: ${lang || 'unknown'}`);
    console.log(`Time: ${new Date().toISOString()}`);

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
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
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






