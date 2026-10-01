import React, { useState } from 'react';
import { 
  FlaskConical, Sparkles, AlertTriangle, CheckCircle2, ArrowRight, 
  RotateCcw, Trophy, Flame, ShieldAlert, ShieldCheck, Zap, Heart 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function ChemistClashGame({ onBackToHub }) {
  const { addArcadeXp, showToast } = useBioPass();

  const missions = [
    {
      id: 1,
      customer: "Elena (Sensitive & Rosacea-Prone)",
      clientImage: "👩‍🦰",
      problem: "My skin is glowing red, stinging after a chemical peel, and feeling uncomfortably hot!",
      goal: "Formulate a soothing rescue serum to calm erythema and rebuild the stratum corneum barrier.",
      requiredTraits: ["soothing", "barrier"],
      availableMolecules: [
        { id: "centella", name: "Centella Asiatica (Cica)", role: "soothing", clash: false, desc: "Down-regulates inflammatory cytokines and speeds wound healing." },
        { id: "ceramides", name: "Ceramide NP & AP", role: "barrier", clash: false, desc: "Essential intercellular lipids to restore acid mantle integrity." },
        { id: "panthenol", name: "Panthenol (Pro-Vitamin B5)", role: "soothing", clash: false, desc: "Clinically reduces TEWL water loss and relieves stinging." },
        { id: "glycolic", name: "Glycolic Acid (7% AHA)", role: "exfoliant", clash: true, clashReason: "🔥 Chemical Disaster! Applying strong Glycolic Acid to a compromised, stinging rosacea barrier causes severe acid irritation!" },
        { id: "fragrance", name: "Lavender Essential Oil", role: "fragrance", clash: true, clashReason: "🚨 Contact Dermatitis Alert! Volatile fragrance terpenes burn already reactive, inflamed skin." }
      ],
      idealPairing: ["centella", "ceramides", "panthenol"],
      winSummary: "Elena's stinging vanished in 10 minutes! The Centella + Ceramide combo restored her acid mantle."
    },
    {
      id: 2,
      customer: "Marcus (Acne-Prone & Clogged Pores)",
      clientImage: "🧔",
      problem: "I have painful deep jawline breakouts and dark spots left behind from old blemishes.",
      goal: "Clear microcomedones and fade post-inflammatory marks without triggering active ingredient clashes.",
      requiredTraits: ["acne", "brightener"],
      availableMolecules: [
        { id: "salicylic", name: "Salicylic Acid (2% BHA)", role: "exfoliant", clash: false, desc: "Oil-soluble acid penetrates deep into sebum plugs to dissolve blackheads." },
        { id: "niacinamide", name: "Niacinamide (5% Vitamin B3)", role: "barrier", clash: false, desc: "Regulates sebum excretion and inhibits melanosome transfer for dark marks." },
        { id: "azelaic", name: "Azelaic Acid (10%)", role: "brightener", clash: false, desc: "Kills C. acnes bacteria and suppresses hyperactive melanocytes." },
        { id: "retinol", name: "Pure Retinol (1%)", role: "retinoid", clash: true, clashReason: "⚠️ Active Overload Clash! Mixing 2% BHA and 1% Pure Retinol together in one high-potency session strips the skin barrier. (They should be used on alternate nights!)." },
        { id: "isopropyl_myristate", name: "Isopropyl Myristate", role: "emollient", clash: true, clashReason: "🚫 Pore Clogger Trap! Isopropyl Myristate has a 5/5 Comedogenic rating and would instantly trigger fresh cystic bumps." }
      ],
      idealPairing: ["salicylic", "niacinamide", "azelaic"],
      winSummary: "Marcus's pores decongested cleanly without a single chemical clash or peeling flake!"
    },
    {
      id: 3,
      customer: "Sophia (Dullness & Premature Fine Lines)",
      clientImage: "👱‍♀️",
      problem: "My complexion looks tired and dull from sun exposure, and I want an intense morning antioxidant shield!",
      goal: "Formulate the ultimate photoprotective daytime serum.",
      requiredTraits: ["antioxidant", "hydrator"],
      availableMolecules: [
        { id: "vitc", name: "L-Ascorbic Acid (15% Pure Vitamin C)", role: "antioxidant", clash: false, desc: "Gold standard antioxidant that cross-links collagen and neutralizes UV radicals." },
        { id: "ferulic", name: "Ferulic Acid (0.5%)", role: "antioxidant", clash: false, desc: "Doubles the photoprotective stability of pure Vitamin C." },
        { id: "hyaluronic", name: "Hyaluronic Acid", role: "hydrator", clash: false, desc: "Holds 1,000x its weight in water to plump fine expression lines." },
        { id: "benzoyl_peroxide", name: "Benzoyl Peroxide (5%)", role: "oxidizer", clash: true, clashReason: "💥 Oxidation Inactivation! Benzoyl Peroxide is a potent oxidizer that immediately neutralizes Pure Vitamin C, deactivating both actives!" },
        { id: "copper_peptide", name: "Copper Tripeptide-1", role: "peptide", clash: true, clashReason: "⚡ Copper Chelation Clash! Copper ions react with ascorbic acid, breaking peptide bonds and oxidizing Vitamin C." }
      ],
      idealPairing: ["vitc", "ferulic", "hyaluronic"],
      winSummary: "Sophia's skin achieved a radiant glass-skin glow with maximum photoprotection!"
    }
  ];

  const [currentMissionIdx, setCurrentMissionIdx] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [resultState, setResultState] = useState(null); // null | 'success' | 'clash'
  const [clashMessage, setClashMessage] = useState("");

  const mission = missions[currentMissionIdx];

  const handleToggleIngredient = (ing) => {
    if (resultState) return;
    if (selectedIngredients.some(i => i.id === ing.id)) {
      setSelectedIngredients(selectedIngredients.filter(i => i.id !== ing.id));
    } else {
      if (selectedIngredients.length >= 3) {
        showToast("Maximum 3 active ingredients per custom formula!", "warning");
        return;
      }
      setSelectedIngredients([...selectedIngredients, ing]);
    }
  };

  const handleFormulate = () => {
    if (selectedIngredients.length < 2) {
      showToast("Select at least 2 synergistic active molecules to formulate!", "warning");
      return;
    }

    // Check for clashes
    const clashingIng = selectedIngredients.find(i => i.clash);
    if (clashingIng) {
      setResultState('clash');
      setClashMessage(clashingIng.clashReason);
      return;
    }

    // Success!
    setResultState('success');
    addArcadeXp(150, "Master Formulator Badge 🧪");
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F94CAF', '#FF65C5', '#10B981', '#F59E0B']
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleNextMission = () => {
    if (currentMissionIdx < missions.length - 1) {
      setCurrentMissionIdx(currentMissionIdx + 1);
      setSelectedIngredients([]);
      setResultState(null);
      setClashMessage("");
    } else {
      onBackToHub();
      showToast("🎉 All Cosmetic Chemist Missions Completed! +450 XP", "success");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 text-left animate-fade-in">
      
      {/* Header */}
      <div className="flex items-center justify-between p-6 rounded-3xl glass-card border border-white/10">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F94CAF] to-[#FF85D0] p-[2px] shadow-magenta flex items-center justify-center">
            <div className="w-full h-full bg-[#080D10] rounded-[14px] flex items-center justify-center">
              <FlaskConical className="w-6 h-6 text-[#F94CAF]" />
            </div>
          </div>
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#F94CAF]/20 text-[#F94CAF] border border-[#F94CAF]/40">
              Lab Mission {currentMissionIdx + 1} of {missions.length}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
              The Cosmetic Chemist: Active Mixology Lab
            </h2>
          </div>
        </div>

        <button
          onClick={onBackToHub}
          className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/15 text-xs font-bold text-slate-300 hover:text-white transition-colors"
        >
          Exit Lab
        </button>
      </div>

      {/* Customer Client Brief */}
      <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-3 bg-[#0E161C]/90">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{mission.clientImage}</span>
          <div>
            <h3 className="text-base font-extrabold text-white">{mission.customer}</h3>
            <span className="text-xs text-[#F94CAF] font-semibold">Skincare Client Case Study</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#080D10] border border-white/10 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
          <span className="text-[#FF85D0] font-bold block mb-1">“{mission.problem}”</span>
          <span className="text-slate-400 text-xs">🎯 Objective: {mission.goal}</span>
        </div>
      </div>

      {/* Lab Chemical Rack (Choose Molecules) */}
      <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
            Available Active Molecules Rack (Select 2 or 3)
          </span>
          <span className="text-xs font-bold text-[#F94CAF]">
            {selectedIngredients.length} / 3 Selected
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {mission.availableMolecules.map(ing => {
            const isSelected = selectedIngredients.some(i => i.id === ing.id);
            return (
              <div
                key={ing.id}
                onClick={() => handleToggleIngredient(ing)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F94CAF]/15 border-[#F94CAF] shadow-magenta-sm ring-1 ring-[#F94CAF]/40'
                    : 'bg-[#080D10] border-white/10 hover:border-[#F94CAF]/50 hover:bg-[#121B22]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-extrabold text-white">
                      {ing.name}
                    </span>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      isSelected ? 'bg-[#F94CAF] border-[#F94CAF] text-white' : 'border-slate-700'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {ing.desc}
                  </p>
                </div>

                <span className="text-[10px] font-bold text-[#F94CAF] mt-3 block">
                  {isSelected ? '✓ In Test Beaker' : '+ Add to Formula'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Reaction Output Area */}
        {resultState === 'clash' && (
          <div className="p-5 rounded-2xl bg-[#280C12] border border-rose-500/50 space-y-2 animate-bounce-short">
            <div className="flex items-center gap-2 text-rose-400 font-extrabold text-sm">
              <ShieldAlert className="w-5 h-5" />
              <span>Chemical Clash & Reaction Failure!</span>
            </div>
            <p className="text-xs text-rose-200 leading-relaxed">
              {clashMessage}
            </p>
            <button
              onClick={() => {
                setResultState(null);
                setSelectedIngredients([]);
              }}
              className="mt-2 flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-rose-500/20 text-rose-300 text-xs font-bold hover:bg-rose-500/30"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clean Beaker & Try Again</span>
            </button>
          </div>
        )}

        {resultState === 'success' && (
          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 space-y-2 animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Optimal Dermatological Synergy! (+150 XP)</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                ⭐ 100% Score
              </span>
            </div>
            <p className="text-xs text-emerald-200 leading-relaxed">
              {mission.winSummary}
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={() => {
              setSelectedIngredients([]);
              setResultState(null);
            }}
            className="text-xs font-bold text-slate-400 hover:text-white"
          >
            Reset Beaker
          </button>

          {!resultState ? (
            <button
              onClick={handleFormulate}
              disabled={selectedIngredients.length < 2}
              className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FlaskConical className="w-4 h-4" />
              <span>Synthesize & Test Formula</span>
            </button>
          ) : (
            <button
              onClick={handleNextMission}
              className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all"
            >
              <span>{currentMissionIdx < missions.length - 1 ? 'Next Client Case' : 'Complete Lab & Claim Badges'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
