"use client";

import React, { useState } from "react";
import { 
  QrCode, Network, UserCheck, ArrowRight, CheckCircle2, 
  ShieldCheck, FileCode, Layers, Cpu 
} from "lucide-react";

interface EnterprisePillarsProps {
  onOpenDPPInspector: () => void;
}

export default function EnterprisePillars({ onOpenDPPInspector }: EnterprisePillarsProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const PILLARS = [
    {
      id: 1,
      badge: "REGULATORY COMPLIANCE",
      title: "Turnkey DPP as a Service",
      subtitle: "Full EU Digital Product Passport Automation",
      description:
        "Generate compliant, verifiable digital product passports out of the box. Automate dynamic GS1 Digital Link QR codes, batch-level provenance, supply chain ESG metrics, and chemical safety documentation aligned with EU Ecodesign directives.",
      icon: QrCode,
      metrics: [
        { label: "Compliance Standard", value: "EU ESPR 2026/2027" },
        { label: "Deployment Speed", value: "<48 Hours per SKU" },
        { label: "QR Architecture", value: "GS1 Digital Link URI" },
      ],
      actionText: "Inspect Sample DPP",
      actionHandler: onOpenDPPInspector,
    },
    {
      id: 2,
      badge: "AI DISCOVERY INFRASTRUCTURE",
      title: "Generative Engine Optimization (GEO)",
      subtitle: "Structured Knowledge Graphs for LLM Discovery",
      description:
        "When consumers ask Claude, ChatGPT, or Gemini for skincare recommendations, raw website text gets overlooked. BioPass converts your technical INCI declarations into machine-readable JSON-LD knowledge graphs so AI search engines cite and recommend your products with high confidence.",
      icon: Network,
      metrics: [
        { label: "Model Compatibility", value: "Gemini, Claude, GPT-4" },
        { label: "Schema Standard", value: "Schema.org + BioPass Graph" },
        { label: "Citation Confidence", value: "+320% AI Retrieval" },
      ],
      actionText: "View Semantic Knowledge Graph",
      actionHandler: onOpenDPPInspector,
    },
    {
      id: 3,
      badge: "COMMERCE & TARGETING",
      title: "Direct Qualified Consumer Placement",
      subtitle: "Zero-Ad Friction Formulation Matching",
      description:
        "Connect directly with consumers who are actively scanning and searching for your specific clean active ingredients. BioPass places your verified compliant products in front of users whose biological profile already matches your formulation.",
      icon: UserCheck,
      metrics: [
        { label: "Targeting Precision", value: "Molecular Compatibility" },
        { label: "Return on Ad Spend", value: "Zero Ad Waste" },
        { label: "Conversion Lift", value: "4.8x Industry Avg" },
      ],
      actionText: "Explore Consumer Demand Data",
      actionHandler: onOpenDPPInspector,
    },
  ];

  return (
    <div className="w-full space-y-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          const isHovered = hoveredCard === idx;

          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="p-8 sm:p-10 rounded-3xl bg-surface border border-surface-hairline hover:border-sage-500/40 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Header with Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-canvas border border-surface-hairline flex items-center justify-center text-sage-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-micro uppercase text-sage-700 bg-sage-50 px-2.5 py-1 rounded-full border border-sage-200">
                    {pillar.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-onyx tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-sage-600 mt-1">
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-onyx-muted leading-relaxed">
                  {pillar.description}
                </p>

                {/* Technical Specs List */}
                <div className="pt-2 border-t border-surface-hairline space-y-2">
                  {pillar.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center justify-between text-xs">
                      <span className="text-onyx-muted">{m.label}</span>
                      <span className="font-mono font-bold text-onyx">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link Button */}
              <div className="pt-4 border-t border-surface-hairline">
                <button
                  onClick={pillar.actionHandler}
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-canvas hover:bg-canvas-subtle border border-surface-hairline text-xs font-bold text-onyx tracking-wide uppercase transition-colors"
                >
                  <span>{pillar.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sage-600" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
