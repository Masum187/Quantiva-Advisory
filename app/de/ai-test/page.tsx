'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import { useLanguage } from '../../components/QuantivaWebsite';
import { Brain, Send, Zap, Users, Bot } from 'lucide-react';

type Provider = {
  name: string;
  key: string;
  available: boolean;
  defaultModel: string;
  availableModels: string[];
  icon: React.ReactNode;
};

export default function AITestPage() {
  const { lang, localePath } = useLanguage();
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedProvider, setSelectedProvider] = useState('xai');
  const [selectedModel, setSelectedModel] = useState('');
  const [providers, setProviders] = useState<{ [key: string]: Provider }>({});

  // Load available providers on component mount
  useEffect(() => {
    const loadProviders = async () => {
      try {
        const res = await fetch('/api/ai-test');
        const data = await res.json();
        
        if (data.supportedProviders) {
          const providerMap: { [key: string]: Provider } = {
            xai: {
              name: 'xAI (Grok)',
              key: 'xai',
              available: data.supportedProviders.xai?.available || false,
              defaultModel: data.supportedProviders.xai?.defaultModel || 'grok-2-1212',
              availableModels: data.supportedProviders.xai?.availableModels || [],
              icon: <Zap className="w-5 h-5" />
            },
            openai: {
              name: 'OpenAI',
              key: 'openai',
              available: data.supportedProviders.openai?.available || false,
              defaultModel: data.supportedProviders.openai?.defaultModel || 'gpt-4o',
              availableModels: data.supportedProviders.openai?.availableModels || [],
              icon: <Brain className="w-5 h-5" />
            },
            claude: {
              name: 'Claude (Anthropic)',
              key: 'claude',
              available: data.supportedProviders.claude?.available || false,
              defaultModel: data.supportedProviders.claude?.defaultModel || 'claude-3-5-sonnet-20241022',
              availableModels: data.supportedProviders.claude?.availableModels || [],
              icon: <Bot className="w-5 h-5" />
            }
          };
          
          setProviders(providerMap);
          
          // Set default model for current provider
          const currentProvider = providerMap[selectedProvider];
          if (currentProvider && currentProvider.available) {
            setSelectedModel(currentProvider.defaultModel);
          }
        }
      } catch (error) {
        console.error('Failed to load providers:', error);
      }
    };

    loadProviders();
  }, [selectedProvider]);

  const handleProviderChange = (providerKey: string) => {
    setSelectedProvider(providerKey);
    setResponse('');
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse('');
    setError(null);

    try {
      const res = await fetch('/api/ai-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          prompt,
          provider: selectedProvider,
          model: selectedModel || providers[selectedProvider]?.defaultModel
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'API request failed');
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
      setError((error as Error).message);
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
            Testen Sie verschiedene AI-Modelle: xAI Grok, OpenAI GPT und Claude
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Provider Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {Object.values(providers).map((provider) => (
                <motion.button
                  key={provider.key}
                  type="button"
                  onClick={() => handleProviderChange(provider.key)}
                  disabled={!provider.available}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    selectedProvider === provider.key
                      ? 'border-teal-500 bg-teal-500/10'
                      : provider.available
                      ? 'border-gray-600 hover:border-gray-500'
                      : 'border-gray-700 bg-gray-800/50 opacity-50 cursor-not-allowed'
                  }`}
                  whileHover={provider.available ? { scale: 1.02 } : {}}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`${selectedProvider === provider.key ? 'text-teal-400' : 'text-gray-400'}`}>
                      {provider.icon}
                    </div>
                    <div className="text-left">
                      <div className={`font-medium ${selectedProvider === provider.key ? 'text-teal-400' : 'text-white'}`}>
                        {provider.name}
                      </div>
                      {!provider.available && (
                        <div className="text-xs text-gray-500">Nicht verfügbar</div>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Model Selection */}
            {providers[selectedProvider]?.availableModels.length > 1 && (
              <div>
                <label className="block text-white font-semibold mb-3">
                  Modell auswählen:
                </label>
                <select
                  value={selectedModel || providers[selectedProvider]?.defaultModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-teal-500"
                >
                  {providers[selectedProvider]?.availableModels.map((model) => (
                    <option key={model} value={model} className="bg-gray-800">
                      {model}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Prompt Input */}
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
              disabled={isLoading || !providers[selectedProvider]?.available}
              className="w-full bg-gradient-to-r from-teal-500 to-purple-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-teal-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              whileHover={{ scale: isLoading || !providers[selectedProvider]?.available ? 1 : 1.02 }}
              whileTap={{ scale: isLoading || !providers[selectedProvider]?.available ? 1 : 0.98 }}
            >
              {isLoading 
                ? `Generiert mit ${providers[selectedProvider]?.name}...` 
                : `AI Response generieren (${providers[selectedProvider]?.name})`
              }
            </motion.button>
          </form>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-red-900/20 border border-red-700 rounded-lg"
            >
              <h3 className="text-red-400 font-semibold mb-2">Fehler:</h3>
              <div className="text-red-300">
                {error}
              </div>
            </motion.div>
          )}

          {response && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">AI Response:</h3>
                <div className="text-sm text-gray-400">
                  {providers[selectedProvider]?.name} - {selectedModel || providers[selectedProvider]?.defaultModel}
                </div>
              </div>
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
