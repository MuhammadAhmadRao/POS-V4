import React, { useState } from 'react';
import { KickerBadge } from '../ui/Badge';
import { ManageOLogo } from '../brand/ManageOLogo';
import { Store, ShoppingBag, Users, Shield, DollarSign, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EcosystemNode {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  metric: string;
  status: string;
  x: string;
  y: string;
}

const NODES: EcosystemNode[] = [
  { id: 'pos', title: 'Front-of-House POS', category: 'SALES ENGINE', icon: <ShoppingBag className="w-5 h-5 text-blue-600" />, metric: '$18.4K Today', status: 'Online • 3 Terminals', x: '10%', y: '15%' },
  { id: 'inventory', title: 'Unified Inventory', category: 'MULTI-WAREHOUSE', icon: <Store className="w-5 h-5 text-emerald-600" />, metric: '3,412 Active SKUs', status: 'Auto-Sync Active', x: '75%', y: '15%' },
  { id: 'staff', title: 'Workforce & Shifts', category: 'STAFF ACCESS', icon: <Users className="w-5 h-5 text-rose-600" />, metric: '14 Team Members', status: '8 Clocked In', x: '5%', y: '65%' },
  { id: 'finance', title: 'Finance & Ledgers', category: 'CASH RECONCILIATION', icon: <DollarSign className="w-5 h-5 text-amber-600" />, metric: '$3,420 Cash Float', status: 'Balanced To-The-Penny', x: '75%', y: '65%' },
  { id: 'security', title: 'Permissions & Roles', category: 'ACCESS MATRIX', icon: <Shield className="w-5 h-5 text-purple-600" />, metric: '256-Bit Encrypted', status: 'Manager Overrides On', x: '25%', y: '85%' },
  { id: 'reports', title: 'Real-Time Intelligence', category: 'ANALYTICS PULSE', icon: <BarChart3 className="w-5 h-5 text-blue-600" />, metric: '68.4% Margin', status: 'Hourly Velocity Peak', x: '60%', y: '85%' },
];

export const UnifiedEngine: React.FC = () => {
  const [activeNode, setActiveNode] = useState<EcosystemNode>(NODES[0]);

  return (
    <section id="unified" className="py-24 md:py-36 bg-white border-t border-neutral-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <KickerBadge label="UNIFIED ENGINE ARCHITECTURE" accentColor="#2563EB" />
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 leading-[1.05] mt-2">
            Your entire business.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-blue-700">
              One connected view.
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            ManageO acts as the central nervous system of your business. Front-of-house transactions instantly sync with warehouse stock, payroll splits, and financial ledgers.
          </p>
        </div>

        {/* Visual Network Architecture Diagram */}
        <div className="relative min-h-[580px] rounded-4xl bg-neutral-950 border border-neutral-800 p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
          {/* Animated Background Flow Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25">
            <line x1="20%" y1="25%" x2="50%" y2="50%" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
            <line x1="80%" y1="25%" x2="50%" y2="50%" stroke="#059669" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
            <line x1="15%" y1="75%" x2="50%" y2="50%" stroke="#E11D48" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
            <line x1="85%" y1="75%" x2="50%" y2="50%" stroke="#D97706" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
            <circle cx="50%" cy="50%" r="160" fill="none" stroke="#2563EB" strokeWidth="1" strokeDasharray="6 6" opacity="0.3" />
          </svg>

          {/* Central ManageO Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-3xl bg-neutral-900 border-2 border-blue-500 shadow-[0_0_50px_rgba(37,99,235,0.4)] flex items-center justify-center p-4">
              <ManageOLogo variant="symbol" size={60} />
            </div>
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest mt-3 block">
              MANAGEO CORE OS
            </span>
            <span className="text-[10px] font-mono text-emerald-400">● 100% SYNCHRONIZED</span>
          </div>

          {/* Interactive Node Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {NODES.slice(0, 3).map((node) => (
              <div
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer backdrop-blur-md ${
                  activeNode.id === node.id
                    ? 'bg-neutral-800/90 border-blue-500 ring-1 ring-blue-500/50 shadow-xl'
                    : 'bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800">
                    {node.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase block">{node.category}</span>
                    <h4 className="font-bold text-white text-sm">{node.title}</h4>
                  </div>
                </div>
                <div className="mt-3 flex justify-between items-center text-xs font-mono pt-2 border-t border-neutral-800/60">
                  <span className="text-white font-bold">{node.metric}</span>
                  <span className="text-neutral-400 text-[11px]">{node.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 mt-48 md:mt-0">
            {NODES.slice(3, 6).map((node) => (
              <div
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer backdrop-blur-md ${
                  activeNode.id === node.id
                    ? 'bg-neutral-800/90 border-blue-500 ring-1 ring-blue-500/50 shadow-xl'
                    : 'bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800">
                    {node.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase block">{node.category}</span>
                    <h4 className="font-bold text-white text-sm">{node.title}</h4>
                  </div>
                </div>
                <div className="mt-3 flex justify-between items-center text-xs font-mono pt-2 border-t border-neutral-800/60">
                  <span className="text-white font-bold">{node.metric}</span>
                  <span className="text-neutral-400 text-[11px]">{node.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-medium text-neutral-700">
            Experience the power of a single operational nervous system for your business.
          </span>
          <Link to="/signup">
            <button className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
              <span>Create Your Unified Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

