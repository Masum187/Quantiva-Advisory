import React from 'react';
import { useLanguage } from '../../QuantivaWebsite';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowLeft } from 'lucide-react';

export default function CyberSecurityCapability() {
  const { lang, localePath } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="bg-slate-900/50 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <a 
            href={localePath('/#services-detail')} 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'de' ? 'Zurück zu Kompetenzen' : 'Back to Capabilities'}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
              <Shield className="w-8 h-8 text-teal-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {lang === 'de' ? 'Cyber Security' : 'Cyber Security'}
              </h1>
              <p className="text-gray-400 mt-2">
                {lang === 'de' ? 'Ganzheitlicher Schutz für Ihre digitalen Assets' : 'Holistic protection for your digital assets'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        {/* Intro */}
        <div className="prose prose-lg prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            {lang === 'de' 
              ? 'In einer zunehmend vernetzten Welt sind Cyberangriffe eine der größten Bedrohungen für Unternehmen. Unsere Cyber Security Expertise schützt Ihre Systeme, Daten und Geschäftsprozesse vor modernen Bedrohungen.'
              : 'In an increasingly connected world, cyber attacks are one of the biggest threats to businesses. Our cyber security expertise protects your systems, data and business processes from modern threats.'}
          </p>
        </div>

        {/* Image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-teal-500/30">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
            alt="Cyber Security"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Zero Trust & IAM */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold">
              {lang === 'de' ? 'Zero Trust & IAM' : 'Zero Trust & IAM'}
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            {lang === 'de'
              ? 'Wir implementieren Zero Trust Architekturen, die davon ausgehen, dass kein Nutzer oder System automatisch vertrauenswürdig ist. Identity and Access Management (IAM) stellt sicher, dass nur autorisierte Personen Zugriff auf kritische Ressourcen haben.'
              : 'We implement Zero Trust architectures that assume no user or system is automatically trustworthy. Identity and Access Management (IAM) ensures that only authorized persons have access to critical resources.'}
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Multi-Faktor-Authentifizierung (MFA)' : 'Multi-factor authentication (MFA)'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Least Privilege Prinzip' : 'Least privilege principle'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Continuous Verification' : 'Continuous verification'}</span>
            </li>
          </ul>
        </section>

        {/* Security Architecture */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold">
              {lang === 'de' ? 'Security Architecture' : 'Security Architecture'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-xl bg-slate-900/50 p-6 border border-teal-500/30">
              <h3 className="font-semibold text-lg mb-2">{lang === 'de' ? 'Network Security' : 'Network Security'}</h3>
              <p className="text-gray-400 text-sm">
                {lang === 'de' 
                  ? 'Segmentierung, Firewalls, VPNs und sichere Netzwerkarchitekturen'
                  : 'Segmentation, firewalls, VPNs and secure network architectures'}
              </p>
            </div>
            <div className="rounded-xl bg-slate-900/50 p-6 border border-teal-500/30">
              <h3 className="font-semibold text-lg mb-2">{lang === 'de' ? 'Application Security' : 'Application Security'}</h3>
              <p className="text-gray-400 text-sm">
                {lang === 'de' 
                  ? 'Secure Coding, OWASP Top 10, Security by Design'
                  : 'Secure coding, OWASP Top 10, security by design'}
              </p>
            </div>
          </div>
        </section>

        {/* Image 2 */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-teal-500/30">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop" 
            alt="Security Operations"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Audits & Hardening */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold">
              {lang === 'de' ? 'Audits & Hardening' : 'Audits & Hardening'}
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            {lang === 'de'
              ? 'Regelmäßige Security Audits und System Hardening identifizieren Schwachstellen und schließen Sicherheitslücken, bevor sie ausgenutzt werden können.'
              : 'Regular security audits and system hardening identify vulnerabilities and close security gaps before they can be exploited.'}
          </p>
        </section>

        {/* Threat Modeling */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {lang === 'de' ? 'Threat Modeling' : 'Threat Modeling'}
          </h2>
          <p className="text-gray-300">
            {lang === 'de'
              ? 'Wir analysieren potenzielle Bedrohungsszenarien und entwickeln proaktive Schutzmaßnahmen. Durch systematisches Threat Modeling identifizieren wir Angriffsvektoren und priorisieren Sicherheitsmaßnahmen nach Risiko.'
              : 'We analyze potential threat scenarios and develop proactive protective measures. Through systematic threat modeling, we identify attack vectors and prioritize security measures by risk.'}
          </p>
        </section>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-teal-900/30 to-slate-900/30 border border-teal-500/30">
          <h3 className="text-2xl font-bold mb-4">
            {lang === 'de' ? 'Interesse an Cyber Security?' : 'Interested in Cyber Security?'}
          </h3>
          <p className="text-gray-300 mb-6">
            {lang === 'de'
              ? 'Lassen Sie uns über Ihre Sicherheitsanforderungen sprechen und eine maßgeschneiderte Lösung entwickeln.'
              : "Let's talk about your security requirements and develop a tailored solution."}
          </p>
          <a
            href={localePath('/#contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 rounded-xl font-semibold transition"
          >
            {lang === 'de' ? 'Jetzt Kontakt aufnehmen' : 'Contact us now'}
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </a>
        </div>
      </article>
    </div>
  );
}


