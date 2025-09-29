# Design Guidelines: Dr. Dédé + incluu Unified Website

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern professional services websites like Linear, Notion, and premium consulting brands. The design emphasizes credibility, expertise, and accessibility while maintaining distinct brand personalities for Dr. Dédé and incluu.

## Core Design Elements

### A. Color Palette
**TRUE Authentic Brand Colors** (from Incluu Updated Branding.pdf)

**Core Purple-to-Cyan Gradient Palette:**
- Deep Purple: 265 100% 46% (#6200EA) - Primary brand anchor
- Mid Purple: 256 100% 65% (#7C4DFF) - Vibrant purple
- Aubergine Purple: 282 41% 42% (#7D3F98) - Rich depth
- Gray Blue: 236 31% 50% (#5A5FA6) - Transitional tone
- Mid Blue: 218 100% 63% (#448AFF) - Bright blue
- Dark Cyan: 189 62% 53% (#3EBCD1) - Deep cyan
- Bright Cyan: 180 100% 55% (#18FFFF) - Electric cyan accent
- Pink: 328 79% 49% (#e01b84) - Bold accent color

**Supporting Colors:**
- Purple Variant: 248 32% 46% (#5A509B)
- Light Purple: 245 50% 66% (#847CD4)
- Pale Purple: 240 56% 78% (#ACACE4)
- Deep Blue: 233 57% 36% (#283592)
- Blue Purple: 244 75% 65% (#6d64e8)

**Dr. Dédé Brand Application:**
- Primary: Deep Purple → Mid Purple → Bright Cyan (left to right gradient)
- Secondary: Gray Blue for text/UI elements
- Accent: Pink for CTAs and highlights

**incluu Brand Application:**
- Primary: Mid Purple → Mid Blue → Dark Cyan (left to right gradient)
- Secondary: Aubergine Purple for depth
- Accent: Pink for CTAs and highlights

**Neutral System:**
- Background Light: 0 0% 98% (off-white)
- Background Dark: 0 0% 4% (rich black)
- Foreground Light: 220 15% 15% (dark gray)
- Foreground Dark: 0 0% 95% (off-white)
- Muted: 220 10% 85% (warm gray)

### B. Typography
**Primary Font:** Roboto (Google Fonts) - clean, accessible, professional
**Accent Font:** Montserrat (for hero headlines) - sophisticated, authoritative
**Hierarchy:** Use font-semibold for headings, font-normal for body, font-light for captions

### C. Layout System
**Tailwind Spacing:** Consistent use of units 2, 4, 8, 12, 16, 24 for spacing
- Micro spacing: p-2, gap-2
- Component spacing: p-4, m-4, gap-4
- Section spacing: py-8, my-8
- Large layouts: py-12, py-16, py-24

### D. Component Library

**Navigation:**
- Sticky header with brand switcher toggle
- Mobile hamburger with slide-out drawer
- Persistent CTAs: "Book a Call" and "Watch TEDx"

**Hero Sections:**
- Large typography with bold gradient text effects (purple-to-cyan)
- Split-screen layouts with Dr. Dédé photography on one side, gradient on other
- Bold background gradients (purple-to-cyan, 60-80% opacity for impact)

**Cards & Content:**
- Subtle shadows and rounded corners (rounded-lg)
- Hover states with gentle lift animations (2-4px transform)
- Clean borders using neutral colors

**Forms:**
- Floating labels with smooth transitions
- Focus states with brand color accents
- Error states in accessible red tones

**Brand Switcher:**
- Toggle component that dynamically swaps color tokens
- Smooth transitions between brand themes
- Visual indicator of active brand

### E. Animations
**Micro-interactions only:**
- Subtle fade-ins on scroll (opacity 0→1)
- Gentle hover lifts on cards (2-4px)
- Smooth color transitions for brand switching (300ms)
- NO complex animations or distracting motion

## Visual Treatment

**Gradients:**
- Bold purple-to-cyan linear gradients (135deg) for hero sections
- Split-screen design pattern: solid gradient on left, photography on right
- Professional "Do Better with Dr. Dédé" aesthetic with vibrant colors
- Dark wash over photography (black gradient overlay) for text legibility
- Gradient text effects using purple-to-cyan for headlines

**Imagery:**
- Professional photography with consistent color grading
- Accessibility-focused imagery showing inclusion
- Technical diagrams with brand color accents

**Contrast & Hierarchy:**
- High contrast for accessibility (WCAG 2.2 AA)
- Clear visual hierarchy through typography scale
- Strategic use of whitespace for content breathing room

## Mobile-First Considerations
- Touch-friendly button sizes (minimum 44px)
- Readable typography at small screens (16px minimum)
- Simplified navigation for mobile
- Optimized image loading with Next/Image
- Gesture-friendly interactions

## Accessibility Features
- Accessibility toolbar with text size, contrast, and motion controls
- Focus indicators using brand colors
- Semantic HTML structure
- Alt text for all images
- Screen reader friendly navigation

## Brand Differentiation
**Dr. Dédé:** Professional, authoritative, corporate-friendly
**incluu:** Inclusive, accessible, community-focused

The design system allows seamless switching between these personalities while maintaining visual consistency and user experience quality.