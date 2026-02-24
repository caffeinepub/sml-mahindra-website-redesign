# Specification

## Summary
**Goal:** Build a modern, redesigned SML Mahindra corporate website with a dark charcoal/amber theme, vehicle catalog, dealer locator, about section, contact form, and sticky footer — presented as a single-page layout.

**Planned changes:**
- Apply a cohesive dark charcoal/steel + amber accent design theme with modern sans-serif typography, smooth scroll animations, and glassmorphism/gradient card effects across all sections
- Build a full-width hero section with a cinematic background image, bold headline, short tagline, two CTA buttons ("Explore Vehicles" and "Find a Dealer"), and a navbar that transitions from transparent to opaque on scroll with a mobile hamburger menu
- Create a vehicle catalog section with a responsive card grid (buses, trucks, LCVs), each card showing image, name, category tag, and "View Details" button; clicking opens a modal with key specs; filter tabs allow category filtering
- Implement a dealer/service locator with a text search input (city or state), backed by at least 10 pre-seeded dealer records in the backend, displaying dealer name, address, phone, and a static Google Maps directions link
- Add an "About Us" section with a vertical timeline of at least 5 company milestones and an icon-grid of core values (Innovation, Reliability, Service, etc.)
- Build a Contact & Inquiry form (name, email, phone, subject dropdown, message) that saves submissions to the backend and shows a success toast, then resets the form
- Add a sticky footer with SML Mahindra branding, quick nav links (scroll-to-section), social media icons (LinkedIn, X, YouTube), and a copyright notice
- Serve all custom images as static assets from `frontend/public/assets/generated` and reference them in the hero, vehicle cards, and about section
- Backend implemented in a single Motoko actor exposing dealer query and inquiry storage functions

**User-visible outcome:** Visitors can browse SML Mahindra's vehicle lineup, search for dealers by city/state, read about the company's history and values, and submit an inquiry — all within a visually modern, dark-themed single-page website.
