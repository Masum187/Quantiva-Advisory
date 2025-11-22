"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import type { Metadata } from "next";

const navigationItems = [
  { id: 'home', label: 'Home', href: '/de' },
  { id: 'about', label: 'Über uns', href: '/de/about' },
  { id: 'services', label: 'Services', href: '/de#services' },
  { id: 'cases', label: 'Projekte', href: '/de/cases' },
  { id: 'team', label: 'Team', href: '/de/team' },
  { id: 'career', label: 'Karriere', href: '/de#career' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          lang: "de",
          honeypot: "", // Honeypot field
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ein Fehler ist aufgetreten");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "", company: "", phone: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Ein Fehler ist aufgetreten");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation lang="de" items={navigationItems} />
      
      <main className="mx-auto max-w-4xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-gray-300 text-lg mb-12">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? 
            Wir freuen uns auf Ihre Nachricht.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Kontaktinformationen</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="font-semibold text-white mb-1">E-Mail</p>
                    <a 
                      href="mailto:info@quantivaadvisory.com" 
                      className="text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      info@quantivaadvisory.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Telefon</p>
                    <a 
                      href="tel:+49123456789" 
                      className="text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      +49 (0) 123 456 789
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Geschäftszeiten</h3>
                <p className="text-gray-300">
                  Montag - Freitag: 9:00 - 18:00 Uhr<br />
                  Samstag - Sonntag: Geschlossen
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-Mail <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                  placeholder="ihre.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Unternehmen (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                  placeholder="Ihr Unternehmen"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefon (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                  placeholder="+49 (0) 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Nachricht <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white resize-none"
                  placeholder="Ihre Nachricht..."
                />
              </div>

              {/* Honeypot field (hidden) */}
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px" }}
                aria-hidden="true"
              />

              {status === "error" && (
                <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200">
                  {errorMessage || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."}
                </div>
              )}

              {status === "success" && (
                <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-200">
                  Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
              </button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

