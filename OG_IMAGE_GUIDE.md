# Open Graph Image Guide

## What is an Open Graph Image?

An Open Graph (OG) image is the image that appears when you share your website on social media platforms like:
- LinkedIn
- Twitter/X
- Facebook
- WhatsApp
- Slack

## Requirements

- **Size**: 1200x630 pixels (recommended)
- **Format**: JPG or PNG
- **File Size**: < 1MB (optimize if needed)
- **Aspect Ratio**: 1.91:1 (1200:630)

## How to Create

### Option 1: Design Tools

1. **Canva** (Free)
   - Go to [canva.com](https://canva.com)
   - Create custom size: 1200x630px
   - Design your image
   - Download as JPG

2. **Figma** (Free)
   - Create new frame: 1200x630px
   - Design your image
   - Export as JPG

3. **Photoshop/GIMP**
   - Create new document: 1200x630px
   - Design your image
   - Export as JPG

### Option 2: Online Generators

- [OG Image Generator](https://www.opengraph.xyz/)
- [Social Share Preview](https://socialsharepreview.com/)

## What to Include

Your OG image should include:
- Your name: "Yassine Kaddouri"
- Your tagline: "Scientist → Strategist" or "Bridge Builder & Peer Supporter"
- Your location: "Helsinki, Finland" (optional)
- Your photo (optional)
- Brand colors (purple/teal theme)

## Example Design

```
┌─────────────────────────────────────────────┐
│                                             │
│         [Your Photo - Optional]             │
│                                             │
│         Yassine Kaddouri                    │
│         Scientist → Strategist              │
│                                             │
│         Bridge Builder & Peer Supporter     │
│         Helsinki, Finland                   │
│                                             │
└─────────────────────────────────────────────┘
```

## File Placement

1. Save your image as `og-image.jpg`
2. Place it in the `public/` folder
3. Path: `public/og-image.jpg`

## Testing

After adding your image, test it:

1. **LinkedIn**: [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. **Twitter**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
3. **Facebook**: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

## Optimization

Before uploading:
1. Compress the image using [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
2. Ensure file size is < 1MB
3. Test on different platforms

## Current Status

The site is configured to use `/og-image.jpg`. If the file doesn't exist, social media platforms will use a default image or no image.

---

**Note**: You can always add this later. The site works perfectly without it, but having one improves social media sharing.

