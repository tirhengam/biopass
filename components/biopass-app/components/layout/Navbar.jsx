import React from 'react';
import { 
  Dna, Search, UserCheck, Calendar, BookOpen, 
  HelpCircle, Moon, Sun, Sparkles, Flame, Gamepad2, TrendingUp, Home, Building2 
} from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function Navbar() {
  const { 
    theme, 
    toggleTheme, 
    activeTab, 
    setActiveTab, 
    setActiveGameId,
    setIsQuizOpen, 
    setIsOnboardingOpen,
    profile,
    trackerState,
    arcadeStats
  } = useBioPass();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'scanner', label: 'Discover', icon: Search },
    { id: 'arcade', label: 'Arcade 🎮', icon: Gamepad2, badge: `${arcadeStats.xp} XP` },
    { id: 'profile', label: 'My Skin', icon: UserCheck },
    { id: 'routine', label: 'My Routine', icon: Calendar },
    { id: 'trends', label: 'Trends 📈', icon: TrendingUp, livePulse: true },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-card border-b border-white/10 transition-colors bg-[#080D10]/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => {
              setActiveTab('home');
              setActiveGameId(null);
            }} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#F94CAF] to-[#FF85D0] p-[2px] shadow-magenta flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#080D10] rounded-[14px] flex items-center justify-center">
                <Dna className="w-5 h-5 sm:w-6 sm:h-6 text-[#F94CAF] animate-pulse-subtle" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  Bio<span className="text-gradient-magenta">Pass</span>
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase bg-[#F94CAF]/20 text-[#F94CAF] border border-[#F94CAF]/40">
                  Discovery
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase hidden sm:block">
                Smart Beauty Companion
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#080D10]/80 p-1.5 rounded-2xl border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (item.id === 'arcade') setActiveGameId(null);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white shadow-magenta-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>

                  {item.livePulse && !isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#F94CAF] animate-ping"></span>
                  )}

                  {item.badge && !isActive && (
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Business Link, Streak, Theme Toggle, Skin Archetype Pill */}
          <div className="flex items-center gap-2.5">
            
            {/* For Business Platform Link */}
            <button
              onClick={() => setActiveTab('business')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold transition-all cursor-pointer shadow-sm"
              title="Switch to BioPass Enterprise & EU DPP Platform"
            >
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">For Business</span>
            </button>

            {/* Streak Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-extrabold shadow-sm">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
              <span>{trackerState.streak}d</span>
            </div>

            {/* Dark / Light Theme Toggle Switch */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-[#080D10] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all shadow-sm group cursor-pointer"
              title={`Switch to ${theme === 'dark' ? 'Warm Light' : 'Obsidian Dark'} Theme`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-[#F94CAF] group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Skin Profile Archetype Button */}
            <button
              onClick={() => {
                setActiveTab('profile');
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F94CAF]/15 hover:bg-[#F94CAF]/25 border border-[#F94CAF]/40 text-[#F94CAF] text-xs font-extrabold transition-all shadow-sm cursor-pointer"
              title="Open My Skin Story"
            >
              <span className="w-2 h-2 rounded-full bg-[#F94CAF] animate-ping"></span>
              <span className="capitalize">{profile.archetype ? profile.archetype.replace("The ", "") : `${profile.skinType} Skin`}</span>
            </button>

            {/* Guide / Tour */}
            <button
              onClick={() => setIsOnboardingOpen(true)}
              className="p-2.5 rounded-xl bg-[#080D10] hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Skincare Intelligence Guide"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
