'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
  caption?: string;
}

export function MermaidDiagram({ chart, caption }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Only render on client to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const renderChart = async () => {
      try {
        // Dynamically import mermaid to avoid SSR issues
        const mermaid = (await import('mermaid')).default;
        
        // Initialize mermaid with a nice theme
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: {
            primaryColor: '#3b82f6',
            primaryTextColor: '#1e293b',
            primaryBorderColor: '#2563eb',
            lineColor: '#64748b',
            secondaryColor: '#f1f5f9',
            tertiaryColor: '#e2e8f0',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          },
          flowchart: {
            htmlLabels: true,
            curve: 'basis',
          },
          sequence: {
            diagramMarginX: 50,
            diagramMarginY: 10,
            actorMargin: 50,
            width: 150,
            height: 65,
            boxMargin: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35,
          },
        });

        // Generate unique ID for this diagram
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
        setError(null);
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError('Failed to render diagram');
      }
    };

    renderChart();
  }, [chart, isClient]);

  // Show loading placeholder during SSR and initial client render
  if (!isClient) {
    return (
      <figure className="my-8 not-prose">
        <div className="flex justify-center items-center p-6 bg-gray-50 rounded-lg border border-gray-200 min-h-[200px]">
          <div className="text-gray-400 text-sm">Loading diagram...</div>
        </div>
      </figure>
    );
  }

  if (error) {
    return (
      <div className="my-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
        <p className="font-medium">Diagram Error</p>
        <p className="text-sm mt-1">{error}</p>
        <pre className="mt-2 text-xs bg-red-100 p-2 rounded overflow-x-auto">
          {chart}
        </pre>
      </div>
    );
  }

  return (
    <figure className="my-8 not-prose">
      <div
        ref={containerRef}
        className="flex justify-center p-6 bg-white rounded-lg border border-gray-200 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-600 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Type for code element props
interface CodeElementProps {
  className?: string;
  children?: React.ReactNode;
}

// Pre component that detects mermaid code blocks
export function MermaidPre({ children }: { children: React.ReactNode }) {
  // Check if this is a mermaid code block
  if (React.isValidElement(children)) {
    const childProps = children.props as CodeElementProps;
    const className = childProps.className || '';
    if (className.includes('language-mermaid')) {
      const code = extractTextFromChildren(childProps.children);
      return <MermaidDiagram chart={code} />;
    }
  }
  
  return <pre>{children}</pre>;
}

function extractTextFromChildren(children: React.ReactNode): string {
  if (typeof children === 'string') {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join('');
  }
  if (React.isValidElement(children)) {
    const props = children.props as { children?: React.ReactNode };
    if (props.children) {
      return extractTextFromChildren(props.children);
    }
  }
  return '';
}

