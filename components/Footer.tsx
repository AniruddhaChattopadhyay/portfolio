import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/AniruddhaChattopadhyay',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/aniruddha-chattopadhyay',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:studyaniruddha@gmail.com',
    icon: Mail,
  },
  {
    name: 'CV',
    href: '/Aniruddha_Chattopadhyay_CV.pdf',
    icon: FileText,
    download: true,
  },
];

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Experience', href: '/experience' },
      { name: 'Research', href: '/research' },
      { name: 'Projects', href: '/projects' },
    ],
  },
  {
    title: 'More',
    links: [
      { name: 'Entrepreneurship', href: '/entrepreneurship' },
      { name: 'Achievements', href: '/achievements' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">
              Aniruddha Chattopadhyay
            </h3>
            <p className="text-gray-300 mb-4">
              ML Engineer & Researcher specializing in Neurosymbolic AI, LLMs, and Computer Vision.
              An IIT Kharagpur Alumni with a passion for building AI systems that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return link.download ? (
                  <a
                    key={link.name}
                    href={link.href}
                    download
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Aniruddha Chattopadhyay. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

