'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './Badge';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  type?: string;
  description: string[];
  technologies?: string[];
  index: number;
}

export function TimelineItem({
  title,
  subtitle,
  period,
  location,
  type,
  description,
  technologies,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-200">
        {/* Timeline dot */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-md"></div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h3 className="text-2xl font-bold text-navy-900">{title}</h3>
              {type && (
                <Badge 
                  variant={
                    type === 'Full Time' ? 'success' : 
                    type === 'Internship' ? 'secondary' : 
                    type === 'Volunteer' ? 'primary' : 
                    type === 'Part Time' ? 'warning' : 
                    'default'
                  }
                  className="text-xs font-medium"
                >
                  {type}
                </Badge>
              )}
            </div>
            <p className="text-lg text-primary-600 font-medium">{subtitle}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600 font-medium">{period}</p>
            {location && <p className="text-gray-500 text-sm mt-1">{location}</p>}
          </div>
        </div>

        <ul className="space-y-3 mb-4">
          {description.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span className="text-gray-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

