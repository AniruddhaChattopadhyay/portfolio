import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './types';

const postsDirectory = path.join(process.cwd(), 'content/blog');

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

      // Calculate reading time
      const wordsPerMinute = 200;
      const words = content.trim().split(/\s+/).length;
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

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculate reading time
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
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

