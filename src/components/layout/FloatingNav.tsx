import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ManageOLogo } from '../brand/ManageOLogo';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'highlights', label: 'Highlights' },
  { id: 'categories', label: 'Solutions' },
  { id: 'features', label: 'Features' },
  { id: 'retail', label: 'Retail' },
  { id: 'salon', label: 'Salon' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'pricing', label: 'Pricing' },
];

export const FloatingNav: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('highlights');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 220) {
        setVisible(true);
      } else {
        setVisible(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex flex-col items-center px-4 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
      {/* Floating Pill Container */}
      <div className="max-w-4xl w-full h-14 rounded-full bg-white/85 backdrop-blur-xl border border-neutral-200/80 shadow-pill px-4 flex items-center justify-between">
        {/* Left: Brand Symbol & Name */}
        <a href="#hero" className="flex items-center gap-2 group shrink-0">
          <ManageOLogo variant="symbol" size={26} />
          <span className="font-extrabold text-sm tracking-tight text-neutral-900 hidden sm:inline-block">
            ManageO
          </span>
        </a>

        {/* Center: Desktop Section Anchors */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-semibold">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-neutral-900 text-white shadow-sm font-bold'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/70'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Quick Action CTAs */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/login"
            className="hidden sm:inline-flex text-xs font-semibold text-neutral-700 hover:text-neutral-950 px-3 py-1.5 rounded-full hover:bg-neutral-100/70 transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full shadow-sm hover:shadow transition-all hover:scale-[1.02]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          {/* Mobile Drawer Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded-full text-neutral-700 hover:bg-neutral-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Popover */}
      {mobileOpen && (
        <div className="md:hidden mt-2 w-full max-w-sm bg-white/95 backdrop-blur-xl border border-neutral-200/90 rounded-3xl p-4 shadow-2xl grid grid-cols-2 gap-1 animate-in fade-in zoom-in-95 duration-150">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-colors ${
                activeSection === item.id
                  ? 'bg-neutral-900 text-white font-bold'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="col-span-2 pt-2 border-t border-neutral-100 mt-2 flex gap-2">
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center py-2 rounded-full border border-neutral-200 text-xs font-bold text-neutral-800"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center py-2 rounded-full bg-blue-600 text-white text-xs font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

