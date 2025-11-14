'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { Badge } from './Badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: number;
  index: number;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  tags,
  readingTime,
  index,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${slug}`}>
        <Card hover className="h-full cursor-pointer">
          <CardHeader>
            <CardTitle className="text-xl mb-3 hover:text-primary-600 transition-colors">
              {title}
            </CardTitle>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
              <span className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {formatDate(date)}
              </span>
              <span className="flex items-center">
                <Clock size={14} className="mr-1" />
                {readingTime} min read
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>
            <div className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
              Read more <ArrowRight className="ml-1" size={16} />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

