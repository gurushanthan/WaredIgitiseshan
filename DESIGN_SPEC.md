Design spec — inspired by YourDigitalServices.co.uk

Goal
- Build an "inspired-by" front-end for WareDigitise that matches the reference site's clarity, spacing and content-first layout while keeping your brand, assets and voice.

High-level visual notes (reference)
- Large, roomy hero with strong H1, concise subcopy and prominent CTA. Clean white/light background with soft photo/artwork tiles.
- Generous vertical spacing between sections and clear section headings (H2/H3), often left-aligned with wide content columns.
- Image cards and alternating content blocks (image left/text right, then reversed).
- Trust/clients/testimonials and a clear contact CTA repeated in multiple places.
- Simple, readable sans-serif typography and subtle neutral color palette with a single accent color.

Design tokens (recommended for WareDigitise)
- Primary (navy): #0F1B33 (already in repo)
- Accent blue: #4E6EF2 (existing)
- Accent green (optional for success): #16A34A
- Paper / surface: #FFFFFF / #F6F8FB
- Muted text: #5B6B82
- Radius: 12-16px
- Max content width: 1220px
- Fonts: `Inter` for body, `Space Grotesk` or `Space Grotesk/Space Mono` for headings (use hosted Google fonts or variable Inter)

Core components to implement
1. Header
   - Logo left, nav links center/right, primary CTA (Request Demo) on right
   - Sticky, semi-opaque backdrop (blur) when scrolled
2. Hero
   - Left-aligned copy block: eyebrow, big H1, short paragraph, CTAs
   - Right-side visual: photo or animated illustration (responsive)
   - Support: small trust row under CTAs
3. Services/Features grid
   - Card grid with 2–3 columns on desktop; icon, short title, 1–2 line blurb
4. Problem / Solution section
   - Alternating image / text blocks with short numbered steps
5. How it works / Process
   - Horizontal stepper or vertical step list with icons
6. Dashboard mockup
   - Decorative UI panel with live metric cards
7. Testimonials / Trust
   - Client logos row + rotating testimonials
8. CTA band
   - Strong repeat CTA and contact form link/button
9. Footer
   - Multi-column sitemap, contact details and social links

Interactions and animations
- Scroll reveal (IntersectionObserver) for cards and headings
- Smooth scroll on nav clicks
- Hero CTA micro-interactions: ripple, icon lift, subtle shadow on hover
- Background crossfade or video on large viewports (SVG fallback for mobile)
- Overlay opacity adjustment per-section for readable text over images (already implemented)

Accessibility & performance
- Reduced-motion media queries and keyboard-accessible controls
- Focus-visible outlines for interactive elements
- Contrast checks (WCAG AA) for body text and buttons; increase overlay or text weight if needed
- Lazy-load large images; prefer responsive `srcset` + WebP variants
- Defer non-critical JS and inline critical CSS for fastest paint

Assets required
- 4–6 hero/section photos (high-res, 1920px wide) — prefer original warehouse photography
- 1 short loop WebM for hero (optional) + poster image
- Client logos (SVG) for the trust row
- Icons (SVG) for features & process

Implementation plan & milestones
1. Produce HTML wireframe for `index.html` (skeleton sections; placeholder images)
2. Implement responsive CSS tokens and components (header, hero, cards)
3. Integrate JS interactions (reveal, micro-interactions, overlay controller)
4. Swap in final images + optimize (WebP, responsive sizes)
5. Accessibility pass + performance (Lighthouse) and final QA
6. Deploy to GitHub Pages and configure custom domain

Deliverables for next step
- `index.html` wireframe (static) + `styles.css` split or inline for immediate review
- `DESIGN_SPEC.md` (this file) and asset checklist

Estimate (rough)
- Wireframe + basic CSS: 2–4 hours
- Interactions + assets integration: 2–4 hours
- Optimization, QA & deploy: 1–3 hours

Notes and copyright
- This spec is inspired by the public reference site but will be implemented in an original, legally safe way using your assets and copy.


