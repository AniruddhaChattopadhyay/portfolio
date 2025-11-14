'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { Badge } from './Badge';
import { FileText, ExternalLink, Code } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  month?: string;
  abstract?: string;
  links?: {
    paper?: string;
    arxiv?: string;
    code?: string;
  };
  award?: string;
  index: number;
}

export function PublicationCard({
  title,
  authors,
  venue,
  year,
  month,
  abstract,
  links,
  award,
  index,
}: PublicationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card hover>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{title}</CardTitle>
              <p className="text-gray-600 text-sm mb-2">
                {authors.join(', ')}
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="primary">
                  {venue}
                </Badge>
                <Badge variant="secondary">
                  {month ? `${month} ${year}` : year}
                </Badge>
                {award && (
                  <Badge variant="success">
                    {award}
                  </Badge>
                )}
              </div>
            </div>
            <FileText className="text-primary-600 flex-shrink-0" size={24} />
          </div>
        </CardHeader>
        <CardContent>
          {abstract && (
            <p className="text-gray-700 mb-4 leading-relaxed">
              {abstract}
            </p>
          )}
          {links && (
            <div className="flex flex-wrap gap-3">
              {links.paper && (
                <a
                  href={links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Paper
                </a>
              )}
              {links.arxiv && (
                <a
                  href={links.arxiv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  <ExternalLink size={16} className="mr-1" />
                  arXiv
                </a>
              )}
              {links.code && (
                <a
                  href={links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  <Code size={16} className="mr-1" />
                  Code
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

