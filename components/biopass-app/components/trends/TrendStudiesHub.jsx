import React, { useState } from 'react';
import { 
  TrendingUp, RefreshCw, Sparkles, Filter, Search, 
  ArrowRight, BookOpen, Clock, ShieldCheck, Flame, 
  FlaskConical, Newspaper, Zap, CheckCircle2, ChevronRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBioPass } from '../../context/BioPassContext.jsx';
import { loadTrendStudies, loadTickerSignals, fetchLatestTrendSignals } from '../../services/trendSignalsService.js';
import TrendBlogModal from './TrendBlogModal.jsx';

export default function TrendStudiesHub() {
  const { showToast, setSelectedProduct, setActiveTab } = useBioPass();

  const [studies, setStudies] = useState(() => loadTrendStudies());
  const [tickers, setTickers] = useState(() => loadTickerSignals());
  const [lastRefreshedTime, setLastRefreshedTime] = useState("Just Now");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeArticleModal, setActiveArticleModal] = useState(null);

  const categories = [
    { id: 'all', label: 'All Trend Studies' },
    { id: 'breakthrough_actives', label: 'Breakthrough Actives' },
    { id: 'viral_fact_check', label: 'Viral Fact-Checks' },
    { id: 'k_beauty_tech', label: 'K-Beauty Biotech' },
    { id: 'regulatory_science', label: 'Clean & Regulatory' },
  ];

  const handleRefreshSignals = () => {
    setIsRefreshing(true);
    showToast("Connecting to global cosmetic signals & journal updates...", "info");

    setTimeout(() => {
      const result = fetchLatestTrendSignals();
      setStudies(result.studies);
      setTickers(result.tickers);
      setLastRefreshedTime(result.timestamp);
      setIsRefreshing(false);
      showToast("✨ Beauty Signals updated with latest market intelligence!", "success");

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#F94CAF', '#FF85D0', '#10B981']
        });
      } catch (e) {
        console.log(e);
      }
    }, 1000);
  };

  const filteredStudies = studies.filter(study => {
    const matchesSearch = 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (study.relatedInci && study.relatedInci.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesCategory = selectedCategory === 'all' || study.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 text-left animate-fade-in">
      
      {/* Hero Header & Live Signal Ticker */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-white/10 p-6 sm:p-8 shadow-2xl bg-gradient-to-br from-[#111A20] via-[#0E161C] to-[#080D10]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F94CAF]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#F94CAF]/20 text-[#F94CAF] border border-[#F94CAF]/40 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F94CAF] animate-ping"></span>
                <span>Real-Time Signals Active</span>
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                Updated {lastRefreshedTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Trend Studies: <span className="text-gradient-magenta">Beauty Landscape Signals</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Real-time cosmetic intelligence, emerging active molecule velocity, viral skincare fact-checks, and clinical evidence breakdowns updated daily.
            </p>
          </div>

          {/* Refresh Action Button */}
          <button
            onClick={handleRefreshSignals}
            disabled={isRefreshing}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Scanning Signals...' : 'Refresh Industry Signals'}</span>
          </button>
        </div>

        {/* Live Ingredient Velocity Ticker */}
        <div className="pt-5 space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
            Trending Molecule Velocity & Consumer Search Surge:
          </span>

          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
            {tickers.map((t, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#080D10] border border-white/10 shrink-0 text-xs shadow-inner"
              >
                <span className="font-extrabold text-white">{t.molecule}</span>
                <span className={`font-mono font-extrabold text-[11px] ${
                  t.direction === 'up' ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {t.change}
                </span>
                <span className="text-[9px] uppercase font-bold text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                  {t.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search trend studies by active ingredient, topic, or viral trend..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl glass-input text-xs text-white placeholder-slate-500"
            />
          </div>

          <span className="text-xs text-slate-400 font-semibold text-right pr-1">
            Showing {filteredStudies.length} Trend Briefs
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#F94CAF]/20 text-[#F94CAF] border-[#F94CAF]/50 shadow-sm'
                  : 'bg-[#080D10] text-slate-400 border-white/10 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Micro-Blogs Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredStudies.map(study => (
          <div
            key={study.id}
            onClick={() => setActiveArticleModal(study)}
            className="group rounded-3xl glass-card glass-card-hover border border-white/10 overflow-hidden flex flex-col justify-between cursor-pointer transition-all bg-[#0E161C]"
          >
            <div>
              {/* Thumbnail Image */}
              <div className="relative w-full h-44 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E161C] via-transparent to-transparent"></div>
                
                {/* Category Pill Over Image */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#080D10]/80 backdrop-blur-md text-[#FF85D0] border border-white/10">
                    {study.categoryLabel}
                  </span>
                </div>

                {/* Velocity Tag */}
                <div className="absolute bottom-2 right-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/25 backdrop-blur-md text-amber-300 border border-amber-500/40">
                    {study.velocity}
                  </span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span>{study.date}</span>
                  <span>•</span>
                  <span>{study.readTime}</span>
                </div>

                <h3 className="text-base font-extrabold text-white group-hover:text-[#FF85D0] transition-colors line-clamp-2 leading-snug">
                  {study.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {study.excerpt}
                </p>
              </div>
            </div>

            {/* Footer Score & CTA */}
            <div className="px-5 py-4 border-t border-white/10 flex items-center justify-between bg-[#080D10]/50">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="font-extrabold text-[#F94CAF]">★ {study.truthScore}</span>
                <span className="text-[10px] text-slate-400 font-semibold">Evidence Score</span>
              </div>

              <span className="flex items-center gap-1 text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                <span>Read Brief</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full Article Modal */}
      <TrendBlogModal
        article={activeArticleModal}
        onClose={() => setActiveArticleModal(null)}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
          setActiveTab('scanner');
        }}
      />

    </div>
  );
}
