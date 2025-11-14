import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';

export const metadata: Metadata = {
  title: 'Impressum | Quantiva Advisory',
  description: 'Impressum und rechtliche Informationen von Quantiva Advisory',
};

const navigationItems = [
  { id: 'home', label: 'Home', href: '/de' },
  { id: 'about', label: 'Über uns', href: '/de/about' },
  { id: 'services', label: 'Services', href: '/de#services' },
  { id: 'cases', label: 'Projekte', href: '/de/cases' },
  { id: 'team', label: 'Team', href: '/de/team' },
  { id: 'career', label: 'Karriere', href: '/de#career' },
];

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation lang="de" items={navigationItems} />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        
        <section className="space-y-6 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Quantiva Advisory<br />
              [Ihre Adresse]<br />
              [PLZ] [Ort]
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Kontakt</h2>
            <p>
              Telefon: [Ihre Telefonnummer]<br />
              E-Mail: info@quantivaadvisory.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              [Name des Verantwortlichen]<br />
              [Adresse]<br />
              [PLZ] [Ort]
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Haftungsausschluss</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

