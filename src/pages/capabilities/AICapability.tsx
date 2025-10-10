import React from 'react';
import { useLanguage } from '../../QuantivaWebsite';
import { Brain, Sparkles, TrendingUp, Shield, CheckCircle, ArrowLeft } from 'lucide-react';

export default function AICapability() {
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
              <Brain className="w-8 h-8 text-teal-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {lang === 'de' ? 'Künstliche Intelligenz (AI)' : 'Artificial Intelligence (AI)'}
              </h1>
              <p className="text-gray-400 mt-2">
                {lang === 'de' ? 'Intelligente Lösungen für automatisierte Geschäftsprozesse' : 'Intelligent solutions for automated business processes'}
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
              ? 'Künstliche Intelligenz transformiert Geschäftsprozesse und schafft neue Möglichkeiten für Innovation und Effizienz. Wir helfen Ihnen, KI-Technologien sinnvoll einzusetzen und echten Mehrwert zu generieren.'
              : 'Artificial intelligence transforms business processes and creates new opportunities for innovation and efficiency. We help you use AI technologies meaningfully and generate real value.'}
          </p>
        </div>

        {/* Image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-teal-500/30">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop" 
            alt="Artificial Intelligence"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Use-Case Discovery */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold">
              {lang === 'de' ? 'Use-Case Discovery' : 'Use-Case Discovery'}
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            {lang === 'de'
              ? 'Nicht jedes Problem benötigt KI. Wir identifizieren gemeinsam mit Ihnen die Use Cases, bei denen KI echten Mehrwert bringt und einen messbaren ROI liefert.'
              : 'Not every problem needs AI. Together with you, we identify the use cases where AI brings real value and delivers measurable ROI.'}
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'AI Readiness Assessment' : 'AI readiness assessment'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Use Case Priorisierung' : 'Use case prioritization'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Proof of Concept (PoC)' : 'Proof of concept (PoC)'}</span>
            </li>
          </ul>
        </section>

        {/* Model Training & Eval */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold">
              {lang === 'de' ? 'Model Training & Evaluation' : 'Model Training & Evaluation'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-xl bg-slate-900/50 p-6 border border-teal-500/30">
              <h3 className="font-semibold text-lg mb-2">{lang === 'de' ? 'Custom Models' : 'Custom Models'}</h3>
              <p className="text-gray-400 text-sm">
                {lang === 'de' 
                  ? 'Entwicklung maßgeschneiderter ML-Modelle für Ihre spezifischen Anforderungen'
                  : 'Development of custom ML models for your specific requirements'}
              </p>
            </div>
            <div className="rounded-xl bg-slate-900/50 p-6 border border-teal-500/30">
              <h3 className="font-semibold text-lg mb-2">{lang === 'de' ? 'Fine-Tuning' : 'Fine-Tuning'}</h3>
              <p className="text-gray-400 text-sm">
                {lang === 'de' 
                  ? 'Anpassung von Foundation Models (GPT, BERT, etc.) auf Ihre Daten'
                  : 'Adaptation of foundation models (GPT, BERT, etc.) to your data'}
              </p>
            </div>
          </div>
        </section>

        {/* Image 2 */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-teal-500/30">
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop" 
            alt="Machine Learning"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* MLOps & GenAI */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {lang === 'de' ? 'MLOps & GenAI' : 'MLOps & GenAI'}
          </h2>
          <p className="text-gray-300 mb-4">
            {lang === 'de'
              ? 'Wir implementieren MLOps-Pipelines für kontinuierliches Training, Monitoring und Deployment von ML-Modellen. Für Generative AI setzen wir auf moderne Frameworks und Best Practices.'
              : 'We implement MLOps pipelines for continuous training, monitoring and deployment of ML models. For generative AI, we rely on modern frameworks and best practices.'}
          </p>
        </section>

        {/* Guardrails & Compliance */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold">
              {lang === 'de' ? 'Guardrails & Compliance' : 'Guardrails & Compliance'}
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            {lang === 'de'
              ? 'KI muss verantwortungsvoll eingesetzt werden. Wir implementieren Guardrails für sichere und compliant AI-Systeme, die den EU AI Act und andere Regulierungen erfüllen.'
              : 'AI must be used responsibly. We implement guardrails for safe and compliant AI systems that meet the EU AI Act and other regulations.'}
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Bias Detection & Mitigation' : 'Bias detection & mitigation'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Explainable AI (XAI)' : 'Explainable AI (XAI)'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Data Privacy & Security' : 'Data privacy & security'}</span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-teal-900/30 to-slate-900/30 border border-teal-500/30">
          <h3 className="text-2xl font-bold mb-4">
            {lang === 'de' ? 'Bereit für KI?' : 'Ready for AI?'}
          </h3>
          <p className="text-gray-300 mb-6">
            {lang === 'de'
              ? 'Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Geschäft transformieren kann.'
              : "Let's find out together how AI can transform your business."}
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

