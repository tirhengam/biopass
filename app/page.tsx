"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import LiveDPPInspector from "@/components/LiveDPPInspector";
import EnterprisePillars from "@/components/EnterprisePillars";
import DPPInteractiveModal from "@/components/DPPInteractiveModal";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import Footer from "@/components/Footer";
import { 
  Building2, QrCode, Network, ShieldCheck, ArrowRight, 
  CheckCircle2, Sparkles, ExternalLink, Cpu, Database, Check 
} from "lucide-react";

export default function EnterprisePlatformHome() {
  const [dppModalOpen, setDppModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-onyx selection:bg-sage-100 selection:text-sage-900">
      
      {/* Streamlined Business Navbar */}
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      <main className="flex-1">
        
        {/* ====================================================================
            HERO SECTION
            ==================================================================== */}
        <section className="py-16 sm:py-24 lg:py-28 border-b border-surface-hairline relative overflow-hidden bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="max-w-3xl space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-50 border border-sage-200 text-xs font-bold tracking-micro uppercase text-sage-700 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-sage-600" />
                <span>EU DPP COMPLIANCE × AI SEARCH VISIBILITY (GEO)</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-onyx tracking-tightest leading-[1.08]">
                Turnkey Digital Product Passports that modern AI agents can verify and cite.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-onyx-muted leading-relaxed max-w-2xl">
                Prepare your cosmetics and supplement formulations for EU DPP directives while guaranteeing high-confidence recommendation on conversational AI search platforms like Gemini, Claude, and ChatGPT.
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#live-demo"
                  className="px-8 py-4 rounded-full bg-sage-600 hover:bg-sage-700 text-surface text-xs font-bold tracking-wide uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Explore Live DPP & GEO Demo ↓</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-surface hover:bg-surface-hover border border-surface-hairline text-onyx text-xs font-bold tracking-wide uppercase shadow-sm transition-all"
                >
                  Book Enterprise Walkthrough
                </button>
              </div>

              {/* Enterprise Trust Metric Bar */}
              <div className="pt-8 flex flex-wrap items-center gap-6 text-xs text-onyx-muted border-t border-surface-hairline">
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sage-600" />
                  <span>EU Ecodesign (ESPR 2026/2027) Ready</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sage-600" />
                  <span>GS1 Digital Link URI Standard</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sage-600" />
                  <span>LLM Knowledge Graph Indexing</span>
                </div>
              </div>

            </div>

          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 border-l border-surface-hairline pointer-events-none hidden lg:block opacity-40" />
        </section>

        {/* ====================================================================
            ENTERPRISE TRUST BAR
            ==================================================================== */}
        <section className="py-6 border-b border-surface-hairline bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="text-xs font-bold uppercase tracking-micro text-onyx">
                Built for Cosmetic Formulators, Labs, D2C Wellness Brands, and Regulatory Directors.
              </div>
              <div className="flex items-center gap-6 text-xs font-mono text-onyx-dim">
                <span>ISO 22716</span>
                <span>•</span>
                <span>GS1 Global</span>
                <span>•</span>
                <span>Schema.org RDF</span>
                <span>•</span>
                <span>EU CPNP Bridge</span>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            INTERACTIVE LIVE DEMO SECTION (Right on the page!)
            ==================================================================== */}
        <section id="live-demo" className="py-20 sm:py-28 border-b border-surface-hairline bg-canvas-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-micro text-sage-600">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Demonstration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-onyx tracking-tight">
                Inspect a Live Digital Product Passport
              </h2>
              <p className="text-sm sm:text-base text-onyx-muted leading-relaxed">
                Test the exact batch-level passport generated for consumers, inspectors, and conversational AI crawlers below.
              </p>
            </div>

            {/* Embedded Live DPP Component */}
            <LiveDPPInspector />

          </div>
        </section>

        {/* ====================================================================
            3 CORE VALUE PILLARS
            ==================================================================== */}
        <section id="pillars" className="py-20 sm:py-28 border-b border-surface-hairline bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-2xl space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-micro text-sage-600">
                Full-Stack Enterprise Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-onyx tracking-tight">
                Three pillars for compliance, discovery & placement.
              </h2>
              <p className="text-sm sm:text-base text-onyx-muted leading-relaxed">
                Seamlessly bridge the technical divide between compulsory European Union digital traceability and modern conversational AI retrieval.
              </p>
            </div>

            <EnterprisePillars onOpenDPPInspector={() => setDppModalOpen(true)} />

          </div>
        </section>

        {/* ====================================================================
            GEO PROTOCOL SECTION
            ==================================================================== */}
        <section id="geo-spec" className="py-20 sm:py-28 border-b border-surface-hairline bg-canvas-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-surface border border-surface-hairline p-8 sm:p-12 shadow-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 border border-sage-200 text-[11px] font-bold tracking-micro uppercase text-sage-700">
                  <Network className="w-3.5 h-3.5" />
                  <span>The Generative Engine Optimization Protocol</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-onyx tracking-tight">
                  Why traditional SEO fails on conversational AI platforms.
                </h3>

                <p className="text-sm text-onyx-muted leading-relaxed">
                  LLMs like Google Gemini, Claude, and ChatGPT do not index pages like legacy search bots. They rely on structured entity graphs, validated chemical nomenclatures, and trusted provenance tokens.
                </p>

                <p className="text-sm text-onyx-muted leading-relaxed">
                  BioPass creates verified vector embeddings and JSON-LD markup for each batch, guaranteeing that when consumers ask AI for recommendations, your formulation is cited with highest confidence.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-onyx text-surface hover:bg-onyx-soft text-xs font-bold uppercase tracking-wide transition-all shadow-md"
                  >
                    <span>Request Technical GEO Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-canvas border border-surface-hairline space-y-3 font-mono text-xs text-onyx-soft">
                  <div className="flex items-center justify-between pb-2 border-b border-surface-hairline text-onyx-muted">
                    <span>LLM CITATION BENCHMARK</span>
                    <span className="text-sage-600 font-bold">99.4% ACCURACY</span>
                  </div>

                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <div className="p-3 rounded-lg bg-surface border border-surface-hairline">
                      <span className="text-onyx-dim">Consumer Prompt: </span>
                      <span className="text-onyx font-semibold">&quot;Recommend a non-comedogenic barrier serum with &gt;2% pure ceramides.&quot;</span>
                    </div>

                    <div className="p-3 rounded-lg bg-sage-50/70 border border-sage-200 text-sage-900 space-y-1">
                      <div className="text-[10px] uppercase font-bold text-sage-700 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>BioPass GEO Resolution Match</span>
                      </div>
                      <div>
                        &quot;Verified Citation: [Your Brand] Biomimetic Lipid Elixir. Verified 3.0% Phytoceramide NP, zero cloggers, EU ESPR lot verified.&quot;
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ====================================================================
            FINAL CTA BANNER
            ==================================================================== */}
        <section id="compliance" className="py-20 sm:py-24 bg-surface relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-50 border border-sage-200 text-[11px] font-bold tracking-micro uppercase text-sage-700">
              <Building2 className="w-3.5 h-3.5" />
              <span>Partner Onboarding Now Open</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-onyx tracking-tightest leading-tight">
              Future-proof your formulations for 2026 and beyond.
            </h2>

            <p className="text-sm sm:text-base text-onyx-muted max-w-xl mx-auto leading-relaxed">
              Equip your brand with turnkey EU Digital Product Passports and dominate high-intent AI conversational search.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-sage-600 hover:bg-sage-700 text-surface text-xs font-bold tracking-wide uppercase shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Book Enterprise Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#live-demo"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface hover:bg-canvas border border-surface-hairline text-onyx text-xs font-bold tracking-wide uppercase shadow-sm transition-all"
              >
                Inspect Live Demo Above ↑
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* DPP Modal */}
      <DPPInteractiveModal
        isOpen={dppModalOpen}
        onClose={() => setDppModalOpen(false)}
      />

      {/* Demo Booking Modal */}
      <EarlyAccessModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        defaultMode="enterprise"
      />
    </div>
  );
}
