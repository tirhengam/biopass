"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RefreshCw, CheckCircle2, Sparkles, BookOpen, Layers } from "lucide-react";

export const Chapter5AdaptLearn: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<"continue" | "adapt" | "next">("next");

  return (
    <section
      id="section-adapt"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#4F46E5] text-white transition-colors duration-700 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-16 my-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-yellow-300 text-xs font-mono uppercase tracking-[0.16em] font-bold">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Chapter 05 · Adapt &amp; Learn</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.08]">
            Your plan evolves <br className="hidden sm:inline" />
            <span className="font-normal italic text-yellow-200">with you.</span>
          </h2>

          <p className="text-base sm:text-lg text-indigo-100 font-light leading-relaxed max-w-2xl">
            Your beauty journey isn&apos;t static. At important milestones, BioPass checks in, helps you review what happened, and adapts what comes next.
          </p>
        </div>

        {/* MAIN VISUAL: Character Studying + Simple Loop + 3 Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Character with Laptop, Books & Coffee (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-sm aspect-square drop-shadow-2xl">
              <Image
                src="/characters/character-laptop-studying.png"
                alt="BioPass intelligent science and learning"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-2 text-center text-xs font-mono text-indigo-200/90 bg-black/20 px-4 py-1.5 rounded-full border border-white/15">
              Intelligent Adaptation · Guided Science
            </div>
          </div>

          {/* Right Column: Feedback Loop & 3 Action Choices (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Simple Loop */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/15 backdrop-blur-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-300 font-bold block mb-2 text-center sm:text-left">
                Continuous BioPass Feedback Loop
              </span>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 font-mono text-xs font-bold text-white">
                <span className="text-yellow-300">PLAN</span>
                <span className="text-white/40">➔</span>
                <span>FOLLOW</span>
                <span className="text-white/40">➔</span>
                <span>TRACK</span>
                <span className="text-white/40">➔</span>
                <span className="text-yellow-300">CHECK-IN</span>
                <span className="text-white/40">➔</span>
                <span>ADAPT</span>
                <span className="text-white/40">➔</span>
                <span className="text-emerald-300">NEXT PHASE</span>
              </div>
            </div>

            {/* Three Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Action 1: CONTINUE */}
              <button
                type="button"
                onClick={() => setSelectedAction("continue")}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedAction === "continue"
                    ? "bg-white text-stone-950 border-white shadow-xl scale-[1.02]"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                }`}
              >
                <div className="text-xs font-mono font-extrabold uppercase tracking-wider mb-1">
                  CONTINUE
                </div>
                <div className="text-xs opacity-90 leading-tight">
                  Stay with the current phase.
                </div>
              </button>

              {/* Action 2: ADAPT */}
              <button
                type="button"
                onClick={() => setSelectedAction("adapt")}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedAction === "adapt"
                    ? "bg-white text-stone-950 border-white shadow-xl scale-[1.02]"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                }`}
              >
                <div className="text-xs font-mono font-extrabold uppercase tracking-wider mb-1">
                  ADAPT
                </div>
                <div className="text-xs opacity-90 leading-tight">
                  Something needs to change.
                </div>
              </button>

              {/* Action 3: NEXT STEP */}
              <button
                type="button"
                onClick={() => setSelectedAction("next")}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedAction === "next"
                    ? "bg-white text-stone-950 border-white shadow-xl scale-[1.02]"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                }`}
              >
                <div className="text-xs font-mono font-extrabold uppercase tracking-wider mb-1">
                  NEXT STEP
                </div>
                <div className="text-xs opacity-90 leading-tight">
                  You&apos;re ready to move forward.
                </div>
              </button>
            </div>

            {/* Two Levels: Simple vs Deeper Science */}
            <div className="pt-4 border-t border-white/20 space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-300 font-bold block">
                  Core Formulation Philosophy
                </span>
                <h4 className="text-2xl font-light text-white italic">
                  &ldquo;Science behind the plan. Simplicity in your day.&rdquo;
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* SIMPLE */}
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-yellow-200 font-bold block mb-1">
                    SIMPLE
                  </span>
                  <div className="text-sm font-semibold text-white">
                    &ldquo;What should I do today?&rdquo;
                  </div>
                  <p className="text-xs text-indigo-100 font-light mt-1">
                    Morning and evening clarity with zero confusion.
                  </p>
                </div>

                {/* DEEPER */}
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-yellow-200 font-bold block mb-1">
                    DEEPER
                  </span>
                  <div className="text-xs font-semibold text-white space-y-0.5">
                    <div>&ldquo;Why this ingredient?&rdquo;</div>
                    <div>&ldquo;Why this product?&rdquo;</div>
                    <div>&ldquo;Why now?&rdquo;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
