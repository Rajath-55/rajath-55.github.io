# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with **Astro + Tailwind CSS + TypeScript**, featuring a retro-futuristic aesthetic. Deployed to GitHub Pages at https://rajath-55.github.io.

## Development Commands

```bash
npm install      # Install dependencies
npm run dev      # Development server (localhost:4321)
npm run build    # Build for production (outputs to ./dist)
npm run preview  # Preview production build
```

## Architecture

### Project Structure
```
src/
├── components/     # Astro components (Header, Footer, ThemeToggle, etc.)
├── layouts/        # Page layouts (BaseLayout, BlogPost)
├── pages/          # File-based routing
│   ├── index.astro # Homepage (about + contact)
│   └── blog/       # Blog pages
├── content/blog/   # Markdown blog posts
├── styles/         # Global CSS with theme variables
└── lib/            # Utilities
```

### Key Files
- `astro.config.mjs` - Astro configuration (static output for GitHub Pages)
- `tailwind.config.mjs` - Custom colors, fonts, animations
- `src/styles/global.css` - CSS variables, theme system, effects
- `src/content/config.ts` - Blog post schema (Astro Content Collections)

### Design System
- **Colors**: Warm cream (#F5F0E8), deep navy (#1A2744), copper (#B87333)
- **Fonts**: Cormorant Garamond (display), Source Serif Pro (body), IBM Plex Mono (code)
- **Effects**: Scan lines, noise texture, geometric patterns, scroll animations
- **Theme**: Light/dark toggle with CSS variables

### Adding Blog Posts
Create markdown files in `src/content/blog/` with frontmatter:
```yaml
---
title: "Post Title"
description: "Brief description"
pubDate: 2024-01-01
draft: false  # optional
---
```

### Contact Form
Uses Formspree. Update the endpoint in `src/components/ContactForm.astro`:
```typescript
const formspreeEndpoint = "https://formspree.io/f/your-form-id";
```

## Deployment
Push to master → GitHub Actions builds and deploys to GitHub Pages.
Workflow: `.github/workflows/deploy.yml`
