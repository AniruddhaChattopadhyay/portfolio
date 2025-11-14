'use client';

import React from 'react';
import { Section, SectionHeader } from '@/components/Section';
import { ContactForm } from '@/components/ContactForm';
import { Card } from '@/components/Card';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'studyaniruddha@gmail.com',
    href: 'mailto:studyaniruddha@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/aniruddha-chattopadhyay',
    href: 'https://linkedin.com/in/aniruddha-chattopadhyay',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/AniruddhaChattopadhyay',
    href: 'https://github.com/AniruddhaChattopadhyay',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India (Open to relocation)',
    href: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-8017243383',
    href: 'tel:+918017243383',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300">
            I&apos;m always open to discussing new opportunities, research collaborations, 
            or just having a conversation about AI and technology.
          </p>
        </div>
      </Section>

      {/* Contact Info Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                      <Icon className="text-primary-600" size={24} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">
                      {info.label}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-navy-900 hover:text-primary-600 transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-navy-900">{info.value}</p>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Send Me a Message"
          subtitle="Fill out the form below and I&apos;ll get back to you as soon as possible"
        />
        <ContactForm />
      </Section>

      {/* Additional Info */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-navy-50 to-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4 text-center">
              Looking for Graduate Opportunities
            </h2>
            <p className="text-gray-700 leading-relaxed text-center mb-6">
              I&apos;m actively seeking opportunities to pursue my Master&apos;s degree in Computer Science, 
              with a focus on AI/ML, in the United States. If you&apos;re a faculty member or know of 
              relevant programs, I&apos;d love to connect!
            </p>
            <div className="flex justify-center">
              <a
                href="/Aniruddha_Chattopadhyay_CV.pdf"
                download
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Download My CV
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

