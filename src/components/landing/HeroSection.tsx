import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ReceiptCard } from '../ui/ReceiptCard';
import { BarcodeTag } from '../ui/BarcodeTag';
import { SalonChit } from '../ui/SalonChit';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden bg-daylight-base">
      {/* Background Subtle Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0A0D14 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Micro-Kicker */}
        <div className="flex items-center justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-mono font-bold text-neutral-800 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>ONE PLATFORM. EVERY BUSINESS.</span>
          </div>
        </div>

        {/* Editorial Split Headline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-12">
          <div className="md:col-span-7">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.92] text-neutral-900">
              One platform.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-800 to-blue-700">
                Every business.
              </span>
            </h1>
          </div>

          <div className="md:col-span-5 md:pb-2">
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-lg">
              Everything your business needs to run, manage and grow — unified across retail counters, salon chairs, and dining tables in one connected operating system.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/signup">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Get Started Free
                </Button>
              </Link>
              <a href="#highlights">
                <Button variant="outline" size="lg">
                  Explore ManageO
                </Button>
              </a>
            </div>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Free 14-Day Trial
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Universal Hardware Support
              </span>
            </div>
          </div>
        </div>

        {/* Asymmetrical Tactile Commerce Collage */}
        <div className="relative mt-8 min-h-[520px] md:min-h-[580px] w-full rounded-4xl bg-white border border-neutral-200/70 p-6 md:p-12 shadow-xl shadow-black/5 overflow-hidden">
          {/* Layer 1: Left Photography - Boutique Retail Shopkeeper */}
          <div className="absolute left-6 md:left-12 top-10 md:top-14 w-60 md:w-80 h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500 z-10 group">
            <img
              src="/images/retail-hero.jpg"
              alt="Modern Retail Store Interior & Counter"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <span className="px-2.5 py-1 rounded-md bg-emerald-600/90 text-white font-mono text-[10px] font-bold tracking-wider uppercase">
                RETAIL &amp; SHOP
              </span>
            </div>
          </div>

          {/* Layer 2: Right Photography - Modern Salon Stylist */}
          <div className="absolute right-6 md:right-16 top-6 md:top-8 w-56 md:w-72 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10 group">
            <img
              src="/images/salon-hero.jpg"
              alt="Premium Hair Salon & Styling Chair"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <span className="px-2.5 py-1 rounded-md bg-rose-600/90 text-white font-mono text-[10px] font-bold tracking-wider uppercase">
                SALON &amp; BEAUTY
              </span>
            </div>
          </div>

          {/* Layer 3: Centerpiece - Tactile Perforated Thermal Receipt */}
          <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 flex justify-center py-6 md:py-0">
            <ReceiptCard className="w-64 md:w-72" />
          </div>

          {/* Layer 4: Floating Barcode Hangtag (Bottom Left Overlay) */}
          <div className="hidden lg:block absolute left-60 bottom-8 z-30 transform hover:scale-105 transition-transform">
            <BarcodeTag />
          </div>

          {/* Layer 5: Salon Booking Chit (Bottom Right Overlay) */}
          <div className="hidden lg:block absolute right-48 bottom-12 z-30 transform hover:scale-105 transition-transform">
            <SalonChit />
          </div>

          {/* Layer 6: Gourmet Culinary Plate Cutout (Top Center-Right Accent) */}
          <div className="hidden md:block absolute right-72 top-4 w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white z-20 transform hover:scale-110 transition-transform">
            <img
              src="/images/culinary-dish.jpg"
              alt="Artisanal Food Presentation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Layer 7: Floating Scalloped Badge */}
          <div className="absolute left-1/4 top-10 z-30 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-mono font-bold tracking-widest uppercase shadow-lg transform -rotate-6">
            ★ COMMERCE OS
          </div>

          {/* Background Decorative Gradient Orbs */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
        </div>
      </div>
    </section>
  );
};

