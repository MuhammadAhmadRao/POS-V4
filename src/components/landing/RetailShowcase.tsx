import React, { useState } from 'react';
import { KickerBadge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { BarcodeTag } from '../ui/BarcodeTag';
import { ReceiptCard } from '../ui/ReceiptCard';
import { Barcode, Scan, Layers, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RetailShowcase: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedColor, setSelectedColor] = useState<string>('Obsidian');
  const [scannedAlert, setScannedAlert] = useState<boolean>(false);

  const simulateScan = () => {
    setScannedAlert(true);
    setTimeout(() => setScannedAlert(false), 2400);
  };

  return (
    <section id="retail" className="py-24 md:py-36 bg-[#F8F9FA] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <KickerBadge label="RETAIL & SHOP OPERATIONS" accentColor="#059669" />
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 leading-[1.05] mt-2">
            Every product. Every sale.<br />
            <span className="text-emerald-700">Under control.</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            From single-door boutiques to multi-warehouse retail operations. Manage complex product variant matrices, scan barcodes with instant optical recognition, and track store-to-store stock transfers in real time.
          </p>
        </div>

        {/* Retail Interactive Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Variant & Barcode Engine */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl bg-white border border-neutral-200/90 p-8 shadow-xl shadow-black/5 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div>
                  <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider block">
                    INTERACTIVE MATRIX VARIANT ENGINE
                  </span>
                  <h3 className="text-2xl font-black text-neutral-900 mt-1">
                    Japanese Raw Selvedge Kimono Jacket
                  </h3>
                </div>
                <span className="text-xl font-mono font-extrabold text-blue-600">$240.00</span>
              </div>

              {/* Variant Matrix Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Size Selector */}
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase font-bold block mb-2">
                    SELECT SIZE: {selectedSize}
                  </span>
                  <div className="flex gap-2">
                    {['S', 'M', 'L', 'XL'].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`w-11 h-11 rounded-xl text-xs font-mono font-bold transition-all ${
                          selectedSize === s
                            ? 'bg-neutral-900 text-white shadow-md scale-105'
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selector */}
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase font-bold block mb-2">
                    SELECT COLORWAY: {selectedColor}
                  </span>
                  <div className="flex gap-2">
                    {[
                      { name: 'Obsidian', hex: '#0A0D14' },
                      { name: 'Olive Drab', hex: '#3B4D3C' },
                      { name: 'Raw Indigo', hex: '#1C2E4A' },
                      { name: 'Bone White', hex: '#E2E8F0' },
                    ].map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-11 h-11 rounded-xl border-2 transition-all flex items-center justify-center ${
                          selectedColor === c.name
                            ? 'border-blue-600 scale-105 shadow-md'
                            : 'border-transparent hover:scale-102'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        {selectedColor === c.name && (
                          <Check className={`w-4 h-4 ${c.name === 'Bone White' ? 'text-black' : 'text-white'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live SKU & Stock Breakdown across Locations */}
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center text-neutral-500 border-b border-neutral-200 pb-2">
                  <span>ACTIVE SKU: SKU-7729-{selectedSize}-{selectedColor.substring(0, 3).toUpperCase()}</span>
                  <span className="text-emerald-700 font-bold">TOTAL STOCK: 34 UNITS</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="p-2.5 rounded-lg bg-white border border-neutral-200">
                    <span className="text-neutral-500 block text-[10px]">MAIN WAREHOUSE</span>
                    <span className="font-bold text-sm text-neutral-900">22 units</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-neutral-200">
                    <span className="text-neutral-500 block text-[10px]">SOHO FLAGSHIP</span>
                    <span className="font-bold text-sm text-neutral-900">9 units</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-neutral-200">
                    <span className="text-neutral-500 block text-[10px]">BROOKLYN ANNEX</span>
                    <span className="font-bold text-sm text-amber-600">3 units (Low)</span>
                  </div>
                </div>
              </div>

              {/* Barcode Scanner Simulator Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  variant="emerald"
                  size="md"
                  icon={<Scan className="w-4 h-4" />}
                  onClick={simulateScan}
                >
                  Simulate Instant Barcode Scan
                </Button>

                {scannedAlert && (
                  <span className="text-xs font-mono font-bold text-emerald-700 animate-in fade-in flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    BEEP! Item added to cart: SKU-7729-{selectedSize}
                  </span>
                )}
              </div>
            </div>

            {/* Core Feature Bullet Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/80">
                <Barcode className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="font-bold text-sm text-neutral-900">Instant Label Printing</h4>
                <p className="text-xs text-neutral-500 mt-1">Dymo &amp; Zebra thermal printer integration with custom barcode layouts.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/80">
                <Layers className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="font-bold text-sm text-neutral-900">Matrix Auto-Generation</h4>
                <p className="text-xs text-neutral-500 mt-1">Generate 64 SKU combinations in one click with individual cost and margins.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/80">
                <Check className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="font-bold text-sm text-neutral-900">Cycle Count Audits</h4>
                <p className="text-xs text-neutral-500 mt-1">Rapid physical inventory reconciliation using mobile phone cameras.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Commerce Artifact Display */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-8">
            <div className="relative">
              <BarcodeTag />
              <div className="mt-6 flex justify-center">
                <ReceiptCard className="w-60" />
              </div>
            </div>

            <Link to="/signup" className="w-full">
              <Button variant="dark" size="lg" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                Launch Your Retail Store on ManageO
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

