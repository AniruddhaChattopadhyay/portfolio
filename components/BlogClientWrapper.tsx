'use client';

import React, { useState } from 'react';
import { Section } from './Section';
import { BlogCard } from './BlogCard';
import { Badge } from './Badge';
import { BlogPost } from '@/lib/types';

interface BlogClientWrapperProps {
  posts: BlogPost[];
  allTags: string[];
}

export function BlogClientWrapper({ posts, allTags }: BlogClientWrapperProps) {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filteredPosts =
    selectedTag === 'all'
      ? posts
      : posts.filter((post) => post.tags.includes(selectedTag));

  return (
    <>
      {/* Tags Filter */}
      {allTags.length > 0 && (
        <Section className="bg-gray-50 py-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => setSelectedTag('all')}>
              <Badge
                variant={selectedTag === 'all' ? 'primary' : 'default'}
                className="text-base py-2 px-4 cursor-pointer hover:scale-105"
              >
                All Posts
              </Badge>
            </button>
            {allTags.map((tag) => (
              <button key={tag} onClick={() => setSelectedTag(tag)}>
                <Badge
                  variant={selectedTag === tag ? 'primary' : 'default'}
                  className="text-base py-2 px-4 cursor-pointer hover:scale-105"
                >
                  {tag}
                </Badge>
              </button>
            ))}
          </div>
        </Section>
      )}

      {/* Blog Posts Grid */}
      <Section className="bg-white">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                tags={post.tags}
                readingTime={post.readingTime}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              No blog posts yet
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              I&apos;m working on creating insightful content about AI, machine learning, 
              and my research. Check back soon for updates!
            </p>
          </div>
        )}
      </Section>
    </>
  );
}

