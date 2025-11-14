import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Section } from '@/components/Section';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Aniruddha Chattopadhyay`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Back Button */}
      <Section className="bg-white py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
        </div>
      </Section>

      {/* Article Header */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
            <span className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center">
              <Clock size={16} className="mr-2" />
              {post.readingTime} min read
            </span>
            <span>By {post.author}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="primary" className="bg-primary-600">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section className="bg-white">
        <article className="max-w-4xl mx-auto prose prose-lg prose-navy max-w-none">
          <MDXRemote source={post.content} />
        </article>
      </Section>

      {/* Author Bio */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">
            About the Author
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Aniruddha Chattopadhyay</strong> is an ML Engineer and Researcher 
            specializing in Multimodal AI, LLMs, and Computer Vision. He holds a B.Tech + M.Tech 
            from IIT Kharagpur and has published research in top-tier conferences.
          </p>
          <Link href="/about">
            <Button variant="outline">Learn More About Me</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

