import React from 'react';
import { Section, SectionHeader } from '@/components/Section';
import { BlogClientWrapper } from '@/components/BlogClientWrapper';
import { getAllPosts, getAllTags } from '@/lib/mdx';

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-300">
            Thoughts on AI, machine learning, research, and technology
          </p>
        </div>
      </Section>

      {/* Blog Content */}
      <BlogClientWrapper posts={posts} allTags={allTags} />
    </>
  );
}

