"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryTabs from "@/components/CategoryTabs";
import UXWalkthrough from "@/components/UXWalkthrough";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import Footer from "@/components/Footer";
import { 
  Sparkles, ArrowRight, ShieldCheck, CheckCircle2, 
  FlaskConical, Dna, Eye, Layers, Compass 
} from "lucide-react";

export default function ConsumerPage() {
  const [accessModalOpen, setAccessModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-onyx selection:bg-sage-100 selection:text-sage-900">
      
      {/* Persistent Navbar with Mode Switcher */}
      <Navbar onOpenAccessModal={() => setAccessModalOpen(true)} />

      <main className="flex-1">
        
        {/* ====================================================================
            HERO SECTION
            ==================================================================== */}
        <section className="py-16 sm:py-24 lg:py-28 border-b border-surface-hairline relative overflow-hidden bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="max-w-3xl space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-surface-hairline text-xs font-bold tracking-micro uppercase text-onyx shadow-sm">
                <span className="w-2 h-2 rounded-full bg-sage-600" />
                <span>THE CROSS-CATEGORY FORMULATION ENGINE</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-onyx tracking-tightest leading-[1.08]">
                Clarity for your skin, hair, fragrance, and daily nutrition.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-onyx-muted leading-relaxed max-w-2xl">
                BioPass unites ingredient biochemistry, clinical studies, and your biological markers to identify exactly what works for you—cutting out marketing noise across every personal-care shelf.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setAccessModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-onyx hover:bg-onyx-soft text-surface text-xs font-bold tracking-wide uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Get Early Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="#categories-section"
                  className="px-8 py-4 rounded-full bg-surface hover:bg-surface-hover border border-surface-hairline text-onyx text-xs font-bold tracking-wide uppercase shadow-sm transition-all"
                >
                  Explore the Science ↓
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-8 flex flex-wrap items-center gap-6 text-xs text-onyx-muted border-t border-surface-hairline">
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sage-600" />
                  <span>Verified INCI Toxicology</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sage-600" />
                  <span>Real-Time Ingredient Clash Shield</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sage-600" />
                  <span>Double-Blind Clinical Study Citations</span>
                </div>
              </div>

            </div>

          </div>

          {/* Subtle architectural background line */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 border-l border-surface-hairline pointer-events-none hidden lg:block opacity-40" />
        </section>

        {/* ====================================================================
            4-VERTICAL INTERACTIVE SWITCHER
            ==================================================================== */}
        <section id="categories-section" className="py-20 sm:py-28 border-b border-surface-hairline bg-canvas-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-2xl space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-micro text-sage-600">
                Four Pillars of Personal Care
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-onyx tracking-tight">
                One scientific intelligence engine. Every category of beauty and health.
              </h2>
              <p className="text-sm sm:text-base text-onyx-muted leading-relaxed">
                Interact with the vertical tabs below to see how BioPass decodes molecular compatibility across topical applications and ingested supplements.
              </p>
            </div>

            <CategoryTabs />

          </div>
        </section>

        {/* ====================================================================
            5-STAGE UX WALKTHROUGH
            ==================================================================== */}
        <section className="py-20 sm:py-28 border-b border-surface-hairline bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-2xl space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-micro text-sage-600">
                The Formulation Journey
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-onyx tracking-tight">
                From label scan to verified compatibility.
              </h2>
              <p className="text-sm sm:text-base text-onyx-muted leading-relaxed">
                Explore our five-stage methodology that translates cosmetic science into definitive personal recommendations.
              </p>
            </div>

            <UXWalkthrough />

          </div>
        </section>

        {/* ====================================================================
            FINAL CTA BANNER
            ==================================================================== */}
        <section className="py-20 sm:py-24 bg-surface relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-50 border border-sage-200 text-[11px] font-bold tracking-micro uppercase text-sage-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero-Guesswork Personal Care</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-onyx tracking-tightest leading-tight">
              Stop guessing. Start knowing your formulations.
            </h2>

            <p className="text-sm sm:text-base text-onyx-muted max-w-xl mx-auto leading-relaxed">
              Take control of what touches your skin and enters your body. Experience formulation intelligence backed by clinical dermatological trials.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setAccessModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-onyx hover:bg-onyx-soft text-surface text-xs font-bold tracking-wide uppercase shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://biopass-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface hover:bg-canvas border border-surface-hairline text-onyx text-xs font-bold tracking-wide uppercase shadow-sm transition-all"
              >
                Try the Live Prototype ↗
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Early Access Modal */}
      <EarlyAccessModal
        isOpen={accessModalOpen}
        onClose={() => setAccessModalOpen(false)}
        defaultMode="individual"
      />
    </div>
  );
}
