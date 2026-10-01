import React, { useState } from 'react';
import { Sparkles, Layers, Info, Filter, ShieldAlert, ShieldCheck } from 'lucide-react';
import { parseIngredients } from '../../services/ingredientParser.js';
import { useBioPass } from '../../context/BioPassContext.jsx';
import { EwgBadge, ComedogenicBadge, FungalAcneBadge } from '../common/HazardBadge.jsx';
import IngredientDrawer from './IngredientDrawer.jsx';

export default function IngredientDeepDive({ product }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeIngredientDetail, setActiveIngredientDetail] = useState(null);

  if (!product) return null;

  const parsedData = Array.isArray(product.inciList)
    ? parseIngredients(product.inciList)
    : parseIngredients(product.ingredients || []);

  const { ingredients, avgEwg, highestComedogenic, flaggedAllergens, activeIngredients } = parsedData;

  const categoryFilters = [
    { id: 'all', label: `All (${ingredients.length})` },
    { id: 'actives', label: `Actives (${activeIngredients.length})` },
    { id: 'allergens', label: `Flags (${flaggedAllergens.length})` },
  ];

  const filteredIngredients = ingredients.filter(ing => {
    if (selectedCategory === 'actives') {
      return ['exfoliant', 'retinoid', 'antioxidant', 'peptide', 'barrier', 'soothing'].includes(ing.category);
    }
    if (selectedCategory === 'allergens') {
      return ing.category === 'fragrance' || (ing.irritancyRating || 0) >= 3 || (ing.comedogenicRating || 0) >= 3;
    }
    return true;
  });

  return (
    <div className="w-full rounded-3xl glass-card border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6 text-left">
      
      {/* Header & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#F94CAF]/20 text-[#F94CAF] border border-[#F94CAF]/30">
              INCI Molecular Breakdown
            </span>
            <span className="text-xs text-slate-400 font-semibold">Click any molecule for clinical pharmacology</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            Complete Ingredient Toxicology & Functions ({ingredients.length})
          </h3>
        </div>

        {/* Quick Filter Pills */}
        <div className="flex items-center gap-1.5">
          {categoryFilters.map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedCategory(f.id)}
              className={`px-3.5 py-1.5 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
                selectedCategory === f.id
                  ? 'bg-[#F94CAF]/20 text-[#F94CAF] border-[#F94CAF]/50 shadow-sm'
                  : 'bg-[#080D10] text-slate-400 border-white/10 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Ingredient Items List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredIngredients.map((ing, idx) => (
          <div
            key={idx}
            onClick={() => setActiveIngredientDetail(ing)}
            className="group p-4 rounded-2xl bg-[#080D10] hover:bg-[#121B22] border border-white/10 hover:border-[#F94CAF]/50 transition-all cursor-pointer flex flex-col justify-between hover:shadow-lg"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500">
                    #{ing.order || idx + 1}
                  </span>
                  <h5 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-[#FF85D0] transition-colors">
                    {ing.name}
                  </h5>
                </div>

                <div className="flex items-center gap-1">
                  <EwgBadge rating={ing.ewgRating || 1} />
                </div>
              </div>

              {ing.inciName && ing.inciName !== ing.name && (
                <span className="text-[10px] text-slate-400 font-mono block mb-2 italic">
                  INCI: {ing.inciName}
                </span>
              )}

              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mb-3">
                {ing.description}
              </p>
            </div>

            {/* Badges footer */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/10 text-[10px]">
              {ing.comedogenicRating !== undefined && (
                <ComedogenicBadge rating={ing.comedogenicRating} />
              )}
              {ing.fungalAcneSafe !== undefined && (
                <FungalAcneBadge isSafe={ing.fungalAcneSafe} />
              )}
              {ing.functions && ing.functions.slice(0, 2).map((func, fIdx) => (
                <span key={fIdx} className="bg-white/5 text-slate-300 font-semibold px-2 py-0.5 rounded-lg border border-white/10">
                  {func}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Ingredient Detail Modal Drawer */}
      <IngredientDrawer
        ingredient={activeIngredientDetail}
        onClose={() => setActiveIngredientDetail(null)}
      />

    </div>
  );
}
