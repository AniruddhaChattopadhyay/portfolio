'use client';

import React, { useState } from 'react';
import { Section, SectionHeader } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { featuredProjects } from '@/lib/data';
import { Badge } from '@/components/Badge';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'entrepreneurship', label: 'Entrepreneurship' },
  { id: 'ml-ai', label: 'ML & AI' },
  { id: 'research', label: 'Research' },
  { id: 'opensource', label: 'Open Source' },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Projects & Work
          </h1>
          <p className="text-xl text-gray-300">
            A showcase of my technical projects, entrepreneurial ventures, and research implementations
          </p>
        </div>
      </Section>

      {/* Filter Section */}
      <Section className="bg-gray-50 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all"
            >
              <Badge
                variant={activeCategory === category.id ? 'primary' : 'default'}
                className="text-base py-2 px-4 cursor-pointer hover:scale-105"
              >
                {category.label}
              </Badge>
            </button>
          ))}
        </div>
      </Section>

      {/* Projects Grid */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              category={project.category}
              featured={project.featured}
              links={project.links}
              index={index}
            />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </Section>
    </>
  );
}

