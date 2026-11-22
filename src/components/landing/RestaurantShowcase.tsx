import React, { useState } from 'react';
import { KickerBadge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { KitchenTicket } from '../ui/KitchenTicket';
import { Utensils, Sparkles, ChefHat, Split, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TableNode {
  id: number;
  label: string;
  seats: number;
  guests: number;
  status: 'occupied' | 'available' | 'bill-requested';
  server: string;
  timeSeated: string;
}

const TABLES: TableNode[] = [
  { id: 1, label: 'T-01', seats: 2, guests: 2, status: 'occupied', server: 'Elena', timeSeated: '34m' },
  { id: 2, label: 'T-02', seats: 4, guests: 4, status: 'occupied', server: 'Elena', timeSeated: '18m' },
  { id: 3, label: 'T-03', seats: 6, guests: 0, status: 'available', server: '—', timeSeated: '—' },
  { id: 4, label: 'T-04', seats: 4, guests: 3, status: 'bill-requested', server: 'Mateo', timeSeated: '52m' },
  { id: 5, label: 'T-05', seats: 2, guests: 0, status: 'available', server: '—', timeSeated: '—' },
  { id: 6, label: 'T-06', seats: 8, guests: 7, status: 'occupied', server: 'Mateo', timeSeated: '12m' },
];

export const RestaurantShowcase: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<TableNode>(TABLES[1]);

  return (
    <section id="restaurant" className="py-24 md:py-36 bg-[#F8F9FA] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Prominent Preview Badge */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <KickerBadge label="RESTAURANT &amp; HOSPITALITY" accentColor="#D97706" />
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-mono font-bold tracking-wider uppercase border border-amber-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              IN ACTIVE DEVELOPMENT — EARLY ACCESS PREVIEW
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 leading-[1.05]">
            Keep every<br />
            <span className="text-amber-600">order moving.</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Engineered behind the pass and on the dining floor. We are crafting a high-tempo restaurant management suite with interactive table floor plans, multi-station Kitchen Display Systems, and frictionless split billing.
          </p>
        </div>

        {/* Floor Plan & KDS Interactive Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Table Floor Plan Simulator */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6 md:p-8 text-white space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-300">
                    INTERACTIVE DINING ROOM FLOORPLAN SIMULATION
                  </span>
                </div>
                <span className="text-xs font-mono text-amber-400 font-bold">
                  MAIN DINING ROOM (ZONE A)
                </span>
              </div>

              {/* Floor Plan Grid */}
              <div className="grid grid-cols-3 gap-4">
                {TABLES.map((table) => {
                  const isSelected = selectedTable.id === table.id;
                  return (
                    <div
                      key={table.id}
                      onClick={() => setSelectedTable(table)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer text-center ${
                        isSelected
                          ? 'bg-amber-600/20 border-amber-500 ring-2 ring-amber-500/40 shadow-lg scale-105'
                          : table.status === 'occupied'
                          ? 'bg-neutral-800 border-neutral-700 hover:border-neutral-500'
                          : table.status === 'bill-requested'
                          ? 'bg-rose-950/40 border-rose-800 hover:border-rose-600'
                          : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 text-neutral-500'
                      }`}
                    >
                      <span className="font-mono text-base font-extrabold text-white block">
                        {table.label}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400 block mt-1">
                        {table.seats} Seats ({table.guests} Guests)
                      </span>
                      <span
                        className={`inline-block mt-2 px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase ${
                          table.status === 'occupied'
                            ? 'bg-emerald-900/60 text-emerald-300'
                            : table.status === 'bill-requested'
                            ? 'bg-rose-900/60 text-rose-300'
                            : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {table.status}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Selected Table Live Information Card */}
              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-neutral-500 block uppercase">TABLE DETAILS</span>
                  <span className="text-white font-bold text-sm">
                    {selectedTable.label} • Assigned: {selectedTable.server} • Seated: {selectedTable.timeSeated}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-300">Split Check</span>
                  <span className="px-3 py-1.5 rounded-lg bg-amber-600 text-white font-bold">Fire Course 2</span>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/80">
                <ChefHat className="w-5 h-5 text-amber-600 mb-2" />
                <h4 className="font-bold text-sm text-neutral-900">Multi-Station KDS</h4>
                <p className="text-xs text-neutral-500 mt-1">Route grill, cold, and bar tickets to separate kitchen displays automatically.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/80">
                <Split className="w-5 h-5 text-amber-600 mb-2" />
                <h4 className="font-bold text-sm text-neutral-900">Equal &amp; Item Splits</h4>
                <p className="text-xs text-neutral-500 mt-1">Split check by guest seats or custom item breakdown in three quick taps.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/80">
                <Utensils className="w-5 h-5 text-amber-600 mb-2" />
                <h4 className="font-bold text-sm text-neutral-900">Table Turn Timers</h4>
                <p className="text-xs text-neutral-500 mt-1">Visual alerts when tables exceed average dining duration benchmarks.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Physical KDS Ticket & Early Access Conversion */}
          <div className="lg:col-span-5 flex flex-col items-center gap-8">
            <KitchenTicket className="w-full max-w-[320px]" />

            <div className="p-8 rounded-3xl bg-amber-50 border border-amber-200/80 w-full space-y-4">
              <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block">
                EARLY ACCESS INVITATION
              </span>
              <h3 className="text-xl font-black text-amber-950">
                Are you a restaurant or cafe operator?
              </h3>
              <p className="text-xs text-amber-800/80 leading-relaxed">
                Join our private beta group to test table management, KDS routing, and modifier engines before public release.
              </p>
              <Link to="/signup" className="block pt-2">
                <Button variant="amber" size="md" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                  Request Restaurant Early Access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

