import React, { useState } from 'react';
import { KickerBadge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SalonChit } from '../ui/SalonChit';
import { Calendar, Clock, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { asset } from '../../utils/assets';

interface AppointmentSlot {
  time: string;
  client: string;
  service: string;
  duration: string;
  price: string;
  status: 'booked' | 'in-progress' | 'available';
  formula?: string;
}

const APPOINTMENTS: AppointmentSlot[] = [
  {
    time: '10:00 AM',
    client: 'Sophia Reynolds',
    service: 'Precision Cut & Blowout',
    duration: '60 min',
    price: '$110.00',
    status: 'booked',
  },
  {
    time: '11:30 AM',
    client: 'Genevieve Laurent',
    service: 'Balayage & Glossing',
    duration: '90 min',
    price: '$195.00',
    status: 'in-progress',
    formula: 'Wella 8/38 (30g) + 9/16 (15g) with 20vol developer',
  },
  {
    time: '02:00 PM',
    client: 'Julian Vance',
    service: 'Beard Sculpt & Scalp Treatment',
    duration: '45 min',
    price: '$75.00',
    status: 'booked',
  },
  {
    time: '03:15 PM',
    client: 'Open Slot',
    service: 'Available for Walk-in or Online Booking',
    duration: '45 min',
    price: '—',
    status: 'available',
  },
];

export const SalonShowcase: React.FC = () => {
  const [selectedTip, setSelectedTip] = useState<number>(20);
  const baseServiceTotal = 195.0;
  const tipAmount = (baseServiceTotal * selectedTip) / 100;
  const grandTotal = baseServiceTotal + tipAmount;

  return (
    <section id="salon" className="py-24 md:py-36 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <KickerBadge label="SALON & BEAUTY OPERATIONS" accentColor="#E11D48" />
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 leading-[1.05] mt-2">
            Make every<br />
            <span className="text-rose-600">appointment count.</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Designed for luxury hair salons, modern spas, barbershops, and aesthetics clinics. Unify stylist chair scheduling, confidential color formulas, tip distribution, and 24/7 online client rebooking.
          </p>
        </div>

        {/* Salon Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Stylist Chair Timeline & Tip Splitter */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-3xl bg-neutral-50 border border-neutral-200 p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center font-mono text-sm">
                    MT
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg">Master Stylist: Marcus Thorne</h3>
                    <span className="text-xs font-mono text-neutral-500">CHAIR 02 • SCHEDULE FOR TODAY</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-rose-50 text-rose-700 text-xs font-mono font-bold rounded-full border border-rose-200">
                  92% BOOKED
                </span>
              </div>

              {/* Timeline Appointments */}
              <div className="space-y-3">
                {APPOINTMENTS.map((apt, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-2xl border transition-all ${
                      apt.status === 'in-progress'
                        ? 'bg-white border-rose-300 shadow-md ring-1 ring-rose-400/20'
                        : apt.status === 'available'
                        ? 'bg-dashed border-dashed border-neutral-300 text-neutral-400'
                        : 'bg-white/80 border-neutral-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-neutral-700 min-w-16">
                          {apt.time}
                        </span>
                        <div>
                          <span className={`text-sm font-bold block ${apt.status === 'in-progress' ? 'text-rose-900' : 'text-neutral-900'}`}>
                            {apt.client}
                          </span>
                          <span className="text-xs text-neutral-500">{apt.service}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-mono text-xs font-bold text-neutral-900 block">{apt.price}</span>
                        <span className="text-[10px] font-mono text-neutral-500">{apt.duration}</span>
                      </div>
                    </div>

                    {apt.formula && (
                      <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-neutral-600 bg-rose-50/50 p-2 rounded-lg">
                        <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span><strong>Formula:</strong> {apt.formula}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Interactive Tip Split Calculator */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-500 uppercase">
                    INTEGRATED TIP SPLITTER (CHECKOUT)
                  </span>
                  <span className="text-xs font-mono text-neutral-400">SERVICE: $195.00</span>
                </div>

                <div className="flex gap-2">
                  {[15, 18, 20, 25].map((tip) => (
                    <button
                      key={tip}
                      onClick={() => setSelectedTip(tip)}
                      className={`flex-1 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                        selectedTip === tip
                          ? 'bg-rose-600 text-white shadow-md'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {tip}% (${((baseServiceTotal * tip) / 100).toFixed(2)})
                    </button>
                  ))}
                </div>

                <div className="pt-2 flex justify-between items-center text-sm font-mono border-t border-neutral-100">
                  <span className="text-neutral-600">Total with {selectedTip}% Tip:</span>
                  <span className="text-lg font-black text-rose-700">${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <Calendar className="w-5 h-5 text-rose-600 mb-2" />
                <h4 className="font-bold text-sm text-neutral-900">24/7 Online Booking</h4>
                <p className="text-xs text-neutral-500 mt-1">Branded self-service booking page linked to your Instagram and website.</p>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <Clock className="w-5 h-5 text-rose-600 mb-2" />
                <h4 className="font-bold text-sm text-neutral-900">SMS Reminders</h4>
                <p className="text-xs text-neutral-500 mt-1">Automated text messages that reduce expensive client no-shows by 78%.</p>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <Heart className="w-5 h-5 text-rose-600 mb-2" />
                <h4 className="font-bold text-sm text-neutral-900">Commission Splits</h4>
                <p className="text-xs text-neutral-500 mt-1">Automatic payroll calculations for booth renters and commissioned staff.</p>
              </div>
            </div>
          </div>

          {/* Right Column: High Fashion Visual Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center gap-8">
            <SalonChit className="w-full max-w-[320px]" />

            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-sm w-full relative group">
              <img
                src={asset('images/salon-hero.jpg')}
                alt="Salon Stylist at work"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-mono text-xs font-bold uppercase tracking-wider">
                  "ManageO saved each of our 6 stylists 45 minutes of scheduling chaos every single day."
                </span>
              </div>
            </div>

            <Link to="/signup" className="w-full">
              <Button variant="rose" size="lg" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                Launch Your Salon on ManageO
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

