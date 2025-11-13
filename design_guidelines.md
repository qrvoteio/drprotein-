# Dr.Protein Design Guidelines

## Design Philosophy
**"Technological Naturalness"** - A fusion of modern minimalism with organic, natural textures. The design should convey scientific credibility while maintaining warmth and approachability for health-conscious consumers.

**References**: Soylent.com (structure and functionality), MyMatti.ru (naturalness and visual approach)

## Color Palette
**Base Colors:**
- White (#FFFFFF) - primary background
- Light Gray (#F3F4F6) - secondary backgrounds, subtle sections
- Beige (#F5F3EF) - warm accent backgrounds for natural feel

**Primary Accent:**
- Blue (#2563EB) - primary CTAs, links, key highlights

**Secondary Accent (Alternative):**
- Green (#10B981) - health/wellness indicators, secondary CTAs

**Text:**
- Dark Gray/Black (#111827) - primary text
- Medium Gray (#6B7280) - secondary text, captions

## Typography
**Font Family**: Inter (via Google Fonts)
- **Headings**: Inter Bold (font-weight: 700)
  - H1: 3.5rem (desktop), 2.5rem (mobile)
  - H2: 2.5rem (desktop), 2rem (mobile)
  - H3: 1.875rem (desktop), 1.5rem (mobile)
- **Body Text**: Inter Regular (font-weight: 400)
  - Base: 1rem (16px)
  - Large: 1.125rem for emphasis
  - Small: 0.875rem for captions

## Spacing System
Use Tailwind spacing units consistently:
- Common spacing: 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 (mobile), py-24 (desktop)
- Card spacing: p-6 to p-8
- Element gaps: gap-4, gap-6, gap-8

## Layout & Structure

### Hero Section
- Full-width hero with large lifestyle photography showing product in use
- Overlay with subtle gradient for text readability
- CTAs with blurred glass-morphism backgrounds
- Height: 80vh minimum on desktop, 70vh on mobile

### Content Sections
- Maximum width: max-w-7xl for full sections
- Content areas: max-w-4xl for text-heavy content
- Grid layouts: 3 columns (desktop) → 2 (tablet) → 1 (mobile)
- Generous whitespace between sections (py-16 to py-24)

### Cards & Components
- Rounded corners: rounded-xl (12px) for cards
- Subtle shadows: shadow-sm for elevation
- Hover states: subtle scale (scale-105) or shadow increase
- White backgrounds with light gray borders when needed

## Component Library

### Navigation
- Sticky header with backdrop blur
- Logo left, menu center/right
- Mobile: hamburger menu with smooth slide-in
- Search icon in header (desktop)

### Buttons
**Primary CTA:**
- Blue background (#2563EB), white text
- px-6, py-3, rounded-lg
- Hover: slightly darker blue
- Glass-morphism variant for hero overlays

**Secondary:**
- White background, blue border and text
- Same padding and border radius

### Product Cards
- Image at top (aspect-ratio: 3/4)
- Product name (Inter Bold, 1.25rem)
- Short description (2-3 lines)
- Scientific highlights (badges/pills)
- "Узнать больше" CTA

### Form Elements
- Clean, modern inputs with subtle borders
- Focus state: blue border (#2563EB)
- Labels above inputs
- Helper text in gray
- Required fields marked clearly

### Blog Cards
- Featured image (16:9 ratio)
- Category pill/badge
- Title, excerpt (2-3 lines)
- Author/date metadata
- Hover: slight elevation increase

## Images

### Photography Style
**Lifestyle photos** showing:
- Product in office settings (professionals using during work)
- Athletes/fitness context (post-workout consumption)
- Family moments (healthy breakfast, dinner preparation)
- Close-ups of product packaging with natural lighting
- Ingredient shots with natural textures

**Technical:**
- High resolution, professionally lit
- Natural color tones, avoid heavy filters
- Mix of tight crops and environmental shots

### Illustrations & Infographics
Create custom infographics for:
- Bioavailability comparison (peptides vs regular protein)
- Amino acid profile visualization
- Protein synthesis timeline
- Age-related protein needs chart
Use blue accent color with simple, clean line illustrations

### Icons
- Use Heroicons (outline style)
- 24px standard size, scale up for features
- Blue accent color for primary icons

## Page-Specific Guidelines

### Landing Page Sections
1. **Hero**: Large lifestyle image, compelling headline about peptide benefits, dual CTAs
2. **Science Block**: Infographic-heavy, explain peptides simply with visual aids
3. **For Whom**: Icon grid with 7 audience segments, hover reveals more info
4. **Products**: 3-column grid showcasing product range
5. **Social Proof**: Testimonials or scientific backing
6. **Blog Preview**: Latest 3 articles
7. **Newsletter**: Form with lead magnet offer

### Product Pages
- Hero gallery (main + thumbnails)
- Composition table with visual breakdown
- Nutritional facts (БЖУ) in clean table
- Scientific explanation with infographic
- Comparison table vs traditional broth
- Reviews section

### "For Whom" Pages
- Segment-specific hero image
- Pain points addressed
- Product recommendations
- Scientific backing
- Real-life usage scenarios

### Blog
- Filterable card grid
- Categories: Наука, Рецепты, Интервью, Истории
- Search functionality
- Pagination

## Mobile-First Approach
- Design mobile layouts first, scale up
- Stack all multi-column layouts on mobile
- Simplify navigation to hamburger
- Ensure touch targets minimum 44px
- Optimize images for mobile bandwidth

## Accessibility
- Color contrast ratio minimum 4.5:1
- Focus indicators on all interactive elements
- Semantic HTML structure
- Alt text for all images
- ARIA labels where needed

## Performance Considerations
- Lazy load images below fold
- WebP format with fallbacks
- Optimize hero images aggressively
- Minimize animation overhead
- Target >85 PageSpeed score

## Unique Elements
- **QR Code**: Stylized with brand colors for contact/social
- **Science Badges**: Pills/badges highlighting key benefits (e.g., "100% биодоступность", "30г белка")
- **Progress Indicators**: For protein synthesis timeline visualizations
- **Interactive Comparisons**: Before/after or vs. competitors with smooth transitions