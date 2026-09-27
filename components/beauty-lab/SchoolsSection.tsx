"use client";

import React from "react";
import { GraduationCap, BookOpen, Atom, Users, ArrowRight, CheckCircle2 } from "lucide-react";

interface SchoolsSectionProps {
  onOpenSchoolsModal: () => void;
}

export default function SchoolsSection({ onOpenSchoolsModal }: SchoolsSectionProps) {
  const topics = [
    { title: "Organic & Physical Chemistry", desc: "Polarity, emulsions, pH scales, lipids, and active molecular synthesis." },
    { title: "Cellular & Dermal Biology", desc: "Stratum corneum structure, microbiome ecosystems, and trans-epidermal water loss." },
    { title: "Materials Science & Circularity", desc: "Polymer life-cycles, monomaterial engineering, and biodegradable packaging." },
    { title: "Scientific Literacy & Evidence", desc: "Peer-reviewed methodology, double-blind trials, and questioning cosmetic claims." }
  ];

  return (
    <section id="schools" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-[2.5rem] bg-[#FFFFFF] border border-[#E2E8F0] p-8 sm:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: STEM Focus */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-bold uppercase tracking-widest text-[#0369A1]">
              <GraduationCap className="w-4 h-4" />
              <span>BEAUTY MEETS STEM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
              Science students already care about.
            </h2>

            <p className="text-base text-[#64748B] leading-relaxed">
              Beauty Lab uses familiar products to introduce concepts from chemistry, biology, materials science, sustainability and scientific literacy through interactive learning.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenSchoolsModal}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B132B] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Explore Beauty Lab for Schools →</span>
              </button>
            </div>

            <p className="text-[11px] text-[#94A3B8]">
              Designed for middle schools, high schools, science clubs, and STEM outreach programs.
            </p>

          </div>

          {/* Right Column: Curriculum Integration Matrix */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2 flex items-center justify-between">
              <span>Curriculum Cross-Disciplinary Modules</span>
              <span className="text-[10px] font-mono text-[#0284C7]">NextGen STEM Aligned</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topics.map((t, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0B132B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>{t.title}</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* School Trust Box */}
            <div className="p-4 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-between text-xs text-[#1D4ED8]">
              <span>Curriculum licenses include teacher guides & virtual lab rubrics.</span>
              <span className="font-mono text-[11px] font-bold">Grade 8–12</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
