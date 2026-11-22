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
    title: 'Sales & Fast Checkout',
    count: 6,
    tagline: 'High-speed counter checkout, barcode scanning and receipts.',
    description: 'Provide your customers with lightning-fast checkout. From rapid barcode laser scanning to multi-tender payment splits (Cash, Mobile, Card), order returns, and Esc/POS thermal receipts, ManageO eliminates counter delays.',
    subfeatures: [
      'Rapid optical and laser barcode scanning for 100+ items per minute',
      'Multi-tender split payments (Cash 93.4%, Mobile 4.9%, Card 1.7%)',
      'Instant item returns, refund slips, and store credit voucher issuance',
      'Offline sale mode with automatic ledger sync when connection returns',
      'Thermal receipt printing (58mm/80mm Esc/POS, USB, Bluetooth, LAN)',
      'Custom discount engine for promotional codes, employee perks, and tax-exempt items',
    ],
    icon: <Smartphone className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 'products-inventory',
    num: '02',
    title: 'Products, Stock Audits & Adjustments',
    count: 6,
    tagline: 'Total stock accountability across all branches and warehouses.',
    description: 'Organize catalogs with multi-level categories, brands, and units. Run physical cycle stock audits, execute stock adjustments with variance reasons, and trigger low-stock alerts before bestselling SKUs run out.',
    subfeatures: [
      'Comprehensive product catalog with Categories, Brands, and Units (Pcs, Box, Kg)',
      'Real-time stock valuation tracking (e.g. Rs. 11.68M inventory value)',
      'Physical stock audit reconciliation and discrepancy logging',
      'Stock adjustment workflows (Damaged, Expired, Found, Wastage)',
      'Inter-branch stock transfer slips with automated dispatch & receipt confirmation',
      'Critical low-stock warning banners (e.g. 78 out of stock items flagged)',
    ],
    icon: <Layers className="w-5 h-5 text-emerald-600" />,
  },
  {
    id: 'purchases-suppliers',
    num: '03',
    title: 'Purchases & Supplier Ledgers',
    count: 5,
    tagline: 'Complete procurement pipeline from purchase orders to payments.',
    description: 'Keep airtight control of supplier costs. Generate supplier purchase orders, record goods received notes (GRN), track accounts payable, and synchronize purchase ledgers directly with inventory valuations.',
    subfeatures: [
      'Supplier purchase order creation with unit cost and tax deductions',
      'Goods received note (GRN) verification against supplier invoices',
      'Supplier balance tracking, credit terms, and payment installments',
      'Automated stock unit cost updates upon shipment intake',
      'Purchase return tracking with credit notes and supplier refunds',
    ],
    icon: <DollarSign className="w-5 h-5 text-amber-600" />,
  },
  {
    id: 'business-branches',
    num: '04',
    title: 'Business Management & Multi-Branch Control',
    count: 5,
    tagline: 'Centralized oversight for single stores and multi-branch chains.',
    description: 'Operate multiple branch locations (like LINSOL Main Branch and Mall Branches) under one master organization. Assign user credentials, customize branch-level price tiers, and compare branch performance.',
    subfeatures: [
      'Multi-branch hierarchy with independent registers and warehouse assignments',
      'Centralized master product catalog with branch-specific price overrides',
      'Inter-branch stock transfer requests with status tracking',
      'Branch-level consolidated sales and profit comparisons',
      'LINSOL account verification and organizational identity credentials',
    ],
    icon: <Building className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 'users-roles-audit',
    num: '05',
    title: 'Users, Roles & Security Audit Logs',
    count: 5,
    tagline: 'Granular permissions and forensic fraud prevention.',
    description: 'Protect your margins with role-based access control. Define granular roles (Business Owner, Store Manager, Cashier), enforce supervisor approvals for discounts or voids, and maintain immutable audit logs.',
    subfeatures: [
      'Role-based permission matrix (Owner, Manager, Cashier, Auditor)',
      'Supervisor PIN overrides for order voids, returns, and manual discounts',
      'Forensic audit logs recording every price change, deletion, and cash drop',
      'Staff shift log-ins, session time tracking, and register handovers',
      'Granular data privacy shielding sensitive profit margins from floor cashiers',
    ],
    icon: <Shield className="w-5 h-5 text-purple-600" />,
  },
  {
    id: 'customers-crm',
    num: '06',
    title: 'Customers & Account Receivables',
    count: 5,
    tagline: 'Customer purchase histories, credit limits, and loyalty.',
    description: 'Build lasting customer relationships. Track purchase frequency, customer balances for credit accounts, contact details, and automated loyalty rewards points redeemable at checkout.',
    subfeatures: [
      'Comprehensive customer directory with total lifetime sales and orders',
      'Customer credit ledgers (Accounts Receivable) with payment tracking',
      'Loyalty point accumulation and redemption during checkout',
      'Customer tier grouping (Retail, Wholesale, VIP Client)',
      'Detailed transaction history lookup with reprinted receipt slips',
    ],
    icon: <Users className="w-5 h-5 text-rose-600" />,
  },
  {
    id: 'reports-finance',
    num: '07',
    title: 'Finance, Gross Profit & Net Analytics',
    count: 6,
    tagline: 'Real-time financial visibility: Gross Margin, Expenses & Net Profit.',
    description: 'Know your exact financial health in real time. Track gross revenue, gross profit margin (17.74%), operating expenses, and net profit (12.44%) across customizable date ranges with exportable tax and sales ledgers.',
    subfeatures: [
      'Live dual-axis sales trend charts tracking gross revenue vs order volume',
      'Payment method distribution analytics (Cash, Mobile Wallet, Card)',
      'Sales by category breakdown (Daily Use 74.98%, Beverages 24.00%, Packed Items 1.01%)',
      'Net profit calculator factoring in product cost and operating expenditures',
      'End-of-day register closure reports with cash drawer over/short discrepancy tracking',
      'Exportable financial statements in CSV, Excel, and PDF formats',
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

