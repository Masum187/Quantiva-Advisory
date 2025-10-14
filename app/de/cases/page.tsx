'use client';

import casesData from '../../lib/data/cases.json';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cog, 
  Database, 
  Shield, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Code, 
  Layers, 
  Workflow, 
  Bot,
  Users
} from 'lucide-react';

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
        <div className="absolute inset-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-teal-500/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.01,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Floating Particles */}
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-teal-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section - Ultra Modern */}
      <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-teal-400 to-purple-600 flex items-center justify-center shadow-2xl"
            >
              <span className="text-white font-bold text-3xl">Q</span>
            </motion.div>

            {/* Main Title with Gradient Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Projekte
              </span>
            </motion.h1>

            {/* Subtitle with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-300 mb-8"
            >
              <span className="inline-block">Innovation meets </span>
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-teal-400 font-semibold"
              >
                Excellence
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            >
              Entdecken Sie unsere bahnbrechenden Projekte, die die Zukunft der Technologie gestalten.
              Von KI-gesteuerten SAP-Lösungen bis hin zu revolutionären Recruiting-Plattformen.
            </motion.p>
          </motion.div>

          {/* Animated CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Projekte entdecken
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-teal-400 text-teal-400 rounded-2xl font-semibold text-lg hover:bg-teal-400 hover:text-black transition-all duration-300"
            >
              Mehr erfahren
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modern Cases Grid */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unsere <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Cases</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Erfolgsgeschichten aus verschiedenen Branchen und Technologien.
              Erfahren Sie, wie wir unseren Kunden zu digitalem Erfolg verhelfen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casesData.map((caseItem, index) => (
              <motion.div
                key={caseItem.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <Link href={`/de/cases/${caseItem.slug}`}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-teal-400/50 transition-all duration-500 shadow-2xl">
                    {/* Image with animated overlay */}
                    {caseItem.heroImage && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={caseItem.heroImage}
                          alt={caseItem.titleDe}
                          width={400}
                          height={192}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-3 py-1 bg-teal-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                            {caseItem.category}
                          </span>
                          <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                            {caseItem.industry}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                        {caseItem.titleDe}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {caseItem.subtitleDe}
                      </p>

                      {/* Technologies with modern styling */}
                      {caseItem.tech && caseItem.tech.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {caseItem.tech.slice(0, 3).map((tech: string, idx: number) => (
                            <motion.span
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              className="px-2 py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-xs rounded-lg border border-white/20"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {caseItem.tech.length > 3 && (
                            <span className="px-2 py-1 text-gray-500 text-xs">
                              +{caseItem.tech.length - 3} mehr
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-purple-500/0 group-hover:from-teal-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projects Roadmap */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Future & Past
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Wo Quantiva Advisory als nächstes hinsteuert – und wie unsere KI-Expertise die Zukunft des SAP-Testing prägt.
            </p>
          </motion.div>

          {/* Technical Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Technical Roadmap</h3>
            <p className="text-gray-300 mb-12 max-w-3xl">
              Entdecken Sie kommende Features, Erweiterungen und Verbesserungen, die KI-fokussierte Innovation im SAP-Testing vorantreiben.
            </p>

            {/* QA.Orchestrator Project */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left: Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">QA.Orchestrator</h4>
                    <p className="text-gray-400">Agentisches Testsystem für SAP</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Ein agentisches Testsystem, das Anforderungen → Tests → Ausführung → Analyse durchgängig automatisiert – mit tiefem SAP-Prozessverständnis und Change-Impact-Intelligenz.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">Prozess-getriebene Orchestrierung</h5>
                      <p className="text-gray-400 text-sm">Domänenspezifisches Prozessmodell als Knowledge Graph</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">Change-Impact-AI für SAP</h5>
                      <p className="text-gray-400 text-sm">Transport- & Customizing-aware Risikoanalyse</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">Constraint-aware Testdatengenerierung</h5>
                      <p className="text-gray-400 text-sm">DDIC-Metadaten & Customizing-basierte Daten</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">Multi-Layer Assertions</h5>
                      <p className="text-gray-400 text-sm">UI + API + Belegfluss-Validierung</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                      <Brain className="w-8 h-8 text-blue-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">KI-Layer</h6>
                      <p className="text-gray-400 text-xs">LLM-Services, CV-Models, Graph-Reasoner</p>
                    </div>
                    <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                      <Database className="w-8 h-8 text-purple-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Knowledge Layer</h6>
                      <p className="text-gray-400 text-xs">Prozess-Graph + Metadaten</p>
                    </div>
                    <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                      <Cog className="w-8 h-8 text-green-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Execution Layer</h6>
                      <p className="text-gray-400 text-xs">Verteilte Runner, Test-Agents</p>
                    </div>
                    <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/30">
                      <Shield className="w-8 h-8 text-orange-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Governance</h6>
                      <p className="text-gray-400 text-xs">Audit, eSign, Traceability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Workflow className="w-8 h-8 text-blue-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Prozess-Mining & Scenario Discovery</h5>
                <p className="text-gray-400 text-sm">SAP-spezifische Extraktion aus OData/CDS-Calls und Logs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Code className="w-8 h-8 text-purple-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Transport-Diff Reasoning</h5>
                <p className="text-gray-400 text-sm">LLM + statische Analyse für Customizing/ABAP-Änderungen</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Database className="w-8 h-8 text-green-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Constraint-aware Data Synthesizer</h5>
                <p className="text-gray-400 text-sm">DDIC/Customizing-basierte gültige Datenkombinationen</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Layers className="w-8 h-8 text-orange-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Multi-Layer Oracle Builder</h5>
                <p className="text-gray-400 text-sm">UI-Ergebnis → Backend-Belegfluss → Tabellenfelder</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Brain className="w-8 h-8 text-red-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Agentisches Self-Healing</h5>
                <p className="text-gray-400 text-sm">Vision-Modelle für SAP GUI + Fiori Navigation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Target className="w-8 h-8 text-cyan-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Defekt-Triage mit SAP-Kontext</h5>
                <p className="text-gray-400 text-sm">Root-Cause via Korrelation + SAP-Hinweis-Kontext</p>
              </motion.div>
            </div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-slate-900/50 rounded-xl p-8 border border-slate-700"
            >
              <h4 className="text-xl font-bold text-white mb-6">Vergleich mit bestehenden Tools</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left text-white py-3">Kriterium</th>
                      <th className="text-center text-green-400 py-3">QA.Orchestrator</th>
                      <th className="text-center text-gray-400 py-3">Tosca</th>
                      <th className="text-center text-gray-400 py-3">Worksoft</th>
                      <th className="text-center text-gray-400 py-3">UFT One</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3">Prozess-Knowledge-Graph</td>
                      <td className="text-center text-green-400">✅ zentral</td>
                      <td className="text-center text-gray-500">➖ teilw.</td>
                      <td className="text-center text-gray-500">➖ prozessgetrieben</td>
                      <td className="text-center text-gray-500">➖ skript-/objektgetrieben</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3">SAP Transport-Impact-AI</td>
                      <td className="text-center text-green-400">✅ Deep</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3">Constraint-aware Data Synthese</td>
                      <td className="text-center text-green-400">✅ DDIC-basiert</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3">Multi-Layer Assertions</td>
                      <td className="text-center text-green-400">✅ standard</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                    </tr>
                    <tr>
                      <td className="py-3">Agentisches Self-Healing</td>
                      <td className="text-center text-green-400">✅ hybrid</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>

          {/* PromptSAP Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left: Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-emerald-500/20 rounded-xl p-4 border border-emerald-500/30">
                      <Brain className="w-8 h-8 text-emerald-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Prompt-to-Change</h6>
                      <p className="text-gray-400 text-xs">KI-Agent übersetzt Prompts in SAP-Änderungen</p>
                    </div>
                    <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                      <Target className="w-8 h-8 text-blue-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Impact-Graph-Analyse</h6>
                      <p className="text-gray-400 text-xs">Automatische Abhängigkeitsanalyse</p>
                    </div>
                    <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                      <Code className="w-8 h-8 text-purple-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Autonome Testgenerierung</h6>
                      <p className="text-gray-400 text-xs">Unit-, API- und E2E-Tests</p>
                    </div>
                    <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/30">
                      <Shield className="w-8 h-8 text-orange-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Transport-Simulation</h6>
                      <p className="text-gray-400 text-xs">Dry-Run mit Validierung</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">PromptSAP</h4>
                    <p className="text-gray-400">Prompt-gesteuerter KI-Agent für SAP</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Ein KI-Agent, der durch Prompts direkt Customizing oder ABAP-/UI5-Entwicklung durchführt, automatisch Impact-Analysen erstellt und Tests generiert – bevor Änderungen ins Produktivsystem gelangen.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">Prompt-to-Change-Mechanismus</h5>
                      <p className="text-gray-400 text-sm">KI übersetzt Prompts in Customizing oder Entwicklungsänderungen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">Impact-Graph-Analyse</h5>
                      <p className="text-gray-400 text-sm">Automatische Ermittlung aller abhängigen Objekte und Risiken</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">Autonome Testgenerierung</h5>
                      <p className="text-gray-400 text-sm">Agent erzeugt Testskripte, Testdaten und führt sie aus</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">Transport-Simulation</h5>
                      <p className="text-gray-400 text-sm">Dry-Run in Testumgebung mit vollständiger Validierung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Brain className="w-8 h-8 text-emerald-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Prompt-to-Change-Engine</h5>
                <p className="text-gray-400 text-sm">Natürliche Sprache zu SAP-Customizing/Entwicklung</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Target className="w-8 h-8 text-blue-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Impact-Graph-Analyse</h5>
                <p className="text-gray-400 text-sm">Statische Code-Checks, Abhängigkeitsgraphen, Transportkonflikte</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Code className="w-8 h-8 text-purple-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Autonome Testgenerierung</h5>
                <p className="text-gray-400 text-sm">ABAP-Unit-Tests, API-Tests, End-to-End-Szenarien</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Shield className="w-8 h-8 text-orange-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Transport-Simulation</h5>
                <p className="text-gray-400 text-sm">Dry-Run mit Validierung vor Produktiv-Transport</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Layers className="w-8 h-8 text-cyan-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Audit-Report</h5>
                <p className="text-gray-400 text-sm">Vollständige Nachvollziehbarkeit aller Schritte</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Workflow className="w-8 h-8 text-red-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">gCTS/CTS+ Integration</h5>
                <p className="text-gray-400 text-sm">Nahtlose Integration in SAP Transport-Management</p>
              </motion.div>
            </div>

            {/* Example Use Case */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-slate-900/50 rounded-xl p-8 border border-slate-700"
            >
              <h4 className="text-xl font-bold text-white mb-6">Beispiel-Use-Case</h4>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-600">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Prompt:</h5>
                    <p className="text-gray-300 italic mb-4">
                      &ldquo;Füge eine Packvorschriften-Prüfung im Wareneingang hinzu.&rdquo;
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Agent erstellt Customizing-Tabelle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">BAdI-Implementierung wird generiert</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Tests werden automatisch erstellt</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Impact-Analyse zeigt unberührte Prozesse</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Transport-Dry-Run erfolgreich → Go</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-xl p-6 border border-emerald-500/30">
                <Zap className="w-8 h-8 text-emerald-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Zeitersparnis</h5>
                <p className="text-gray-400 text-sm">Automatisierung von manuellen Prozessen reduziert Entwicklungszeit um bis zu 70%</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                <Shield className="w-8 h-8 text-blue-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Höhere Sicherheit</h5>
                <p className="text-gray-400 text-sm">Dry-Run-Validierung verhindert Produktiv-Ausfälle</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-orange-600/20 rounded-xl p-6 border border-purple-500/30">
                <Target className="w-8 h-8 text-purple-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Standardisierte Qualität</h5>
                <p className="text-gray-400 text-sm">Konsistente Change-Qualität durch KI-gesteuerte Prozesse</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RecruAI Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left: Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">RecruAI</h4>
                    <p className="text-gray-400">KI-gesteuertes End-to-End Recruiting</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Eine revolutionäre Plattform, die den europäischen Recruiting-Markt durch KI-gesteuertes End-to-End-System transformiert. Statt klassischer Interviews setzen wir auf bezahlte Probephasen mit integrierter Onboarding-/Offboarding-Lösung.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">Dual-Modell: Contracting + Permanent</h5>
                      <p className="text-gray-400 text-sm">IT-, KI- und Engineering-Talente für beide Anstellungsformen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">&ldquo;No Interview&rdquo; → 5-Tage-Probephase</h5>
                      <p className="text-gray-400 text-sm">Reale Leistungsbewertung im Kundenumfeld</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">KI-Jobportal mit Chatbot</h5>
                      <p className="text-gray-400 text-sm">Stellen in Minuten über KI-Chatbot erstellen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">Integrierte Onboarding-Lösung</h5>
                      <p className="text-gray-400 text-sm">Automatisierung von HR-Admin-Prozessen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                      <Users className="w-8 h-8 text-purple-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">KI-Recruiting</h6>
                      <p className="text-gray-400 text-xs">End-to-End Talent-Matching</p>
                    </div>
                    <div className="bg-pink-500/20 rounded-xl p-4 border border-pink-500/30">
                      <Target className="w-8 h-8 text-pink-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Probephase</h6>
                      <p className="text-gray-400 text-xs">5-Tage Trial im Kundenumfeld</p>
                    </div>
                    <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                      <Brain className="w-8 h-8 text-blue-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">KI-Chatbot</h6>
                      <p className="text-gray-400 text-xs">Job-Erstellung in Minuten</p>
                    </div>
                    <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                      <Workflow className="w-8 h-8 text-green-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Onboarding</h6>
                      <p className="text-gray-400 text-xs">Automatisierte HR-Prozesse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Users className="w-8 h-8 text-purple-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Dual-Modell-Plattform</h5>
                <p className="text-gray-400 text-sm">Contracting und Permanent Placement in einer Lösung</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Target className="w-8 h-8 text-pink-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Bezahlte Probephase</h5>
                <p className="text-gray-400 text-sm">5-Tage Trial statt klassischer Interviews</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Brain className="w-8 h-8 text-blue-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">KI-Jobportal</h5>
                <p className="text-gray-400 text-sm">Chatbot erstellt Stellen in Minuten</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Workflow className="w-8 h-8 text-green-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Onboarding-Automation</h5>
                <p className="text-gray-400 text-sm">Integrierte HR-Prozess-Automatisierung</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Layers className="w-8 h-8 text-orange-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Smart Templates</h5>
                <p className="text-gray-400 text-sm">Intelligente Job- und Projektvorlagen</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Shield className="w-8 h-8 text-cyan-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Anonymes Posting</h5>
                <p className="text-gray-400 text-sm">Datenschutz-konforme Stellenausschreibungen</p>
              </motion.div>
            </div>

            {/* Market Opportunity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-slate-900/50 rounded-xl p-8 border border-slate-700 mb-12"
            >
              <h4 className="text-xl font-bold text-white mb-6">Marktchance & Vision</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-white font-semibold mb-4">Marktpotenzial</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                      <span className="text-gray-300">Marktvolumen: &gt;40 Mrd. EUR in Europa</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                      <span className="text-gray-300">3 Mio. EUR Seed-Kapital gesichert</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                      <span className="text-gray-300">Ziel: Führender Anbieter in 5 Jahren</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-4">Zielgruppe</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="text-gray-300">IT-, KI- und Engineering-Talente</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                      <span className="text-gray-300">Unternehmen aller Größen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                      <span className="text-gray-300">Recruitment-as-a-Service Segment</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* For Companies */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
                <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  Für Unternehmen
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Besetzung in Tagen, nicht Monaten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Höhere Qualität durch reale Leistungsbewertung</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Kostentransparenz über Abo-/Flatfee-Modell</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Automatisierung von HR-Admin</span>
                  </div>
                </div>
              </div>

              {/* For Talents */}
              <div className="bg-gradient-to-br from-pink-600/20 to-blue-600/20 rounded-xl p-6 border border-pink-500/30">
                <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-pink-400" />
                  Für Talente
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Fairer Zugang durch objektive Trial-Evaluierung</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Kontinuierliche CV-Optimierung durch KI</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Community & Weiterbildungsmöglichkeiten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Bezahlte Probephasen statt unbezahlte Interviews</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
              <h4 className="text-2xl font-bold text-white mb-4">Nächste Schritte</h4>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Wenn Sie interessiert sind, skizzieren wir gerne eine konkrete Modul-Roadmap (MVP → v1.0 in 3 Releases) und die Schnittstellenliste für Ihr SAP-Umfeld.
              </p>
              <Link
                href="/de#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Projekt anfragen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Lassen Sie uns gemeinsam Ihre Success Story schreiben
          </h2>
          <p className="text-teal-100 mb-8 text-lg">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
          <Link
            href="/de#contact"
            className="inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
}

