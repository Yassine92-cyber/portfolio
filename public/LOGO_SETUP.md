# Logo Setup Instructions

## Bridge-builder Logo

Please save your logo image as: `public/bridge-builder-logo.png`

### Image Requirements:
- **Format:** PNG (with transparency preferred)
- **Recommended dimensions:** 400x112px or similar aspect ratio (approximately 3.5:1 width to height)
- **File size:** Under 100KB (optimized)
- **Background:** Transparent or light background

### Current Configuration:
The navigation bar is configured to display the logo at:
- Mobile: height 40px (h-10)
- Desktop: height 48px (h-12)
- Width: Auto (maintains aspect ratio)

### Alternative:
If you prefer a different filename or format, update the path in `components/Navigation.tsx`:
```typescript
src="/bridge-builder-logo.png"
```

---

**Note:** The logo will automatically scale and maintain its aspect ratio. Make sure the image is high quality for crisp display on all devices.

