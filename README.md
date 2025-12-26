# THREADZ - Next.js Production App

A production-ready Next.js application converted from React, featuring AI-powered fashion design studio.

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS v3
- ✅ Dark mode support (next-themes)
- ✅ GSAP animations
- ✅ Optimized images (next/image)
- ✅ SEO optimized with metadata
- ✅ Responsive design

## Prerequisites

- Node.js 18+ installed
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
threadz/
├── app/
│   ├── layout.tsx      # Root layout with metadata and theme provider
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles and animations
├── components/
│   ├── navigation.tsx  # Navigation bar
│   ├── hero.tsx        # Hero section
│   ├── studio-section.tsx
│   ├── gallery-section.tsx
│   ├── quality-section.tsx
│   ├── footer.tsx
│   ├── magnetic-button.tsx
│   ├── gsap-provider.tsx
│   └── theme-provider.tsx
├── hooks/
│   └── use-typing-effect.ts
└── public/             # Static assets (favicon, og-image, etc.)
```

## Key Changes from React

1. **App Router Structure**: Converted to Next.js App Router format
2. **Client Components**: All interactive components marked with "use client"
3. **Image Optimization**: All `<img>` tags replaced with `next/image`
4. **GSAP Integration**: GSAP loaded as npm package instead of CDN
5. **Theme Management**: Using next-themes for dark mode
6. **SEO**: Added comprehensive metadata in layout.tsx
7. **TypeScript**: Full TypeScript support with proper types

## Configuration

- **Tailwind**: Configured in `tailwind.config.ts`
- **TypeScript**: Configured in `tsconfig.json`
- **ESLint**: Configured in `.eslintrc.json` (ignored during builds)
- **Next.js**: Configured in `next.config.ts` with image domains

## Notes

- The app uses Unsplash images for gallery and studio sections
- GSAP animations are initialized in GSAPProvider component
- Dark mode persists using next-themes
- All components are properly typed with TypeScript

## Next Steps

1. Add your favicon to `/public/favicon.ico`
2. Add Open Graph image to `/public/og-image.jpg` (1200x630px)
3. Customize metadata in `app/layout.tsx`
4. Deploy to Vercel or your preferred hosting platform

