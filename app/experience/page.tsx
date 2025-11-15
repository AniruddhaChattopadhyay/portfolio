import React from 'react';
import { Section, SectionHeader } from '@/components/Section';
import { TimelineItem } from '@/components/Timeline';
import { experiences } from '@/lib/data';

export const metadata = {
  title: 'Experience | Aniruddha Chattopadhyay',
  description: 'Professional experience in Machine Learning, AI, and Data Science',
};

export default function ExperiencePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-300">
            A journey through cutting-edge ML engineering, AI research, and data science roles
          </p>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              title={exp.role}
              subtitle={exp.company}
              period={`${exp.startDate} – ${exp.endDate}`}
              location={exp.location}
              type={exp.type}
              description={exp.description}
              technologies={exp.technologies}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-navy-900 mb-4">
            Want to work together?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            I&apos;m always open to discussing new opportunities and collaborations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </Section>
    </>
  );
}

