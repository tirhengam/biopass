import React, { useState } from 'react';
import { 
  Sparkles, Dna, ShieldCheck, Droplets, AlertTriangle, 
  RotateCcw, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, 
  Flame, Compass, Heart, Zap, Award 
} from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';
import SkinProfileCard from './SkinProfileCard.jsx';

export default function MySkinStory({ onRestartDiscovery }) {
  const { profile, setActiveTab, setActiveGameId } = useBioPass();
  const [showScience, setShowScience] = useState(false);

  const archetypeTitle = profile.archetype || (
    profile.skinType === 'oily' ? "The Radiant Clarifier" :
    (profile.skinType === 'dry' ? "The Hydration Seeker" : 
    (profile.sensitivities?.includes('fragrance') ? "The Sensitive Glow" : "The Balanced Glow"))
  );

  const tendencies = [
    profile.skinType === 'oily' ? { icon: '✨', label: 'Active Natural Glow', desc: 'Produces protective sebum naturally' } :
    (profile.skinType === 'dry' ? { icon: '🏜️', label: 'Lipid-Seeking', desc: 'Loves rich, nourishing barrier textures' } :
    { icon: '✨', label: 'T-Zone Equilibrium', desc: 'Central shine with balanced cheeks' }),
    { icon: '💧', label: profile.scores?.hydrationNeeds > 60 ? 'Moisture-Loving' : 'Hydration Balanced', desc: 'Responds with dewy bounce to humectants' },
    { icon: '⚡', label: profile.scores?.sensitivityIndex > 50 ? 'Expressive & Reactive' : 'Resilient Threshold', desc: 'Signals immediately when ingredients disagree' },
    { icon: '🛡️', label: 'Protective Acid Mantle', desc: 'Thrives on gentle cleansing and lipid reinforcement' }
  ];

  const goals = [
    { icon: '💧', label: 'Cellular Hydration', desc: 'Maintain moisture bilayers and bounce' },
    { icon: '🛡️', label: 'Barrier Reinforcement', desc: 'Lock in ceramides and prevent water loss' },
    { icon: '✨', label: 'Even, Radiant Tone', desc: 'Soothe redness and protect collagen matrix' }
  ];

  const cautions = [
    { icon: '🔥', label: 'Active Overload', desc: 'Avoid stacking high-percentage AHAs with Retinoids' },
    { icon: '🌶️', label: 'Potential Sensitizers', desc: 'Stay mindful with synthetic fragrance & denatured alcohol' },
    { icon: '⚡', label: 'Over-Exfoliation', desc: 'Limit strong direct exfoliating acids to 2-3 nights/week' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 text-left animate-fade-in">
      
      {/* Visual Story Card */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-white/10 p-6 sm:p-8 shadow-2xl bg-gradient-to-br from-[#111A20] via-[#0E161C] to-[#080D10]">
        
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F94CAF]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#F94CAF]/20 text-[#F94CAF] border border-[#F94CAF]/40">
                ✨ YOUR SKIN STORY
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                Calibrated by BioPass
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {archetypeTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Here is what makes your skin unique and how to help it thrive every day.
            </p>
          </div>

          <button
            onClick={onRestartDiscovery}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#080D10] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-bold transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Skin Quest</span>
          </button>
        </div>

        {/* 3 Columns / Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
          
          {/* Section 1: Your Skin Tends To Be */}
          <div className="p-5 rounded-3xl bg-[#080D10] border border-white/10 space-y-3.5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#F94CAF] block">
              Your Skin Tends To Be:
            </span>
            <div className="space-y-2.5">
              {tendencies.map((t, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-[#111A20] border border-white/5 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span>{t.icon}</span>
                    <span className="text-xs font-extrabold text-white">{t.label}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block pl-6 leading-tight">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Main Goals */}
          <div className="p-5 rounded-3xl bg-[#080D10] border border-white/10 space-y-3.5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 block">
              Main Skin Goals:
            </span>
            <div className="space-y-2.5">
              {goals.map((g, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span>{g.icon}</span>
                    <span className="text-xs font-extrabold text-emerald-200">{g.label}</span>
                  </div>
                  <span className="text-[10px] text-emerald-300/80 block pl-6 leading-tight">{g.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Things to Watch */}
          <div className="p-5 rounded-3xl bg-[#080D10] border border-white/10 space-y-3.5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 block">
              Things To Watch:
            </span>
            <div className="space-y-2.5">
              {cautions.map((c, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span>{c.icon}</span>
                    <span className="text-xs font-extrabold text-amber-200">{c.label}</span>
                  </div>
                  <span className="text-[10px] text-amber-300/80 block pl-6 leading-tight">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Controls & Progressive Disclosure Trigger */}
        <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setActiveTab('scanner')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs shadow-magenta cursor-pointer"
            >
              <span>Explore Matching Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setActiveTab('arcade');
                setActiveGameId(null);
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#F94CAF]" />
              <span>Beauty Arcade</span>
            </button>
          </div>

          {/* How did we figure this out? / Progressive Disclosure Button */}
          <button
            onClick={() => setShowScience(!showScience)}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#F94CAF]/15 hover:bg-[#F94CAF]/25 border border-[#F94CAF]/40 text-[#FF85D0] text-xs font-extrabold transition-all cursor-pointer"
          >
            <Dna className="w-4 h-4 text-[#F94CAF]" />
            <span>{showScience ? "Hide Science Matrix" : "How did we figure this out? See the Science 🔬"}</span>
            {showScience ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

        </div>

      </div>

      {/* Progressive Disclosure: Deep Bio-ID & Radar Intelligence Layer */}
      {showScience && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-2 text-xs font-extrabold text-[#F94CAF] uppercase tracking-wider pl-2">
            <Dna className="w-4 h-4" />
            <span>Deep BioPass Biometric Intelligence Layer</span>
          </div>
          <SkinProfileCard />
        </div>
      )}

    </div>
  );
}
