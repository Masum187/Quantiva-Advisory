import React from 'react';
import { useLanguage } from '../../QuantivaWebsite';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export default function CyberSecurityPage() {
  const { lang, localePath } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-teal-400" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {lang === 'de' ? 'Cyber Security' : 'Cyber Security'}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            {lang === 'de' 
              ? 'Zero Trust, Penetration Testing und Sicherheitsarchitekturen für maximalen Schutz Ihrer digitalen Assets.'
              : 'Zero Trust, penetration testing and security architectures for maximum protection of your digital assets.'}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {lang === 'de' ? 'Unsere Leistungen' : 'Our Services'}
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Lock, title: lang === 'de' ? 'Zero Trust Architektur' : 'Zero Trust Architecture' },
                  { icon: Eye, title: lang === 'de' ? 'Penetration Testing' : 'Penetration Testing' },
                  { icon: AlertTriangle, title: lang === 'de' ? 'Vulnerability Assessment' : 'Vulnerability Assessment' },
                  { icon: CheckCircle, title: lang === 'de' ? 'Security Audits' : 'Security Audits' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-teal-500/30">
                    <item.icon className="w-6 h-6 text-teal-400" />
                    <span className="text-lg">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {lang === 'de' ? 'Warum Cyber Security?' : 'Why Cyber Security?'}
              </h2>
              <p className="text-gray-300 mb-6">
                {lang === 'de'
                  ? 'In einer zunehmend vernetzten Welt sind Cyberangriffe eine der größten Bedrohungen für Unternehmen. Wir helfen Ihnen, Ihre Systeme zu schützen und Compliance-Anforderungen zu erfüllen.'
                  : 'In an increasingly connected world, cyber attacks are one of the biggest threats to businesses. We help you protect your systems and meet compliance requirements.'}
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span>{lang === 'de' ? 'Ganzheitliche Sicherheitskonzepte' : 'Holistic security concepts'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span>{lang === 'de' ? 'Compliance & Risikomanagement' : 'Compliance & risk management'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span>{lang === 'de' ? '24/7 Monitoring & Response' : '24/7 monitoring & response'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href={localePath('/#contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-500 rounded-xl font-semibold transition"
            >
              {lang === 'de' ? 'Jetzt Beratung anfragen' : 'Request consultation now'}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


