import React, { useState } from 'react';
import LiveDPPInspector from './LiveDPPInspector.jsx';
import EnterprisePillars from './EnterprisePillars.jsx';
import EnterpriseDemoModal from './EnterpriseDemoModal.jsx';
import { 
  Building2, QrCode, Network, ShieldCheck, ArrowRight, 
  CheckCircle2, Sparkles, ExternalLink, Cpu, Database, Check, Play 
} from 'lucide-react';

export default function BusinessLanding({ onLaunchApp }) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#191817] selection:bg-[#EAF1EC] selection:text-[#2D5A43]">
      
      {/* Top B2B Navigation */}
      <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E9E6DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A43]" />
                <span className="font-extrabold text-xl tracking-[0.16em] text-[#191817] uppercase">
                  BIOPASS
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EAF1EC] text-[#2D5A43] border border-[#BBD4C4] font-bold">
                  ENTERPRISE
                </span>
              </div>
              <span className="hidden lg:inline-block text-[11px] font-semibold uppercase tracking-wider text-[#6E6B65] pl-4 border-l border-[#E9E6DF]">
                Digital Product Passports & GEO Infrastructure
              </span>
            </div>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#live-demo" className="text-xs font-semibold text-[#191817] hover:text-[#2D5A43] transition-colors uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A43]" />
                <span>Interactive DPP Demo</span>
              </a>
              <a href="#pillars" className="text-xs font-semibold text-[#6E6B65] hover:text-[#191817] transition-colors uppercase tracking-wider">
                Core Pillars
              </a>
              <a href="#geo-spec" className="text-xs font-semibold text-[#6E6B65] hover:text-[#191817] transition-colors uppercase tracking-wider">
                GEO Protocol
              </a>
              <a href="#compliance" className="text-xs font-semibold text-[#6E6B65] hover:text-[#191817] transition-colors uppercase tracking-wider">
                ESPR Compliance
              </a>
            </nav>

            {/* Action CTAs */}
            <div className="flex items-center gap-3">
              <button
                onClick={onLaunchApp}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#191817] hover:bg-black text-white text-xs font-bold tracking-wider uppercase shadow-sm transition-all cursor-pointer"
                title="Launch the interactive consumer web app & discovery prototype"
              >
                <Play className="w-3 h-3 text-[#2D5A43] fill-current" />
                <span>Launch Prototype</span>
              </button>

              <button
                onClick={() => setDemoModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D5A43] hover:bg-[#234734] text-white text-xs font-bold tracking-wider uppercase shadow-sm transition-all cursor-pointer"
              >
                <span>Book Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        
        {/* ====================================================================
            HERO SECTION
            ==================================================================== */}
        <section className="py-16 sm:py-24 lg:py-28 border-b border-[#E9E6DF] relative overflow-hidden bg-[#FBF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1EC] border border-[#BBD4C4] text-xs font-bold tracking-wider uppercase text-[#2D5A43] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#2D5A43]" />
                <span>EU DPP COMPLIANCE × AI SEARCH VISIBILITY (GEO)</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#191817] tracking-tight leading-[1.08]">
                Turnkey Digital Product Passports that modern AI agents can verify and cite.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-[#6E6B65] leading-relaxed max-w-2xl">
                Prepare your cosmetics and supplement formulations for EU Ecodesign directives (ESPR 2026/2027) while guaranteeing high-confidence recommendation on conversational AI search platforms like Gemini, Claude, and ChatGPT.
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#live-demo"
                  className="px-8 py-4 rounded-full bg-[#2D5A43] hover:bg-[#234734] text-white text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Live DPP & GEO Demo ↓</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onLaunchApp}
                  className="px-8 py-4 rounded-full bg-[#FFFFFF] hover:bg-[#F7F5F0] border border-[#E9E6DF] text-[#191817] text-xs font-bold tracking-wider uppercase shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-[#2D5A43] fill-current" />
                  <span>Launch Web App Prototype →</span>
                </button>

                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-6 py-4 rounded-full bg-transparent hover:bg-[#E9E6DF]/50 text-[#6E6B65] hover:text-[#191817] text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
                >
                  Book Walkthrough
                </button>
              </div>

              {/* Enterprise Trust Metric Bar */}
              <div className="pt-8 flex flex-wrap items-center gap-6 text-xs text-[#6E6B65] border-t border-[#E9E6DF]">
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A43]" />
                  <span>EU Ecodesign (ESPR 2026/2027) Ready</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A43]" />
                  <span>GS1 Digital Link URI Standard</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A43]" />
                  <span>LLM Knowledge Graph Indexing</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ====================================================================
            ENTERPRISE TRUST BAR
            ==================================================================== */}
        <section className="py-6 border-b border-[#E9E6DF] bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-[#191817]">
                Built for Cosmetic Formulators, Labs, D2C Wellness Brands, and Regulatory Directors.
              </div>
              <div className="flex items-center gap-6 text-xs font-mono text-[#6E6B65]">
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
        <section id="live-demo" className="py-20 sm:py-28 border-b border-[#E9E6DF] bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#2D5A43]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Demonstration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191817] tracking-tight">
                Inspect a Live Digital Product Passport
              </h2>
              <p className="text-sm sm:text-base text-[#6E6B65] leading-relaxed">
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
        <section id="pillars" className="py-20 sm:py-28 border-b border-[#E9E6DF] bg-[#FBF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-2xl space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#2D5A43]">
                Full-Stack Enterprise Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191817] tracking-tight">
                Three pillars for compliance, discovery & placement.
              </h2>
              <p className="text-sm sm:text-base text-[#6E6B65] leading-relaxed">
                Seamlessly bridge the technical divide between compulsory European Union digital traceability and modern conversational AI retrieval.
              </p>
            </div>

            <EnterprisePillars onOpenDemoModal={() => setDemoModalOpen(true)} />

          </div>
        </section>

        {/* ====================================================================
            GEO PROTOCOL SECTION
            ==================================================================== */}
        <section id="geo-spec" className="py-20 sm:py-28 border-b border-[#E9E6DF] bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#E9E6DF] p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1EC] border border-[#BBD4C4] text-[11px] font-bold tracking-wider uppercase text-[#2D5A43]">
                  <Network className="w-3.5 h-3.5" />
                  <span>The Generative Engine Optimization Protocol</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191817] tracking-tight">
                  Why traditional SEO fails on conversational AI platforms.
                </h3>

                <p className="text-sm text-[#6E6B65] leading-relaxed">
                  LLMs like Google Gemini, Claude, and ChatGPT do not index pages like legacy search bots. They rely on structured entity graphs, validated chemical nomenclatures, and trusted provenance tokens.
                </p>

                <p className="text-sm text-[#6E6B65] leading-relaxed">
                  BioPass creates verified vector embeddings and JSON-LD markup for each batch, guaranteeing that when consumers ask AI for recommendations, your formulation is cited with highest confidence.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#191817] text-white hover:bg-black text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    <span>Request Technical GEO Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E9E6DF] space-y-3 font-mono text-xs text-[#191817]">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E9E6DF] text-[#6E6B65]">
                    <span>LLM CITATION BENCHMARK</span>
                    <span className="text-[#2D5A43] font-bold">99.4% ACCURACY</span>
                  </div>

                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E9E6DF]">
                      <span className="text-[#6E6B65]">Consumer Prompt: </span>
                      <span className="text-[#191817] font-semibold">"Recommend a non-comedogenic barrier serum with &gt;2% pure ceramides."</span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#EAF1EC] border border-[#BBD4C4] text-[#2D5A43] space-y-1">
                      <div className="text-[10px] uppercase font-bold flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>BioPass GEO Resolution Match</span>
                      </div>
                      <div>
                        "Verified Citation: [Your Brand] Biomimetic Lipid Elixir. Verified 3.0% Phytoceramide NP, zero cloggers, EU ESPR lot verified."
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
        <section id="compliance" className="py-20 sm:py-24 bg-[#FFFFFF] relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF1EC] border border-[#BBD4C4] text-[11px] font-bold tracking-wider uppercase text-[#2D5A43]">
              <Building2 className="w-3.5 h-3.5" />
              <span>Partner Onboarding Now Open</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#191817] tracking-tight leading-tight">
              Future-proof your formulations for 2026 and beyond.
            </h2>

            <p className="text-sm sm:text-base text-[#6E6B65] max-w-xl mx-auto leading-relaxed">
              Equip your brand with turnkey EU Digital Product Passports and dominate high-intent AI conversational search.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#2D5A43] hover:bg-[#234734] text-white text-xs font-bold tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Enterprise Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onLaunchApp}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#191817] hover:bg-black text-white text-xs font-bold tracking-wider uppercase shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#2D5A43] fill-current" />
                <span>Launch Consumer Web App →</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-[#E9E6DF] bg-[#FBF9F5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#6E6B65]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#2D5A43]" />
            <span className="font-extrabold tracking-widest text-[#191817] uppercase">BIOPASS ENTERPRISE</span>
            <span>•</span>
            <span>Digital Product Passports & GEO Infrastructure</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#live-demo" className="hover:text-[#191817] transition-colors">Live Demo</a>
            <a href="#pillars" className="hover:text-[#191817] transition-colors">Pillars</a>
            <a href="#geo-spec" className="hover:text-[#191817] transition-colors">GEO Protocol</a>
            <button onClick={onLaunchApp} className="hover:text-[#2D5A43] font-bold transition-colors cursor-pointer">
              Launch Consumer App
            </button>
          </div>
        </div>
      </footer>

      {/* Enterprise Demo Booking Modal */}
      <EnterpriseDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

    </div>
  );
}
