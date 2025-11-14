import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section, SectionHeader } from '@/components/Section';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { ArrowLeft, Github, ExternalLink, Globe } from 'lucide-react';
import { featuredProjects } from '@/lib/data';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.id === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Aniruddha Chattopadhyay`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Back Button */}
      <Section className="bg-white py-8">
        <Link href="/projects">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2" size={16} />
            Back to Projects
          </Button>
        </Link>
      </Section>

      {/* Project Header */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Badge variant="primary" className="bg-primary-600 text-white">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="warning" className="ml-2">
                Featured
              </Badge>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {project.description}
          </p>
          
          {/* Links */}
          {project.links && (
            <div className="flex flex-wrap gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
                    <Github className="mr-2" size={16} />
                    View Code
                  </Button>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </Button>
                </a>
              )}
              {project.links.website && (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
                    <Globe className="mr-2" size={16} />
                    Visit Website
                  </Button>
                </a>
              )}
            </div>
          )}
        </div>
      </Section>

      {/* Project Details */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold font-serif text-navy-900 mb-6">
              About This Project
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold font-serif text-navy-900 mb-6">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-base py-2 px-4">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold font-serif text-navy-900 mb-4">
              Project Information
            </h3>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <dt className="text-sm font-medium text-gray-600 mb-1">Category</dt>
                <dd className="text-lg text-navy-900 capitalize">{project.category}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-600 mb-1">Year</dt>
                <dd className="text-lg text-navy-900">{project.date}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-navy-900 mb-4">
            Interested in Similar Projects?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Check out my other work or get in touch to discuss potential collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects">
              <Button variant="primary">View All Projects</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

