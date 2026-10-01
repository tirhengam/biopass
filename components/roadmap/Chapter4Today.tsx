"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Flame, Clock, Sun, Moon, Sparkles } from "lucide-react";

export const Chapter4Today: React.FC = () => {
  const [amRoutine, setAmRoutine] = useState([
    { name: "Cleanser", done: true },
    { name: "Vitamin C", done: true },
    { name: "Moisturizer", done: true },
    { name: "SPF", done: true },
  ]);

  const [pmRoutine, setPmRoutine] = useState([
    { name: "Cleanser", done: false },
    { name: "Hydration", done: false },
    { name: "Moisturizer", done: false },
  ]);

  const toggleAm = (idx: number) => {
    setAmRoutine((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, done: !item.done } : item))
    );
  };

  const togglePm = (idx: number) => {
    setPmRoutine((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, done: !item.done } : item))
    );
  };

  return (
    <section
      id="section-today"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#FDE047] text-[#1B0E33] transition-colors duration-700 overflow-hidden"
    >
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-12 my-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B0E33]/10 border border-[#1B0E33]/20 text-[#1B0E33] text-xs font-mono uppercase tracking-[0.16em] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter 04 · Today</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1B0E33] leading-[1.08]">
            One day at a time.
          </h2>

          <p className="text-xl sm:text-2xl text-[#3A1E68] font-light italic">
            &ldquo;Your roadmap becomes your everyday routine.&rdquo;
          </p>
        </div>

        {/* TODAY VIEW CARD + CELEBRATING 3D CHARACTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Today Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FFFDF0] rounded-3xl p-7 sm:p-9 border-2 border-[#1B0E33]/15 shadow-[0_20px_50px_rgba(27,14,51,0.12)] space-y-6">
            {/* Header: TODAY DAY 12 / 14 */}
            <div className="flex items-center justify-between pb-4 border-b border-[#1B0E33]/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#5C329C] font-bold block">
                  TODAY
                </span>
                <h3 className="text-2xl font-black text-[#1B0E33] mt-0.5 font-mono">
                  DAY 12 / 14
                </h3>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B0E33] text-yellow-300 text-xs font-mono font-bold shadow-sm">
                <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span>🔥 12-day streak</span>
              </div>
            </div>

            {/* Split AM & PM Routines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* AM ROUTINE */}
              <div className="p-5 rounded-2xl bg-amber-100/70 border border-amber-300/80 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-amber-300/60">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-extrabold text-amber-950">
                    <Sun className="w-4 h-4 text-amber-600" />
                    <span>AM</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded-full font-bold">
                    Completed
                  </span>
                </div>

                <div className="space-y-2">
                  {amRoutine.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => toggleAm(idx)}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/80 transition-colors cursor-pointer group"
                    >
                      <div
                        className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                          item.done
                            ? "bg-[#1B0E33] border-[#1B0E33] text-yellow-300"
                            : "border-stone-400 bg-white"
                        }`}
                      >
                        {item.done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className={`text-xs font-bold ${item.done ? "text-[#1B0E33]" : "text-stone-600"}`}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PM ROUTINE */}
              <div className="p-5 rounded-2xl bg-purple-100/60 border border-purple-300/70 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-purple-300/50">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-extrabold text-purple-950">
                    <Moon className="w-4 h-4 text-purple-700" />
                    <span>PM</span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-800 bg-purple-200/80 px-2 py-0.5 rounded-full font-bold">
                    Scheduled
                  </span>
                </div>

                <div className="space-y-2">
                  {pmRoutine.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => togglePm(idx)}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/80 transition-colors cursor-pointer group"
                    >
                      <div
                        className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                          item.done
                            ? "bg-[#1B0E33] border-[#1B0E33] text-yellow-300"
                            : "border-stone-400 bg-white"
                        }`}
                      >
                        {item.done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className={`text-xs font-bold ${item.done ? "text-[#1B0E33]" : "text-stone-600"}`}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Steps Horizon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 block font-bold">
                  NEXT:
                </span>
                <strong className="text-sm text-stone-900">Recovery Day (Tomorrow)</strong>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-800 block font-bold">
                  NEXT CHECK-IN:
                </span>
                <strong className="text-sm text-purple-950">In 3 days (Milestone)</strong>
              </div>
            </div>

            {/* Metrics */}
            <div className="pt-2 border-t border-[#1B0E33]/10 flex flex-wrap items-center justify-between text-xs font-mono font-bold text-[#1B0E33]">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-600 fill-orange-500" />
                <span>🔥 12-day streak</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-800">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>92% routine completed this week</span>
              </div>
            </div>
          </div>

          {/* Right Column: Character Celebrating Success & Main Message (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6 text-center">
            {/* Uploaded 3D Character (Progress / Achievement) */}
            <div className="relative w-48 sm:w-56 h-72 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
              <Image
                src="/characters/character-celebrating-cake.png"
                alt="BioPass celebrating routine consistency"
                fill
                className="object-contain"
              />
            </div>

            {/* Main Message */}
            <div className="p-6 rounded-3xl bg-[#1B0E33] text-white shadow-xl max-w-sm space-y-2 border border-white/20">
              <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-300 font-bold block">
                The Philosophy
              </span>
              <p className="text-xl sm:text-2xl font-light italic text-yellow-100">
                &ldquo;Build consistency, not product clutter.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
