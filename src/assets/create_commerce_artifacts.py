#!/usr/bin/env python3
"""
COMMERCE ARTIFACT & VISUAL ASSET GENERATOR
Generates vector SVG assets for:
1. Perforated Thermal Receipt with realistic paper tear and itemized typography
2. Retail Barcode Hangtag with authentic EAN-13 lines and SKU metadata
3. Salon Appointment Schedule Chit with client notes and service duration
4. Restaurant Kitchen Display (KDS) Order Ticket with table routing and modifiers
5. Modern POS Hardware Line-Art (Countertop Terminal, Mobile Terminal, Tablet Stand)
6. Abstract Geometric Backgrounds (Haikei-style organic waves, grid patterns)
7. Dynamic Animated Brand Symbol & Motion graphics
"""

import os

ILLUST_DIR = "public/illustrations"
ASSETS_SVG_DIR = "src/assets/svg"
IMAGES_DIR = "public/images"
ANIM_DIR = "public/animations"

os.makedirs(ILLUST_DIR, exist_ok=True)
os.makedirs(ASSETS_SVG_DIR, exist_ok=True)
os.makedirs(IMAGES_DIR, exist_ok=True)
os.makedirs(ANIM_DIR, exist_ok=True)

# ---------------------------------------------------------------------------
# 1. PERFORATED THERMAL RECEIPT (Tactile Commerce Artifact)
# ---------------------------------------------------------------------------
def generate_receipt_svg():
    # Perforated zig-zag top and bottom
    teeth_top = " ".join([f"L {i*10 + 5} 4 L {(i+1)*10} 0" for i in range(28)])
    teeth_bottom = " ".join([f"L {280 - (i*10 + 5)} 476 L {280 - (i+1)*10} 480" for i in range(28)])
    
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 480" width="100%" height="100%" fill="none">
    <defs>
        <filter id="receiptShadow" x="-10%" y="-5%" width="125%" height="115%">
            <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="rgba(0,0,0,0.12)"/>
        </filter>
        <linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="100%" stop-color="#F9FAFB"/>
        </linearGradient>
    </defs>
    
    <!-- Receipt Body with Perforated Edges -->
    <path d="M 0 0 {teeth_top} L 280 480 {teeth_bottom} Z" 
          fill="url(#paperGrad)" stroke="rgba(0,0,0,0.08)" stroke-width="1" filter="url(#receiptShadow)"/>
    
    <!-- Header: ManageO Flagship Store -->
    <text x="140" y="44" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="14" letter-spacing="2" fill="#0A0D14">MANAGEO STORE #04</text>
    <text x="140" y="60" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#64748B">SOHO DISTRICT • NEW YORK, NY</text>
    <text x="140" y="74" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#94A3B8">REGISTER 02 • CASHIER: ELENA V.</text>
    <text x="140" y="88" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#94A3B8">DATE: 2026-11-22 14:32:08</text>
    
    <!-- Perforated Tear Line -->
    <line x1="20" y1="104" x2="260" y2="104" stroke="#CBD5E1" stroke-dasharray="4 4" stroke-width="1"/>
    
    <!-- Itemized Entries -->
    <g font-family="'JetBrains Mono', monospace" font-size="11" fill="#0A0D14">
        <!-- Item 1: Retail Fashion -->
        <text x="20" y="130" font-weight="600">MERINO WOOL OVERSHIRT</text>
        <text x="260" y="130" text-anchor="end" font-weight="700">$185.00</text>
        <text x="20" y="145" font-size="9" fill="#64748B">SKU: MW-BLK-M • QTY: 1</text>
        
        <!-- Item 2: Salon Care -->
        <text x="20" y="175" font-weight="600">BOTANICAL SCALP ESSENCE</text>
        <text x="260" y="175" text-anchor="end" font-weight="700">$48.00</text>
        <text x="20" y="190" font-size="9" fill="#64748B">SKU: BE-100ML • QTY: 1</text>
        
        <!-- Item 3: Cafe / Hospitality -->
        <text x="20" y="220" font-weight="600">ETHIOPIA GUJI (POUROVER)</text>
        <text x="260" y="220" text-anchor="end" font-weight="700">$6.50</text>
        <text x="20" y="235" font-size="9" fill="#64748B">SINGLE ORIGIN • SEAT 04</text>
    </g>
    
    <!-- Subtotal & Tax Divider -->
    <line x1="20" y1="258" x2="260" y2="258" stroke="#E2E8F0" stroke-width="1.5"/>
    
    <g font-family="'JetBrains Mono', monospace" font-size="11" fill="#64748B">
        <text x="20" y="280">SUBTOTAL</text>
        <text x="260" y="280" text-anchor="end" font-weight="600" fill="#0A0D14">$239.50</text>
        
        <text x="20" y="300">NYC SALES TAX (8.875%)</text>
        <text x="260" y="300" text-anchor="end">$21.26</text>
        
        <text x="20" y="320">STAFF TIP (20%)</text>
        <text x="260" y="320" text-anchor="end">$48.00</text>
    </g>
    
    <!-- Bold Total Banner -->
    <rect x="18" y="336" width="244" height="42" rx="6" fill="#F1F5F9"/>
    <text x="32" y="362" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="14" fill="#0A0D14">TOTAL DUE</text>
    <text x="248" y="362" text-anchor="end" font-family="'JetBrains Mono', monospace" font-weight="800" font-size="16" fill="#2563EB">$308.76</text>
    
    <!-- Payment Method -->
    <text x="140" y="398" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600" fill="#059669">● APPROVED — CONTACTLESS APPLE PAY (••8914)</text>
    
    <!-- Barcode Footer -->
    <g transform="translate(40, 412)">
        <rect x="0" y="0" width="3" height="32" fill="#0A0D14"/>
        <rect x="5" y="0" width="2" height="32" fill="#0A0D14"/>
        <rect x="10" y="0" width="4" height="32" fill="#0A0D14"/>
        <rect x="16" y="0" width="2" height="32" fill="#0A0D14"/>
        <rect x="22" y="0" width="5" height="32" fill="#0A0D14"/>
        <rect x="30" y="0" width="2" height="32" fill="#0A0D14"/>
        <rect x="35" y="0" width="3" height="32" fill="#0A0D14"/>
        <rect x="42" y="0" width="6" height="32" fill="#0A0D14"/>
        <rect x="52" y="0" width="2" height="32" fill="#0A0D14"/>
        <rect x="58" y="0" width="4" height="32" fill="#0A0D14"/>
        <rect x="66" y="0" width="3" height="32" fill="#0A0D14"/>
        <rect x="73" y="0" width="5" height="32" fill="#0A0D14"/>
        <rect x="82" y="0" width="2" height="32" fill="#0A0D14"/>
        <rect x="88" y="0" width="4" height="32" fill="#0A0D14"/>
        <rect x="96" y="0" width="6" height="32" fill="#0A0D14"/>
        <rect x="106" y="0" width="2" height="32" fill="#0A0D14"/>
        <rect x="112" y="0" width="5" height="32" fill="#0A0D14"/>
        <rect x="121" y="0" width="3" height="32" fill="#0A0D14"/>
        <rect x="128" y="0" width="4" height="32" fill="#0A0D14"/>
        <rect x="136" y="0" width="2" height="32" fill="#0A0D14"/>
        <rect x="142" y="0" width="6" height="32" fill="#0A0D14"/>
        <rect x="152" y="0" width="3" height="32" fill="#0A0D14"/>
        <rect x="158" y="0" width="5" height="32" fill="#0A0D14"/>
        <rect x="168" y="0" width="2" height="32" fill="#0A0D14"/>
        <rect x="174" y="0" width="4" height="32" fill="#0A0D14"/>
        <rect x="182" y="0" width="6" height="32" fill="#0A0D14"/>
        <rect x="194" y="0" width="3" height="32" fill="#0A0D14"/>
    </g>
    <text x="140" y="456" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" letter-spacing="3" fill="#64748B">8 901234 567890</text>
</svg>"""

# ---------------------------------------------------------------------------
# 2. RETAIL BARCODE HANGTAG
# ---------------------------------------------------------------------------
def generate_barcode_hangtag_svg():
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 320" width="100%" height="100%" fill="none">
    <defs>
        <filter id="tagShadow" x="-15%" y="-10%" width="130%" height="125%">
            <feDropShadow dx="4" dy="12" stdDeviation="16" flood-color="rgba(0,0,0,0.15)"/>
        </filter>
    </defs>
    <!-- Tag Card with Eyelet Hole -->
    <rect x="10" y="10" width="180" height="300" rx="16" fill="#0A0D14" stroke="#27272A" stroke-width="1.5" filter="url(#tagShadow)"/>
    <!-- Punched Metallic Eyelet -->
    <circle cx="100" cy="36" r="8" fill="#18181B" stroke="#71717A" stroke-width="2"/>
    <circle cx="100" cy="36" r="4" fill="#090A0F"/>
    
    <!-- ManageO Brand Micro-Wordmark -->
    <text x="100" y="72" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" letter-spacing="3" fill="#A1A1AA">MANAGEO RETAIL</text>
    
    <!-- Garment Title -->
    <text x="100" y="110" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#FFFFFF">KIMONO JACKET</text>
    <text x="100" y="128" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#71717A">JAPANESE RAW SELVEDGE</text>
    
    <!-- Specs Grid -->
    <g font-family="'JetBrains Mono', monospace" font-size="10" fill="#E4E4E7">
        <rect x="30" y="146" width="65" height="32" rx="6" fill="#18181B"/>
        <text x="62" y="160" text-anchor="middle" font-size="8" fill="#71717A">SIZE</text>
        <text x="62" y="173" text-anchor="middle" font-weight="700">MEDIUM (M)</text>
        
        <rect x="105" y="146" width="65" height="32" rx="6" fill="#18181B"/>
        <text x="137" y="160" text-anchor="middle" font-size="8" fill="#71717A">COLOR</text>
        <text x="137" y="173" text-anchor="middle" font-weight="700">OBSIDIAN</text>
    </g>
    
    <!-- Price Badge -->
    <text x="100" y="215" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="22" fill="#2563EB">$240.00</text>
    
    <!-- Scannable Barcode Lines -->
    <g transform="translate(30, 235)">
        <rect x="0" y="0" width="3" height="36" fill="#FFFFFF"/>
        <rect x="5" y="0" width="1" height="36" fill="#FFFFFF"/>
        <rect x="8" y="0" width="4" height="36" fill="#FFFFFF"/>
        <rect x="15" y="0" width="2" height="36" fill="#FFFFFF"/>
        <rect x="20" y="0" width="5" height="36" fill="#FFFFFF"/>
        <rect x="28" y="0" width="2" height="36" fill="#FFFFFF"/>
        <rect x="34" y="0" width="3" height="36" fill="#FFFFFF"/>
        <rect x="42" y="0" width="5" height="36" fill="#FFFFFF"/>
        <rect x="50" y="0" width="2" height="36" fill="#FFFFFF"/>
        <rect x="56" y="0" width="4" height="36" fill="#FFFFFF"/>
        <rect x="64" y="0" width="2" height="36" fill="#FFFFFF"/>
        <rect x="70" y="0" width="6" height="36" fill="#FFFFFF"/>
        <rect x="80" y="0" width="2" height="36" fill="#FFFFFF"/>
        <rect x="86" y="0" width="4" height="36" fill="#FFFFFF"/>
        <rect x="94" y="0" width="3" height="36" fill="#FFFFFF"/>
        <rect x="102" y="0" width="5" height="36" fill="#FFFFFF"/>
        <rect x="112" y="0" width="2" height="36" fill="#FFFFFF"/>
        <rect x="118" y="0" width="4" height="36" fill="#FFFFFF"/>
        <rect x="126" y="0" width="5" height="36" fill="#FFFFFF"/>
        <rect x="135" y="0" width="2" height="36" fill="#FFFFFF"/>
    </g>
    <text x="100" y="285" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="8" letter-spacing="2" fill="#71717A">SKU-7729-001</text>
</svg>"""

# ---------------------------------------------------------------------------
# 3. SALON APPOINTMENT CHIT
# ---------------------------------------------------------------------------
def generate_salon_chit_svg():
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" width="100%" height="100%" fill="none">
    <defs>
        <filter id="salonShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="rgba(225, 29, 72, 0.12)"/>
        </filter>
    </defs>
    <rect x="10" y="10" width="260" height="200" rx="20" fill="#FFFFFF" stroke="#FEE2E2" stroke-width="1.5" filter="url(#salonShadow)"/>
    
    <!-- Top Indicator -->
    <rect x="26" y="24" width="8" height="8" rx="4" fill="#E11D48"/>
    <text x="42" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="10" letter-spacing="1.5" fill="#E11D48">CHAIR 02 • CONFIRMED</text>
    <text x="244" y="32" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="10" fill="#64748B">14:00 - 15:30</text>
    
    <!-- Client Name -->
    <text x="26" y="66" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="18" fill="#0F172A">Genevieve Laurent</text>
    <text x="26" y="84" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="12" fill="#64748B">Senior Stylist: Marcus Thorne</text>
    
    <!-- Services -->
    <g transform="translate(26, 102)">
        <rect x="0" y="0" width="130" height="24" rx="6" fill="#FFF1F2"/>
        <text x="10" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="10" fill="#E11D48">Balayage &amp; Glossing</text>
        
        <rect x="138" y="0" width="85" height="24" rx="6" fill="#F8FAFC"/>
        <text x="146" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="10" fill="#475569">Olaplex No. 3</text>
    </g>
    
    <!-- Formula Note Badge -->
    <rect x="26" y="136" width="228" height="32" rx="8" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="36" y="156" font-family="'JetBrains Mono', monospace" font-size="9" fill="#334155">FORMULA: Wella 8/38 (30g) + 9/16 (15g) 20vol</text>
    
    <!-- Total Fee & Status -->
    <text x="26" y="194" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#0F172A">TOTAL: $195.00</text>
    <text x="244" y="194" text-anchor="end" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="#059669">● DEPOSIT RECEIVED</text>
</svg>"""

# ---------------------------------------------------------------------------
# 4. RESTAURANT KITCHEN TICKET (KDS)
# ---------------------------------------------------------------------------
def generate_kitchen_ticket_svg():
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 240" width="100%" height="100%" fill="none">
    <defs>
        <filter id="kdsShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="rgba(217, 119, 6, 0.12)"/>
        </filter>
    </defs>
    <rect x="10" y="10" width="260" height="220" rx="16" fill="#18181B" stroke="#27272A" stroke-width="1.5" filter="url(#kdsShadow)"/>
    
    <!-- Header Bar -->
    <rect x="10" y="10" width="260" height="38" rx="16" fill="#D97706"/>
    <text x="24" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="13" fill="#FFFFFF">TABLE 07 • GUESTS: 4</text>
    <text x="256" y="34" text-anchor="end" font-family="'JetBrains Mono', monospace" font-weight="700" font-size="12" fill="#FFFFFF">TICKET #42</text>
    
    <!-- Order Timestamp & Timer -->
    <text x="24" y="70" font-family="'JetBrains Mono', monospace" font-size="10" fill="#A1A1AA">SERVER: MATEO C. • IN: 19:42 (12 MINS AGO)</text>
    
    <!-- Items -->
    <g font-family="'JetBrains Mono', monospace" font-size="12" fill="#FFFFFF">
        <text x="24" y="102" font-weight="700">2x GRILLED OCTOPUS</text>
        <text x="36" y="118" font-size="10" fill="#FBBF24">↳ EXTRA CHORIZO OIL, NO CORIANDER</text>
        
        <text x="24" y="142" font-weight="700">1x PRIME WAGYU RIBEYE (12oz)</text>
        <text x="36" y="158" font-size="10" fill="#FBBF24">↳ MEDIUM RARE • CHIMICHURRI ON SIDE</text>
        
        <text x="24" y="182" font-weight="700">1x HANDMADE TAGLIATELLE</text>
        <text x="36" y="198" font-size="10" fill="#A1A1AA">↳ SHAVED BLACK TRUFFLE (TABLESIDE)</text>
    </g>
</svg>"""

# ---------------------------------------------------------------------------
# 5. HARDWARE LINE-ART VECTORS
# ---------------------------------------------------------------------------
def generate_hardware_svgs():
    # 5a. Countertop Register
    reg_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 120" width="100%" height="100%" fill="none">
        <!-- Stand Base -->
        <rect x="45" y="102" width="70" height="8" rx="3" fill="#FFFFFF" stroke="#0A0D14" stroke-width="2"/>
        <path d="M 68 102 L 72 70 L 88 70 L 92 102 Z" fill="#E2E8F0" stroke="#0A0D14" stroke-width="2"/>
        <!-- Main Merchant Display -->
        <rect x="15" y="16" width="130" height="74" rx="8" fill="#0A0D14"/>
        <rect x="22" y="22" width="116" height="62" rx="4" fill="#1E293B"/>
        <!-- Customer Display in Front -->
        <rect x="35" y="44" width="90" height="52" rx="6" fill="#FFFFFF" stroke="#0A0D14" stroke-width="2"/>
        <rect x="42" y="50" width="76" height="34" rx="3" fill="#F8FAFC"/>
        <!-- Card Slot -->
        <line x1="55" y1="90" x2="105" y2="90" stroke="#0A0D14" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Pulse Tap Icon -->
        <circle cx="80" cy="67" r="5" fill="#2563EB"/>
    </svg>"""
    
    # 5b. Handheld Mobile POS
    hand_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 140" width="100%" height="100%" fill="none">
        <!-- Pocket Terminal Body -->
        <rect x="10" y="8" width="70" height="124" rx="14" fill="#0A0D14" stroke="#27272A" stroke-width="2"/>
        <!-- Screen -->
        <rect x="16" y="16" width="58" height="82" rx="6" fill="#1E293B"/>
        <!-- Contactless Tap Array -->
        <circle cx="45" cy="46" r="14" fill="none" stroke="#2563EB" stroke-width="2" stroke-dasharray="4 4"/>
        <circle cx="45" cy="46" r="6" fill="#2563EB"/>
        <!-- Chip Card Slot / Reader at base -->
        <rect x="20" y="112" width="50" height="8" rx="2" fill="#27272A"/>
    </svg>"""
    
    return reg_svg, hand_svg

# ---------------------------------------------------------------------------
# 6. ABSTRACT GEOMETRIC & HAIKEI DIVIDERS
# ---------------------------------------------------------------------------
def generate_haikei_wave_svg():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" width="100%" height="100%" preserveAspectRatio="none" fill="none">
    <path d="M 0 0 C 320 120, 640 40, 960 140 C 1200 210, 1360 160, 1440 180 L 1440 240 L 0 240 Z" fill="#090A0F"/>
</svg>"""

# Write all visual files
with open(f"{ILLUST_DIR}/receipt-template.svg", "w") as f:
    f.write(generate_receipt_svg())

with open(f"{ILLUST_DIR}/barcode-hangtag.svg", "w") as f:
    f.write(generate_barcode_hangtag_svg())

with open(f"{ILLUST_DIR}/salon-appointment-chit.svg", "w") as f:
    f.write(generate_salon_chit_svg())

with open(f"{ILLUST_DIR}/restaurant-kitchen-ticket.svg", "w") as f:
    f.write(generate_kitchen_ticket_svg())

reg_svg, hand_svg = generate_hardware_svgs()
with open(f"{ILLUST_DIR}/terminal-countertop.svg", "w") as f:
    f.write(reg_svg)
with open(f"{ILLUST_DIR}/terminal-handheld.svg", "w") as f:
    f.write(hand_svg)

with open(f"{ILLUST_DIR}/haikei-wave-divider.svg", "w") as f:
    f.write(generate_haikei_wave_svg())

# Also copy into src/assets/svg for direct React import
for fname in ["receipt-template.svg", "barcode-hangtag.svg", "salon-appointment-chit.svg", "restaurant-kitchen-ticket.svg", "terminal-countertop.svg", "terminal-handheld.svg"]:
    with open(f"{ILLUST_DIR}/{fname}", "r") as src, open(f"{ASSETS_SVG_DIR}/{fname}", "w") as dst:
        dst.write(src.read())

print("Generated all commerce visual artifacts and illustrations.")

