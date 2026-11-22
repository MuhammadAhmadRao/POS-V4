import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ManageOLogo } from '../brand/ManageOLogo';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ClosingCta: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      navigate(`/signup?email=${encodeURIComponent(email)}`);
    } else {
      navigate('/signup');
    }
  };

  return (
    <section className="py-20 bg-daylight-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-5xl bg-neutral-900 text-white p-8 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Subtle Radiant Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Background Monogram Watermark */}
          <div className="absolute -bottom-16 -right-12 opacity-5 pointer-events-none">
            <ManageOLogo variant="symbol" size={380} />
          </div>

          <div className="max-w-2xl relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-800 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest border border-neutral-700">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              START FREE 14-DAY TRIAL
            </div>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.02]">
              Ready to modernize your business operations?
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Experience the power of a single platform engineered for Retail, Salon, and Restaurants. Set up in 15 minutes with zero hardware lock-in.
            </p>

            {/* Instant Action Form */}
            <form onSubmit={handleStart} className="flex flex-col sm:flex-row items-center gap-3 pt-4">
              <input
                type="email"
                placeholder="Enter your work email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-80 px-5 py-3.5 rounded-full bg-neutral-800/90 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
              />
              <Button type="submit" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Get Started Free
              </Button>
            </form>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free data migration
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

