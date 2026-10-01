import React, { useState } from 'react';
import { 
  X, Check, ArrowRight, ArrowLeft, Sparkles, Droplets, 
  SunMedium, FlameKindling, ShieldAlert, Flame, Sun, Activity, 
  Shield, HeartPulse, Grid, Wind, Leaf, ZapOff, AlertCircle, 
  CheckCircle2, CloudRain, Compass, Snowflake, Sprout, TrendingUp, Zap 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../../data/quizQuestions.js';
import { useBioPass } from '../../context/BioPassContext.jsx';

const ICON_MAP = {
  Droplets, SunMedium, FlameKindling, ShieldAlert, Sparkles,
  Flame, Sun, Activity, Shield, HeartPulse, Grid,
  Wind, Leaf, ZapOff, AlertCircle, CheckCircle2,
  CloudRain, Compass, Snowflake, Sprout, TrendingUp, Zap
};

export default function SkinProfileQuiz() {
  const { isQuizOpen, setIsQuizOpen, updateProfile, profile } = useBioPass();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [answers, setAnswers] = useState({
    skinType: profile.skinType || 'combination',
    concerns: profile.concerns || ['acne'],
    sensitivities: profile.sensitivities || ['fragrance'],
    climate: profile.climate || 'temperate',
    tolerance: profile.tolerance || 'intermediate',
  });

  if (!isQuizOpen) return null;

  const currentQuestion = QUIZ_QUESTIONS[currentStepIndex];
  const totalSteps = QUIZ_QUESTIONS.length;
  const isLastStep = currentStepIndex === totalSteps - 1;

  const handleSelectOption = (option) => {
    const qId = currentQuestion.id;
    const optionId = option.id;
    if (currentQuestion.multiSelect) {
      const fieldKey = qId === 'concerns' ? 'concerns' : 'sensitivities';
      const existing = answers[fieldKey] || [];
      
      if (optionId === 'none') {
        setAnswers({ ...answers, [fieldKey]: ['none'] });
        return;
      }

      let updated = existing.filter(id => id !== 'none');
      if (updated.includes(optionId)) {
        updated = updated.filter(id => id !== optionId);
      } else {
        if (currentQuestion.maxSelect && updated.length >= currentQuestion.maxSelect) {
          updated.shift();
        }
        updated.push(optionId);
      }
      setAnswers({ ...answers, [fieldKey]: updated.length > 0 ? updated : ['none'] });
    } else {
      const fieldKey = qId === 'skin_type' ? 'skinType' : (qId === 'climate' ? 'climate' : 'tolerance');
      setAnswers({ ...answers, [fieldKey]: optionId });
    }
  };

  const isOptionSelected = (optionId) => {
    const qId = currentQuestion.id;
    if (qId === 'skin_type') return answers.skinType === optionId;
    if (qId === 'concerns') return answers.concerns?.includes(optionId);
    if (qId === 'sensitivities') return answers.sensitivities?.includes(optionId);
    if (qId === 'climate') return answers.climate === optionId;
    if (qId === 'tolerance') return answers.tolerance === optionId;
    return false;
  };

  const handleNext = () => {
    if (isLastStep) {
      let hydration = 60;
      let barrier = 70;
      let sensitivity = 40;
      let sebum = 50;
      let toleranceScore = 60;

      if (answers.skinType === 'oily') { sebum = 85; hydration = 50; barrier = 80; sensitivity = 30; }
      if (answers.skinType === 'dry') { sebum = 20; hydration = 90; barrier = 45; sensitivity = 65; }
      if (answers.skinType === 'combination') { sebum = 65; hydration = 65; barrier = 65; sensitivity = 45; }
      if (answers.skinType === 'sensitive') { sensitivity = 90; barrier = 35; hydration = 80; }

      if (answers.concerns.includes('barrier_damage')) { barrier -= 20; sensitivity += 25; }
      if (answers.concerns.includes('acne')) { sebum += 10; }
      if (answers.sensitivities.includes('fragrance')) { sensitivity += 15; }

      if (answers.tolerance === 'beginner') toleranceScore = 30;
      if (answers.tolerance === 'intermediate') toleranceScore = 65;
      if (answers.tolerance === 'advanced') toleranceScore = 90;

      const finalProfile = {
        skinType: answers.skinType,
        concerns: answers.concerns,
        sensitivities: answers.sensitivities,
        climate: answers.climate,
        tolerance: answers.tolerance,
        scores: {
          hydrationNeeds: Math.min(95, Math.max(20, hydration)),
          barrierResilience: Math.min(95, Math.max(20, barrier)),
          sensitivityIndex: Math.min(95, Math.max(15, sensitivity)),
          oilRegulation: Math.min(95, Math.max(15, sebum)),
          exfoliationTolerance: toleranceScore
        },
        completedAt: new Date().toISOString()
      };

      updateProfile(finalProfile);
      setIsQuizOpen(false);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F94CAF', '#FF85D0', '#FFD166']
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0E161C] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden text-left max-h-[90vh] flex flex-col">
        
        {/* Top Header & Progress */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F94CAF]">
              Skin-Profile Diagnostic
            </span>
            <h3 className="text-lg font-extrabold text-white">
              Step {currentStepIndex + 1} of {totalSteps}
            </h3>
          </div>

          <button
            onClick={() => setIsQuizOpen(false)}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-4">
          <div 
            className="bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] h-full rounded-full transition-all duration-300 shadow-magenta-sm"
            style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
          />
        </div>

        {/* Question Content */}
        <div className="my-6 overflow-y-auto flex-1 pr-1">
          <h4 className="text-xl font-extrabold text-white tracking-tight">
            {currentQuestion.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 mb-5">
            {currentQuestion.subtitle}
          </p>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQuestion.options.map(option => {
              const selected = isOptionSelected(option.id);
              const Icon = ICON_MAP[option.icon] || Sparkles;

              return (
                <div
                  key={option.id}
                  onClick={() => handleSelectOption(option)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    selected
                      ? 'bg-[#F94CAF]/15 border-[#F94CAF] shadow-magenta-sm ring-2 ring-[#F94CAF]/30'
                      : 'bg-[#080D10] border-white/10 hover:border-[#F94CAF]/40 hover:bg-[#121B22]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className={`p-2 rounded-xl ${selected ? 'bg-[#F94CAF] text-white shadow-magenta-sm' : 'bg-white/10 text-[#F94CAF]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      selected ? 'bg-[#F94CAF] border-[#F94CAF] text-white' : 'border-slate-700'
                    }`}>
                      {selected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="block text-xs sm:text-sm font-bold text-white">
                      {option.label}
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      {option.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              currentStepIndex === 0
                ? 'opacity-40 cursor-not-allowed text-slate-600'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all cursor-pointer"
          >
            <span>{isLastStep ? 'Analyze & Save Bio-Profile' : 'Next Step'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
