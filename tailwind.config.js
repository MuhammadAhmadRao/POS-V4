/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ManageO Primary Electric Blue / Cobalt Accent
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB', // Core Brand Cobalt
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        // Obsidian Canvas (Engine Power & Deep Night)
        obsidian: {
          950: '#090A0F', // Deepest background
          900: '#12141A', // Dark surface card
          850: '#161922', // Hover surface
          800: '#1A1D26', // Border elevated
          700: '#272B38', // Secondary borders
          600: '#3E4456', // Muted text
          500: '#64748B', // Body text dark mode
          400: '#94A3B8', // Subheadings
          300: '#CBD5E1',
          100: '#F1F5F9',
        },
        // Daylight Canvas (Storefront Clarity & Warmth)
        daylight: {
          base: '#F8F9FA', // Soft warm bone canvas
          surface: '#FFFFFF', // Clean card surface
          subtle: '#F2F4F7', // Neutral secondary
          muted: '#E5E7EB', // Fine hairline borders
          border: 'rgba(10, 13, 20, 0.08)',
        },
        // Industry Semantic Verticals
        vertical: {
          retail: '#059669', // Emerald
          retailBg: '#ECFDF5',
          salon: '#E11D48', // Rose Dahlia
          salonBg: '#FFF1F2',
          restaurant: '#D97706', // Warm Saffron
          restaurantBg: '#FFFBEB',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Cabinet Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        kicker: '0.2em',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'pill': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'pill-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.12)',
        'glow-brand': '0 0 35px -5px rgba(37, 99, 235, 0.35)',
        'receipt': '0 12px 32px -8px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
