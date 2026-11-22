import React, { useState } from 'react';
import { KickerBadge } from '../ui/Badge';
import { ManageOLogo } from '../brand/ManageOLogo';
import {
  Wallet,
  Truck,
  ShoppingCart,
  Users,
  Undo2,
  Package,
  Boxes,
  AlertTriangle,
  Ban,
  ArrowDownLeft,
  ArrowUpRight,
  Percent,
  Tag,
  TrendingUp,
  BarChart3,
  Receipt,
  Search,
  Bell,
  RefreshCw,
  Calendar,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Building2,
  Store,
  FileText,
  DollarSign,
  Settings,
  Printer
} from 'lucide-react';

interface MetricItem {
  id: string;
  label: string;
  valuePkr: string;
  valueUsd: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  hasDrilldown?: boolean;
}

export const LiveDashboard: React.FC = () => {
  const [currency, setCurrency] = useState<'PKR' | 'USD'>('PKR');
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'overview' | 'charts' | 'inventory'>('overview');
  const [hoveredDay, setHoveredDay] = useState<number | null>(21);

  const METRICS: MetricItem[] = [
    {
      id: 'sales',
      label: 'Total Sales',
      valuePkr: 'Rs. 3,603,570.29',
      valueUsd: '$12,962.50',
      subtitle: 'Gross sales before discounts, returns and tax',
      icon: <Wallet className="w-5 h-5 text-blue-600" />,
      iconBg: 'bg-blue-100',
    },
    {
      id: 'purchases',
      label: 'Total Purchases',
      valuePkr: 'Rs. 4,605.00',
      valueUsd: '$16.50',
      subtitle: 'Purchase invoices in this period, including tax; excludes cancelled purchases',
      icon: <Truck className="w-5 h-5 text-amber-600" />,
      iconBg: 'bg-amber-100',
      hasDrilldown: true,
    },
    {
      id: 'orders',
      label: 'Total Orders',
      valuePkr: '95',
      valueUsd: '95',
      subtitle: 'Completed, paid orders in this period',
      icon: <ShoppingCart className="w-5 h-5 text-emerald-600" />,
      iconBg: 'bg-emerald-100',
    },
    {
      id: 'customers',
      label: 'Total Customers',
      valuePkr: '0',
      valueUsd: '0',
      subtitle: '0 active customers; current directory',
      icon: <Users className="w-5 h-5 text-purple-600" />,
      iconBg: 'bg-purple-100',
    },
    {
      id: 'returns',
      label: 'Sales Returns',
      valuePkr: 'Rs. 1,280.00',
      valueUsd: '$4.60',
      subtitle: '3 posted returns; before reversed discounts, excludes tax',
      icon: <Undo2 className="w-5 h-5 text-rose-600" />,
      iconBg: 'bg-rose-100',
      hasDrilldown: true,
    },
    {
      id: 'products',
      label: 'Total Products',
      valuePkr: '96',
      valueUsd: '96',
      subtitle: 'Current authorized product catalog',
      icon: <Package className="w-5 h-5 text-amber-600" />,
      iconBg: 'bg-amber-100',
    },
    {
      id: 'stockValue',
      label: 'Stock Value',
      valuePkr: 'Rs. 11,684,499.00',
      valueUsd: '$42,030.00',
      subtitle: 'Current on-hand stock at configured purchase cost',
      icon: <Boxes className="w-5 h-5 text-blue-600" />,
      iconBg: 'bg-blue-100',
    },
    {
      id: 'lowStock',
      label: 'Low Stock Items',
      valuePkr: '0',
      valueUsd: '0',
      subtitle: 'Low and critical product / branch positions',
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      iconBg: 'bg-amber-100',
    },
    {
      id: 'outOfStock',
      label: 'Out of Stock',
      valuePkr: '78',
      valueUsd: '78',
      subtitle: 'Product / branch positions with no available stock',
      icon: <Ban className="w-5 h-5 text-rose-600" />,
      iconBg: 'bg-rose-100',
    },
    {
      id: 'receivables',
      label: 'Total Receivables',
      valuePkr: 'Rs. 0.00',
      valueUsd: '$0.00',
      subtitle: 'Current unpaid customer invoice balances',
      icon: <ArrowDownLeft className="w-5 h-5 text-emerald-600" />,
      iconBg: 'bg-emerald-100',
    },
    {
      id: 'payables',
      label: 'Total Payables',
      valuePkr: 'Rs. 0.00',
      valueUsd: '$0.00',
      subtitle: 'Current supplier invoices less confirmed payments',
      icon: <ArrowUpRight className="w-5 h-5 text-amber-600" />,
      iconBg: 'bg-amber-100',
    },
    {
      id: 'tax',
      label: 'Tax Collection',
      valuePkr: 'Rs. 387.71',
      valueUsd: '$1.40',
      subtitle: 'Output tax on sales, less return tax reversals',
      icon: <Percent className="w-5 h-5 text-teal-600" />,
      iconBg: 'bg-teal-100',
      hasDrilldown: true,
    },
    {
      id: 'discounts',
      label: 'Discounts',
      valuePkr: 'Rs. 10,135.62',
      valueUsd: '$36.45',
      subtitle: 'Line and invoice discounts, less return reversals',
      icon: <Tag className="w-5 h-5 text-rose-600" />,
      iconBg: 'bg-rose-100',
      hasDrilldown: true,
    },
    {
      id: 'revenue',
      label: 'Revenue',
      valuePkr: 'Rs. 3,592,154.67',
      valueUsd: '$12,921.40',
      subtitle: 'Net sales after discounts and approved returns; excludes tax',
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      iconBg: 'bg-indigo-100',
    },
    {
      id: 'grossProfit',
      label: 'Gross Profit',
      valuePkr: 'Rs. 637,232.14',
      valueUsd: '$2,292.20',
      subtitle: 'Gross margin 17.74%',
      icon: <BarChart3 className="w-5 h-5 text-emerald-600" />,
      iconBg: 'bg-emerald-100',
    },
    {
      id: 'expenses',
      label: 'Operating Expenses',
      valuePkr: 'Rs. 2,746,248.80',
      valueUsd: '$9,878.60',
      subtitle: 'Rent, utilities, salaries and other recorded costs',
      icon: <Receipt className="w-5 h-5 text-amber-600" />,
      iconBg: 'bg-amber-100',
      hasDrilldown: true,
    },
    {
      id: 'netProfit',
      label: 'Net Profit',
      valuePkr: 'Rs. 446,982.14',
      valueUsd: '$1,607.85',
      subtitle: 'Net margin 12.44%',
      icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
      iconBg: 'bg-teal-100',
    },
  ];

  return (
    <section id="dashboard" className="py-24 md:py-36 bg-[#F8F9FA] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Editorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <KickerBadge label="MANAGEO BACK-OFFICE SUITE" accentColor="#0062FF" />
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-mono font-bold uppercase border border-blue-200">
              AUTHENTIC POS DEMONSTRATION
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 leading-[1.05]">
            Your entire business,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-blue-800 to-blue-600">
              rendered in real time.
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            From multi-branch inventory stock audits to real-time gross margin ledgers. Explore the production ManageO POS dashboard designed for retail stores, supermarkets, and growing multi-outlet chains.
          </p>

          {/* Currency & Control Toggles */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center rounded-xl bg-white border border-neutral-200 p-1 shadow-sm text-xs font-mono font-bold">
              <span className="px-2.5 text-neutral-400">CURRENCY:</span>
              <button
                onClick={() => setCurrency('PKR')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  currency === 'PKR' ? 'bg-blue-600 text-white shadow-sm' : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                PKR (Rs.)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  currency === 'USD' ? 'bg-blue-600 text-white shadow-sm' : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                USD ($)
              </button>
            </div>

            <div className="inline-flex items-center rounded-xl bg-white border border-neutral-200 p-1 shadow-sm text-xs font-mono font-bold">
              <span className="px-2.5 text-neutral-400">VIEW:</span>
              {(['overview', 'charts', 'inventory'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-lg capitalize transition-all ${
                    activeTab === tab ? 'bg-neutral-900 text-white shadow-sm' : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FULL PRODUCTION POS DASHBOARD CONTAINER */}
        <div className="rounded-3xl bg-white border border-neutral-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[760px]">
          
          {/* 1. LEFT SIDEBAR (Dark Navy Slate: #0F172A) */}
          <aside className="lg:col-span-3 bg-[#0F172A] text-white p-5 flex flex-col justify-between border-r border-neutral-800">
            <div className="space-y-6">
              {/* App Brand Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80">
                <ManageOLogo variant="dark" size={30} showBadge={true} />
              </div>

              {/* Navigation Menu Categories */}
              <div className="space-y-4 text-xs font-medium">
                {/* Active Dashboard Button */}
                <div className="p-2.5 rounded-xl bg-blue-600 text-white flex items-center justify-between font-bold shadow-md shadow-blue-600/30">
                  <div className="flex items-center gap-2.5">
                    <BarChart3 className="w-4 h-4" />
                    <span>Dashboard</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                </div>

                {/* Section 1: Business Management */}
                <div className="space-y-1">
                  <div className="px-2 py-1 text-[11px] font-mono text-neutral-400 font-bold uppercase tracking-wider flex items-center justify-between">
                    <span>Business Management</span>
                    <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
                  </div>
                  <div className="pl-3 space-y-1 text-neutral-300">
                    <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center gap-2 cursor-pointer transition-colors">
                      <Building2 className="w-3.5 h-3.5 text-blue-400" />
                      <span>Branches</span>
                    </div>
                    <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center gap-2 cursor-pointer transition-colors">
                      <Users className="w-3.5 h-3.5 text-purple-400" />
                      <span>Users</span>
                    </div>
                    <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center gap-2 cursor-pointer transition-colors">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Roles &amp; Permissions</span>
                    </div>
                  </div>
                </div>

                {/* Section 2: POS Modules */}
                <div className="space-y-1 pt-2">
                  <span className="px-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">
                    POS MODULES
                  </span>

                  {/* Products */}
                  <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center justify-between text-neutral-300 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 text-amber-400" />
                      <span>Products</span>
                    </div>
                    <ChevronRight className="w-3 h-3 text-neutral-500" />
                  </div>

                  {/* Inventory */}
                  <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center justify-between text-neutral-300 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Boxes className="w-3.5 h-3.5 text-blue-400" />
                      <span>Inventory</span>
                    </div>
                    <ChevronRight className="w-3 h-3 text-neutral-500" />
                  </div>

                  {/* Sales & Purchases */}
                  <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center justify-between text-neutral-300 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Sales</span>
                    </div>
                    <ChevronRight className="w-3 h-3 text-neutral-500" />
                  </div>

                  <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center justify-between text-neutral-300 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Truck className="w-3.5 h-3.5 text-amber-400" />
                      <span>Purchases</span>
                    </div>
                    <ChevronRight className="w-3 h-3 text-neutral-500" />
                  </div>

                  <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center gap-2 text-neutral-300 cursor-pointer">
                    <Users className="w-3.5 h-3.5 text-purple-400" />
                    <span>Customers</span>
                  </div>

                  <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center justify-between text-neutral-300 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Finance</span>
                    </div>
                    <ChevronRight className="w-3 h-3 text-neutral-500" />
                  </div>

                  <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center gap-2 text-neutral-300 cursor-pointer">
                    <FileText className="w-3.5 h-3.5 text-blue-400" />
                    <span>Reports &amp; Audit Log</span>
                  </div>
                </div>

                {/* Section 3: Settings */}
                <div className="space-y-1 pt-2">
                  <span className="px-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">
                    SETTINGS
                  </span>
                  <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center gap-2 text-neutral-300 cursor-pointer">
                    <Settings className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Configuration</span>
                  </div>
                  <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center gap-2 text-neutral-300 cursor-pointer">
                    <Receipt className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Receipts</span>
                  </div>
                  <div className="p-1.5 rounded-lg hover:bg-neutral-800 flex items-center gap-2 text-neutral-300 cursor-pointer">
                    <Printer className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Hardware &amp; Printing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Security Workspace Pill */}
            <div className="pt-4 border-t border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Secure business workspace</span>
            </div>
          </aside>

          {/* 2. MAIN DASHBOARD CONTENT AREA (Daylight Canvas) */}
          <main className="lg:col-span-9 bg-[#F8FAFC] flex flex-col justify-between">
            {/* Top Workspace Bar */}
            <div className="bg-white border-b border-neutral-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Branch / Account Selector */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-semibold text-neutral-800 cursor-pointer hover:bg-neutral-100 transition-colors">
                  <Store className="w-3.5 h-3.5 text-blue-600" />
                  <span>LINSOL Account Verification</span>
                  <ChevronDown className="w-3 h-3 text-neutral-400" />
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600 cursor-pointer">
                  <span>Select branch</span>
                  <ChevronDown className="w-3 h-3 text-neutral-400" />
                </div>
              </div>

              {/* Search & User Profile */}
              <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    readOnly
                    placeholder="Search anything..."
                    className="pl-8 pr-4 py-1.5 text-xs rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-700 w-44 focus:outline-none"
                  />
                </div>

                <button className="p-2 rounded-xl text-neutral-600 hover:bg-neutral-100 relative">
                  <Bell className="w-4 h-4" />
                  <span className="w-2 h-2 rounded-full bg-blue-600 absolute top-1.5 right-1.5"></span>
                </button>

                {/* User Avatar */}
                <div className="flex items-center gap-2 pl-2 border-l border-neutral-200">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    AR
                  </div>
                  <div className="hidden sm:block text-left text-xs">
                    <span className="font-bold text-neutral-900 block leading-tight">Asad Rao</span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase">BUSINESS OWNER</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Sub-Header & Range Filter Bar */}
            <div className="p-6 pb-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-black text-neutral-900 tracking-tight">Dashboard</h1>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Welcome back, Asad Rao! Here&apos;s what&apos;s happening with your business today.
                </p>
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-neutral-200 text-neutral-700 shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Dashboard period <strong>01/11/2026</strong> to <strong>22/11/2026</strong></span>
                </div>

                <div className="relative">
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="appearance-none px-3 py-1.5 pr-7 rounded-xl bg-white border border-neutral-200 text-neutral-700 shadow-sm cursor-pointer font-mono text-xs focus:outline-none"
                  >
                    <option value="all">All Authorized Branches</option>
                    <option value="linsol">LINSOL Flagship</option>
                    <option value="gulberg">Gulberg Central Studio</option>
                    <option value="dha">DHA Phase 5 Outlet</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                <button className="px-3 py-1.5 rounded-xl bg-blue-600 text-white font-bold shadow-sm hover:bg-blue-700 transition-colors">
                  Apply
                </button>

                <button className="p-2 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100 shadow-sm">
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="p-6 space-y-6">
              {/* TAB 1: OVERVIEW METRIC CARDS GRID */}
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 animate-in fade-in duration-200">
                  {METRICS.map((m) => (
                    <div
                      key={m.id}
                      className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group"
                    >
                      <div className="flex items-start justify-between">
                        <div className={`w-10 h-10 rounded-xl ${m.iconBg} flex items-center justify-center shrink-0`}>
                          {m.icon}
                        </div>
                        {m.hasDrilldown && (
                          <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 transition-colors" />
                        )}
                      </div>

                      <div className="mt-3">
                        <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider block">
                          {m.label}
                        </span>
                        <span className="text-xl font-mono font-black text-neutral-900 mt-1 block">
                          {currency === 'PKR' ? m.valuePkr : m.valueUsd}
                        </span>
                        <p className="text-[10px] text-neutral-500 mt-1 leading-snug line-clamp-2">
                          {m.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2 & 3: CHARTS & CATEGORY ANALYTICS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* 1. Daily Sales Trend Dual-Axis Chart */}
                <div className="lg:col-span-6 p-5 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                    <div>
                      <h3 className="font-bold text-sm text-neutral-900">Sales Trend</h3>
                      <p className="text-[11px] text-neutral-500">Net sales and paid order count for the selected period</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-xs font-mono font-bold">
                      Daily ⬍
                    </span>
                  </div>

                  {/* Dual Metric Legend */}
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-blue-600">
                      <span className="w-2.5 h-2.5 rounded-sm bg-blue-500"></span> Sales ({currency})
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-600">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Orders
                    </span>
                  </div>

                  {/* SVG Multi-Day Bar + Curve Visualization */}
                  <div className="h-44 w-full relative pt-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 600 140" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>

                      {/* Daily Volume Bars */}
                      {[15, 20, 18, 25, 22, 19, 28, 32, 24, 20, 26, 35, 42, 38, 48, 55, 62, 70, 85, 110, 125, 115].map((val, i) => {
                        const barWidth = 16;
                        const x = i * 27 + 10;
                        const y = 140 - val;
                        return (
                          <rect
                            key={i}
                            x={x}
                            y={y}
                            width={barWidth}
                            height={val}
                            rx={3}
                            fill={hoveredDay === i ? '#2563EB' : 'url(#barGrad)'}
                            className="cursor-pointer transition-colors"
                            onMouseEnter={() => setHoveredDay(i)}
                          />
                        );
                      })}

                      {/* Green Order Trendline */}
                      <path
                        d="M 18 120 Q 150 115 300 95 T 450 70 T 580 30"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="580" cy="30" r="4.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="2.5" />
                    </svg>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 border-t border-neutral-100 pt-2">
                    <span>01 Nov</span>
                    <span>05 Nov</span>
                    <span>09 Nov</span>
                    <span>13 Nov</span>
                    <span>17 Nov</span>
                    <span className="font-bold text-blue-600">21 Nov (Peak)</span>
                  </div>
                </div>

                {/* 2. Payment Methods Donut Chart */}
                <div className="lg:col-span-3 p-5 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-4">
                  <div className="border-b border-neutral-100 pb-3">
                    <h3 className="font-bold text-sm text-neutral-900">Payment Methods</h3>
                    <p className="text-[11px] text-neutral-500">Tender breakdown</p>
                  </div>

                  {/* Donut Graphic */}
                  <div className="flex items-center justify-center relative py-2">
                    <svg viewBox="0 0 100 100" className="w-32 h-32">
                      <circle cx="50" cy="50" r="38" fill="none" stroke="#E2E8F0" strokeWidth="12" />
                      {/* Cash: 93.4% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="12"
                        strokeDasharray="223 239"
                        strokeDashoffset="0"
                      />
                      {/* Mobile: 4.9% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="12"
                        strokeDasharray="12 239"
                        strokeDashoffset="-223"
                      />
                      {/* Card: 1.7% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="12"
                        strokeDasharray="4 239"
                        strokeDashoffset="-235"
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                      <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase">NET SALES</span>
                      <span className="text-xs font-mono font-black text-neutral-900 leading-tight">
                        {currency === 'PKR' ? 'Rs. 3.66M' : '$13.1K'}
                      </span>
                    </div>
                  </div>

                  {/* Tender Legend */}
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between items-center text-neutral-700">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span> Cash
                      </span>
                      <span className="font-bold">93.4%</span>
                    </div>
                    <div className="flex justify-between items-center text-neutral-700">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Mobile
                      </span>
                      <span className="font-bold">4.9%</span>
                    </div>
                    <div className="flex justify-between items-center text-neutral-700">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span> Card
                      </span>
                      <span className="font-bold">1.7%</span>
                    </div>
                  </div>
                </div>

                {/* 3. Sales by Category Bars */}
                <div className="lg:col-span-3 p-5 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                    <div>
                      <h3 className="font-bold text-sm text-neutral-900">Sales by Category</h3>
                      <p className="text-[11px] text-neutral-500">Net revenue contribution</p>
                    </div>
                    <span className="text-xs text-blue-600 font-bold hover:underline cursor-pointer">View All</span>
                  </div>

                  <div className="space-y-4 pt-1">
                    {/* Category 1: Daily Use */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="font-bold text-neutral-800">Daily Use</span>
                        <span className="text-blue-600 font-bold">74.98%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-neutral-100 overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '74.98%' }}></div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 block">
                        {currency === 'PKR' ? 'Rs. 2,746,248.80' : '$9,878.60'}
                      </span>
                    </div>

                    {/* Category 2: Beverages */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="font-bold text-neutral-800">Beverages</span>
                        <span className="text-emerald-600 font-bold">24.00%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-neutral-100 overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '24.00%' }}></div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 block">
                        {currency === 'PKR' ? 'Rs. 879,020.86' : '$3,162.00'}
                      </span>
                    </div>

                    {/* Category 3: Packed Items */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="font-bold text-neutral-800">Packed Items</span>
                        <span className="text-amber-600 font-bold">1.01%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-neutral-100 overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '1.01%' }}></div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 block">
                        {currency === 'PKR' ? 'Rs. 37,133.72' : '$133.50'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Activity & Stock Audit Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-white border border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-neutral-900 font-bold block">Sale Completed • INV-202611-0092</span>
                      <span className="text-neutral-400">Cash Register 01 • Asad Rao</span>
                    </div>
                  </div>
                  <span className="text-emerald-600 font-bold">JUST NOW</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                      <Boxes className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-neutral-900 font-bold block">Stock Transfer Confirmed</span>
                      <span className="text-neutral-400">Warehouse A → Soho Outlet</span>
                    </div>
                  </div>
                  <span className="text-neutral-500">12M AGO</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-neutral-900 font-bold block">Authorized Branch Synced</span>
                      <span className="text-neutral-400">All 3 Locations Online</span>
                    </div>
                  </div>
                  <span className="text-emerald-600 font-bold">● ACTIVE</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
