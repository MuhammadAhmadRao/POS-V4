import React from 'react';

export interface ManageOLogoProps {
  variant?: 'primary' | 'dark' | 'light' | 'monochrome' | 'symbol' | 'horizontal' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  showBadge?: boolean;
  showSubtitle?: boolean;
}

export const ManageOLogo: React.FC<ManageOLogoProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  showBadge = true,
  showSubtitle = false,
}) => {
  // Height mappings in pixels
  const heightMap = {
    sm: 24,
    md: 36,
    lg: 48,
    xl: 60,
  };

  const pixelHeight = typeof size === 'number' ? size : heightMap[size] || 36;
  
  // Theme coloring
  const isDark = variant === 'dark';
  const isMono = variant === 'monochrome';
  const textColor = isDark ? '#FFFFFF' : (isMono ? '#000000' : '#0F172A');
  const cartColor = isDark ? '#38BDF8' : (isMono ? textColor : '#0072F5');
  const badgeBg = isDark ? '#1E293B' : '#EEF4FF';
  const badgeText = isDark ? '#60A5FA' : '#1D4ED8';

  // 1. SYMBOL ONLY VARIANT (The Speed Cart with 3 Speed Trails)
  if (variant === 'symbol') {
    return (
      <svg
        viewBox="0 0 80 64"
        height={pixelHeight}
        width={(pixelHeight / 64) * 80}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
        aria-label="ManageO Speed Cart Symbol"
      >
        <defs>
          <linearGradient id="symCartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0062FF" />
            <stop offset="100%" stopColor="#00D2FF" />
          </linearGradient>
        </defs>

        {/* 3 Speed Lines on Left */}
        <path d="M 6 22 L 20 22" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 2 31 L 24 31" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 10 40 L 20 40" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />

        {/* Shopping Cart Basket Body */}
        <path
          d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
          stroke={cartColor}
          strokeWidth="5.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Cart Wheels */}
        <circle cx="42" cy="53" r="4.5" fill={cartColor} />
        <circle cx="61" cy="53" r="4.5" fill={cartColor} />
      </svg>
    );
  }

  // 2. COMPACT VERTICAL VARIANT
  if (variant === 'compact') {
    return (
      <div className={`inline-flex flex-col items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 80 64"
          height={pixelHeight}
          width={(pixelHeight / 64) * 80}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
        <span
          className="font-black text-[11px] tracking-tight mt-1"
          style={{ color: textColor }}
        >
          ManageO
        </span>
      </div>
    );
  }

  // 3. FULL MASTER LOGO (Speed Cart + Manage + Gradient O + POS Pill Badge)
  const fullWidth = showBadge ? 370 : 305;
  const calculatedWidth = (pixelHeight / 64) * fullWidth;

  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        viewBox={`0 0 ${fullWidth} 64`}
        height={pixelHeight}
        width={calculatedWidth}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ManageO POS Logo"
      >
        <defs>
          <linearGradient id={`manageOGradient_${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0062FF" />
            <stop offset="45%" stopColor="#008CFF" />
            <stop offset="100%" stopColor="#00D5FF" />
          </linearGradient>
        </defs>

        {/* Speed Cart Icon Scaled to 0.82 */}
        <g transform="translate(4, 6) scale(0.82)">
          {/* 3 Speed Lines on Left */}
          <path d="M 6 22 L 20 22" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 2 31 L 24 31" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 10 40 L 20 40" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />

          {/* Shopping Cart Basket */}
          <path
            d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
            stroke={cartColor}
            strokeWidth="5.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Cart Wheels */}
          <circle cx="42" cy="53" r="4.5" fill={cartColor} />
          <circle cx="61" cy="53" r="4.5" fill={cartColor} />
        </g>

        {/* Wordmark Text: Manage */}
        <text
          x="84"
          y="44"
          fill={textColor}
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="44"
          fontWeight="800"
          letterSpacing="-1.2px"
        >
          Manage
        </text>

        {/* Ring O with Vibrant Royal-to-Cyan Gradient */}
        <circle
          cx="269"
          cy="28.5"
          r="14.5"
          fill="none"
          stroke={`url(#manageOGradient_${variant})`}
          strokeWidth="7.8"
        />

        {/* Pill Badge: POS */}
        {showBadge && (
          <g transform="translate(304, 18)">
            <rect width="52" height="24" rx="7" fill={badgeBg} />
            <text
              x="26"
              y="17"
              fill={badgeText}
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
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

      {showSubtitle && (
        <span
          className="ml-3 pl-3 border-l text-xs font-semibold tracking-wider uppercase opacity-60"
          style={{ borderColor: textColor, color: textColor }}
        >
          Commerce OS
        </span>
      )}
    </div>
  );
};
