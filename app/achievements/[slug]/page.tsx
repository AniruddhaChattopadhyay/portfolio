'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Section } from '@/components/Section';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { ArrowLeft, Trophy, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { awards } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';

export default function AchievementPage() {
  const params = useParams();
  const slug = params.slug as string;
  const award = awards.find((a) => a.id === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!award) {
    return (
      <Section className="bg-white py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Achievement Not Found</h1>
          <p className="text-gray-600 mb-8">The achievement you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/achievements">
            <Button variant="primary">Back to Achievements</Button>
          </Link>
        </div>
      </Section>
    );
  }

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'international':
        return 'success';
      case 'national':
        return 'primary';
      case 'academic':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    if (award.images) {
      setCurrentImageIndex((prev) => (prev + 1) % award.images!.length);
    }
  };

  const prevImage = () => {
    if (award.images) {
      setCurrentImageIndex((prev) => (prev - 1 + award.images!.length) % award.images!.length);
    }
  };

  return (
    <>
      {/* Back Button */}
      <Section className="bg-white py-8">
        <Link href="/achievements">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2" size={16} />
            Back to Achievements
          </Button>
        </Link>
      </Section>

      {/* Achievement Header */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-yellow-500/20 rounded-full">
                <Trophy className="text-yellow-400" size={32} />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant={getCategoryColor(award.category) as 'success' | 'primary' | 'secondary' | 'default'} className="text-sm">
                  {award.category}
                </Badge>
                <Badge variant="default" className="bg-white/10 text-white text-sm">
                  {award.date}
                </Badge>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              {award.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {award.organization}
            </p>
            <p className="text-lg text-gray-400">
              {award.description}
            </p>
            {award.link && (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block"
              >
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
                  <ExternalLink className="mr-2" size={16} />
                  Learn More
                </Button>
              </a>
            )}
          </motion.div>
        </div>
      </Section>

      {/* Long Description */}
      {award.longDescription && (
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold font-serif text-navy-900 mb-8">
                The Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {award.longDescription.split('\n\n').map((paragraph, index) => {
                  // Check if paragraph starts with ** for bold headers
                  if (paragraph.startsWith('**') && paragraph.includes(':**')) {
                    const parts = paragraph.split(':**');
                    const header = parts[0].replace(/\*\*/g, '');
                    const content = parts.slice(1).join(':**');
                    return (
                      <div key={index} className="mb-6">
                        <h3 className="text-xl font-bold text-navy-900 mb-2">{header}</h3>
                        <p className="leading-relaxed">{content}</p>
                      </div>
                    );
                  }
                  // Check for bullet points
                  if (paragraph.includes('•')) {
                    const lines = paragraph.split('\n');
                    return (
                      <ul key={index} className="list-none space-y-2 mb-6">
                        {lines.map((line, lineIndex) => (
                          <li key={lineIndex} className="flex items-start">
                            {line.startsWith('•') ? (
                              <>
                                <span className="text-primary-600 mr-2 mt-1">•</span>
                                <span>{line.replace('• ', '')}</span>
                              </>
                            ) : (
                              <span>{line}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  // Check for italic headers
                  if (paragraph.startsWith('*') && paragraph.includes(':*')) {
                    const match = paragraph.match(/^\*([^*]+)\*:?\s*(.*)/);
                    if (match) {
                      return (
                        <div key={index} className="mb-4">
                          <h4 className="text-lg font-semibold text-navy-800 mb-1">{match[1]}</h4>
                          <p className="leading-relaxed">{match[2]}</p>
                        </div>
                      );
                    }
                  }
                  return (
                    <p key={index} className="leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </Section>
      )}

      {/* Technologies */}
      {award.technologies && award.technologies.length > 0 && (
        <Section className="bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold font-serif text-navy-900 mb-6">
                Technologies & Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {award.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-base py-2 px-4">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>
      )}

      {/* Image Gallery */}
      {award.images && award.images.length > 0 && (
        <Section className="bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold font-serif text-navy-900 mb-8">
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {award.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image}
                      alt={`${award.title} - Image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                        View Full Size
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && award.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            {award.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 p-3 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 p-3 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={award.images[currentImageIndex]}
                alt={`${award.title} - Image ${currentImageIndex + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {currentImageIndex + 1} / {award.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <Section className="bg-gray-50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-navy-900 mb-4">
            Explore More Achievements
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Check out my other hackathon wins and accomplishments, or get in touch to discuss collaboration opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/achievements">
              <Button variant="primary">View All Achievements</Button>
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

