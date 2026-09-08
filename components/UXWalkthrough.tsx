"use client";

import React, { useState } from "react";
import { 
  Scan, UserCheck, TrendingUp, BookOpen, CheckCircle, 
  ChevronRight, Sparkles, FileText, Database, ShieldCheck 
} from "lucide-react";

interface StepData {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  simulation: React.ReactNode;
}

const STEPS: StepData[] = [
  {
    number: "01",
    title: "Formulation Extraction",
    subtitle: "Label & Complete INCI Breakdown",
    description:
      "Paste any raw ingredient deck or scan packaging. BioPass parses cosmetic nomenclatures, identifies molecule molecular weights, and decodes exact chemical concentrations.",
    badge: "Optical OCR & INCI Parser",
    simulation: (
      <div className="p-4 rounded-xl bg-canvas border border-surface-hairline font-mono text-[11px] text-onyx-soft space-y-2">
        <div className="flex items-center justify-between text-onyx-muted pb-1 border-b border-surface-hairline">
          <span>RAW INCI STREAM</span>
          <span className="text-sage-600">PARSED 24 MOLECULES</span>
        </div>
        <div className="space-y-1">
          <div>{"01. Aqua / Water (Solvent - 72%)"}</div>
          <div className="text-sage-700 font-bold">{"02. Niacinamide (Vitamin B3 - 5.0% Clinical Grade)"}</div>
          <div>{"03. Sodium Hyaluronate (Low MW 50kDa)"}</div>
          <div className="text-amber-700">{"04. Phenoxyethanol (Preservative <1.0%)"}</div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Biological Context",
    subtitle: "Your Baseline Biological Profile",
    description:
      "BioPass maps your personal sebum production rate, stratum corneum barrier resilience, active ingredient tolerance, and daily environmental exposure factors.",
    badge: "Biometric Skin & Scalp Passport",
    simulation: (
      <div className="p-4 rounded-xl bg-canvas border border-surface-hairline space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-onyx">
          <span>Personal Physiological Radar</span>
          <span className="text-sage-600 font-mono">ID: BP-84920</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px]">
            <span className="text-onyx-muted">Barrier Lipids Need</span>
            <span className="font-mono font-bold text-onyx">High (88%)</span>
          </div>
          <div className="w-full bg-surface-hairline h-1.5 rounded-full overflow-hidden">
            <div className="bg-sage-600 h-full w-[88%]" />
          </div>

          <div className="flex justify-between text-[11px] pt-1">
            <span className="text-onyx-muted">Exfoliation Tolerance</span>
            <span className="font-mono font-bold text-onyx">Buffered Moderate (52%)</span>
          </div>
          <div className="w-full bg-surface-hairline h-1.5 rounded-full overflow-hidden">
            <div className="bg-onyx h-full w-[52%]" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Live Beauty Trends",
    subtitle: "Separating Efficacy from Viral Hype",
    description:
      "BioPass tracks trending ingredients across dermatological publications and market shifts, filtering out exaggerated claims from biologically validated innovations.",
    badge: "Market Signal Verification",
    simulation: (
      <div className="p-4 rounded-xl bg-canvas border border-surface-hairline space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-onyx">Hype vs. Science Diagnostic</span>
          <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
            REAL EFFICACY
          </span>
        </div>
        <div className="p-2.5 rounded-lg bg-surface border border-surface-hairline text-[11px] space-y-1">
          <div className="font-bold text-onyx">Ectoin & Bifida Ferment Lysate</div>
          <div className="text-onyx-muted">Trend Momentum: +184% MoM · Clinical Consensus: Validated Barrier Shield</div>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Clinical Evidence",
    subtitle: "Peer-Reviewed Trial Validator",
    description:
      "Every match is vetted against in-vivo and double-blind clinical studies. BioPass provides clear confidence grades rather than anecdotal influencer reviews.",
    badge: "PubMed & Dermatology Index",
    simulation: (
      <div className="p-4 rounded-xl bg-canvas border border-surface-hairline space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-onyx">Literature Verification</span>
          <span className="font-mono text-sage-600 font-bold">14 Trials Analyzed</span>
        </div>
        <div className="text-[11px] text-onyx-muted bg-surface p-2 rounded-lg border border-surface-hairline">
          <div className="font-semibold text-onyx">Journal of Investigative Dermatology (2024)</div>
          <div>"Transepidermal water loss reduced by 34% over 28-day standardized protocol."</div>
        </div>
      </div>
    ),
  },
  {
    number: "05",
    title: "Curated Shortlist",
    subtitle: "Personalized Match & Clash Protection",
    description:
      "Receive a tight, personalized shortlist of verified formulas with granular compatibility breakdowns and real-time active clash protection across your daily AM/PM routine.",
    badge: "Zero Conflict Guarantee",
    simulation: (
      <div className="p-4 rounded-xl bg-canvas border border-surface-hairline space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-onyx">Regimen Clash Guard</span>
          <span className="text-[10px] font-mono font-bold text-sage-700 bg-sage-50 px-2 py-0.5 rounded-full">
            0 CLASH DETECTED
          </span>
        </div>
        <div className="flex items-center gap-3 p-2.5 rounded-lg bg-surface border border-surface-hairline">
          <div className="w-8 h-8 rounded-full bg-sage-100 text-sage-700 font-bold flex items-center justify-center text-xs">
            98%
          </div>
          <div className="text-xs">
            <div className="font-bold text-onyx">Cellular Ceramide Matrix</div>
            <div className="text-onyx-muted text-[11px]">Safe with Vitamin C & Evening Peptides</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function UXWalkthrough() {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const activeStep = STEPS[selectedStepIndex];

  return (
    <div className="w-full space-y-10">
      
      {/* 5-Stage Stepper Buttons (Desktop Strip) */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {STEPS.map((step, idx) => {
          const isSelected = idx === selectedStepIndex;
          return (
            <button
              key={step.number}
              onClick={() => setSelectedStepIndex(idx)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 relative ${
                isSelected
                  ? "bg-surface border-onyx shadow-md"
                  : "bg-surface/50 border-surface-hairline hover:bg-surface hover:border-onyx-dim"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono font-extrabold ${isSelected ? "text-sage-600" : "text-onyx-dim"}`}>
                  STAGE {step.number}
                </span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-sage-600" />}
              </div>
              <div className="text-xs font-extrabold text-onyx tracking-tight">
                {step.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded Active Stage Detail Box */}
      <div className="rounded-3xl bg-surface border border-surface-hairline p-8 sm:p-12 shadow-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Explanation Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 border border-sage-200 text-[11px] font-bold tracking-micro uppercase text-sage-700">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{activeStep.badge}</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-onyx-dim">
              STAGE {activeStep.number} OF 05
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-onyx tracking-tight">
              {activeStep.title}
            </h3>
            <p className="text-sm font-semibold text-sage-600">
              {activeStep.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-onyx-muted leading-relaxed max-w-xl">
            {activeStep.description}
          </p>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => setSelectedStepIndex((prev) => (prev + 1) % STEPS.length)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-micro text-onyx hover:text-sage-600 transition-colors"
            >
              <span>Next Stage</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Simulation Preview Column */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-2xl bg-canvas border border-surface-hairline shadow-sm space-y-4">
            <div className="flex items-center justify-between text-xs text-onyx-dim font-bold uppercase tracking-micro">
              <span>BioPass Engine Simulator</span>
              <span className="w-2 h-2 rounded-full bg-sage-600 animate-pulse" />
            </div>

            {activeStep.simulation}
          </div>
        </div>

      </div>

    </div>
  );
}
