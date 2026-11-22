import React, { useState } from 'react';
import { KickerBadge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Check, ArrowRight, Zap, Package, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HighlightItem {
  id: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'sales',
    step: '01 / 03',
    title: 'Run your sales.',
    tagline: 'Speed up checkout at every counter and mobile terminal.',
    description: 'Every second saved in line is customer loyalty earned. ManageO delivers an ultra-responsive touchscreen interface with barcode lookups in under 30ms, custom item modifiers, and instant split tenders across card, cash, and digital wallets.',
    features: [
      'Universal contactless payments (Apple Pay, Google Pay, Tap-to-Pay)',
      'Split tender by item, seat, or percentage in two taps',
      'Encrypted Offline Mode for uninterrupted trading during outages',
    ],
    icon: <Zap className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 'inventory',
    step: '02 / 03',
    title: 'Stay in control.',
    tagline: 'Unified multi-store inventory and automated stock replenishment.',
    description: 'Eliminate stockouts and dead inventory. Track products across five warehouses or twenty retail racks with automatic purchase orders when items dip below reorder thresholds.',
    features: [
      'Multi-branch stock transfers with built-in packing slips',
      'Automated low-stock threshold triggers and supplier POs',
      'Matrix variant management (Size, Color, Material, Fit)',
    ],
    icon: <Package className="w-5 h-5 text-emerald-600" />,
  },
  {
    id: 'analytics',
    step: '03 / 03',
    title: 'Understand your business.',
    tagline: 'Real-time sales velocity, gross margins, and staff insights.',
    description: 'Move from reactionary guesswork to precision operational control. Monitor live store sales, identify top-performing employees, and export reconciled cash journals straight into your accounting software.',
    features: [
      'Hourly transaction velocity curves and peak staffing analysis',
      'Real-time gross margin calculation and dead-stock identification',
      'One-click reconciliation with QuickBooks, Xero, and CSV exports',
    ],
    icon: <TrendingUp className="w-5 h-5 text-rose-600" />,
  },
];

export const HighlightsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const active = HIGHLIGHTS[activeTab];

  return (
    <section id="highlights" className="py-24 md:py-36 bg-[#F8F9FA] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <KickerBadge label="HIGHLIGHTS" accentColor="#2563EB" />
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 leading-[1.05] mt-2">
            Everything important.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-blue-700">
              Within reach.
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Engineered for daily speed and long-term scale. Experience how ManageO unifies checkout, inventory, and analytics.
          </p>
        </div>

        {/* Interactive Sticky Presentation Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Story Controls */}
          <div className="lg:col-span-5 space-y-6">
            {/* Step Selection Tabs */}
            <div className="space-y-4">
              {HIGHLIGHTS.map((item, index) => {
                const isSelected = activeTab === index;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(index)}
                    className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-neutral-300 shadow-xl shadow-black/5 scale-[1.01]'
                        : 'bg-white/40 border-neutral-200/60 hover:bg-white hover:border-neutral-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold tracking-widest text-neutral-400">
                        {item.step}
                      </span>
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-blue-50 text-blue-600' : 'bg-neutral-100 text-neutral-500'}`}>
                        {item.icon}
                      </div>
                    </div>

                    <h3 className={`text-xl font-extrabold ${isSelected ? 'text-neutral-900' : 'text-neutral-600'}`}>
                      {item.title}
                    </h3>

                    {isSelected && (
                      <div className="mt-3 space-y-3 animate-in fade-in duration-200">
                        <p className="text-sm font-semibold text-blue-600">{item.tagline}</p>
                        <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                        <ul className="space-y-2 pt-2">
                          {item.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 font-medium">
                              <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link to="/signup">
                <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Start Free 14-Day Trial
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Heroic UI Demonstration Card */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <div className="rounded-4xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden p-6 md:p-10 text-white min-h-[520px] flex flex-col justify-between relative group">
              {/* Top Bar of UI Display */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-xs font-bold tracking-wider text-neutral-300">
                    MANAGEO ACTIVE NODE // {active.id.toUpperCase()}
                  </span>
                </div>
                <span className="font-mono text-xs text-blue-400 font-bold">
                  STEP {active.step}
                </span>
              </div>

              {/* State 0: Run Your Sales UI Preview */}
              {activeTab === 0 && (
                <div className="py-8 space-y-6 relative z-10 animate-in fade-in duration-300">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: 'Overshirt Black (M)', price: '$185.00', cat: 'Apparel' },
                      { name: 'Beet Hummus Bowl', price: '$14.50', cat: 'Hospitality' },
                      { name: 'Scalp Tonic 100ml', price: '$48.00', cat: 'Salon Care' },
                      { name: 'Ceramic Table Vase', price: '$62.00', cat: 'Home' },
                      { name: 'Flat White (Oat)', price: '$5.50', cat: 'Cafe' },
                      { name: 'Linen Tote Bag', price: '$35.00', cat: 'Accessories' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 hover:border-blue-500 hover:bg-neutral-800 transition-all cursor-pointer group/item"
                      >
                        <span className="text-[10px] font-mono text-neutral-400 block">{item.cat}</span>
                        <span className="text-xs font-bold text-white block mt-1 line-clamp-1">{item.name}</span>
                        <span className="text-xs font-mono font-extrabold text-blue-400 mt-2 block">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Active Register Ticket Drawer */}
                  <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 block uppercase">CART TICKET #8914</span>
                      <span className="text-2xl font-mono font-extrabold text-white">$248.50</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-300 font-mono text-xs">
                        SPLIT TENDER
                      </span>
                      <Button variant="primary" size="sm">
                        Charge Card
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* State 1: Stay In Control UI Preview */}
              {activeTab === 1 && (
                <div className="py-8 space-y-6 relative z-10 animate-in fade-in duration-300">
                  <div className="p-5 rounded-2xl bg-neutral-800/60 border border-neutral-700 space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center text-neutral-400 border-b border-neutral-700 pb-2">
                      <span>SKU / PRODUCT</span>
                      <span>WAREHOUSE A</span>
                      <span>SOHO STORE</span>
                      <span>STATUS</span>
                    </div>
                    <div className="flex justify-between items-center text-white py-1.5 border-b border-neutral-800">
                      <span className="font-bold">MW-BLK-M (Overshirt)</span>
                      <span>42 units</span>
                      <span>18 units</span>
                      <span className="text-emerald-400 font-bold">HEALTHY</span>
                    </div>
                    <div className="flex justify-between items-center text-white py-1.5 border-b border-neutral-800">
                      <span className="font-bold">BE-100ML (Scalp Tonic)</span>
                      <span>8 units</span>
                      <span>2 units</span>
                      <span className="text-amber-400 font-bold">LOW STOCK (PO SENT)</span>
                    </div>
                    <div className="flex justify-between items-center text-white py-1.5">
                      <span className="font-bold">EG-COF-250 (Guji Beans)</span>
                      <span>95 bags</span>
                      <span>30 bags</span>
                      <span className="text-emerald-400 font-bold">HEALTHY</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/80 flex items-center justify-between">
                    <span className="text-xs text-emerald-300 font-mono">
                      ● REORDER BOT ACTIVE: Automated PO #1042 triggered for Supplier 'Aroma Labs'
                    </span>
                    <span className="text-xs font-mono font-bold text-white px-2.5 py-1 bg-emerald-700 rounded-md">
                      APPROVED
                    </span>
                  </div>
                </div>
              )}

              {/* State 2: Understand Your Business UI Preview */}
              {activeTab === 2 && (
                <div className="py-8 space-y-6 relative z-10 animate-in fade-in duration-300">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700">
                      <span className="text-[10px] font-mono text-neutral-400 block">TODAY'S NET SALES</span>
                      <span className="text-2xl font-mono font-black text-white mt-1 block">$18,492.50</span>
                      <span className="text-xs font-mono text-emerald-400 mt-1 block">↑ +14.2% vs yesterday</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700">
                      <span className="text-[10px] font-mono text-neutral-400 block">TOTAL ORDERS</span>
                      <span className="text-2xl font-mono font-black text-white mt-1 block">418</span>
                      <span className="text-xs font-mono text-neutral-400 mt-1 block">Avg ticket: $44.24</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700">
                      <span className="text-[10px] font-mono text-neutral-400 block">GROSS MARGIN</span>
                      <span className="text-2xl font-mono font-black text-blue-400 mt-1 block">68.4%</span>
                      <span className="text-xs font-mono text-emerald-400 mt-1 block">Healthy target: 65%</span>
                    </div>
                  </div>

                  {/* Simulated Velocity Bar Chart */}
                  <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
                    <span className="text-xs font-mono font-bold text-neutral-400 block uppercase">
                      HOURLY TRANSACTION VELOCITY (SOHO FLAGSHIP)
                    </span>
                    <div className="h-28 flex items-end gap-2 pt-2">
                      {[35, 45, 60, 90, 110, 85, 95, 120, 140, 115, 90, 70].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                          <div
                            style={{ height: `${h}%` }}
                            className="w-full bg-blue-600 rounded-t-sm group-hover/bar:bg-blue-400 transition-colors"
                          />
                          <span className="text-[9px] font-mono text-neutral-600">{i + 9}h</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Subtle Status Bar */}
              <div className="pt-4 border-t border-neutral-800 flex justify-between items-center text-xs font-mono text-neutral-500 relative z-10">
                <span>ENCRYPTED REAL-TIME WEBSOCKET</span>
                <span className="text-neutral-400">LATENCY: 18ms</span>
              </div>

              {/* Background Ambient Glow */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

