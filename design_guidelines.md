# Design Guidelines: Dr. Dédé + incluu Unified Website

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern professional services websites like Linear, Notion, and premium consulting brands. The design emphasizes credibility, expertise, and accessibility while maintaining distinct brand personalities for Dr. Dédé and incluu.

## Core Design Elements

### A. Color Palette
**Dr. Dédé Brand Colors:**
- Primary: 220 85% 25% (deep professional blue)
- Secondary: 220 15% 95% (light neutral)
- Accent: 45 95% 55% (warm gold for CTAs)

**incluu Brand Colors:**
- Primary: 160 75% 30% (accessible teal)
- Secondary: 160 10% 96% (soft neutral)
- Accent: 280 70% 50% (inclusive purple)

**Neutral System:**
- Background: 0 0% 4% (rich black)
- Foreground: 0 0% 98% (pure white)
- Muted: 220 10% 85% (warm gray)

### B. Typography
**Primary Font:** Inter (Google Fonts) - clean, accessible, professional
**Accent Font:** Playfair Display (for hero headlines) - sophisticated, authoritative
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
- Large typography with gradient text effects
- Asymmetrical layouts with image/video on alternating sides
- Subtle background gradients (10-15% opacity overlays)

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
- Subtle radial gradients in hero backgrounds
- Brand-to-neutral gradients for section dividers
- Avoid harsh contrasts; maintain accessibility

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