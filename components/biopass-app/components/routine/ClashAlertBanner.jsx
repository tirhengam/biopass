import React from 'react';
import { AlertTriangle, ShieldAlert, Sparkles, ShieldCheck, ArrowRight, Sun } from 'lucide-react';

export default function ClashAlertBanner({ clashResult, timeOfDay, onAddSpf }) {
  if (!clashResult) return null;

  const { hasClashes, clashes, warnings, routineScore } = clashResult;

  if (!hasClashes && warnings.length === 0) {
    return (
      <div className="p-5 rounded-3xl bg-[#F94CAF]/10 border border-[#F94CAF]/30 flex items-center justify-between gap-4 text-left shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-2xl bg-[#F94CAF] text-white shadow-magenta-sm">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-extrabold text-white block">
              100% Regimen Harmony & Safety
            </span>
            <p className="text-[11px] text-slate-300 font-medium">
              No active molecular conflicts, over-exfoliation risks, or barrier disruptors detected.
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#080D10] text-[#FF85D0] border border-[#F94CAF]/40 shadow-sm">
          Optimal pH & Layering
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-3.5 text-left">
      
      {/* High Severity Clashes */}
      {clashes.map((clash, idx) => (
        <div 
          key={idx} 
          className="p-5 rounded-3xl bg-[#280C12] border border-rose-500/50 shadow-sm space-y-3 animate-pulse-subtle"
        >
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-2xl bg-rose-600 text-white shrink-0 shadow-sm">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
                  Critical Active Clash
                </span>
                <span className="text-xs text-rose-200 font-extrabold">
                  {clash.title}
                </span>
              </div>
              <p className="text-xs text-rose-300 mt-1 leading-relaxed font-medium">
                {clash.description}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#140609] border border-rose-500/30 text-xs text-rose-200 flex items-start gap-2 shadow-sm">
            <Sparkles className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold block text-rose-300">Dermatologist Recommendation:</span>
              <span className="font-medium text-slate-300">{clash.recommendation}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Warnings (e.g. Missing SPF) */}
      {warnings.map((warn, idx) => (
        <div key={idx} className="p-5 rounded-3xl bg-amber-500/15 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-2xl bg-amber-500 text-slate-900 shrink-0">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-extrabold text-amber-300 block">
                {warn.title}
              </span>
              <p className="text-[11px] text-amber-200 leading-relaxed font-medium">
                {warn.description}
              </p>
            </div>
          </div>

          {warn.type === 'spf_missing' && onAddSpf && (
            <button
              onClick={onAddSpf}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white text-xs font-extrabold whitespace-nowrap shadow-magenta transition-all cursor-pointer"
            >
              + Add SPF 50 Shield
            </button>
          )}
        </div>
      ))}

    </div>
  );
}
