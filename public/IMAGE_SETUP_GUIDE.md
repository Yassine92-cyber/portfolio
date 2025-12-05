# Image Setup Guide

## Quick Setup

To see images in the carousels, you need to add your image files to the following folders:

### Formation Era (9 images)
**Folder:** `public/formation-era/`

**File names:**
- `formation-1.jpg`
- `formation-2.jpg`
- `formation-3.jpg`
- `formation-4.jpg`
- `formation-5.jpg`
- `formation-6.jpg`
- `formation-7.jpg`
- `formation-8.jpg`
- `formation-9.jpg`

### Research and Leadership Era (7 images)
**Folder:** `public/research-leadership/`

**File names:**
- `research-1.jpg` - Graduation photo
- `research-2.jpg` - AIESEC photo
- `research-3.jpg` - Group photo on red carpet
- `research-4.jpg` - Selfie with three people
- `research-5.jpg` - Award photo (1st Place)
- `research-6.jpg` - Group selfie in circle
- `research-7.jpg` - Outdoor group selfie

## Supported Formats
- JPG/JPEG
- PNG
- WebP

## Recommended Size
- **Width:** 800-1200px
- **Height:** 600-900px
- **Aspect Ratio:** Landscape (4:3 or 16:9) works best

## After Adding Images

1. Save your images with the exact file names listed above
2. Place them in the correct folders
3. Refresh your browser (or restart the dev server if needed)
4. The carousel will automatically detect and display the images

## Troubleshooting

**If images don't appear:**
1. Check file names match exactly (case-sensitive)
2. Verify images are in the correct `public/` subfolder
3. Check browser console for any errors
4. Make sure the dev server is running (`npm run dev`)
5. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Note:** The carousel will show a placeholder message until images are added.

