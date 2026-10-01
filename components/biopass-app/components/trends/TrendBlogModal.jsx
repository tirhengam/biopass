import React, { useState } from 'react';
import { 
  X, Sparkles, TrendingUp, ShieldCheck, AlertTriangle, 
  FlaskConical, CheckCircle2, Bookmark, ArrowRight, Share2, 
  Clock, Calendar, Zap, Eye, ExternalLink, Dna 
} from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';
import { PRODUCTS_DATABASE } from '../../data/productsDatabase.js';

export default function TrendBlogModal({ article, onClose, onSelectProduct }) {
  const { showToast, bookmarks, toggleBookmark } = useBioPass();

  if (!article) return null;

  const matchedProduct = article.relatedProductId 
    ? PRODUCTS_DATABASE.find(p => p.id === article.relatedProductId)
    : null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link to Trend Brief copied to clipboard!", "success");
    }
  };

  const getTruthBadgeColor = (score) => {
    if (score >= 8.5) return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
    if (score >= 6.0) return "bg-amber-500/20 text-amber-300 border-amber-500/40";
    return "bg-rose-500/20 text-rose-300 border-rose-500/40";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in text-left">
      <div className="relative w-full max-w-3xl bg-[#0E161C] border border-white/15 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F94CAF]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Top Nav */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 z-10 bg-[#0E161C]/90 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#F94CAF]/20 text-[#FF85D0] border border-[#F94CAF]/30">
              {article.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-semibold hidden sm:inline">
              • {article.date}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-[#080D10] hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Share Article"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#080D10] hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1">
          
          {/* Article Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded-full font-extrabold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                {article.velocity}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {article.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-56 sm:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-lg">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D10] via-transparent to-transparent"></div>
          </div>

          {/* Clinical Truth vs Hype Score Meter */}
          <div className="p-5 rounded-2xl bg-[#080D10] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#F94CAF]/20 border border-[#F94CAF]/40 flex items-center justify-center text-[#F94CAF] font-extrabold text-lg shrink-0">
                {article.truthScore}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Clinical Evidence vs. Marketing Hype
                </span>
                <span className="text-sm font-extrabold text-white">
                  {article.truthVerdict}
                </span>
              </div>
            </div>

            <span className={`px-3 py-1 rounded-full text-xs font-extrabold border self-start sm:self-auto ${getTruthBadgeColor(article.truthScore)}`}>
              {article.truthScore >= 8 ? '✓ Science Backed' : (article.truthScore >= 5 ? '⚠️ Partial Science' : '✗ Debunked Claim')}
            </span>
          </div>

          {/* Key Bulleted Scientific Takeaways */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Key Dermatological Takeaways:
            </h3>
            <div className="space-y-2.5">
              {article.summary.map((point, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#080D10] border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#F94CAF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cosmetic Chemist's Expert Commentary */}
          <div className="p-5 rounded-2xl bg-[#F94CAF]/10 border border-[#F94CAF]/30 space-y-2 shadow-magenta-sm">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#FF85D0] uppercase tracking-wider">
              <FlaskConical className="w-4 h-4 text-[#F94CAF]" />
              <span>Cosmetic Chemist & Formulation Verdict</span>
            </div>
            <p className="text-xs sm:text-sm text-white font-medium leading-relaxed italic">
              “{article.chemistVerdict}”
            </p>
          </div>

          {/* Key Chemical Molecules */}
          {article.relatedInci && article.relatedInci.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
                Key Molecules Investigated:
              </span>
              <div className="flex flex-wrap gap-2">
                {article.relatedInci.map((ing, i) => (
                  <span key={i} className="px-3 py-1 rounded-xl text-xs font-bold bg-[#080D10] text-slate-200 border border-white/10">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Compatible BioPass Catalog Product Link */}
          {matchedProduct && (
            <div className="p-5 rounded-3xl bg-[#080D10] border border-white/10 space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F94CAF] block">
                Compatible Formula in BioPass Catalog:
              </span>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <img 
                    src={matchedProduct.image} 
                    alt={matchedProduct.name} 
                    className="w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0" 
                  />
                  <div className="truncate">
                    <span className="text-[10px] text-slate-400 block font-bold">{matchedProduct.brand}</span>
                    <h4 className="text-xs font-extrabold text-white truncate">{matchedProduct.name}</h4>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onSelectProduct(matchedProduct);
                    onClose();
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white text-xs font-extrabold shadow-magenta shrink-0 cursor-pointer"
                >
                  <span>Scan in BioPass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0E161C] flex items-center justify-between">
          <span className="text-xs text-slate-400 font-semibold">
            BioPass Intelligence • Peer Reviewed Signals
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition-colors cursor-pointer"
          >
            Close Brief
          </button>
        </div>

      </div>
    </div>
  );
}
