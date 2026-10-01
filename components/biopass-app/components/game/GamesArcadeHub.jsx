import React from 'react';
import { 
  Sparkles, Compass, Search, FlaskConical, Award, 
  Gamepad2, Flame, ArrowRight, Trophy, Zap, Star 
} from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';
import DiscoverYourSkinGame from '../discovery/DiscoverYourSkinGame.jsx';
import IngredientDetectiveGame from './IngredientDetectiveGame.jsx';
import MixItOrDontGame from './MixItOrDontGame.jsx';

export default function GamesArcadeHub() {
  const { 
    arcadeStats, 
    activeGameId, 
    setActiveGameId, 
    setActiveTab, 
    setSelectedProduct 
  } = useBioPass();

  const games = [
    {
      id: "discover_skin",
      title: "🧬 Discover Your Skin",
      badge: "Interactive Onboarding Game",
      desc: "Find out how your skin behaves without confusing technical jargon. Take the Morning Test and tap your Face Shine Map!",
      rewardXp: "+300 XP",
      accent: "from-[#F94CAF] to-[#FF85D0]"
    },
    {
      id: "detective",
      title: "🕵️ Ingredient Detective",
      badge: "Formula Sleuth Challenge",
      desc: "What's really hiding inside famous cosmetic bottles? Spot the barrier heroes, hydration magnets, and sneaky irritants.",
      rewardXp: "+200 XP",
      accent: "from-[#06B6D4] to-[#3B82F6]"
    },
    {
      id: "mix_or_dont",
      title: "🧪 Mix It or Don't",
      badge: "Formulation Nuance Game",
      desc: "Can you layer Retinol with AHA? Vitamin C with Niacinamide? Learn how concentration, pH, and skin context change the rules.",
      rewardXp: "+250 XP",
      accent: "from-[#F59E0B] to-[#F94CAF]"
    }
  ];

  // Route to sub-games
  if (activeGameId === 'discover_skin') {
    return <DiscoverYourSkinGame onComplete={() => setActiveTab('profile')} />;
  }
  if (activeGameId === 'detective') {
    return (
      <IngredientDetectiveGame
        onBackToHub={() => setActiveGameId(null)}
        onOpenDeepInci={(prod) => {
          setSelectedProduct(prod);
          setActiveTab('scanner');
        }}
      />
    );
  }
  if (activeGameId === 'mix_or_dont') {
    return <MixItOrDontGame onBackToHub={() => setActiveGameId(null)} />;
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 text-left animate-fade-in">
      
      {/* Gamer Level & Stats Showcase Banner */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-white/10 p-6 sm:p-8 shadow-2xl bg-gradient-to-br from-[#111A20] via-[#0E161C] to-[#080D10]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F94CAF]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F94CAF] to-[#FF85D0] p-[2px] shadow-magenta flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-[#080D10] rounded-[14px] flex items-center justify-center text-[#F94CAF]">
                <Gamepad2 className="w-8 h-8" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F94CAF]">
                  🎮 Beauty Arcade
                </span>
                <span className="w-2 h-2 rounded-full bg-[#F94CAF] animate-pulse"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                Learn Skincare Science Through Play
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Level: <span className="font-extrabold text-white">Level {arcadeStats.level} ({arcadeStats.levelTitle})</span> • Total XP: <span className="font-extrabold text-[#F94CAF]">{arcadeStats.xp} XP</span>
              </p>
            </div>
          </div>

          {/* Badges Preview */}
          <div className="flex flex-wrap items-center gap-2">
            {arcadeStats.badges.map((b, i) => (
              <span key={i} className="px-3 py-1.5 rounded-xl text-xs font-extrabold bg-[#F94CAF]/15 text-[#FF85D0] border border-[#F94CAF]/30 shadow-sm">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="pt-4 space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-400">
            <span>Next Level Milestone</span>
            <span className="text-[#F94CAF]">{arcadeStats.xp} / 1000 XP</span>
          </div>
          <div className="w-full bg-slate-800/80 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] h-full rounded-full transition-all duration-500 shadow-magenta-sm"
              style={{ width: `${Math.min(100, (arcadeStats.xp / 1000) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3 Core Games Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {games.map(g => (
          <div
            key={g.id}
            onClick={() => setActiveGameId(g.id)}
            className="group p-6 rounded-3xl glass-card glass-card-hover border border-white/10 hover:border-[#F94CAF]/50 transition-all cursor-pointer flex flex-col justify-between bg-[#0E161C]"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  {g.rewardXp}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">{g.badge}</span>
              </div>

              <h3 className="text-lg font-extrabold text-white group-hover:text-[#FF85D0] transition-colors mb-2">
                {g.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {g.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                Play Game
              </span>
              <div className="p-2 rounded-xl bg-[#F94CAF] text-white group-hover:scale-110 transition-transform shadow-magenta-sm">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
