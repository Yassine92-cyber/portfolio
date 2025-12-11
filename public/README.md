# Public Assets Folder

This folder contains static assets (images, documents, etc.) that are served directly by Next.js.

## Folder Structure

```
public/
├── images/
│   ├── profile/          # Profile pictures and headshots
│   ├── projects/         # Project screenshots and images
│   └── testimonials/     # Testimonial photos
├── documents/            # PDFs, CVs, and other documents
└── README.md            # This file
```

## How to Use

### Accessing Files

Files in the `public` folder are accessible from the root URL path:

- `public/images/profile/photo.jpg` → `/images/profile/photo.jpg`
- `public/documents/cv.pdf` → `/documents/cv.pdf`

### In React Components

#### Using Next.js Image Component (Recommended)

```tsx
import Image from 'next/image';

<Image 
  src="/images/profile/photo.jpg" 
  alt="Profile Photo" 
  width={400} 
  height={400}
/>
```

#### Using Regular img Tag

```tsx
<img src="/images/profile/photo.jpg" alt="Profile Photo" />
```

#### Linking to Documents

```tsx
<a href="/documents/cv.pdf" download>Download CV</a>
```

## Best Practices

1. **Optimize Images**: Use optimized image formats (WebP, AVIF) when possible
2. **Organize by Type**: Keep images organized in subfolders by purpose
3. **Naming Convention**: Use descriptive, lowercase filenames with hyphens (e.g., `hero-image.jpg`)
4. **File Sizes**: Keep file sizes reasonable for web performance

## Adding Images to Your Portfolio

1. Place images in the appropriate subfolder
2. Reference them using the path starting with `/`
3. For Next.js Image component, always specify width and height

### Example: Adding a Profile Photo

1. Save your photo as `public/images/profile/yassine-kaddouri.jpg`
2. Use in component:
   ```tsx
   <Image 
     src="/images/profile/yassine-kaddouri.jpg" 
     alt="Yassine Kaddouri" 
     width={200} 
     height={200}
     className="rounded-full"
   />
   ```

