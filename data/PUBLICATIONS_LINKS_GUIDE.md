# How to Add Links to Publications

## Quick Guide

To add a link to a publication, simply add a `link` property to the publication object in `data/publications.ts`:

```typescript
{
  year: 2025,
  title: "Your Publication Title",
  journal: "Journal Name",
  authors: "Author names",
  link: "https://example.com/publication-link", // Add this line
}
```

## Common Link Sources

### 1. **DOI Links** (Most Common)
Most scientific publications have a DOI (Digital Object Identifier). You can create a link like this:

```typescript
link: "https://doi.org/10.1038/s41598-024-12345-6"
```

Or use the journal's direct link if available.

### 2. **Journal Website Links**
Many journals provide direct links to articles on their website:

```typescript
link: "https://www.nature.com/articles/s41598-024-12345-6"
```

### 3. **ResearchGate / Academia.edu**
If the paper is available on academic networks:

```typescript
link: "https://www.researchgate.net/publication/123456789"
link: "https://www.academia.edu/12345678/Paper_Title"
```

### 4. **PubMed / PubMed Central** (for biomedical papers)
```typescript
link: "https://pubmed.ncbi.nlm.nih.gov/12345678/"
link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC123456/"
```

### 5. **arXiv** (for preprints)
```typescript
link: "https://arxiv.org/abs/1234.5678"
```

### 6. **Google Scholar**
```typescript
link: "https://scholar.google.com/scholar?q=Your+Paper+Title"
```

## Example: Adding Links to Your Publications

Here's how to add links to your publications in `data/publications.ts`:

```typescript
{
  year: 2025,
  title: "Experimental and computational study on corrosion inhibition by pyrazole derivatives on carbon steel in acid medium",
  journal: "Scientific Reports 15:3631",
  authors: "Setti N, Barrahi A, Maatallah M, Kaddouri Y, et al.",
  link: "https://doi.org/10.1038/s41598-024-xxxxx", // Add DOI link here
},
{
  year: 2025,
  title: "Structural effect of bipyrazole derivatives on corrosion inhibition of carbon steel",
  journal: "Physical Chemistry Chemical Physics 27:5371–5394",
  authors: "Setti N, Barrahi A, Maatallah M, Kaddouri Y, et al.",
  link: "https://pubs.rsc.org/en/content/articlelanding/2025/pc/d4cp01234a", // Add journal link
},
```

## Finding Publication Links

1. **Check the journal website**: Search for your paper title on the journal's website
2. **Use DOI**: If you have the DOI, use `https://doi.org/[DOI]`
3. **Google Scholar**: Search your paper on Google Scholar - it often has direct links
4. **ResearchGate**: If you've uploaded it, use your ResearchGate link
5. **University repository**: Check if your university has an institutional repository

## Notes

- Links are optional - publications without links will show "Link coming soon"
- All links open in a new tab (`target="_blank"`)
- Links are tracked with analytics for insights
- Make sure links are publicly accessible (not behind paywalls if possible)

## UI Features

When you add a link:
- ✅ A prominent "View Publication" button appears
- ✅ The publication title becomes hoverable
- ✅ The card has enhanced hover effects
- ✅ Link clicks are tracked in analytics

---

**Need help?** Check the publication's journal website or contact the corresponding author for the direct link.

