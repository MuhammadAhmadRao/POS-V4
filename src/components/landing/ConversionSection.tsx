import React, { useState } from 'react';
import { KickerBadge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlanTier {
  id: string;
  name: string;
  priceMonthly: string;
  priceAnnual: string;
  target: string;
  processing: string;
  features: string[];
  isPopular?: boolean;
}

const PLANS: PlanTier[] = [
  {
    id: 'starter',
    name: 'ManageO Starter',
    priceMonthly: '$39',
    priceAnnual: '$29',
    target: 'Single-location boutiques, salons & cafes',
    processing: 'Flat 2.5% + 10¢ in-person • 2.9% + 30¢ online',
    features: [
      '1 Active Point of Sale Register',
      'Up to 1,000 Catalog Products & Variants',
      'Real-Time Inventory Tracking',
      'Customer Directory & Digital Receipts',
      'Encrypted Offline Mode',
      'Email & Community Support',
    ],
  },
  {
    id: 'growth',
    name: 'ManageO Growth',
    priceMonthly: '$99',
    priceAnnual: '$79',
    target: 'Growing retail shops & multi-chair salons',
    processing: 'Flat 2.4% + 10¢ in-person • 2.8% + 30¢ online',
    features: [
      'Up to 3 Active Registers Included',
      'Unlimited Products & Matrix Variants',
      'Staff Shifts, Timeclock & Commission Splits',
      'Automated Low-Stock Purchase Orders',
      'Multi-Branch Inventory Transfers',
      'Loyalty Rewards Program',
      '24/7 Priority Telephone & Chat Support',
    ],
    isPopular: true,
  },
  {
    id: 'enterprise',
    name: 'ManageO Enterprise',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    target: 'Multi-store chains & franchise operations',
    processing: 'Custom Interchange-Plus Volume Rates',
    features: [
      'Unlimited Registers & Store Branches',
      'Centralized Franchise Master Catalog',
      'Granular Manager Permission Overrides',
      'Custom API & Webhook Integrations',
      'Dedicated Account Executive',
      'White-Glove Product & Data Migration',
    ],
  },
];

export const ConversionSection: React.FC = () => {
  const [annualBilling, setAnnualBilling] = useState<boolean>(true);

  return (
    <section id="pricing" className="py-24 md:py-36 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <KickerBadge label="TRANSPARENT PRICING &amp; PLANS" accentColor="#2563EB" />
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 leading-[1.05] mt-2">
            Ready to bring your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-blue-700">
              business together?
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Predictable software pricing. Transparent flat processing rates. Zero hidden gateway markups or cancellation fees.
          </p>

          {/* Monthly vs Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-bold">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-4 py-2 rounded-full transition-all ${
                !annualBilling ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              MONTHLY BILLING
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                annualBilling ? 'bg-blue-600 text-white shadow-md' : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              <span>ANNUAL (SAVE 20%)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            const price = annualBilling ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={plan.id}
                className={`rounded-4xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? 'bg-neutral-900 text-white border-2 border-blue-500 shadow-2xl scale-[1.02]'
                    : 'bg-[#F8F9FA] text-neutral-900 border border-neutral-200/90 hover:shadow-xl'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-[10px] font-mono font-bold tracking-widest uppercase rounded-full shadow-md">
                    MOST POPULAR FOR GROWING SHOPS
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-black">{plan.name}</h3>
                  </div>
                  <p className={`text-xs ${plan.isPopular ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {plan.target}
                  </p>

                  {/* Price Banner */}
                  <div className="my-6 pb-6 border-b border-neutral-200/40">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-mono font-black">{price}</span>
                      {price !== 'Custom' && (
                        <span className={`text-xs font-mono ${plan.isPopular ? 'text-neutral-400' : 'text-neutral-500'}`}>
                          / month
                        </span>
                      )}
                    </div>
                    <span className={`text-[11px] font-mono block mt-2 ${plan.isPopular ? 'text-blue-400' : 'text-blue-600'}`}>
                      {plan.processing}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                      plan.isPopular ? 'text-neutral-400' : 'text-neutral-500'
                    }`}>
                      WHAT&apos;S INCLUDED:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-medium">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? 'text-blue-400' : 'text-emerald-600'}`} />
                        <span className={plan.isPopular ? 'text-neutral-300' : 'text-neutral-700'}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200/30">
                  <Link to="/signup">
                    <Button
                      variant={plan.isPopular ? 'primary' : 'dark'}
                      size="md"
                      className="w-full"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      {price === 'Custom' ? 'Talk to Sales' : 'Start 14-Day Free Trial'}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Migration Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-[#F8F9FA] border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-neutral-800">
              <strong>Switching from Square, Clover, or Shopify POS?</strong> We provide 100% free catalog, customer, and inventory import with zero downtime.
            </span>
          </div>
          <Link to="/signup">
            <span className="text-xs font-mono font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider whitespace-nowrap">
              REQUEST FREE MIGRATION →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
