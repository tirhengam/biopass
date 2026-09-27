"use client";

import React from "react";
import { Check, Plus, AlertTriangle, ShieldCheck } from "lucide-react";

export default function RoutineIntelligenceSection() {
  const routineSteps = [
    { step: "01", name: "Amino Cleanser", type: "AM/PM", status: "Clean Baseline" },
    { step: "02", name: "15% Vitamin C Active", type: "AM Active", status: "Low pH Phase" },
    { step: "NEW", name: "+ Niacinamide Gel Cream", type: "Candidate", status: "pH Conflict Check", isNew: true },
    { step: "03", name: "Zinc Mineral SPF 50+", type: "AM Shield", status: "Occlusive Seal" },
  ];

  const questions = [
    {
      q: "Does it fit me?",
      a: "Analyzes ingredients against your sensitivity, oil-dry balance, and known triggers.",
    },
    {
      q: "Does it fit my routine?",
      a: "Checks for molecule clashes, pH cancellation, and ingredient redundancy with what you already own.",
    },
    {
      q: "What should I know before adding it?",
      a: "Identifies whether to adjust application sequence, wait time, or alternate days.",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-noir text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-hotpink/8 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4 mb-16 sm:mb-24">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-hotpink block">
            06 // ROUTINE INTELLIGENCE
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
            Your products don't live alone.
          </h2>
          <p className="text-lg sm:text-2xl text-white/70 font-medium leading-relaxed">
            A product may look great on its own — but what happens when it becomes part of your routine?
          </p>
        </div>

        {/* Visual Routine Chain Simulation */}
        <div className="mb-20 p-6 sm:p-10 rounded-3xl bg-noir-card border border-white/[0.08] shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-8">
            <span className="text-xs font-mono tracking-wider text-white/50 uppercase">
              ACTIVE ROUTINE COMPATIBILITY SIMULATOR
            </span>
            <span className="px-3 py-1 rounded-full bg-hotpink/15 border border-hotpink/40 text-hotpink text-[11px] font-mono font-bold uppercase">
              NO CLASH DETECTED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {routineSteps.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-300 relative space-y-2 ${
                  item.isNew
                    ? "bg-hotpink/10 border-hotpink shadow-[0_0_25px_rgba(255,0,127,0.25)]"
                    : "bg-white/[0.02] border-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md ${
                    item.isNew ? "bg-hotpink text-white" : "bg-white/10 text-white/60"
                  }`}>
                    {item.step}
                  </span>
                  <span className="text-[10px] text-white/40 uppercase font-mono">{item.type}</span>
                </div>

                <div className="font-bold text-sm text-white pt-1">
                  {item.name}
                </div>

                <div className="text-[11px] text-white/50 flex items-center gap-1.5 pt-1">
                  <Check className={`w-3.5 h-3.5 ${item.isNew ? "text-hotpink" : "text-white/40"}`} />
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Three Evaluative Questions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-white/[0.08]">
          {questions.map((item, idx) => (
            <div key={idx} className="space-y-3">
              <span className="text-xs font-mono text-hotpink font-bold">QUESTION 0{idx + 1}</span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                "{item.q}"
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Guiding Equation */}
        <div className="mt-16 text-center">
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-3">
            THE BIOPASS EVALUATION MATRIX
          </span>
          <div className="inline-block p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <span className="text-lg sm:text-2xl md:text-3xl font-black tracking-wide text-white">
              Product Quality <span className="text-hotpink">×</span> Personal Fit <span className="text-hotpink">×</span> Routine Compatibility
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
