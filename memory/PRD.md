# Plant Spa Co. Website - Product Requirements Document

## Original Problem Statement
Build a premium, conversion-optimized website for "Plant Spa Co." - a plant care business targeting residential homeowners (primary) and commercial clients (secondary). The brand tone should be warm, approachable, professional, and trustworthy.

## Target Audience
- **Primary**: Residential homeowners in the Triangle area (NC)
- **Secondary**: Small businesses (restaurants, boutiques, offices)

## Tech Stack
- **Frontend**: React, Tailwind CSS, shadcn/ui
- **Backend**: FastAPI (scaffolded, not fully implemented)
- **Database**: MongoDB (connected, not actively used)
- **Architecture**: Frontend-first with mock data

---

## What's Been Implemented

### Pages
1. **Home** (`/`) - Hero section, services overview, testimonials, video testimonial, before/after gallery, service area info, CTAs
2. **Services** (`/services`) - Simplified package listings, included services
3. **Grow Club** (`/grow-club`) - Membership details with pricing, benefits, 1-year rewards
4. **About** (`/about`) - Team bios, company values, work gallery, brochure download
5. **Social Impact** (`/social-impact`) - Foster care youth support mission
6. **Events** (`/events`) - Workshop listings
7. **Contact** (`/contact`) - Contact form
8. **Shop** (`/shop`) - Plant products (mock data)

### Components
- `Header.jsx` - Navigation with About dropdown (About Us, Social Impact)
- `Footer.jsx` - Site footer
- `FloatingTopBar.jsx` - Sticky CTA bar with phone and action buttons

### Recent Updates (December 2025)
- Fixed hero text color for better readability (white text with shadow)
- Added video testimonial section with `Kim_short_testimonial.mp4`
- Added horizontal scrolling before/after gallery with uploaded plant images
- Replaced "Failure" section with friendlier "Your Plants Deserve Some TLC" callout
- Added image to Small Business Care card
- Added icons to "How It Works" section
- Simplified Services page package listings (removed descriptions)
- Removed Corporate page
- Created dedicated Grow Club page with full membership details
- Created Social Impact page (moved from About)
- Updated navigation with About dropdown containing Social Impact

---

## Backlog / Future Tasks

### P0 (High Priority)
- None currently

### P1 (Medium Priority)
- Backend integration for contact form (Formspree)
- Lead capture implementation
- Booking request handling

### P2 (Lower Priority)
- Enable easy photo replacement system
- Create custom plant favicon
- Make social media icons functional with real URLs

---

## Assets
- Logo: `Logo_PSC_1.png`
- Testimonial Video: `Kim_short_testimonial.mp4`
- Before/After Images: Peace lily and snake plant transformations
- Small Business Image: `scott-webb-5TBmyEGFS24-unsplash.jpg`

---

## Notes
- All frontend data is currently mocked via `mockData.js`
- Backend is scaffolded but not integrated
- Social media links point to placeholder URLs
