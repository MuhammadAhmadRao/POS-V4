import React, { useState } from 'react';
import { KickerBadge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Smartphone, Tablet, Wifi, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HardwareItem {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  specs: string[];
  img: string;
  badge: string;
}

const HARDWARE_LINE: HardwareItem[] = [
  {
    id: 'countertop',
    name: 'ManageO Counter Station',
    tagline: 'Dual-screen point of sale with customer payment display.',
    desc: 'An integrated countertop terminal featuring an ultra-crisp merchant touchscreen and an interactive customer-facing display showing itemized charges, tips, and digital receipt capture.',
    specs: ['15.6" Full HD Merchant Screen', '8" Customer Display with NFC', 'Built-in High-Speed Thermal Printer', 'Ethernet, Wi-Fi & 4G Failover'],
    img: '/illustrations/terminal-countertop.svg',
    badge: 'FLAGSHIP COUNTER',
  },
  {
    id: 'handheld',
    name: 'ManageO Mobile Terminal',
    tagline: 'Pocket wireless terminal for curbside and floor sales.',
    desc: 'Take payments directly at retail clothing racks, salon chairs, or restaurant tables. All-day battery life, integrated receipt printer, and contactless chip reader in one rugged pocket unit.',
    specs: ['5.5" Gorilla Glass Touchscreen', 'Integrated 58mm Thermal Printer', 'All-Day 5,000mAh Battery', 'Offline Transaction Storage'],
    img: '/illustrations/terminal-handheld.svg',
    badge: 'HANDHELD MOBILITY',
  },
];

export const HardwareSection: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<HardwareItem>(HARDWARE_LINE[0]);

  return (
    <section id="hardware" className="py-24 md:py-36 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <KickerBadge label="HARDWARE & PHYSICAL COMMERCE" accentColor="#2563EB" />
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 leading-[1.05] mt-2">
            Built around the way<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-blue-700">
              business happens.
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Run on our dedicated commercial hardware suites, or bring your own iPads and Android tablets. ManageO is cloud-native and hardware-flexible.
          </p>
        </div>

        {/* Hardware Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Device Selector & Specifications */}
          <div className="lg:col-span-6 space-y-6">
            {/* Device Switcher Pills */}
            <div className="flex gap-2">
              {HARDWARE_LINE.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDevice(d)}
                  className={`px-4 py-2.5 rounded-full text-xs font-mono font-bold transition-all ${
                    activeDevice.id === d.id
                      ? 'bg-neutral-900 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-neutral-200 space-y-6 animate-in fade-in duration-200">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                {activeDevice.badge}
              </span>
              <h3 className="text-3xl font-black text-neutral-900 leading-tight">
                {activeDevice.name}
              </h3>
              <p className="text-sm font-semibold text-blue-600">{activeDevice.tagline}</p>
              <p className="text-sm text-neutral-600 leading-relaxed">{activeDevice.desc}</p>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider block">
                  TECHNICAL HARDWARE SPECIFICATIONS
                </span>
                {activeDevice.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-mono text-neutral-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link to="/signup">
                  <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    Order Hardware Kit
                  </Button>
                </Link>
                <a href="#pricing">
                  <Button variant="outline" size="md">
                    View Hardware Pricing
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Contrast Vector Hardware Display */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-12 rounded-4xl bg-neutral-950 border border-neutral-800 text-white shadow-2xl relative min-h-[440px]">
            <img
              src={activeDevice.img}
              alt={activeDevice.name}
              className="w-full max-w-xs h-auto filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transform hover:scale-105 transition-transform duration-500"
            />
            <div className="mt-8 text-center">
              <span className="text-xs font-mono text-neutral-400 block uppercase">
                BYOD COMPATIBILITY: IPAD, ANDROID, WINDOWS, MACOS
              </span>
              <span className="text-xs font-mono text-emerald-400 mt-1 block">
                ● ZERO PROPRIETARY HARDWARE LOCK-IN
              </span>
            </div>
          </div>
        </div>

        {/* BYOD Support Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-neutral-200">
            <Tablet className="w-6 h-6 text-blue-600 mb-3" />
            <h4 className="font-bold text-base text-neutral-900">Apple iPad &amp; Android Tablets</h4>
            <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
              Already have an iPad? Download the ManageO Register app and connect bluetooth card readers instantly.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-neutral-200">
            <Smartphone className="w-6 h-6 text-emerald-600 mb-3" />
            <h4 className="font-bold text-base text-neutral-900">Tap to Pay on Phone</h4>
            <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
              Turn any iPhone or Android smartphone into an NFC contactless card terminal with zero extra hardware.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-neutral-200">
            <Wifi className="w-6 h-6 text-purple-600 mb-3" />
            <h4 className="font-bold text-base text-neutral-900">Encrypted Offline Mode</h4>
            <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
              Internet drops at your store? ManageO stores encrypted transactions locally and uploads automatically when reconnected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
