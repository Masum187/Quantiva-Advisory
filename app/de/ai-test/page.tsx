'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import { useLanguage } from '../../components/QuantivaWebsite';

export default function AITestPage() {
  const { lang, localePath } = useLanguage();
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/ai-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error('API request failed');
      }

      const reader = res.body?.getReader();
      if (reader) {
        const decoder = new TextDecoder();
        let result = '';

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            result += decoder.decode(value, { stream: true });
            setResponse(result);
          }
        } finally {
          reader.releaseLock();
        }
      }
    } catch (error) {
      setResponse('Error: ' + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  // Navigation items
  const navigationItems = [
    { id: 'home', label: 'Home', href: localePath('/') },
    { id: 'about', label: 'Über uns', href: localePath('/about') },
    { id: 'services', label: 'Services', href: localePath('/#services') },
    { id: 'cases', label: 'Projekte', href: localePath('/cases') },
    { id: 'team', label: 'Team', href: localePath('/team') },
    { id: 'career', label: 'Karriere', href: localePath('/career') },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation lang={lang} items={navigationItems} />
      
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI SDK <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Test</span>
          </h1>
          <p className="text-xl text-gray-300">
            Testen Sie das xAI Grok Modell
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-3">
                Prompt eingeben:
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Geben Sie hier Ihren Prompt ein..."
                className="w-full h-32 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-teal-500 to-purple-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-teal-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading ? 'Generiert...' : 'AI Response generieren'}
            </motion.button>
          </form>

          {response && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700"
            >
              <h3 className="text-white font-semibold mb-4">AI Response:</h3>
              <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {response}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
