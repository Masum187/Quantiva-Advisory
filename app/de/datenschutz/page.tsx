import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Quantiva Advisory',
  description: 'Datenschutzerklärung von Quantiva Advisory gemäß DSGVO',
};

const navigationItems = [
  { id: 'home', label: 'Home', href: '/de' },
  { id: 'about', label: 'Über uns', href: '/de/about' },
  { id: 'services', label: 'Services', href: '/de#services' },
  { id: 'cases', label: 'Projekte', href: '/de/cases' },
  { id: 'team', label: 'Team', href: '/de/team' },
  { id: 'career', label: 'Karriere', href: '/de#career' },
];

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation lang="de" items={navigationItems} />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <section className="space-y-6 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Verantwortliche Stelle</h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              Quantiva Advisory<br />
              [Ihre Adresse]<br />
              [PLZ] [Ort]<br />
              E-Mail: info@quantivaadvisory.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Analytics</h3>
            <p>
              Diese Website nutzt Vercel Analytics, eine datenschutzfreundliche Lösung ohne Cookies. Die Daten werden anonymisiert erfasst und dienen ausschließlich der Verbesserung der Website-Performance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. Außerdem haben Sie ein Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

