'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { Badge } from './Badge';
import { Trophy, ExternalLink } from 'lucide-react';

interface AwardCardProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  category: string;
  link?: string;
  index: number;
}

export function AwardCard({
  title,
  organization,
  date,
  description,
  category,
  link,
  index,
}: AwardCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'international':
        return 'success';
      case 'national':
        return 'primary';
      case 'academic':
        return 'secondary';
      default:
        return 'default';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Card hover>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{title}</CardTitle>
              <p className="text-gray-600 text-sm mb-2">{organization}</p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={getCategoryColor(category) as any}>
                  {category}
                </Badge>
                <Badge variant="default">{date}</Badge>
              </div>
            </div>
            <Trophy className="text-yellow-500 flex-shrink-0" size={24} />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-3">{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              <ExternalLink size={14} className="mr-1" />
              Learn more
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

