# Aniruddha Chattopadhyay - Academic Portfolio

A modern, minimalist academic portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Blog System**: MDX-powered blog with syntax highlighting
- **Project Showcase**: Grid layout with individual project pages
- **SEO Optimized**: Metadata and OpenGraph tags for better visibility
- **Fast Performance**: Optimized images and code splitting
- **Smooth Animations**: Framer Motion for elegant transitions

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
portfolio-site/
├── app/                    # Next.js App Router pages
├── components/             # React components
├── content/               # Blog posts (MDX)
│   └── blog/
├── lib/                   # Utilities and data
│   ├── data.ts           # Site content data
│   ├── mdx.ts            # MDX processing
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   ├── images/
│   └── *.pdf
└── tailwind.config.ts    # Tailwind configuration
```

## 📝 Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2025-01-15"
excerpt: "Brief description"
tags: ["AI", "Machine Learning"]
author: "Aniruddha Chattopadhyay"
---

Your content here...
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },
  accent: { ... },
  navy: { ... },
}
```

### Content

Update personal information in:
- `lib/data.ts` - Experience, publications, projects, awards
- `components/Hero.tsx` - Hero section
- `components/Footer.tsx` - Footer links and info

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build for production:
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

- **Email**: studyaniruddha@gmail.com
- **LinkedIn**: [linkedin.com/in/aniruddha-chattopadhyay](https://linkedin.com/in/aniruddha-chattopadhyay)
- **GitHub**: [github.com/AniruddhaChattopadhyay](https://github.com/AniruddhaChattopadhyay)

---

Built with ❤️ by Aniruddha Chattopadhyay
