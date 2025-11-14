# Deployment Guide

## Quick Start

### Local Development

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application.

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in minutes!

3. **Custom Domain** (Optional)
   - Go to your project settings on Vercel
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   - Connect your GitHub repository
   - Configure build settings
   - Deploy

### Option 3: Self-Hosting

1. **Build the Application**
```bash
npm run build
```

2. **Start Production Server**
```bash
npm start
```

3. **Use Process Manager (PM2)**
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

## Environment Variables

If you add any API keys or environment-specific configurations:

1. Create `.env.local` file
2. Add your variables:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

3. Add to `.gitignore` (already included)

## Custom Domain

### Update Site Metadata

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  // ... other metadata
};
```

### Update Social Links

Edit these files with your actual social media URLs:
- `components/Hero.tsx`
- `components/Footer.tsx`
- `app/contact/page.tsx`

## Adding Content

### Blog Posts

Create new MDX files in `content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2025-01-15"
excerpt: "Brief description"
tags: ["AI", "Research"]
author: "Aniruddha Chattopadhyay"
---

Your content here...
```

### Projects

Edit `lib/data.ts` and add to the `featuredProjects` array.

### Experience

Edit `lib/data.ts` and add to the `experiences` array.

## Performance Optimization

The site is already optimized with:
- ✅ Next.js Image Optimization
- ✅ Static Site Generation (SSG)
- ✅ Code Splitting
- ✅ Font Optimization
- ✅ CSS Optimization

### Further Optimizations

1. **Enable Analytics**
   - Add Vercel Analytics
   - Or integrate Google Analytics

2. **Add Sitemap**
```bash
npm install next-sitemap
```

3. **Compress Images**
   - Use WebP format
   - Optimize with tools like ImageOptim

## Troubleshooting

### Build Fails

1. Clear cache:
```bash
rm -rf .next
npm run build
```

2. Check Node version (requires 18+):
```bash
node --version
```

### Port Already in Use

```bash
# Kill process on port 3000
kill -9 $(lsof -t -i:3000)
```

### Module Not Found

```bash
rm -rf node_modules package-lock.json
npm install
```

## Maintenance

### Update Dependencies

```bash
npm update
npm audit fix
```

### Regular Updates

- Keep Next.js updated
- Update npm packages monthly
- Review and merge Dependabot PRs

## Support

For issues or questions:
- Email: studyaniruddha@gmail.com
- GitHub: Create an issue in your repository

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS

