# Landing Page Architecture & Route Specification: MANAGEO

**Document Ref:** `MANAGEO-DOC-003`  
**Author:** Frontend Architecture & UI/UX Design Group  
**Project:** MANAGEO Multi-Industry POS Platform  
**Target Routes:** `/` (Landing Page), `/signup` (Onboarding), `/login` (Authentication)  

---

## 1. Information Architecture Overview

The ManageO web experience is engineered as a storytelling journey that builds irresistible credibility, demonstrates multi-industry adaptability, and showcases deep operational power.

```
+---------------------------------------------------------------------------------------------------+
| MANAGEO 15-SECTION LANDING PAGE ARCHITECTURE                                                      |
|                                                                                                   |
|  [01. Main Navigation]            -> Top-bar + Floating Pill Nav Dock                            |
|  [02. Editorial Hero]             -> Split Typography + Triple-Industry Visual Collage            |
|  [03. Category Introduction]      -> "Tell us about your business" Interactive Industry Selector  |
|  [04. Product Highlights]         -> Sticky Scroll Story (01/03, 02/03, 03/03)                    |
|  [05. Feature Explorer]           -> Editorial Accordion with Dynamic Device Screen Previews      |
|  [06. Retail & Shop Deep Dive]    -> Matrix Variants, Barcode Engine & Multi-Store Stock          |
|  [07. Salon & Beauty Deep Dive]   -> Chair Timelines, Client Formulas & Automated Booking         |
|  [08. Restaurant Showcase]        -> Table Floorplans & Kitchen Display System (In Development)   |
|  [09. Unified Management Engine]  -> Command Center Architecture (Centralized Operations)         |
|  [10. Interactive Live Dashboard] -> Simulated Merchant Dashboard with Real-time Metric Toggles  |
|  [11. Ecosystem & Hardware]       -> [DARK CANVAS TRANSITION] Terminals, Cloud & Integrations     |
|  [12. Transparent Pricing]        -> [LIGHT CANVAS INVERSION] Fee Breakdown & Scalable Tiers     |
|  [13. Comprehensive FAQ]          -> Searchable Minimalist Accordion with Operational Answers     |
|  [14. Editorial Closing CTA]      -> High-Impact Conversion Banner with Direct Action Input       |
|  [15. Architectural Mega-Footer]  -> Multi-Column Vertical Directory & Legal Framework            |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Granular Specification for the 15 Landing Page Sections

### Section 01: Main Navigation & Floating Pill Dock
* **Initial State (Page Top):**
  * Minimalist, borderless top-bar anchored to the document flow.
  * **Brand Mark:** Custom geometric ManageO logomark (minimalist interlocking square 'M' and circle 'O') + bold wordmark.
  * **Primary Links:** Solutions (Dropdown: Retail, Salon, Restaurant), Features, Hardware, Pricing, Resources.
  * **Utility Links (Right):** Sign In, Support, Contact Sales, and primary pill button: `Get started free`.
* **Scrolled State (Past 120px):**
  * Smooth exit of top-bar and spring entrance of the **Floating Pill Navigation Dock** fixed at `top: 16px`, centered horizontally.
  * **Geometry:** `max-w-4xl w-[92%] h-14 rounded-full bg-white/85 backdrop-blur-xl border border-neutral-200/70 shadow-lg shadow-black/5 px-4 flex items-center justify-between z-50`.
  * **Pill Components:**
    * Left: Mini ManageO logo + Industry Switcher Pill (Retail / Salon / Restaurant).
    * Center: Anchor scroll-spy links: *Highlights*, *Features*, *Dashboard*, *Hardware*, *Pricing*.
    * Right: `Contact Sales` (compact dark pill) + `Get Started` (compact vibrant blue pill).

---

### Section 02: Editorial Hero
* **Typography:**
  * Left Column: **"The platform / for modern / commerce."** (`text-6xl md:text-8xl font-black tracking-tight leading-[0.92] text-neutral-900`).
  * Right Column: **"made for / every business."** (`text-6xl md:text-8xl font-black tracking-tight leading-[0.92] text-neutral-900 text-right md:text-left self-end`).
* **Visual Collage Centerpiece (Asymmetrical Layering):**
  * Layer 1: High-resolution lifestyle photograph of a contemporary retail shopkeeper and salon stylist collaborating.
  * Layer 2: **Interactive Thermal Receipt Mockup:**
    * Perforated top rip edge.
    * Store name: `"MANAGEO FLAGSHIP // STORE #01"`.
    * Line items: `Cashmere Knit Sweater $185.00`, `Botanical Hair Tonic $42.00`, `Espresso Single Origin $4.50`.
    * Tax, tip, and total `$248.85`.
    * Realistic barcode graphic at bottom + status badge: `PAID - TAP TO PAY`.
  * Layer 3: Floating die-cut stickers:
    * Scalloped badge: `ONE PLATFORM. EVERY BUSINESS.`
    * Minimalist price hangtag with barcode.
    * Floating soft white geometric orbs creating parallax depth.
* **Hero CTAs:**
  * Primary Button: `Start Free 14-Day Trial` (`bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl hover:scale-[1.02]`).
  * Secondary Button: `Book an Executive Demo` (`bg-neutral-900 hover:bg-black text-white font-medium px-8 py-4 rounded-full transition-all`).
  * Social Proof Subtext: *"No credit card required. Universal hardware compatibility. Setup in 15 minutes."*

---

### Section 03: Business Category Introduction
* **Kicker:** `■ CUSTOMIZE FOR YOUR INDUSTRY`
* **Headline:** *"Tell us what you run. We'll tailor ManageO for you."*
* **Interactive Vertical Switcher Component:**
  * 3 Large Interactive Category Tiles:
    1. **Retail & Shop:** Fashion, Boutiques, Electronics, Supermarkets, Specialty Stores. (Active badge: *Instant Barcodes, Matrix Variants, Real-time Multi-Warehouse Stock*).
    2. **Salon & Beauty:** Hair Salons, Spas, Barbershops, Nail Studios, Wellness Clinics. (Active badge: *Visual Stylist Calendars, Client Service Cards, Automated SMS Reminders*).
    3. **Restaurant & Cafe (In Active Development):** Cafes, Fast Casual, Fine Dining, Bakeries, Bars. (Active badge: *Table Floor Plans, KDS Kitchen Routing, Modifier Split Tabs*).
  * Clicking any tile dynamically morphs the highlight previews and feature emphasis in real-time across the page.

---

### Section 04: Product Highlights (Sticky Narrative 01/03, 02/03, 03/03)
* **Interaction Mechanic:** Pinned left editorial column; right side dynamically transitions between three cinematic visual showcase cards as user scrolls.
* **Highlight 01 / 03: Speed Up Checkout**
  * *Copy:* "Every second saved at the register is customer loyalty earned. Rapid barcode scanning, split tenders, digital wallets, and custom hotkeys on a responsive touchscreen grid."
  * *Visual:* iPad/Tablet POS interface with dynamic product tiles, live active cart sidebar, instant discount application, and one-tap checkout.
* **Highlight 02 / 03: Control Inventory Across All Locations**
  * *Copy:* "Never run out of a bestseller. Track raw materials, bundle products, receive purchase orders, and transfer stock between branches with automated low-stock reorders."
  * *Visual:* Live multi-warehouse stock matrix showing real-time SKU movements, replenishment alerts, and supplier purchase order automation.
* **Highlight 03 / 03: Delight Clients & Elevate Appointments**
  * *Copy:* "Give clients a frictionless 24/7 self-service booking page. Manage stylist shifts, track color formulas and purchase histories, and automatically prompt tips and rebooking."
  * *Visual:* Sleek dark-mode appointment scheduling board with drag-and-drop chair allocation, client notes, and instant checkout integration.

---

### Section 05: Feature Explorer (Editorial Accordion with Live Previews)
* **Kicker:** `■ EXPLORE PLATFORM CAPABILITIES`
* **Headline:** *"Engineered for daily operations, built for exponential scale."*
* **Layout:**
  * Left Side: Responsive Device Canvas updating interactively based on selected tab.
  * Right Side: Massive Typographic Category List with count badges and smooth expansion:
    1. **Omnichannel Register (6 Features):** Tap to Pay, Split Tender, Offline Mode, Custom Receipts, Store Credit & Gift Cards, Fast Refunds.
    2. **Intelligent Catalog & Stock (6 Features):** Matrix Variants (Size/Color/Material), Composite Bundles, Barcode Generation, Automated Reorder Points, Multi-Store Transfers, Inventory Audits.
    3. **Workforce & Permissions (5 Features):** Shift Scheduling, Time Clock, Role-Based Access Control (Cashier, Manager, Admin), Commission Tracking, Manager Approvals.
    4. **Financial Ledger & Cash Float (5 Features):** Daily Till Reconciliation, Blind Cash Drops, Petty Cash Tracking, Expense Categorization, Automated Tax Rates.
    5. **Executive Analytics & Reporting (6 Features):** Real-Time Gross Margins, Hourly Sales Velocity, Dead-Stock Identification, Top Staff Leaderboards, Export to QuickBooks/Xero.

---

### Section 06: Retail & Shop Deep Dive Showcase
* **Kicker:** `■ RETAIL & SHOP OPERATIONS`
* **Headline:** *"From single-rack boutiques to multi-warehouse retail empires."*
* **Feature Grid & Interactive Component:**
  * **Matrix Variant Engine:** Visual selector demonstrating how a single garment expands into 16 SKU combinations (Sizes XS-XXL × 4 Colorways) with individualized stock counts.
  * **Lightning Barcode Scanning:** Interactive simulation of USB/Bluetooth scanner input finding items in under 30ms.
  * **Automated Low-Stock Trigger:** Visual notification threshold triggering an automatic supplier PO.
  * **Customer Loyalty & Profiles:** Loyalty points accumulation, VIP tiers, and instant purchase history recall at checkout.

---

### Section 07: Salon & Beauty Deep Dive Showcase
* **Kicker:** `■ SALON, SPA & WELLNESS`
* **Headline:** *"Every stylist empowered. Every client remembered."*
* **Feature Grid & Interactive Component:**
  * **Multi-Staff Timeline Calendar:** Interactive schedule grid showing 4 stylists with color-coded appointment blocks, buffer times, and service durations.
  * **Client Formula & History Cards:** Secure confidential notes recording hair color formulas, allergies, preferred beverages, and previous visit dates.
  * **Smart Tip & Commission Splits:** Automated tip calculation at checkout (18%, 20%, 25%, Custom) with automatic attribution to the servicing staff member.
  * **24/7 Branded Online Booking:** Mobile-optimized booking portal preview with service menus and live slot availability.

---

### Section 08: Restaurant & Hospitality Showcase (In Active Development)
* **Kicker:** `■ RESTAURANT & HOSPITALITY — PREVIEW`
* **Headline:** *"Behind the pass and on the floor. Built for culinary velocity."*
* **Feature Grid & Interactive Component:**
  * *Status Badge:* `IN ACTIVE DEVELOPMENT — EARLY ACCESS AVAILABLE Q2 2026`
  * **Interactive Table Floor Plan:** Visual drag-and-drop floor plan mockup showing table occupancy, dining durations, and server assignments.
  * **Kitchen Display System (KDS):** Digital kitchen chit simulation showing prep times, station routing (Grill, Cold, Bar), and ticket aging colors.
  * **Complex Ticket Splitter:** Visual demonstration of splitting bills by seat number, item count, or custom percentage in seconds.

---

### Section 09: Unified Business Management (The Operational Command Center)
* **Kicker:** `■ ONE PLATFORM. EVERY BUSINESS.`
* **Headline:** *"The operational nervous system of your business."*
* **Architecture Visualization:**
  * An interactive visual node diagram connecting the **ManageO Central Core** to:
    * `[Front-of-House POS]` <---> `[Multi-Location Inventory]`
    * `[Staff Shifts & Payroll]` <---> `[Customer CRM & Loyalty]`
    * `[Multi-Tender Payments]` <---> `[Accounting & General Ledger]`
    * `[Branch Analytics]` <---> `[Supplier Supply Chain]`
  * Hovering over any node illuminates the real-time data flow lines connecting store branches to head office.

---

### Section 10: Interactive Executive Dashboard Demonstration
* **Kicker:** `■ THE MANAGEO DASHBOARD`
* **Headline:** *"Your business pulse, rendered in real time."*
* **Live Interactive Widget:**
  * A full-width interactive UI simulation of the ManageO Web Back-Office.
  * **Toggle Controls:**
    * Branch Selector: *All Locations (3)* | *SoHo Flagship* | *Brooklyn Annex* | *Downtown Studio*.
    * Timeframe: *Today (Live)* | *Last 7 Days* | *This Month* | *Quarter-to-Date*.
  * **Live KPI Counters:**
    * Net Sales: `$18,492.50` (`+14.2% vs yesterday`).
    * Transaction Count: `418 orders` (`Avg ticket $44.24`).
    * Top Selling Item: `Silk Mercerized Tee (42 units)`.
    * Staff on Clock: `12 active team members`.
  * **Interactive Sales Velocity Chart:** Smooth SVG area chart with hover tooltips displaying hourly revenue spikes.

---

### Section 11: Ecosystem & Hardware (Dark Canvas Transition)
* **Visual Inversion:** Seamless background transition from `#F8F9FA` to deep obsidian `#090A0F`.
* **Kicker:** `■ HARDWARE FREEDOM & CONNECTED ECOSYSTEM`
* **Headline:** *"Bring your own hardware. Or run on our sleek terminal suite."*
* **Hardware Presentation:**
  * Tabbed hardware line-up with high-contrast minimalist white product renders:
    1. **ManageO Counter Station:** Dual-screen terminal with customer-facing interactive payment display.
    2. **ManageO Mobile Terminal:** Handheld pocket terminal with integrated thermal printer and tap-to-pay.
    3. **Universal Tablet Stand:** 360-degree swivel stand compatible with all iOS and Android tablets.
    4. **Smart Tap-to-Pay on Phone:** Zero hardware required — turn any iPhone or Android phone into an NFC terminal.
* **Connected Software Ecosystem:**
  * Logos and integration badges for QuickBooks, Xero, Shopify, WooCommerce, Stripe, and Zapier.

---

### Section 12: Transparent Pricing & Scalable Plans
* **Visual Inversion:** Seamless transition back to clean light canvas (`#F8F9FA`).
* **Kicker:** `■ TRANSPARENT PRICING`
* **Headline:** *"Predictable pricing. Zero hidden gateway fees."*
* **Billing Frequency Toggle:** Monthly vs Annual (Save 20% + 2 Months Free).
* **3-Card Tier Architecture:**
  1. **ManageO Starter:**
     * Target: Single-location retail shops, independent stylists, boutique cafes.
     * Price: `$29 / month` (billed annually) or `$39 / month`.
     * Processing: Flat `2.5% + 10¢` in-person, `2.9% + 30¢` online.
     * Inclusions: 1 Register, up to 1,000 catalog products, unlimited transactions, basic inventory, customer directory.
  2. **ManageO Growth (Most Popular):**
     * Target: Growing stores, multi-chair salons, high-volume retail.
     * Price: `$79 / month` (billed annually) or `$99 / month`.
     * Processing: Flat `2.4% + 10¢` in-person, `2.8% + 30¢` online.
     * Inclusions: Up to 3 Registers, unlimited products, advanced variant matrix, staff shift scheduling & commissions, multi-branch inventory transfers, low-stock alerts.
  3. **ManageO Multi-Branch Enterprise:**
     * Target: Chains with 5+ branches, high-volume franchises, multi-city operations.
     * Price: `Custom Volume Pricing` (Starting at `$199 / month`).
     * Processing: Tailored interchange-plus rates.
     * Inclusions: Unlimited branches and registers, centralized franchise master catalog, custom API access, dedicated account manager, white-glove migration.
* **Transparency Guarantee Box:** *"No setup fees. No cancellation penalties. Free data import from Square, Clover, and Shopify."*

---

### Section 13: Frequently Asked Questions (FAQ)
* **Kicker:** `■ FREQUENTLY ASKED QUESTIONS`
* **Headline:** *"Everything you need to know about switching to ManageO."*
* **Accordion Items (Expandable with smooth height spring animation):**
  1. *Can I import my existing product catalog, customers, and inventory from Square, Shopify, or Clover?*
  2. *What happens if our internet connection drops during peak checkout hours?* (Details on ManageO Offline Encrypted Mode).
  3. *Do I need to buy expensive proprietary hardware to use ManageO?*
  4. *How does ManageO handle multi-branch inventory transfers and catalog sync?*
  5. *Can salon stylists view their individual schedules on their personal phones without seeing total store finances?*
  6. *When will the Restaurant and Kitchen Display System (KDS) module be publicly launched?*

---

### Section 14: Final High-Impact Editorial CTA
* **Layout:** Generously padded dark container (`bg-neutral-900 text-white rounded-[40px] mx-4 md:mx-12 p-12 md:p-20 relative overflow-hidden`).
* **Visual Elements:** Subtle radial gradient accents, watermark ManageO monogram in the background.
* **Headline:** *"Ready to modernize your business operations?"*
* **Subtext:** *"Join over 14,000 merchants running faster checkouts, tighter inventory, and happier teams on ManageO."*
* **Instant Action Form:**
  * Clean inline input: `Enter your business email...`
  * Action Button: `Start Free 14-Day Trial`
  * Secondary Action: `Or speak with a POS specialist ->`

---

### Section 15: Architectural Mega-Footer
* **Canvas:** Solid obsidian black (`#090A0F`).
* **Columns (5-Column Architectural Directory):**
  * **Column 1 (Brand & Identity):** ManageO logo, mission statement, ISO 27001 & PCI-DSS Level 1 certified badges.
  * **Column 2 (Solutions by Industry):** Retail & Apparel, Groceries & Supermarkets, Hair Salons, Spas & Wellness, Nail Salons, Restaurants (Coming Soon), Multi-Store Chains.
  * **Column 3 (Platform & Features):** Point of Sale, Multi-Branch Inventory, Workforce & Shifts, Customer CRM, Hardware Suite, Analytics & Reports, API & Integrations.
  * **Column 4 (Company & Careers):** About ManageO, Customer Stories, Brand Assets, Careers (We're Hiring!), Press & Media, Partner Program.
  * **Column 5 (Support & Resources):** Help Center, API Documentation, System Status, POS Hardware Setup Guide, Data Migration Service.
* **Bottom Bar:**
  * Language/Region Switcher: `United States (English) / USD ($)`.
  * Copyright: `© 2026 ManageO Technologies, Inc. All rights reserved.`
  * Legal Links: Terms of Service, Privacy Policy, Merchant Agreement, Cookie Settings.

---

## 3. Secondary Routes Specification

### 3.1. Route `/signup` — Interactive Onboarding Experience
The signup flow must maintain the identical editorial prestige and visual polish of the landing page, avoiding sterile generic form fields.

```
+---------------------------------------------------------------------------------------------------+
| SIGNUP ONBOARDING JOURNEY                                                                         |
|                                                                                                   |
|  [Step 1: Account Essentials]  -> Work Email + Password + Account Name                            |
|  [Step 2: Business Type]       -> Visual Cards: [Retail & Shop] [Salon & Beauty] [Restaurant]    |
|  [Step 3: Store Details]       -> Business Name, Number of Locations (1, 2-5, 5+), Currency       |
|  [Step 4: Hardware Preference] -> BYOD (iPad/Android) vs ManageO Terminal vs Phone Tap-to-Pay     |
|  [Step 5: Instant Workspace]   -> Personalized Dashboard generated in < 2 seconds                 |
+---------------------------------------------------------------------------------------------------+
```

* **Layout Composition:** Split-screen layout.
  * Left Side (45%): High-fashion editorial photography showcasing the chosen vertical (e.g. stylish boutique counter or modern salon station) with customer quote.
  * Right Side (55%): Clean, spacious multi-step onboarding wizard with smooth Framer Motion slide transitions.

### 3.2. Route `/login` — Unified Merchant Authentication
* **Layout Composition:** Centered minimalist card or elegant split layout.
* **Features:**
  * Single sign-on with Google or Apple ID for instant access.
  * Work email & password input with floating label animation.
  * Multi-branch selector and staff PIN code fast-switch option for register operators.
  * Security reassurance: 256-bit AES encryption badge and live server status indicator.

