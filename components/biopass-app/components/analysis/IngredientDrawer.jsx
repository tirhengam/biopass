import React from 'react';
import { X, ShieldCheck, ShieldAlert, Sparkles, BookOpen, AlertTriangle, CheckCircle2, Zap } from 'lucide-react';
import { EwgBadge, ComedogenicBadge, FungalAcneBadge } from '../common/HazardBadge.jsx';

export default function IngredientDrawer({ ingredient, onClose }) {
  if (!ingredient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in text-left">
      <div className="relative w-full max-w-xl bg-[#0E161C] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#F94CAF]/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#F94CAF]/20 text-[#FF85D0] border border-[#F94CAF]/30">
                {ingredient.category || 'Cosmetic Agent'}
              </span>
              {ingredient.clashGroup && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Clash Group: {ingredient.clashGroup}
                </span>
              )}
            </div>
            <h3 className="text-xl font-extrabold text-white">
              {ingredient.name}
            </h3>
            {ingredient.inciName && (
              <span className="text-xs text-slate-400 font-mono italic">
                INCI: {ingredient.inciName}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="my-5 overflow-y-auto space-y-5 pr-1 flex-1">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-3 rounded-2xl bg-[#080D10] border border-white/10 text-center">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase block">EWG Hazard</span>
              <div className="mt-1 flex justify-center">
                <EwgBadge rating={ingredient.ewgRating || 1} />
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-[#080D10] border border-white/10 text-center">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase block">Comedogenicity</span>
              <span className="text-xs font-extrabold text-white mt-1 block">
                {ingredient.comedogenicRating !== undefined ? `${ingredient.comedogenicRating}/5` : '0/5'}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#080D10] border border-white/10 text-center">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase block">Fungal Acne</span>
              <div className="mt-1 flex justify-center">
                <FungalAcneBadge isSafe={ingredient.fungalAcneSafe !== false} />
              </div>
            </div>
          </div>

          {/* Scientific Mechanism / Dermatology Description */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
              Dermatological Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#080D10] p-4 rounded-2xl border border-white/10 font-medium">
              {ingredient.description}
            </p>
          </div>

          {/* Clinical Notes & Usage Advice */}
          {ingredient.clinicalNotes && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                Clinical Pharmacokinetics & Tips
              </h4>
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#F94CAF]/10 border border-[#F94CAF]/30 text-xs text-[#FF85D0] font-medium">
                <Zap className="w-4 h-4 text-[#F94CAF] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-200">{ingredient.clinicalNotes}</span>
              </div>
            </div>
          )}

          {/* Functional Roles */}
          {ingredient.functions && ingredient.functions.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                Formulation Roles
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {ingredient.functions.map((func, i) => (
                  <span key={i} className="px-3 py-1 rounded-xl text-xs font-bold bg-[#080D10] text-slate-200 border border-white/10">
                    {func}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-2xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition-colors"
          >
            Close Dissection
          </button>
        </div>

      </div>
    </div>
  );
}
