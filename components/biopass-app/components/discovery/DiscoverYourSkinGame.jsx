import React, { useState } from 'react';
import { 
  Sparkles, ArrowRight, ArrowLeft, Check, Dna, 
  Smile, ShieldCheck, Heart, Sun, Droplets, Flame, 
  HelpCircle, Zap, Compass, CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function DiscoverYourSkinGame({ onComplete }) {
  const { updateProfile, profile, showToast, addArcadeXp } = useBioPass();

  const [step, setStep] = useState(1);
  const [morningFeel, setMorningFeel] = useState(null);
  const [shineZones, setShineZones] = useState([]);
  const [reactionFeel, setReactionFeel] = useState(null);
  const [environmentFeel, setEnvironmentFeel] = useState(null);
  const [habits, setHabits] = useState({
    complexity: 'balanced',
    fragrance: 'fragrance_free',
    goal: 'glow_hydration'
  });

  // Step 1: Morning Test Clues
  const morningOptions = [
    { id: 'comfortable', icon: '😌', label: 'Comfortable', clue: "Balanced natural barrier! Your skin produces a healthy baseline of protective lipids and water." },
    { id: 'tight_dry', icon: '🏜️', label: 'Tight or dry', clue: "Thirsty lipid barrier! Your skin craves moisture-binding humectants and ceramides." },
    { id: 'shiny', icon: '✨', label: 'Shiny all over', clue: "Active sebum flow! Your sebaceous glands are working hard to naturally moisturize your skin." },
    { id: 'both', icon: '🤔', label: 'A little of both', clue: "Classic combination equilibrium! Oily in the central T-zone while cheeks remain normal or dry." },
    { id: 'unsure', icon: '🤷', label: 'Not sure', clue: "No worries! That's why we're exploring your skin together step by step." }
  ];

  // Step 2: Shine Map Zones
  const faceZones = [
    { id: 'forehead', label: 'Forehead', top: '18%', left: '50%' },
    { id: 'nose', label: 'Nose', top: '42%', left: '50%' },
    { id: 'cheeks', label: 'Cheeks', top: '52%', left: '26%' },
    { id: 'chin', label: 'Chin', top: '76%', left: '50%' },
  ];

  const handleToggleZone = (zoneId) => {
    if (zoneId === 'all') {
      if (shineZones.includes('all')) {
        setShineZones([]);
      } else {
        setShineZones(['all', 'forehead', 'nose', 'cheeks', 'chin']);
      }
      return;
    }

    let updated = shineZones.filter(z => z !== 'all');
    if (updated.includes(zoneId)) {
      updated = updated.filter(z => z !== zoneId);
    } else {
      updated.push(zoneId);
    }
    setShineZones(updated);
  };

  // Step 3: Reaction Test
  const reactionOptions = [
    { id: 'happy', icon: '💚', label: 'Usually happy', desc: 'Resilient barrier, rarely stings or turns red' },
    { id: 'fine', icon: '🙂', label: 'Usually fine', desc: 'Occasional mild tingle, but settles fast' },
    { id: 'irritated', icon: '😳', label: 'Sometimes irritated', desc: 'Can get red with strong fragrances or acids' },
    { id: 'burns', icon: '🔥', label: 'Often burns or stings', desc: 'Hyper-sensitive barrier, reacts easily' },
    { id: 'dont_know', icon: '🤷', label: "I don't know", desc: 'New to trying different active skincare' }
  ];

  // Step 4: Environment
  const envOptions = [
    { id: 'warm_humid', icon: '☀️', label: 'Warm & humid', desc: 'Skin feels dewy and comfortable with moisture in the air' },
    { id: 'hot_dry', icon: '🏜️', label: 'Hot & dry', desc: 'Prefers sunny warmth without sticky humidity' },
    { id: 'cold_dry', icon: '❄️', label: 'Cold & dry', desc: 'Enjoys crisp winter air but needs rich moisturizer' },
    { id: 'cool_humid', icon: '🌧️', label: 'Cool & humid', desc: 'Happiest in temperate, fresh rain-air' },
    { id: 'not_sure', icon: '🤷', label: 'Not sure', desc: 'Feels about the same in any weather' }
  ];

  const handleFinish = () => {
    // Determine archetype & scores
    let skinType = 'combination';
    let sebumScore = 60;
    let hydrationScore = 65;
    let barrierScore = 70;
    let sensitivityScore = 40;
    let toleranceScore = 60;

    // Morning feel impact
    if (morningFeel?.id === 'shiny') { skinType = 'oily'; sebumScore = 85; hydrationScore = 55; }
    if (morningFeel?.id === 'tight_dry') { skinType = 'dry'; sebumScore = 25; hydrationScore = 85; barrierScore = 50; }
    if (morningFeel?.id === 'both') { skinType = 'combination'; sebumScore = 65; hydrationScore = 65; }

    // Shine map impact
    if (shineZones.includes('all') || (shineZones.includes('forehead') && shineZones.includes('cheeks'))) {
      sebumScore += 10;
    }

    // Reaction impact
    if (reactionFeel?.id === 'burns') { sensitivityScore = 85; barrierScore -= 20; toleranceScore = 30; }
    if (reactionFeel?.id === 'irritated') { sensitivityScore = 65; barrierScore -= 10; toleranceScore = 50; }
    if (reactionFeel?.id === 'happy') { sensitivityScore = 20; barrierScore += 15; toleranceScore = 85; }

    // Derive archetype name
    let archetype = "The Balanced Glow";
    if (sensitivityScore > 60 && skinType === 'dry') archetype = "The Sensitive Petal";
    else if (sensitivityScore > 60) archetype = "The Sensitive Glow";
    else if (skinType === 'oily') archetype = "The Radiant Clarifier";
    else if (skinType === 'dry') archetype = "The Hydration Seeker";
    else archetype = "The Balanced Glow";

    const updatedProfile = {
      ...profile,
      skinType,
      archetype,
      tolerance: toleranceScore > 70 ? 'advanced' : (toleranceScore > 45 ? 'intermediate' : 'beginner'),
      sensitivities: sensitivityScore > 50 ? ['fragrance'] : ['none'],
      climate: environmentFeel?.id === 'warm_humid' ? 'tropical' : (environmentFeel?.id === 'cold_dry' ? 'dry' : 'temperate'),
      concerns: habits.goal === 'clear_blemishes' ? ['acne', 'enlarged_pores'] : (habits.goal === 'smooth_lines' ? ['fine_lines', 'barrier_damage'] : ['hyperpigmentation', 'barrier_damage']),
      scores: {
        hydrationNeeds: Math.min(95, Math.max(20, hydrationScore)),
        barrierResilience: Math.min(95, Math.max(20, barrierScore)),
        sensitivityIndex: Math.min(95, Math.max(15, sensitivityScore)),
        oilRegulation: Math.min(95, Math.max(15, sebumScore)),
        exfoliationTolerance: toleranceScore
      },
      discoveredTendencies: {
        morningFeel: morningFeel?.label,
        shineZones,
        reaction: reactionFeel?.label,
        environment: environmentFeel?.label,
        habitComplexity: habits.complexity,
        goal: habits.goal
      },
      completedAt: new Date().toISOString()
    };

    updateProfile(updatedProfile);
    addArcadeXp(300, "Skin Explorer 🧬");

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#F94CAF', '#FF85D0', '#FFD166', '#10B981']
      });
    } catch (e) {
      console.log(e);
    }

    showToast("✨ Skin Story unlocked! Profile calibrated.", "success");
    if (onComplete) onComplete();
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 text-left animate-fade-in">
      
      {/* Top Header & Progress */}
      <div className="p-6 rounded-3xl glass-card border border-white/10 flex items-center justify-between bg-gradient-to-br from-[#111A20] via-[#0E161C] to-[#080D10]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#F94CAF]/20 border border-[#F94CAF]/40 flex items-center justify-center text-[#F94CAF] font-extrabold text-sm">
            0{step}
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F94CAF] block">
              Discover Your Skin • Step {step} of 5
            </span>
            <span className="text-sm font-extrabold text-white">
              {step === 1 && "The Morning Test"}
              {step === 2 && "The Face Shine Map"}
              {step === 3 && "The Reaction Test"}
              {step === 4 && "Environment & Climate"}
              {step === 5 && "Beauty Habits & Goals"}
            </span>
          </div>
        </div>

        {/* Mini progress dots */}
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map(i => (
            <div 
              key={i}
              className={`h-2 rounded-full transition-all ${
                step === i ? 'w-6 bg-[#F94CAF]' : (step > i ? 'w-2 bg-[#FF85D0]' : 'w-2 bg-slate-700')
              }`}
            />
          ))}
        </div>
      </div>

      {/* STEP 1: THE MORNING TEST */}
      {step === 1 && (
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6 bg-[#0E161C] animate-fade-in">
          <div className="space-y-2">
            <span className="text-2xl">🌅</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              You washed your face and used nothing.<br />
              <span className="text-[#FF85D0]">30 minutes later, what does your skin feel like?</span>
            </h2>
            <p className="text-xs text-slate-400">
              This reveals your intrinsic oil production before skincare alters the baseline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {morningOptions.map(opt => {
              const isSelected = morningFeel?.id === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setMorningFeel(opt)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#F94CAF]/20 border-[#F94CAF] shadow-magenta-sm ring-1 ring-[#F94CAF]'
                      : 'bg-[#080D10] border-white/10 hover:border-[#F94CAF]/40 hover:bg-[#121B22]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="text-sm font-bold text-white">{opt.label}</span>
                  </div>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-[#F94CAF]" />}
                </div>
              );
            })}
          </div>

          {/* Educational Clue Banner */}
          {morningFeel && (
            <div className="p-4 rounded-2xl bg-[#F94CAF]/10 border border-[#F94CAF]/30 text-xs text-slate-200 flex items-start gap-2.5 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#F94CAF] shrink-0 mt-0.5" />
              <div>
                <span className="font-extrabold text-[#FF85D0] block mb-0.5">BioPass Clue:</span>
                <span>{morningFeel.clue}</span>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={() => setStep(2)}
              disabled={!morningFeel}
              className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all disabled:opacity-40 cursor-pointer"
            >
              <span>Continue to Shine Map</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: THE SHINE MAP */}
      {step === 2 && (
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6 bg-[#0E161C] animate-fade-in">
          <div className="space-y-2">
            <span className="text-2xl">✨</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              The Shine Map: <span className="text-[#FF85D0]">Where does your skin get shiny first?</span>
            </h2>
            <p className="text-xs text-slate-400">
              Tap the zones on the face where oiliness or shine appears by midday.
            </p>
          </div>

          {/* Interactive Illustrated Face Graphic */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
            
            <div className="relative w-56 h-64 rounded-3xl bg-[#080D10] border-2 border-dashed border-[#F94CAF]/40 flex items-center justify-center overflow-hidden shadow-inner">
              
              {/* Silhouette Face Art */}
              <svg viewBox="0 0 200 240" className="w-48 h-56 text-slate-700">
                <ellipse cx="100" cy="120" rx="65" ry="85" fill="none" stroke="currentColor" strokeWidth="2.5" />
                {/* Eyebrows & Eyes */}
                <path d="M 60 90 Q 75 80 90 90" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M 110 90 Q 125 80 140 90" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="75" cy="100" r="4" fill="currentColor" />
                <circle cx="125" cy="100" r="4" fill="currentColor" />
                {/* Nose line */}
                <path d="M 100 100 L 96 130 L 105 130" stroke="currentColor" strokeWidth="2" fill="none" />
                {/* Lips */}
                <path d="M 85 165 Q 100 175 115 165" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>

              {/* Interactive Zone Buttons Placed on Face */}
              {faceZones.map(z => {
                const active = shineZones.includes(z.id) || shineZones.includes('all');
                return (
                  <button
                    key={z.id}
                    onClick={() => handleToggleZone(z.id)}
                    style={{ top: z.top, left: z.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-[10px] font-extrabold transition-all cursor-pointer shadow-md ${
                      active
                        ? 'bg-[#F94CAF] text-white shadow-magenta scale-110 ring-2 ring-white/50'
                        : 'bg-[#111A20] text-slate-300 border border-white/20 hover:border-[#F94CAF]'
                    }`}
                  >
                    {active ? `✓ ${z.label}` : z.label}
                  </button>
                );
              })}

            </div>

            {/* Quick Selector Pills */}
            <div className="space-y-2.5 w-full sm:w-52">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Tap to Select Zones:
              </span>
              {['forehead', 'nose', 'cheeks', 'chin'].map(zoneId => {
                const active = shineZones.includes(zoneId);
                return (
                  <button
                    key={zoneId}
                    onClick={() => handleToggleZone(zoneId)}
                    className={`w-full p-2.5 rounded-xl text-xs font-extrabold border transition-all text-left flex items-center justify-between cursor-pointer ${
                      active
                        ? 'bg-[#F94CAF]/20 border-[#F94CAF] text-[#FF85D0]'
                        : 'bg-[#080D10] border-white/10 text-slate-300 hover:text-white'
                    }`}
                  >
                    <span className="capitalize">{zoneId}</span>
                    <span className="text-xs">{active ? '✓' : '+'}</span>
                  </button>
                );
              })}

              <button
                onClick={() => handleToggleZone('all')}
                className={`w-full p-2.5 rounded-xl text-xs font-extrabold border transition-all text-center cursor-pointer ${
                  shineZones.includes('all')
                    ? 'bg-[#F94CAF] text-white shadow-magenta'
                    : 'bg-amber-500/15 border-amber-500/30 text-amber-300 hover:bg-amber-500/25'
                }`}
              >
                Almost Everywhere ✨
              </button>
            </div>

          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={() => setStep(3)}
              disabled={shineZones.length === 0}
              className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all disabled:opacity-40 cursor-pointer"
            >
              <span>Continue to Reaction Test</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: THE REACTION TEST */}
      {step === 3 && (
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6 bg-[#0E161C] animate-fade-in">
          <div className="space-y-2">
            <span className="text-2xl">⚡</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              The Reaction Test: <span className="text-[#FF85D0]">What happens when you try a new product?</span>
            </h2>
            <p className="text-xs text-slate-400">
              Helps us calibrate your sensitivity threshold so we flag potential irritants.
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            {reactionOptions.map(opt => {
              const isSelected = reactionFeel?.id === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setReactionFeel(opt)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#F94CAF]/20 border-[#F94CAF] shadow-magenta-sm ring-1 ring-[#F94CAF]'
                      : 'bg-[#080D10] border-white/10 hover:border-[#F94CAF]/40 hover:bg-[#121B22]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl">{opt.icon}</span>
                    <div>
                      <span className="text-sm font-bold text-white block">{opt.label}</span>
                      <span className="text-[11px] text-slate-400">{opt.desc}</span>
                    </div>
                  </div>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-[#F94CAF]" />}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => setStep(2)}
              className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={() => setStep(4)}
              disabled={!reactionFeel}
              className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all disabled:opacity-40 cursor-pointer"
            >
              <span>Continue to Climate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: ENVIRONMENT & CLIMATE */}
      {step === 4 && (
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6 bg-[#0E161C] animate-fade-in">
          <div className="space-y-2">
            <span className="text-2xl">🌍</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              Environment: <span className="text-[#FF85D0]">Where does your skin feel happiest?</span>
            </h2>
            <p className="text-xs text-slate-400">
              Humidity and temperature directly dictate which textures (gel vs rich cream) work best.
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            {envOptions.map(opt => {
              const isSelected = environmentFeel?.id === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setEnvironmentFeel(opt)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#F94CAF]/20 border-[#F94CAF] shadow-magenta-sm ring-1 ring-[#F94CAF]'
                      : 'bg-[#080D10] border-white/10 hover:border-[#F94CAF]/40 hover:bg-[#121B22]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl">{opt.icon}</span>
                    <div>
                      <span className="text-sm font-bold text-white block">{opt.label}</span>
                      <span className="text-[11px] text-slate-400">{opt.desc}</span>
                    </div>
                  </div>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-[#F94CAF]" />}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => setStep(3)}
              className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={() => setStep(5)}
              disabled={!environmentFeel}
              className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all disabled:opacity-40 cursor-pointer"
            >
              <span>Continue to Habits</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: BEAUTY HABITS & GOALS */}
      {step === 5 && (
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6 bg-[#0E161C] animate-fade-in">
          <div className="space-y-2">
            <span className="text-2xl">✨</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              Beauty Habits: <span className="text-[#FF85D0]">What is your ideal skincare flow?</span>
            </h2>
            <p className="text-xs text-slate-400">
              Pick your routine style and #1 skincare goal.
            </p>
          </div>

          {/* Routine Complexity */}
          <div className="space-y-2">
            <span className="text-xs font-extrabold text-slate-300 uppercase tracking-wider block">
              Preferred Routine Length:
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'minimal', label: 'Minimalist', desc: '2 steps (Cleanse + Hydrate)' },
                { id: 'balanced', label: 'Balanced', desc: '3-4 steps (Core + Serum)' },
                { id: 'lover', label: 'Ritual Lover', desc: '5+ steps (Full routine)' },
              ].map(r => (
                <button
                  key={r.id}
                  onClick={() => setHabits({ ...habits, complexity: r.id })}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    habits.complexity === r.id
                      ? 'bg-[#F94CAF]/20 border-[#F94CAF] text-white shadow-magenta-sm'
                      : 'bg-[#080D10] border-white/10 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-extrabold block text-white">{r.label}</span>
                  <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">{r.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Primary Goal */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-extrabold text-slate-300 uppercase tracking-wider block">
              #1 Primary Skin Focus:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'glow_hydration', icon: '💧', label: 'Glass Skin & Glow' },
                { id: 'clear_blemishes', icon: '✨', label: 'Clear Pores & Blemishes' },
                { id: 'calm_barrier', icon: '🛡️', label: 'Calm Redness & Barrier' },
                { id: 'smooth_lines', icon: '🌸', label: 'Firm & Smooth Texture' },
              ].map(g => (
                <button
                  key={g.id}
                  onClick={() => setHabits({ ...habits, goal: g.id })}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                    habits.goal === g.id
                      ? 'bg-[#F94CAF]/20 border-[#F94CAF] text-white shadow-magenta-sm'
                      : 'bg-[#080D10] border-white/10 text-slate-300'
                  }`}
                >
                  <span className="text-xl">{g.icon}</span>
                  <span className="text-xs font-extrabold">{g.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => setStep(4)}
              className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={handleFinish}
              className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate My Skin Story</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
