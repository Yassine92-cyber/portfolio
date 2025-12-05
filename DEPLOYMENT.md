# GitHub Pages Deployment Guide

This portfolio is configured to deploy to GitHub Pages at: https://Yassine92-cyber.github.io/portfolio

## Prerequisites

1. Git installed on your system
2. GitHub account with repository: `Yassine92-cyber/portfolio`
3. GitHub Pages enabled in repository settings

## Initial Setup

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Portfolio with dark mode"
```

### 2. Add GitHub Remote

```bash
git remote add origin https://github.com/Yassine92-cyber/portfolio.git
```

### 3. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys your site when you push to the `main` branch.

### Enable GitHub Pages

1. Go to your repository: https://github.com/Yassine92-cyber/portfolio
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save

### Deploy

Simply push your changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The GitHub Action will automatically:
- Build your Next.js site
- Deploy to GitHub Pages
- Make it available at https://Yassine92-cyber.github.io/portfolio

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. Build the site:
   ```bash
   npm run build
   ```

2. The static files will be in the `out` directory

3. Push the `out` directory to the `gh-pages` branch:
   ```bash
   git subtree push --prefix out origin gh-pages
   ```

## Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run lint`

### GitHub Pages Not Updating
- Check GitHub Actions tab for deployment status
- Verify the basePath is set correctly in `next.config.js`
- Clear browser cache

### Images Not Loading
- Ensure all images are in the `public` folder
- Check that image paths use relative paths (not absolute)

## Notes

- The site is configured with basePath `/portfolio` for GitHub Pages
- Images are unoptimized for static export compatibility
- The site will be available at: https://Yassine92-cyber.github.io/portfolio

