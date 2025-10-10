import React, { useState } from 'react';
import { Download, Upload, Eye, Globe, FileText, Users } from 'lucide-react';
import contentData from './data/content.json';
import teamData from './data/team.json';

type Language = 'de' | 'en';

export default function ContentAdmin() {
  const [activeTab, setActiveTab] = useState<'content' | 'team'>('content');
  const [activeLang, setActiveLang] = useState<Language>('de');
  const [activeSection, setActiveSection] = useState<keyof typeof contentData>('hero');
  const [content, setContent] = useState(contentData);
  const [team, setTeam] = useState(teamData);
  const [showPreview, setShowPreview] = useState(false);

  const handleSave = () => {
    // In production: Save to backend/API
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.json';
    a.click();
    URL.revokeObjectURL(url);
    alert('✅ Content gespeichert! (Download gestartet)');
  };

  const handleSaveTeam = () => {
    const blob = new Blob([JSON.stringify(team, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'team.json';
    a.click();
    URL.revokeObjectURL(url);
    alert('✅ Team-Daten gespeichert! (Download gestartet)');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        if (activeTab === 'content') {
          setContent(imported);
          alert('✅ Content importiert!');
        } else {
          setTeam(imported);
          alert('✅ Team-Daten importiert!');
        }
      } catch (error) {
        alert('❌ Fehler beim Import: ' + error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FileText className="w-8 h-8 text-teal-400" />
              <div>
                <h1 className="text-2xl font-bold">Content Management</h1>
                <p className="text-sm text-gray-400">Website-Inhalte verwalten</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
              >
                <Eye className="w-4 h-4" />
                {showPreview ? 'Code' : 'Preview'}
              </button>
              
              <label className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition cursor-pointer">
                <Upload className="w-4 h-4" />
                Import
                <input type="file" accept=".json" onChange={handleImport} className="hidden" />
              </label>
              
              <button
                onClick={activeTab === 'content' ? handleSave : handleSaveTeam}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 transition font-semibold"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3 space-y-4">
            {/* Tab Switcher */}
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Datentyp</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab('content')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'content' 
                      ? 'bg-teal-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Globe className="w-5 h-5" />
                  Website Content
                </button>
                <button
                  onClick={() => setActiveTab('team')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'team' 
                      ? 'bg-teal-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  Team Members
                </button>
              </div>
            </div>

            {activeTab === 'content' && (
              <>
                {/* Language Selector */}
                <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Sprache</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveLang('de')}
                      className={`flex-1 px-4 py-2 rounded-lg transition ${
                        activeLang === 'de' 
                          ? 'bg-teal-600 text-white' 
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      Deutsch
                    </button>
                    <button
                      onClick={() => setActiveLang('en')}
                      className={`flex-1 px-4 py-2 rounded-lg transition ${
                        activeLang === 'en' 
                          ? 'bg-teal-600 text-white' 
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      English
                    </button>
                  </div>
                </div>

                {/* Section Selector */}
                <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Sektion</h3>
                  <div className="space-y-1">
                    {Object.keys(content).map((section) => (
                      <button
                        key={section}
                        onClick={() => setActiveSection(section as keyof typeof contentData)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition capitalize ${
                          activeSection === section 
                            ? 'bg-teal-600/20 text-teal-400 border border-teal-500/30' 
                            : 'text-gray-300 hover:bg-gray-800'
                        }`}
                      >
                        {section}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Main Editor */}
          <div className="col-span-9">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              {activeTab === 'content' ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 capitalize">
                    {activeSection} <span className="text-gray-500">({activeLang})</span>
                  </h2>
                  
                  {showPreview ? (
                    <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                      <pre className="text-sm text-gray-300 overflow-auto">
                        {JSON.stringify(content[activeSection][activeLang], null, 2)}
                      </pre>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-gray-400 text-sm mb-4">
                        📝 Bearbeite die JSON-Struktur direkt im Code oder nutze ein externes Tool.
                        In einer Produktionsversion würde hier ein visueller Editor erscheinen.
                      </p>
                      
                      <textarea
                        value={JSON.stringify(content[activeSection][activeLang], null, 2)}
                        onChange={(e) => {
                          try {
                            const newValue = JSON.parse(e.target.value);
                            setContent({
                              ...content,
                              [activeSection]: {
                                ...content[activeSection],
                                [activeLang]: newValue
                              }
                            });
                          } catch (err) {
                            // Invalid JSON - ignore
                          }
                        }}
                        className="w-full h-96 bg-gray-950 border border-gray-700 rounded-lg p-4 font-mono text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  )}
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Team Members</h2>
                  
                  <div className="space-y-4">
                    {team.map((member, index) => (
                      <div key={member.id} className="bg-gray-950 p-6 rounded-lg border border-gray-700">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-xl">
                            {member.initials}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-teal-400">{member.roleDe}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <label className="text-gray-400">Email</label>
                            <p className="text-gray-300">{member.email}</p>
                          </div>
                          <div>
                            <label className="text-gray-400">LinkedIn</label>
                            <p className="text-gray-300 truncate">{member.linkedin}</p>
                          </div>
                          <div className="col-span-2">
                            <label className="text-gray-400">Expertise (DE)</label>
                            <p className="text-gray-300">{member.expertiseDe}</p>
                          </div>
                          <div className="col-span-2">
                            <label className="text-gray-400">Description (DE)</label>
                            <p className="text-gray-300">{member.descriptionDe}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <textarea
                      value={JSON.stringify(team, null, 2)}
                      onChange={(e) => {
                        try {
                          setTeam(JSON.parse(e.target.value));
                        } catch (err) {
                          // Invalid JSON - ignore
                        }
                      }}
                      className="w-full h-64 bg-gray-950 border border-gray-700 rounded-lg p-4 font-mono text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

