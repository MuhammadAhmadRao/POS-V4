import React, { useState } from 'react';
import { KickerBadge } from '../ui/Badge';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'What is ManageO?',
    a: 'ManageO is a unified commerce operating system designed to run front-of-house point-of-sale checkout alongside back-of-house business operations (inventory, multi-branch syncing, customer loyalty, and financial ledgers) in one integrated platform.',
  },
  {
    q: 'Which business categories does ManageO support?',
    a: 'ManageO currently offers dedicated operational workflows for Retail & Shop (apparel, boutiques, grocery, electronics) and Salon & Beauty (hair salons, barbershops, spas, wellness clinics). A dedicated Restaurant & Hospitality management suite is currently in active private beta development.',
  },
  {
    q: 'Is ManageO suitable for multiple store branches?',
    a: 'Yes. ManageO was architected from day one for multi-location businesses. You can manage a centralized master catalog, execute inter-store stock transfers, compare regional branch revenues, and share customer profiles across all your physical locations.',
  },
  {
    q: 'What happens if our store internet connection drops?',
    a: 'ManageO includes an Encrypted Offline Mode. You can continue scanning items, accepting card transactions, and printing receipts. When internet connectivity is restored, all stored transactions sync securely with the cloud ledger automatically.',
  },
  {
    q: 'Do I need to purchase proprietary ManageO hardware?',
    a: 'No. While ManageO offers dedicated commercial hardware suites (Counter Station and Mobile Terminal), the platform is fully cloud-native and supports Bring-Your-Own-Device (BYOD). You can run ManageO on any Apple iPad, Android tablet, Windows PC, or smartphone using Tap to Pay.',
  },
  {
    q: 'Is the Restaurant POS available yet?',
    a: 'The Restaurant suite (including interactive dining room table floor plans, multi-station Kitchen Display System routing, and check splitting) is currently in private beta testing with select culinary partners. You can sign up for early beta access on the platform.',
  },
  {
    q: 'Can I import my existing data from Square, Clover, or Shopify POS?',
    a: 'Yes. ManageO provides a free data migration service. Our team will import your entire product catalog, customer directories, past purchase histories, and inventory counts with zero operational downtime.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-[#F8F9FA] border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <KickerBadge label="FREQUENTLY ASKED QUESTIONS" accentColor="#2563EB" />
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 leading-tight mt-2">
            Everything you need to know about ManageO.
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Have questions about hardware, multi-branch setup, or migration? Find clear, verified operational answers below.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-3xl bg-white border border-neutral-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-lg text-neutral-900">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-neutral-700'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center text-xs font-mono text-neutral-500 flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-blue-600" />
          <span>HAVE A UNIQUE QUESTION? REACH OUR ONBOARDING TEAM AT SUPPORT@MANAGEO.IO</span>
        </div>
      </div>
    </section>
  );
};

