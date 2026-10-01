import React from 'react';
import { 
  Sparkles, Compass, Search, Gamepad2, ArrowRight, 
  Flame, Award, Trophy, CheckCircle2, Circle, Sun, Moon, 
  TrendingUp, Dna, ShieldCheck, Heart 
} from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';
import { PRODUCTS_DATABASE } from '../../data/productsDatabase.js';

export default function HomeDiscoveryHub() {
  const { 
    profile, 
    arcadeStats, 
    trackerState, 
    toggleTracker, 
    setActiveTab, 
    setActiveGameId, 
    setSelectedProduct 
  } = useBioPass();

  const handleStartJourney = () => {
    setActiveTab('arcade');
    setActiveGameId('discover_skin');
  };

  const featuredProduct = PRODUCTS_DATABASE[0];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 text-left animate-fade-in">
      
      {/* 1. Gamification Status Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-3xl glass-card border border-white/10 bg-gradient-to-r from-[#111A20] via-[#0E161C] to-[#080D10] shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-extrabold shadow-sm">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
            <span>🔥 {trackerState.streak} Day Streak</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-[#F94CAF]/15 border border-[#F94CAF]/30 text-[#FF85D0] text-xs font-extrabold">
            <Sparkles className="w-4 h-4 text-[#F94CAF]" />
            <span>⭐ {arcadeStats.xp} XP</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/10 text-white text-xs font-extrabold border border-white/10">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>🏆 Level {arcadeStats.level} • {arcadeStats.levelTitle}</span>
          </div>
        </div>

        <button
          onClick={() => {
            setActiveTab('profile');
          }}
          className="text-xs font-extrabold text-[#F94CAF] hover:text-[#FF85D0] flex items-center gap-1 cursor-pointer"
        >
          <span>View My Skin Story</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. Hero Section */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-white/10 p-8 sm:p-12 shadow-2xl bg-gradient-to-br from-[#131E26] via-[#0E161C] to-[#080D10]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F94CAF]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FF85D0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#F94CAF]/20 text-[#FF85D0] border border-[#F94CAF]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#F94CAF]" />
            <span>Beauty Discovery × Scientific Intelligence</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's discover your skin <span className="text-[#F94CAF]">🧬</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
            Your skin is unique. Let's figure out what it needs through interactive tests, friendly ingredient breakdowns, and routine harmony.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={handleStartJourney}
              className="flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white font-extrabold text-sm shadow-magenta transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Compass className="w-5 h-5" />
              <span>Start My Skin Journey</span>
            </button>

            <button
              onClick={() => setActiveTab('scanner')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#080D10] hover:bg-[#121B22] border border-white/10 text-white font-extrabold text-xs sm:text-sm transition-all cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#F94CAF]" />
              <span>Scan a Product</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('arcade');
                setActiveGameId(null);
              }}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4 text-amber-400" />
              <span>Explore Beauty Arcade</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Interactive Quick Discovery Shelf (3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: My Skin Story Preview */}
        <div 
          onClick={() => setActiveTab('profile')}
          className="group p-6 rounded-3xl glass-card glass-card-hover border border-white/10 cursor-pointer flex flex-col justify-between bg-[#0E161C]"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#F94CAF]/20 text-[#FF85D0] border border-[#F94CAF]/30">
                My Skin Profile
              </span>
              <span className="text-xl">🧬</span>
            </div>

            <h3 className="text-base font-extrabold text-white group-hover:text-[#FF85D0] transition-colors">
              {profile.archetype || `${profile.skinType.toUpperCase()} Skin Story`}
            </h3>

            <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
              Tolerance: {profile.tolerance} • Focus: {profile.concerns?.[0]?.replace('_', ' ') || 'Hydration'}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300">
            <span>Explore Skin Story</span>
            <ArrowRight className="w-4 h-4 text-[#F94CAF] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Card 2: Today's Routine Checklist */}
        <div className="p-6 rounded-3xl glass-card border border-white/10 flex flex-col justify-between bg-[#0E161C]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30">
                Daily Regimen
              </span>
              <span className="text-xl">🛡️</span>
            </div>

            <h3 className="text-base font-extrabold text-white">
              Today's Barrier Checklist
            </h3>

            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={() => toggleTracker('am')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                  trackerState.amCompleted
                    ? 'bg-amber-500/25 text-amber-300 border-amber-500/50'
                    : 'bg-[#080D10] text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                {trackerState.amCompleted ? <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> : <Circle className="w-3.5 h-3.5" />}
                <span>AM Applied</span>
              </button>

              <button
                onClick={() => toggleTracker('pm')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                  trackerState.pmCompleted
                    ? 'bg-[#F94CAF]/25 text-[#FF85D0] border-[#F94CAF]/50'
                    : 'bg-[#080D10] text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                {trackerState.pmCompleted ? <CheckCircle2 className="w-3.5 h-3.5 text-[#F94CAF]" /> : <Circle className="w-3.5 h-3.5" />}
                <span>PM Applied</span>
              </button>
            </div>
          </div>

          <div 
            onClick={() => setActiveTab('routine')}
            className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300 cursor-pointer hover:text-white"
          >
            <span>Open Regimen Guard</span>
            <ArrowRight className="w-4 h-4 text-[#F94CAF]" />
          </div>
        </div>

        {/* Card 3: Trending Beauty Signal */}
        <div 
          onClick={() => setActiveTab('trends')}
          className="group p-6 rounded-3xl glass-card glass-card-hover border border-white/10 cursor-pointer flex flex-col justify-between bg-[#0E161C]"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Trending Signal
              </span>
              <span className="text-xl">📈</span>
            </div>

            <h3 className="text-base font-extrabold text-white group-hover:text-[#FF85D0] transition-colors">
              Ectoin: +340% Osmolyte Wave
            </h3>

            <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
              Why cosmetic chemists are choosing bacterial osmolytes over traditional hyaluronic acid for extreme barrier defense.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300">
            <span>Read Trend Study</span>
            <ArrowRight className="w-4 h-4 text-[#F94CAF] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

      </div>

    </div>
  );
}
