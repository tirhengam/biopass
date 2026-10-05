"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowUpRight, Check, Sparkles, ShieldCheck } from "lucide-react";

interface Chapter6FinalProps {
  onOpenContact: () => void;
}

export const Chapter6Final: React.FC<Chapter6FinalProps> = React.memo(({
  onOpenContact,
}) => {
  const matchProducts = [
    {
      score: "94%",
      category: "BARRIER RESTORATION",
      name: "Ceramide Barrier Lipid Fluid",
      phase: "Foundation Phase",
      iconColor: "from-purple-500 to-indigo-500",
      reasons: [
        "For your goals",
        "Fits your routine",
        "Right for this phase",
      ],
      type: "jar",
    },
    {
      score: "89%",
      category: "ANTIOXIDANT RADIANCE",
      name: "10% Ascorbyl Glucoside Serum",
      phase: "Morning Active Day",
      iconColor: "from-amber-400 to-orange-500",
      reasons: [
        "For your goals",
        "Fits your routine",
        "Right for this phase",
      ],
      type: "dropper",
    },
    {
      score: "86%",
      category: "COLLAGEN & ELASTICITY",
      name: "Multi-Peptide Matrix Emulsion",
      phase: "Evening Renewal",
      iconColor: "from-sky-400 to-blue-600",
      reasons: [
        "For your goals",
        "Fits your routine",
        "Right for this phase",
      ],
      type: "pump",
    },
  ];

  return (
    <section
      id="section-final"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#1B0E33] text-white transition-none md:transition-colors md:duration-700 overflow-hidden"
    >
      {/* Background Soft Glows — Lightweight static gradient on mobile, Gaussian blur on desktop */}
      <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-20 right-10 w-[450px] h-[450px] bg-pink-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="md:hidden absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full pointer-events-none [background:radial-gradient(circle,rgba(147,51,234,0.18)_0%,transparent_70%)]" />
      <div className="md:hidden absolute bottom-20 right-6 w-60 h-60 rounded-full pointer-events-none [background:radial-gradient(circle,rgba(236,72,153,0.15)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto w-full space-y-14 my-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-yellow-300 text-xs font-mono uppercase tracking-[0.2em] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>Chapter 06 · Product Match Payoff</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
            Your roadmap. <br />
            <span className="italic font-normal text-yellow-300">Your match.</span>
          </h2>

          <p className="text-base sm:text-xl text-purple-200/90 font-light max-w-xl mx-auto leading-relaxed">
            Find products that fit your goals, your routine, and where you are in your journey.
          </p>
        </div>

        {/* MOBILE VIEW (md:hidden) — Stacked with Primary 94% Match Card */}
        <div className="md:hidden flex flex-col space-y-3.5 pt-2">
          {/* PRIMARY MATCH CARD: 94% */}
          <div className="p-5 rounded-3xl bg-[#2A184D] border-2 border-yellow-300/80 shadow-[0_0_30px_rgba(250,204,21,0.25)] space-y-4">
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-300 font-bold">
                TOP MATCH · BARRIER RESTORATION
              </span>
              <div className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-stone-950 text-xs font-mono font-black shadow flex items-center gap-1">
                <span>94%</span>
                <span className="text-[9px]">MATCH</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-500 p-[2px] shadow shrink-0">
                <div className="w-full h-full bg-[#1B0E33] rounded-[14px] flex items-center justify-center text-purple-300">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="10" width="16" height="11" rx="3" />
                    <path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  Ceramide Barrier Lipid Fluid
                </h4>
                <span className="text-[10px] font-mono text-purple-200/80">
                  Foundation Phase
                </span>
              </div>
            </div>

            {/* Very Short Reasons */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-200">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[9px] font-bold">✓</span>
                <span>For your goals</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-200">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[9px] font-bold">✓</span>
                <span>Fits your routine</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-200">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[9px] font-bold">✓</span>
                <span>Right for this phase</span>
              </div>
            </div>
          </div>

          {/* SECONDARY MATCH 2: 89% */}
          <div className="p-3.5 rounded-2xl bg-[#2A184D]/70 border border-white/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 p-[1.5px] shrink-0">
                <div className="w-full h-full bg-[#1B0E33] rounded-[10px] flex items-center justify-center text-amber-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="m14 4 6 6-9 9H5v-6l9-9Z" />
                    <circle cx="5" cy="19" r="2" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-white">10% Ascorbyl Glucoside Serum</div>
                <div className="text-[10px] font-mono text-purple-300/80">✓ Morning Active · Tone</div>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full">
              89%
            </span>
          </div>

          {/* SECONDARY MATCH 3: 86% */}
          <div className="p-3.5 rounded-2xl bg-[#2A184D]/70 border border-white/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 p-[1.5px] shrink-0">
                <div className="w-full h-full bg-[#1B0E33] rounded-[10px] flex items-center justify-center text-sky-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="7" y="9" width="10" height="13" rx="2" />
                    <path d="M10 9V5a2 2 0 0 1 4 0v4" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-white">Multi-Peptide Matrix Emulsion</div>
                <div className="text-[10px] font-mono text-purple-300/80">✓ Evening Renewal · Elasticity</div>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full">
              86%
            </span>
          </div>
        </div>

        {/* DESKTOP VIEW (hidden md:grid) — 3 ELEGANT PRODUCT MATCH CARDS */}
        <div className="hidden md:grid grid-cols-3 gap-6 sm:gap-8 pt-2">
          {matchProducts.map((prod, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#2A184D]/80 border border-white/20 backdrop-blur-xl shadow-2xl flex flex-col justify-between space-y-6 hover:border-yellow-300/60 hover:-translate-y-1.5 transition-all group"
            >
              {/* Top: Category Pill + Match Score */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 font-bold">
                  {prod.category}
                </span>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-mono font-extrabold shadow-sm">
                  <span>{prod.score}</span>
                  <span className="text-[10px] font-bold">MATCH</span>
                </div>
              </div>

              {/* Center Product Visual */}
              <div className="relative aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-6 group-hover:bg-white/10 transition-colors">
                {/* Silhouette / Bottle Icon Container */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${prod.iconColor} p-[2px] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-[#1B0E33] rounded-[14px] flex items-center justify-center text-white">
                    {prod.type === "jar" && (
                      <svg className="w-9 h-9 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="10" width="16" height="11" rx="3" />
                        <path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
                      </svg>
                    )}
                    {prod.type === "dropper" && (
                      <svg className="w-9 h-9 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m14 4 6 6-9 9H5v-6l9-9Z" />
                        <path d="m18 8 2-2" />
                        <circle cx="5" cy="19" r="2" />
                      </svg>
                    )}
                    {prod.type === "pump" && (
                      <svg className="w-9 h-9 text-sky-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="9" width="10" height="13" rx="2" />
                        <path d="M10 9V5a2 2 0 0 1 4 0v4" />
                        <line x1="8" y1="5" x2="16" y2="5" />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="text-center mt-3">
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {prod.name}
                  </h4>
                  <span className="text-[10px] font-mono text-purple-300/80">
                    {prod.phase}
                  </span>
                </div>
              </div>

              {/* 3 Short Reasons */}
              <div className="space-y-2 pt-2">
                {prod.reasons.map((reason, rIdx) => (
                  <div
                    key={rIdx}
                    className="flex items-center gap-2 text-xs font-mono text-purple-200"
                  >
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                      ✓
                    </div>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Line */}
        <div className="text-center pt-2 space-y-1">
          <p className="text-xl sm:text-2xl font-light text-white italic max-w-2xl mx-auto leading-snug">
            You choose. <br className="sm:hidden" />
            <span className="text-yellow-200">BioPass helps you understand the choice.</span>
          </p>
        </div>

        {/* Primary CTA — STRICTLY "TRY THE DEMO" */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BIOPASS_APP_URL}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-yellow-400 text-stone-950 font-mono text-xs uppercase tracking-wider font-extrabold hover:bg-yellow-300 transition-all shadow-[0_0_35px_rgba(250,204,21,0.4)] flex items-center justify-center gap-3 group text-center"
          >
            <span>TRY THE DEMO</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto w-full pt-16 pb-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-purple-300/60 gap-6 z-10">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold tracking-widest text-white uppercase">
            BIOPASS
          </div>
          <div className="text-[11px] text-purple-200/70">
            Personal Beauty Intelligence · Where Science Meets Care
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-purple-200/80">
          <span>Skincare</span>
          <span>·</span>
          <span>Hair Care</span>
          <span>·</span>
          <span>Personal Care</span>
          <span>·</span>
          <button
            onClick={onOpenContact}
            className="hover:text-white transition-colors underline underline-offset-4 text-yellow-300"
          >
            Contact
          </button>
        </div>

        <div className="text-[11px] text-purple-300/60">
          © 2026 BioPass. All rights reserved.
        </div>
      </footer>
    </section>
  );
});
