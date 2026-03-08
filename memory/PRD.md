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
1. **Home** (`/`) - Hero section (lighter font), services overview, testimonials, video testimonial, before/after gallery, TLC callout with cartoon, service area info, CTAs
2. **Services** (`/services`) - Simplified package listings (no descriptions), included services
3. **Grow Club** (`/grow-club`) - Membership details with pricing, benefits, 1-year rewards
4. **About** (`/about`) - Team bios (Maureen Headland - Founder, Francene Kelly - Master Gardener), company values, brochure download
5. **Social Impact** (`/social-impact`) - Foster care youth support mission
6. **Events** (`/events`) - Workshop listings
7. **Contact** (`/contact`) - High-conversion form with plant diagnosis focus, photo upload
8. **Shop** (`/shop`) - Plant products (mock data)

### Components
- `Header.jsx` - Navigation with About dropdown (About Us, Social Impact)
- `Footer.jsx` - Site footer
- `FloatingTopBar.jsx` - Sticky CTA bar with phone and action buttons

### Recent Updates (December 2025)
**Homepage:**
- Fixed hero text to lighter font weight (500 vs 800)
- Added cartoon image to TLC callout section

**About Page:**
- Updated Maureen Headland bio with family photo and full story (OBX native, USAID career, ponytail palm story)
- Updated Francene Kelly bio with Hawaii photo (Master Gardener, 50+ years NC, retired teacher)
- Removed gallery section

**Contact Page - High Conversion Redesign:**
- Added intro box: "Not sure what's wrong with your plant?"
- Simplified form fields:
  - Name
  - Phone Number (required - "so we can text you back")
  - Email (optional)
  - Type of Help Needed (dropdown: Plant Rescue, Repotting/Spa Day, Plant Diagnosis, Event/Plant & Pour, Grow Club, Not sure yet)
  - Tell Us About Your Plant (message)
  - Upload Plant Photo (optional with preview)
- CTA button changed to "Get Your Plant Diagnosis"
- Added "Prefer to Text?" callout with Text Us Now button

---

## Team Information

### Maureen Headland - Founder
- North Carolina native (OBX born, Morrisville rooted)
- 15 years directing data strategy for global health programs (USAID)
- Founded Plant Spa Co. after USAID ended in 2025
- Inspiration: root-bound survivor plant and giant ponytail palm story

### Francene Kelly - Master Gardener
- North Carolina fixture for 50+ years
- Retired public school teacher
- 11 years certified Master Gardener
- Expertise: Indoor and outdoor plants

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

## Assets Used
- Logo: `Logo_PSC_1.png`
- Testimonial Video: `Kim_short_testimonial.mp4`
- Before/After Images: Peace lily and snake plant transformations
- Small Business Image: `scott-webb-5TBmyEGFS24-unsplash.jpg`
- Plant Cartoon: `Plant_cartoon.jpg`
- Headland Family: `Headland_family.JPG`
- Francene Kelly: `Mom_hawaii.jpg`

---

## Notes
- All frontend data is currently mocked via `mockData.js`
- Backend is scaffolded but not integrated
- Contact form currently shows success toast but doesn't send data
- Social media links point to placeholder URLs
