'use client';

import React from 'react';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/Section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { GraduationCap, Award, Brain, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const education = {
  institution: 'Indian Institute of Technology, Kharagpur',
  period: '2017 - 2022',
  degree: 'B.Tech + M.Tech in Industrial Engineering (Industrial Electronics)',
  cgpa: '8.66/10.0',
  minor: 'Minor in Computer Science (9.31/10)',
  specialization: 'Micro specialization in AI (8.74/10)',
  achievements: [
    'Best M.Tech Thesis Award for contributions to network science and machine learning',
    'Published research in top-tier conferences (NeSy 2025, JCDL 2020)',
    'Maintained high academic standards while pursuing entrepreneurial ventures',
  ],
};

const expertise = [
  {
    icon: Brain,
    title: 'Machine Learning & AI',
    skills: ['Large Language Models (LLMs)', 'Vision-Language Models (VLMs)', 'Reinforcement Learning', 'Neural Networks', 'Transfer Learning'],
  },
  {
    icon: Code,
    title: 'Software Engineering',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'React/Next.js', 'TypeScript', 'Full-stack Development'],
  },
  {
    icon: Award,
    title: 'Research & Innovation',
    skills: ['Research Paper Writing', 'Experiment Design', 'Model Architecture', 'Optimization', 'Evaluation Metrics'],
  },
];

const interests = [
  'Multimodal AI Systems',
  'Large Language Models',
  'Computer Vision',
  'Reinforcement Learning',
  'AI Safety & Alignment',
  'Generative AI',
  'Edge AI & Optimization',
  'AI for Social Good',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I&apos;m a passionate ML Engineer and Researcher from India, currently preparing 
              to pursue my Master&apos;s degree in the United States. My journey in AI and machine 
              learning has been driven by a deep curiosity about how intelligent systems can 
              solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong academic foundation from IIT Kharagpur, hands-on experience in 
              industry, and a track record of entrepreneurial success, I bring a unique blend 
              of theoretical knowledge and practical expertise to every project I undertake.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/profile.png"
                alt="Aniruddha Chattopadhyay"
                width={320}
                height={320}
                className="rounded-lg shadow-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Education Section */}
      <Section className="bg-white">
        <SectionHeader title="Education" />
        <Card className="max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="text-primary-600" size={24} />
            </div>
            <div className="flex-1">
              <CardHeader>
                <CardTitle className="text-2xl">{education.institution}</CardTitle>
                <p className="text-gray-600 mt-2">{education.period}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-navy-900">{education.degree}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="primary">CGPA: {education.cgpa}</Badge>
                      <Badge variant="secondary">{education.minor}</Badge>
                      <Badge variant="success">{education.specialization}</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {education.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </Section>

      {/* Expertise Section */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Areas of Expertise"
          subtitle="Core competencies and technical skills"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary-600" size={24} />
                    </div>
                    <CardTitle>{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-700">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Research Interests */}
      <Section className="bg-white">
        <SectionHeader
          title="Research Interests"
          subtitle="Topics I'm passionate about exploring"
        />
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Badge variant="primary" className="text-base py-2 px-4">
                {interest}
              </Badge>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Personal Note */}
      <Section className="bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">Beyond Work</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            When I&apos;m not building AI systems or conducting research, I enjoy participating 
            in hackathons, contributing to open-source projects, and mentoring aspiring engineers. 
            I believe in the power of collaboration and knowledge sharing to drive innovation forward.
          </p>
        </div>
      </Section>
    </>
  );
}

