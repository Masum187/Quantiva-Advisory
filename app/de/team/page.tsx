import { Metadata } from 'next';
import Link from 'next/link';
import teamData from '../../lib/data/team.json';
import { Linkedin, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Unser Team – Quantiva Advisory',
  description: 'Lernen Sie unser erfahrenes Team von SAP-, Cloud- und AI-Experten kennen. Gemeinsam gestalten wir Ihre digitale Zukunft.',
  alternates: {
    canonical: '/de/team',
    languages: {
      'de-DE': '/de/team',
      'en-US': '/en/team',
    },
  },
};

export default function TeamPage() {
  // Sort team members by order
  const sortedTeam = [...teamData].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unser Team
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl">
            Erfahrene Experten für SAP, Cloud, AI und digitale Transformation.
            Gemeinsam gestalten wir Ihre digitale Zukunft.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTeam.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image/Avatar */}
              <div className="relative h-64 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-5xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-semibold mb-3">
                  {member.roleDe}
                </p>

                <p className="text-gray-600 text-sm mb-4">
                  {member.descriptionDe}
                </p>

                {/* Expertise */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Expertise
                  </p>
                  <p className="text-sm text-gray-700">
                    {member.expertiseDe}
                  </p>
                </div>

                {/* Contact Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors text-sm font-medium"
                      aria-label={`E-Mail an ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                      <span>E-Mail</span>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
                      aria-label={`LinkedIn-Profil von ${member.name}`}
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Warum Quantiva Advisory?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Innovative Projekte
              </h3>
              <p className="text-gray-600">
                Arbeiten Sie an spannenden Projekten mit modernsten Technologien
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Persönliche Entwicklung
              </h3>
              <p className="text-gray-600">
                Kontinuierliche Weiterbildung und Karrierechancen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Starkes Team
              </h3>
              <p className="text-gray-600">
                Arbeiten Sie mit erfahrenen Experten in einem unterstützenden Umfeld
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Werden Sie Teil unseres Teams
          </h2>
          <p className="text-teal-100 mb-8 text-lg">
            Entdecken Sie unsere aktuellen Stellenangebote und starten Sie Ihre Karriere bei Quantiva Advisory.
          </p>
          <Link
            href="/de/career"
            className="inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Karrieremöglichkeiten ansehen
          </Link>
        </div>
      </section>
    </div>
  );
}

