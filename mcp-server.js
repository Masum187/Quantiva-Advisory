#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

// Quantiva Advisory MCP Server
class QuantivaMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'quantiva-advisory-mcp',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.contentPath = join(process.cwd(), 'app/lib/data/content.json');
    this.setupHandlers();
  }

  setupHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'get_content',
            description: 'Get content from Quantiva Advisory website',
            inputSchema: {
              type: 'object',
              properties: {
                section: {
                  type: 'string',
                  description: 'Content section (hero, services, about, contact, etc.)',
                  enum: ['hero', 'services', 'about', 'contact', 'navigation', 'footer']
                },
                language: {
                  type: 'string',
                  description: 'Language (de, en)',
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
                  description: 'Content section to update',
                  enum: ['hero', 'services', 'about', 'contact', 'navigation', 'footer']
                },
                language: {
                  type: 'string',
                  description: 'Language (de, en)',
                  enum: ['de', 'en'],
                  default: 'de'
                },
                data: {
                  type: 'object',
                  description: 'New content data'
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
                  type: 'string',
                  description: 'Video generation prompt'
                },
                duration: {
                  type: 'number',
                  description: 'Video duration in seconds',
                  minimum: 1,
                  maximum: 10,
                  default: 8
                },
                quality: {
                  type: 'string',
                  description: 'Video quality',
                  enum: ['480p', '720p', '1080p'],
                  default: '720p'
                },
                folder: {
                  type: 'string',
                  description: 'Cloudinary folder for storage',
                  default: 'generated-videos'
                },
                title: {
                  type: 'string',
                  description: 'Video title'
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
                  description: 'Filter by folder',
                  default: 'all'
                },
                limit: {
                  type: 'number',
                  description: 'Maximum number of videos to return',
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
                  description: 'Page to analyze (home, services, about, etc.)',
                  default: 'home'
                }
              }
            }
          }
        ]
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'get_content':
            return await this.getContent(args.section, args.language || 'de');
          
          case 'update_content':
            return await this.updateContent(args.section, args.language || 'de', args.data);
          
          case 'generate_video':
            return await this.generateVideo(args);
          
          case 'get_videos':
            return await this.getVideos(args);
          
          case 'analyze_website_performance':
            return await this.analyzePerformance(args.page || 'home');
          
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`
            }
          ],
          isError: true
        };
      }
    });
  }

  async getContent(section, language) {
    if (!existsSync(this.contentPath)) {
      throw new Error('Content file not found');
    }

    const content = JSON.parse(readFileSync(this.contentPath, 'utf8'));
    const sectionContent = content[section]?.[language];

    if (!sectionContent) {
      throw new Error(`Section '${section}' not found for language '${language}'`);
    }

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(sectionContent, null, 2)
        }
      ]
    };
  }

  async updateContent(section, language, data) {
    if (!existsSync(this.contentPath)) {
      throw new Error('Content file not found');
    }

    const content = JSON.parse(readFileSync(this.contentPath, 'utf8'));
    
    if (!content[section]) {
      content[section] = {};
    }
    
    content[section][language] = data;
    
    writeFileSync(this.contentPath, JSON.stringify(content, null, 2));

    return {
      content: [
        {
          type: 'text',
          text: `Successfully updated ${section} content for ${language}`
        }
      ]
    };
  }

  async generateVideo(args) {
    const response = await fetch('http://localhost:3000/api/cms/video-generator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Video generation failed');
    }

    return {
      content: [
        {
          type: 'text',
          text: `Video generated successfully!\n\nCloudinary URL: ${data.cloudinary.url}\nDuration: ${data.cloudinary.duration}s\nSize: ${Math.round(data.cloudinary.size / 1024 / 1024)}MB\n\nPrompt: ${data.comet.prompt}`
        }
      ]
    };
  }

  async getVideos(args) {
    // In real implementation, this would query Cloudinary API
    const mockVideos = [
      {
        id: '1',
        title: 'Hero Background Video',
        url: 'https://res.cloudinary.com/dbrisux8i/video/upload/v1234567890/hero-videos/hero-background.mp4',
        duration: 10,
        quality: '1080p',
        folder: 'hero-videos',
        createdAt: '2024-01-15T10:30:00Z'
      },
      {
        id: '2',
        title: 'SAP Service Video',
        url: 'https://res.cloudinary.com/dbrisux8i/video/upload/v1234567891/service-videos/sap-service.mp4',
        duration: 8,
        quality: '720p',
        folder: 'service-videos',
        createdAt: '2024-01-15T11:15:00Z'
      }
    ];

    let filteredVideos = mockVideos;
    
    if (args.folder && args.folder !== 'all') {
      filteredVideos = mockVideos.filter(video => video.folder === args.folder);
    }

    if (args.limit) {
      filteredVideos = filteredVideos.slice(0, args.limit);
    }

    return {
      content: [
        {
          type: 'text',
          text: `Found ${filteredVideos.length} videos:\n\n${filteredVideos.map(video => 
            `• ${video.title}\n  URL: ${video.url}\n  Duration: ${video.duration}s\n  Quality: ${video.quality}\n  Folder: ${video.folder}\n`
          ).join('\n')}`
        }
      ]
    };
  }

  async analyzePerformance(page) {
    // Mock performance analysis
    const analysis = {
      page,
      metrics: {
        loadTime: '2.3s',
        performanceScore: 85,
        accessibilityScore: 92,
        seoScore: 88,
        bestPracticesScore: 90
      },
      suggestions: [
        'Optimize images with WebP format',
        'Implement lazy loading for videos',
        'Add more descriptive alt texts',
        'Consider implementing service worker for caching'
      ]
    };

    return {
      content: [
        {
          type: 'text',
          text: `Performance Analysis for ${page}:\n\n` +
                `Load Time: ${analysis.metrics.loadTime}\n` +
                `Performance Score: ${analysis.metrics.performanceScore}/100\n` +
                `Accessibility Score: ${analysis.metrics.accessibilityScore}/100\n` +
                `SEO Score: ${analysis.metrics.seoScore}/100\n` +
                `Best Practices Score: ${analysis.metrics.bestPracticesScore}/100\n\n` +
                `Suggestions:\n${analysis.suggestions.map(s => `• ${s}`).join('\n')}`
        }
      ]
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Quantiva Advisory MCP Server running on stdio');
  }
}

const server = new QuantivaMCPServer();
server.run().catch(console.error);