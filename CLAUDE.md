# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Alpharez is a Next.js 15 corporate website for a network automation company. The site is configured for static export with Tailwind CSS v4 and TypeScript. The business focuses on AI-driven network infrastructure automation for enterprises.

## Development Commands

- **Dev server**: `npm run dev` (uses Turbopack for fast development)
- **Build**: `npm run build` (creates static export)
- **Production server**: `npm start`
- **Lint**: `npm run lint` (ESLint with Next.js TypeScript rules)

## Architecture

### Static Site Configuration
The site is configured for static export via `next.config.ts`:
- `output: 'export'` - generates static files for deployment
- `trailingSlash: true` - ensures consistent URL structure
- `images: { unoptimized: true }` - disables Next.js image optimization for static export

### App Router Structure
Uses Next.js App Router with TypeScript:
- **Layout**: `src/app/layout.tsx` - root layout with Navigation and Footer components
- **Pages**: App Router pages in `src/app/[page]/page.tsx` format
- **Components**: Shared components in `src/components/`
- **Styles**: Global CSS and Tailwind configuration

### Styling System
- **Tailwind CSS v4** with PostCSS configuration
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Brand colors**: Blue/purple gradient theme (primary: blue-600, accent: blue-300/purple-900)
- **Design pattern**: Clean corporate layout with responsive grid systems

### TypeScript Configuration
- **Path aliases**: `@/*` maps to `src/*` for clean imports
- **Strict mode**: Enabled for type safety
- **Next.js plugin**: Integrated for optimal TypeScript experience

## Site Structure

The website consists of four main pages:
1. **Home** (`/`) - Hero section, value propositions, services preview
2. **Services** (`/services`) - Detailed service offerings and process
3. **About** (`/about`) - Company background, team, mission, values
4. **Contact** (`/contact`) - Contact form, company details, FAQ

### Content Architecture
- **Business Focus**: Network automation and AI-driven infrastructure
- **Target Audience**: Enterprise clients with complex network environments
- **Key Messaging**: Speed (90% faster), accuracy (error-free), scalability
- **Service Categories**: Network Automation, AI Intelligence, Security, Consulting

## Component Design Patterns

### Navigation Component
- Responsive design with desktop/mobile considerations
- Logo links to home, navigation items with hover states
- Consistent "Get Started" CTA button
- Uses Next.js Link components for client-side navigation

### Layout Consistency
- All pages follow consistent section structure with max-width containers
- Hero sections use gradient backgrounds
- Feature sections alternate white/gray-50 backgrounds
- Consistent padding and spacing using Tailwind classes

### Form Patterns
Contact page includes form with:
- Service interest dropdown matching main service offerings
- Consistent styling with validation considerations
- Professional contact information display

When working on this codebase, maintain the professional corporate aesthetic, ensure responsive design, and follow the established Tailwind class patterns for consistency.