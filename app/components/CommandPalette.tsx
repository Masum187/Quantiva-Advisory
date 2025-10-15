'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Bot, Brain, Users, Home, User, Mail, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CommandItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  keywords: string[];
  category: string;
}

const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const commands: CommandItem[] = [
    {
      id: 'home',
      title: 'Startseite',
      description: 'Zurück zur Hauptseite',
      icon: <Home className="w-4 h-4" />,
      href: '/de',
      keywords: ['home', 'start', 'hauptseite'],
      category: 'Navigation'
    },
    {
      id: 'qa-orchestrator',
      title: 'QA.Orchestrator',
      description: 'Agentisches Testsystem für SAP',
      icon: <Bot className="w-4 h-4" />,
      href: '/de/cases#qa-orchestrator',
      keywords: ['qa', 'orchestrator', 'test', 'sap', 'agent'],
      category: 'Projekte'
    },
    {
      id: 'promptsap',
      title: 'PromptSAP',
      description: 'KI-Agent für SAP mit natürlicher Sprachverarbeitung',
      icon: <Brain className="w-4 h-4" />,
      href: '/de/cases#promptsap',
      keywords: ['prompt', 'sap', 'ki', 'agent', 'nlp'],
      category: 'Projekte'
    },
    {
      id: 'recruai',
      title: 'RecruAI',
      description: 'KI-gestütztes Recruiting-System',
      icon: <Users className="w-4 h-4" />,
      href: '/de/cases#recruai',
      keywords: ['recru', 'ai', 'recruiting', 'hr', 'personal'],
      category: 'Projekte'
    },
    {
      id: 'about',
      title: 'Über uns',
      description: 'Erfahren Sie mehr über Quantiva Advisory',
      icon: <User className="w-4 h-4" />,
      href: '/de/about',
      keywords: ['about', 'über', 'team', 'company'],
      category: 'Unternehmen'
    },
    {
      id: 'contact',
      title: 'Kontakt',
      description: 'Nehmen Sie Kontakt mit uns auf',
      icon: <Mail className="w-4 h-4" />,
      href: '/de#contact',
      keywords: ['contact', 'kontakt', 'email', 'mail'],
      category: 'Kontakt'
    }
  ];

  const filteredCommands = commands.filter(command =>
    command.title.toLowerCase().includes(query.toLowerCase()) ||
    command.description.toLowerCase().includes(query.toLowerCase()) ||
    command.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }

      // Escape
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setQuery('');
        setSelectedIndex(0);
      }

      if (!isOpen) return;

      // Arrow keys
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => prev === 0 ? filteredCommands.length - 1 : prev - 1);
      }

      // Enter
      if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
        e.preventDefault();
        const command = filteredCommands[selectedIndex];
        router.push(command.href);
        setIsOpen(false);
        setQuery('');
        setSelectedIndex(0);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, router]);

  const handleCommandSelect = (command: CommandItem) => {
    router.push(command.href);
    setIsOpen(false);
    setQuery('');
    setSelectedIndex(0);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Befehle durchsuchen..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-lg"
                  autoFocus
                />
                <kbd className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  <div className="p-2">
                    {filteredCommands.map((command, index) => (
                      <motion.div
                        key={command.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                          index === selectedIndex
                            ? 'bg-primary/10 border border-primary/20'
                            : 'hover:bg-muted/50'
                        }`}
                        onClick={() => handleCommandSelect(command)}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          {command.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground">{command.title}</div>
                          <div className="text-sm text-muted-foreground truncate">
                            {command.description}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {command.category}
                          </span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-muted-foreground">
                    <Search className="w-8 h-8 mx-auto mb-3 opacity-50" />
                    <p>Keine Ergebnisse gefunden</p>
                    <p className="text-sm">Versuchen Sie andere Suchbegriffe</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-4 border-t border-border bg-muted/20">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-muted rounded">↑</kbd>
                    <kbd className="px-1.5 py-0.5 bg-muted rounded">↓</kbd>
                    <span>Navigation</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-muted rounded">Enter</kbd>
                    <span>Auswählen</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-muted rounded">ESC</kbd>
                    <span>Schließen</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  ⌘K für Shortcut
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
