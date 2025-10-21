'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Settings, 
  Video, 
  FileText, 
  BarChart3, 
  Zap,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface MCPTool {
  name: string;
  description: string;
  inputSchema: any;
}

interface MCPResponse {
  content: Array<{
    type: string;
    text: string;
  }>;
  isError?: boolean;
}

export default function MCPDashboard() {
  const [tools, setTools] = useState<MCPTool[]>([]);
  const [selectedTool, setSelectedTool] = useState<string>('');
  const [toolInputs, setToolInputs] = useState<Record<string, any>>({});
  const [response, setResponse] = useState<MCPResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  // Available MCP tools
  const availableTools: MCPTool[] = [
    {
      name: 'get_content',
      description: 'Get content from Quantiva Advisory website',
      inputSchema: {
        type: 'object',
        properties: {
          section: {
            type: 'string',
            enum: ['hero', 'services', 'about', 'contact', 'navigation', 'footer']
          },
          language: {
            type: 'string',
            enum: ['de', 'en'],
            default: 'de'
          }
        },
        required: ['section']
      }
    },
    {
      name: 'update_content',
      description: 'Update content in Quantiva Advisory website',
      inputSchema: {
        type: 'object',
        properties: {
          section: {
            type: 'string',
            enum: ['hero', 'services', 'about', 'contact', 'navigation', 'footer']
          },
          language: {
            type: 'string',
            enum: ['de', 'en'],
            default: 'de'
          },
          data: {
            type: 'object'
          }
        },
        required: ['section', 'data']
      }
    },
    {
      name: 'generate_video',
      description: 'Generate AI video for website content',
      inputSchema: {
        type: 'object',
        properties: {
          prompt: {
            type: 'string'
          },
          duration: {
            type: 'number',
            minimum: 1,
            maximum: 10,
            default: 8
          },
          quality: {
            type: 'string',
            enum: ['480p', '720p', '1080p'],
            default: '720p'
          },
          folder: {
            type: 'string',
            default: 'generated-videos'
          },
          title: {
            type: 'string'
          }
        },
        required: ['prompt']
      }
    },
    {
      name: 'get_videos',
      description: 'Get list of generated videos',
      inputSchema: {
        type: 'object',
        properties: {
          folder: {
            type: 'string',
            default: 'all'
          },
          limit: {
            type: 'number',
            default: 10
          }
        }
      }
    },
    {
      name: 'analyze_website_performance',
      description: 'Analyze website performance and suggest improvements',
      inputSchema: {
        type: 'object',
        properties: {
          page: {
            type: 'string',
            default: 'home'
          }
        }
      }
    }
  ];

  useEffect(() => {
    setTools(availableTools);
    setIsConnected(true);
  }, []);

  const executeTool = async () => {
    if (!selectedTool) return;

    setIsLoading(true);
    setResponse(null);

    try {
      const tool = tools.find(t => t.name === selectedTool);
      if (!tool) throw new Error('Tool not found');

      const inputs = toolInputs[selectedTool] || {};
      
      // Simulate MCP call - in real implementation, this would connect to MCP server
      const mockResponse = await simulateMCPCall(selectedTool, inputs);
      
      setResponse(mockResponse);
    } catch (error: any) {
      setResponse({
        content: [{ type: 'text', text: `Error: ${error.message}` }],
        isError: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  const simulateMCPCall = async (toolName: string, inputs: any): Promise<MCPResponse> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    switch (toolName) {
      case 'get_content':
        return {
          content: [{
            type: 'text',
            text: `Content for ${inputs.section} (${inputs.language || 'de'}):\n\n` +
                  `Title: ${inputs.section.charAt(0).toUpperCase() + inputs.section.slice(1)}\n` +
                  `Description: This is the ${inputs.section} section content.\n` +
                  `Language: ${inputs.language || 'de'}\n\n` +
                  `Content retrieved successfully!`
          }]
        };

      case 'update_content':
        return {
          content: [{
            type: 'text',
            text: `Successfully updated ${inputs.section} content for ${inputs.language || 'de'}!\n\n` +
                  `New data: ${JSON.stringify(inputs.data, null, 2)}`
          }]
        };

      case 'generate_video':
        return {
          content: [{
            type: 'text',
            text: `Video generated successfully!\n\n` +
                  `Prompt: ${inputs.prompt}\n` +
                  `Duration: ${inputs.duration || 8}s\n` +
                  `Quality: ${inputs.quality || '720p'}\n` +
                  `Folder: ${inputs.folder || 'generated-videos'}\n\n` +
                  `Cloudinary URL: https://res.cloudinary.com/dbrisux8i/video/upload/v1234567890/${inputs.folder || 'generated-videos'}/video-${Date.now()}.mp4`
          }]
        };

      case 'get_videos':
        return {
          content: [{
            type: 'text',
            text: `Found videos in ${inputs.folder || 'all'} folders:\n\n` +
                  `• Hero Background Video (10s, 1080p)\n` +
                  `• SAP Service Video (8s, 720p)\n` +
                  `• Cloud Service Video (8s, 720p)\n` +
                  `• AI Service Video (8s, 720p)\n\n` +
                  `Total: 4 videos found`
          }]
        };

      case 'analyze_website_performance':
        return {
          content: [{
            type: 'text',
            text: `Performance Analysis for ${inputs.page || 'home'}:\n\n` +
                  `Load Time: 2.3s\n` +
                  `Performance Score: 85/100\n` +
                  `Accessibility Score: 92/100\n` +
                  `SEO Score: 88/100\n` +
                  `Best Practices Score: 90/100\n\n` +
                  `Suggestions:\n` +
                  `• Optimize images with WebP format\n` +
                  `• Implement lazy loading for videos\n` +
                  `• Add more descriptive alt texts\n` +
                  `• Consider implementing service worker for caching`
          }]
        };

      default:
        throw new Error(`Unknown tool: ${toolName}`);
    }
  };

  const renderToolInputs = (tool: MCPTool) => {
    const inputs = toolInputs[tool.name] || {};
    
    return (
      <div className="space-y-4">
        {Object.entries(tool.inputSchema.properties).map(([key, prop]: [string, any]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
              {tool.inputSchema.required?.includes(key) && <span className="text-red-500 ml-1">*</span>}
            </label>
            
            {prop.enum ? (
              <select
                value={inputs[key] || prop.default || ''}
                onChange={(e) => setToolInputs(prev => ({
                  ...prev,
                  [tool.name]: {
                    ...prev[tool.name],
                    [key]: e.target.value
                  }
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select {key}</option>
                {prop.enum.map((option: string) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : prop.type === 'number' ? (
              <input
                type="number"
                value={inputs[key] || prop.default || ''}
                onChange={(e) => setToolInputs(prev => ({
                  ...prev,
                  [tool.name]: {
                    ...prev[tool.name],
                    [key]: Number(e.target.value)
                  }
                }))}
                min={prop.minimum}
                max={prop.maximum}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ) : prop.type === 'object' ? (
              <textarea
                value={inputs[key] ? JSON.stringify(inputs[key], null, 2) : ''}
                onChange={(e) => {
                  try {
                    const parsed = JSON.parse(e.target.value);
                    setToolInputs(prev => ({
                      ...prev,
                      [tool.name]: {
                        ...prev[tool.name],
                        [key]: parsed
                      }
                    }));
                  } catch (err) {
                    // Invalid JSON, keep as string for now
                  }
                }}
                placeholder="Enter JSON object"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
              />
            ) : (
              <input
                type="text"
                value={inputs[key] || prop.default || ''}
                onChange={(e) => setToolInputs(prev => ({
                  ...prev,
                  [tool.name]: {
                    ...prev[tool.name],
                    [key]: e.target.value
                  }
                }))}
                placeholder={`Enter ${key}`}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">MCP Dashboard</h1>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              isConnected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {isConnected ? 'Connected' : 'Disconnected'}
            </div>
          </div>
          <p className="text-gray-600">
            Model Context Protocol Integration für Quantiva Advisory Website
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tools Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                Available Tools
              </h2>
              
              <div className="space-y-3">
                {tools.map((tool) => (
                  <motion.button
                    key={tool.name}
                    onClick={() => setSelectedTool(tool.name)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedTool === tool.name
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-medium text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-gray-600">{tool.description}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Tool Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-600" />
                Tool Interface
              </h2>

              {selectedTool ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      {selectedTool.charAt(0).toUpperCase() + selectedTool.slice(1)}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {tools.find(t => t.name === selectedTool)?.description}
                    </p>
                  </div>

                  {renderToolInputs(tools.find(t => t.name === selectedTool)!)}

                  <motion.button
                    onClick={executeTool}
                    disabled={isLoading}
                    className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Executing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Execute Tool
                      </>
                    )}
                  </motion.button>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Settings className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p>Select a tool to get started</p>
                </div>
              )}
            </div>

            {/* Response Panel */}
            {response && (
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  {response.isError ? (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                  <h3 className="text-lg font-semibold">
                    {response.isError ? 'Error Response' : 'Tool Response'}
                  </h3>
                </div>

                <div className={`p-4 rounded-lg ${
                  response.isError ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'
                }`}>
                  <pre className="text-sm whitespace-pre-wrap text-gray-800">
                    {response.content.map((content, index) => content.text).join('\n')}
                  </pre>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Video className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Video Generation</h3>
            <p className="text-sm text-gray-600 mb-4">
              Generate AI videos for your website content using Sora
            </p>
            <button 
              onClick={() => setSelectedTool('generate_video')}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Generate Video →
            </button>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FileText className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Content Management</h3>
            <p className="text-sm text-gray-600 mb-4">
              Update and manage website content dynamically
            </p>
            <button 
              onClick={() => setSelectedTool('get_content')}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Manage Content →
            </button>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <BarChart3 className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Performance Analysis</h3>
            <p className="text-sm text-gray-600 mb-4">
              Analyze website performance and get improvement suggestions
            </p>
            <button 
              onClick={() => setSelectedTool('analyze_website_performance')}
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              Analyze Performance →
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
