'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { Badge } from './Badge';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  featured?: boolean;
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
  index: number;
}

export function ProjectCard({
  id,
  title,
  description,
  technologies,
  category,
  featured,
  links,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card hover className="h-full flex flex-col">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <CardTitle className="text-xl flex-1">{title}</CardTitle>
            {featured && (
              <Badge variant="warning" className="ml-2">
                Featured
              </Badge>
            )}
          </div>
          <Badge variant="primary" className="w-fit">
            {category}
          </Badge>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-gray-700 mb-4 flex-1">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {technologies.length > 4 && (
              <Badge variant="default" className="text-xs">
                +{technologies.length - 4} more
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <Link
              href={`/projects/${id}`}
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
            >
              View Details <ArrowRight className="ml-1" size={16} />
            </Link>
            <div className="flex items-center space-x-3">
              {links?.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-navy-900 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={18} />
                </a>
              )}
              {(links?.demo || links?.website) && (
                <a
                  href={links.demo || links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-navy-900 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

