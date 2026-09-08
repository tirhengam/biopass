"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, ArrowRight, Dna, ShieldCheck, Database, Search, 
  Layers, FlaskConical, Cpu, CheckCircle2 
} from "lucide-react";

export default function GatewaySplit() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full flex flex-col lg:flex-row overflow-hidden bg-canvas">
      
      {/* Center Divider Badge (Desktop) */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-surface-hairline to-surface-hairline" />
          <div className="px-4 py-2 rounded-full bg-surface border border-surface-hairline shadow-editorial text-[10px] font-extrabold uppercase tracking-micro text-onyx-muted flex items-center gap-2 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-600 animate-pulse" />
            <span>BioPass Intelligence Engine</span>
          </div>
          <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-surface-hairline to-surface-hairline" />
        </div>
      </div>

      {/* ======================================================================
          LEFT COLUMN: FOR INDIVIDUALS
          ====================================================================== */}
      <div
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
        className={`relative flex-1 p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-hairline transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hoveredSide === "left"
            ? "lg:flex-[1.18] bg-surface"
            : hoveredSide === "right"
            ? "lg:flex-[0.82] opacity-85"
            : "bg-canvas"
        }`}
      >
        {/* Top Tag */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-hairline text-[11px] font-bold tracking-micro uppercase text-onyx">
              <span className="w-2 h-2 rounded-full bg-sage-600" />
              <span>PERSONAL BIOLOGY INTELLIGENCE</span>
            </div>
            <span className="text-xs font-mono text-onyx-dim">GATEWAY 01</span>
          </div>

          <div className="space-y-4 pt-4">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-onyx tracking-tightest leading-[1.12]">
              Personal care decoded for your unique biology.
            </h2>

            <p className="text-sm sm:text-base text-onyx-muted leading-relaxed max-w-xl">
              Formulation clarity across what you put on and into your body. Match with verified ingredients vetted by clinical science, eliminating guesswork and clash risks.
            </p>
          </div>

          {/* 4 Vertical Category Badges */}
          <div className="pt-2">
            <div className="text-[11px] font-bold uppercase tracking-micro text-onyx-dim mb-3">
              Covered Formulations
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Skin", desc: "Barrier & Comedogenicity" },
                { name: "Hair", desc: "Scalp & Porosity" },
                { name: "Fragrance", desc: "Aroma Chemistry & Longevity" },
                { name: "Supplements", desc: "Bio-availability & Synergies" },
              ].map((cat) => (
                <div
                  key={cat.name}
                  className="px-3.5 py-1.5 rounded-full bg-surface border border-surface-hairline hover:border-sage-500/40 text-xs font-semibold text-onyx flex items-center gap-2 shadow-sm transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-500/80" />
                  <span>{cat.name}</span>
                  <span className="hidden sm:inline text-[10px] text-onyx-dim font-normal">
                    · {cat.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Science Graphic Card */}
          <div className="pt-6 hidden sm:block">
            <div className="p-5 rounded-2xl bg-surface border border-surface-hairline shadow-editorial space-y-3">
              <div className="flex items-center justify-between text-xs text-onyx-muted">
                <span className="font-semibold text-onyx">Biometric Formulation Compatibility</span>
                <span className="font-mono text-sage-600 font-bold">98.4% Confidence</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2.5 rounded-xl bg-canvas border border-surface-hairline">
                  <div className="text-[10px] uppercase font-bold text-onyx-dim">Pore-Safety</div>
                  <div className="text-sm font-extrabold text-onyx mt-0.5">Grade A+</div>
                </div>
                <div className="p-2.5 rounded-xl bg-canvas border border-surface-hairline">
                  <div className="text-[10px] uppercase font-bold text-onyx-dim">Barrier Fit</div>
                  <div className="text-sm font-extrabold text-onyx mt-0.5">Synergistic</div>
                </div>
                <div className="p-2.5 rounded-xl bg-canvas border border-surface-hairline">
                  <div className="text-[10px] uppercase font-bold text-onyx-dim">Clash Guard</div>
                  <div className="text-sm font-extrabold text-sage-600 mt-0.5">0 Conflicts</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Link
            href="/consumer"
            className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 px-8 py-4 rounded-full bg-onyx text-surface hover:bg-onyx-soft text-sm font-bold tracking-wide uppercase shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>Enter as Individual</span>
            <div className="w-7 h-7 rounded-full bg-surface/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* ======================================================================
          RIGHT COLUMN: FOR BRANDS & ENTERPRISE
          ====================================================================== */}
      <div
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
        className={`relative flex-1 p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hoveredSide === "right"
            ? "lg:flex-[1.18] bg-surface"
            : hoveredSide === "left"
            ? "lg:flex-[0.82] opacity-85"
            : "bg-canvas-subtle"
        }`}
      >
        {/* Top Tag */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 border border-sage-200 text-[11px] font-bold tracking-micro uppercase text-sage-700">
              <span className="w-2 h-2 rounded-full bg-sage-600" />
              <span>COMPLIANCE × AI-READINESS</span>
            </div>
            <span className="text-xs font-mono text-onyx-dim">GATEWAY 02</span>
          </div>

          <div className="space-y-4 pt-4">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-onyx tracking-tightest leading-[1.12]">
              Digital Product Passports built for the AI discovery era.
            </h2>

            <p className="text-sm sm:text-base text-onyx-muted leading-relaxed max-w-xl">
              Automate regulatory traceability for EU DPP directives and structure complex INCI formulation data so next-gen conversational AI search agents accurately verify, trust, and cite your brand.
            </p>
          </div>

          {/* Enterprise Badges */}
          <div className="pt-2">
            <div className="text-[11px] font-bold uppercase tracking-micro text-onyx-dim mb-3">
              Enterprise Infrastructure
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "EU DPP Compliance", desc: "Batch Provenance" },
                { name: "AI Search Optimization", desc: "GEO Protocol" },
                { name: "INCI Knowledge Graph", desc: "Schema.org & RDF" },
              ].map((badge) => (
                <div
                  key={badge.name}
                  className="px-3.5 py-1.5 rounded-full bg-surface border border-surface-hairline hover:border-sage-500/40 text-xs font-semibold text-onyx flex items-center gap-2 shadow-sm transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-600" />
                  <span>{badge.name}</span>
                  <span className="hidden sm:inline text-[10px] text-onyx-dim font-normal">
                    · {badge.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Enterprise Card */}
          <div className="pt-6 hidden sm:block">
            <div className="p-5 rounded-2xl bg-surface border border-surface-hairline shadow-editorial space-y-3">
              <div className="flex items-center justify-between text-xs text-onyx-muted">
                <span className="font-semibold text-onyx">GEO Semantic Knowledge Vector</span>
                <span className="font-mono text-sage-600 font-bold">LLM Citation Ready</span>
              </div>
              <div className="p-3 rounded-xl bg-canvas border border-surface-hairline font-mono text-[11px] text-onyx-soft space-y-1 overflow-x-auto">
                <div className="text-sage-700">{"// Structured DPP Payload"}</div>
                <div>{"product: \"Biotic Barrier Elixir\", ean: \"506012345678\""}</div>
                <div>{"inci_verified: true, eu_dpp_compliant: \"Directive 2026/EU\""}</div>
                <div className="text-onyx-dim">{"search_citation_weight: 0.992"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Link
            href="/enterprise"
            className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 px-8 py-4 rounded-full bg-sage-600 text-surface hover:bg-sage-700 text-sm font-bold tracking-wide uppercase shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>Enter as Brand / Partner</span>
            <div className="w-7 h-7 rounded-full bg-surface/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>

    </div>
  );
}
