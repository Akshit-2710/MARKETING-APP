# MARKETING MEDIA — Product Requirements Document

## Original Problem Statement
Build a complete, professional, single-page website for a marketing agency named "MARKETING MEDIA" with config-driven placeholder content, navy blue + baby pink + white color scheme, and a contact form that stores data in MongoDB.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI components
- **Backend**: FastAPI + MongoDB (Motor async driver)
- **Config System**: Single `siteConfig.js` file for all editable content

## User Personas
- **Agency Owner**: Edits `siteConfig.js` to customize content, logo, colors
- **Website Visitor**: Views services, portfolio, testimonials; submits contact form

## Core Requirements
- 10 sections: Navbar, Hero, Services, Results, Process, Portfolio, Testimonials, Why Choose Us, Contact, Footer
- All content via placeholders [ADD ...] — no fabricated data
- Contact form POSTs to `/api/contact` → stored in MongoDB
- Fully responsive (mobile hamburger menu, grid layouts)
- Scroll animations via Intersection Observer
- Sticky navbar with active section highlighting
- Testimonial carousel (Embla/Shadcn)
- Animated stat counters

## What's Been Implemented (Dec 2025)
- All 10 sections built and tested
- Backend contact API (POST + GET /api/contact)
- Config-driven content system (`siteConfig.js`)
- Logo config (LOGO_CONFIG) for Navbar + Footer
- Mobile responsive design with hamburger menu
- Scroll reveal animations
- Baby pink body background per user request
- README.md with owner instructions

## Prioritized Backlog
- P0: All core features complete ✓
- P1: Admin dashboard to view contact submissions
- P2: Dark mode toggle, animation customization
