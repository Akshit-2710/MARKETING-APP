# MARKETING MEDIA — Product Requirements Document

## Original Problem Statement
Build a complete, professional, single-page website for a marketing agency named "MARKETING MEDIA" with config-driven placeholder content, navy blue + baby pink + white color scheme, and a contact form that stores data in MongoDB.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI components
- **Backend**: FastAPI + MongoDB (Motor async driver)
- **Config System**: Single `siteConfig.js` file for all editable content

## What's Been Implemented (Dec 2025)
- All 10 sections built and tested
- Backend contact API (POST + GET /api/contact)
- Config-driven content system (siteConfig.js)
- Logo config (LOGO_CONFIG) for Navbar + Footer
- Professional animations: staggered reveals, hero page-load animation, timeline step bounce, portfolio hover overlays, counter pulse, social icon bounce, form input focus, footer link underline, gradient shimmer
- Mobile responsive with animated hamburger menu
- Baby pink body background per user request

## Prioritized Backlog
- P0: All core features complete
- P1: Admin dashboard to view contact submissions
- P2: Dark mode toggle, animation speed customization
