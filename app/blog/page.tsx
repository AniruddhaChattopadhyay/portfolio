import React from 'react';
import { notFound } from 'next/navigation';
import { Section } from '@/components/Section';
import { BlogClientWrapper } from '@/components/BlogClientWrapper';
import { getPaginatedPosts, getAllTags } from '@/lib/mdx';
import { isBlogEnabled } from '@/lib/config';

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Hide blog in production
  if (!isBlogEnabled) {
    notFound();
  }

  const params = await searchParams;
  const page = parseInt(params.page || '1', 10);
  
  const { posts, totalPages, currentPage, totalPosts } = getPaginatedPosts(page);
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
          {totalPosts > 0 && (
            <p className="text-sm text-gray-400 mt-4">
              {totalPosts} {totalPosts === 1 ? 'article' : 'articles'} published
            </p>
          )}
        </div>
      </Section>

      {/* Blog Content */}
      <BlogClientWrapper 
        posts={posts} 
        allTags={allTags} 
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
}
