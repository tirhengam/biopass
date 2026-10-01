import React, { useState } from 'react';
import { 
  Sparkles, ArrowRight, RotateCcw, Trophy, CheckCircle2, 
  HelpCircle, ShieldAlert, ShieldCheck, Droplets 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function PhMantleGame({ onBackToHub }) {
  const { addArcadeXp, showToast } = useBioPass();

  const questions = [
    {
      title: "Healthy Skin Acid Mantle",
      desc: "What is the optimal natural acidic pH of healthy human facial skin to prevent bacterial growth and maintain enzyme activity?",
      targetPh: 5.5,
      acceptableRange: [4.5, 5.7],
      fact: "✨ Perfect! Skin's natural acid mantle sits between pH 4.5 and 5.5. This natural acidity kills pathogenic bacteria and maintains lipid bilayer integrity."
    },
    {
      title: "Traditional Harsh Alkaline Bar Soap",
      desc: "Where does traditional lye bar soap sit on the pH scale that makes it so stripping to facial skin?",
      targetPh: 9.5,
      acceptableRange: [8.5, 10.5],
      fact: "🚨 Exactly! High pH soaps (pH 9-10) solubilize intercellular skin ceramides, taking up to 6 hours for skin to restore its protective acid mantle!"
    },
    {
      title: "Pure Vitamin C (L-Ascorbic Acid Serum)",
      desc: "Pure Vitamin C requires a specific low acidic pH to remain un-ionized and penetrate into the dermis. What pH does it require?",
      targetPh: 3.0,
      acceptableRange: [2.5, 3.5],
      fact: "💎 True Cosmetic Chemistry! Pure L-Ascorbic Acid requires pH < 3.5 to penetrate the lipid barrier and synthesize fresh collagen."
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [sliderVal, setSliderVal] = useState(7.0);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const q = questions[currentIdx];

  const handleTestPh = () => {
    const isCorrect = sliderVal >= q.acceptableRange[0] && sliderVal <= q.acceptableRange[1];
    if (isCorrect) setScore(score + 1);
    setRevealed(true);
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSliderVal(7.0);
      setRevealed(false);
    } else {
      setIsDone(true);
      addArcadeXp(150, "Acid Mantle Protector 🛡️");
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getPhColor = (val) => {
    if (val < 4) return "text-rose-400";
    if (val <= 6) return "text-[#F94CAF]";
    if (val <= 8) return "text-cyan-400";
    return "text-indigo-400";
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 text-left animate-fade-in">
      
      {/* Header */}
      <div className="flex items-center justify-between p-6 rounded-3xl glass-card border border-white/10">
        <div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#F94CAF]/20 text-[#F94CAF] border border-[#F94CAF]/40">
            pH Challenge {currentIdx + 1} of {questions.length}
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            The Acid Mantle Master (pH Lab)
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
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6 bg-[#0E161C]">
          
          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-white">{q.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{q.desc}</p>
          </div>

          {/* Interactive pH Slider */}
          <div className="p-6 rounded-3xl bg-[#080D10] border border-white/10 space-y-4 text-center">
            <div className="flex items-baseline justify-center gap-2">
              <span className={`text-4xl sm:text-5xl font-extrabold font-mono ${getPhColor(sliderVal)}`}>
                pH {Number(sliderVal).toFixed(1)}
              </span>
              <span className="text-xs text-slate-400 font-bold uppercase">
                {sliderVal < 7 ? (sliderVal < 4 ? "Strong Acid" : "Acid Mantle Zone") : (sliderVal === 7 ? "Neutral" : "Alkaline")}
              </span>
            </div>

            {/* Range input */}
            <input
              type="range"
              min="1.0"
              max="13.0"
              step="0.1"
              disabled={revealed}
              value={sliderVal}
              onChange={(e) => setSliderVal(parseFloat(e.target.value))}
              className="w-full h-3 bg-gradient-to-r from-red-500 via-[#F94CAF] via-emerald-400 via-cyan-400 to-purple-600 rounded-lg appearance-none cursor-pointer"
            />

            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>pH 1.0 (Acid)</span>
              <span>pH 7.0 (Neutral)</span>
              <span>pH 13.0 (Alkaline)</span>
            </div>
          </div>

          {/* Revealed Feedback */}
          {revealed && (
            <div className="p-5 rounded-2xl bg-[#F94CAF]/10 border border-[#F94CAF]/30 space-y-2 animate-fade-in">
              <div className="flex items-center gap-2 text-sm font-extrabold text-[#FF85D0]">
                <ShieldCheck className="w-5 h-5 text-[#F94CAF]" />
                <span>Target Range: pH {q.acceptableRange[0]} - {q.acceptableRange[1]}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {q.fact}
              </p>
            </div>
          )}

          {/* Action button */}
          <div className="flex justify-end pt-2 border-t border-white/10">
            {!revealed ? (
              <button
                onClick={handleTestPh}
                className="px-7 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs shadow-magenta"
              >
                Submit pH Analysis
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs shadow-magenta"
              >
                <span>{currentIdx < questions.length - 1 ? 'Next pH Challenge' : 'Finish Lab'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      ) : (
        <div className="p-8 rounded-3xl glass-card border border-white/10 text-center space-y-6 bg-[#0E161C]">
          <Trophy className="w-14 h-14 text-[#F94CAF] mx-auto animate-bounce" />
          <h3 className="text-2xl font-extrabold text-white">
            Acid Mantle Lab Passed! (+150 XP)
          </h3>
          <button
            onClick={onBackToHub}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs shadow-magenta"
          >
            Return to Games Hub
          </button>
        </div>
      )}

    </div>
  );
}
