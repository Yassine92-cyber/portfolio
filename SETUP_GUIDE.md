# Portfolio Setup Guide

Complete guide to get your portfolio ready for launch.

---

## 🚀 Quick Start Checklist

- [ ] Set up contact form (Formspree)
- [ ] Add profile photo
- [ ] Add organization logos
- [ ] Update email address
- [ ] Test everything
- [ ] Deploy!

---

## 1. Contact Form Setup (15 minutes)

### Option A: Formspree (Recommended - Free)

1. **Sign up:** Go to https://formspree.io and create a free account
2. **Create form:** Click "New Form" → Name it "Portfolio Contact"
3. **Get endpoint:** Copy your form endpoint (looks like `https://formspree.io/f/abc123xyz`)
4. **Configure:**
   - Create `.env.local` file in project root
   - Add: `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID`
   - Replace `YOUR_FORM_ID` with your actual form ID
5. **Test:** Submit the form on your site to verify it works

**Free tier:** 50 submissions/month (plenty for a portfolio)

### Option B: EmailJS (Alternative)

If you prefer EmailJS:
1. Sign up at https://www.emailjs.com
2. Set up email service (Gmail, Outlook, etc.)
3. Create email template
4. Update `components/Contact.tsx` to use EmailJS SDK

---

## 2. Profile Photo Setup (10 minutes)

1. **Prepare photo:**
   - Use a professional headshot
   - Square format (1:1 aspect ratio)
   - Recommended size: 800x800px
   - File size: <200KB (compress if needed)

2. **Add to project:**
   - Place photo in `public/` folder
   - Name it exactly: `profile.jpg`
   - Path: `public/profile.jpg`

3. **Optimize (optional but recommended):**
   - Use tools like TinyPNG or Squoosh
   - Convert to WebP for better performance (optional)

**Note:** The Hero component will automatically use this photo. If missing, it shows "YK" initials.

---

## 3. Organization Logos Setup (1-2 hours)

### Quick Method: Download from Websites

1. **Visit each organization's website:**
   - Slush: https://slush.org
   - Junction: https://junction.fi
   - Arctic15: https://arctic15.com
   - University of Helsinki: https://helsinki.fi
   - City of Espoo: https://espoo.fi
   - Haaga-Helia: https://haaga-helia.fi
   - Familia: Check their website
   - Think Africa: Check their website

2. **Download logos:**
   - Look for "Press Kit" or "Media" sections
   - Or use browser dev tools to find logo images
   - Download PNG format with transparent background

3. **Optimize logos:**
   - Resize to 200-300px width (maintain aspect ratio)
   - Ensure transparent background
   - Compress if needed (keep file size reasonable)

4. **Add to project:**
   - Place all logos in `public/logos/` folder
   - Use exact filenames (case-sensitive):
     - `slush.png`
     - `junction.png`
     - `arctic15.png`
     - `helsinki.png`
     - `espoo.png`
     - `haaga-helia.png`
     - `familia.png`
     - `think-africa.png`

### Alternative: Use Logo APIs

Some organizations have logo APIs:
- **Clearbit Logo API:** https://logo.clearbit.com/[domain.com]
- **Google Favicon API:** https://www.google.com/s2/favicons?domain=[domain.com]&sz=128

You can update `components/Proof.tsx` to use these if preferred.

---

## 4. Update Email Address (2 minutes)

1. **Open:** `components/Contact.tsx`
2. **Find:** Line 28 (in the catch block)
3. **Replace:** `contact@yassinekaddouri.com` with your actual email
4. **Save**

**Note:** This is a fallback if Formspree isn't configured. Once Formspree is set up, this won't be used.

---

## 5. Environment Variables

Create `.env.local` file in project root:

```env
# Contact Form
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

**Important:**
- Never commit `.env.local` to git (it's in `.gitignore`)
- Use `.env.local.example` as a template
- Restart dev server after adding environment variables

---

## 6. Testing Checklist

Before launching, test:

### Functionality
- [ ] Contact form submits successfully
- [ ] Form validation works (required fields)
- [ ] Success message appears after submission
- [ ] All links work (LinkedIn, organization websites)
- [ ] Smooth scroll navigation works
- [ ] All sections are visible

### Visual
- [ ] Profile photo displays correctly
- [ ] All logos display (or show names if missing)
- [ ] Responsive on mobile (test on phone)
- [ ] Responsive on tablet
- [ ] Looks good on desktop
- [ ] No broken images

### Cross-Browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Performance
- [ ] Page loads quickly (<3 seconds)
- [ ] Images are optimized
- [ ] No console errors
- [ ] Lighthouse score >90

---

## 7. Deployment

### Vercel (Recommended - Free)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for launch"
   git push
   ```

2. **Deploy:**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Add environment variable: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - Deploy!

3. **Custom Domain (Optional):**
   - Add your domain in Vercel settings
   - Update DNS records as instructed

### Other Options
- **Netlify:** Similar to Vercel
- **GitHub Pages:** Requires static export
- **Your own server:** Standard Next.js deployment

---

## 8. Post-Launch

### Analytics
- Set up Google Analytics 4
- Track form submissions
- Monitor page views

### SEO
- Submit sitemap to Google Search Console
- Verify structured data
- Check mobile-friendliness

### Monitoring
- Set up error tracking (Sentry)
- Monitor form submissions
- Check site uptime

---

## Troubleshooting

### Contact form not working?
- Check `.env.local` file exists
- Verify `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is correct
- Check browser console for errors
- Test Formspree endpoint directly

### Logos not showing?
- Verify filenames are exact (case-sensitive)
- Check file paths are correct
- Ensure images are PNG format
- Check browser console for 404 errors

### Profile photo not showing?
- Verify file is named `profile.jpg` (exact)
- Check file is in `public/` folder (not `public/images/`)
- Clear browser cache
- Check file size isn't too large

### Build errors?
- Run `npm install` to ensure dependencies are installed
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct

---

## Need Help?

If you get stuck:
1. Check the error message in browser console
2. Review the component code
3. Verify file paths and names
4. Test in incognito mode (clears cache)

---

**Estimated Total Setup Time:** 2-3 hours

**You've got this!** 🚀

