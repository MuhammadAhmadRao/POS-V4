# Technical Architecture & Engineering Blueprint: MANAGEO

**Document Ref:** `MANAGEO-DOC-006`  
**Author:** Frontend Architecture & Systems Engineering Group  
**Project:** MANAGEO Multi-Industry POS Platform  
**Target Foundation:** React 18+ / TypeScript / Vite / Tailwind CSS / Framer Motion  

---

## 1. Technical Evaluation & Stack Selection

Building an editorial, highly animated, and interactive SaaS experience requires a stack that guarantees **sub-second time-to-interactive**, **60fps/120fps motion fluidity**, and **zero hydration mismatches**.

```
+---------------------------------------------------------------------------------------------------+
| FRAMEWORK EVALUATION: VITE (SPA) vs NEXT.JS (APP ROUTER)                                         |
| Evaluation Criterion      | Vite + React + TS (RECOMMENDED)       | Next.js App Router (SSR)     |
+---------------------------+---------------------------------------+------------------------------+
| Motion & Hydration Safety | PERFECT: Zero server/client mismatches| Flaky: 'use client' required |
|                           | on window scroll/viewport animations. | on nearly every animated UI. |
| Dev Server & HMR Velocity | Instant (< 50ms) hot module reload.   | Slower compilation with Turbopack|
| Build Output & Deployment | Pure static bundle deployable to any  | Requires Node.js runtime or  |
|                           | global CDN (Cloudflare, Vercel, S3).  | custom edge adapter.         |
| Bundle Size & Overhead    | Ultra-lean: only what we import.      | Heavier framework runtime.   |
| Interactive Demos         | Frictionless client-side state models.| Requires complex hydration.  |
+---------------------------------------------------------------------------------------------------+
```

### 1.1. Final Decision: **React 18/19 + TypeScript + Vite + Tailwind CSS**
* **Vite:** Delivers blazing-fast developer feedback and compiles to clean, static, cacheable assets with zero server vulnerabilities or hosting overhead.
* **TypeScript (Strict Mode):** Ensures rigorous type safety across all industry data schemas, POS ticket models, and component prop definitions.
* **Tailwind CSS v3/v4:** Provides atomic utility classes and an extensible design token system for colors, typography, and responsive breakpoints.
* **Framer Motion (`motion/react`):** The premier React motion library. Handles spring physics, layout transitions (`layoutId`), scroll-linked progress (`useScroll`, `useTransform`), and exit animations (`AnimatePresence`) cleanly within React component lifecycles.
* **GSAP Assessment:** We specifically **avoid** loading full GSAP + ScrollTrigger unless required. Framer Motion combined with native CSS `position: sticky` and intersection observers provides identical smoothness at less than one-third the bundle weight, without conflicting with React virtual DOM lifecycles.

---

## 2. Directory Structure & Modular Component Architecture

The codebase is organized with high modularity to separate UI primitives, landing page sections, interactive product simulations, and shared data models.

```
manageo-web/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── assets/
│       ├── images/
│       │   ├── retail-hero.webp
│       │   ├── salon-hero.webp
│       │   └── restaurant-hero.webp
│       └── svg/
│           ├── logo-manageo.svg
│           └── receipt-cut.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── types/
│   │   ├── industry.ts           # Types for Retail, Salon, Restaurant
│   │   ├── pos.ts                # Cart item, ticket, payment, customer schemas
│   │   └── navigation.ts         # Navigation items and section anchor links
│   ├── data/
│   │   ├── industryData.ts       # Copy & feature data for Retail, Salon, Restaurant
│   │   ├── pricingPlans.ts       # Starter, Growth, Enterprise pricing tiers
│   │   ├── faqData.ts            # FAQ questions, answers, and categories
│   │   └── featuresData.ts       # Feature explorer categories and capabilities
│   ├── hooks/
│   │   ├── useScrollSpy.ts       # Tracks active section for floating nav indicator
│   │   ├── useScrollProgress.ts  # Normalized scroll position for parallax and canvas shifts
│   │   └── useMediaQuery.ts      # Viewport detection for responsive adaptations
│   ├── components/
│   │   ├── ui/                   # Reusable atomic design primitives
│   │   │   ├── Button.tsx        # Editorial pill button (magnetic hover, variants)
│   │   │   ├── Badge.tsx         # Micro-kicker badge with solid square glyph
│   │   │   ├── Accordion.tsx     # Smooth auto-height spring expander
│   │   │   ├── DeviceFrame.tsx   # iPad, Terminal, and Mobile hardware frames
│   │   │   └── ReceiptCard.tsx   # Tactile thermal receipt with perforated edge
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Top static header
│   │   │   ├── FloatingNav.tsx   # Docking floating pill with scroll spy & CTAs
│   │   │   └── Footer.tsx        # Multi-column architectural mega footer
│   │   ├── landing/              # Dedicated landing page section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CategorySelector.tsx
│   │   │   ├── HighlightsSection.tsx
│   │   │   ├── FeatureExplorer.tsx
│   │   │   ├── RetailShowcase.tsx
│   │   │   ├── SalonShowcase.tsx
│   │   │   ├── RestaurantShowcase.tsx
│   │   │   ├── UnifiedEngine.tsx
│   │   │   ├── LiveDashboard.tsx
│   │   │   ├── HardwareEcosystem.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   └── ClosingCta.tsx
│   │   └── interactive/          # Live interactive product demonstrations
│   │       ├── PosGridDemo.tsx
│   │       ├── SalonCalendarDemo.tsx
│   │       ├── TableFloorPlanDemo.tsx
│   │       └── MetricVelocityChart.tsx
│   └── pages/
│       ├── LandingPage.tsx       # Route: /
│       ├── SignupPage.tsx        # Route: /signup
│       └── LoginPage.tsx         # Route: /login
└── project-docs/                 # Creative strategy & architecture documentation
```

---

## 3. Tailwind Design Token Configuration

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          500: "#3B82F6",
          600: "#2563EB", // Primary ManageO Electric Cobalt
          700: "#1D4ED8",
          900: "#1E3A8A",
        },
        obsidian: {
          950: "#090A0F", // Deepest dark engine canvas
          900: "#12141A", // Dark card surface
          800: "#1A1D26", // Dark elevated border
          700: "#272B38",
        },
        canvas: {
          light: "#F8F9FA", // Soft warm daylight canvas
          soft: "#F2F4F7",
        },
        vertical: {
          retail: "#059669",
          salon: "#E11D48",
          restaurant: "#D97706",
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Cabinet Grotesk", "Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "Space Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
        kicker: "0.2em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "pill": "0 10px 30px -5px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 25px 50px -12px rgba(0, 0, 0, 0.12)",
        "glow-blue": "0 0 35px -5px rgba(37, 99, 235, 0.35)",
      }
    },
  },
  plugins: [],
};
```

---

## 4. State Management Strategy

To ensure fluid interactivity without unnecessary prop drilling or complex external dependencies:
1. **Industry Context (`IndustryContext.tsx` or lightweight Zustand store):**
   * Stores current selected industry: `'retail' | 'salon' | 'restaurant'`.
   * When changed by the user in the Hero, Floating Nav, or Category Selector, components reactively update their visual theme accents, copy highlights, and POS interface demonstrations.
2. **Pricing Frequency State:**
   * Simple boolean: `isAnnual: boolean` (defaults to `true`). Updates all pricing cards instantaneously with 20% savings calculations.
3. **Scroll-Spy State (`useScrollSpy`):**
   * Employs high-performance `IntersectionObserver` observing all 15 section containers to update the active anchor indicator in the floating pill dock without polling `window.scrollY` every tick.

---

## 5. Performance, Core Web Vitals & Accessibility Standards

```
+---------------------------------------------------------------------------------------------------+
| CORE WEB VITALS BENCHMARK TARGETS                                                                |
| Metric                          | Target Budget  | Architecture Strategy                          |
+---------------------------------+----------------+------------------------------------------------+
| Largest Contentful Paint (LCP)  | < 1.1s         | Preload hero typography, critical CSS inline,  |
|                                 |                | modern WebP image formats with srcset.        |
| Cumulative Layout Shift (CLS)   | 0.00 (Zero)    | Explicit aspect-ratios on all images and cards.|
| Interaction to Next Paint (INP) | < 80ms         | React 18 concurrent transitions, zero heavy JS |
|                                 |                | blocking main thread during user interactions. |
+---------------------------------------------------------------------------------------------------+
```

### 5.1. Accessibility (a11y) Conformance
* **WCAG 2.1 AA Compliance:** Minimum color contrast ratio of `4.5:1` for normal text and `3:1` for large editorial headlines across both light and dark canvas modes.
* **Semantic Landmark Architecture:** `<header>`, `<main>`, `<section id="...">`, `<nav aria-label="...">`, `<aside>`, and `<footer>`.
* **Keyboard Navigation:** All interactive elements (pills, accordion toggles, tab triggers, modal buttons) possess visible `:focus-visible` ring outlines and support standard `Space` / `Enter` keyboard operation.

