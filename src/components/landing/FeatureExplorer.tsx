import React, { useState } from 'react';
import { KickerBadge } from '../ui/Badge';
import { Plus, Minus, Check, ArrowRight, Smartphone, Shield, Layers, Users, Building, DollarSign, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCategory {
  id: string;
  num: string;
  title: string;
  count: number;
  tagline: string;
  description: string;
  subfeatures: string[];
  icon: React.ReactNode;
}

const CATEGORIES: FeatureCategory[] = [
  {
    id: 'sales-checkout',
    num: '01',
    title: 'Sales & Checkout',
    count: 6,
    tagline: 'Every way to transact, in person and online.',
    description: 'Provide your customers with lightning-fast checkout. From Tap-to-Pay on personal smartphones to multi-tender splits and custom digital receipts, ManageO eliminates friction at the payment counter.',
    subfeatures: [
      'Tap to Pay on iPhone and Android (no extra hardware required)',
      'Split tender by item, seat, or percentage in seconds',
      'Encrypted Offline Mode for continuous sales during connectivity loss',
      'Automated digital SMS and email receipts with customer re-engagement prompts',
      'Instant item exchanges, partial refunds, and store credit issuance',
      'Custom discount engine for happy hours, staff perks, and VIP promotions',
    ],
    icon: <Smartphone className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 'products-inventory',
    num: '02',
    title: 'Products & Inventory',
    count: 6,
    tagline: 'Precision control across all locations and warehouses.',
    description: 'Organize complex catalogs with multi-dimensional variant matrices. Manage stock transfers, print custom barcodes, and automate supplier purchase orders before bestsellers sell out.',
    subfeatures: [
      'Multi-variant matrices (Size, Color, Material, Cut, Fit)',
      'Automated low-stock threshold triggers and supplier purchase orders',
      'Barcode generation, thermal label printing, and instant laser lookup',
      'Inter-branch stock transfers with packing slip confirmation',
      'Composite product bundles and raw ingredient deduction',
      'Cycle count audits with barcode scanner reconciliation',
    ],
    icon: <Layers className="w-5 h-5 text-emerald-600" />,
  },
  {
    id: 'customers-crm',
    num: '03',
    title: 'Customers & Loyalty',
    count: 5,
    tagline: 'Turn one-time shoppers into lifelong regulars.',
    description: 'Keep a comprehensive profile for every client. Track lifetime spend, past purchase receipts, confidential service notes, and automated loyalty point balances across all store branches.',
    subfeatures: [
      'Centralized customer directory with lifetime purchase history',
      'Custom customer tags (VIP, Wholesale, Local Resident, Staff)',
      'Automated loyalty rewards points and tier progression',
      'Confidential client formula notes and preference records',
      'Targeted SMS & email marketing campaigns based on visit recency',
    ],
    icon: <Users className="w-5 h-5 text-rose-600" />,
  },
  {
    id: 'employees-permissions',
    num: '04',
    title: 'Employees & Permissions',
    count: 5,
    tagline: 'Empower your team while securing your bottom line.',
    description: 'Manage staff shifts, track time-clock attendance, and calculate commission splits with granular role-based access control protecting your sensitive profit margins.',
    subfeatures: [
      'Role-based access matrix (Cashier, Senior Stylist, Store Manager, Admin)',
      'Shift scheduling with drag-and-drop roster management',
      'Integrated time clock with photo or PIN punch verification',
      'Automated commission and gratuity distribution per team member',
      'Manager override requirements for refunds, voids, and price discounts',
    ],
    icon: <Shield className="w-5 h-5 text-amber-600" />,
  },
  {
    id: 'branch-management',
    num: '05',
    title: 'Branch Management',
    count: 5,
    tagline: 'Scale from a single boutique to fifty locations.',
    description: 'Centralize your entire multi-location business. Maintain a single master catalog, compare branch performance, and transfer inventory effortlessly between locations.',
    subfeatures: [
      'Centralized master catalog with branch-specific pricing overrides',
      'Inter-store stock transfer workflows and real-time transit logs',
      'Consolidated multi-branch financial reporting and tax exports',
      'Unified customer directory accessible from any register location',
      'Franchise permission tiers for regional managers and headquarters',
    ],
    icon: <Building className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 'finance-cash',
    num: '06',
    title: 'Finance & Till Management',
    count: 5,
    tagline: 'To-the-penny cash drawer reconciliation and clean ledgers.',
    description: 'Eliminate end-of-day register discrepancies. Conduct blind cash drops, log petty cash expenses, and balance your tills with automated multi-rate tax calculations.',
    subfeatures: [
      'Daily register opening float and end-of-day cash reconciliation',
      'Blind cash drops to prevent staff shrinkage and counting bias',
      'Petty cash expenditure logging with receipt capture',
      'Multi-jurisdiction automated tax calculation (State, County, City)',
      'Direct journal synchronization to QuickBooks, Xero, and CSV ledgers',
    ],
    icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
  },
  {
    id: 'reports-analytics',
    num: '07',
    title: 'Reports & Real-Time Analytics',
    count: 6,
    tagline: 'Your business pulse rendered in actionable intelligence.',
    description: 'Know your exact numbers every hour. Monitor real-time gross margins, track peak sales velocity, and identify dead inventory before it ties up valuable working capital.',
    subfeatures: [
      'Real-time gross margin and net profit dashboards',
      'Hourly sales velocity curves to optimize staff scheduling',
      'Dead-stock and slow-moving product identification',
      'Top-performing staff sales leaderboards and commission summaries',
      'Inventory reorder forecasting based on 90-day moving averages',
      'Automated daily executive summary emails delivered to owners',
    ],
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
  },
];

export const FeatureExplorer: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('sales-checkout');

  const toggleRow = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="features" className="py-24 md:py-36 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <KickerBadge label="EXPLORE ALL FEATURES" accentColor="#2563EB" />
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 leading-[1.05] mt-2">
            Everything works<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-blue-700">
              better together.
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            A comprehensive suite of operational capabilities engineered to run every department of your business from one unified system.
          </p>
        </div>

        {/* Oversized Editorial Accordion */}
        <div className="border-t border-neutral-200 divide-y divide-neutral-200">
          {CATEGORIES.map((cat) => {
            const isExpanded = expandedId === cat.id;
            return (
              <div key={cat.id} className="py-8 transition-colors">
                {/* Accordion Row Trigger */}
                <div
                  onClick={() => toggleRow(cat.id)}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="font-mono text-sm md:text-base font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                      {cat.num}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors">
                        {cat.title}
                      </h3>
                      <span className="text-xs font-mono font-semibold text-neutral-400 mt-1 block">
                        ({cat.count} VERIFIED CAPABILITIES)
                      </span>
                    </div>
                  </div>

                  {/* Plus / Minus Control Button */}
                  <div className={`w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center transition-all ${
                    isExpanded ? 'bg-neutral-900 text-white rotate-180' : 'bg-neutral-50 text-neutral-800 hover:bg-neutral-100 group-hover:border-neutral-400'
                  }`}>
                    {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>

                {/* Expanded Content Drawer */}
                {isExpanded && (
                  <div className="mt-8 pt-6 border-t border-dashed border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-blue-50 text-blue-700">
                        {cat.icon}
                        <span className="text-xs font-mono font-bold uppercase">{cat.tagline}</span>
                      </div>
                      <p className="text-base text-neutral-600 leading-relaxed">
                        {cat.description}
                      </p>
                      <div className="pt-2">
                        <Link to="/signup">
                          <button className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
                            <span>Get started with {cat.title}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-7 bg-neutral-50 rounded-3xl p-6 border border-neutral-100">
                      <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase mb-4 tracking-wider">
                        FEATURE BREAKDOWN &amp; WORKFLOW SPECIFICATIONS
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {cat.subfeatures.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 font-medium p-2.5 rounded-xl bg-white border border-neutral-100 shadow-sm">
                            <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

