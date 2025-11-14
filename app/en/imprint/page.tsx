import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';

export const metadata: Metadata = {
  title: 'Imprint | Quantiva Advisory',
  description: 'Legal information and imprint of Quantiva Advisory',
};

const navigationItems = [
  { id: 'home', label: 'Home', href: '/en' },
  { id: 'about', label: 'About', href: '/en/about' },
  { id: 'services', label: 'Services', href: '/en#services' },
  { id: 'cases', label: 'Cases', href: '/en/cases' },
  { id: 'team', label: 'Team', href: '/en/team' },
  { id: 'career', label: 'Career', href: '/en#career' },
];

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation lang="en" items={navigationItems} />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Imprint</h1>
        
        <section className="space-y-6 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Information according to § 5 TMG</h2>
            <p>
              Quantiva Advisory<br />
              [Your Address]<br />
              [ZIP Code] [City]
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <p>
              Phone: [Your Phone Number]<br />
              Email: info@quantivaadvisory.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Responsible for content according to § 55 Abs. 2 RStV</h2>
            <p>
              [Name of Responsible Person]<br />
              [Address]<br />
              [ZIP Code] [City]
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Liability for Content</h3>
            <p>
              The contents of our pages have been created with the greatest care. However, we cannot guarantee the accuracy, completeness and timeliness of the content.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Liability for Links</h3>
            <p>
              Our offer contains links to external websites of third parties, on whose contents we have no influence. The respective provider or operator of the pages is always responsible for the contents of the linked pages.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

