import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ManageOLogo } from '../brand/ManageOLogo';
import { Button } from '../ui/Button';
import { ChevronDown, Store, Scissors, Utensils, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 bg-daylight-base/90 backdrop-blur-md border-b border-neutral-200/60 px-4 sm:px-6 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <ManageOLogo variant="primary" size={26} showBadge={false} className="sm:hidden" />
          <ManageOLogo variant="primary" size={32} showBadge={true} className="hidden sm:inline-flex" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-700">
          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className="flex items-center gap-1.5 hover:text-neutral-950 transition-colors py-2 focus:outline-none">
              <span>Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-neutral-200/80 p-3 grid gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <a
                  href="#retail"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-900 block text-xs group-hover:text-emerald-700">Retail &amp; Shop</span>
                    <span className="text-[11px] text-neutral-500">Inventory, barcodes &amp; sales</span>
                  </div>
                </a>

                <a
                  href="#salon"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-900 block text-xs group-hover:text-rose-700">Salon &amp; Beauty</span>
                    <span className="text-[11px] text-neutral-500">Bookings, staff &amp; clients</span>
                  </div>
                </a>

                <a
                  href="#restaurant"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-neutral-900 block text-xs group-hover:text-amber-700">Restaurant</span>
                      <span className="px-1.5 py-0.2 bg-amber-100 text-amber-800 text-[9px] font-mono font-bold rounded">PREVIEW</span>
                    </div>
                    <span className="text-[11px] text-neutral-500">KDS, tables &amp; floorplans</span>
                  </div>
                </a>
              </div>
            )}
          </div>

          <a href="#highlights" className="hover:text-neutral-950 transition-colors">Highlights</a>
          <a href="#features" className="hover:text-neutral-950 transition-colors">Features</a>
          <a href="#hardware" className="hover:text-neutral-950 transition-colors">Hardware</a>
          <a href="#pricing" className="hover:text-neutral-950 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-neutral-950 transition-colors">FAQ</a>
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="md:hidden flex items-center gap-1.5 shrink-0">
          <Link to="/signup">
            <Button variant="primary" size="sm" className="px-3 py-1.5 text-xs font-bold">
              Get Started
            </Button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-neutral-700 hover:bg-neutral-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 px-4 space-y-4 border-t border-neutral-200 mt-3 animate-in fade-in duration-150">
          <nav className="grid gap-2 text-sm font-semibold text-neutral-800">
            <a href="#highlights" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-neutral-100">Highlights</a>
            <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-neutral-100">Solutions</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-neutral-100">Platform Features</a>
            <a href="#retail" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-neutral-100">Retail &amp; Shop</a>
            <a href="#salon" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-neutral-100">Salon &amp; Beauty</a>
            <a href="#restaurant" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-neutral-100">Restaurant Preview</a>
            <a href="#hardware" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-neutral-100">Hardware</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-neutral-100">Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-neutral-100">FAQ</a>
          </nav>

          <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full">
              <Button variant="outline" size="md" className="w-full">
                Sign In
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="w-full">
              <Button variant="primary" size="md" className="w-full">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

