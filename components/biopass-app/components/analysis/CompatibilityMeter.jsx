import React, { useState } from 'react';
import { 
  ShieldCheck, AlertTriangle, CheckCircle2, XCircle, 
  Sparkles, Calendar, Plus, Bookmark, Droplets, ShieldAlert,
  Flame, Info, ArrowUpRight, Package 
} from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';
import { calculateCompatibility } from '../../services/compatibilityEngine.js';
import ScoreGauge from '../common/ScoreGauge.jsx';

export default function CompatibilityMeter({ product }) {
  const { 
    profile, 
    addToRoutine, 
    removeFromRoutine, 
    amRoutine, 
    pmRoutine, 
    bookmarks, 
    toggleBookmark,
    setActiveTab 
  } = useBioPass();
  const [imgError, setImgError] = useState(false);

  if (!product) return null;

  const compatibility = calculateCompatibility(product, profile);
  const { score, grade, pros, cons, dimensionScores, parsedData } = compatibility;

  const inAm = amRoutine.some(p => p.id === product.id);
  const inPm = pmRoutine.some(p => p.id === product.id);
  const isBookmarked = bookmarks.includes(product.id);

  const getDimensionColor = (val) => {
    if (val >= 80) return "bg-[#F94CAF]";
    if (val >= 60) return "bg-[#FF65C5]";
    if (val >= 40) return "bg-amber-400";
    return "bg-rose-500";
  };

  return (
    <div className="w-full space-y-6 text-left">
      
      {/* Top Main Score Card */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-white/10 p-6 sm:p-8 shadow-2xl bg-gradient-to-br from-[#111A20] via-[#0E161C] to-[#080D10]">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F94CAF]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          
          {/* Product Meta */}
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#080D10] border border-white/10 overflow-hidden shrink-0 flex items-center justify-center text-[#F94CAF]">
              {!imgError && product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)} 
                />
              ) : (
                <Package className="w-10 h-10 opacity-70" />
              )}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/10 text-slate-300 border border-white/10">
                  {product.category}
                </span>
                {product.ph && product.ph !== "Unknown" && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F94CAF]/20 text-[#FF85D0] border border-[#F94CAF]/30">
                    pH {product.ph}
                  </span>
                )}
                <span className="text-xs font-bold text-slate-400">
                  {product.brand}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                {product.name}
              </h2>

              <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Large Bio Score Gauge */}
          <div className="flex flex-col items-center justify-center p-4 bg-[#080D10] rounded-3xl border border-white/10 shrink-0 min-w-[160px]">
            <ScoreGauge score={score} size={110} strokeWidth={9} showLabel={false} />
            <span className={`mt-2 px-3 py-0.5 rounded-full text-xs font-extrabold border uppercase tracking-wider ${
              score >= 90 
                ? 'bg-[#F94CAF]/20 text-[#F94CAF] border-[#F94CAF]/40 shadow-sm' 
                : (score >= 75 ? 'bg-[#FF65C5]/20 text-[#FF85D0] border-[#FF65C5]/40' : (score >= 50 ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-rose-500/20 text-rose-300 border-rose-500/40'))
            }`}>
              {grade}
            </span>
          </div>

        </div>

        {/* Action Controls & Fast Add */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-1">Regimen Quick Add:</span>
            
            <button
              onClick={() => inAm ? removeFromRoutine(product.id, 'am') : addToRoutine(product, 'am')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-extrabold border transition-all cursor-pointer ${
                inAm
                  ? 'bg-amber-500/25 text-amber-300 border-amber-500/50'
                  : 'bg-[#080D10] text-slate-300 border-white/10 hover:bg-amber-500/15 hover:text-amber-300'
              }`}
            >
              <span>{inAm ? '✓ Added to AM Routine' : '+ Add to AM Routine'}</span>
            </button>

            <button
              onClick={() => inPm ? removeFromRoutine(product.id, 'pm') : addToRoutine(product, 'pm')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-extrabold border transition-all cursor-pointer ${
                inPm
                  ? 'bg-[#F94CAF]/25 text-[#FF85D0] border-[#F94CAF]/50'
                  : 'bg-[#080D10] text-slate-300 border-white/10 hover:bg-[#F94CAF]/15 hover:text-[#F94CAF]'
              }`}
            >
              <span>{inPm ? '✓ Added to PM Routine' : '+ Add to PM Routine'}</span>
            </button>

            <button
              onClick={() => toggleBookmark(product.id)}
              className={`p-2 rounded-2xl border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-[#F94CAF]/20 border-[#F94CAF]/40 text-[#F94CAF]'
                  : 'bg-[#080D10] border-white/10 text-slate-400 hover:text-white'
              }`}
              title={isBookmarked ? "Saved in favorites" : "Save to favorites"}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>

          <button
            onClick={() => setActiveTab('routine')}
            className="flex items-center gap-1 text-xs font-extrabold text-[#F94CAF] hover:text-[#FF85D0] cursor-pointer"
          >
            <span>View Full Regimen Clash Status</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Dimensional Breakdown Progress Bars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        
        {/* Dimension 1: Pore Safety */}
        <div className="p-4 rounded-2xl glass-card border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-white">Pore Clog Safety</span>
            <span className="font-extrabold text-[#F94CAF]">{dimensionScores.poreSafety}%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${getDimensionColor(dimensionScores.poreSafety)}`}
              style={{ width: `${dimensionScores.poreSafety}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-400 font-semibold block">
            {parsedData.highestComedogenic === 0 ? "Non-comedogenic (0/5)" : `Max Comedogenic: ${parsedData.highestComedogenic}/5`}
          </span>
        </div>

        {/* Dimension 2: Barrier Fortification */}
        <div className="p-4 rounded-2xl glass-card border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-white">Barrier Support</span>
            <span className="font-extrabold text-[#F94CAF]">{dimensionScores.barrierSupport}%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${getDimensionColor(dimensionScores.barrierSupport)}`}
              style={{ width: `${dimensionScores.barrierSupport}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-400 font-semibold block">
            Lipids, Ceramides & Humectants
          </span>
        </div>

        {/* Dimension 3: Concern Synergy */}
        <div className="p-4 rounded-2xl glass-card border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-white">Goal Synergy</span>
            <span className="font-extrabold text-[#F94CAF]">{dimensionScores.concernAlignment}%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${getDimensionColor(dimensionScores.concernAlignment)}`}
              style={{ width: `${dimensionScores.concernAlignment}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-400 font-semibold block">
            Matches {profile.concerns.length} prioritized goals
          </span>
        </div>

        {/* Dimension 4: Irritation Index */}
        <div className="p-4 rounded-2xl glass-card border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-white">Skin Tolerance</span>
            <span className="font-extrabold text-[#F94CAF]">{dimensionScores.lowIrritation}%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${getDimensionColor(dimensionScores.lowIrritation)}`}
              style={{ width: `${dimensionScores.lowIrritation}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-400 font-semibold block">
            {parsedData.flaggedAllergens.length === 0 ? "0 Fragrances or Harsh Alcohols" : `${parsedData.flaggedAllergens.length} Flagged Sensitizers`}
          </span>
        </div>

      </div>

      {/* Pros & Cons Dermatological Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Why this matches (Pros) */}
        <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-3.5">
          <div className="flex items-center gap-2 text-[#F94CAF]">
            <CheckCircle2 className="w-5 h-5" />
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Profile Synergy & Benefits
            </h4>
          </div>

          <div className="space-y-2.5">
            {pros.map((p, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-[#F94CAF]/10 border border-[#F94CAF]/25 text-xs">
                <span className="font-extrabold text-[#FF85D0] block mb-0.5">{p.title}</span>
                <span className="text-slate-200 leading-relaxed font-medium">{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Potential risks / Cons */}
        <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-3.5">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-5 h-5" />
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Cautions & Profile Conflicts
            </h4>
          </div>

          <div className="space-y-2.5">
            {cons.length > 0 ? (
              cons.map((c, i) => (
                <div key={i} className={`p-3.5 rounded-2xl border text-xs font-medium ${
                  c.type === 'danger' 
                    ? 'bg-rose-500/15 border-rose-500/30 text-rose-200' 
                    : 'bg-amber-500/15 border-amber-500/30 text-amber-200'
                }`}>
                  <span className="font-extrabold block mb-0.5">{c.title}</span>
                  <span className="leading-relaxed">{c.text}</span>
                </div>
              ))
            ) : (
              <div className="p-5 rounded-2xl bg-[#080D10] border border-white/10 text-center text-xs text-[#F94CAF]">
                <ShieldCheck className="w-6 h-6 mx-auto mb-1 text-[#F94CAF]" />
                <span className="font-bold">Zero major formulation red flags detected for your profile!</span>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
