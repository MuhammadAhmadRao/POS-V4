# ManageO Design System & UI Component Specification

**Document Ref:** `MANAGEO-DOC-009`  
**Version:** 2.0 (Component Specification)  
**Author:** UI/UX Architecture & Design Systems Engineering Group  
**Project:** MANAGEO Multi-Industry POS Platform  

---

## 1. Design Token Architecture

All design tokens are defined as CSS Custom Properties in `src/styles/brand.css` and mapped into Tailwind CSS in `tailwind.config.js`.

```
+---------------------------------------------------------------------------------------------------+
| DESIGN TOKEN ARCHITECTURE                                                                         |
|                                                                                                   |
|  [CSS Variables]           -> Global single source of truth (--brand-600, --obsidian-950)        |
|  [Tailwind Extend]         -> Atomic utility classes (bg-brand-600, text-obsidian-950)            |
|  [Component Primitives]    -> Reusable React components (<Button>, <Badge>, <ManageOLogo>)       |
|  [Commerce Artifacts]      -> Physical UI representations (<ReceiptCard>, <BarcodeTag>)          |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Spacing, Elevation & Corner Radii

### 2.1. Corner Radii Standards
* **Micro-Pills & Badges:** `rounded-full` (`9999px`) — Navigation buttons, category tags, filter pills.
* **Small Cards & Inputs:** `rounded-2xl` (`16px`) — Form controls, metric tiles, dropdowns.
* **Large Hero Containers:** `rounded-3xl` (`24px`) to `rounded-4xl` (`32px`) — Section highlight cards, product frames.
* **Display Banners & Sections:** `rounded-5xl` (`40px`) — Final closing CTA banner, featured showcases.

### 2.2. Elevation & Ambient Shadows
* **Pill Drop Shadow:** `box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.08);` — Floating pill navigation dock.
* **Obsidian Pill Shadow:** `box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5);` — Dark mode floating controls.
* **Card Ambient Hover:** `box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.12);` — Hover state on interactive product cards.
* **Receipt Paper Shadow:** `box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.15);` — Tactile thermal receipts and hangtags.
* **Brand Pulse Glow:** `box-shadow: 0 0 35px -5px rgba(37, 99, 235, 0.35);` — Electric cobalt focal indicators.

---

## 3. Atomic UI Component Primitives

### 3.1. Button Component (`src/components/ui/Button.tsx`)
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline' | 'ghost' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}
```
* **Variants:**
  * `primary`: `bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-md hover:shadow-xl transition-all`
  * `dark`: `bg-neutral-900 hover:bg-black text-white rounded-full font-medium transition-all`
  * `outline`: `bg-transparent hover:bg-neutral-100 text-neutral-900 border border-neutral-300 rounded-full font-medium`
  * `ghost`: `bg-transparent hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 rounded-full`

### 3.2. Micro-Kicker Badge (`src/components/ui/Badge.tsx`)
* **Standard Pattern:** Solid 6×6px square glyph `■` followed by uppercase tracking-widest text (`tracking-[0.2em]`).
* **Implementation:**
  ```tsx
  export const KickerBadge: React.FC<{ label: string; accentColor?: string }> = ({ 
    label, 
    accentColor = 'currentColor' 
  }) => (
    <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
      <span className="w-1.5 h-1.5 bg-current" style={{ backgroundColor: accentColor }}></span>
      {label}
    </div>
  );
  ```

### 3.3. Floating Pill Navigation Dock (`src/components/layout/FloatingNav.tsx`)
* **Physical Anatomy:**
  * Width: `max-w-4xl w-[92%] h-14`
  * Materials: `rounded-full bg-white/85 backdrop-blur-xl border border-neutral-200/70 shadow-pill`
  * Components: Mini Logo + Industry Dropdown + Anchor Links (*Highlights, Features, Hardware, Pricing*) + Dual CTAs (*Contact sales, Get started*).
  * Entrance: Framer Motion spring transition triggering at `scrollY >= 120px`.

---

## 4. Tactile Commerce Artifact Components

```
+---------------------------------------------------------------------------------------------------+
| TACTILE COMMERCE ARTIFACT SYSTEM                                                                  |
|                                                                                                   |
|  [Thermal Receipt]         -> Perforated top/bottom tear teeth, itemized chits, barcode footer.   |
|  [Retail Hangtag]          -> Heavy cardstock, punched eyelet, EAN-13 barcode, size/color matrix. |
|  [Salon Booking Chit]      -> Chair indicator, confirmed status, formula note, service tags.      |
|  [Restaurant KDS Ticket]   -> Table number, ticket timer, seat breakdown, kitchen modifier chits. |
+---------------------------------------------------------------------------------------------------+
```

### 4.1. Thermal Receipt Architecture (`src/components/ui/ReceiptCard.tsx`)
* Uses mathematical SVG path with 28 zig-zag triangular teeth at top and bottom edges (`L 5 4 L 10 0...`).
* Paper base: `#FFFFFF` to `#F9FAFB` subtle gradient with 1px border `rgba(0,0,0,0.08)`.
* Monospaced items in `JetBrains Mono` with dotted tear lines, subtotal breakdown, tip calculation, and scannable barcode footer.

### 4.2. Retail Garment Hangtag (`src/components/ui/BarcodeTag.tsx`)
* Dark cardstock (`#0A0D14`), punched eyelet with metallic border.
* Size & Color chips (`MEDIUM (M)`, `OBSIDIAN`), large price callout (`$240.00`), and clean vector barcode lines.

---

## 5. Form Controls & Interactive States

* **Input Fields:**
  * Base: `bg-neutral-50 border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all`
  * Dark Canvas: `bg-neutral-800/60 border border-neutral-700 text-white placeholder-neutral-500 focus:border-blue-500`
* **Dropdown & Select Controls:**
  * Custom pill wrappers with chevron transitions and spring-animated popovers.
* **Toggle Switches:**
  * Pill track with sliding circular thumb using Framer Motion `layout` projection.

