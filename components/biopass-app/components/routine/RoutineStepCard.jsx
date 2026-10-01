import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Trash2, Clock, Sparkles, Droplets, Package } from 'lucide-react';

export default function RoutineStepCard({ 
  product, 
  stepIndex, 
  totalSteps, 
  onMoveUp, 
  onMoveDown, 
  onRemove,
  onSelect 
}) {
  const [imgError, setImgError] = useState(false);
  const stepTitles = ["Cleanser", "Toner / Essence", "Active Treatment / Serum", "Moisturizer / Barrier", "Sunscreen (SPF)"];
  const stepTitle = stepTitles[stepIndex] || `Step ${stepIndex + 1}`;

  const getApplicationTip = (category, index) => {
    if (category === 'cleanser') return "Massage gently with lukewarm water for 60 seconds; pat dry.";
    if (category === 'toner' || category === 'essence') return "Pat directly onto damp skin to maximize humectant absorption.";
    if (category === 'serum' || category === 'treatment' || category === 'exfoliant') return "Apply 3-4 drops; allow 1-2 minutes to absorb before sealing.";
    if (category === 'moisturizer') return "Smooth evenly over face and neck to lock in active hydration.";
    if (category === 'sunscreen') return "Apply 2 finger-lengths generously as the final step 15 min before UV exposure.";
    return "Apply evenly following standard skincare layering order.";
  };

  return (
    <div className="group relative rounded-3xl glass-card border border-white/10 hover:border-[#F94CAF]/40 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all bg-[#0E161C] hover:shadow-lg text-left">
      
      {/* Left: Step Number & Info */}
      <div className="flex items-center gap-4 flex-1">
        
        {/* Step Badge */}
        <div className="w-10 h-10 rounded-2xl bg-[#F94CAF]/20 border border-[#F94CAF]/30 flex items-center justify-center text-[#FF85D0] font-extrabold text-sm shrink-0">
          0{stepIndex + 1}
        </div>

        {/* Thumbnail */}
        <div 
          onClick={() => onSelect(product)} 
          className="w-14 h-14 rounded-2xl bg-[#080D10] border border-white/10 overflow-hidden shrink-0 cursor-pointer flex items-center justify-center text-[#F94CAF]"
        >
          {!imgError && product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
              onError={() => setImgError(true)}
            />
          ) : (
            <Package className="w-7 h-7 opacity-70" />
          )}
        </div>

        {/* Details */}
        <div className="overflow-hidden cursor-pointer flex-1" onClick={() => onSelect(product)}>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F94CAF]">
              {stepTitle}
            </span>
            <span className="text-[10px] text-slate-400 font-semibold">• {product.brand}</span>
          </div>

          <h4 className="text-sm font-extrabold text-white group-hover:text-[#FF85D0] transition-colors truncate">
            {product.name}
          </h4>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium mt-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span className="truncate">{getApplicationTip(product.category, stepIndex)}</span>
          </div>
        </div>

      </div>

      {/* Right: Step Reorder & Delete actions */}
      <div className="flex items-center gap-1.5 self-end sm:self-center">
        <button
          onClick={onMoveUp}
          disabled={stepIndex === 0}
          className="p-2 rounded-xl bg-[#080D10] hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-slate-400 hover:text-white transition-colors border border-white/10 cursor-pointer"
          title="Move step up"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        <button
          onClick={onMoveDown}
          disabled={stepIndex === totalSteps - 1}
          className="p-2 rounded-xl bg-[#080D10] hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-slate-400 hover:text-white transition-colors border border-white/10 cursor-pointer"
          title="Move step down"
        >
          <ChevronDown className="w-4 h-4" />
        </button>

        <button
          onClick={onRemove}
          className="p-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 transition-colors ml-1 cursor-pointer"
          title="Remove from routine"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
