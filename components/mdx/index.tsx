// MDX Components Export
export { Callout } from './Callout';
export { CodeBlock, InlineCode } from './CodeBlock';
export { MermaidDiagram, MermaidPre } from './MermaidDiagram';
export { BlogImage } from './BlogImage';
export { TableOfContents, TOC } from './TableOfContents';

import React from 'react';
import { Callout } from './Callout';
import { CodeBlock, InlineCode } from './CodeBlock';
import { MermaidDiagram } from './MermaidDiagram';
import { BlogImage } from './BlogImage';
import { TOC } from './TableOfContents';

// Helper to extract text from children
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

// Type for code element props
interface CodeElementProps {
  className?: string;
  children?: React.ReactNode;
}

// MDX Components mapping for use with MDXRemote
export const mdxComponents = {
  // Custom components available in MDX
  Callout,
  Image: BlogImage,
  TOC,
  MermaidDiagram,

  // Override default HTML elements
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    // Check if this is a mermaid code block
    if (React.isValidElement(children)) {
      const childProps = children.props as CodeElementProps;
      const className = childProps.className || '';
      
      if (className.includes('language-mermaid')) {
        const code = extractTextFromChildren(childProps.children);
        return <MermaidDiagram chart={code.trim()} />;
      }

      // Regular code block with syntax highlighting
      return (
        <CodeBlock className={className} {...props}>
          {childProps.children}
        </CodeBlock>
      );
    }
    
    return <pre {...props}>{children}</pre>;
  },

  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    // Check if inline code (no className means inline)
    const isInline = !className;
    
    if (isInline) {
      return <InlineCode>{children}</InlineCode>;
    }
    
    // Block code is handled by pre
    return <code className={className} {...props}>{children}</code>;
  },

  // Enhanced heading with anchor links
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = extractTextFromChildren(children);
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return (
      <h2 id={id} className="group scroll-mt-20" {...props}>
        {children}
        <a
          href={`#${id}`}
          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-primary-500"
          aria-label={`Link to ${text}`}
        >
          #
        </a>
      </h2>
    );
  },

  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = extractTextFromChildren(children);
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return (
      <h3 id={id} className="group scroll-mt-20" {...props}>
        {children}
        <a
          href={`#${id}`}
          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-primary-500"
          aria-label={`Link to ${text}`}
        >
          #
        </a>
      </h3>
    );
  },

  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = extractTextFromChildren(children);
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return (
      <h4 id={id} className="group scroll-mt-20" {...props}>
        {children}
        <a
          href={`#${id}`}
          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-primary-500"
          aria-label={`Link to ${text}`}
        >
          #
        </a>
      </h4>
    );
  },

  // Enhanced blockquote
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-primary-500 bg-gray-50 pl-4 py-3 my-6 italic text-gray-700"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Enhanced table
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg" {...props}>
        {children}
      </table>
    </div>
  ),

  th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-900" {...props}>
      {children}
    </th>
  ),

  td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-sm text-gray-700 border-t border-gray-200" {...props}>
      {children}
    </td>
  ),

  // Enhanced links
  a: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http');
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="text-primary-600 hover:text-primary-700 underline underline-offset-2 decoration-primary-300 hover:decoration-primary-500 transition-colors"
        {...props}
      >
        {children}
        {isExternal && <span className="ml-1 text-xs">↗</span>}
      </a>
    );
  },

  // Enhanced list items
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside ml-6 my-4 space-y-2" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside ml-6 my-4 space-y-2" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="pl-2" {...props}>
      {children}
    </li>
  ),

  // Horizontal rule
  hr: () => (
    <hr className="my-8 border-t-2 border-gray-200" />
  ),
};

