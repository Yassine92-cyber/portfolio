# Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring dark mode, 3D animations, and a clean design.

## 🌐 Live Site

Visit: [https://Yassine92-cyber.github.io/portfolio](https://Yassine92-cyber.github.io/portfolio)

## ✨ Features

- **Dark/Light Mode Toggle** - Seamless theme switching with persistent preferences
- **3D Hero Section** - Interactive Three.js background with floating particles
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - Static export for fast loading
- **Accessibility** - WCAG compliant with proper ARIA labels
- **SEO Optimized** - Meta tags, sitemap, and structured data

## 🚀 Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **TypeScript**: Full type safety
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── journey/           # Journey timeline
│   ├── publications/      # Publications list
│   ├── services/          # Services page
│   ├── store/            # Store (coming soon)
│   └── testimonials/     # Testimonials page
├── components/            # React components
│   ├── Navigation.tsx    # Main navigation
│   ├── Hero3D.tsx        # Hero section with 3D
│   ├── ThemeToggle.tsx   # Dark mode toggle
│   └── ...
├── public/               # Static assets
│   ├── logos/           # Organization logos
│   └── blog-thumbnails/ # Blog post images
├── data/                # Data files
│   ├── testimonials.ts  # Testimonial data
│   └── publications.ts  # Publication data
└── out/                 # Static export output (generated)
```

## 🛠️ Development

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Static files will be generated in the `out/` directory.

## 📦 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the `out` directory to the `gh-pages` branch:
   ```bash
   git subtree push --prefix out origin gh-pages
   ```

### Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:
- Builds the project on push to `main`
- Deploys to GitHub Pages
- Updates the live site

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  'bridge-blue': '#1A324A',
  'signal-teal': '#3AAFA9',
  // ... more colors
}
```

### Content

- **Testimonials**: Edit `data/testimonials.ts`
- **Publications**: Edit `data/publications.ts`
- **Blog Posts**: Edit `app/blog/page.tsx`

## 📝 License

This project is private and proprietary.

## 👤 Author

**Yassine Kaddouri**
- Portfolio: [https://Yassine92-cyber.github.io/portfolio](https://Yassine92-cyber.github.io/portfolio)
- LinkedIn: [https://www.linkedin.com/in/dr-yassine92/](https://www.linkedin.com/in/dr-yassine92/)

---

Built with ❤️ using Next.js and Tailwind CSS
