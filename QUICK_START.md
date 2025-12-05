# 🚀 Quick Start - Get Launch Ready in 2 Hours

Follow these steps in order to get your portfolio ready for launch.

---

## Step 1: Contact Form (15 min)

1. Go to https://formspree.io
2. Sign up (free)
3. Create new form → Name it "Portfolio Contact"
4. Copy your form endpoint (e.g., `https://formspree.io/f/abc123`)
5. Create `.env.local` file in project root:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
6. Replace `YOUR_FORM_ID` with your actual ID
7. Restart dev server: `npm run dev`
8. Test the form!

---

## Step 2: Profile Photo (10 min)

1. Get a professional photo (square, 800x800px recommended)
2. Compress if needed (<200KB)
3. Save as `profile.jpg`
4. Place in `public/` folder
5. Done! Photo will appear automatically

---

## Step 3: Logos (1-2 hours)

**Option A: Quick (30 min)**
- Visit each organization's website
- Right-click logo → Save image
- Resize to 200-300px width
- Save as PNG with transparent background
- Place in `public/logos/` with exact names:
  - `slush.png`
  - `junction.png`
  - `arctic15.png`
  - `helsinki.png`
  - `espoo.png`
  - `haaga-helia.png`
  - `familia.png`
  - `think-africa.png`

**Option B: Later**
- Site works fine without logos (shows names)
- Add logos when you have time

---

## Step 4: Update Email (2 min)

1. Open `components/Contact.tsx`
2. Find line 28 (in catch block)
3. Replace `contact@yassinekaddouri.com` with your email
4. Save

---

## Step 5: Test Everything (30 min)

- [ ] Contact form works
- [ ] Profile photo shows
- [ ] All sections visible
- [ ] Mobile responsive
- [ ] Links work
- [ ] No console errors

---

## Step 6: Deploy! (15 min)

1. Push to GitHub
2. Go to https://vercel.com
3. Import repository
4. Add environment variable: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
5. Deploy!

---

## That's It! 🎉

Your portfolio is live. You can always add logos and make improvements later.

**Total Time:** ~2-3 hours

**Questions?** Check `SETUP_GUIDE.md` for detailed instructions.

