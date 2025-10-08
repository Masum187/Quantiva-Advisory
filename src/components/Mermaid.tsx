import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

// Initialize Mermaid with default settings
mermaid.initialize({ 
  startOnLoad: false, 
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'system-ui, -apple-system, sans-serif'
});

type MermaidProps = {
  /** Mermaid chart definition string */
  chart: string;
  /** Optional CSS class name */
  className?: string;
};

/**
 * Mermaid Component
 * 
 * Renders Mermaid diagrams client-side in React
 * 
 * @example
 * ```tsx
 * <Mermaid chart={`
 *   flowchart TD
 *     A[Start] --> B[End]
 * `} />
 * ```
 */
export default function Mermaid({ chart, className }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const render = async () => {
      try {
        // Generate unique ID for each diagram
        const id = `mermaid-${Math.random().toString(36).slice(2, 11)}`;
        
        // Render the diagram
        const { svg } = await mermaid.render(id, chart);
        
        // Insert SVG into DOM
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        
        // Show error in the component
        if (ref.current) {
          ref.current.innerHTML = `
            <div style="
              color: #ef4444; 
              background: #fee2e2; 
              padding: 1rem; 
              border-radius: 0.5rem;
              border: 1px solid #fecaca;
              font-family: monospace;
              font-size: 0.875rem;
              white-space: pre-wrap;
            ">
              <strong>Mermaid Rendering Error:</strong>\n${String(error)}
            </div>
          `;
        }
      }
    };
    
    render();
  }, [chart]);

  return <div ref={ref} className={className} />;
}
