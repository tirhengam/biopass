import React, { useState } from 'react';
import { 
  Sparkles, ShieldCheck, ShieldAlert, AlertTriangle, ArrowRight, 
  RotateCcw, Trophy, ThumbsUp, ThumbsDown, Zap, HeartHandshake 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function PoreCloggerGame({ onBackToHub }) {
  const { addArcadeXp, showToast } = useBioPass();

  const cards = [
    {
      name: "Isopropyl Myristate",
      inci: "Synthetic Ester",
      correctType: "clogger",
      tag: "Comedogenic Rating: 5/5",
      roast: "🚫 Pore Clogging Monster! Gives a silky slip in lotions but clogs pores like cement on acne-prone skin.",
      praise: "Spot on! You saved someone from a breakout of closed comedones."
    },
    {
      name: "Ceramide NP (Phytosphingosine)",
      inci: "Skin-Identical Lipid",
      correctType: "savior",
      tag: "Comedogenic: 0/5 • Barrier Hero",
      roast: "Oops! Ceramides make up 50% of your natural skin barrier — they heal, never clog!",
      praise: "✨ True Barrier Hero! Rebuilds acid mantle bilayers without clogging pores."
    },
    {
      name: "Cocos Nucifera (Coconut) Oil on Face",
      inci: "High Lauric Acid Triglyceride",
      correctType: "clogger",
      tag: "Comedogenic Rating: 4/5",
      roast: "🚨 Big Pore Clogger! Great for shiny hair or body elbows, but notorious for facial acne cysts.",
      praise: "🎯 Nailed it! Keep coconut oil strictly on hair and body, far from acne-prone face follicles!"
    },
    {
      name: "Centella Asiatica (Madecassoside)",
      inci: "Medicinal Botanical Cica",
      correctType: "savior",
      tag: "Soothing • Wound Healing",
      roast: "No way! Cica is the legendary tiger grass that calms redness and rescues irritated skin.",
      praise: "🌿 Pure Skin Savior! Calms inflammation and speeds skin repair."
    },
    {
      name: "Synthetic Fragrance / Parfum",
      inci: "Proprietary Olfactory Mixture",
      correctType: "allergen",
      tag: "Allergen Hazard: 8/10",
      roast: "Fragrance makes things smell like roses, but it is the #1 cosmetic contact allergen!",
      praise: "🕵️ Master Detective! Flagged the sneaky fragrance allergen causing mystery redness!"
    },
    {
      name: "100% Plant-Derived Squalane",
      inci: "Hydrogenated Hydrocarbon",
      correctType: "savior",
      tag: "Comedogenic: 0/5 • Malassezia Safe",
      roast: "Squalane mimics natural human sebum without oxidizing in pores or feeding fungal acne.",
      praise: "💎 Flawless Knowledge! Squalane is lightweight, non-comedogenic, and 100% fungal-acne safe!"
    }
  ];

  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [isDone, setIsDone] = useState(false);

  const card = cards[currentCardIdx];

  const handleGuess = (guessedType) => {
    if (feedback) return;

    const isCorrect = guessedType === card.correctType;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback({
        status: "correct",
        text: card.praise
      });
    } else {
      setFeedback({
        status: "incorrect",
        text: card.roast
      });
    }
  };

  const handleNext = () => {
    if (currentCardIdx < cards.length - 1) {
      setCurrentCardIdx(currentCardIdx + 1);
      setFeedback(null);
    } else {
      setIsDone(true);
      addArcadeXp(200, "Ingredient Sleuth Badge 🔍");
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
      <div className="flex items-center justify-between p-6 rounded-3xl glass-card border border-white/10">
        <div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#F94CAF]/20 text-[#F94CAF] border border-[#F94CAF]/40">
            Card {currentCardIdx + 1} of {cards.length}
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Pore Clogger or Skin Savior?
          </h2>
        </div>

        <button
          onClick={onBackToHub}
          className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/15 text-xs font-bold text-slate-300 hover:text-white"
        >
          Exit
        </button>
      </div>

      {!isDone ? (
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6 text-center bg-[#0E161C]">
          
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Inspect the Cosmetic Molecule:
          </span>

          {/* Molecule Card Display */}
          <div className="p-6 rounded-3xl bg-[#080D10] border border-white/10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {card.name}
            </h3>
            <span className="text-xs text-[#F94CAF] font-mono block">
              {card.inci}
            </span>
            <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-slate-300 mt-2">
              {card.tag}
            </span>
          </div>

          {/* 3 Option Buttons */}
          {!feedback ? (
            <div className="grid grid-cols-3 gap-3 pt-2">
              <button
                onClick={() => handleGuess('clogger')}
                className="p-4 rounded-2xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 font-extrabold text-xs transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShieldAlert className="w-5 h-5 text-rose-400" />
                <span>Pore Clogger (4-5)</span>
              </button>

              <button
                onClick={() => handleGuess('savior')}
                className="p-4 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-extrabold text-xs transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Barrier Savior</span>
              </button>

              <button
                onClick={() => handleGuess('allergen')}
                className="p-4 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-extrabold text-xs transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer"
              >
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>Sneaky Allergen</span>
              </button>
            </div>
          ) : (
            <div className={`p-5 rounded-2xl border text-left space-y-3 animate-fade-in ${
              feedback.status === 'correct'
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200'
                : 'bg-rose-500/10 border-rose-500/40 text-rose-200'
            }`}>
              <div className="flex items-center gap-2 font-extrabold text-sm">
                {feedback.status === 'correct' ? (
                  <span className="text-emerald-400">✓ Correct Judgment! (+35 XP)</span>
                ) : (
                  <span className="text-rose-400">✗ Chemical Misidentification!</span>
                )}
              </div>
              <p className="text-xs leading-relaxed font-medium">
                {feedback.text}
              </p>

              <button
                onClick={handleNext}
                className="mt-2 flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs shadow-magenta"
              >
                <span>{currentCardIdx < cards.length - 1 ? 'Next Molecule' : 'View Final Score'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Done Screen */
        <div className="p-8 rounded-3xl glass-card border border-white/10 text-center space-y-6 bg-[#0E161C]">
          <Trophy className="w-14 h-14 text-[#F94CAF] mx-auto animate-bounce" />
          <h3 className="text-2xl font-extrabold text-white">
            Game Complete! Score: {score} / {cards.length}
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            You've unlocked the <strong>Ingredient Sleuth Badge</strong> and trained your eyes to spot pore cloggers on cosmetic bottle labels.
          </p>

          <button
            onClick={onBackToHub}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs shadow-magenta"
          >
            Return to Arcade Hub
          </button>
        </div>
      )}

    </div>
  );
}
