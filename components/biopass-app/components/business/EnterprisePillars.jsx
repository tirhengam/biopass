import React from 'react';
import { QrCode, Network, ShieldCheck, ArrowRight, CheckCircle2, Sparkles, Cpu, Database } from 'lucide-react';

export default function EnterprisePillars({ onOpenDemoModal, onOpenInspector }) {
  const pillars = [
    {
      number: "01",
      icon: QrCode,
      tag: "COMPLIANCE INFRASTRUCTURE",
      title: "Turnkey DPP as a Service",
      description:
        "Effortless compliance with EU Ecodesign Directives (ESPR 2026/2027). Automated GS1 Digital Link QR codes, packaging recyclability indexes, batch-level provenance, and EU CPNP bridging.",
      features: [
        "GS1 Digital Link URI generation & cloud hosting",
        "Automated packaging recyclability scoring (Monomaterial)",
        "Life-Cycle carbon footprint calculation (Scope 1-3)",
        "Instant EU regulatory audit exports"
      ],
      badge: "ESPR 2026 READY",
      accent: "border-[#2D5A43]/20 bg-[#FFFFFF]"
    },
    {
      number: "02",
      icon: Network,
      tag: "AI DISCOVERY & RETRIEVAL",
      title: "Generative Engine Optimization (GEO)",
      description:
        "The shift from Google 10-blue-links to LLM conversational answers (Gemini, Claude, ChatGPT) requires structured data. BioPass formats your formulation into vector-ready semantic graphs.",
      features: [
        "Structured Schema.org & JSON-LD active ingredient graphs",
        "Verified non-comedogenic & hypoallergenic tokens",
        "Direct citation in high-intent AI beauty recommendations",
        "Real-time LLM visibility tracking & citation benchmarking"
      ],
      badge: "PROPRIETARY GEO PROTOCOL",
      accent: "border-[#2D5A43]/20 bg-[#FFFFFF]"
    },
    {
      number: "03",
      icon: Sparkles,
      tag: "COMMERCIAL CONVERSION",
      title: "Qualified Consumer Placement",
      description:
        "Connect directly with consumers using BioPass Discovery. When users filter for their exact skin barrier profile, your verified compliant formulation appears with trusted scientific authority.",
      features: [
        "Zero-party biological intent matching",
        "No conflicting routine guarantee (Clash-Shield)",
        "Transparent ingredient provenance builds consumer retention",
        "Direct attribution from digital passport to checkout"
      ],
      badge: "HIGH-INTENT PLACEMENT",
      accent: "border-[#2D5A43]/20 bg-[#FFFFFF]"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {pillars.map((pillar, idx) => {
        const Icon = pillar.icon;
        return (
          <div
            key={idx}
            className={`rounded-3xl border border-[#E9E6DF] p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 ${pillar.accent}`}
          >
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#6E6B65]">
                  PILLAR {pillar.number}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EAF1EC] text-[#2D5A43] border border-[#BBD4C4] font-bold">
                  {pillar.badge}
                </span>
              </div>

              {/* Icon & Title */}
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#FBF9F5] border border-[#E9E6DF] flex items-center justify-center text-[#2D5A43] shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#2D5A43]">
                  {pillar.tag}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#191817] tracking-tight">
                  {pillar.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#6E6B65] leading-relaxed">
                {pillar.description}
              </p>

              {/* Feature Checklist */}
              <div className="pt-2 border-t border-[#E9E6DF] space-y-2">
                {pillar.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-[#191817]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A43] shrink-0 mt-0.5" />
                    <span className="leading-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-4">
              <button
                onClick={onOpenDemoModal}
                className="w-full py-3 rounded-full bg-[#FBF9F5] hover:bg-[#191817] text-[#191817] hover:text-white border border-[#E9E6DF] hover:border-[#191817] text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Learn More & Deploy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
