#!/usr/bin/env python3
"""
MANAGEO BRAND ASSET GENERATOR
Generates mathematically precise vector SVG files for all 6 logo exploration concepts
and the complete set of final production brand deliverables.
"""

import os
import math

OUTPUT_DIR = "public/brand"
EXPLORATION_DIR = "public/brand/exploration"
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(EXPLORATION_DIR, exist_ok=True)

# ---------------------------------------------------------------------------
# COLOR PALETTE CONSTANTS
# ---------------------------------------------------------------------------
COLOR_BRAND_BLUE = "#2563EB"       # Core Electric Cobalt
COLOR_BRAND_BLUE_GLOW = "#3B82F6"  # Lighter hover/glow
COLOR_OBSIDIAN = "#090A0F"         # Deepest Canvas
COLOR_OBSIDIAN_TEXT = "#0A0D14"    # Primary Dark Text
COLOR_WHITE = "#FFFFFF"            # Pure White
COLOR_SLATE_400 = "#94A3B8"        # Subtle secondary
COLOR_SLATE_800 = "#1E293B"        # Dark surface

# ---------------------------------------------------------------------------
# CONCEPT 1: THE ORBIT NEXUS
# ---------------------------------------------------------------------------
def get_orbit_symbol(cx=32, cy=32, scale=1.0, dark=False):
    fill_ring = COLOR_WHITE if dark else COLOR_OBSIDIAN_TEXT
    accent = COLOR_BRAND_BLUE
    return f"""
    <g transform="translate({cx-32*scale}, {cy-32*scale}) scale({scale})">
        <!-- Outer Orbit Arc -->
        <path d="M 32 6 A 26 26 0 1 1 10 44" fill="none" stroke="{fill_ring}" stroke-width="5.5" stroke-linecap="round"/>
        <!-- Inner Counter Arc -->
        <path d="M 32 16 A 16 16 0 0 1 48 32" fill="none" stroke="{accent}" stroke-width="4.5" stroke-linecap="round"/>
        <!-- Orbiting Core Node at 45 deg -->
        <circle cx="50" cy="14" r="5" fill="{accent}"/>
        <!-- Center Focus Node -->
        <circle cx="32" cy="32" r="3.5" fill="{fill_ring}"/>
    </g>
    """

# ---------------------------------------------------------------------------
# CONCEPT 2: THE CONTINUOUS LOOP / KINETIC INFINITY
# ---------------------------------------------------------------------------
def get_loop_symbol(cx=32, cy=32, scale=1.0, dark=False):
    c1 = COLOR_BRAND_BLUE
    c2 = COLOR_WHITE if dark else COLOR_OBSIDIAN_TEXT
    return f"""
    <g transform="translate({cx-32*scale}, {cy-32*scale}) scale({scale})">
        <!-- Continuous Dual-Ribbon Loop -->
        <path d="M 18 14 C 36 6, 50 18, 48 34 C 46 48, 28 54, 18 44 C 8 34, 8 20, 18 14 Z" 
              fill="none" stroke="{c2}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Inner Kinetic Path -->
        <path d="M 24 22 C 34 16, 44 24, 40 36 C 36 44, 26 44, 22 36" 
              fill="none" stroke="{c1}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="38" cy="20" r="3.5" fill="{c1}"/>
    </g>
    """

# ---------------------------------------------------------------------------
# CONCEPT 3: THE TRILATERAL CORE / APERTURE O (Retail, Salon, Restaurant)
# ---------------------------------------------------------------------------
def get_aperture_symbol(cx=32, cy=32, scale=1.0, dark=False):
    c_base = COLOR_WHITE if dark else COLOR_OBSIDIAN_TEXT
    c_acc = COLOR_BRAND_BLUE
    return f"""
    <g transform="translate({cx-32*scale}, {cy-32*scale}) scale({scale})">
        <!-- Sector 1: Retail (Top-Right) -->
        <path d="M 32 8 A 24 24 0 0 1 52.78 44 L 41.5 37.5 A 11 11 0 0 0 32 19 Z" fill="{c_acc}"/>
        <!-- Sector 2: Salon (Bottom) -->
        <path d="M 49.32 46 A 24 24 0 0 1 14.68 46 L 22.5 39.5 A 11 11 0 0 0 41.5 39.5 Z" fill="{c_base}" opacity="0.85"/>
        <!-- Sector 3: Restaurant (Top-Left) -->
        <path d="M 11.22 44 A 24 24 0 0 1 32 8 L 32 19 A 11 11 0 0 0 22.5 37.5 Z" fill="{c_base}"/>
        <!-- Central Negative Space Void -->
        <circle cx="32" cy="32" r="5" fill="{COLOR_OBSIDIAN if dark else COLOR_WHITE}"/>
    </g>
    """

# ---------------------------------------------------------------------------
# CONCEPT 4: THE TERMINAL NOTCH / PULSE O (WINNING DIRECTION)
# ---------------------------------------------------------------------------
def get_pulse_symbol(cx=32, cy=32, scale=1.0, dark=False, monochrome=False):
    ring_color = COLOR_WHITE if dark else (COLOR_OBSIDIAN_TEXT if not monochrome else "#000000")
    pulse_color = ring_color if monochrome else COLOR_BRAND_BLUE
    return f"""
    <g transform="translate({cx-32*scale}, {cy-32*scale}) scale({scale})">
        <!-- Outer Precision Ring with 45-degree Notch at Top-Right -->
        <!-- Starts at 25 deg, sweeps clockwise 310 deg to 85 deg -->
        <path d="M 48.97 15.03 A 24 24 0 1 1 43.6 10.4" 
              fill="none" stroke="{ring_color}" stroke-width="6.5" stroke-linecap="round"/>
        <!-- Pulse Core: High-velocity transaction node positioned in the aperture -->
        <circle cx="49.5" cy="14.5" r="4.8" fill="{pulse_color}"/>
        <!-- Subtle Inner Focus Ring -->
        <circle cx="32" cy="32" r="8" fill="none" stroke="{pulse_color}" stroke-width="2" stroke-dasharray="3 3" opacity="0.4"/>
    </g>
    """

# ---------------------------------------------------------------------------
# CONCEPT 5: THE MERIDIAN / DUAL-HORIZON O
# ---------------------------------------------------------------------------
def get_meridian_symbol(cx=32, cy=32, scale=1.0, dark=False):
    c1 = COLOR_BRAND_BLUE
    c2 = COLOR_WHITE if dark else COLOR_OBSIDIAN_TEXT
    return f"""
    <g transform="translate({cx-32*scale}, {cy-32*scale}) scale({scale})">
        <!-- Upper Arc: Storefront Horizon -->
        <path d="M 10 30 A 22 22 0 0 1 54 30 L 46 30 A 14 14 0 0 0 18 30 Z" fill="{c1}"/>
        <!-- Lower Base: Back-Office Foundation -->
        <path d="M 10 34 A 22 22 0 0 0 54 34 L 46 34 A 14 14 0 0 1 18 34 Z" fill="{c2}"/>
        <!-- Dynamic Center Meridian Gap with Pulse Node -->
        <circle cx="32" cy="32" r="3" fill="{c1}"/>
    </g>
    """

# ---------------------------------------------------------------------------
# CONCEPT 6: THE ARCHITECTURAL MONOGRAM (M+O INTEGRATED)
# ---------------------------------------------------------------------------
def get_monogram_symbol(cx=32, cy=32, scale=1.0, dark=False):
    outer = COLOR_BRAND_BLUE
    inner = COLOR_WHITE if dark else COLOR_OBSIDIAN_TEXT
    return f"""
    <g transform="translate({cx-32*scale}, {cy-32*scale}) scale({scale})">
        <!-- Rounded Squircle O Base -->
        <rect x="8" y="8" width="48" height="48" rx="14" fill="none" stroke="{outer}" stroke-width="5.5"/>
        <!-- Precision M Core -->
        <path d="M 18 42 L 18 22 L 32 35 L 46 22 L 46 42" 
              fill="none" stroke="{inner}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    """

# ---------------------------------------------------------------------------
# MASTER VECTOR TYPOGRAPHY FOR "Manage"
# Engineered with geometric sans-serif cuts, optical kerning, and baseline alignment
# ---------------------------------------------------------------------------
def get_manage_wordmark_paths(color):
    """
    Returns mathematically crafted vector paths for the letters 'Manage'
    viewBox relative to height=64, X spanning 0 to 205.
    Cap Height: 38px (Y: 12 to 50), x-height: 27px (Y: 23 to 50)
    """
    return f"""
    <g fill="{color}">
        <!-- M: Strong vertical stems and crisp diagonal vertex -->
        <path d="M 10 50 L 10 12 L 17.5 12 L 28.5 35.5 L 39.5 12 L 47 12 L 47 50 L 40 50 L 40 22.5 L 31 42 L 26 42 L 17 22.5 L 17 50 Z"/>
        
        <!-- a: Modern geometric single-story lowercase 'a' -->
        <path d="M 74 24 L 74 48 C 74 49.5 74.5 50 76.5 50 L 80 50 L 80 55 C 77 55.5 74 55.5 71.5 54.5 C 68.5 53 67.5 50 67.5 46.5 C 65 49 61.5 51 57 51 C 49.5 51 44.5 46 44.5 38.5 C 44.5 30.5 51 26 67 25.5 L 67 24.5 C 67 20 63.5 17.5 57.5 17.5 C 52.5 17.5 48.5 19.5 46 21.5 L 43.5 16.5 C 47.5 13.5 53 12 58.5 12 C 68.5 12 74 16.5 74 24 Z M 67 30 C 56.5 30.5 52 33 52 38.5 C 52 42.5 55 45 59.5 45 C 64 45 67 42 67 37 Z"/>
        
        <!-- n: Clean vertical stem with tight geometric shoulder -->
        <path d="M 87 50 L 87 13 L 94 13 L 94 20 C 97 15 102 12 109 12 C 117.5 12 122 17.5 122 27 L 122 50 L 115 50 L 115 28.5 C 115 21.5 112 18 106 18 C 99.5 18 94 22.5 94 31 L 94 50 Z"/>
        
        <!-- a: Second matching 'a' -->
        <path d="M 154 24 L 154 48 C 154 49.5 154.5 50 156.5 50 L 160 50 L 160 55 C 157 55.5 154 55.5 151.5 54.5 C 148.5 53 147.5 50 147.5 46.5 C 145 49 141.5 51 137 51 C 129.5 51 124.5 46 124.5 38.5 C 124.5 30.5 131 26 147 25.5 L 147 24.5 C 147 20 143.5 17.5 137.5 17.5 C 132.5 17.5 128.5 19.5 126 21.5 L 123.5 16.5 C 127.5 13.5 133 12 138.5 12 C 148.5 12 154 16.5 154 24 Z M 147 30 C 136.5 30.5 132 33 132 38.5 C 132 42.5 135 45 139.5 45 C 144 45 147 42 147 37 Z"/>
        
        <!-- g: Modern crisp open lowercase 'g' with balanced descender -->
        <path d="M 189 13 L 189 48 C 189 57.5 182.5 62 171.5 62 C 164.5 62 159 59.5 155.5 56.5 L 158.5 51 C 161.5 53.5 166 55.5 171 55.5 C 178 55.5 182 52.5 182 46.5 L 182 43 C 179 47 174.5 49 168.5 49 C 159.5 49 154 42 154 31 C 154 20 160 12 169 12 C 175 12 179 14.5 182 18.5 L 182 13 Z M 182 28.5 C 182 22 178 18.5 172 18.5 C 166 18.5 161.5 23 161.5 31 C 161.5 39 166 43 172 43 C 178 43 182 39 182 32 Z"/>
        
        <!-- e: Refined horizontal crossbar with generous eye -->
        <path d="M 221 34 L 199 34 C 199.5 40 203.5 44 209.5 44 C 214 44 217.5 42 220 39.5 L 223.5 44 C 220 48 215 50.5 208.5 50.5 C 197 50.5 192 42 192 31 C 192 20 198 12 208.5 12 C 218.5 12 222.5 19.5 222.5 29 C 222.5 31 222 33 221 34 Z M 215 28.5 C 214.5 22.5 212 18 208 18 C 203 18 199.5 22.5 199 28.5 Z"/>
    </g>
    """

# ---------------------------------------------------------------------------
# FULL WORDMARK BUILDER
# ---------------------------------------------------------------------------
def create_full_wordmark(concept_func, name, symbol_scale=0.72, dark=False, monochrome=False):
    bg_fill = COLOR_OBSIDIAN if dark else ("none" if not monochrome else "none")
    word_color = COLOR_WHITE if dark else (COLOR_OBSIDIAN_TEXT if not monochrome else "#000000")
    
    # Position: "Manage" ends around X=225, "O" symbol centers at X=258, Y=31
    symbol_svg = concept_func(cx=260, cy=31, scale=symbol_scale, dark=dark)
    if monochrome:
        # override colors for monochrome
        symbol_svg = symbol_svg.replace(COLOR_BRAND_BLUE, word_color)
    
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 64" width="100%" height="100%" fill="none">
    {f'<rect width="310" height="64" fill="{bg_fill}"/>' if dark else ''}
    {get_manage_wordmark_paths(word_color)}
    {symbol_svg}
</svg>"""
    return svg

# ---------------------------------------------------------------------------
# GENERATE EXPLORATION CONCEPTS
# ---------------------------------------------------------------------------
concepts = [
    ("concept-1-orbit", get_orbit_symbol, "The Orbit Nexus"),
    ("concept-2-loop", get_loop_symbol, "The Continuous Loop"),
    ("concept-3-aperture", get_aperture_symbol, "The Trilateral Core"),
    ("concept-4-pulse", get_pulse_symbol, "The Terminal Pulse"),
    ("concept-5-meridian", get_meridian_symbol, "The Dual Meridian"),
    ("concept-6-monogram", get_monogram_symbol, "The Monogram Architecture"),
]

for slug, func, title in concepts:
    # 1. Full Wordmark Light
    with open(f"{EXPLORATION_DIR}/{slug}-wordmark-light.svg", "w") as f:
        f.write(create_full_wordmark(func, slug, dark=False))
    
    # 2. Full Wordmark Dark
    with open(f"{EXPLORATION_DIR}/{slug}-wordmark-dark.svg", "w") as f:
        f.write(create_full_wordmark(func, slug, dark=True))
        
    # 3. Standalone Symbol Light (64x64)
    with open(f"{EXPLORATION_DIR}/{slug}-symbol-light.svg", "w") as f:
        f.write(f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" fill="none">
            {func(cx=32, cy=32, scale=0.92, dark=False)}
        </svg>""")
        
    # 4. Standalone Symbol Dark (64x64)
    with open(f"{EXPLORATION_DIR}/{slug}-symbol-dark.svg", "w") as f:
        f.write(f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" fill="none">
            <rect width="64" height="64" rx="14" fill="{COLOR_OBSIDIAN}"/>
            {func(cx=32, cy=32, scale=0.92, dark=True)}
        </svg>""")

print("Generated 6 exploration concepts in light/dark/symbol variants.")

# ---------------------------------------------------------------------------
# GENERATE WINNING LOGO PRODUCTION DELIVERABLES (CONCEPT 4: THE TERMINAL PULSE)
# ---------------------------------------------------------------------------

# 1. logo-primary.svg (Default brand mark for light backgrounds)
with open(f"{OUTPUT_DIR}/logo-primary.svg", "w") as f:
    f.write(create_full_wordmark(get_pulse_symbol, "primary", dark=False))

# 2. logo-dark.svg (For dark headers, obsidian sections, terminal hardware)
with open(f"{OUTPUT_DIR}/logo-dark.svg", "w") as f:
    f.write(create_full_wordmark(get_pulse_symbol, "dark", dark=True))

# 3. logo-light.svg (Identical to primary, transparent background for daylight surfaces)
with open(f"{OUTPUT_DIR}/logo-light.svg", "w") as f:
    f.write(create_full_wordmark(get_pulse_symbol, "light", dark=False))

# 4. logo-monochrome.svg (Pure single-color black for receipts, stamps, legal documents)
with open(f"{OUTPUT_DIR}/logo-monochrome.svg", "w") as f:
    f.write(create_full_wordmark(get_pulse_symbol, "monochrome", dark=False, monochrome=True))

# 5. logo-symbol.svg (Standalone brand mark on transparent canvas)
with open(f"{OUTPUT_DIR}/logo-symbol.svg", "w") as f:
    f.write(f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" fill="none">
    {get_pulse_symbol(cx=32, cy=32, scale=0.96, dark=False)}
</svg>""")

# 6. logo-horizontal.svg (Generous canvas horizontal lockup with clearspace)
with open(f"{OUTPUT_DIR}/logo-horizontal.svg", "w") as f:
    f.write(f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 72" width="100%" height="100%" fill="none">
    <g transform="translate(15, 4)">
        {get_manage_wordmark_paths(COLOR_OBSIDIAN_TEXT)}
        {get_pulse_symbol(cx=260, cy=31, scale=0.72, dark=False)}
    </g>
</svg>""")

# 7. logo-compact.svg (Stacked mark for small square footprints, receipt headers, avatar)
with open(f"{OUTPUT_DIR}/logo-compact.svg", "w") as f:
    f.write(f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%" fill="none">
    <!-- Standalone Symbol centered top -->
    {get_pulse_symbol(cx=60, cy=46, scale=1.0, dark=False)}
    <!-- ManageO Typographic Subtitle -->
    <text x="60" y="104" text-anchor="middle" font-family="'Plus Jakarta Sans', system-ui, sans-serif" 
          font-weight="800" font-size="16" letter-spacing="1.5" fill="{COLOR_OBSIDIAN_TEXT}">MANAGEO</text>
</svg>""")

# 8. favicon.svg (Pixel-perfect 32x32 vector favicon)
with open(f"{OUTPUT_DIR}/favicon.svg", "w") as f:
    f.write(f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">
    <!-- Outer Precision Ring -->
    <path d="M 24.5 7.5 A 12 12 0 1 1 21.8 5.2" 
          fill="none" stroke="{COLOR_OBSIDIAN}" stroke-width="3.6" stroke-linecap="round"/>
    <!-- High-Chroma Pulse Dot -->
    <circle cx="24.8" cy="7.2" r="2.8" fill="{COLOR_BRAND_BLUE}"/>
</svg>""")

# Also copy favicon to public/favicon.svg
with open("public/favicon.svg", "w") as f:
    f.write(f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">
    <path d="M 24.5 7.5 A 12 12 0 1 1 21.8 5.2" 
          fill="none" stroke="{COLOR_OBSIDIAN}" stroke-width="3.6" stroke-linecap="round"/>
    <circle cx="24.8" cy="7.2" r="2.8" fill="{COLOR_BRAND_BLUE}"/>
</svg>""")

# 9. app-icon.svg (macOS / iOS / Android Squircle Container)
with open(f"{OUTPUT_DIR}/app-icon.svg", "w") as f:
    f.write(f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="none">
    <defs>
        <!-- Premium Radial Background Gradient -->
        <linearGradient id="appIconBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1E2330"/>
            <stop offset="100%" stop-color="#090A0F"/>
        </linearGradient>
        <!-- Inner Border Lighting -->
        <linearGradient id="innerStroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(255, 255, 255, 0.2)"/>
            <stop offset="100%" stop-color="rgba(255, 255, 255, 0.04)"/>
        </linearGradient>
        <!-- Subtle Glow Filter -->
        <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
    </defs>
    <!-- Squircle Container -->
    <rect x="4" y="4" width="120" height="120" rx="28" fill="url(#appIconBg)" stroke="url(#innerStroke)" stroke-width="1.5"/>
    <!-- Centered Pulse Symbol -->
    {get_pulse_symbol(cx=64, cy=64, scale=1.45, dark=True)}
</svg>""")

print("Generated all 9 production brand SVG deliverables.")

