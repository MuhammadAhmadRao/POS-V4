import React, { useState } from 'react';
import { KickerBadge } from '../ui/Badge';
import { CreditCard, Package, Sparkles } from 'lucide-react';

interface MetricCard {
  label: string;
  value: string;
  subtext: string;
  trend: string;
  trendColor: string;
}

export const LiveDashboard: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [timeRange, setTimeRange] = useState<string>('today');

  const metrics: MetricCard[] = [
    {
      label: "NET SALES",
      value: selectedBranch === 'soho' ? '$11,420.00' : selectedBranch === 'brooklyn' ? '$7,840.00' : '$24,850.00',
      subtext: 'Across active registers',
      trend: '+14.2%',
      trendColor: 'text-emerald-400',
    },
    {
      label: 'TRANSACTION COUNT',
      value: selectedBranch === 'soho' ? '248' : selectedBranch === 'brooklyn' ? '182' : '542',
      subtext: 'Avg ticket: $45.85',
      trend: '+8.6%',
      trendColor: 'text-emerald-400',
    },
    {
      label: 'STOCK VALUATION',
      value: '$142,800.00',
      subtext: '3,412 Active SKUs',
      trend: 'Optimal',
      trendColor: 'text-blue-400',
    },
    {
      label: 'GROSS MARGIN',
      value: '68.4%',
      subtext: 'Target benchmark: 65%',
      trend: '+3.4%',
      trendColor: 'text-emerald-400',
    },
  ];

  return (
    <section id="dashboard" className="py-24 md:py-36 bg-[#F8F9FA] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <KickerBadge label="EXECUTIVE DASHBOARD" accentColor="#2563EB" />
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-mono font-bold uppercase">
              ILLUSTRATIVE PRODUCT DEMO
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 leading-[1.05]">
            Your business pulse,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-blue-700">
              rendered in real time.
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Monitor real-time cash flow, inventory levels, and hourly transaction velocity from any smartphone, tablet, or web browser.
          </p>
        </div>

        {/* The Live Illustrative Dashboard Surface */}
        <div className="rounded-4xl bg-neutral-950 border border-neutral-800 p-6 md:p-10 shadow-2xl text-white space-y-8">
          {/* Top Bar: Location Switcher & Timeframe */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-neutral-400 uppercase font-bold mr-2">BRANCH:</span>
              {[
                { id: 'all', label: 'All Locations (3)' },
                { id: 'soho', label: 'SoHo Flagship' },
                { id: 'brooklyn', label: 'Brooklyn Annex' },
                { id: 'downtown', label: 'Downtown Studio' },
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBranch(b.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                    selectedBranch === b.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-400 uppercase font-bold mr-1">RANGE:</span>
              {['today', 'week', 'month'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeRange(t)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold capitalize transition-colors ${
                    timeRange === t ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* KPI Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-wider">{m.label}</span>
                <span className="text-3xl font-mono font-black text-white mt-1 block">{m.value}</span>
                <div className="mt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">{m.subtext}</span>
                  <span className={`font-bold ${m.trendColor}`}>{m.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Hourly Velocity SVG Curve */}
          <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider block">
                  HOURLY REVENUE SPIKE &amp; SALES VELOCITY (TODAY)
                </span>
                <span className="text-xs text-neutral-500">Peak hour recorded at 14:00 ($3,420.00 / hr)</span>
              </div>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-400 font-mono text-xs border border-emerald-800/80">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> LIVE SYNC
              </span>
            </div>

            {/* SVG Visual Area Chart */}
            <div className="h-44 w-full relative pt-4">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 800 160" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area Fill */}
                <path
                  d="M 0 160 L 0 120 Q 100 140 200 90 T 400 30 T 600 70 T 800 20 L 800 160 Z"
                  fill="url(#chartGradient)"
                />
                {/* Stroke Line */}
                <path
                  d="M 0 120 Q 100 140 200 90 T 400 30 T 600 70 T 800 20"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Data Points */}
                <circle cx="200" cy="90" r="5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
                <circle cx="400" cy="30" r="6" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                <circle cx="600" cy="70" r="5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
                <circle cx="800" cy="20" r="5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
              </svg>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 pt-2 border-t border-neutral-800">
              <span>08:00 AM (OPEN)</span>
              <span>11:00 AM</span>
              <span>02:00 PM (PEAK)</span>
              <span>05:00 PM</span>
              <span>08:00 PM (CLOSE)</span>
            </div>
          </div>

          {/* Recent Live Activity Stream */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white font-bold block">Apple Pay • $185.00</span>
                  <span className="text-neutral-500">SoHo Register 02</span>
                </div>
              </div>
              <span className="text-emerald-400 font-bold">JUST NOW</span>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-950 text-blue-400">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white font-bold block">Stock Reorder Sent</span>
                  <span className="text-neutral-500">PO #1042 • 50 Units</span>
                </div>
              </div>
              <span className="text-neutral-400">3M AGO</span>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-950 text-purple-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white font-bold block">Salon Booking Confirmed</span>
                  <span className="text-neutral-500">Genevieve L. • 14:00</span>
                </div>
              </div>
              <span className="text-neutral-400">8M AGO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
