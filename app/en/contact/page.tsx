"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";

const navigationItems = [
  { id: 'home', label: 'Home', href: '/en' },
  { id: 'about', label: 'About', href: '/en/about' },
  { id: 'services', label: 'Services', href: '/en#services' },
  { id: 'cases', label: 'Projects', href: '/en/cases' },
  { id: 'team', label: 'Team', href: '/en/team' },
  { id: 'career', label: 'Career', href: '/en#career' },
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
          lang: "en",
          honeypot: "", // Honeypot field
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An error occurred");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "", company: "", phone: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation lang="en" items={navigationItems} />
      
      <main className="mx-auto max-w-4xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-gray-300 text-lg mb-12">
            Have questions or want to discuss a project? 
            We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <a 
                      href="mailto:info@quantivaadvisory.com" 
                      className="text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      info@quantivaadvisory.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Phone</p>
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
                <h3 className="text-xl font-semibold mb-3">Business Hours</h3>
                <p className="text-gray-300">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: Closed
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
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone (optional)
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
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white resize-none"
                  placeholder="Your message..."
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
                  {errorMessage || "An error occurred. Please try again."}
                </div>
              )}

              {status === "success" && (
                <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-200">
                  Thank you for your message! We will get back to you shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

