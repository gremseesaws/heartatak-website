# HEARTATAK Magazine Website

A modern, visually striking website for HEARTATAK Magazine—a youth-led underground culture magazine focused on music, photography, fashion, art, and creative youth culture.

## Features

- **Hero Slider** - Full-screen rotating editorial photography with brand branding
- **Magazine Issues** - Collectible magazine cover display with premium hover effects
- **Blog** - Curated articles with category filtering
- **Gallery** - Immersive photography gallery with lightbox viewer
- **Music Collective** - Featured artists with streaming links
- **Creator Spotlights** - Spotlight page for featured creatives
- **Shop** - E-commerce section for merchandise and magazines
- **Responsive Design** - Mobile-first approach, optimized for all devices
- **Premium Animations** - Smooth transitions powered by Framer Motion
- **Dark Aesthetic** - Black theme with red accents for bold, premium feel

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   ├── page.tsx            # Home page
│   ├── issues/
│   ├── blog/
│   ├── gallery/
│   ├── music/
│   ├── creators/
│   ├── about/
│   └── shop/
├── components/
│   ├── Navigation.tsx      # Main navigation
│   ├── HeroSlider.tsx      # Hero slider component
│   ├── ArticleCard.tsx     # Article card component
│   ├── IssueCard.tsx       # Magazine issue card
│   ├── GalleryGrid.tsx     # Gallery grid with lightbox
│   └── Footer.tsx          # Footer component
└── data/
    └── content.ts          # All content data
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme.

### Content

All content is stored in `src/data/content.ts`. Update the following:
- Magazine issues
- Blog articles
- Gallery images
- Featured artists
- Creators
- Shop products

## Pages

- **Home** (`/`) - Hero slider, featured content, latest issues
- **Issues** (`/issues`) - Magazine archive
- **Blog** (`/blog`) - Article collection with category filter
- **Gallery** (`/gallery`) - Photography gallery with category filter
- **Music** (`/music`) - Featured artists and music collective
- **Creators** (`/creators`) - Featured creator spotlights
- **About** (`/about`) - Brand story and mission
- **Shop** (`/shop`) - Merchandise and products

## Design Philosophy

HEARTATAK Magazine website is designed to feel:

- **Underground** - Not corporate, authentic youth energy
- **Editorial** - Magazine-like layouts with high-quality visuals
- **Bold** - Strong typography and color choices
- **Minimal** - Clean layouts with strategic use of whitespace
- **Premium** - High-end aesthetic despite DIY origins
- **Cinematic** - Large visuals and immersive experiences

## License

Copyright © 2024 HEARTATAK. All rights reserved.
