import React, { useState } from 'react';
import { 
  Sparkles, ShieldCheck, ShieldAlert, ArrowRight, RotateCcw, 
  Trophy, CheckCircle2, FlaskConical, Search, BookOpen, ChevronRight, Eye 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBioPass } from '../../context/BioPassContext.jsx';
import { PRODUCTS_DATABASE } from '../../data/productsDatabase.js';

export default function IngredientDetectiveGame({ onBackToHub, onOpenDeepInci }) {
  const { addArcadeXp, showToast } = useBioPass();

  const caseStudies = [
    {
      id: "case-1",
      productName: "CeraVe Hydrating Facial Cleanser",
      brand: "CeraVe",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80",
      description: "A cult-favorite gentle daily cleanser formulated for normal to dry skin.",
      ingredients: [
        { name: "Ceramide NP, AP, EOP", correctCategory: "barrier", simpleDesc: "Skin-identical lipids that rebuild your moisture wall." },
        { name: "Hyaluronic Acid", correctCategory: "hydrating", simpleDesc: "A moisture sponge that holds 1,000x its weight in water." },
        { name: "Glycerin", correctCategory: "hydrating", simpleDesc: "A classic gentle humectant that pulls water into the top layer." },
        { name: "Phytosphingosine", correctCategory: "barrier", simpleDesc: "A natural lipid building block that supports ceramides." },
        { name: "Phenoxyethanol", correctCategory: "preservative", simpleDesc: "A safe cosmetic preservative preventing mold & bacteria growth." },
        { name: "Fragrance / Parfum", correctCategory: "none_present", simpleDesc: "Zero added fragrance! 100% fragrance-free." }
      ]
    },
    {
      id: "case-2",
      productName: "C E Ferulic 15% Antioxidant Treatment",
      brand: "SkinCeuticals",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80",
      description: "The gold-standard high potency morning photoprotection serum.",
      ingredients: [
        { name: "15% L-Ascorbic Acid", correctCategory: "active", simpleDesc: "Pure Vitamin C that stimulates collagen and neutralizes UV radicals." },
        { name: "Ferulic Acid (0.5%)", correctCategory: "brightening", simpleDesc: "Plant antioxidant that doubles Vitamin C photostability." },
        { name: "Alpha Tocopherol (1% Vit E)", correctCategory: "barrier", simpleDesc: "Lipophilic antioxidant that protects cellular membranes." },
        { name: "Panthenol (Vitamin B5)", correctCategory: "hydrating", simpleDesc: "Pro-vitamin that soothes and deeply hydrates tissue." },
        { name: "Synthetic Dyes", correctCategory: "none_present", simpleDesc: "Zero synthetic dyes! Clear clinical formula." }
      ]
    }
  ];

  const categoryOptions = [
    { id: "hydrating", label: "💧 Hydrating", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
    { id: "barrier", label: "🛡️ Barrier-Supporting", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
    { id: "brightening", label: "✨ Brightening", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
    { id: "active", label: "🧪 Active Treatment", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
    { id: "irritant", label: "⚠️ Potential Irritant", color: "bg-rose-500/20 text-rose-300 border-rose-500/30" },
  ];

  const [currentCaseIdx, setCurrentCaseIdx] = useState(0);
  const [activeIngIdx, setActiveIngIdx] = useState(0);
  const [userGuesses, setUserGuesses] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const currentCase = caseStudies[currentCaseIdx];
  const activeIng = currentCase.ingredients[activeIngIdx];

  const handleGuess = (catId) => {
    const updatedGuesses = {
      ...userGuesses,
      [activeIngIdx]: catId
    };
    setUserGuesses(updatedGuesses);

    if (activeIngIdx < currentCase.ingredients.length - 1) {
      setActiveIngIdx(activeIngIdx + 1);
    } else {
      setIsFinished(true);
      addArcadeXp(200, "Ingredient Detective 🕵️");
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const calculateScore = () => {
    let score = 0;
    currentCase.ingredients.forEach((ing, i) => {
      const userPick = userGuesses[i];
      if (
        userPick === ing.correctCategory ||
        (ing.correctCategory === 'barrier' && userPick === 'hydrating') ||
        (ing.correctCategory === 'brightening' && userPick === 'active')
      ) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 text-left animate-fade-in">
      
      {/* Header */}
      <div className="flex items-center justify-between p-6 rounded-3xl glass-card border border-white/10 bg-gradient-to-br from-[#111A20] via-[#0E161C] to-[#080D10]">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F94CAF] to-[#FF85D0] p-[2px] shadow-magenta flex items-center justify-center">
            <div className="w-full h-full bg-[#080D10] rounded-[14px] flex items-center justify-center text-[#F94CAF]">
              <Search className="w-6 h-6" />
            </div>
          </div>
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#F94CAF]/20 text-[#F94CAF] border border-[#F94CAF]/40">
              Beauty Arcade Game
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
              🕵️ Ingredient Detective
            </h2>
          </div>
        </div>

        <button
          onClick={onBackToHub}
          className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/15 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          Exit Game
        </button>
      </div>

      {!isFinished ? (
        /* Game Screen */
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6 bg-[#0E161C]">
          
          {/* Product Spotlight */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#080D10] border border-white/10">
            <img 
              src={currentCase.image} 
              alt={currentCase.productName} 
              className="w-16 h-16 rounded-xl object-cover border border-white/10 shrink-0" 
            />
            <div>
              <span className="text-[10px] font-bold text-slate-400 block">{currentCase.brand}</span>
              <h3 className="text-sm sm:text-base font-extrabold text-white">{currentCase.productName}</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">{currentCase.description}</p>
            </div>
          </div>

          {/* Question Prompt */}
          <div className="space-y-2 text-center py-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Ingredient {activeIngIdx + 1} of {currentCase.ingredients.length}
            </span>
            <h4 className="text-2xl font-extrabold text-white">
              “What is the main role of <span className="text-[#FF85D0]">{activeIng.name}</span>?”
            </h4>
            <p className="text-xs text-slate-400">
              Tap the category that best describes this molecule's job on your skin.
            </p>
          </div>

          {/* Category Tap Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {categoryOptions.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleGuess(cat.id)}
                className="p-4 rounded-2xl bg-[#080D10] hover:bg-[#121B22] border border-white/10 hover:border-[#F94CAF]/50 text-left transition-all flex items-center justify-between group cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-extrabold text-white group-hover:text-[#FF85D0] transition-colors">
                  {cat.label}
                </span>
                <span className="text-xs text-slate-500 group-hover:text-white">Tap to Choose →</span>
              </button>
            ))}
          </div>

        </div>
      ) : (
        /* Results & Progressive Disclosure Screen */
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6 bg-[#0E161C] animate-fade-in text-center">
          
          <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-[#F94CAF] to-[#FF85D0] p-[2px] shadow-magenta flex items-center justify-center">
            <div className="w-full h-full bg-[#080D10] rounded-[22px] flex items-center justify-center text-[#F94CAF]">
              <Trophy className="w-8 h-8 animate-bounce" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#F94CAF]/20 text-[#FF85D0] border border-[#F94CAF]/40">
              Nice! You categorized {calculateScore()} of {currentCase.ingredients.length} molecules (+200 XP)
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Here is what's really inside {currentCase.productName}:
            </h3>
          </div>

          {/* Friendly Simple Explanations */}
          <div className="space-y-2.5 text-left pt-2">
            {currentCase.ingredients.map((ing, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-[#080D10] border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#F94CAF] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-extrabold text-white block">{ing.name}</span>
                  <span className="text-slate-300 leading-relaxed font-medium">{ing.simpleDesc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Progressive Disclosure CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                const matched = PRODUCTS_DATABASE.find(p => p.name.includes("CeraVe") || p.name.includes("SkinCeuticals"));
                if (matched && onOpenDeepInci) {
                  onOpenDeepInci(matched);
                }
              }}
              className="flex items-center gap-2 text-xs font-extrabold text-[#F94CAF] hover:text-[#FF85D0] cursor-pointer"
            >
              <span>Go deeper → View full chemical INCI analysis & EWG scores</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  setCurrentCaseIdx((currentCaseIdx + 1) % caseStudies.length);
                  setActiveIngIdx(0);
                  setUserGuesses({});
                  setIsFinished(false);
                }}
                className="px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Next Product Case
              </button>

              <button
                onClick={onBackToHub}
                className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs shadow-magenta cursor-pointer"
              >
                Back to Arcade
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
