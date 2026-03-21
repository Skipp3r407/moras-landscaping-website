# Mora's Landscaping LLC Website

Premium, conversion-focused, multi-page landscaping website built with Next.js + React + Tailwind CSS.

## Pages Included

- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Gallery / Projects (`/gallery`)
- Testimonials (`/testimonials`)
- Contact (`/contact`)
- Service Areas (`/service-areas`)
- FAQ (`/faq`)

## Placeholder Image and Video Strategy

- Gallery currently uses publicly accessible image URLs sourced from the business Facebook page.
- A featured reel card links to a public Facebook reel URL.
- Replace `galleryProjects` and `featuredReels` in `data/site-content.ts` with final approved media:
  - Update `image`/`thumbnail` with high-resolution file paths or CDN URLs.
  - Keep captions conversion-focused and results-oriented.
- Recommended production setup:
  1. Save approved media into `public/images/projects/`.
  2. Replace remote URLs with local paths (`/images/projects/project-name.jpg`).
  3. Add WebP versions for faster load.

## SEO Notes

- Metadata configured globally in `app/layout.tsx` and per-page metadata in each route.
- Local business JSON-LD included in layout.
- `sitemap.xml` and `robots.txt` generated via app routes.
- Primary target keywords are included in metadata and page headings:
  - landscaping Orlando FL
  - lawn maintenance Orlando
  - landscape design Orlando
  - sod installation Orlando
  - irrigation services Orlando
  - artificial turf Orlando
  - hardscape contractor Orlando
  - yard cleanup Orlando

## Run Locally

```bash
npm install
npm run dev
```
