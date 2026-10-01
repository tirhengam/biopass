import React from 'react';
import { Dna, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full glass-card border-t border-white/10 mt-16 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#F94CAF] to-[#FF85D0] p-[2px] shadow-magenta flex items-center justify-center">
              <div className="w-full h-full bg-[#080D10] rounded-[14px] flex items-center justify-center">
                <Dna className="w-4 h-4 text-[#F94CAF]" />
              </div>
            </div>
            <div>
              <span className="text-sm font-extrabold text-white">
                Bio<span className="text-gradient-magenta">Pass</span> Skincare Intelligence
              </span>
              <p className="text-xs text-slate-400">
                Evidence-Based Cosmetic Toxicology, Compatibility & Routine Defense
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#F94CAF]" />
              150+ INCI Molecules
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              EWG & CIR Formulations
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
