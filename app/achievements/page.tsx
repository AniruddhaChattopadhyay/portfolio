'use client';

import React, { useState } from 'react';
import { Section, SectionHeader } from '@/components/Section';
import { AwardCard } from '@/components/AwardCard';
import { Badge } from '@/components/Badge';
import { awards } from '@/lib/data';
import { Trophy, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: Trophy,
    value: '10+',
    label: 'Hackathon Wins',
  },
  {
    icon: Award,
    value: '5+',
    label: 'International Awards',
  },
  {
    icon: Star,
    value: 'Top 3',
    label: 'Best Thesis Award',
  },
];

const categories = [
  { id: 'all', label: 'All Achievements' },
  { id: 'international', label: 'International' },
  { id: 'national', label: 'National' },
  { id: 'academic', label: 'Academic' },
];

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredAwards =
    activeCategory === 'all'
      ? awards
      : awards.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Achievements & Awards
          </h1>
          <p className="text-xl text-gray-300">
            Recognition for innovation, research excellence, and technical prowess
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-white py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Icon className="text-primary-600" size={32} />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
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

      {/* Awards Section */}
      <Section className="bg-white">
        <SectionHeader
          title={
            activeCategory === 'all'
              ? 'All Achievements'
              : `${categories.find((c) => c.id === activeCategory)?.label} Achievements`
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredAwards.map((award, index) => (
            <AwardCard
              key={award.id}
              title={award.title}
              organization={award.organization}
              date={award.date}
              description={award.description}
              category={award.category}
              link={award.link}
              index={index}
            />
          ))}
        </div>
        {filteredAwards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No achievements found in this category.
            </p>
          </div>
        )}
      </Section>

      {/* Notable Mentions */}
      <Section className="bg-gray-50">
        <SectionHeader title="Other Notable Achievements" />
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-navy-900 mb-3">
              Competition Finalist
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Finalist among 1400+ teams at NEC AI for Transportation Hackathon (2021)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Runner-up at Smart India Hackathon (2020)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Finalist in 5+ national AI hackathons focused on social good and automation</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-navy-900 mb-3">
              Academic Excellence
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Best M.Tech Thesis Award (2022) - IIT Kharagpur</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Major in Industrial Electronics with 8.66/10 CGPA</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Minor in Computer Science with 9.31/10 CGPA</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Micro specialization in AI with 8.74/10 CGPA</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-navy-900 mb-3">
              Industry Recognition
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>2023 Pint Award (AB InBev) - Excellence in data science research and impact delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Care4U acquired by Government of West Bengal (2019)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>National media coverage for innovative healthcare solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

