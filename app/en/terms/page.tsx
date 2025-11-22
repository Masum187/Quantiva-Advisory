import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://quantivaadvisory.com';

export const metadata: Metadata = {
  title: 'Terms of Service | Quantiva Advisory',
  description: 'Terms of service and conditions of Quantiva Advisory',
  alternates: {
    canonical: `${BASE_URL}/en/terms`,
    languages: {
      'de': `${BASE_URL}/de/impressum`,
      'en': `${BASE_URL}/en/terms`,
      'x-default': `${BASE_URL}/de/impressum`,
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

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation lang="en" items={navigationItems} />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <section className="space-y-6 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Scope</h2>
            <p>
              These terms and conditions apply to all services provided by Quantiva Advisory. 
              By using our services, you agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Services</h2>
            <p>
              Quantiva Advisory provides consulting services in the areas of SAP, Cloud, AI, 
              Integration, and Cyber Security. The scope and details of services are defined 
              in individual service agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
            <p>
              All content, materials, and intellectual property provided by Quantiva Advisory 
              remain the property of Quantiva Advisory unless otherwise agreed in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Liability</h2>
            <p>
              Quantiva Advisory is liable for damages only in cases of intent or gross negligence. 
              Liability for slight negligence is excluded unless it concerns essential contractual obligations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Protection</h2>
            <p>
              The handling of personal data is governed by our Privacy Policy. 
              Please refer to our <a href="/en/privacy" className="text-teal-400 hover:text-teal-300 underline">Privacy Policy</a> for detailed information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to Terms</h2>
            <p>
              Quantiva Advisory reserves the right to modify these terms at any time. 
              Changes will be communicated through our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact</h2>
            <p>
              For questions regarding these terms, please contact us at{' '}
              <a href="mailto:info@quantivaadvisory.com" className="text-teal-400 hover:text-teal-300 underline">
                info@quantivaadvisory.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

