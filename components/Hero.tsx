'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Aniruddha Chattopadhyay
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-4">
              ML Engineer & AI Researcher
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Specializing in Multimodal AI, Large Language Models, and Computer Vision. 
              IIT Kharagpur Alumni with publications in top-tier conferences and a passion 
              for building AI systems that make a difference.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact">
                <Button size="lg" variant="primary" className="bg-primary-600 hover:bg-primary-700">
                  Get in Touch <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="/Aniruddha_Chattopadhyay_CV.pdf" download>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
                  Download CV <Download className="ml-2" size={20} />
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/AniruddhaChattopadhyay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/aniruddha-chattopadhyay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:studyaniruddha@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
              <Image
                src="/images/profile.png"
                alt="Aniruddha Chattopadhyay"
                width={384}
                height={384}
                className="relative rounded-full border-4 border-white/10 shadow-2xl object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

