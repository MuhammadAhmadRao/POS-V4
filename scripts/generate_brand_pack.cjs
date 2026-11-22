const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUT_DIR = '/tmp/manageo-brand-assets';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// 1. Generate SVGs
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

  <!-- Speed Cart Icon (Cyan/Blue for dark backgrounds) -->
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

  <!-- Wordmark Text: Manage (Crisp White) -->
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

  <!-- Pill Badge: POS (Dark mode variant) -->
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

// Write all SVGs
const svgFiles = {
  'svg/manageo-logo-primary.svg': svgPrimary,
  'svg/manageo-logo-dark.svg': svgDark,
  'svg/manageo-logo-nobadge.svg': svgNoBadge,
  'svg/manageo-logo-nobadge-dark.svg': svgNoBadgeDark,
  'svg/manageo-symbol-primary.svg': svgSymbolPrimary,
  'svg/manageo-symbol-white.svg': svgSymbolWhite,
  'svg/favicon.svg': svgFavicon,
  'svg/app-icon.svg': svgAppIcon,
};

for (const [relPath, content] of Object.entries(svgFiles)) {
  const fullPath = path.join(OUT_DIR, relPath);
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
}
console.log('Generated all SVGs.');
