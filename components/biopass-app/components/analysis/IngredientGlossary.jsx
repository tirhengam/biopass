import React, { useState } from 'react';
import { BookOpen, Search, Filter, Sparkles, ShieldAlert, ShieldCheck } from 'lucide-react';
import { INGREDIENTS_DATABASE } from '../../data/ingredientsDatabase.js';
import { EwgBadge, ComedogenicBadge, FungalAcneBadge } from '../common/HazardBadge.jsx';
import IngredientDrawer from './IngredientDrawer.jsx';

export default function IngredientGlossary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const categories = [
    { id: 'all', label: 'All Molecules' },
    { id: 'humectant', label: 'Hydrators & Humectants' },
    { id: 'exfoliant', label: 'Direct Acids & Exfoliants' },
    { id: 'retinoid', label: 'Retinoids (Vitamin A)' },
    { id: 'antioxidant', label: 'Antioxidants & Brighteners' },
    { id: 'barrier', label: 'Ceramides & Barrier Lipids' },
    { id: 'peptide', label: 'Peptides & Growth Factors' },
    { id: 'sunscreen', label: 'UV Sunscreen Filters' },
    { id: 'fragrance', label: 'Sensitizers & Fragrances' },
  ];

  const filteredIngredients = INGREDIENTS_DATABASE.filter(ing => {
    const matchesSearch = 
      ing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ing.inciName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ing.functions && ing.functions.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesCategory = 
      selectedCategory === 'all' || 
      ing.category === selectedCategory ||
      (selectedCategory === 'barrier' && (ing.category === 'lipid' || ing.category === 'soothing'));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full space-y-6 text-left">
      
      {/* Header Banner */}
      <div className="relative rounded-3xl glass-card border border-white/10 p-6 sm:p-8 shadow-2xl bg-gradient-to-br from-[#111A20] via-[#0E161C] to-[#080D10] overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F94CAF]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-2xl bg-[#F94CAF]/20 text-[#F94CAF] border border-[#F94CAF]/30">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F94CAF]">
              Cosmetic Chemistry Library
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              INCI Molecular Encyclopedia
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-2 leading-relaxed font-medium">
          Explore evidence-based cosmetic pharmacology, EWG safety classifications, comedogenic pore ratings, and mechanisms of action for active skincare ingredients.
        </p>
      </div>

      {/* Search & Category Pills */}
      <div className="space-y-4">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search encyclopedia by molecule name (e.g. Hyaluronic Acid, Retinal, Salicylic Acid, Ceramide NP)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl glass-input text-xs text-white placeholder-slate-500"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#F94CAF]/20 text-[#F94CAF] border-[#F94CAF]/50 shadow-sm'
                  : 'bg-[#080D10] text-slate-400 border-white/10 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {/* Ingredients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredIngredients.map(ing => (
          <div
            key={ing.id}
            onClick={() => setSelectedIngredient(ing)}
            className="p-5 rounded-3xl glass-card glass-card-hover border border-white/10 bg-[#0E161C] transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/10 text-slate-300">
                  {ing.category}
                </span>
                <EwgBadge rating={ing.ewgRating || 1} />
              </div>

              <h4 className="text-base font-extrabold text-white group-hover:text-[#FF85D0] transition-colors">
                {ing.name}
              </h4>

              {ing.inciName && ing.inciName !== ing.name && (
                <span className="text-[11px] text-slate-400 font-mono block mb-2 italic">
                  INCI: {ing.inciName}
                </span>
              )}

              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                {ing.description}
              </p>
            </div>

            {/* Badges footer */}
            <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/10 text-[10px]">
              {ing.comedogenicRating !== undefined && (
                <ComedogenicBadge rating={ing.comedogenicRating} />
              )}
              {ing.fungalAcneSafe !== undefined && (
                <FungalAcneBadge isSafe={ing.fungalAcneSafe} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Detail Drawer */}
      <IngredientDrawer
        ingredient={selectedIngredient}
        onClose={() => setSelectedIngredient(null)}
      />

    </div>
  );
}
