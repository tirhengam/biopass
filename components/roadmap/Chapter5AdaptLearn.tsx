"use client";

import React, { useState } from "react";
import { GitCommit, Calendar, Clock, Sparkles, ChevronRight, Check } from "lucide-react";

export const Chapter5AdaptLearn: React.FC = () => {
  const [activeGoal, setActiveGoal] = useState<number>(0);

  const roadmapGoals = [
    {
      id: "pores",
      name: "LARGE PORES",
      color: "bg-purple-400",
      barColor: "bg-purple-400/40 border-purple-300",
      dotColor: "bg-purple-300 ring-purple-400",
      start: "Week 1 (Oct)",
      checkpoint: "Check-in (W4)",
      duration: "4 Weeks · Foundation",
      leftOffset: "0%",
      width: "36%",
      details: "Gentle low-pH cleanse + 5% Niacinamide sebum regulation",
    },
    {
      id: "acne",
      name: "ACNE",
      color: "bg-pink-400",
      barColor: "bg-pink-400/40 border-pink-300",
      dotColor: "bg-pink-300 ring-pink-400",
      start: "Phase 1 (Mid-Oct)",
      checkpoint: "Review (W8)",
      duration: "6 Weeks · Targeted",
      leftOffset: "18%",
      width: "50%",
      details: "BHA exfoliation cycled with barrier recovery ceramides",
    },
    {
      id: "texture",
      name: "SKIN TEXTURE",
      color: "bg-amber-400",
      barColor: "bg-amber-400/40 border-amber-300",
      dotColor: "bg-amber-300 ring-amber-400",
      start: "Start (Nov)",
      checkpoint: "Check-in (W10)",
      duration: "4 Weeks · Cell Renewal",
      leftOffset: "48%",
      width: "38%",
      details: "Vitamin C morning radiance + night multi-peptide emulsion",
    },
    {
      id: "hydration",
      name: "HYDRATION",
      color: "bg-sky-400",
      barColor: "bg-sky-400/40 border-sky-300",
      dotColor: "bg-sky-300 ring-sky-400",
      start: "Day 1 (Oct)",
      checkpoint: "Ongoing (Dec+)",
      duration: "Continuous Baseline",
      leftOffset: "0%",
      width: "100%",
      details: "Hyaluronic + 3:1:1 essential lipid barrier maintenance",
    },
  ];

  // October mini calendar sample
  const octoberDays = [
    { num: 1, dots: ["bg-sky-400", "bg-purple-400"] },
    { num: 2, dots: ["bg-sky-400"] },
    { num: 3, dots: ["bg-sky-400", "bg-purple-400"] },
    { num: 4, dots: ["bg-sky-400"] },
    { num: 5, dots: ["bg-sky-400", "bg-purple-400"] },
    { num: 6, dots: ["bg-sky-400"] },
    { num: 7, dots: ["bg-sky-400"] },
    { num: 8, dots: ["bg-sky-400", "bg-purple-400"] },
    { num: 9, dots: ["bg-sky-400", "bg-pink-400"] },
    { num: 10, dots: ["bg-sky-400", "bg-purple-400"] },
    { num: 11, dots: ["bg-sky-400", "bg-pink-400"] },
    { num: 12, dots: ["bg-sky-400", "bg-purple-400"] },
    { num: 13, dots: ["bg-sky-400"] },
    { num: 14, dots: ["bg-sky-400", "bg-purple-400", "bg-pink-400"], milestone: true },
    { num: 15, dots: ["bg-sky-400"] },
    { num: 16, dots: ["bg-sky-400", "bg-pink-400"] },
    { num: 17, dots: ["bg-sky-400"] },
    { num: 18, dots: ["bg-sky-400", "bg-pink-400"] },
    { num: 19, dots: ["bg-sky-400"] },
    { num: 20, dots: ["bg-sky-400", "bg-pink-400"] },
    { num: 21, dots: ["bg-sky-400"] },
  ];

  return (
    <section
      id="section-adapt"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#4F46E5] text-white transition-colors duration-700 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-12 my-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-yellow-300 text-xs font-mono uppercase tracking-[0.16em] font-bold">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Chapter 05 · Long-Term Roadmap</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.08]">
            Your plan evolves <br className="hidden sm:inline" />
            <span className="font-normal italic text-yellow-200">with you.</span>
          </h2>

          <p className="text-base sm:text-xl text-indigo-100 font-light leading-relaxed max-w-2xl">
            Different goals need different time, phases and check-ins. <br className="hidden sm:inline" />
            BioPass keeps the whole journey connected.
          </p>
        </div>

        {/* VISUAL HERO: HORIZONTAL LONG-TERM ROADMAP + CALENDAR OVERVIEW */}
        <div className="space-y-6">
          {/* MOBILE VIEW (sm:hidden) — Horizontal Scrollable Timeline */}
          <div className="sm:hidden p-4 rounded-3xl bg-black/25 border border-white/20 backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-indigo-200 font-bold px-1">
              <span className="text-white">MY SKIN GOALS</span>
              <span className="text-yellow-300">← Swipe timeline →</span>
            </div>

            {/* Horizontally Scrollable Timeline Body */}
            <div className="overflow-x-auto pb-2 pt-1 no-scrollbar -mx-2 px-2">
              <div className="min-w-[560px] space-y-3">
                {/* Header Months */}
                <div className="grid grid-cols-12 pb-2 border-b border-white/15 text-[11px] font-mono uppercase tracking-widest text-indigo-200 font-bold">
                  <div className="col-span-4 text-white">GOAL</div>
                  <div className="col-span-8 grid grid-cols-3 text-center">
                    <span className="text-yellow-300 font-extrabold">OCTOBER</span>
                    <span>NOVEMBER</span>
                    <span>DECEMBER</span>
                  </div>
                </div>

                {/* Goal Rows */}
                {roadmapGoals.map((goal, idx) => (
                  <div
                    key={goal.id}
                    onClick={() => setActiveGoal(idx)}
                    className={`grid grid-cols-12 items-center p-2 rounded-xl transition-all cursor-pointer ${
                      activeGoal === idx
                        ? "bg-white/15 ring-2 ring-yellow-300/80 shadow"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="col-span-4 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${goal.color}`} />
                      <span className="text-xs font-mono font-bold text-white">
                        {goal.name}
                      </span>
                    </div>

                    <div className="col-span-8 relative h-8 flex items-center px-1">
                      <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-20 border-l border-white/40">
                        <div className="border-r border-white/40" />
                        <div className="border-r border-white/40" />
                        <div />
                      </div>

                      <div
                        style={{ left: goal.leftOffset, width: goal.width }}
                        className={`absolute h-6 rounded-full border ${goal.barColor} backdrop-blur-md flex items-center justify-between px-2 shadow-sm`}
                      >
                        <div className="flex items-center gap-1">
                          <span className={`w-2.5 h-2.5 rounded-full ${goal.dotColor} ring-1 shadow`} />
                          <span className="text-[9px] font-mono font-bold text-white">
                            {goal.start}
                          </span>
                        </div>
                        <div className="flex-1 mx-1.5 h-0.5 bg-white/40 rounded-full" />
                        <div className="flex items-center gap-1">
                          <span className="text-[9px] font-mono font-bold text-yellow-200">
                            {goal.checkpoint}
                          </span>
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-300 ring-1 ring-white shadow" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Goal Inspector for Mobile */}
            <div className="pt-2 border-t border-white/15 space-y-1.5 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-yellow-300 font-bold uppercase">
                  {roadmapGoals[activeGoal].name}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white font-bold">
                  {roadmapGoals[activeGoal].duration}
                </span>
              </div>
              <p className="text-[11px] text-indigo-100 font-light leading-snug">
                {roadmapGoals[activeGoal].details}
              </p>
            </div>
          </div>

          {/* DESKTOP VIEW (hidden sm:block) — Main Visual Roadmap Timeline */}
          <div className="hidden sm:block p-6 sm:p-8 rounded-3xl bg-black/25 border border-white/20 backdrop-blur-xl shadow-2xl space-y-6">
            {/* Timeline Header Months */}
            <div className="grid grid-cols-12 pb-3 border-b border-white/15 text-xs font-mono uppercase tracking-widest text-indigo-200 font-bold">
              <div className="col-span-4 sm:col-span-3 text-white">MY SKIN GOALS</div>
              <div className="col-span-8 sm:col-span-9 grid grid-cols-3 text-center">
                <span className="text-yellow-300 font-extrabold">OCTOBER</span>
                <span>NOVEMBER</span>
                <span>DECEMBER</span>
              </div>
            </div>

            {/* Timeline Rows for Skin Goals */}
            <div className="space-y-5">
              {roadmapGoals.map((goal, idx) => (
                <div
                  key={goal.id}
                  onClick={() => setActiveGoal(idx)}
                  className={`grid grid-cols-12 items-center p-3 rounded-2xl transition-all cursor-pointer ${
                    activeGoal === idx
                      ? "bg-white/15 ring-2 ring-yellow-300/80 shadow-lg"
                      : "hover:bg-white/5"
                  }`}
                >
                  {/* Goal Label */}
                  <div className="col-span-4 sm:col-span-3 flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${goal.color} shadow-sm`} />
                    <span className="text-xs sm:text-sm font-mono font-bold tracking-tight text-white">
                      {goal.name}
                    </span>
                  </div>

                  {/* Horizontal Timeline Bar with Start & Check-in Dots */}
                  <div className="col-span-8 sm:col-span-9 relative h-10 flex items-center px-1">
                    {/* Background Month Guide Lines */}
                    <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-20 border-l border-white/40">
                      <div className="border-r border-white/40" />
                      <div className="border-r border-white/40" />
                      <div />
                    </div>

                    {/* Timeline Pill */}
                    <div
                      style={{ left: goal.leftOffset, width: goal.width }}
                      className={`absolute h-7 rounded-full border ${goal.barColor} backdrop-blur-md flex items-center justify-between px-2.5 shadow-sm transition-all`}
                    >
                      {/* Start Node */}
                      <div className="flex items-center gap-1.5">
                        <span className={`w-3 h-3 rounded-full ${goal.dotColor} ring-2 shadow`} />
                        <span className="text-[10px] font-mono font-bold text-white hidden sm:inline">
                          {goal.start}
                        </span>
                      </div>

                      {/* Connecting Line Accent */}
                      <div className="flex-1 mx-2 h-0.5 bg-white/40 rounded-full" />

                      {/* Check-In Node */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-yellow-200 hidden sm:inline">
                          {goal.checkpoint}
                        </span>
                        <span className="w-3 h-3 rounded-full bg-yellow-300 ring-2 ring-white shadow" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Goal Dynamic Description */}
            <div className="pt-2 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-indigo-200">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300 font-bold uppercase">
                  {roadmapGoals[activeGoal].name}:
                </span>
                <span className="text-white">
                  {roadmapGoals[activeGoal].details}
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white font-bold w-fit">
                {roadmapGoals[activeGoal].duration}
              </span>
            </div>
          </div>

          {/* LOWER SECTION: COMPACT CALENDAR OVERVIEW CONNECTING GOALS TO ROUTINES (hidden sm:grid) */}
          <div className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Explanation */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-yellow-300 font-bold block">
                DAILY CALENDAR INTEGRATION
              </span>
              <h3 className="text-2xl font-light text-white leading-tight">
                From months to your <br />
                <span className="font-normal italic text-yellow-200">everyday routine.</span>
              </h3>
              <p className="text-xs sm:text-sm text-indigo-100 font-light leading-relaxed">
                Colored dots in the daily calendar connect directly to your overlapping active goals and scheduled check-ins.
              </p>
            </div>

            {/* Right: Compact October Calendar Grid */}
            <div className="lg:col-span-8 p-5 rounded-2xl bg-black/25 border border-white/15 backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-white">
                  <Calendar className="w-4 h-4 text-yellow-300" />
                  <span>OCTOBER · FIRST 3 WEEKS OVERVIEW</span>
                </div>
                {/* Mini Legend */}
                <div className="flex items-center gap-3 text-[10px] font-mono">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-purple-400" /> Pores
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-pink-400" /> Acne
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-sky-400" /> Hydration
                  </span>
                </div>
              </div>

              {/* 21 Days Micro Matrix */}
              <div className="grid grid-cols-7 gap-2 text-center">
                {octoberDays.map((d) => (
                  <div
                    key={d.num}
                    className={`p-2 rounded-xl flex flex-col items-center justify-between h-14 border ${
                      d.milestone
                        ? "bg-yellow-300/20 border-yellow-300 text-yellow-200 shadow-md ring-2 ring-yellow-300/50"
                        : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="text-[11px] font-mono font-bold">Oct {d.num}</span>
                    <div className="flex items-center gap-1">
                      {d.dots.map((dot, i) => (
                        <span key={i} className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Hierarchy Summary Pill */}
        <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-center text-xs font-mono text-indigo-100 max-w-2xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="text-yellow-300 font-bold">LONG-TERM GOALS</span>
          <span className="opacity-50">➔</span>
          <span className="text-white font-bold">PHASES + TIME</span>
          <span className="opacity-50">➔</span>
          <span className="text-yellow-300 font-bold">CHECK-INS</span>
          <span className="opacity-50">➔</span>
          <span className="text-emerald-300 font-bold">DAILY CALENDAR</span>
        </div>
      </div>
    </section>
  );
};
