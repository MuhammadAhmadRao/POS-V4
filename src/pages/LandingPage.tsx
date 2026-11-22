import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { FloatingNav } from '../components/layout/FloatingNav';
import { HeroSection } from '../components/landing/HeroSection';
import { CategoriesSection } from '../components/landing/CategoriesSection';
import { HighlightsSection } from '../components/landing/HighlightsSection';
import { FeatureExplorer } from '../components/landing/FeatureExplorer';
import { RetailShowcase } from '../components/landing/RetailShowcase';
import { SalonShowcase } from '../components/landing/SalonShowcase';
import { RestaurantShowcase } from '../components/landing/RestaurantShowcase';
import { UnifiedEngine } from '../components/landing/UnifiedEngine';
import { LiveDashboard } from '../components/landing/LiveDashboard';
import { HardwareSection } from '../components/landing/HardwareSection';
import { ObsidianSection } from '../components/landing/ObsidianSection';
import { ConversionSection } from '../components/landing/ConversionSection';
import { FaqSection } from '../components/landing/FaqSection';
import { ClosingCta } from '../components/landing/ClosingCta';
import { Footer } from '../components/layout/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-daylight-base text-obsidian-950 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden w-full">
      {/* 1. Initial Top Navigation */}
      <Navbar />

      {/* 2. Scroll-Triggered Floating Pill Navigation Dock */}
      <FloatingNav />

      {/* 3. Main Editorial Landing Page Sections */}
      <main>
        {/* Editorial Hero */}
        <HeroSection />

        {/* Business Category Introduction */}
        <CategoriesSection />

        {/* Sticky Product Highlights */}
        <HighlightsSection />

        {/* Explore All Features Accordion */}
        <FeatureExplorer />

        {/* Industry Deep Dive: Retail & Shop */}
        <RetailShowcase />

        {/* Industry Deep Dive: Salon & Beauty */}
        <SalonShowcase />

        {/* Industry Deep Dive: Restaurant & Hospitality (Preview) */}
        <RestaurantShowcase />

        {/* Unified Business Management Engine */}
        <UnifiedEngine />

        {/* Live Executive Dashboard Demonstration */}
        <LiveDashboard />

        {/* Hardware & Physical Commerce */}
        <HardwareSection />

        {/* Dramatic Obsidian Dark Canvas Shift */}
        <ObsidianSection />

        {/* Transparent Pricing & Conversion Plans */}
        <ConversionSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* High-Impact Closing CTA */}
        <ClosingCta />
      </main>

      {/* 4. Architectural Mega-Footer */}
      <Footer />
    </div>
  );
};

