'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { useNavigationContent } from '../lib/contexts/ContentContext';

interface ServiceNavigationProps {
  lang: 'de' | 'en';
  serviceTitle: string;
  serviceId: string;
}

export default function ServiceNavigation({ lang, serviceTitle, serviceId }: ServiceNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const nav = useNavigationContent(lang);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const switchLang = () => {
    const currentPath = pathname;
    const newLang = lang === 'de' ? 'en' : 'de';
    
    // Replace language prefix in path
    const pathSegments = currentPath.split('/');
    if (pathSegments[1] === lang) {
      pathSegments[1] = newLang;
    } else {
      pathSegments.splice(1, 0, newLang);
    }
    
    const newPath = pathSegments.join('/');
    window.location.href = newPath;
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
          {/* Quantiva Logo with integrated design */}
          <div className="relative flex-shrink-0">
            {/* Background circle with gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 via-teal-400/30 to-purple-500/20 blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-teal-500/30 p-1.5 shadow-lg shadow-teal-500/20 group-hover:border-teal-400/50 group-hover:shadow-teal-500/40 transition-all duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-teal-500/10 to-purple-500/10">
                <Image
                  src="https://res.cloudinary.com/dbrisux8i/image/upload/v1762724233/ymeuakhh7p7cadpspgrw.jpg"
                  alt="Quantiva Advisory Logo"
                  fill
                  className="object-cover rounded-full"
                  priority
                  sizes="40px"
                />
              </div>
            </div>
          </div>
          
          {/* Company Name */}
          <div className="text-xl font-bold tracking-tight">
            Quantiva <span className="text-teal-400">Advisory</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {/* Back to Home */}
          <Link
            href={`/${lang}`}
            className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-white/10 transition text-sm text-gray-300"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'de' ? 'Zurück' : 'Back'}
          </Link>

          {/* Navigation Items */}
          {nav.items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`px-4 py-2 rounded-md hover:bg-white/10 transition text-sm ${
                pathname === item.href ? 'text-teal-400 font-medium' : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Language Switch */}
          <button
            onClick={switchLang}
            className="ml-2 rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
          
          {/* Contact Button */}
          <Link
            href={`/${lang}#contact`}
            className="ml-3 rounded-xl bg-teal-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-600 transition-colors"
          >
            {lang === 'de' ? 'Kontakt' : 'Contact'}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {/* Back to Home */}
            <Link
              href={`/${lang}`}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition text-sm text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <ArrowLeft className="w-4 h-4" />
              {lang === 'de' ? 'Zurück zur Hauptseite' : 'Back to Home'}
            </Link>

            {/* Navigation Items */}
            {nav.items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`block px-3 py-2 rounded-md hover:bg-white/10 transition text-sm ${
                  pathname === item.href ? 'text-teal-400 font-medium' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switch */}
            <button
              onClick={() => {
                switchLang();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-white/10 transition text-sm text-white"
            >
              {lang === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'}
            </button>

            {/* Contact Button */}
            <Link
              href={`/${lang}#contact`}
              className="block w-full text-center rounded-xl bg-teal-500 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {lang === 'de' ? 'Kontakt' : 'Contact'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
