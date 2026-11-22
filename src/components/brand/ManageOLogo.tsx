import React from 'react';

export interface ManageOLogoProps {
  variant?: 'primary' | 'dark' | 'light' | 'monochrome' | 'symbol' | 'horizontal' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  showSubtitle?: boolean;
}

export const ManageOLogo: React.FC<ManageOLogoProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  showSubtitle = false,
}) => {
  // Height mappings
  const heightMap = {
    sm: 24,
    md: 36,
    lg: 48,
    xl: 64,
  };

  const pixelHeight = typeof size === 'number' ? size : heightMap[size] || 36;
  
  // Theme coloring
  const isDark = variant === 'dark';
  const isMono = variant === 'monochrome';
  const textColor = isDark ? '#FFFFFF' : (isMono ? '#000000' : '#0A0D14');
  const accentColor = isMono ? textColor : '#2563EB';

  if (variant === 'symbol') {
    return (
      <svg
        viewBox="0 0 64 64"
        height={pixelHeight}
        width={pixelHeight}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
        aria-label="ManageO Symbol"
      >
        {/* Precision Ring with 45-deg Notch */}
        <path
          d="M 48.97 15.03 A 24 24 0 1 1 43.6 10.4"
          fill="none"
          stroke={textColor}
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        {/* Pulse Core */}
        <circle cx="49.5" cy="14.5" r="4.8" fill={accentColor} />
        {/* Inner Focus Ring */}
        <circle
          cx="32"
          cy="32"
          r="8"
          fill="none"
          stroke={accentColor}
          strokeWidth="2"
          strokeDasharray="3 3"
          opacity="0.4"
        />
      </svg>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex flex-col items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 64 64"
          height={pixelHeight}
          width={pixelHeight}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 48.97 15.03 A 24 24 0 1 1 43.6 10.4"
            fill="none"
            stroke={textColor}
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          <circle cx="49.5" cy="14.5" r="4.8" fill={accentColor} />
        </svg>
        <span
          className="font-black text-[11px] tracking-[0.2em] uppercase mt-1"
          style={{ color: textColor }}
        >
          MANAGEO
        </span>
      </div>
    );
  }

  // Horizontal Wordmark
  const calculatedWidth = (pixelHeight / 64) * 310;

  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        viewBox="0 0 310 64"
        height={pixelHeight}
        width={calculatedWidth}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ManageO Logo"
      >
        {/* Manage Wordmark Paths */}
        <g fill={textColor}>
          {/* M */}
          <path d="M 10 50 L 10 12 L 17.5 12 L 28.5 35.5 L 39.5 12 L 47 12 L 47 50 L 40 50 L 40 22.5 L 31 42 L 26 42 L 17 22.5 L 17 50 Z" />
          {/* a */}
          <path d="M 74 24 L 74 48 C 74 49.5 74.5 50 76.5 50 L 80 50 L 80 55 C 77 55.5 74 55.5 71.5 54.5 C 68.5 53 67.5 50 67.5 46.5 C 65 49 61.5 51 57 51 C 49.5 51 44.5 46 44.5 38.5 C 44.5 30.5 51 26 67 25.5 L 67 24.5 C 67 20 63.5 17.5 57.5 17.5 C 52.5 17.5 48.5 19.5 46 21.5 L 43.5 16.5 C 47.5 13.5 53 12 58.5 12 C 68.5 12 74 16.5 74 24 Z M 67 30 C 56.5 30.5 52 33 52 38.5 C 52 42.5 55 45 59.5 45 C 64 45 67 42 67 37 Z" />
          {/* n */}
          <path d="M 87 50 L 87 13 L 94 13 L 94 20 C 97 15 102 12 109 12 C 117.5 12 122 17.5 122 27 L 122 50 L 115 50 L 115 28.5 C 115 21.5 112 18 106 18 C 99.5 18 94 22.5 94 31 L 94 50 Z" />
          {/* a */}
          <path d="M 154 24 L 154 48 C 154 49.5 154.5 50 156.5 50 L 160 50 L 160 55 C 157 55.5 154 55.5 151.5 54.5 C 148.5 53 147.5 50 147.5 46.5 C 145 49 141.5 51 137 51 C 129.5 51 124.5 46 124.5 38.5 C 124.5 30.5 131 26 147 25.5 L 147 24.5 C 147 20 143.5 17.5 137.5 17.5 C 132.5 17.5 128.5 19.5 126 21.5 L 123.5 16.5 C 127.5 13.5 133 12 138.5 12 C 148.5 12 154 16.5 154 24 Z M 147 30 C 136.5 30.5 132 33 132 38.5 C 132 42.5 135 45 139.5 45 C 144 45 147 42 147 37 Z" />
          {/* g */}
          <path d="M 189 13 L 189 48 C 189 57.5 182.5 62 171.5 62 C 164.5 62 159 59.5 155.5 56.5 L 158.5 51 C 161.5 53.5 166 55.5 171 55.5 C 178 55.5 182 52.5 182 46.5 L 182 43 C 179 47 174.5 49 168.5 49 C 159.5 49 154 42 154 31 C 154 20 160 12 169 12 C 175 12 179 14.5 182 18.5 L 182 13 Z M 182 28.5 C 182 22 178 18.5 172 18.5 C 166 18.5 161.5 23 161.5 31 C 161.5 39 166 43 172 43 C 178 43 182 39 182 32 Z" />
          {/* e */}
          <path d="M 221 34 L 199 34 C 199.5 40 203.5 44 209.5 44 C 214 44 217.5 42 220 39.5 L 223.5 44 C 220 48 215 50.5 208.5 50.5 C 197 50.5 192 42 192 31 C 192 20 198 12 208.5 12 C 218.5 12 222.5 19.5 222.5 29 C 222.5 31 222 33 221 34 Z M 215 28.5 C 214.5 22.5 212 18 208 18 C 203 18 199.5 22.5 199 28.5 Z" />
        </g>

        {/* Signature O Positioned at X=236.96, Y=7.96, Scale=0.72 */}
        <g transform="translate(236.96, 7.96) scale(0.72)">
          <path
            d="M 48.97 15.03 A 24 24 0 1 1 43.6 10.4"
            fill="none"
            stroke={textColor}
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          <circle cx="49.5" cy="14.5" r="4.8" fill={accentColor} />
          <circle
            cx="32"
            cy="32"
            r="8"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeDasharray="3 3"
            opacity="0.4"
          />
        </g>
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
