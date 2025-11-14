import React from 'react';
import { Section, SectionHeader } from '@/components/Section';
import { PublicationCard } from '@/components/PublicationCard';
import { publications } from '@/lib/data';

export const metadata = {
  title: 'Research | Aniruddha Chattopadhyay',
  description: 'Research publications in Machine Learning, AI, and Network Science',
};

export default function ResearchPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Research Publications
          </h1>
          <p className="text-xl text-gray-300">
            Contributions to Machine Learning, AI Alignment, and Network Science
          </p>
        </div>
      </Section>

      {/* Publications Section */}
      <Section className="bg-white">
        <SectionHeader
          title="Published Work"
          subtitle="Peer-reviewed publications in top-tier conferences"
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <PublicationCard
              key={pub.id}
              title={pub.title}
              authors={pub.authors}
              venue={pub.venue}
              year={pub.year}
              month={pub.month}
              abstract={pub.abstract}
              links={pub.links}
              award={pub.award}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Research Interests */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-navy-900 mb-6 text-center">
            Research Interests
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  Current Focus
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Multimodal AI systems combining vision, language, and audio modalities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Efficient adaptation methods for large language models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>AI safety and alignment in generative systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Real-time inference optimization for edge deployment</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2 mt-6">
                  Future Directions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I&apos;m particularly interested in pursuing graduate research that bridges the gap 
                  between theoretical advances in AI and practical deployment challenges. My goal is 
                  to contribute to making AI systems more efficient, reliable, and accessible for 
                  real-world applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

