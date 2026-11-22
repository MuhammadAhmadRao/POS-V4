import React, { useState } from 'react';
import { KickerBadge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Store, Scissors, Utensils, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CategoriesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'retail' | 'salon' | 'restaurant'>('retail');

  return (
    <section id="categories" className="py-24 md:py-32 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <KickerBadge label="BUSINESS CATEGORIES" accentColor="#2563EB" />
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 leading-[1.05] mt-2">
            Different businesses.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-700 to-blue-600">
              One connected platform.
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            ManageO adapts to the unique operational workflow of each industry. Select your business type to explore tailored features.
          </p>

          {/* Interactive Category Selector Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('retail')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold font-mono tracking-wider transition-all flex items-center gap-2 ${
                activeCategory === 'retail'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-[1.02]'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              01 / RETAIL &amp; SHOP
            </button>

            <button
              onClick={() => setActiveCategory('salon')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold font-mono tracking-wider transition-all flex items-center gap-2 ${
                activeCategory === 'salon'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20 scale-[1.02]'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              <Scissors className="w-3.5 h-3.5" />
              02 / SALON &amp; BEAUTY
            </button>

            <button
              onClick={() => setActiveCategory('restaurant')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold font-mono tracking-wider transition-all flex items-center gap-2 ${
                activeCategory === 'restaurant'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20 scale-[1.02]'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              03 / RESTAURANT (PREVIEW)
            </button>
          </div>
        </div>

        {/* Dynamic Multi-Category Editorial Showcase */}
        {activeCategory === 'retail' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                ● RETAIL &amp; SHOP OPERATIONS
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight">
                Manage products, inventory and everyday sales.
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Engineered for speed at checkout racks and precision in the stockroom. Scan barcodes in 30ms, manage size/color matrices, and track inventory across every store location in real time.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Instant barcode generation and scanning support',
                  'Matrix variants: Size, Color, Fit and Material tracking',
                  'Multi-branch stock transfer and automated low-stock reorders',
                  'Fast multi-tender split checkout with custom digital receipts',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-neutral-800 font-medium">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a href="#retail">
                  <Button variant="emerald" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    Explore Retail Showcase
                  </Button>
                </a>
                <Link to="/signup">
                  <Button variant="outline" size="md">
                    Start Retail Trial
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Asymmetrical Visual Composition */}
            <div className="lg:col-span-7 relative">
              <div className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl relative min-h-[460px] flex items-center justify-center p-8 group">
                <img
                  src="/images/retail-hero.jpg"
                  alt="Retail Storefront"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Overlaid Live POS Touch Screen Mockup */}
                <div className="relative z-10 w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-neutral-200">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="font-mono text-xs font-bold text-neutral-800 uppercase">RETAIL REGISTER 01</span>
                    </div>
                    <span className="font-mono text-xs text-neutral-500">CART: 3 ITEMS</span>
                  </div>

                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="flex justify-between items-center p-2 rounded-lg bg-neutral-50">
                      <span>Merino Knit Sweater (M / Black)</span>
                      <span className="font-bold text-neutral-900">$185.00</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-neutral-50">
                      <span>Leather Cardholder (Tan)</span>
                      <span className="font-bold text-neutral-900">$65.00</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-neutral-50">
                      <span>Organic Cotton Socks (3-Pack)</span>
                      <span className="font-bold text-neutral-900">$24.00</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-200 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 block">TOTAL (INC. TAX)</span>
                      <span className="text-xl font-mono font-extrabold text-blue-600">$297.80</span>
                    </div>
                    <Button variant="emerald" size="sm">
                      Charge Apple Pay
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Salon & Beauty State */}
        {activeCategory === 'salon' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-mono font-bold border border-rose-200">
                ● SALON &amp; BEAUTY SUITE
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight">
                Bring your salon operations together.
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Deliver exceptional client experiences with synchronized chair timelines, automated 24/7 client booking, and confidential formula notes stored right on client cards.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Visual drag-and-drop stylist appointment calendar',
                  'Confidential client formula notes and visit history',
                  'Automated SMS reminders and cancellation protection',
                  'Smart tip prompts and automatic stylist commission splits',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-neutral-800 font-medium">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a href="#salon">
                  <Button variant="rose" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    Explore Salon Showcase
                  </Button>
                </a>
                <Link to="/signup">
                  <Button variant="outline" size="md">
                    Start Salon Trial
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Asymmetrical Visual Composition */}
            <div className="lg:col-span-7 relative">
              <div className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl relative min-h-[460px] flex items-center justify-center p-8 group">
                <img
                  src="/images/salon-hero.jpg"
                  alt="Modern Salon Chair"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Overlaid Appointment Schedule Card */}
                <div className="relative z-10 w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-neutral-200">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                      <span className="font-mono text-xs font-bold text-neutral-800 uppercase">CHAIR 02 • MARCUS T.</span>
                    </div>
                    <span className="font-mono text-xs text-rose-600 font-bold">14:00 - 15:30 (90 MIN)</span>
                  </div>

                  <h4 className="text-lg font-bold text-neutral-900">Genevieve Laurent</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Balayage &amp; Glossing + Olaplex Treatment</p>

                  <div className="mt-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100 font-mono text-xs text-neutral-700">
                    <span className="text-[10px] text-neutral-400 block font-bold">COLOR FORMULA NOTE</span>
                    Wella Koleston 8/38 (30g) + 9/16 (15g) with 20vol developer.
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-200 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 block">TOTAL SERVICE + PRODUCT</span>
                      <span className="text-xl font-mono font-extrabold text-neutral-900">$195.00</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                      ● CONFIRMED &amp; BOOKED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Restaurant State (Preview) */}
        {activeCategory === 'restaurant' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-mono font-bold border border-amber-200 flex items-center gap-1.5 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                PREVIEW: IN ACTIVE DEVELOPMENT
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight">
                Keep restaurant operations moving.
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Behind the pass and across the dining room floor. Designed for kitchen ticket velocity, table floor plans, and complex check splits. Currently in private beta.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Interactive dining room floor plan with table timers',
                  'Kitchen Display System (KDS) station routing (Grill, Cold, Bar)',
                  'Split billing by seat number, item count, or custom percentages',
                  'Modifier engine for custom culinary requests and allergies',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-neutral-800 font-medium">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a href="#restaurant">
                  <Button variant="amber" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    View Restaurant Preview
                  </Button>
                </a>
                <Link to="/signup">
                  <Button variant="outline" size="md">
                    Join Early Access Beta
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Asymmetrical Visual Composition */}
            <div className="lg:col-span-7 relative">
              <div className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl relative min-h-[460px] flex items-center justify-center p-8 group">
                <img
                  src="/images/restaurant-hero.jpg"
                  alt="Restaurant Dining Room"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Overlaid KDS Ticket Mockup */}
                <div className="relative z-10 w-full max-w-lg bg-[#18181B] border border-neutral-700 rounded-2xl p-6 shadow-2xl text-white">
                  <div className="bg-amber-600 -mx-6 -mt-6 p-3 px-6 rounded-t-2xl flex items-center justify-between">
                    <span className="font-extrabold text-sm tracking-wide">TABLE 07 • 4 GUESTS</span>
                    <span className="font-mono text-xs font-bold">KDS TICKET #42</span>
                  </div>

                  <div className="mt-4 font-mono text-xs text-neutral-400">
                    SERVER: MATEO C. • COURSE 2 • ORDERED 12 MINS AGO
                  </div>

                  <div className="mt-3 space-y-2 font-mono text-xs border-y border-neutral-800 py-3">
                    <div>
                      <span className="font-bold text-white">2x GRILLED OCTOPUS</span>
                      <span className="block text-amber-400 text-[11px]">↳ EXTRA CHORIZO OIL, NO CORIANDER</span>
                    </div>
                    <div>
                      <span className="font-bold text-white">1x PRIME WAGYU RIBEYE (12oz)</span>
                      <span className="block text-amber-400 text-[11px]">↳ MEDIUM RARE • CHIMICHURRI ON SIDE</span>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between items-center text-xs font-mono">
                    <span className="text-emerald-400">● STATION: GRILL ROUTED</span>
                    <span className="px-2 py-1 bg-neutral-800 rounded text-neutral-300">PRINT CHIT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

