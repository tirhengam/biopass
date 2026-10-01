import React, { useState } from 'react';
import { 
  Bookmark, Sparkles, Plus, Check, ShieldCheck, 
  AlertTriangle, Droplets, Package, ChevronDown, ChevronUp, ArrowRight 
} from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';
import { calculateCompatibility } from '../../services/compatibilityEngine.js';

export default function ConsumerProductCard({ product, onSelect, onOpenScience, isSelected }) {
  const { profile, bookmarks, toggleBookmark, addToRoutine, amRoutine, pmRoutine } = useBioPass();
  const [imgError, setImgError] = useState(false);
  const [showWhy, setShowWhy] = useState(false);

  const compatibility = calculateCompatibility(product, profile);
  const isBookmarked = bookmarks.includes(product.id);
  const inAm = amRoutine.some(p => p.id === product.id);
  const inPm = pmRoutine.some(p => p.id === product.id);

  // Friendly why reasons
  const positiveReasons = [
    `Fits your ${profile.skinType || 'balanced'} skin profile`,
    profile.sensitivities?.includes('fragrance') ? "Zero harsh fragrances detected" : "Gentle, non-irritating formulation",
    "Complements your active AM/PM regimen",
    `Formulated for ${profile.concerns?.[0]?.replace('_', ' ') || 'healthy barrier hydration'}`
  ];

  // Friendly caution
  const cautionTip = compatibility.cons && compatibility.cons.length > 0
    ? compatibility.cons[0].text
    : "Introduce gradually over 3–4 days to let your skin barrier adjust smoothly.";

  return (
    <div 
      className={`group relative rounded-3xl glass-card p-5 sm:p-6 flex flex-col justify-between transition-all border ${
        isSelected 
          ? 'border-[#F94CAF] ring-2 ring-[#F94CAF]/40 shadow-magenta-sm bg-[#121E26]' 
          : 'border-white/10 hover:border-[#F94CAF]/40 bg-[#0E161C]'
      }`}
    >
      <div>
        
        {/* Top Header: Brand, Category, Match Score & Bookmark */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <span className="text-[11px] font-bold text-slate-400 block">{product.brand}</span>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-white/10 text-slate-300">
              {product.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* 💗 Match Badge */}
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#F94CAF]/20 border border-[#F94CAF]/40 text-[#F94CAF] font-extrabold text-xs shadow-sm">
              <span>💗</span>
              <span>{compatibility.score}% Match</span>
            </div>

            {/* Bookmark */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(product.id);
              }}
              className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
                isBookmarked 
                  ? 'bg-[#F94CAF]/20 border-[#F94CAF]/40 text-[#F94CAF]' 
                  : 'border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
              title={isBookmarked ? "Saved in favorites" : "Save to favorites"}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Thumbnail & Title */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-[#080D10] border border-white/10 overflow-hidden shrink-0 flex items-center justify-center text-[#F94CAF]">
            {!imgError && product.image ? (
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <Package className="w-8 h-8 opacity-70" />
            )}
          </div>
          <div>
            <h3 className="text-base font-extrabold text-white leading-tight">
              {product.name}
            </h3>
            <span className="text-xs font-bold text-[#F94CAF] mt-0.5 block">{product.price || "$--"}</span>
          </div>
        </div>

        {/* Why BioPass Likes It For You (Level 1) */}
        <div className="p-3.5 rounded-2xl bg-[#080D10] border border-white/5 space-y-2 mb-3 text-left">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF85D0] block">
            Why BioPass likes it for you:
          </span>
          <div className="space-y-1">
            {positiveReasons.slice(0, 3).map((reason, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                <span className="text-emerald-400 font-bold leading-none mt-0.5">🟢</span>
                <span className="leading-snug">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* One Thing To Know (Friendly Caution) */}
        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2 mb-3">
          <span className="text-amber-400 font-bold mt-0.5">⚠️</span>
          <div>
            <span className="font-extrabold block text-[10px] uppercase tracking-wider text-amber-300">One thing to know:</span>
            <span className="leading-snug">{cautionTip}</span>
          </div>
        </div>

        {/* "Why?" Collapsible Deep Reason (Level 2) */}
        {showWhy && (
          <div className="p-3.5 rounded-2xl bg-[#121B22] border border-white/10 space-y-2 text-xs text-slate-200 animate-fade-in mb-3">
            <span className="font-extrabold text-[#F94CAF] block text-[10px] uppercase">Dermatological Synergy:</span>
            <p className="leading-relaxed">
              {compatibility.pros?.[0]?.text || "Matches your skin's hydration requirements and helps balance active sebum flow."}
            </p>
          </div>
        )}

      </div>

      {/* Footer Controls & Progressive Disclosure Buttons */}
      <div className="mt-3 pt-3 border-t border-white/10 space-y-2.5">
        
        <div className="flex items-center justify-between gap-2">
          {/* "Why?" Button */}
          <button
            onClick={() => setShowWhy(!showWhy)}
            className="text-[11px] font-bold text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
          >
            <span>{showWhy ? "Hide reason" : "Why?"}</span>
            {showWhy ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          {/* Level 3 "See Ingredients & Science 🔬" */}
          <button
            onClick={() => onOpenScience(product)}
            className="text-[11px] font-extrabold text-[#F94CAF] hover:text-[#FF85D0] flex items-center gap-1 cursor-pointer"
          >
            <span>See Ingredients & Science 🔬</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Quick Add to Routine Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={() => inAm ? addToRoutine(product, 'am') : addToRoutine(product, 'am')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-extrabold border transition-colors cursor-pointer ${
              inAm
                ? 'bg-amber-500/25 text-amber-300 border-amber-500/50'
                : 'bg-[#080D10] text-slate-300 border-white/10 hover:bg-amber-500/15 hover:text-amber-300'
            }`}
          >
            {inAm ? '✓ in AM' : '+ Add AM'}
          </button>

          <button
            onClick={() => inPm ? addToRoutine(product, 'pm') : addToRoutine(product, 'pm')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-extrabold border transition-colors cursor-pointer ${
              inPm
                ? 'bg-[#F94CAF]/25 text-[#FF85D0] border-[#F94CAF]/50'
                : 'bg-[#080D10] text-slate-300 border-white/10 hover:bg-[#F94CAF]/15 hover:text-[#F94CAF]'
            }`}
          >
            {inPm ? '✓ in PM' : '+ Add PM'}
          </button>
        </div>

      </div>

    </div>
  );
}
