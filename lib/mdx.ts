import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './types';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Constants for pagination
export const POSTS_PER_PAGE = 9;

export function getAllPosts(): BlogPost[] {
  // Ensure directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Calculate reading time (excluding code blocks and frontmatter)
      const textContent = content
        .replace(/```[\s\S]*?```/g, '') // Remove code blocks
        .replace(/`[^`]*`/g, '') // Remove inline code
        .replace(/<[^>]*>/g, ''); // Remove JSX/HTML tags
      const wordsPerMinute = 200;
      const words = textContent.trim().split(/\s+/).length;
      const readingTime = Math.ceil(words / wordsPerMinute);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
        tags: data.tags || [],
        readingTime,
        author: data.author || 'Aniruddha Chattopadhyay',
        coverImage: data.coverImage,
        lastUpdated: data.lastUpdated,
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPaginatedPosts(page: number = 1): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
  totalPosts: number;
} {
  const allPosts = getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const currentPage = Math.max(1, Math.min(page, totalPages || 1));
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  
  return {
    posts,
    totalPages,
    currentPage,
    totalPosts,
  };
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculate reading time (excluding code blocks and frontmatter)
    const textContent = content
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/`[^`]*`/g, '') // Remove inline code
      .replace(/<[^>]*>/g, ''); // Remove JSX/HTML tags
    const wordsPerMinute = 200;
    const words = textContent.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
      tags: data.tags || [],
      readingTime,
      author: data.author || 'Aniruddha Chattopadhyay',
      coverImage: data.coverImage,
      lastUpdated: data.lastUpdated,
    };
  } catch (error) {
    return null;
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

