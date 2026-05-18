# Kindred Talent Website

The digital home for Kindred Talent — a Digital Resource Advisor firm helping Australian startups, scaleups, and established brands build the right digital teams.

## Project Structure

- `index.html` - Main landing page
- `blog.html` - Blog & perspectives
- `jobs.html` - Active job listings
- `startups.html` - Startup resource guide
- `styles.css` - Theme system (forest, linen, slate) and component styles
- `main.js` - Theme persistence, analytics, and interactivity

## Theme System

Three color themes with CSS custom properties:
- **Forest** (dark, default)
- **Linen** (light)
- **Slate** (dark blue)

Theme preference is stored in localStorage and respects system preference on first visit.

## Setup for Cloudflare Pages

1. Connect this repository to Cloudflare Pages
2. Build command: (leave empty - static site)
3. Publish directory: `/`
4. Add your custom domain in Cloudflare dashboard

## Deployment

Push to main branch — Cloudflare Pages will automatically deploy.

---

© 2026 Kindred Talent Pty Ltd
