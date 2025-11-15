'use client';

import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Section, SectionHeader } from '@/components/Section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { ArrowRight, Briefcase, BookOpen, Award, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: Briefcase,
    title: 'Professional Experience',
    description: 'Senior ML Engineer at PVX Partners, developing multimodal AI agents for real-time commentary generation.',
    link: '/experience',
  },
  {
    icon: BookOpen,
    title: 'Research Publications',
    description: 'Published at NeSy 2025 and JCDL 2020. Best M.Tech Thesis Award recipient for contributions to network science.',
    link: '/research',
  },
  {
    icon: Award,
    title: 'Competition Winner',
    description: 'First place at international hackathons including Daft-Daytona and Neo4J x SambaNova. YC Overnight Hackathon participant.',
    link: '/achievements',
  },
  {
    icon: Code,
    title: 'Entrepreneurship',
    description: 'Founded 2Vid (AI video platform), Care4U (acquired by Govt. of West Bengal), and Bookopedia (scaled to $750K ARR).',
    link: '/entrepreneurship',
  },
];

const skills = [
  'Machine Learning',
  'Deep Learning',
  'Large Language Models',
  'Computer Vision',
  'Reinforcement Learning',
  'Multimodal AI',
  'Python',
  'PyTorch',
  'TensorFlow',
  'React',
  'Next.js',
  'TypeScript',
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Highlights Section */}
      <Section className="bg-white">
        <SectionHeader
          title="What I Do"
          subtitle="A snapshot of my expertise and achievements in AI, research, and entrepreneurship"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary-600" size={24} />
                    </div>
                    <CardTitle>{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{highlight.description}</p>
                    <Link
                      href={highlight.link}
                      className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                    >
                      Learn more <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="text-base py-2 px-4">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-navy-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I&apos;m always open to discussing new opportunities, research collaborations, 
            or just having a conversation about AI and technology.
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
