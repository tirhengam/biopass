import React, { useState } from 'react';
import { 
  FlaskConical, Sparkles, ShieldCheck, ShieldAlert, 
  AlertTriangle, ArrowRight, RotateCcw, Trophy, CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function MixItOrDontGame({ onBackToHub }) {
  const { addArcadeXp, showToast } = useBioPass();

  const pairings = [
    {
      id: "pair-1",
      left: "Retinol (Vitamin A)",
      right: "AHA (Glycolic / Lactic Acid)",
      leftIcon: "💊",
      rightIcon: "🧪",
      correctOption: "careful",
      nuancedExplanation: "Better to be careful! Layering high-strength Retinol and AHA in the exact same PM routine frequently leads to barrier disruption and stinging peeling. Instead, use them on alternate nights (or use a low-concentration blended formula tested at stable pH)."
    },
    {
      id: "pair-2",
      left: "Pure Vitamin C (L-Ascorbic)",
      right: "Niacinamide (Vitamin B3)",
      leftIcon: "🍊",
      rightIcon: "✨",
      correctOption: "great",
      nuancedExplanation: "Great together in modern skincare! The old 1960s myth that they neutralize each other was disproven. Together, Vitamin C and Niacinamide provide superior antioxidant protection and multi-pathway dark spot brightening."
    },
    {
      id: "pair-3",
      left: "Salicylic Acid (BHA)",
      right: "Clay / Charcoal Mask",
      leftIcon: "💧",
      rightIcon: "🏺",
      correctOption: "depends",
      nuancedExplanation: "It depends! For very oily T-zones, using BHA with clay absorbs stubborn sebum plugs. But on sensitive or dry cheeks, combining both can completely strip natural barrier lipids. Focus on your T-zone only!"
    },
    {
      id: "pair-4",
      left: "Pure Vitamin C",
      right: "Benzoyl Peroxide",
      leftIcon: "🍊",
      rightIcon: "⚡",
      correctOption: "careful",
      nuancedExplanation: "Better to be careful! Benzoyl Peroxide is a potent oxidizer that quickly oxidizes and deactivates pure L-Ascorbic Acid. Use Vitamin C in the morning and Benzoyl Peroxide at night."
    },
    {
      id: "pair-5",
      left: "Ceramides & Lipids",
      right: "Hyaluronic Acid",
      leftIcon: "🛡️",
      rightIcon: "💧",
      correctOption: "great",
      nuancedExplanation: "The ultimate dream team! Hyaluronic Acid pulls water into the epidermis, and Ceramides form the lipid seal on top to lock the moisture inside all day."
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const pair = pairings[currentIdx];

  const handleSelect = (optionKey) => {
    setSelectedAnswer(optionKey);
    setShowFeedback(true);
    if (optionKey === pair.correctOption) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < pairings.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
      addArcadeXp(250, "Mixologist Master 🧪");
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

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 text-left animate-fade-in">
      
      {/* Header */}
      <div className="flex items-center justify-between p-6 rounded-3xl glass-card border border-white/10 bg-gradient-to-br from-[#111A20] via-[#0E161C] to-[#080D10]">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F94CAF] to-[#FF85D0] p-[2px] shadow-magenta flex items-center justify-center">
            <div className="w-full h-full bg-[#080D10] rounded-[14px] flex items-center justify-center text-[#F94CAF]">
              <FlaskConical className="w-6 h-6" />
            </div>
          </div>
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#F94CAF]/20 text-[#F94CAF] border border-[#F94CAF]/40">
              Formulation Nuance Game
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
              🧪 Mix It or Don't
            </h2>
          </div>
        </div>

        <button
          onClick={onBackToHub}
          className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/15 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          Exit
        </button>
      </div>

      {!isFinished ? (
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6 bg-[#0E161C]">
          
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>Pairing {currentIdx + 1} of {pairings.length}</span>
            <span className="text-[#F94CAF]">Score: {score}</span>
          </div>

          {/* The Two Actives Presentation */}
          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="p-5 rounded-3xl bg-[#080D10] border border-white/10 text-center space-y-2">
              <span className="text-3xl block">{pair.leftIcon}</span>
              <span className="text-sm sm:text-base font-extrabold text-white block">{pair.left}</span>
            </div>

            <div className="p-5 rounded-3xl bg-[#080D10] border border-white/10 text-center space-y-2">
              <span className="text-3xl block">{pair.rightIcon}</span>
              <span className="text-sm sm:text-base font-extrabold text-white block">{pair.right}</span>
            </div>
          </div>

          <h3 className="text-center text-lg sm:text-xl font-extrabold text-white">
            “What do you think of layering these two?”
          </h3>

          {/* 3 Nuanced Options */}
          {!showFeedback ? (
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleSelect('great')}
                className="p-4 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-extrabold text-xs sm:text-sm transition-all flex flex-col items-center justify-center gap-1 cursor-pointer"
              >
                <span>🟢</span>
                <span>Great Together</span>
              </button>

              <button
                onClick={() => handleSelect('depends')}
                className="p-4 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-extrabold text-xs sm:text-sm transition-all flex flex-col items-center justify-center gap-1 cursor-pointer"
              >
                <span>🟡</span>
                <span>It Depends</span>
              </button>

              <button
                onClick={() => handleSelect('careful')}
                className="p-4 rounded-2xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 font-extrabold text-xs sm:text-sm transition-all flex flex-col items-center justify-center gap-1 cursor-pointer"
              >
                <span>🔴</span>
                <span>Be Careful</span>
              </button>
            </div>
          ) : (
            <div className="p-5 rounded-2xl bg-[#080D10] border border-white/15 space-y-3 animate-fade-in">
              <div className="flex items-center gap-2 text-sm font-extrabold text-[#FF85D0]">
                <CheckCircle2 className="w-5 h-5 text-[#F94CAF]" />
                <span>Cosmetic Chemist Explanation:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {pair.nuancedExplanation}
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs shadow-magenta cursor-pointer"
                >
                  <span>{currentIdx < pairings.length - 1 ? 'Next Mixology Case' : 'See Final Score'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      ) : (
        <div className="p-8 rounded-3xl glass-card border border-white/10 text-center space-y-6 bg-[#0E161C] animate-fade-in">
          <Trophy className="w-14 h-14 text-[#F94CAF] mx-auto animate-bounce" />
          <h3 className="text-2xl font-extrabold text-white">
            Mixology Challenge Complete! (+250 XP)
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            You scored {score} of {pairings.length}. You now understand that cosmetic compatibility depends on concentration, pH, and skin context rather than rigid rules.
          </p>

          <button
            onClick={onBackToHub}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs shadow-magenta cursor-pointer"
          >
            Return to Beauty Arcade
          </button>
        </div>
      )}

    </div>
  );
}
