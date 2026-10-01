"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, Calendar as CalendarIcon, Info, Clock, ShieldCheck, ChevronRight, Heart } from "lucide-react";

interface Chapter3BeautyRoadmapProps {
  onOpenBuilder: () => void;
}

export const Chapter3BeautyRoadmap: React.FC<Chapter3BeautyRoadmapProps> = ({
  onOpenBuilder,
}) => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [hoveredDay, setHoveredDay] = useState<number | null>(1); // Default hover on Tuesday

  const phases = [
    {
      title: "FOUNDATION",
      duration: "Weeks 1–2",
      badge: "Current Phase",
      goal: "Skin barrier stabilization, hydration baseline & tolerance calibration",
      routine: "Gentle low-pH milk cleanser + barrier hydrating serum + lipid moisturizer + SPF",
      ingredientStrategy: "Ceramides NP/AP/EOP, Centella Asiatica & non-acid calming humectants",
      checkIn: "Day 14 Barrier Health Review",
      color: "from-purple-500/20 to-indigo-500/20 border-purple-500/40",
      activeText: "text-purple-900",
    },
    {
      title: "TARGET",
      duration: "Weeks 3–6",
      badge: "Targeted Actives",
      goal: "Introduce targeted cellular actives in structured weekly rotation",
      routine: "Morning Vitamin C + Evening Niacinamide with built-in recovery pause days",
      ingredientStrategy: "10% Ascorbyl Glucoside + 5% Niacinamide + Zinc PCA",
      checkIn: "Day 42 Radiance & Texture Assessment",
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/40",
      activeText: "text-amber-900",
    },
    {
      title: "ADVANCE",
      duration: "Following weeks",
      badge: "Deep Cellular Care",
      goal: "Introduce peptide complexes and gentle renewal support for long-term firmness",
      routine: "Multi-peptide collagen booster alternating with barrier hydration",
      ingredientStrategy: "Copper Tripeptide-1, Matrixyl 3000 & Ectoin",
      checkIn: "Quarterly Seasonal Routine Recalibration",
      color: "from-sky-500/20 to-blue-500/20 border-sky-500/40",
      activeText: "text-sky-900",
    },
    {
      title: "MAINTAIN",
      duration: "Ongoing",
      badge: "Sustained Radiance",
      goal: "Effortless, stabilized daily routine that preserves healthy glowing equilibrium",
      routine: "Consistent protective AM antioxidant + replenishing PM lipid matrix",
      ingredientStrategy: "Antioxidants + Barrier Lipids + Broad Spectrum Solar Defense",
      checkIn: "Monthly Quick Check-In",
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/40",
      activeText: "text-emerald-900",
    },
  ];

  const calendarDays = [
    {
      day: "MON",
      date: "Day 11",
      dotClass: "bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.5)]",
      type: "NIA",
      activeName: "Niacinamide",
      focus: "Pore refinement & barrier lipid support",
      am: "Gentle Cleanse · Hydrating Serum · SPF 50",
      pm: "Niacinamide 5% · Lipid Cream",
    },
    {
      day: "TUE",
      date: "Day 12",
      dotClass: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] ring-2 ring-white",
      type: "VIT C",
      activeName: "Vitamin C",
      focus: "Antioxidant protection & luminous tone",
      am: "Vitamin C 10% · Light Hydrator · Mineral SPF",
      pm: "Double Cleanse · Soothing Moisture Emulsion",
      isToday: true,
    },
    {
      day: "WED",
      date: "Day 13",
      dotClass: "bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]",
      type: "PEPTIDE",
      activeName: "Peptides",
      focus: "Collagen signaling & skin elasticity",
      am: "Gentle Cleanse · Moisture Fluid · SPF 50",
      pm: "Multi-Peptide Complex · Squalane",
    },
    {
      day: "THU",
      date: "Day 14",
      dotClass: "border-2 border-stone-400 bg-transparent",
      type: "REST",
      activeName: "Rest & Recovery",
      focus: "Barrier reset, zero acids, deep hydration",
      am: "Thermal Mist · Ceramide Cream · Mineral SPF",
      pm: "Barrier Recovery Balm · Overnight Moisture",
      isCheckIn: true,
    },
    {
      day: "FRI",
      date: "Day 15",
      dotClass: "bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.5)]",
      type: "NIA",
      activeName: "Niacinamide",
      focus: "Sebum balance & tone smoothing",
      am: "Hydrating Cleanser · Light Fluid · SPF 50",
      pm: "Niacinamide Serum · Barrier Cream",
    },
    {
      day: "SAT",
      date: "Day 16",
      dotClass: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]",
      type: "VIT C",
      activeName: "Vitamin C",
      focus: "Weekend radiance boost",
      am: "Vitamin C · Moisture Gel · SPF 50",
      pm: "Hydrating Sheet Mask · Night Cream",
    },
    {
      day: "SUN",
      date: "Day 17",
      dotClass: "border-2 border-stone-400 bg-transparent",
      type: "REST",
      activeName: "Rest & Recovery",
      focus: "Cellular rejuvenation for the coming week",
      am: "Rinse · Moisture Emulsion · SPF 50",
      pm: "Ceramides · Gentle Lipids · Sleep",
    },
  ];

  return (
    <section
      id="section-roadmap"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#ECE8F4] text-[#1E1926] transition-colors duration-700 overflow-hidden"
    >
      {/* Ambient Soft Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-300/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-pink-300/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-16 my-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/5 border border-purple-900/10 text-purple-900 text-xs font-mono uppercase tracking-[0.16em]">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>Chapter 03 · The Signature Roadmap</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#16121E] leading-[1.12]">
            Your beauty goals take time. <br className="hidden sm:inline" />
            <span className="font-normal italic text-purple-950">BioPass plans the journey.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#554C61] font-light leading-relaxed max-w-2xl">
            Instead of changing everything at once, BioPass organizes your journey into phases — so you know what matters now, what comes later, and when it&apos;s time to check in.
          </p>
        </div>

        {/* ELEGANT BEAUTY JOURNEY PHASES (NO GANTT CHART) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#695F77]">
              Phased Progression Architecture
            </span>
            <span className="text-xs font-mono text-[#695F77] hidden sm:inline">
              Click a phase to inspect its strategy
            </span>
          </div>

          {/* Organic Connected Phase Nodes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {phases.map((phase, idx) => {
              const isSelected = selectedPhase === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedPhase(idx)}
                  className={`text-left p-5 sm:p-6 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-purple-500/50 shadow-[0_12px_30px_rgba(124,58,237,0.12)] scale-[1.02]"
                      : "bg-white/60 hover:bg-white/90 border-[#D8D0E5] hover:border-purple-300"
                  }`}
                >
                  {/* Phase Step Number */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-800 font-semibold">
                      Phase 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E5DFF0] text-[#3D334A]">
                      {phase.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-[#1E1926] tracking-tight">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-[#5E546B] mt-1 line-clamp-2">
                      {phase.goal}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-purple-100 flex items-center justify-between text-[11px] font-mono text-purple-900">
                    <span>{isSelected ? "Active Details" : "View Strategy"}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "rotate-90" : ""}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expanded Phase Inspector Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D5CBE2] shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-100 pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-purple-700 font-bold">
                  Phase 0{selectedPhase + 1} Strategic Blueprint
                </span>
                <h4 className="text-xl sm:text-2xl font-light text-[#1E1926]">
                  {phases[selectedPhase].title} · <span className="italic text-[#4A3F5B]">{phases[selectedPhase].duration}</span>
                </h4>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-900 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200 w-fit">
                <Clock className="w-3.5 h-3.5 text-purple-700" />
                <span>Check-in: {phases[selectedPhase].checkIn}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs">
              <div className="space-y-1.5 p-4 rounded-2xl bg-[#F7F4FA]">
                <strong className="text-stone-900 font-mono uppercase tracking-wider block text-[11px]">Primary Goal</strong>
                <p className="text-[#4E445B] leading-relaxed text-sm font-light">
                  {phases[selectedPhase].goal}
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-2xl bg-[#F7F4FA]">
                <strong className="text-stone-900 font-mono uppercase tracking-wider block text-[11px]">Recommended Routine</strong>
                <p className="text-[#4E445B] leading-relaxed text-sm font-light">
                  {phases[selectedPhase].routine}
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-2xl bg-[#F7F4FA]">
                <strong className="text-stone-900 font-mono uppercase tracking-wider block text-[11px]">Ingredient Strategy</strong>
                <p className="text-[#4E445B] leading-relaxed text-sm font-light">
                  {phases[selectedPhase].ingredientStrategy}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* THE SIGNATURE PERSONAL BEAUTY CALENDAR */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-purple-800 font-semibold mb-1">
                The Daily Rhythm
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-[#1A1424] tracking-tight">
                Your roadmap connects directly to what you do each day.
              </h3>
            </div>

            {/* Calendar Legend */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono bg-white/70 px-4 py-2 rounded-full border border-purple-200">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                <span className="text-[#3A3245]">Niacinamide</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-[#3A3245]">Vitamin C</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                <span className="text-[#3A3245]">Peptide</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-stone-400 bg-transparent" />
                <span className="text-[#3A3245]">Rest & Recovery</span>
              </div>
            </div>
          </div>

          {/* 7-Day Interactive Rhythm Calendar Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {calendarDays.map((item, idx) => {
              const isHovered = hoveredDay === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredDay(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-44 ${
                    item.isToday
                      ? "bg-white border-amber-400 shadow-md ring-1 ring-amber-300"
                      : isHovered
                      ? "bg-white border-purple-400 shadow-md scale-[1.02]"
                      : "bg-white/70 border-[#D8D0E5] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#1E1926]">{item.day}</span>
                    <span className="text-[10px] font-mono text-[#6E647C]">{item.date}</span>
                  </div>

                  {/* Centered Colored Marker Dot */}
                  <div className="flex flex-col items-center justify-center my-auto py-2">
                    <div className={`w-5 h-5 rounded-full transition-transform duration-300 ${item.dotClass} ${isHovered ? "scale-125" : ""}`} />
                    <span className="text-xs font-mono font-bold tracking-wider text-[#2A2234] mt-2">
                      {item.type}
                    </span>
                    <span className="text-[10px] text-[#695E76] font-medium mt-0.5 text-center">
                      {item.activeName}
                    </span>
                  </div>

                  {/* Bottom Day Status Tag */}
                  <div className="pt-2 border-t border-purple-100 flex items-center justify-between text-[10px] font-mono text-[#584D67]">
                    <span>{item.isToday ? "Today" : item.isCheckIn ? "Check-in" : "Scheduled"}</span>
                    <span className="text-purple-600 font-bold">{isHovered ? "✓" : "→"}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Day Detail Inspector Panel */}
          {hoveredDay !== null && (
            <div className="p-5 rounded-2xl bg-white border border-[#D5CBE2] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                  <span className="text-xs font-mono uppercase tracking-widest text-purple-900 font-semibold">
                    {calendarDays[hoveredDay].day} · {calendarDays[hoveredDay].activeName} Strategy
                  </span>
                </div>
                <p className="text-sm text-[#3E344B]">
                  <strong className="text-[#1E1926]">{calendarDays[hoveredDay].focus}:</strong> AM: {calendarDays[hoveredDay].am} | PM: {calendarDays[hoveredDay].pm}
                </p>
              </div>

              <div className="text-right shrink-0">
                <button
                  onClick={onOpenBuilder}
                  className="px-4 py-2 rounded-full bg-[#1E1926] text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-purple-950 transition-colors"
                >
                  Personalize My Calendar
                </button>
              </div>
            </div>
          )}

          {/* Key Editorial Quotes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-purple-200/80">
            <div className="p-5 rounded-2xl bg-white/60 border border-purple-200/70 text-center sm:text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-700 block mb-1">
                Core Formulation Philosophy
              </span>
              <p className="text-lg sm:text-xl font-light text-[#1F1928] italic">
                &ldquo;Not everything belongs in every day.&rdquo;
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/60 border border-purple-200/70 text-center sm:text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-700 block mb-1">
                Intelligent Guidance
              </span>
              <p className="text-lg sm:text-xl font-light text-[#1F1928] italic">
                &ldquo;You don&apos;t have to remember everything. Your BioPass does.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
