# Portfolio Project

A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Project Structure

This project follows the **shadcn/ui** project structure:

```
my portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Tailwind
├── components/
│   ├── ui/                # shadcn/ui components (IMPORTANT: This folder is required)
│   │   └── shape-landing-hero.tsx
│   └── demo.tsx           # Demo component
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
├── components.json        # shadcn/ui configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## Why `/components/ui` is Important

The `/components/ui` directory is the **default path for shadcn/ui components**. This folder is important because:

1. **shadcn/ui CLI Convention**: When you run `npx shadcn@latest add [component]`, components are automatically installed to this directory
2. **Consistency**: Following this convention makes it easy to add more shadcn/ui components later
3. **Organization**: Separates reusable UI components from page-specific components
4. **Configuration**: The `components.json` file is configured to use this path via the `aliases.ui` setting

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

All dependencies have been installed. If you need to reinstall:

```bash
npm install
```

### Installed Dependencies

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library (configured)
- **framer-motion** - Animation library
- **lucide-react** - Icon library
- **clsx & tailwind-merge** - Utility functions for className merging

## Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Component Integration

### HeroGeometric Component

The `HeroGeometric` component is located at `/components/ui/shape-landing-hero.tsx` and is already integrated into the home page.

**Props:**
- `badge?: string` - Badge text (default: "Design Collective")
- `title1?: string` - First line of title (default: "Elevate Your Digital Vision")
- `title2?: string` - Second line of title (default: "Crafting Exceptional Websites")

**Usage:**

```tsx
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

function MyPage() {
  return (
    <HeroGeometric
      badge="My Badge"
      title1="First Title"
      title2="Second Title"
    />
  );
}
```

## Adding More shadcn/ui Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

Components will be automatically added to `/components/ui/`.

## Project Configuration

### TypeScript

- Configured with strict mode
- Path aliases: `@/*` maps to project root
- Next.js TypeScript plugin enabled

### Tailwind CSS

- Configured with shadcn/ui theme
- CSS variables for theming
- Dark mode support
- Custom animations via `tailwindcss-animate`

### shadcn/ui

- Configured via `components.json`
- Style: default
- RSC (React Server Components) enabled
- TypeScript enabled
- CSS variables for theming

## Notes

- The component uses `"use client"` directive because it uses framer-motion (client-side animations)
- All icons are from `lucide-react` - no external image assets required
- The component is fully responsive with mobile-first design
- No additional assets needed - everything is CSS-based

