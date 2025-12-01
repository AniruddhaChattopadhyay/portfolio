'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { Badge } from './Badge';
import { Trophy, ExternalLink, ArrowRight, Image as ImageIcon } from 'lucide-react';

interface AwardCardProps {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: string;
  link?: string;
  hasDetailPage?: boolean;
  hasImages?: boolean;
  index: number;
}

export function AwardCard({
  id,
  title,
  organization,
  date,
  description,
  category,
  link,
  hasDetailPage,
  hasImages,
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

  const cardContent = (
    <Card hover className={hasDetailPage ? 'cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1' : ''}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">{title}</CardTitle>
            <p className="text-gray-600 text-sm mb-2">{organization}</p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={getCategoryColor(category) as 'success' | 'primary' | 'secondary' | 'default'}>
                {category}
              </Badge>
              <Badge variant="default">{date}</Badge>
              {hasImages && (
                <Badge variant="warning" className="flex items-center gap-1">
                  <ImageIcon size={12} />
                  Photos
                </Badge>
              )}
            </div>
          </div>
          <Trophy className="text-yellow-500 flex-shrink-0" size={24} />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 leading-relaxed mb-3">{description}</p>
        <div className="flex items-center gap-4">
          {hasDetailPage && (
            <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700">
              Read full story
              <ArrowRight size={14} className="ml-1" />
            </span>
          )}
          {link && !hasDetailPage && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} className="mr-1" />
              Learn more
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      {hasDetailPage ? (
        <Link href={`/achievements/${id}`} className="block">
          {cardContent}
        </Link>
      ) : (
        <div>{cardContent}</div>
      )}
    </motion.div>
  );
}

