import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://quantivaadvisory.com';

export const metadata: Metadata = {
  title: 'Privacy Policy | Quantiva Advisory',
  description: 'Privacy policy of Quantiva Advisory according to GDPR',
  alternates: {
    canonical: `${BASE_URL}/en/privacy`,
    languages: {
      'de': `${BASE_URL}/de/datenschutz`,
      'en': `${BASE_URL}/en/privacy`,
      'x-default': `${BASE_URL}/de/datenschutz`,
    },
  },
};

const navigationItems = [
  { id: 'home', label: 'Home', href: '/en' },
  { id: 'about', label: 'About', href: '/en/about' },
  { id: 'services', label: 'Services', href: '/en#services' },
  { id: 'cases', label: 'Cases', href: '/en/cases' },
  { id: 'team', label: 'Team', href: '/en/team' },
  { id: 'career', label: 'Career', href: '/en#career' },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation lang="en" items={navigationItems} />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <section className="space-y-6 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Privacy at a Glance</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">General Information</h3>
            <p>
              The following information provides a simple overview of what happens to your personal data when you visit this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Responsible Party</h2>
            <p>
              The party responsible for processing data on this website is:
            </p>
            <p className="mt-2">
              Quantiva Advisory<br />
              [Your Address]<br />
              [ZIP Code] [City]<br />
              Email: info@quantivaadvisory.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Data Collection on This Website</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Contact Form</h3>
            <p>
              If you send us inquiries via the contact form, your details from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions.
            </p>

            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Analytics</h3>
            <p>
              This website uses Vercel Analytics, a privacy-friendly solution without cookies. Data is collected anonymously and is used solely to improve website performance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Your Rights</h2>
            <p>
              You have the right to receive information about your personal data stored by us at any time. You also have the right to correction, deletion or restriction of the processing of your data.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

