import React from 'react';
import { ManageOLogo } from '../brand/ManageOLogo';
import { Button } from '../ui/Button';
import { Shield, Cpu, Globe2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ObsidianSection: React.FC = () => {
  return (
    <section className="py-28 md:py-40 bg-[#090A0F] text-white relative overflow-hidden border-t border-neutral-800">
      {/* Background Animated Geometric Mesh Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <pattern id="gridObsidian" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridObsidian)" />
      </svg>

      {/* Radiant Glow Behind Centerpiece */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Editorial Masthead */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono font-bold text-blue-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            OBSIDIAN OPERATIONAL ENGINE
          </div>

          <h2 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95]">
            Everything connected.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
              Nothing overlooked.
            </span>
          </h2>

          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto pt-2">
            Behind the high-speed customer checkout counter lies an enterprise-grade cloud architecture. Bank-level encryption, automated ledger reconciliation, and continuous multi-branch synchronization.
          </p>
        </div>

        {/* 3 Pillar Architectural Cards in Dark Mode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Security & Compliance */}
          <div className="p-8 rounded-4xl bg-[#12141A] border border-neutral-800 hover:border-neutral-700 transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Bank-Grade Encryption</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Every card swipe, tap, and manual invoice is encrypted in transit and at rest with AES-256 and fully certified PCI-DSS Level 1 compliance.
            </p>
            <div className="pt-2 font-mono text-xs text-neutral-500">
              ● END-TO-END POINT TOKENIZATION
            </div>
          </div>

          {/* Card 2: The Terminal Pulse Hub */}
          <div className="p-8 rounded-4xl bg-[#12141A] border-2 border-blue-500/40 shadow-[0_0_40px_rgba(37,99,235,0.2)] space-y-4 relative group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <ManageOLogo variant="symbol" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white">The Terminal Pulse</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Our proprietary real-time event stream syncs orders between registers, floor tablets, and back-office accounting ledgers in under 40 milliseconds.
            </p>
            <div className="pt-2 font-mono text-xs text-blue-400 font-bold">
              ● 40MS WEBSOCKET EVENT LATENCY
            </div>
          </div>

          {/* Card 3: Global Multi-Branch Control */}
          <div className="p-8 rounded-4xl bg-[#12141A] border border-neutral-800 hover:border-neutral-700 transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Multi-Location Scaling</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Open a second boutique or five more salon chairs with one click. Centralized employee rosters, unified customer directories, and multi-currency ledgers.
            </p>
            <div className="pt-2 font-mono text-xs text-neutral-500">
              ● CROSS-LOCATION MASTER REPOSITORY
            </div>
          </div>
        </div>

        {/* Central Dark Mode Conversion Action */}
        <div className="mt-16 text-center">
          <Link to="/signup">
            <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Deploy ManageO Across Your Business
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
