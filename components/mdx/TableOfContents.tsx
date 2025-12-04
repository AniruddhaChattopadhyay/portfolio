'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { List } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Parse headings from content
    const headingRegex = /^(#{2,4})\s+(.+)$/gm;
    const matches: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      // Create slug from heading text
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      matches.push({ id, text, level });
    }

    setHeadings(matches);
  }, [content]);

  useEffect(() => {
    // Intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="toc bg-gray-50 rounded-lg p-5 my-8 not-prose">
      <div className="flex items-center gap-2 mb-4 text-gray-700 font-semibold">
        <List className="h-5 w-5" />
        <span>Table of Contents</span>
      </div>
      <ul className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <li
            key={id}
            style={{ paddingLeft: `${(level - 2) * 16}px` }}
          >
            <a
              href={`#${id}`}
              className={cn(
                "block text-sm py-1 border-l-2 pl-3 transition-colors hover:text-primary-600",
                activeId === id
                  ? "border-primary-500 text-primary-600 font-medium"
                  : "border-transparent text-gray-600 hover:border-gray-300"
              )}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setActiveId(id);
                }
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Inline TOC that can be placed anywhere in MDX
export function TOC() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);

  useEffect(() => {
    // Get headings from the DOM after render
    const elements = document.querySelectorAll('article h2, article h3, article h4');
    const items: TOCItem[] = [];

    elements.forEach((el) => {
      const level = parseInt(el.tagName[1]);
      const text = el.textContent || '';
      const id = el.id || text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      if (id) {
        items.push({ id, text, level });
      }
    });

    setHeadings(items);
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="toc bg-gray-50 rounded-lg p-5 my-8 not-prose">
      <div className="flex items-center gap-2 mb-4 text-gray-700 font-semibold">
        <List className="h-5 w-5" />
        <span>Table of Contents</span>
      </div>
      <ul className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <li
            key={id}
            style={{ paddingLeft: `${(level - 2) * 16}px` }}
          >
            <a
              href={`#${id}`}
              className="block text-sm py-1 border-l-2 pl-3 transition-colors hover:text-primary-600 border-transparent text-gray-600 hover:border-gray-300"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

