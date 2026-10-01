"use client";

import React, { useState } from "react";
import { Sparkles, Flame, Check, Clock, Calendar as CalendarIcon, Info } from "lucide-react";

export const Chapter3BeautyRoadmap: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<number>(1); // Default to Tuesday (Today)

  const calendarDays = [
    {
      day: "MON",
      date: "Day 11",
      dotClass: "bg-purple-600 shadow-[0_0_12px_rgba(147,51,234,0.4)]",
      type: "NIA",
      activeName: "Niacinamide",
      status: "completed",
      statusText: "Completed ✓",
      focus: "Barrier lipid balance & pore refinement",
      am: "Amino Cleanser · Hydrating Mist · SPF 50",
      pm: "Niacinamide 5% · Barrier Lipid Cream",
    },
    {
      day: "TUE",
      date: "Day 12",
      dotClass: "bg-amber-500 shadow-[0_0_14px_rgba(245,158,11,0.5)] ring-4 ring-amber-300/60",
      type: "VIT C",
      activeName: "Vitamin C",
      status: "today",
      statusText: "Today · Active",
      focus: "Morning antioxidant shield & luminous tone",
      am: "Vitamin C 10% · Light Hydrator · Mineral SPF 50",
      pm: "Double Cleanse · Soothing Moisture Emulsion",
      isToday: true,
    },
    {
      day: "WED",
      date: "Day 13",
      dotClass: "bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.4)]",
      type: "PEPTIDE",
      activeName: "Peptide",
      status: "upcoming",
      statusText: "Tomorrow",
      focus: "Collagen signaling & cellular elasticity",
      am: "Gentle Cleanse · Moisture Fluid · SPF 50",
      pm: "Multi-Peptide Matrix · Squalane Recovery",
    },
    {
      day: "THU",
      date: "Day 14",
      dotClass: "border-2 border-stone-400 bg-stone-100",
      type: "REST",
      activeName: "Rest / Recovery",
      status: "checkin",
      statusText: "Milestone Check-in",
      focus: "Barrier reset, zero acids, deep hydration",
      am: "Thermal Mist · Ceramide Cream · Mineral SPF",
      pm: "Barrier Recovery Balm · Overnight Moisture",
      isCheckIn: true,
    },
    {
      day: "FRI",
      date: "Day 15",
      dotClass: "bg-purple-600 shadow-[0_0_12px_rgba(147,51,234,0.4)]",
      type: "NIA",
      activeName: "Niacinamide",
      status: "upcoming",
      statusText: "Upcoming",
      focus: "Sebum balance & tone smoothing",
      am: "Hydrating Cleanser · Light Fluid · SPF 50",
      pm: "Niacinamide Serum · Barrier Cream",
    },
    {
      day: "SAT",
      date: "Day 16",
      dotClass: "bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.4)]",
      type: "VIT C",
      activeName: "Vitamin C",
      status: "upcoming",
      statusText: "Upcoming",
      focus: "Weekend radiance boost",
      am: "Vitamin C · Moisture Gel · SPF 50",
      pm: "Hydrating Sheet Mask · Night Cream",
    },
    {
      day: "SUN",
      date: "Day 17",
      dotClass: "border-2 border-stone-400 bg-stone-100",
      type: "REST",
      activeName: "Rest / Recovery",
      status: "upcoming",
      statusText: "Recovery Day",
      focus: "Cellular rejuvenation for the coming week",
      am: "Water Rinse · Moisture Emulsion · SPF 50",
      pm: "Ceramides · Gentle Lipids · Deep Sleep",
    },
  ];

  return (
    <section
      id="section-calendar"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#ECE8F4] text-[#1E1926] transition-colors duration-700 overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-300/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-amber-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-12 my-auto z-10">
        {/* Section Header: EXACT STARTING POINT REQUIRED BY SPEC */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/5 border border-purple-900/10 text-purple-900 text-xs font-mono uppercase tracking-[0.16em]">
            <CalendarIcon className="w-3.5 h-3.5 text-purple-700" />
            <span>The Daily Beauty Calendar</span>
          </div>

          {/* Exact Required Starting Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#16121E] leading-[1.12]">
            Your roadmap connects directly <br className="hidden sm:inline" />
            <span className="font-normal italic text-purple-950">to what you do each day.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#554C61] font-light leading-relaxed max-w-2xl">
            A beauty routine is not about doing everything at once. BioPass maps different active days, support days, and recovery pauses into an intuitive visual rhythm.
          </p>
        </div>

        {/* CALENDAR CONTROLS & COLOR LEGEND */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-purple-200/80 gap-4">
          {/* Streak indicator */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-950 text-xs font-mono font-bold w-fit">
            <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>🔥 9 Day Streak</span>
          </div>

          {/* Legend Explaining Colors */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono bg-white/75 px-4 py-2 rounded-full border border-purple-200 shadow-sm">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-purple-600 shadow-sm" />
              <span className="text-[#3A3245] font-medium">Purple = Niacinamide</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500 shadow-sm" />
              <span className="text-[#3A3245] font-medium">Orange = Vitamin C</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-sky-500 shadow-sm" />
              <span className="text-[#3A3245] font-medium">Blue = Peptide</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full border-2 border-stone-400 bg-transparent" />
              <span className="text-[#3A3245] font-medium">Neutral = Rest / Recovery</span>
            </div>
          </div>
        </div>

        {/* LARGE & PROMINENT 7-DAY BEAUTY CALENDAR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3.5 sm:gap-4">
          {calendarDays.map((item, idx) => {
            const isHovered = hoveredDay === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredDay(idx)}
                onClick={() => setHoveredDay(idx)}
                className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-56 sm:h-64 ${
                  item.isToday
                    ? "bg-white border-amber-400 shadow-[0_10px_30px_rgba(245,158,11,0.15)] ring-2 ring-amber-400/80 scale-[1.02]"
                    : isHovered
                    ? "bg-white border-purple-400 shadow-[0_10px_30px_rgba(124,58,237,0.1)] scale-[1.02]"
                    : "bg-white/80 border-[#D8D0E5] hover:bg-white"
                }`}
              >
                {/* Day Header */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold text-[#1E1926]">{item.day}</span>
                  <span className="text-xs font-mono text-[#6E647C]">{item.date}</span>
                </div>

                {/* Prominent Visual Color Marker */}
                <div className="flex flex-col items-center justify-center my-auto py-2">
                  <div
                    className={`w-7 h-7 rounded-full transition-transform duration-300 ${item.dotClass} ${
                      isHovered ? "scale-125" : ""
                    }`}
                  />
                  <span className="text-sm font-mono font-bold tracking-wider text-[#2A2234] mt-3">
                    {item.type}
                  </span>
                  <span className="text-xs text-[#695E76] font-medium mt-0.5 text-center">
                    {item.activeName}
                  </span>
                </div>

                {/* Day Status Pill */}
                <div className="pt-3 border-t border-purple-100 flex items-center justify-between text-[11px] font-mono">
                  {item.status === "completed" && (
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3 stroke-[3]" /> Done
                    </span>
                  )}
                  {item.status === "today" && (
                    <span className="text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded-full">
                      Today ●
                    </span>
                  )}
                  {item.status === "checkin" && (
                    <span className="text-violet-800 font-semibold bg-violet-100 px-2 py-0.5 rounded-full">
                      ◆ Review
                    </span>
                  )}
                  {item.status === "upcoming" && (
                    <span className="text-[#695E76]">Scheduled</span>
                  )}
                  <span className="text-purple-600 font-bold">{isHovered ? "✓" : "→"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Day Micro-Routine Preview */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D5CBE2] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${calendarDays[hoveredDay].dotClass}`} />
              <span className="text-xs font-mono uppercase tracking-widest text-purple-900 font-bold">
                {calendarDays[hoveredDay].day} ({calendarDays[hoveredDay].date}) · {calendarDays[hoveredDay].activeName}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                {calendarDays[hoveredDay].statusText}
              </span>
            </div>
            <p className="text-sm text-[#3E344B]">
              <strong className="text-[#1E1926]">{calendarDays[hoveredDay].focus}</strong>
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#584D67] pt-1">
              <span><strong>AM:</strong> {calendarDays[hoveredDay].am}</span>
              <span>•</span>
              <span><strong>PM:</strong> {calendarDays[hoveredDay].pm}</span>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs font-mono text-stone-500 block mb-1">Upcoming Milestone:</span>
            <span className="text-xs font-mono font-bold text-purple-900 bg-purple-100/70 px-3 py-1.5 rounded-full border border-purple-300">
              Day 14 Barrier Health Review
            </span>
          </div>
        </div>

        {/* Key Editorial Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-white/70 border border-purple-200/80 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-700 block mb-1">
              Core Formulation Rhythm
            </span>
            <p className="text-lg sm:text-xl font-light text-[#1F1928] italic">
              &ldquo;Not everything belongs in every day.&rdquo;
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 border border-purple-200/80 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-700 block mb-1">
              Effortless Clarity
            </span>
            <p className="text-lg sm:text-xl font-light text-[#1F1928] italic">
              &ldquo;You don&apos;t have to remember everything. Your BioPass does.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
