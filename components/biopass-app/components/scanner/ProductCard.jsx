import React, { useState } from 'react';
import { Bookmark, Sparkles, Plus, Check, ShieldCheck, AlertTriangle, Droplets, Package } from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';
import { calculateCompatibility } from '../../services/compatibilityEngine.js';

export default function ProductCard({ product, onSelect, isSelected }) {
  const { profile, bookmarks, toggleBookmark, addToRoutine, amRoutine, pmRoutine } = useBioPass();
  const [imgError, setImgError] = useState(false);

  const compatibility = calculateCompatibility(product, profile);
  const isBookmarked = bookmarks.includes(product.id);
  const inAm = amRoutine.some(p => p.id === product.id);
  const inPm = pmRoutine.some(p => p.id === product.id);

  const getScoreBadgeColor = (score) => {
    if (score >= 90) return "bg-[#F94CAF]/20 text-[#F94CAF] border-[#F94CAF]/50 shadow-sm";
    if (score >= 75) return "bg-[#FF65C5]/20 text-[#FF85D0] border-[#FF65C5]/40";
    if (score >= 55) return "bg-amber-500/20 text-amber-300 border-amber-500/40";
    return "bg-rose-500/20 text-rose-300 border-rose-500/40";
  };

  return (
    <div 
      className={`group relative rounded-3xl glass-card glass-card-hover p-4 sm:p-5 flex flex-col justify-between transition-all cursor-pointer border ${
        isSelected 
          ? 'border-[#F94CAF] ring-2 ring-[#F94CAF]/40 shadow-magenta-sm bg-[#121E26]' 
          : 'border-white/10 hover:border-[#F94CAF]/50'
      }`}
      onClick={() => onSelect(product)}
    >
      <div>
        {/* Top Badges & Actions */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/10 text-slate-300 border border-white/10">
            {product.category}
          </span>

          <div className="flex items-center gap-1.5">
            {/* Compatibility Badge */}
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${getScoreBadgeColor(compatibility.score)}`}>
              {compatibility.score}% Match
            </span>

            {/* Bookmark button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(product.id);
              }}
              className={`p-1.5 rounded-xl border transition-colors ${
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
        <div className="flex items-center gap-3 mb-3">
          <div className="w-14 h-14 rounded-2xl bg-[#080D10] border border-white/10 overflow-hidden shrink-0 flex items-center justify-center text-[#F94CAF]">
            {!imgError && product.image ? (
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <Package className="w-7 h-7 opacity-70" />
            )}
          </div>
          <div className="overflow-hidden">
            <span className="text-[11px] font-bold text-slate-400 block truncate">
              {product.brand}
            </span>
            <h4 className="text-sm font-extrabold text-white line-clamp-2 leading-tight group-hover:text-[#FF85D0] transition-colors">
              {product.name}
            </h4>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.tags && product.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="text-[10px] font-semibold bg-[#080D10] text-slate-300 px-2 py-0.5 rounded-lg border border-white/10">
              {tag}
            </span>
          ))}
        </div>

        {/* Description preview */}
        <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Footer Controls & Routine quick add */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
        <span className="text-xs font-extrabold text-[#F94CAF]">
          {product.price || "$--"}
        </span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToRoutine(product, 'am');
            }}
            className={`px-2.5 py-1 rounded-xl text-[10px] font-extrabold border transition-colors ${
              inAm
                ? 'bg-amber-500/25 text-amber-300 border-amber-500/50'
                : 'bg-[#080D10] text-slate-400 border-white/10 hover:bg-amber-500/15 hover:text-amber-300'
            }`}
            title="Add to morning routine"
          >
            {inAm ? '✓ AM' : '+ AM'}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToRoutine(product, 'pm');
            }}
            className={`px-2.5 py-1 rounded-xl text-[10px] font-extrabold border transition-colors ${
              inPm
                ? 'bg-[#F94CAF]/25 text-[#FF85D0] border-[#F94CAF]/50'
                : 'bg-[#080D10] text-slate-400 border-white/10 hover:bg-[#F94CAF]/15 hover:text-[#F94CAF]'
            }`}
            title="Add to evening routine"
          >
            {inPm ? '✓ PM' : '+ PM'}
          </button>
        </div>
      </div>
    </div>
  );
}
