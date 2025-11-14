'use client';

import React from 'react';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/Section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Rocket, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { featuredProjects } from '@/lib/data';

const entrepreneurshipVentures = featuredProjects.filter(
  (p) => p.category === 'entrepreneurship'
);

const highlights = [
  {
    icon: Rocket,
    title: '3 Ventures Founded',
    description: 'Successfully launched and scaled multiple startups',
  },
  {
    icon: TrendingUp,
    title: '$750K ARR',
    description: 'Scaled Bookopedia to significant revenue',
  },
  {
    icon: Users,
    title: '1M+ Users',
    description: 'Care4U serves over 1 million elderly users',
  },
  {
    icon: Award,
    title: 'Government Acquisition',
    description: 'Care4U acquired by Govt. of West Bengal',
  },
];

export default function EntrepreneurshipPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Entrepreneurship Journey
          </h1>
          <p className="text-xl text-gray-300">
            Building innovative solutions and creating impact through technology ventures
          </p>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-primary-600" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Ventures Section */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="My Ventures"
          subtitle="Startups and businesses I've founded and scaled"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {entrepreneurshipVentures.map((venture, index) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl mb-3">{venture.title}</CardTitle>
                  <Badge variant="primary" className="w-fit mb-3">
                    {venture.date}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {venture.longDescription || venture.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {venture.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${venture.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1" size={16} />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Entrepreneurial Philosophy" />
          <div className="bg-gradient-to-br from-navy-50 to-primary-50 rounded-lg p-8 md:p-12">
            <blockquote className="text-xl text-gray-800 leading-relaxed mb-6">
              "I believe in building technology that solves real problems and creates 
              meaningful impact. Each venture I've started has been driven by a desire 
              to make people's lives better through innovative solutions."
            </blockquote>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                My entrepreneurial journey started during my undergraduate years at IIT Kharagpur, 
                where I identified opportunities to leverage technology for social good and business growth.
              </p>
              <p className="leading-relaxed">
                From building an AI healthcare solution that now serves over a million users, to creating 
                a marketplace that connected book lovers across India, each venture has taught me valuable 
                lessons about product development, user acquisition, and scaling operations.
              </p>
              <p className="leading-relaxed">
                Today, I continue to explore the intersection of AI and entrepreneurship, building tools 
                that push the boundaries of what's possible with modern technology.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-navy-900 text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in collaborating on an innovative project or discussing startup ideas?
          </p>
          <Link href="/contact">
            <Button size="lg" variant="primary" className="bg-primary-600 hover:bg-primary-700">
              Get in Touch <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

