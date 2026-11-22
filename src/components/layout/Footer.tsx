import React from 'react';
import { Link } from 'react-router-dom';
import { ManageOLogo } from '../brand/ManageOLogo';
import { ShieldCheck, Globe, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090A0F] text-white border-t border-neutral-800/80 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-16 border-b border-neutral-800">
          {/* Column 1: Brand & Manifesto */}
          <div className="col-span-2 space-y-4">
            <ManageOLogo variant="dark" size={34} />
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed mt-3">
              One connected commerce platform engineered for the operational realities of Retail, Salon &amp; Beauty, and Restaurants.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> SYSTEMS NORMAL (99.99%)
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> PCI-DSS LEVEL 1
              </span>
            </div>
          </div>

          {/* Column 2: Solutions by Industry */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block">
              SOLUTIONS
            </span>
            <ul className="space-y-2.5 text-sm text-neutral-400 font-medium">
              <li>
                <a href="#retail" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Retail &amp; Shop</span>
                  <span className="text-emerald-500 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">●</span>
                </a>
              </li>
              <li>
                <a href="#salon" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Salon &amp; Beauty</span>
                  <span className="text-rose-500 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">●</span>
                </a>
              </li>
              <li>
                <a href="#restaurant" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span>Restaurant</span>
                  <span className="px-1.5 py-0.2 bg-amber-500/20 text-amber-400 text-[9px] font-mono font-bold rounded">PREVIEW</span>
                </a>
              </li>
              <li>
                <a href="#unified" className="hover:text-white transition-colors">Multi-Store Chains</a>
              </li>
              <li>
                <a href="#hardware" className="hover:text-white transition-colors">Hardware Solutions</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Features */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block">
              PLATFORM
            </span>
            <ul className="space-y-2.5 text-sm text-neutral-400 font-medium">
              <li><a href="#highlights" className="hover:text-white transition-colors">Point of Sale (POS)</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Multi-Branch Inventory</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Staff Shifts &amp; Roles</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Cash Float &amp; Till</a></li>
              <li><a href="#dashboard" className="hover:text-white transition-colors">Executive Analytics</a></li>
              <li><a href="#hardware" className="hover:text-white transition-colors">Hardware Compatibility</a></li>
            </ul>
          </div>

          {/* Column 4: Account & Access */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block">
              GET STARTED
            </span>
            <ul className="space-y-2.5 text-sm text-neutral-400 font-medium">
              <li>
                <Link to="/signup" className="text-blue-400 hover:text-blue-300 transition-colors font-bold flex items-center gap-1">
                  <span>Start Free Trial</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li><Link to="/login" className="hover:text-white transition-colors">Merchant Sign In</Link></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Overview</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Migration FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Locale Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-neutral-400" />
            <span>GLOBAL COMMERCE • UNITED STATES (USD $)</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-neutral-300 transition-colors">Privacy Notice</a>
            <a href="#terms" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-neutral-300 transition-colors">Security Standards</a>
            <span>© 2026 ManageO Technologies, Inc. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

