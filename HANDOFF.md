# FURSCH INFRA LLP — Website Technical Handoff & Architecture Guide

## 1. Executive Summary
This repository contains the complete, production-ready website for **FURSCH INFRA LLP**, built as a high-precision, architectural portfolio with engineering confidence.

- **Framework**: Next.js 16.4.0 (App Router, Turbopack, React 19)
- **Styling**: Tailwind CSS v4 with bespoke architectural design system
- **Motion**: Scoped GSAP 3.15 + ScrollTrigger (`@gsap/react`)
- **Typography**: Manrope (variable geometric sans-serif)
- **Status**: Production build verified (`npm run build`, `npm run lint` 0 errors, 26/26 routes prerendered).

---

## 2. Brand Identity & Visual Language
- **Sampled Palette**:
  - **Primary Indigo**: `#374177` (Authority, structural stability)
  - **Secondary Lavender**: `#8E97CB` (Technical accents, subtle dividers)
  - **Amber Accent**: `#E49F43` (Active buttons, focus rings, progress indicator)
  - **Charcoal**: `#373435` (High-contrast typography, button text on amber)
  - **Warm Ivory**: `#F7F5F0` (Editorial spaciousness, primary page background)
  - **Pure White**: `#FFFFFF` (Surface cards, logo backing)
- **Geometry**: Derived from the modular **"F"** mark—aligned rectangles, stepped edges, square corner details, thin architectural rules, and blueprint grid overlays.
- **Logo Integrity**: The official logo (`/public/images/brand/logo.png`) and symbol (`/public/images/brand/logo-symbol.png`) preserve the original vectors, proportions, and authentic colors without CSS filters or font substitutes.

---

## 3. Information Architecture & Routes

| Route | Purpose | Prerender Status |
|---|---|---|
| `/` | Homepage (Editorial Split Hero, Clients, Work, Expertise, Signature Scroll, Delivery Approach, Sectors, Team, Closing Enquiry) | `Static (200)` |
| `/about` | Company, leadership philosophy, drawing analysis, wastage reduction, and authentic Kotak-BKC Station team photograph | `Static (200)` |
| `/expertise` | Service overview spanning all 7 documented contracting capabilities | `Static (200)` |
| `/expertise/[slug]` | 7 substantive individual service specification pages | `Static (200)` |
| `/sectors` | 4 sector specifications (Residential, Commercial, Hospitality, Infrastructure) | `Static (200)` |
| `/projects` | Filterable portfolio with sector tabs and full project references list | `Static (200)` |
| `/projects/[slug]` | Verified substantive case studies (Mumbai Metro Line 3, Swastik Onyx, Swastik Coral, Central Park Flower Valley) | `Static (200)` |
| `/contact` | Direct enquiry form, direct phone lines, drawing submission email, Instagram link | `Static (200)` |
| `/privacy` | Transparent data handling policy (no third-party data sales, no spam) | `Static (200)` |
| `/_not-found` | Custom architectural 404 error page | `Static (404)` |
| `/sitemap.xml` | Production search engine sitemap with all active canonical URLs | `Dynamic (200)` |
| `/robots.txt` | Crawler directives allowing public routes and indexing sitemap | `Dynamic (200)` |
| `/api/enquiry` | Server-side enquiry API with honeypot spam protection, validation, and logging | `Dynamic (200)` |

---

## 4. The 7 Documented Core Services
1. `turnkey-execution`: Turnkey Execution & Final Fit-Outs
2. `marble-stone-tile-flooring`: Marble, Stone & Tile Flooring
3. `cladding-solutions`: Interior & Exterior Cladding
4. `gypsum-ceilings-punning`: Gypsum Work, Wall Punning & False Ceilings
5. `painting-finishes`: Interior & Exterior Painting
6. `electrical-systems`: Electrical Conduiting & Fittings
7. `plumbing-sanitary`: Plumbing Lines & Sanitary Fixtures

---

## 5. Verified Client & Project References
- **Client References (Portfolio Page 10)**:
  CIDCO, DLF, Swastik Group, J. Kumar, APCO Infratech, L&T, Tata Projects, Central Park.
- **Projects Cataloged (Portfolio Page 6 & 9)**:
  - *Infrastructure*: Mumbai Metro Line 3 (Kotak-BKC Station), Pune Metro Elevated PMR14, L&T Patna Metro.
  - *Residential*: DLF Grove, DLF Arbour, Swastik Onyx, Swastik Coral, Central Park Flower Valley.
  - *Hospitality*: Grand Hyatt Mumbai, Taj Hotel Lucknow, Central Park Volga Club.
- **Attribution Policy**: Thin, unverified project pages are kept as drafts and omitted from production sitemaps to maintain technical credibility.

---

## 6. Signature Motion Sequence: "From drawing to detail"
- Implemented in `src/components/home/FromDrawingToDetail.tsx` using GSAP ScrollTrigger and `@gsap/react`.
- **Desktop Sequence**: Pinned across ~200svh. As the visitor scrolls, indigo and lavender modular rectangles align, execution imagery appears in structured windows, and the final marble moulding finish resolves. An amber square marks timeline progress.
- **Responsive & Reduced-Motion Fallback**: Automatically switches to an accessible, unpinned 3-stage stacked card layout on mobile devices, coarse pointers, short viewports, or when `prefers-reduced-motion` is enabled.

---

## 7. Where to Edit Content & Assets

| Content Type | File Location |
|---|---|
| Company Details (Phone, Email, Socials) | `src/data/company.ts` |
| Service Scopes & QA Details | `src/data/services.ts` |
| Sector Requirements & Reference Lists | `src/data/sectors.ts` |
| Case Studies & Project References | `src/data/projects.ts` |
| Client Reference Logos & Names | `src/data/clients.ts` |
| 6 Delivery Approach Stages | `src/data/deliverySteps.ts` |
| Internal Asset Mapping Documentation | `src/data/assetMap.ts` |
| Brand Imagery & Photography | `public/images/` |
| Official Portfolio PDF Document | `public/documents/fursch-infra-portfolio.pdf` |

---

## 8. Deployment & Environment Setup

### Local Run:
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start
```

### Environment Variables (`.env.local`):
```env
NEXT_PUBLIC_SITE_URL=https://furschinfra.com
ENQUIRY_WEBHOOK_URL=
NEXT_PUBLIC_ANALYTICS_ID=
```

---

## 9. Launch Handoff: Production Items Requiring Configuration
1. **Production Domain**: Update `NEXT_PUBLIC_SITE_URL` in `.env.local` to the live domain (e.g., `https://furschinfra.com`).
2. **Enquiry Transport**: Configure `ENQUIRY_WEBHOOK_URL` (Slack Webhook, Zapier, Resend, or SendGrid) to forward form submissions to client email inboxes. Currently, all submissions are validated and logged securely server-side.
3. **Office Physical Address**: When a registered physical office address is verified, add it to `src/data/company.ts` and enable `PostalAddress` structured data in `src/components/seo/JsonLd.tsx`.
4. **WhatsApp Business Confirmation**: Enable a WhatsApp CTA only after a WhatsApp-enabled business number is explicitly confirmed.
