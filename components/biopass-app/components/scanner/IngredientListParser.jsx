import React, { useState } from 'react';
import { Sparkles, Clipboard, RefreshCw, Layers, ArrowRight, ShieldCheck } from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';
import { tokenizeINCIText } from '../../services/ingredientParser.js';

export default function IngredientListParser({ onAnalyzeCustom }) {
  const { showToast } = useBioPass();
  const [productName, setProductName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [rawInci, setRawInci] = useState('');

  const samplePresets = [
    {
      label: "Barrier Cream (Ceramides + Oat)",
      name: "Barrier Rescue Balm",
      brand: "Derm Lab",
      text: "Water, Glycerin, Caprylic/Capric Triglyceride, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Squalane, Panthenol, Colloidal Oatmeal, Allantoin, Phenoxyethanol"
    },
    {
      label: "Pore Clogging Night Oil",
      name: "Ultra Rich Glow Elixir",
      brand: "Luxe Flora",
      text: "Isopropyl Myristate, Cocos Nucifera (Coconut) Oil, Ethylhexyl Palmitate, Fragrance / Parfum, Limonene, Linalool, Tocopherol"
    },
    {
      label: "Resurfacing Exfoliating Tonic",
      name: "Triple Acid Resurface 10%",
      brand: "Glow Chemist",
      text: "Water, Glycolic Acid, Lactic Acid, Salicylic Acid, Gluconolactone, Niacinamide, Camellia Sinensis Leaf Extract, Sodium Hydroxide, Phenoxyethanol"
    },
    {
      label: "Brightening Antioxidant Drops",
      name: "15% Pure C & Ferulic",
      brand: "Clinical Glow",
      text: "Water, Ethoxydiglycol, Ascorbic Acid, Glycerin, Ferulic Acid, Panthenol, Sodium Hyaluronate, Phenoxyethanol"
    }
  ];

  const handleApplyPreset = (preset) => {
    setProductName(preset.name);
    setBrandName(preset.brand);
    setRawInci(preset.text);
    showToast(`Loaded preset: ${preset.label}`, "info");
  };

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!rawInci.trim()) {
      showToast("Please paste or type an ingredient list first", "warning");
      return;
    }

    const tokens = tokenizeINCIText(rawInci);
    if (tokens.length === 0) {
      showToast("Could not detect valid comma-separated ingredients", "warning");
      return;
    }

    const customProductObj = {
      id: `custom-p-${Date.now()}`,
      name: productName.trim() || "Custom Analyzed Product",
      brand: brandName.trim() || "Independent Brand",
      category: "treatment",
      step: "serum",
      price: "$--",
      size: "Custom INCI",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Custom user-pasted INCI formula evaluated by BioPass Intelligence.",
      ph: "Unknown",
      suitableTime: ["am", "pm"],
      targetSkinTypes: ["all_types"],
      tags: ["Custom INCI", `${tokens.length} Ingredients`],
      inciList: tokens
    };

    onAnalyzeCustom(customProductObj);
  };

  return (
    <div className="w-full rounded-3xl glass-card border border-white/10 p-6 sm:p-8 shadow-2xl text-left bg-[#0E161C]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#F94CAF]/20 text-[#FF85D0] border border-[#F94CAF]/30">
              Raw INCI Dissector
            </span>
            <span className="text-xs text-slate-400 font-semibold">Instant Molecular Toxicology</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            Paste Any Product Ingredient List
          </h3>
        </div>

        {/* Quick Sample Presets */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-bold text-slate-400 mr-1">Quick Presets:</span>
          {samplePresets.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleApplyPreset(preset)}
              className="px-3 py-1 rounded-xl text-[11px] font-bold bg-[#080D10] hover:bg-[#121B22] border border-white/10 hover:border-[#F94CAF]/40 text-slate-300 hover:text-[#F94CAF] transition-colors cursor-pointer"
            >
              {preset.label.split(" (")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleAnalyze} className="mt-5 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-bold text-white mb-1">
              Product Title (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Ceramide Barrier Recovery Cream"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl glass-input text-xs text-white placeholder-slate-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-white mb-1">
              Brand / Manufacturer (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. SkinCeuticals or Sephora"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl glass-input text-xs text-white placeholder-slate-500"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs font-bold text-white">
              Complete INCI Ingredient List (Comma-separated)
            </label>
            <span className="text-[11px] text-slate-400 font-semibold">
              {rawInci ? `${tokenizeINCIText(rawInci).length} ingredients detected` : "Paste from packaging or website"}
            </span>
          </div>
          <textarea
            rows={4}
            placeholder="Water/Aqua, Glycerin, Niacinamide, Salicylic Acid, Ceramide NP, Squalane, Fragrance, Phenoxyethanol..."
            value={rawInci}
            onChange={(e) => setRawInci(e.target.value)}
            className="w-full p-3.5 rounded-2xl glass-input text-xs text-white placeholder-slate-500 font-mono leading-relaxed resize-y min-h-[100px]"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#F94CAF] shrink-0" />
            <span>Cross-referenced against 150+ scientific cosmetic records</span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate BioPass Compatibility Report</span>
          </button>
        </div>
      </form>
    </div>
  );
}
