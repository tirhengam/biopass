"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar as CalendarIcon, Flame, Check, Sparkles } from "lucide-react";

export const Chapter3Calendar: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<number>(1); // Default to Tuesday

  const calendarDays = [
    {
      day: "MON",
      date: "Day 11",
      dotClass: "bg-purple-400 shadow-[0_0_14px_rgba(192,132,252,0.8)]",
      type: "NIA",
      activeName: "Niacinamide",
      status: "completed",
      statusText: "Completed ✓",
      focus: "Barrier lipid balance & pore refinement",
      am: "Amino Cleanser · Hydrating Mist · SPF 50",
      pm: "Niacinamide 5% · Lipid Cream",
    },
    {
      day: "TUE",
      date: "Day 12",
      dotClass: "bg-amber-300 shadow-[0_0_16px_rgba(252,211,77,0.9)] ring-4 ring-white",
      type: "VIT C",
      activeName: "Vitamin C",
      status: "today",
      statusText: "Today · Active",
      focus: "Antioxidant protection & luminous tone",
      am: "Vitamin C 10% · Light Hydrator · Mineral SPF 50",
      pm: "Double Cleanse · Soothing Moisture Emulsion",
      isToday: true,
    },
    {
      day: "WED",
      date: "Day 13",
      dotClass: "bg-sky-300 shadow-[0_0_14px_rgba(125,211,252,0.8)]",
      type: "PEPTIDE",
      activeName: "Peptide",
      status: "upcoming",
      statusText: "Tomorrow",
      focus: "Collagen signaling & cellular elasticity",
      am: "Gentle Cleanse · Moisture Fluid · SPF 50",
      pm: "Multi-Peptide Matrix · Squalane",
    },
    {
      day: "THU",
      date: "Day 14",
      dotClass: "border-2 border-white/80 bg-white/20",
      type: "REST",
      activeName: "Recovery",
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
      dotClass: "bg-purple-400 shadow-[0_0_14px_rgba(192,132,252,0.8)]",
      type: "NIA",
      activeName: "Niacinamide",
      status: "upcoming",
      statusText: "Scheduled",
      focus: "Sebum balance & tone smoothing",
      am: "Hydrating Cleanser · Light Fluid · SPF 50",
      pm: "Niacinamide Serum · Barrier Cream",
    },
    {
      day: "SAT",
      date: "Day 16",
      dotClass: "bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.8)]",
      type: "VIT C",
      activeName: "Vitamin C",
      status: "upcoming",
      statusText: "Scheduled",
      focus: "Weekend radiance boost",
      am: "Vitamin C · Moisture Gel · SPF 50",
      pm: "Hydrating Sheet Mask · Night Cream",
    },
    {
      day: "SUN",
      date: "Day 17",
      dotClass: "border-2 border-white/80 bg-white/20",
      type: "REST",
      activeName: "Recovery",
      status: "upcoming",
      statusText: "Recovery Day",
      focus: "Cellular rejuvenation for the coming week",
      am: "Rinse · Moisture Emulsion · SPF 50",
      pm: "Ceramides · Gentle Lipids · Sleep",
    },
  ];

  return (
    <section
      id="section-calendar"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#059669] text-white transition-colors duration-700 overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-emerald-400/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 -left-32 w-96 h-96 bg-teal-300/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-12 my-auto z-10">
        {/* Section Header: EXACT STARTING HEADLINE AS REQUESTED */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-yellow-300 text-xs font-mono uppercase tracking-[0.16em] font-bold">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Chapter 03 · Your Daily Beauty Calendar</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.08]">
            Your roadmap connects directly <br className="hidden sm:inline" />
            <span className="font-normal italic text-yellow-200">to what you do each day.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-emerald-100 font-light italic">
            &ldquo;Not everything belongs in every day.&rdquo;
          </p>
        </div>

        {/* CALENDAR CONTROLS & COLOR LEGEND */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/20 gap-4">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-300 text-stone-950 text-xs font-mono font-extrabold w-fit shadow-md">
            <Flame className="w-4 h-4 text-orange-600 fill-orange-500" />
            <span>🔥 9 Day Streak</span>
          </div>

          {/* Color Legend */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono bg-black/20 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-purple-400 shadow-sm" />
              <span className="text-white font-medium">PURPLE — Niacinamide</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-300 shadow-sm" />
              <span className="text-white font-medium">ORANGE — Vitamin C</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-sky-300 shadow-sm" />
              <span className="text-white font-medium">BLUE — Peptide</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full border-2 border-white bg-transparent" />
              <span className="text-white font-medium">LIGHT / EMPTY — Recovery</span>
            </div>
          </div>
        </div>

        {/* DOMINANT VISUAL: LARGE 7-DAY BEAUTY CALENDAR GRID + CHARACTER */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3.5 sm:gap-4 relative z-10">
            {calendarDays.map((item, idx) => {
              const isHovered = hoveredDay === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredDay(idx)}
                  onClick={() => setHoveredDay(idx)}
                  className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-56 sm:h-64 ${
                    item.isToday
                      ? "bg-white text-stone-950 border-yellow-300 shadow-[0_15px_35px_rgba(0,0,0,0.25)] ring-4 ring-yellow-300 scale-[1.03]"
                      : isHovered
                      ? "bg-white/95 text-stone-950 border-white shadow-xl scale-[1.02]"
                      : "bg-[#047857]/80 text-white border-white/20 hover:bg-[#047857]"
                  }`}
                >
                  {/* Day Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-bold">{item.day}</span>
                    <span className={`text-xs font-mono ${item.isToday || isHovered ? "text-stone-500" : "text-emerald-200"}`}>
                      {item.date}
                    </span>
                  </div>

                  {/* Colored Visual Marker */}
                  <div className="flex flex-col items-center justify-center my-auto py-2">
                    <div
                      className={`w-7 h-7 rounded-full transition-transform duration-300 ${item.dotClass} ${
                        isHovered ? "scale-125" : ""
                      }`}
                    />
                    <span className="text-sm font-mono font-extrabold tracking-wider mt-3">
                      {item.type}
                    </span>
                    <span className={`text-xs font-medium mt-0.5 text-center ${
                      item.isToday || isHovered ? "text-stone-600" : "text-emerald-100"
                    }`}>
                      {item.activeName}
                    </span>
                  </div>

                  {/* Status Tag */}
                  <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                    item.isToday || isHovered ? "border-stone-200 text-stone-600" : "border-white/10 text-emerald-100"
                  }`}>
                    {item.status === "completed" && (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <Check className="w-3 h-3 stroke-[3]" /> Done
                      </span>
                    )}
                    {item.status === "today" && (
                      <span className="text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded-full">
                        ● Today
                      </span>
                    )}
                    {item.status === "checkin" && (
                      <span className="text-purple-800 font-bold bg-purple-100 px-2 py-0.5 rounded-full">
                        ◇ Review
                      </span>
                    )}
                    {item.status === "upcoming" && (
                      <span>Scheduled</span>
                    )}
                    <span className="font-bold">{isHovered ? "✓" : "→"}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Uploaded 3D Character Overlapping the Calendar (Happily following plan!) */}
          <div className="hidden lg:block absolute -top-16 -right-10 w-44 aspect-[1/1] z-20 pointer-events-none drop-shadow-2xl">
            <Image
              src="/characters/character-singing-microphone.png"
              alt="BioPass user happily following their beauty routine"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Selected Day Micro-Routine Preview */}
        <div className="p-6 rounded-3xl bg-black/25 border border-white/20 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${calendarDays[hoveredDay].dotClass}`} />
              <span className="text-xs font-mono uppercase tracking-widest text-yellow-300 font-bold">
                {calendarDays[hoveredDay].day} ({calendarDays[hoveredDay].date}) · {calendarDays[hoveredDay].activeName}
              </span>
            </div>
            <p className="text-sm text-white/95">
              <strong className="text-white">{calendarDays[hoveredDay].focus}:</strong> AM: {calendarDays[hoveredDay].am} | PM: {calendarDays[hoveredDay].pm}
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs font-mono font-bold text-stone-950 bg-yellow-300 px-3 py-1.5 rounded-full shadow-sm">
              ◇ Day 14 Milestone Check-in
            </span>
          </div>
        </div>

        {/* Core Memorable Quote */}
        <div className="p-6 rounded-3xl bg-white/10 border border-white/20 text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-mono uppercase tracking-wider text-yellow-300 block font-semibold">
            Intelligent Guidance
          </span>
          <p className="text-xl sm:text-2xl font-light text-white italic">
            &ldquo;You don&apos;t have to remember everything. Your BioPass does.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
