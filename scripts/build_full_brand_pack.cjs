const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUT_DIR = '/tmp/manageo-brand-assets';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const FINAL_ZIP = '/Users/macbookpro/Documents/workspace/POS-V4/ManageO-Brand-Assets.zip';

// Ensure directories exist
const dirs = [
  'svg',
  'png/1x',
  'png/2x',
  'png/4x',
  'png/favicons',
  'react',
  'vue',
  'html-snippet',
];

for (const d of dirs) {
  fs.mkdirSync(path.join(OUT_DIR, d), { recursive: true });
}

// ==========================================
// 1. GENERATE SVGS
// ==========================================

const svgPrimary = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="370" height="64" viewBox="0 0 370 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&amp;display=swap');
      .manage-text {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 44px;
        font-weight: 800;
        letter-spacing: -1.2px;
      }
      .pos-text {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 12.5px;
        font-weight: 800;
        letter-spacing: 0.5px;
      }
    </style>
    <linearGradient id="manageOGradientPrimary" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0062FF" />
      <stop offset="50%" stop-color="#008CFF" />
      <stop offset="100%" stop-color="#00D5FF" />
    </linearGradient>
  </defs>

  <!-- Speed Cart Icon -->
  <g transform="translate(4, 6) scale(0.82)">
    <path d="M 6 22 L 20 22" stroke="#0072F5" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 2 31 L 24 31" stroke="#0072F5" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 10 40 L 20 40" stroke="#0072F5" stroke-width="4.5" stroke-linecap="round" />
    <path
      d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
      stroke="#0072F5"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <circle cx="42" cy="53" r="4.5" fill="#0072F5" />
    <circle cx="61" cy="53" r="4.5" fill="#0072F5" />
  </g>

  <!-- Wordmark Text: Manage -->
  <text x="84" y="44" fill="#0F172A" class="manage-text">Manage</text>

  <!-- Ring O with Vibrant Royal-to-Cyan Gradient -->
  <circle
    cx="269"
    cy="28.5"
    r="14.5"
    fill="none"
    stroke="url(#manageOGradientPrimary)"
    stroke-width="7.8"
  />

  <!-- Pill Badge: POS -->
  <g transform="translate(304, 18)">
    <rect width="52" height="24" rx="7" fill="#EEF4FF" />
    <text x="26" y="17" fill="#1D4ED8" class="pos-text" text-anchor="middle">POS</text>
  </g>
</svg>`;

const svgDark = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="370" height="64" viewBox="0 0 370 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&amp;display=swap');
      .manage-text-dark {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 44px;
        font-weight: 800;
        letter-spacing: -1.2px;
      }
      .pos-text-dark {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 12.5px;
        font-weight: 800;
        letter-spacing: 0.5px;
      }
    </style>
    <linearGradient id="manageOGradientDark" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0062FF" />
      <stop offset="50%" stop-color="#008CFF" />
      <stop offset="100%" stop-color="#00D5FF" />
    </linearGradient>
  </defs>

  <!-- Speed Cart Icon -->
  <g transform="translate(4, 6) scale(0.82)">
    <path d="M 6 22 L 20 22" stroke="#38BDF8" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 2 31 L 24 31" stroke="#38BDF8" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 10 40 L 20 40" stroke="#38BDF8" stroke-width="4.5" stroke-linecap="round" />
    <path
      d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
      stroke="#38BDF8"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <circle cx="42" cy="53" r="4.5" fill="#38BDF8" />
    <circle cx="61" cy="53" r="4.5" fill="#38BDF8" />
  </g>

  <!-- Wordmark Text: Manage (White) -->
  <text x="84" y="44" fill="#FFFFFF" class="manage-text-dark">Manage</text>

  <!-- Ring O with Vibrant Royal-to-Cyan Gradient -->
  <circle
    cx="269"
    cy="28.5"
    r="14.5"
    fill="none"
    stroke="url(#manageOGradientDark)"
    stroke-width="7.8"
  />

  <!-- Pill Badge: POS (Dark) -->
  <g transform="translate(304, 18)">
    <rect width="52" height="24" rx="7" fill="#1E293B" stroke="#334155" stroke-width="1" />
    <text x="26" y="17" fill="#60A5FA" class="pos-text-dark" text-anchor="middle">POS</text>
  </g>
</svg>`;

const svgNoBadge = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="305" height="64" viewBox="0 0 305 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&amp;display=swap');
      .manage-text {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 44px;
        font-weight: 800;
        letter-spacing: -1.2px;
      }
    </style>
    <linearGradient id="manageOGradientPrimary" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0062FF" />
      <stop offset="50%" stop-color="#008CFF" />
      <stop offset="100%" stop-color="#00D5FF" />
    </linearGradient>
  </defs>

  <!-- Speed Cart Icon -->
  <g transform="translate(4, 6) scale(0.82)">
    <path d="M 6 22 L 20 22" stroke="#0072F5" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 2 31 L 24 31" stroke="#0072F5" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 10 40 L 20 40" stroke="#0072F5" stroke-width="4.5" stroke-linecap="round" />
    <path
      d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
      stroke="#0072F5"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <circle cx="42" cy="53" r="4.5" fill="#0072F5" />
    <circle cx="61" cy="53" r="4.5" fill="#0072F5" />
  </g>

  <!-- Wordmark Text: Manage -->
  <text x="84" y="44" fill="#0F172A" class="manage-text">Manage</text>

  <!-- Ring O with Vibrant Royal-to-Cyan Gradient -->
  <circle
    cx="269"
    cy="28.5"
    r="14.5"
    fill="none"
    stroke="url(#manageOGradientPrimary)"
    stroke-width="7.8"
  />
</svg>`;

const svgNoBadgeDark = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="305" height="64" viewBox="0 0 305 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&amp;display=swap');
      .manage-text-dark {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 44px;
        font-weight: 800;
        letter-spacing: -1.2px;
      }
    </style>
    <linearGradient id="manageOGradientDark" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0062FF" />
      <stop offset="50%" stop-color="#008CFF" />
      <stop offset="100%" stop-color="#00D5FF" />
    </linearGradient>
  </defs>

  <!-- Speed Cart Icon -->
  <g transform="translate(4, 6) scale(0.82)">
    <path d="M 6 22 L 20 22" stroke="#38BDF8" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 2 31 L 24 31" stroke="#38BDF8" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 10 40 L 20 40" stroke="#38BDF8" stroke-width="4.5" stroke-linecap="round" />
    <path
      d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
      stroke="#38BDF8"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <circle cx="42" cy="53" r="4.5" fill="#38BDF8" />
    <circle cx="61" cy="53" r="4.5" fill="#38BDF8" />
  </g>

  <!-- Wordmark Text: Manage -->
  <text x="84" y="44" fill="#FFFFFF" class="manage-text-dark">Manage</text>

  <!-- Ring O with Vibrant Royal-to-Cyan Gradient -->
  <circle
    cx="269"
    cy="28.5"
    r="14.5"
    fill="none"
    stroke="url(#manageOGradientDark)"
    stroke-width="7.8"
  />
</svg>`;

const svgSymbolPrimary = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 6 22 L 20 22" stroke="#0072F5" stroke-width="4.5" stroke-linecap="round" />
  <path d="M 2 31 L 24 31" stroke="#0072F5" stroke-width="4.5" stroke-linecap="round" />
  <path d="M 10 40 L 20 40" stroke="#0072F5" stroke-width="4.5" stroke-linecap="round" />
  <path
    d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
    stroke="#0072F5"
    stroke-width="5.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
  />
  <circle cx="42" cy="53" r="4.5" fill="#0072F5" />
  <circle cx="61" cy="53" r="4.5" fill="#0072F5" />
</svg>`;

const svgSymbolWhite = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 6 22 L 20 22" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" />
  <path d="M 2 31 L 24 31" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" />
  <path d="M 10 40 L 20 40" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" />
  <path
    d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
    stroke="#FFFFFF"
    stroke-width="5.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
  />
  <circle cx="42" cy="53" r="4.5" fill="#FFFFFF" />
  <circle cx="61" cy="53" r="4.5" fill="#FFFFFF" />
</svg>`;

const svgFavicon = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0062FF" />
      <stop offset="100%" stop-color="#00D5FF" />
    </linearGradient>
  </defs>
  <g transform="translate(-4, 0) scale(0.92)">
    <path d="M 8 22 L 20 22" stroke="url(#favGrad)" stroke-width="4.8" stroke-linecap="round" />
    <path d="M 4 31 L 24 31" stroke="url(#favGrad)" stroke-width="4.8" stroke-linecap="round" />
    <path d="M 12 40 L 20 40" stroke="url(#favGrad)" stroke-width="4.8" stroke-linecap="round" />
    <path
      d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 74 20"
      stroke="url(#favGrad)"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <circle cx="42" cy="53" r="4.8" fill="url(#favGrad)" />
    <circle cx="60" cy="53" r="4.8" fill="url(#favGrad)" />
  </g>
</svg>`;

const svgAppIcon = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="appBg" cx="50%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#1E293B" />
      <stop offset="100%" stop-color="#0B132B" />
    </radialGradient>
    <linearGradient id="cartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0062FF" />
      <stop offset="100%" stop-color="#00D5FF" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="115" fill="url(#appBg)" />
  <rect x="2" y="2" width="508" height="508" rx="113" stroke="rgba(255,255,255,0.12)" stroke-width="4" fill="none" />
  
  <g transform="translate(86, 126) scale(4.2)">
    <path d="M 6 22 L 20 22" stroke="url(#cartGrad)" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 2 31 L 24 31" stroke="url(#cartGrad)" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 10 40 L 20 40" stroke="url(#cartGrad)" stroke-width="4.5" stroke-linecap="round" />
    <path
      d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
      stroke="url(#cartGrad)"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <circle cx="42" cy="53" r="4.5" fill="url(#cartGrad)" />
    <circle cx="61" cy="53" r="4.5" fill="url(#cartGrad)" />
  </g>
</svg>`;

const svgMap = {
  'svg/manageo-logo-primary.svg': svgPrimary,
  'svg/manageo-logo-dark.svg': svgDark,
  'svg/manageo-logo-nobadge.svg': svgNoBadge,
  'svg/manageo-logo-nobadge-dark.svg': svgNoBadgeDark,
  'svg/manageo-symbol-primary.svg': svgSymbolPrimary,
  'svg/manageo-symbol-white.svg': svgSymbolWhite,
  'svg/favicon.svg': svgFavicon,
  'svg/app-icon.svg': svgAppIcon,
};

for (const [relPath, content] of Object.entries(svgMap)) {
  fs.writeFileSync(path.join(OUT_DIR, relPath), content.trim(), 'utf8');
}
console.log('✔ SVGs saved.');

// ==========================================
// 2. GENERATE REACT COMPONENT
// ==========================================

const reactComponent = `import React from 'react';

export interface ManageOLogoProps {
  /**
   * Theme variant:
   * - 'primary': Dark text for daylight/white backgrounds (default)
   * - 'dark': White text and cyan cart for dark/navy backgrounds
   * - 'symbol': Just the speed shopping cart icon
   * - 'monochrome': Solid black (or white in dark) for thermal receipts/stamps
   */
  variant?: 'primary' | 'dark' | 'symbol' | 'monochrome';
  /**
   * Height in pixels (number) or pre-set size string:
   * - 'sm': 24px
   * - 'md': 36px (default)
   * - 'lg': 48px
   * - 'xl': 60px
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  /**
   * Whether to display the [ POS ] pill badge on the right (default: true)
   */
  showBadge?: boolean;
  /**
   * Optional custom CSS class name for the wrapper
   */
  className?: string;
}

export const ManageOLogo: React.FC<ManageOLogoProps> = ({
  variant = 'primary',
  size = 'md',
  showBadge = true,
  className = '',
}) => {
  const heightMap: Record<string, number> = { sm: 24, md: 36, lg: 48, xl: 60 };
  const pixelHeight = typeof size === 'number' ? size : heightMap[size] || 36;

  const isDark = variant === 'dark';
  const isMono = variant === 'monochrome';
  const textColor = isDark ? '#FFFFFF' : (isMono ? '#000000' : '#0F172A');
  const cartColor = isDark ? '#38BDF8' : (isMono ? textColor : '#0072F5');
  const badgeBg = isDark ? '#1E293B' : '#EEF4FF';
  const badgeText = isDark ? '#60A5FA' : '#1D4ED8';

  // Standalone Symbol
  if (variant === 'symbol') {
    return (
      <svg
        viewBox="0 0 80 64"
        height={pixelHeight}
        width={(pixelHeight / 64) * 80}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="ManageO Cart Symbol"
      >
        <path d="M 6 22 L 20 22" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 2 31 L 24 31" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 10 40 L 20 40" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
        <path
          d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
          stroke={cartColor}
          strokeWidth="5.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="42" cy="53" r="4.5" fill={cartColor} />
        <circle cx="61" cy="53" r="4.5" fill={cartColor} />
      </svg>
    );
  }

  // Full Master Logo
  const fullWidth = showBadge ? 370 : 305;
  const calculatedWidth = (pixelHeight / 64) * fullWidth;

  return (
    <div
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', lineHeight: 1 }}
    >
      <svg
        viewBox={\`0 0 \${fullWidth} 64\`}
        height={pixelHeight}
        width={calculatedWidth}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ManageO POS Logo"
      >
        <defs>
          <linearGradient id={\`manageOGrad_\${variant}\`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0062FF" />
            <stop offset="50%" stopColor="#008CFF" />
            <stop offset="100%" stopColor="#00D5FF" />
          </linearGradient>
        </defs>

        {/* Speed Cart */}
        <g transform="translate(4, 6) scale(0.82)">
          <path d="M 6 22 L 20 22" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 2 31 L 24 31" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 10 40 L 20 40" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
          <path
            d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
            stroke={cartColor}
            strokeWidth="5.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="42" cy="53" r="4.5" fill={cartColor} />
          <circle cx="61" cy="53" r="4.5" fill={cartColor} />
        </g>

        {/* Wordmark */}
        <text
          x="84"
          y="44"
          fill={textColor}
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontSize="44"
          fontWeight="800"
          letterSpacing="-1.2px"
        >
          Manage
        </text>

        {/* Circular Gradient Ring O */}
        <circle
          cx="269"
          cy="28.5"
          r="14.5"
          fill="none"
          stroke={\`url(#manageOGrad_\${variant})\`}
          strokeWidth="7.8"
        />

        {/* Pill Badge [ POS ] */}
        {showBadge && (
          <g transform="translate(304, 18)">
            <rect
              width="52"
              height="24"
              rx="7"
              fill={badgeBg}
              stroke={isDark ? '#334155' : 'transparent'}
              strokeWidth="1"
            />
            <text
              x="26"
              y="17"
              fill={badgeText}
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
              fontSize="12.5"
              fontWeight="800"
              letterSpacing="0.5px"
              textAnchor="middle"
            >
              POS
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default ManageOLogo;
`;

fs.writeFileSync(path.join(OUT_DIR, 'react/ManageOLogo.tsx'), reactComponent.trim(), 'utf8');
fs.writeFileSync(path.join(OUT_DIR, 'react/index.ts'), "export * from './ManageOLogo';\n", 'utf8');
console.log('✔ React component saved.');

// ==========================================
// 3. GENERATE VUE COMPONENT
// ==========================================

const vueComponent = `<template>
  <!-- Standalone Symbol -->
  <svg
    v-if="variant === 'symbol'"
    viewBox="0 0 80 64"
    :height="pixelHeight"
    :width="(pixelHeight / 64) * 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    aria-label="ManageO Cart Symbol"
  >
    <path d="M 6 22 L 20 22" :stroke="cartColor" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 2 31 L 24 31" :stroke="cartColor" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 10 40 L 20 40" :stroke="cartColor" stroke-width="4.5" stroke-linecap="round" />
    <path
      d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
      :stroke="cartColor"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <circle cx="42" cy="53" r="4.5" :fill="cartColor" />
    <circle cx="61" cy="53" r="4.5" :fill="cartColor" />
  </svg>

  <!-- Full Master Logo -->
  <div
    v-else
    :class="className"
    :style="{ display: 'inline-flex', alignItems: 'center', lineHeight: 1 }"
  >
    <svg
      :viewBox="\`0 0 \${fullWidth} 64\`"
      :height="pixelHeight"
      :width="calculatedWidth"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ManageO POS Logo"
    >
      <defs>
        <linearGradient :id="\`vueManageOGrad_\${variant}\`" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0062FF" />
          <stop offset="50%" stop-color="#008CFF" />
          <stop offset="100%" stop-color="#00D5FF" />
        </linearGradient>
      </defs>

      <!-- Speed Cart -->
      <g transform="translate(4, 6) scale(0.82)">
        <path d="M 6 22 L 20 22" :stroke="cartColor" stroke-width="4.5" stroke-linecap="round" />
        <path d="M 2 31 L 24 31" :stroke="cartColor" stroke-width="4.5" stroke-linecap="round" />
        <path d="M 10 40 L 20 40" :stroke="cartColor" stroke-width="4.5" stroke-linecap="round" />
        <path
          d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
          :stroke="cartColor"
          stroke-width="5.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <circle cx="42" cy="53" r="4.5" :fill="cartColor" />
        <circle cx="61" cy="53" r="4.5" :fill="cartColor" />
      </g>

      <!-- Wordmark -->
      <text
        x="84"
        y="44"
        :fill="textColor"
        font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        font-size="44"
        font-weight="800"
        letter-spacing="-1.2px"
      >
        Manage
      </text>

      <!-- Circular Gradient Ring O -->
      <circle
        cx="269"
        cy="28.5"
        r="14.5"
        fill="none"
        :stroke="\`url(#vueManageOGrad_\${variant})\`"
        stroke-width="7.8"
      />

      <!-- Pill Badge [ POS ] -->
      <g v-if="showBadge" transform="translate(304, 18)">
        <rect
          width="52"
          height="24"
          rx="7"
          :fill="badgeBg"
          :stroke="isDark ? '#334155' : 'transparent'"
          stroke-width="1"
        />
        <text
          x="26"
          y="17"
          :fill="badgeText"
          font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          font-size="12.5"
          font-weight="800"
          letter-spacing="0.5px"
          text-anchor="middle"
        >
          POS
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'dark' | 'symbol' | 'monochrome';
    size?: 'sm' | 'md' | 'lg' | 'xl' | number;
    showBadge?: boolean;
    className?: string;
  }>(),
  {
    variant: 'primary',
    size: 'md',
    showBadge: true,
    className: '',
  }
);

const heightMap: Record<string, number> = { sm: 24, md: 36, lg: 48, xl: 60 };
const pixelHeight = computed(() => (typeof props.size === 'number' ? props.size : heightMap[props.size] || 36));

const isDark = computed(() => props.variant === 'dark');
const isMono = computed(() => props.variant === 'monochrome');
const textColor = computed(() => (isDark.value ? '#FFFFFF' : isMono.value ? '#000000' : '#0F172A'));
const cartColor = computed(() => (isDark.value ? '#38BDF8' : isMono.value ? textColor.value : '#0072F5'));
const badgeBg = computed(() => (isDark.value ? '#1E293B' : '#EEF4FF'));
const badgeText = computed(() => (isDark.value ? '#60A5FA' : '#1D4ED8'));

const fullWidth = computed(() => (props.showBadge ? 370 : 305));
const calculatedWidth = computed(() => (pixelHeight.value / 64) * fullWidth.value);
</script>
`;

fs.writeFileSync(path.join(OUT_DIR, 'vue/ManageOLogo.vue'), vueComponent.trim(), 'utf8');
console.log('✔ Vue component saved.');

// ==========================================
// 4. GENERATE HTML SNIPPET
// ==========================================

const htmlSnippet = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ManageO POS Logo Quick Start</title>
  <!-- Optional: Include Google Font for identical browser typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&display=swap" rel="stylesheet">
  
  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      padding: 40px;
      background: #F8FAFC;
      color: #0F172A;
    }
    .card {
      background: white;
      border: 1px solid #E2E8F0;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    .card-dark {
      background: #0B132B;
      border: 1px solid #1E293B;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
      color: white;
    }
    code {
      background: #F1F5F9;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 13px;
    }
    pre {
      background: #0F172A;
      color: #F8FAFC;
      padding: 16px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 13px;
    }
  </style>
</head>
<body>

  <h1>ManageO POS — Integration Snippets</h1>
  <p>Copy-paste examples for adding the official logo into your POS application.</p>

  <!-- EXAMPLE 1: Light Background -->
  <div class="card">
    <h3>1. Light Background (Primary Brand Mark)</h3>
    <div style="margin: 20px 0;">
      <img src="../svg/manageo-logo-primary.svg" alt="ManageO POS" height="40">
    </div>
    <pre>&lt;!-- Standard HTML img tag --&gt;
&lt;img src="/assets/brand/manageo-logo-primary.svg" alt="ManageO POS" height="40" /&gt;</pre>
  </div>

  <!-- EXAMPLE 2: Dark Background -->
  <div class="card-dark">
    <h3>2. Dark Background (Sidebar / Header / Terminal)</h3>
    <div style="margin: 20px 0;">
      <img src="../svg/manageo-logo-dark.svg" alt="ManageO POS" height="40">
    </div>
    <pre>&lt;!-- Dark mode image --&gt;
&lt;img src="/assets/brand/manageo-logo-dark.svg" alt="ManageO POS" height="40" /&gt;</pre>
  </div>

  <!-- EXAMPLE 3: Standalone Cart Icon -->
  <div class="card">
    <h3>3. Standalone Speed Cart Symbol</h3>
    <div style="margin: 20px 0;">
      <img src="../svg/manageo-symbol-primary.svg" alt="ManageO Symbol" height="36">
    </div>
    <pre>&lt;!-- Cart Symbol only --&gt;
&lt;img src="/assets/brand/manageo-symbol-primary.svg" alt="ManageO" height="36" /&gt;</pre>
  </div>

  <!-- EXAMPLE 4: Responsive Picture Element -->
  <div class="card">
    <h3>4. Automatic Dark / Light Mode Switching</h3>
    <p>Using CSS media queries with HTML <code>&lt;picture&gt;</code>:</p>
    <pre>&lt;picture&gt;
  &lt;source srcset="/assets/brand/manageo-logo-dark.svg" media="(prefers-color-scheme: dark)" /&gt;
  &lt;img src="/assets/brand/manageo-logo-primary.svg" alt="ManageO POS" height="40" /&gt;
&lt;/picture&gt;</pre>
  </div>

</body>
</html>
`;

fs.writeFileSync(path.join(OUT_DIR, 'html-snippet/logo-snippet.html'), htmlSnippet.trim(), 'utf8');
console.log('✔ HTML snippet saved.');

// ==========================================
// 5. RENDER HIGH-RESOLUTION PNGS VIA CHROME
// ==========================================

const pngTargets = [
  // 1x PNGs
  { file: 'png/1x/manageo-logo-primary.png', svg: 'svg/manageo-logo-primary.svg', w: 370, h: 64 },
  { file: 'png/1x/manageo-logo-dark.png', svg: 'svg/manageo-logo-dark.svg', w: 370, h: 64 },
  { file: 'png/1x/manageo-logo-nobadge.png', svg: 'svg/manageo-logo-nobadge.svg', w: 305, h: 64 },
  { file: 'png/1x/manageo-logo-nobadge-dark.png', svg: 'svg/manageo-logo-nobadge-dark.svg', w: 305, h: 64 },
  { file: 'png/1x/manageo-symbol.png', svg: 'svg/manageo-symbol-primary.svg', w: 80, h: 64 },

  // 2x Retina PNGs
  { file: 'png/2x/manageo-logo-primary@2x.png', svg: 'svg/manageo-logo-primary.svg', w: 740, h: 128 },
  { file: 'png/2x/manageo-logo-dark@2x.png', svg: 'svg/manageo-logo-dark.svg', w: 740, h: 128 },
  { file: 'png/2x/manageo-logo-nobadge@2x.png', svg: 'svg/manageo-logo-nobadge.svg', w: 610, h: 128 },
  { file: 'png/2x/manageo-logo-nobadge-dark@2x.png', svg: 'svg/manageo-logo-nobadge-dark.svg', w: 610, h: 128 },
  { file: 'png/2x/manageo-symbol@2x.png', svg: 'svg/manageo-symbol-primary.svg', w: 160, h: 128 },

  // 4x Ultra-HD / Print PNGs
  { file: 'png/4x/manageo-logo-primary@4x.png', svg: 'svg/manageo-logo-primary.svg', w: 1480, h: 256 },
  { file: 'png/4x/manageo-logo-dark@4x.png', svg: 'svg/manageo-logo-dark.svg', w: 1480, h: 256 },
  { file: 'png/4x/manageo-logo-nobadge@4x.png', svg: 'svg/manageo-logo-nobadge.svg', w: 1220, h: 256 },
  { file: 'png/4x/manageo-logo-nobadge-dark@4x.png', svg: 'svg/manageo-logo-nobadge-dark.svg', w: 1220, h: 256 },
  { file: 'png/4x/manageo-symbol@4x.png', svg: 'svg/manageo-symbol-primary.svg', w: 320, h: 256 },

  // Favicons & App Icons
  { file: 'png/favicons/favicon-16x16.png', svg: 'svg/favicon.svg', w: 16, h: 16 },
  { file: 'png/favicons/favicon-32x32.png', svg: 'svg/favicon.svg', w: 32, h: 32 },
  { file: 'png/favicons/favicon-48x48.png', svg: 'svg/favicon.svg', w: 48, h: 48 },
  { file: 'png/favicons/apple-touch-icon-180x180.png', svg: 'svg/app-icon.svg', w: 180, h: 180 },
  { file: 'png/favicons/android-chrome-192x192.png', svg: 'svg/app-icon.svg', w: 192, h: 192 },
  { file: 'png/favicons/android-chrome-512x512.png', svg: 'svg/app-icon.svg', w: 512, h: 512 },
];

console.log('Rendering high-res transparent PNGs...');

for (const t of pngTargets) {
  const svgPath = path.join(OUT_DIR, t.svg);
  const outPath = path.join(OUT_DIR, t.file);
  const htmlWrapper = path.join('/tmp', `wrap_${path.basename(t.file)}.html`);

  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&display=swap" rel="stylesheet">
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    html, body {
      width: ${t.w}px;
      height: ${t.h}px;
      overflow: hidden;
      background: transparent !important;
    }
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
</head>
<body>
  <img src="file://${svgPath}" />
</body>
</html>`;

  fs.writeFileSync(htmlWrapper, htmlContent, 'utf8');

  try {
    execSync(`"${CHROME}" --headless=new --default-background-color=00000000 --screenshot="${outPath}" --window-size=${t.w},${t.h} --virtual-time-budget=1000 "file://${htmlWrapper}"`, {
      stdio: 'pipe',
    });
    fs.unlinkSync(htmlWrapper);
  } catch (err) {
    console.error(`Failed rendering ${t.file}: ${err.message}`);
  }
}

console.log('✔ All PNGs rendered.');

// ==========================================
// 6. GENERATE README.MD
// ==========================================

const readme = `# ManageO POS — Official Brand & Logo Asset Pack

Welcome! This package contains all official production-ready brand assets, vector logos, high-resolution transparent PNGs, and drop-in UI components for the **ManageO POS Project**.

---

## 1. Brand Mark Overview

The official ManageO logo comprises four harmonious elements:
1. **The Speed Cart Emblem:** Aerodynamic horizontal speed lines on the left leading into an upward-curving shopping cart basket and twin rolling wheels.
2. **The "Manage" Wordmark:** Bold geometric sans typography in obsidian navy (\`#0F172A\`) on light backgrounds and pure white (\`#FFFFFF\`) on dark surfaces.
3. **The Gradient "O" Ring:** Precision circular vector ring with a high-chroma linear gradient sweeping from Electric Royal Blue (\`#0062FF\`) to Sky Cyan (\`#00D5FF\`).
4. **The System [ POS ] Badge:** A periwinkle pill badge (\`#EEF4FF\` background with \`#1D4ED8\` bold monospace text) explicitly designating the software operating tier.

---

## 2. Color Palette Specifications

| Name | Hex Code | RGB | Role |
| :--- | :--- | :--- | :--- |
| **Electric Royal Blue** | \`#0062FF\` / \`#0072F5\` | \`rgb(0, 114, 245)\` | Speed cart stroke, gradient start |
| **Sky Cyan** | \`#00D5FF\` | \`rgb(0, 213, 255)\` | Gradient terminal end on 'O' |
| **Cyan Glow (Dark Mode)** | \`#38BDF8\` | \`rgb(56, 189, 248)\` | Speed cart on dark backgrounds |
| **Obsidian Navy (Text)** | \`#0F172A\` | \`rgb(15, 23, 42)\` | Primary "Manage" wordmark on light surfaces |
| **Pure White (Dark Text)** | \`#FFFFFF\` | \`rgb(255, 255, 255)\` | "Manage" wordmark on dark surfaces |
| **Pill Background (Light)**| \`#EEF4FF\` | \`rgb(238, 244, 255)\` | [ POS ] badge background |
| **Pill Text (Light)** | \`#1D4ED8\` | \`rgb(29, 78, 216)\` | [ POS ] badge typography |
| **Pill Background (Dark)** | \`#1E293B\` | \`rgb(30, 41, 59)\` | Dark [ POS ] badge background |
| **Pill Text (Dark)** | \`#60A5FA\` | \`rgb(96, 165, 250)\` | Dark [ POS ] badge typography |

---

## 3. Typography

- **Primary Font:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Weight: \`800 ExtraBold\`, letter-spacing: \`-1.2px\`)
- **System Fallback:** \`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif\`

To import via Google Fonts in HTML or CSS:
\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&display=swap" rel="stylesheet">
\`\`\`

---

## 4. Directory & Asset Inventory

\`\`\`
ManageO-Brand-Assets/
├── README.md                      <-- This documentation
├── svg/                           <-- Infinite scalability, razor sharp vectors
│   ├── manageo-logo-primary.svg   <-- Full logo with [ POS ] badge (Light version)
│   ├── manageo-logo-dark.svg      <-- Full logo with [ POS ] badge (Dark version)
│   ├── manageo-logo-nobadge.svg   <-- Full logo without [ POS ] badge (Light version)
│   ├── manageo-logo-nobadge-dark.svg <-- Full logo without [ POS ] badge (Dark version)
│   ├── manageo-symbol-primary.svg <-- Standalone Speed Cart icon (Blue)
│   ├── manageo-symbol-white.svg   <-- Standalone Speed Cart icon (White)
│   ├── favicon.svg                <-- Scalable browser tab icon
│   └── app-icon.svg               <-- 512x512 Squircle application icon
├── png/                           <-- Pre-rendered transparent PNGs
│   ├── 1x/                        <-- 370x64px standard display
│   ├── 2x/                        <-- 740x128px Retina / high-DPI
│   ├── 4x/                        <-- 1480x256px 4K / Splash screens / Print
│   └── favicons/                  <-- 16x16, 32x32, 48x48, 180x180, 192x192, 512x512
├── react/                         <-- Ready-to-use React / Next.js Component
│   ├── ManageOLogo.tsx            <-- Drop-in TSX component with props
│   └── index.ts
├── vue/                           <-- Ready-to-use Vue 3 / Nuxt Component
│   └── ManageOLogo.vue            <-- Drop-in SFC component with props
└── html-snippet/                  <-- Copy-paste HTML/CSS snippets
    └── logo-snippet.html
\`\`\`

---

## 5. Quick Integration Guides

### React / Next.js Integration
Simply copy \`react/ManageOLogo.tsx\` into your POS project's \`src/components/\` folder:
\`\`\`tsx
import { ManageOLogo } from './components/ManageOLogo';

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      {/* Light background logo with badge */}
      <ManageOLogo variant="primary" size="md" showBadge={true} />
    </header>
  );
}

export function DarkSidebar() {
  return (
    <aside className="w-64 bg-[#0F172A] p-4 text-white">
      {/* Dark background logo */}
      <ManageOLogo variant="dark" size="sm" showBadge={true} />
    </aside>
  );
}
\`\`\`

### Vue 3 / Nuxt Integration
Copy \`vue/ManageOLogo.vue\` into your components directory:
\`\`\`vue
<template>
  <ManageOLogo variant="primary" size="md" :showBadge="true" />
</template>

<script setup>
import ManageOLogo from './components/ManageOLogo.vue';
</script>
\`\`\`

### Static HTML / Web App Integration
\`\`\`html
<!-- In light headers: -->
<img src="/assets/svg/manageo-logo-primary.svg" alt="ManageO POS" height="36" />

<!-- In dark sidebars / footers: -->
<img src="/assets/svg/manageo-logo-dark.svg" alt="ManageO POS" height="36" />

<!-- Favicon setup in <head>: -->
<link rel="icon" type="image/svg+xml" href="/assets/svg/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/assets/png/favicons/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/assets/png/favicons/apple-touch-icon-180x180.png" />
\`\`\`

---
*Created for the ManageO POS Engineering Team.*
`;

fs.writeFileSync(path.join(OUT_DIR, 'README.md'), readme.trim(), 'utf8');
console.log('✔ README.md saved.');

// ==========================================
// 7. CREATE ZIP ARCHIVE
// ==========================================

console.log('Creating ZIP archive...');
if (fs.existsSync(FINAL_ZIP)) {
  fs.unlinkSync(FINAL_ZIP);
}

execSync(`cd /tmp && zip -r "${FINAL_ZIP}" manageo-brand-assets`, { stdio: 'inherit' });
console.log(`✔ Archive created successfully at: ${FINAL_ZIP}`);

const stats = fs.statSync(FINAL_ZIP);
console.log(`Archive size: ${(stats.size / 1024).toFixed(1)} KB`);
