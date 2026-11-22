import React, { useState } from 'react';
import { ManageOLogo } from './ManageOLogo';
import { 
  Sparkles, Check, Layers, Eye, Smartphone, Monitor, 
  Receipt, Barcode, Scissors, Utensils, Store
} from 'lucide-react';

interface LogoConcept {
  id: string;
  name: string;
  tagline: string;
  philosophy: string;
  symbolLight: string;
  symbolDark: string;
  wordmarkLight: string;
  wordmarkDark: string;
  isWinner?: boolean;
}

const CONCEPTS: LogoConcept[] = [
  {
    id: 'concept-1-orbit',
    name: 'Concept 01: The Orbit Nexus',
    tagline: 'Multi-Store Ecosystem in Perpetual Balance',
    philosophy: 'Concentric orbital arcs rotating around a central hub node. Symbolizes the continuous harmony of storefront transactions, warehouse stock, and multi-branch management.',
    symbolLight: '/brand/exploration/concept-1-orbit-symbol-light.svg',
    symbolDark: '/brand/exploration/concept-1-orbit-symbol-dark.svg',
    wordmarkLight: '/brand/exploration/concept-1-orbit-wordmark-light.svg',
    wordmarkDark: '/brand/exploration/concept-1-orbit-wordmark-dark.svg',
  },
  {
    id: 'concept-2-loop',
    name: 'Concept 02: The Continuous Loop',
    tagline: 'Frictionless Commerce Flow',
    philosophy: 'A single, continuous ribbon with an isometric loop. Represents the closed operational cycle: inventory in, sales processed, cash reconciled, customer retained.',
    symbolLight: '/brand/exploration/concept-2-loop-symbol-light.svg',
    symbolDark: '/brand/exploration/concept-2-loop-symbol-dark.svg',
    wordmarkLight: '/brand/exploration/concept-2-loop-wordmark-light.svg',
    wordmarkDark: '/brand/exploration/concept-2-loop-wordmark-dark.svg',
  },
  {
    id: 'concept-3-aperture',
    name: 'Concept 03: The Trilateral Core',
    tagline: 'Three Industries. One Convergence.',
    philosophy: 'Sculpted from 3 interlocking 120-degree curved sectors representing Retail, Salon, and Restaurant converging into a central aperture. Direct physical manifestation of "One Platform. Every Business."',
    symbolLight: '/brand/exploration/concept-3-aperture-symbol-light.svg',
    symbolDark: '/brand/exploration/concept-3-aperture-symbol-dark.svg',
    wordmarkLight: '/brand/exploration/concept-3-aperture-wordmark-light.svg',
    wordmarkDark: '/brand/exploration/concept-3-aperture-wordmark-dark.svg',
  },
  {
    id: 'concept-4-pulse',
    name: 'Concept 04: The Terminal Pulse (SELECTED WINNER)',
    tagline: 'Transaction Velocity & Architectural Precision',
    philosophy: 'A bold, architectural geometric O with a precision 45-degree diagonal notch at the upper right, housing an electric blue transaction pulse. Evokes contactless payment taps, laser barcode scans, and real-time cloud sync. Uncompromising legibility at 16px favicon scale.',
    symbolLight: '/brand/exploration/concept-4-pulse-symbol-light.svg',
    symbolDark: '/brand/exploration/concept-4-pulse-symbol-dark.svg',
    wordmarkLight: '/brand/exploration/concept-4-pulse-wordmark-light.svg',
    wordmarkDark: '/brand/exploration/concept-4-pulse-wordmark-dark.svg',
    isWinner: true,
  },
  {
    id: 'concept-5-meridian',
    name: 'Concept 05: The Dual Meridian',
    tagline: 'Storefront Speed & Back-Office Rigor',
    philosophy: 'Divided by a razor-thin horizontal meridian into two complementary halves: an upper light arc (customer-facing checkout) and a lower solid base (merchant ledger control).',
    symbolLight: '/brand/exploration/concept-5-meridian-symbol-light.svg',
    symbolDark: '/brand/exploration/concept-5-meridian-symbol-dark.svg',
    wordmarkLight: '/brand/exploration/concept-5-meridian-wordmark-light.svg',
    wordmarkDark: '/brand/exploration/concept-5-meridian-wordmark-dark.svg',
  },
  {
    id: 'concept-6-monogram',
    name: 'Concept 06: The Monogram Architecture',
    tagline: 'Integrated Manage + Operations',
    philosophy: 'An interlocking monogram where an ultra-minimal "M" forms the inner architectural space of the circular "O". Confident, structural, and corporate.',
    symbolLight: '/brand/exploration/concept-6-monogram-symbol-light.svg',
    symbolDark: '/brand/exploration/concept-6-monogram-symbol-dark.svg',
    wordmarkLight: '/brand/exploration/concept-6-monogram-wordmark-light.svg',
    wordmarkDark: '/brand/exploration/concept-6-monogram-wordmark-dark.svg',
  },
];

export const BrandShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'concepts' | 'winner' | 'typography' | 'colors' | 'artifacts' | 'applications'>('concepts');
  const [selectedConcept, setSelectedConcept] = useState<LogoConcept>(CONCEPTS[3]); // Default to winner
  const [conceptBgMode, setConceptBgMode] = useState<'light' | 'dark'>('light');

  return (
    <div className="min-h-screen bg-daylight-base text-obsidian-950 font-sans">
      {/* Top Brand Showcase Navigation */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-neutral-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ManageOLogo variant="primary" size={32} />
            <span className="hidden sm:inline-block px-2.5 py-0.5 text-[11px] font-mono font-bold tracking-widest uppercase bg-neutral-100 text-neutral-700 rounded-full border border-neutral-200">
              BRAND SPECIFICATION V2.0
            </span>
          </div>

          {/* Tab Navigation */}
          <nav className="flex items-center gap-1 bg-neutral-100 p-1 rounded-full border border-neutral-200/80 text-xs font-semibold">
            {[
              { id: 'concepts', label: '6 Logo Concepts' },
              { id: 'winner', label: 'Selected Identity' },
              { id: 'typography', label: 'Typography' },
              { id: 'colors', label: 'Color System' },
              { id: 'artifacts', label: 'Commerce Artifacts' },
              { id: 'applications', label: 'Brand Mockups' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-neutral-900 shadow-sm font-bold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              PHASE 02 APPROVED
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Areas */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* TAB 1: 6 LOGO CONCEPTS EXPLORATION */}
        {activeTab === 'concepts' && (
          <div className="space-y-12">
            <div>
              <div className="kicker-label text-neutral-500 mb-3">
                <span className="kicker-square bg-blue-600"></span>
                01 / BRAND IDENTITY EXPLORATION
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">
                Six Custom Logo Concepts for ManageO
              </h1>
              <p className="mt-3 text-lg text-neutral-600 max-w-3xl leading-relaxed">
                Every concept was mathematically constructed as a bespoke vector identity exploring different facets of commerce:
                network connectivity, transaction velocity, multi-industry modularity, and operational mastery.
              </p>
            </div>

            {/* Concept Selection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONCEPTS.map((concept) => (
                <div
                  key={concept.id}
                  onClick={() => setSelectedConcept(concept)}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer relative ${
                    selectedConcept.id === concept.id
                      ? 'bg-white border-blue-600 shadow-xl ring-2 ring-blue-600/20'
                      : 'bg-white/60 hover:bg-white border-neutral-200/80 hover:shadow-md'
                  }`}
                >
                  {concept.isWinner && (
                    <span className="absolute -top-3 right-6 px-3 py-1 bg-blue-600 text-white text-[10px] font-mono font-bold tracking-widest uppercase rounded-full shadow-md">
                      SELECTED WINNER
                    </span>
                  )}
                  <div className="h-28 flex items-center justify-center p-4 rounded-2xl bg-neutral-50 border border-neutral-100 mb-4">
                    <img src={concept.symbolLight} alt={concept.name} className="h-16 w-16" />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900">{concept.name}</h3>
                  <p className="text-xs font-semibold text-blue-600 mt-1">{concept.tagline}</p>
                  <p className="text-xs text-neutral-500 mt-2 line-clamp-3 leading-relaxed">
                    {concept.philosophy}
                  </p>
                </div>
              ))}
            </div>

            {/* In-Depth Inspection of Selected Concept */}
            <div className="p-8 md:p-12 rounded-3xl bg-white border border-neutral-200 shadow-lg space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    INSPECTION BENCHMARK
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-neutral-900 mt-1">
                    {selectedConcept.name}
                  </h2>
                  <p className="text-sm text-neutral-600 mt-1">{selectedConcept.philosophy}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setConceptBgMode('light')}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      conceptBgMode === 'light'
                        ? 'bg-neutral-900 text-white shadow-sm'
                        : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Daylight White
                  </button>
                  <button
                    onClick={() => setConceptBgMode('dark')}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      conceptBgMode === 'dark'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Obsidian Dark
                  </button>
                </div>
              </div>

              {/* Large Wordmark Display */}
              <div
                className={`p-12 rounded-2xl flex flex-col items-center justify-center transition-colors min-h-[180px] ${
                  conceptBgMode === 'dark' ? 'bg-[#090A0F]' : 'bg-[#F8F9FA] border border-neutral-200/60'
                }`}
              >
                <img
                  src={conceptBgMode === 'dark' ? selectedConcept.wordmarkDark : selectedConcept.wordmarkLight}
                  alt={selectedConcept.name}
                  className="max-h-20 w-auto"
                />
              </div>

              {/* Multi-Format Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
                {/* 1. Large Symbol */}
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-col items-center text-center">
                  <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase mb-4">
                    STANDALONE GLYPH
                  </span>
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img src={selectedConcept.symbolLight} alt="Glyph" className="w-16 h-16" />
                  </div>
                  <span className="text-xs text-neutral-500 mt-3">Vector SVG (64x64)</span>
                </div>

                {/* 2. Dark Mode Square */}
                <div className="p-6 rounded-2xl bg-[#090A0F] border border-neutral-800 flex flex-col items-center text-center">
                  <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase mb-4">
                    DARK SURFACES
                  </span>
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img src={selectedConcept.symbolDark} alt="Dark Glyph" className="w-16 h-16" />
                  </div>
                  <span className="text-xs text-neutral-400 mt-3">High Contrast</span>
                </div>

                {/* 3. Small Favicon Scale */}
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-col items-center text-center">
                  <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase mb-4">
                    MICRO SCALE (24px)
                  </span>
                  <div className="w-20 h-20 flex items-center justify-center gap-4">
                    <img src={selectedConcept.symbolLight} alt="Micro" className="w-6 h-6" />
                    <img src={selectedConcept.symbolLight} alt="Tiny" className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-neutral-500 mt-3">Tab &amp; Dock Clarity</span>
                </div>

                {/* 4. Single-Color Monochrome */}
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-col items-center text-center">
                  <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase mb-4">
                    MONOCHROME TEST
                  </span>
                  <div className="w-20 h-20 flex items-center justify-center grayscale contrast-200">
                    <img src={selectedConcept.symbolLight} alt="Mono" className="w-16 h-16" />
                  </div>
                  <span className="text-xs text-neutral-500 mt-3">Print &amp; Thermal Receipt</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SELECTED IDENTITY & PRODUCTION ASSETS */}
        {activeTab === 'winner' && (
          <div className="space-y-12">
            <div>
              <div className="kicker-label text-blue-600 mb-3">
                <span className="kicker-square bg-blue-600"></span>
                THE OFFICIAL MANAGEO BRAND MARK
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">
                The Terminal Pulse: Design Rationale &amp; Deliverables
              </h1>
              <p className="mt-3 text-lg text-neutral-600 max-w-3xl leading-relaxed">
                Concept 04 was selected for its razor-sharp balance of <strong>architectural typography</strong> and 
                a <strong>distinctive signature "O"</strong> that embodies transaction speed, cloud sync, and operational control.
              </p>
            </div>

            {/* Geometric Construction Anatomy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-neutral-900 text-white space-y-6">
                <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  GEOMETRIC ANATOMY &amp; GRID
                </span>
                <h3 className="text-2xl font-black">The Signature "O" Construction</h3>
                <ul className="space-y-4 text-sm text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                    <span><strong>310° Precision Outer Ring:</strong> Outer circle radius of 24px with a 6.5px stroke weight, sweeping from 25° clockwise to 85° with rounded terminal caps.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                    <span><strong>45° Dynamic Aperture Notch:</strong> Positioned at the 2 o'clock position (1:30 to 2:30), symbolizing a physical card tap slot, an optical laser scan path, or an open communication port.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                    <span><strong>The Transaction Pulse Core:</strong> High-chroma Electric Cobalt circle (r=4.8px) nestled in the aperture, commanding attention and grounding the mark with tech authority.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
                    <span><strong>Negative Space Optical Kerning:</strong> The "O" aligns optically with the 38px Cap Height and 27px x-height of the wordmark, maintaining uniform baseline rhythm.</span>
                  </li>
                </ul>
              </div>

              {/* Live Vector Construction Diagram */}
              <div className="p-8 rounded-3xl bg-white border border-neutral-200 flex flex-col items-center justify-center relative">
                <div className="w-64 h-64 relative flex items-center justify-center border border-dashed border-neutral-300 rounded-2xl bg-neutral-50/50">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-px bg-blue-200"></div>
                    <div className="h-full w-px bg-blue-200 absolute"></div>
                    <div className="w-48 h-48 border border-blue-200/80 rounded-full absolute"></div>
                    <div className="w-32 h-32 border border-blue-200/80 rounded-full absolute"></div>
                    {/* 45 deg line */}
                    <div className="w-full h-px bg-red-300 transform rotate-45 absolute opacity-60"></div>
                  </div>
                  <ManageOLogo variant="symbol" size={140} className="relative z-10" />
                </div>
                <span className="text-xs font-mono text-neutral-500 mt-4">
                  MATHEMATICAL COORDINATES: 64x64 VIEWBOX • 45° ANGLE APERTURE
                </span>
              </div>
            </div>

            {/* Production Deliverables Download Grid */}
            <div className="p-8 rounded-3xl bg-white border border-neutral-200 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Final Brand Deliverables (Active Files in /public/brand)</h3>
                  <p className="text-sm text-neutral-500">Every asset is generated as production-ready, clean vector SVG and high-resolution PNG.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { file: 'logo-primary.svg', label: 'Primary Brand Mark', desc: 'Light backgrounds & stationery' },
                  { file: 'logo-dark.svg', label: 'Dark Brand Mark', desc: 'Obsidian sections & terminals' },
                  { file: 'logo-monochrome.svg', label: 'Monochrome Black', desc: 'Thermal receipts & stamps' },
                  { file: 'logo-symbol.svg', label: 'Standalone Symbol', desc: 'App favicon & avatars' },
                  { file: 'logo-horizontal.svg', label: 'Wide Clearspace Lockup', desc: 'Billboard & banner headers' },
                  { file: 'logo-compact.svg', label: 'Compact Stacked Mark', desc: 'Square tags & invoice heads' },
                  { file: 'favicon.svg', label: 'Pixel-Perfect Favicon', desc: '32x32 Browser tab icon' },
                  { file: 'app-icon.svg', label: 'OS Squircle Icon', desc: 'iOS, Android & macOS container' },
                  { file: 'app-icon.png', label: 'High-Res App Icon PNG', desc: '512x512 raster export' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl border border-neutral-100 bg-neutral-50 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-neutral-900 block">{item.file}</span>
                      <span className="text-xs text-neutral-500">{item.label}</span>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-mono font-bold rounded flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      ACTIVE
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TYPOGRAPHY SYSTEM */}
        {activeTab === 'typography' && (
          <div className="space-y-12">
            <div>
              <div className="kicker-label text-neutral-500 mb-3">
                <span className="kicker-square bg-blue-600"></span>
                02 / TYPOGRAPHIC ARCHITECTURE
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">
                Editorial Modernism &amp; Technical Precision
              </h1>
              <p className="mt-3 text-lg text-neutral-600 max-w-3xl leading-relaxed">
                ManageO combines high-impact geometric grotesque typography with crisp fixed-width tabular monospace for transaction clarity.
              </p>
            </div>

            <div className="space-y-8">
              {/* Hero Display */}
              <div className="p-8 rounded-3xl bg-white border border-neutral-200">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  HERO DISPLAY • PLUS JAKARTA SANS / CABINET GROTESK • 900 EXTRA BOLD • -0.04em TRACKING
                </span>
                <p className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] text-neutral-900 mt-4">
                  The platform for modern commerce.
                </p>
              </div>

              {/* Section H2 */}
              <div className="p-8 rounded-3xl bg-white border border-neutral-200">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  SECTION HEADING (H2) • 800 BOLD • -0.03em TRACKING
                </span>
                <p className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mt-3">
                  Engineered for every counter, chair, and table.
                </p>
              </div>

              {/* Technical Monospace */}
              <div className="p-8 rounded-3xl bg-neutral-900 text-white border border-neutral-800">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                  TECHNICAL METADATA &amp; FINANCIAL SPECIFICATIONS • JETBRAINS MONO
                </span>
                <div className="mt-4 space-y-2 font-mono text-sm">
                  <p className="text-emerald-400">● LIVE REGISTER 04 — SOHO FLAGSHIP: SYNC OK (24ms)</p>
                  <p className="text-neutral-300">TOTAL VOLUME: $18,492.50 • 418 TRANSACTIONS • AVG TICKET: $44.24</p>
                  <p className="text-neutral-400">SKU: MW-BLK-M • EAN: 8 901234 567890 • MARGIN: 68.4%</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: COLOR SYSTEM */}
        {activeTab === 'colors' && (
          <div className="space-y-12">
            <div>
              <div className="kicker-label text-neutral-500 mb-3">
                <span className="kicker-square bg-blue-600"></span>
                03 / COLOR PALETTE &amp; CANVAS ARCHITECTURE
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">
                Daylight Storefront &amp; Obsidian Engine
              </h1>
            </div>

            {/* Daylight vs Obsidian Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Daylight Swatches */}
              <div className="p-8 rounded-3xl bg-white border border-neutral-200 space-y-6">
                <h3 className="text-xl font-black text-neutral-900">Daylight Canvas (Storefront Clarity)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-neutral-200">
                    <span className="text-xs font-mono font-bold text-neutral-700 block">#F8F9FA</span>
                    <span className="text-xs text-neutral-500">Daylight Base Ground</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-neutral-200">
                    <span className="text-xs font-mono font-bold text-neutral-700 block">#FFFFFF</span>
                    <span className="text-xs text-neutral-500">Surface Cards</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#0A0D14] text-white">
                    <span className="text-xs font-mono font-bold block">#0A0D14</span>
                    <span className="text-xs text-neutral-300">Text Primary (Deep Ink)</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#2563EB] text-white">
                    <span className="text-xs font-mono font-bold block">#2563EB</span>
                    <span className="text-xs text-blue-100">Electric Cobalt Core</span>
                  </div>
                </div>
              </div>

              {/* Obsidian Swatches */}
              <div className="p-8 rounded-3xl bg-[#090A0F] text-white border border-neutral-800 space-y-6">
                <h3 className="text-xl font-black">Obsidian Canvas (Engine &amp; Hardware)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#090A0F] border border-neutral-800">
                    <span className="text-xs font-mono font-bold text-neutral-300 block">#090A0F</span>
                    <span className="text-xs text-neutral-400">Deep Obsidian Base</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#12141A] border border-neutral-800">
                    <span className="text-xs font-mono font-bold text-neutral-300 block">#12141A</span>
                    <span className="text-xs text-neutral-400">Card Surface</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FFFFFF] text-neutral-900">
                    <span className="text-xs font-mono font-bold block">#FFFFFF</span>
                    <span className="text-xs text-neutral-600">Text Primary</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#3B82F6] text-white">
                    <span className="text-xs font-mono font-bold block">#3B82F6</span>
                    <span className="text-xs text-blue-100">Dark Mode Pulse Blue</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Semantic Accents */}
            <div className="p-8 rounded-3xl bg-white border border-neutral-200 space-y-6">
              <h3 className="text-xl font-black text-neutral-900">Industry Vertical Semantic Accents</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Store className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-emerald-900">Retail &amp; Shop Emerald</span>
                  </div>
                  <p className="text-xs font-mono text-emerald-700 mt-2">#059669 • Cash Flow &amp; Stock Balance</p>
                </div>
                <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Scissors className="w-5 h-5 text-rose-600" />
                    <span className="font-bold text-rose-900">Salon &amp; Beauty Rose Dahlia</span>
                  </div>
                  <p className="text-xs font-mono text-rose-700 mt-2">#E11D48 • Aesthetics, Hair &amp; Wellness</p>
                </div>
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Utensils className="w-5 h-5 text-amber-600" />
                    <span className="font-bold text-amber-900">Restaurant Saffron Gold</span>
                  </div>
                  <p className="text-xs font-mono text-amber-700 mt-2">#D97706 • Culinary Speed &amp; Hospitality</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: COMMERCE ARTIFACTS */}
        {activeTab === 'artifacts' && (
          <div className="space-y-12">
            <div>
              <div className="kicker-label text-neutral-500 mb-3">
                <span className="kicker-square bg-blue-600"></span>
                04 / TACTILE COMMERCE VISUAL LANGUAGE
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">
                Grounding Software in Physical Reality
              </h1>
              <p className="mt-3 text-lg text-neutral-600 max-w-3xl leading-relaxed">
                ManageO bridges the gap between digital software and physical store reality through custom vector artifacts:
                itemized thermal receipts, garment hangtags, appointment chits, and kitchen display tickets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 1. Thermal Receipt */}
              <div className="flex flex-col items-center">
                <span className="text-xs font-mono font-bold text-neutral-500 uppercase mb-3 flex items-center gap-1.5">
                  <Receipt className="w-3.5 h-3.5" />
                  1. THERMAL RECEIPT (PERFORATED)
                </span>
                <div className="w-full max-w-[260px] transform hover:-translate-y-2 transition-transform duration-300">
                  <img src="/illustrations/receipt-template.svg" alt="Receipt" className="w-full h-auto drop-shadow-xl" />
                </div>
              </div>

              {/* 2. Barcode Hangtag */}
              <div className="flex flex-col items-center">
                <span className="text-xs font-mono font-bold text-neutral-500 uppercase mb-3 flex items-center gap-1.5">
                  <Barcode className="w-3.5 h-3.5" />
                  2. RETAIL BARCODE HANGTAG
                </span>
                <div className="w-full max-w-[200px] transform hover:rotate-2 transition-transform duration-300">
                  <img src="/illustrations/barcode-hangtag.svg" alt="Hangtag" className="w-full h-auto drop-shadow-xl" />
                </div>
              </div>

              {/* 3. Salon Appointment Chit */}
              <div className="flex flex-col items-center">
                <span className="text-xs font-mono font-bold text-neutral-500 uppercase mb-3">
                  3. SALON BOOKING CHIT
                </span>
                <div className="w-full max-w-[260px] transform hover:-translate-y-2 transition-transform duration-300">
                  <img src="/illustrations/salon-appointment-chit.svg" alt="Salon Chit" className="w-full h-auto drop-shadow-xl" />
                </div>
              </div>

              {/* 4. Kitchen Display Ticket */}
              <div className="flex flex-col items-center">
                <span className="text-xs font-mono font-bold text-neutral-500 uppercase mb-3">
                  4. RESTAURANT KDS TICKET
                </span>
                <div className="w-full max-w-[260px] transform hover:-translate-y-2 transition-transform duration-300">
                  <img src="/illustrations/restaurant-kitchen-ticket.svg" alt="KDS Ticket" className="w-full h-auto drop-shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: BRAND MOCKUPS */}
        {activeTab === 'applications' && (
          <div className="space-y-12">
            <div>
              <div className="kicker-label text-neutral-500 mb-3">
                <span className="kicker-square bg-blue-600"></span>
                05 / BRAND APPLICATIONS &amp; PRODUCT MOCKUPS
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">
                ManageO in the Real World
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Application 1: POS Touchscreen Terminal Header */}
              <div className="p-8 rounded-3xl bg-neutral-900 text-white space-y-4">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-blue-400" />
                  APPLICATION: CLOUD POS TERMINAL HEADER
                </span>
                <div className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-between">
                  <ManageOLogo variant="dark" size={28} />
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> ONLINE
                    </span>
                    <span className="text-neutral-400">STAFF: EMMA S.</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Clean integration into the point-of-sale top-bar, establishing brand trust without distracting from high-speed checkout workflows.
                </p>
              </div>

              {/* Application 2: Mobile App Icon */}
              <div className="p-8 rounded-3xl bg-white border border-neutral-200 space-y-4">
                <span className="text-xs font-mono font-bold text-neutral-500 uppercase flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-neutral-500" />
                  APPLICATION: iOS &amp; ANDROID HOME SCREEN ICON
                </span>
                <div className="flex items-center gap-6">
                  <img src="/brand/app-icon.svg" alt="App Icon" className="w-20 h-20 rounded-2xl shadow-xl" />
                  <div>
                    <h4 className="font-bold text-neutral-900 text-lg">ManageO POS</h4>
                    <p className="text-xs text-neutral-500 mt-1">Multi-Industry Commerce OS</p>
                    <span className="inline-block mt-2 px-2.5 py-0.5 bg-neutral-100 text-neutral-700 rounded-md text-[11px] font-mono">
                      v2.4.0 • 120Hz Native
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
