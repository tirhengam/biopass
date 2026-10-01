"use client";

import React, { useState } from "react";
import { Check, Flame, Calendar, Clock, Sparkles, Sun, Moon, ArrowRight, ShieldCheck } from "lucide-react";

interface Chapter4TodayRoutineProps {
  onOpenBuilder?: () => void;
}

export const Chapter4TodayRoutine: React.FC<Chapter4TodayRoutineProps> = () => {
  // Interactive checklist state for demonstration
  const [amRoutine, setAmRoutine] = useState([
    { name: "Cleanser", detail: "Gentle Hydrating Milk", checked: true },
    { name: "Vitamin C", detail: "10% Ascorbyl Glucoside Radiance Serum", checked: true },
    { name: "Moisturizer", detail: "Lightweight Barrier Gel-Cream", checked: true },
    { name: "SPF", detail: "Broad Spectrum Mineral Fluid 50+", checked: true },
  ]);

  const [pmRoutine, setPmRoutine] = useState([
    { name: "Cleanser", detail: "Double Cleanse Balm", checked: false },
    { name: "Hydration Serum", detail: "Multi-Molecular HA + Panthenol", checked: false },
    { name: "Moisturizer", detail: "Barrier Replenishing Lipids", checked: false },
  ]);

  const toggleAm = (index: number) => {
    setAmRoutine((prev) =>
      prev.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
    );
  };

  const togglePm = (index: number) => {
    setPmRoutine((prev) =>
      prev.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
    );
  };

  // Generate 28-day monthly calendar mockup
  const monthDays = Array.from({ length: 28 }, (_, i) => {
    const dayOfWeek = (i % 7); // 0 = Mon, 1 = Tue, etc.
    let type = "rest";
    let color = "border border-stone-300 bg-transparent";

    if (dayOfWeek === 0 || dayOfWeek === 4) {
      type = "nia";
      color = "bg-purple-600";
    } else if (dayOfWeek === 1 || dayOfWeek === 5) {
      type = "vitc";
      color = "bg-amber-500";
    } else if (dayOfWeek === 2) {
      type = "pep";
      color = "bg-sky-500";
    }

    return {
      dayNum: i + 1,
      color,
      isToday: i === 11, // Day 12 is today
    };
  });

  return (
    <section
      id="section-routine"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#EDF2F7] text-[#0F172A] transition-colors duration-700 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full space-y-12 my-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-800 text-xs font-mono uppercase tracking-[0.16em]">
            <Calendar className="w-3.5 h-3.5 text-slate-700" />
            <span>Chapter 04 · Today&apos;s Routine</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0B132B] leading-[1.12]">
            Your roadmap becomes <br className="hidden sm:inline" />
            <span className="font-normal italic text-slate-900">your everyday routine.</span>
          </h2>

          <p className="text-lg sm:text-xl font-light text-slate-700 italic">
            &ldquo;Build consistency, not product clutter.&rdquo;
          </p>
        </div>

        {/* CONCEPTUAL DASHBOARD MOCKUP (NOT ACTUAL APP UI) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Dashboard Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-300 shadow-[0_12px_40px_rgba(15,23,42,0.06)] space-y-6">
            {/* Top Dashboard Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 block">
                  GOOD MORNING
                </span>
                <h3 className="text-xl sm:text-2xl font-medium text-slate-900 mt-0.5">
                  CURRENT FOCUS: <span className="font-light text-violet-700">Foundation</span>
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full font-medium">
                  DAY 12 / 14
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold">
                  <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                  <span>9 DAY STREAK</span>
                </div>
              </div>
            </div>

            {/* Routine Lists (AM & PM) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AM Routine */}
              <div className="space-y-3 p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60">
                <div className="flex items-center justify-between pb-2 border-b border-amber-200/40">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-mono uppercase tracking-wider font-bold text-amber-950">
                      AM ROUTINE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full font-semibold">
                    Completed
                  </span>
                </div>

                <div className="space-y-2">
                  {amRoutine.map((step, idx) => (
                    <div
                      key={idx}
                      onClick={() => toggleAm(idx)}
                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/80 transition-colors cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          step.checked
                            ? "bg-amber-600 border-amber-600 text-white"
                            : "border-slate-300 group-hover:border-amber-500"
                        }`}
                      >
                        {step.checked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <div className={`text-xs font-semibold ${step.checked ? "text-slate-900" : "text-slate-700"}`}>
                          {step.name}
                        </div>
                        <div className="text-[11px] text-slate-600">{step.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PM Routine */}
              <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Moon className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900">
                      PM ROUTINE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 bg-slate-200 px-2 py-0.5 rounded-full">
                    Evening
                  </span>
                </div>

                <div className="space-y-2">
                  {pmRoutine.map((step, idx) => (
                    <div
                      key={idx}
                      onClick={() => togglePm(idx)}
                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-white transition-colors cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          step.checked
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "border-slate-300 group-hover:border-indigo-500"
                        }`}
                      >
                        {step.checked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <div className={`text-xs font-semibold ${step.checked ? "text-slate-900" : "text-slate-700"}`}>
                          {step.name}
                        </div>
                        <div className="text-[11px] text-slate-600">{step.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Horizon Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                    NEXT
                  </span>
                  <strong className="text-sm text-slate-900">Recovery Day</strong>
                  <span className="text-xs text-slate-500 block">Tomorrow</span>
                </div>
                <span className="w-3 h-3 rounded-full border-2 border-slate-400" />
              </div>

              <div className="p-4 rounded-2xl bg-violet-50 border border-violet-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-violet-800 block font-semibold">
                    NEXT CHECK-IN
                  </span>
                  <strong className="text-sm text-violet-950">Milestone Review</strong>
                  <span className="text-xs text-violet-800 font-medium block">In 3 days</span>
                </div>
                <Clock className="w-4 h-4 text-violet-700" />
              </div>
            </div>
          </div>

          {/* Right Column: Monthly Calendar View + Rotation Insight (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-300 shadow-[0_12px_40px_rgba(15,23,42,0.06)] space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-600 font-semibold">
                  Monthly Rotation Pattern
                </span>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  Illustrative View
                </span>
              </div>

              {/* Monthly Calendar 28-day grid */}
              <div className="grid grid-cols-7 gap-2 text-center">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <span key={i} className="text-[10px] font-mono text-slate-500 font-bold mb-1">
                    {d}
                  </span>
                ))}

                {monthDays.map((d, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center p-1 relative text-[10px] font-mono ${
                      d.isToday ? "bg-amber-100 ring-2 ring-amber-500 text-amber-950 font-bold" : "bg-slate-50 text-slate-600"
                    }`}
                  >
                    <span>{d.dayNum}</span>
                    <div className={`w-1.5 h-1.5 rounded-full mt-0.5 ${d.color}`} />
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  <span>Monday & Friday: Niacinamide</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span>Tuesday & Saturday: Vitamin C</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>Wednesday: Peptide Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full border border-stone-400" />
                  <span>Thursday & Sunday: Recovery & Ceramide Pause</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed italic border-t border-slate-100 pt-3">
                * Illustrative example of how BioPass organizes a personalized routine — not an identical rotation for every person.
              </p>
            </div>

            {/* Simple Progress Indicators */}
            <div className="p-5 rounded-3xl bg-white/70 border border-slate-300 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-amber-800 font-bold">
                <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
                <span>12-day streak</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-800 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>92% routine completed this week</span>
              </div>
              <div className="text-slate-600">
                3 days until next check-in
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
