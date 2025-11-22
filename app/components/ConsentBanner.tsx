"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ConsentType = "all" | "necessary" | null;

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Prüfe ob Consent bereits gegeben wurde
    const consent = localStorage.getItem("consent") as ConsentType;
    setOpen(!consent);
  }, []);

  const handleAccept = (type: "all" | "necessary") => {
    localStorage.setItem("consent", type);
    setOpen(false);
    // Dispatch event für AnalyticsGate
    window.dispatchEvent(new CustomEvent("consent-updated", { detail: { type } }));
  };

  if (!mounted || !open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-[9999] bg-gray-900 text-white shadow-2xl border-t border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Text */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">
                Cookie-Einstellungen
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Wir verwenden Cookies und ähnliche Technologien, um unsere Website zu analysieren, 
                zu verbessern und Ihnen personalisierte Inhalte anzuzeigen. Durch Klicken auf 
                "Alles akzeptieren" stimmen Sie der Verwendung aller Cookies zu. Sie können auch 
                nur notwendige Cookies akzeptieren oder weitere Informationen in unserer{" "}
                <a 
                  href="/de/datenschutz" 
                  className="text-teal-400 hover:text-teal-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datenschutzerklärung
                </a>{" "}
                einsehen.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => handleAccept("necessary")}
                className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
              >
                Nur notwendige
              </button>
              <button
                onClick={() => handleAccept("all")}
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Alles akzeptieren
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

