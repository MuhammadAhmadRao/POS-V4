# Asset Research, Motion Resources & Licensing Register: MANAGEO

**Document Ref:** `MANAGEO-DOC-005`  
**Author:** Visual Asset Research & Creative Strategy Group  
**Project:** MANAGEO Multi-Industry POS Platform  
**Target Resource Pool:** Lottie, Rive, Haikei, SVGRepo, Lucide, Unsplash, Pexels  

---

## 1. Asset Strategy & Brand Alignment Criteria

ManageO maintains an uncompromising standard for digital assets. An asset is rejected if it feels like generic clip art, childish cartoons, or overused tech startup templates.

### 1.1. Selection Criteria Filter
1. **Brand Coherence:** Every asset must reinforce the concept of **modern, high-tempo, multi-industry business operations**.
2. **Tactile Authenticity:** Visual elements must reflect physical objects found in actual stores, salons, and restaurants (thermal paper, metal stands, barcode labels, glass counters, fabric swatches).
3. **Local Self-Containment:** All approved assets (SVGs, Lottie JSON files, optimized WebP images, vector icons) must reside within the project codebase (e.g., `src/assets/` or `public/assets/`). Hotlinking from third-party CDNs is strictly prohibited for production stability and privacy.
4. **Permissive Commercial Licensing:** All assets must carry clear, verified open commercial licenses (MIT, Apache 2.0, CC0, Unsplash License, or Pexels License).

---

## 2. Resource Exploration & Evaluation Matrix

```
+---------------------------------------------------------------------------------------------------+
| RESOURCE EVALUATION MATRIX                                                                        |
| Source               | Format       | Usability Assessment for ManageO            | License Type  |
+----------------------+--------------+---------------------------------------------+---------------+
| Haikei.app           | SVG Paths    | Essential for organic dividers, subtle mesh  | Free / Open   |
| SVGRepo.com          | Vector SVG   | Excellent for raw payment glyphs & hardware | MIT / CC0     |
| Lucide Icons         | React / SVG  | Core iconography system across the platform | ISC / MIT     |
| LottieFiles          | JSON / DotLottie| Selected micro-animations (Check, Scan)  | Lottie Simple |
| Rive Community       | .riv binary  | Evaluated for complex interactive widgets   | Community Rive|
| Unsplash & Pexels    | WebP / JPEG  | Commercial photography (Boutique, Salon)    | Permissive    |
+---------------------------------------------------------------------------------------------------+
```

---

## 3. Curated Asset Breakdown by Domain

### 3.1. Vector & SVG Graphic Elements
* **Tactile Thermal Receipt Base (`src/assets/svg/receipt-base.svg`):**
  * Custom mathematical SVG with realistic scalloped/perforated top and bottom edges (`d="M0 0 L10 5 L20 0 L30 5..."`).
  * Authentic paper texture and subtle vertical fold gradients.
* **Barcodes & EAN-13 Formats (`src/assets/svg/barcode-ean13.svg`):**
  * Realistic vector barcode pattern with human-readable numbers beneath (`8 901234 567890`).
* **Organic Abstract Graphic Shapes (Haikei Generator):**
  * Subtle organic blob dividers in light slate (`#F2F4F7`) and deep obsidian (`#141721`) for section transitions.
  * Dot matrix grid background patterns (`16x16px` dot spacing, `1px` radius, `rgba(0,0,0,0.04)`).
* **Hardware Line Art Wireframes:**
  * Clean 1.5px stroke wireframes representing:
    * `Countertop Terminal` (Dual screen with card slot).
    * `Mobile Handheld POS` (Pocket unit with contactless reader).
    * `Swivel Tablet Stand` (Modern aluminum ergonomic base).

### 3.2. Micro-Animations & Lottie Candidates
* **Payment Confirmation Ring:**
  * Clean 40-frame JSON animation: Blue circular stroke draws clockwise, followed by a crisp spring checkmark pop (`scale: 0 -> 1.15 -> 1.0`).
  * File size: `< 8 KB`.
* **Barcode Laser Sweep:**
  * Pure CSS/SVG keyframe animation: A high-precision horizontal line sweeps smoothly across barcode tracks.
  * Zero external JS dependency, 60fps GPU execution.
* **Real-Time Data Pulse Dot:**
  * Pulsing green emerald indicator (`#10B981`) for live register connection status.
  * Simple CSS `animate-ping` + core dot.

### 3.3. Iconography System: Lucide React
Lucide is selected as the primary icon foundation due to its consistent 24x24 grid, customizable stroke width (`1.5px` to `2.0px`), and zero bundle bloat (tree-shakeable).

```typescript
// Core Icon Mapping for ManageO Verticals & Functions
import {
  // Verticals
  Store, ShoppingBag, Scissors, Sparkles, UtensilsCrossed, Coffee,
  // POS & Transactions
  CreditCard, Smartphone, Receipt, QrCode, Tag, Percent,
  // Inventory & Warehouse
  Package, Boxes, Barcode, ArrowLeftRight, AlertTriangle, Layers,
  // Workforce & Admin
  Users, Clock, ShieldCheck, KeyRound, UserCheck, Calendar,
  // Financial & Reports
  TrendingUp, DollarSign, Wallet, FileSpreadsheet, BarChart3, PieChart,
  // System & Hardware
  Monitor, Tablet, HardDrive, Wifi, WifiOff, RefreshCw, CheckCircle2
} from "lucide-react";
```

### 3.4. Commercial Editorial Photography Strategy

Photography is the emotional anchor of the ManageO landing page. Images must feature **genuine craftsmanship, authentic workspaces, and natural lighting**.

```
+---------------------------------------------------------------------------------------------------+
| CURATED COMMERCIAL PHOTOGRAPHY REGISTER                                                           |
| Target Subject           | Visual Mood / Composition                | Recommended Source / Asset |
+--------------------------+------------------------------------------+----------------------------+
| 1. High-End Boutique     | Modern minimalist apparel store, natural | Unsplash (Fashion & Retail)|
|    Shopkeeper            | daylight, customer handling textile.     | ID: Photo-1441986300917    |
| 2. Master Salon Stylist  | Luxury salon chair, stylist cutting hair,| Unsplash (Beauty & Care)   |
|    in Action             | sleek interior, brass mirrors.           | ID: Photo-1560066984-138dad|
| 3. Artisan Cafe / Chef   | Plating gourmet dish at open counter,    | Unsplash (Culinary & Food) |
|    behind the Pass       | barista steaming milk, warm wood tones.  | ID: Photo-1555396273-367ea4|
| 4. Modern POS Terminal   | Sleek black/silver dual-screen terminal  | Custom 3D SVG Composition/ |
|    on Oak Countertop     | on polished white quartz or oak wood.    | High-Res Device Frame      |
+---------------------------------------------------------------------------------------------------+
```

---

## 4. Asset Licensing & Attribution Register

All assets incorporated into ManageO adhere strictly to permissive commercial licensing:

| Asset Name | Source / Author | License | Commercial Use Allowed | Attribution Required | Internal Project Path |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Lucide Icons** | Lucide Contributors | ISC / MIT | YES | YES (Included in repo) | `node_modules/lucide-react` |
| **Boutique Retail Photo** | Clark Street Mercantile (Unsplash) | Unsplash License | YES | NO (Credited) | `src/assets/images/retail-hero.webp` |
| **Salon Stylist Photo** | Adam Winger (Unsplash) | Unsplash License | YES | NO (Credited) | `src/assets/images/salon-hero.webp` |
| **Artisan Culinary Photo** | Jason Leung (Unsplash) | Unsplash License | YES | NO (Credited) | `src/assets/images/culinary-hero.webp` |
| **Vector Hardware Icons** | ManageO Internal Design Studio | MIT (Custom) | YES | Internal Ownership | `src/assets/svg/hardware/*.svg` |
| **Thermal Receipt SVG** | ManageO Internal Design Studio | MIT (Custom) | YES | Internal Ownership | `src/assets/svg/receipt-template.svg` |
| **Haikei Mesh Paths** | Haikei Generator | Free for Commercial | YES | NO | `src/assets/svg/backgrounds/*.svg` |

---

## 5. Asset Optimization & Build Pipeline

1. **Format Standards:**
   * Photographic raster assets: High-efficiency `WebP` and `AVIF` formats at multiple resolutions (`1x` @ 800w, `2x` @ 1600w).
   * Vector illustrations: Optimized via `SVGO` to strip metadata, editor garbage, and redundant grouping.
2. **Lazy Loading & Preloading:**
   * Hero collage assets are given `<link rel="preload" as="image">` for instant Largest Contentful Paint (LCP < 1.0s).
   * Below-the-fold assets are loaded via native `loading="lazy"` with explicit `width` and `height` to prevent Cumulative Layout Shift (CLS = 0).

