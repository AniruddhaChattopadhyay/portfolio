export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'research' | 'entrepreneurship' | 'opensource' | 'ml-ai';
  imageUrl?: string;
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
    website?: string;
  };
  date: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: 'Full Time' | 'Part Time' | 'Volunteer' | 'Contract' | 'Internship';
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies?: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  month?: string;
  abstract?: string;
  links?: {
    paper?: string;
    arxiv?: string;
    code?: string;
  };
  award?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  longDescription?: string;
  category: 'international' | 'national' | 'academic';
  link?: string;
  images?: string[];
  technologies?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: number;
  author: string;
}

