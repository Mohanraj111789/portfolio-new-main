# Design Guidelines: Mohanraj S Portfolio

## Design Approach

**Reference-Based Modern Portfolio Design**
Drawing inspiration from contemporary portfolio platforms like Linear, Vercel, and modern developer portfolios, with a focus on technical sophistication and elegant minimalism. The design emphasizes professional credibility for an AI/ML engineering student while maintaining approachability.

**Core Principles:**
- Technical elegance with purposeful animations
- Information hierarchy that guides the eye naturally
- Dark-first design with seamless light mode
- Professional yet personable brand presence

---

## Color Palette

**Dark Mode (Primary):**
- Background: 10 8% 8% (deep charcoal)
- Surface: 250 10% 12% (elevated dark)
- Border: 250 8% 20% (subtle dividers)
- Text Primary: 0 0% 98% (near white)
- Text Secondary: 0 0% 65% (muted gray)
- Primary Accent: 244 58% 51% (#4F46E5 - indigo/purple)
- Accent Hover: 244 65% 58% (brighter purple)
- Success: 142 71% 45% (green for achievements)

**Light Mode:**
- Background: 0 0% 100% (pure white)
- Surface: 240 20% 98% (soft gray)
- Border: 240 6% 90% (light dividers)
- Text Primary: 240 10% 10% (charcoal)
- Text Secondary: 240 6% 40% (medium gray)
- Primary Accent: 244 58% 51% (same purple)
- Accent Hover: 244 65% 45% (darker purple)

---

## Typography

**Font Stack:**
- Primary: 'Inter', system-ui, sans-serif (via Google Fonts)
- Monospace: 'JetBrains Mono', monospace (for code/tech elements)

**Scale:**
- Hero Headline: text-6xl lg:text-8xl, font-bold
- Section Titles: text-4xl lg:text-5xl, font-bold
- Subsection: text-2xl lg:text-3xl, font-semibold
- Body Large: text-lg, font-normal
- Body: text-base, font-normal
- Caption: text-sm, text-muted

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Container gaps: gap-6 to gap-12

**Container Strategy:**
- Page container: max-w-7xl mx-auto px-6 lg:px-8
- Content sections: max-w-6xl mx-auto
- Text content: max-w-3xl for readability

**Grid Patterns:**
- Skills: grid-cols-2 md:grid-cols-4 gap-6
- Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Achievements: grid-cols-1 md:grid-cols-2 gap-6

---

## Component Library

**Navigation:**
- Sticky header with backdrop blur (backdrop-blur-xl bg-background/80)
- Logo on left, nav links center/right, theme toggle on far right
- Smooth underline animation on hover (bottom border transition)
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Full viewport height (min-h-screen) with centered content
- Animated gradient mesh background (subtle purple/blue gradients)
- Name: Giant bold typography with gradient text effect
- Typewriter tagline: "AI Enthusiast | Web Developer | Innovator"
- Dual CTAs: Primary "Hire Me" (filled purple), Secondary "Download Resume" (outline)
- Floating scroll indicator at bottom

**Cards (Projects/Skills):**
- Rounded corners: rounded-2xl
- Border: border border-border/50
- Background: bg-surface/50 with backdrop-blur
- Hover: transform scale-105, shadow-xl, border-primary
- Padding: p-6
- Transition: all properties 300ms ease

**Buttons:**
- Primary: bg-primary text-white with hover:bg-accent-hover
- Secondary: border-2 border-primary text-primary hover:bg-primary/10
- Rounded: rounded-full for CTAs, rounded-lg for forms
- Padding: px-8 py-3 for CTAs, px-6 py-2.5 for secondary
- On image backgrounds: Add backdrop-blur-md bg-white/10 for outline variants

**Form Elements:**
- Input fields: border border-border rounded-lg bg-surface px-4 py-3
- Focus: ring-2 ring-primary border-primary
- Labels: text-sm font-medium mb-2
- Consistent dark mode support with proper contrast

**Skill Icons:**
- Size: w-12 h-12 or w-16 h-16
- Container: Circular with bg-surface/80, p-4
- Hover: Lift effect with shadow-lg, rotate slightly (rotate-6)
- Use Font Awesome or Material Icons via CDN

---

## Animations & Interactions

**Framer Motion Patterns:**
- Page sections: Fade in + slide up on scroll (y: 20 → 0)
- Stagger children: delay 0.1s between cards
- Hero elements: Cascade entrance (name → tagline → buttons)
- Skill icons: Pop in with spring animation
- Projects: Flip cards on hover for additional details

**Scroll Behaviors:**
- Smooth scroll for navigation (scroll-smooth)
- Intersection Observer for section animations
- Parallax effect on hero background (subtle)
- Scroll-to-top button: Fixed bottom-right, appears after 400px scroll
- Progress indicator: Thin line at top showing scroll progress

**Hover States:**
- Links: Underline slide-in effect
- Cards: Scale 1.05, shadow elevation
- Buttons: Scale 1.02, brightness increase
- Images: Slight zoom (scale 1.1) within container

---

## Images & Visual Assets

**Hero Section:**
- Large profile image: Circular (rounded-full), 200-300px diameter
- Positioned to left/right of hero text or floating with depth
- Subtle glow effect around image (shadow-2xl shadow-primary/20)

**Project Cards:**
- Thumbnail images: 16:9 aspect ratio, rounded-t-2xl
- Lazy loading with blur-up placeholder
- Overlay gradient on hover revealing project details

**About Section:**
- Secondary portrait or workspace image
- Positioned within grid layout alongside text content
- Optional: Tech stack icons as background pattern (low opacity)

**General Image Treatment:**
- All images: object-cover for consistent sizing
- Subtle border: border border-border/30
- Loading states: Skeleton loaders with shimmer effect

---

## Section-Specific Guidelines

**About:** Two-column layout on desktop (image left, content right), single column mobile. Include timeline or cards for education journey.

**Skills:** Icon grid with category headers (Programming, Frontend, Backend, AI/ML). Each icon in glass-morphism card with label.

**Projects:** Filterable cards with tabs for "All", "Web Dev", "AI/ML". JSON-driven with title, description, tech stack chips, GitHub link, and live demo link.

**Achievements:** Badge-style cards with icon, title, description. Use success color accents for highlights.

**Contact:** Two-column (form left, info/social right). Form with name, email, message fields. Social icons as large clickable circles below form.

**Footer:** Centered text with heart emoji, gradient divider line above, links to social profiles.

---

## Accessibility & Performance

- Maintain WCAG AA contrast ratios in both themes
- Keyboard navigation for all interactive elements
- Reduced motion support: prefers-reduced-motion media query
- Lazy load images and code-split sections
- Optimize Framer Motion: Use transform/opacity only
- Theme toggle with system preference detection