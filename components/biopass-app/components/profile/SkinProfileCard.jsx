import React from 'react';
import { Dna, ShieldAlert, Sparkles, Droplets, RefreshCw, CheckCircle2, ShieldCheck, ThermometerSun, AlertCircle, Gamepad2 } from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';
import SkinRadarChart from './SkinRadarChart.jsx';

export default function SkinProfileCard() {
  const { profile, setIsQuizOpen, setActiveTab, setActiveGameId } = useBioPass();

  const getConcernBadge = (concern) => {
    const map = {
      acne: { label: "Acne & Blemishes", color: "bg-rose-500/20 text-rose-300 border-rose-500/40" },
      hyperpigmentation: { label: "Dark Spots & PIH", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
      fine_lines: { label: "Fine Lines & Aging", color: "bg-purple-500/20 text-purple-300 border-purple-500/40" },
      barrier_damage: { label: "Barrier Dehydration", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" },
      redness: { label: "Redness & Rosacea", color: "bg-pink-500/20 text-pink-300 border-pink-500/40" },
      enlarged_pores: { label: "Enlarged Pores", color: "bg-teal-500/20 text-teal-300 border-teal-500/40" },
    };
    return map[concern] || { label: concern.replace(/_/g, " "), color: "bg-white/10 text-slate-300 border-white/10" };
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Banner / Hero Bio-ID Card */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-white/10 p-6 sm:p-8 shadow-2xl bg-gradient-to-br from-[#111A20] via-[#0E161C] to-[#080D10] text-left">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#F94CAF]/15 via-[#F94CAF]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F94CAF] to-[#FF85D0] p-[2px] shadow-magenta flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-[#080D10] rounded-[14px] flex items-center justify-center">
                <Dna className="w-8 h-8 text-[#F94CAF]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F94CAF]">
                  Biometric Skin Identity
                </span>
                <span className="w-2 h-2 rounded-full bg-[#F94CAF] animate-pulse"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white capitalize mt-0.5">
                {profile.skinType} Skin Profile
              </h2>
              <p className="text-xs text-slate-400 font-medium mt-1">
                Tolerance: <span className="font-bold text-white capitalize">{profile.tolerance}</span> • Climate: <span className="font-bold text-white capitalize">{profile.climate}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => {
                setActiveTab('arcade');
                setActiveGameId('discovery');
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F94CAF]/15 hover:bg-[#F94CAF]/25 border border-[#F94CAF]/40 text-[#FF85D0] text-xs font-extrabold transition-all shadow-sm cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4 text-[#F94CAF]" />
              <span>Discovery Game Quest</span>
            </button>

            <button
              onClick={() => setIsQuizOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#080D10] hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition-all shadow-sm group cursor-pointer"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>Diagnostic Quiz</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Radar Chart vs Traits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
          
          {/* Radar Chart */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-[#080D10] rounded-2xl border border-white/10">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
              Biological Resilience Matrix
            </span>
            <SkinRadarChart scores={profile.scores} size={260} />
          </div>

          {/* Detailed Profiling Metrics */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Target Concerns */}
            <div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">
                Prioritized Skin Targets ({profile.concerns?.length || 0})
              </span>
              <div className="flex flex-wrap gap-2">
                {profile.concerns && profile.concerns.length > 0 ? (
                  profile.concerns.map((concern, idx) => {
                    const badge = getConcernBadge(concern);
                    return (
                      <span key={idx} className={`px-3 py-1 rounded-xl text-xs font-bold border ${badge.color}`}>
                        {badge.label}
                      </span>
                    );
                  })
                ) : (
                  <span className="text-xs text-slate-500">No specific targets selected</span>
                )}
              </div>
            </div>

            {/* Sensitivities & Avoidance */}
            <div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">
                Sensitivities & Avoidance Triggers
              </span>
              <div className="flex flex-wrap gap-2">
                {profile.sensitivities && profile.sensitivities.length > 0 && !profile.sensitivities.includes('none') ? (
                  profile.sensitivities.map((s, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                      <span className="capitalize">{s.replace(/_/g, " ")}</span>
                    </span>
                  ))
                ) : (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-[#F94CAF]/15 text-[#FF85D0] border border-[#F94CAF]/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F94CAF]" />
                    <span>No known active allergens</span>
                  </span>
                )}
              </div>
            </div>

            {/* Quick Biological Parameters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#080D10] border border-white/10">
                <span className="text-[10px] uppercase font-extrabold text-slate-400 block">Hydration Demand</span>
                <span className="text-base font-extrabold text-white mt-0.5 block">{profile.scores?.hydrationNeeds || 65}%</span>
                <span className="text-[10px] text-slate-400 font-medium">Water-binding humectants</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#080D10] border border-white/10">
                <span className="text-[10px] uppercase font-extrabold text-slate-400 block">Barrier Integrity</span>
                <span className="text-base font-extrabold text-[#F94CAF] mt-0.5 block">{profile.scores?.barrierResilience || 70}%</span>
                <span className="text-[10px] text-slate-400 font-medium">Ceramide lipid balance</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#080D10] border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase font-extrabold text-slate-400 block">Active Tolerance</span>
                <span className="text-base font-extrabold text-amber-400 mt-0.5 block">{profile.scores?.exfoliationTolerance || 65}%</span>
                <span className="text-[10px] text-slate-400 font-medium">Acids & retinoid capacity</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
