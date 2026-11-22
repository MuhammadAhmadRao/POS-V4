import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ReceiptCard } from '../ui/ReceiptCard';
import { BarcodeTag } from '../ui/BarcodeTag';
import { SalonChit } from '../ui/SalonChit';
import { asset } from '../../utils/assets';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-sm text-xs font-mono font-bold text-neutral-800 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>ONE PLATFORM. EVERY BUSINESS.</span>
          </div>
        </div>

        {/* Editorial Split Headline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-12">
          <div className="md:col-span-7">
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.94] text-neutral-900">
              One platform.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-800 to-blue-700">
                Every business.
              </span>
            </h1>
          </div>

          <div className="md:col-span-5 md:pb-2">
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-lg">
              Everything your business needs to run, manage and grow — from fast-checkout counters and barcode printing to multi-branch stock audits, purchase ledgers, and real-time net profit analytics in one connected operating system.
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
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Free 14-Day Trial
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Universal Hardware Support
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Encrypted Tokens
              </span>
            </div>
          </div>
        </div>

        {/* Asymmetrical Tactile Commerce Collage */}
        <div className="relative mt-8 md:mt-12 w-full rounded-4xl bg-gradient-to-b from-white to-neutral-50/80 border border-neutral-200/80 p-6 md:p-12 shadow-2xl shadow-black/5 overflow-hidden">
          
          {/* DESKTOP COLLAGE VIEW (md: and up) */}
          <div className="hidden md:block relative min-h-[560px] w-full">
            {/* Layer 1: Left Photography - Boutique Retail Shopkeeper */}
            <div className="absolute left-4 lg:left-10 top-12 w-72 lg:w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-all duration-500 z-10 group">
              <img
                src={asset('images/retail-hero.jpg')}
                alt="Modern Retail Store Interior & Counter"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white font-mono text-[10px] font-bold tracking-wider uppercase shadow-sm">
                  RETAIL &amp; SHOP
                </span>
              </div>
            </div>

            {/* Layer 2: Right Photography - Modern Salon Stylist */}
            <div className="absolute right-4 lg:right-12 top-8 w-68 lg:w-76 h-88 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500 z-10 group">
              <img
                src={asset('images/salon-hero.jpg')}
                alt="Premium Hair Salon & Styling Chair"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="px-2.5 py-1 rounded-md bg-rose-600 text-white font-mono text-[10px] font-bold tracking-wider uppercase shadow-sm">
                  SALON &amp; BEAUTY
                </span>
              </div>
            </div>

            {/* Layer 3: Centerpiece - Tactile Perforated Thermal Receipt with Gentle Floating Animation */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-float">
              <ReceiptCard className="w-68 lg:w-74 shadow-2xl" />
            </div>

            {/* Layer 4: Floating Barcode Hangtag (Bottom Left Overlay) */}
            <div className="hidden lg:block absolute left-64 bottom-6 z-30 animate-float-delayed transform hover:scale-105 transition-transform">
              <BarcodeTag />
            </div>

            {/* Layer 5: Salon Booking Chit (Bottom Right Overlay) */}
            <div className="hidden lg:block absolute right-52 bottom-10 z-30 transform hover:scale-105 transition-transform">
              <SalonChit />
            </div>

            {/* Layer 6: Gourmet Culinary Plate Cutout (Top Center-Right Accent) */}
            <div className="absolute right-64 top-4 w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-xl border-4 border-white z-20 transform hover:scale-110 transition-transform">
              <img
                src={asset('images/culinary-dish.jpg')}
                alt="Artisanal Food Presentation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-1.5">
                <span className="text-[9px] font-mono font-bold text-white uppercase tracking-wider">PREVIEW</span>
              </div>
            </div>

            {/* Layer 7: Floating Scalloped Badge */}
            <div className="absolute left-1/4 top-8 z-30 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-mono font-bold tracking-widest uppercase shadow-xl transform -rotate-6 hover:rotate-0 transition-transform cursor-default">
              ★ COMMERCE OS
            </div>

            {/* Background Decorative Gradient Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-0" />
          </div>

          {/* MOBILE COLLAGE VIEW (< md) - Clean, Non-overlapping, Tactile Stacking */}
          <div className="md:hidden flex flex-col items-center gap-6 py-4 relative">
            {/* Center Receipt with subtle float */}
            <div className="animate-float z-20 w-full flex justify-center">
              <ReceiptCard className="w-full max-w-[280px]" />
            </div>

            {/* Dual Category Mini Badges */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm z-10">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200/90 shadow-md h-32 group">
                <img
                  src={asset('images/retail-hero.jpg')}
                  alt="Retail Store"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-mono font-bold text-white tracking-wider uppercase">
                    01 / RETAIL
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-neutral-200/90 shadow-md h-32 group">
                <img
                  src={asset('images/salon-hero.jpg')}
                  alt="Salon Chair"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-mono font-bold text-white tracking-wider uppercase">
                    02 / SALON
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Commerce OS Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-md">
              <span>★ COMMERCE OS</span>
              <span className="text-blue-400">•</span>
              <span className="text-emerald-400">TOUCHSCREEN + MOBILE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
