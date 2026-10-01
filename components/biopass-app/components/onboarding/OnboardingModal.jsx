import React, { useState } from 'react';
import { Dna, ShieldCheck, Sparkles, AlertTriangle, ArrowRight, CheckCircle2, X, Zap, Gamepad2 } from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function OnboardingModal() {
  const { isOnboardingOpen, closeOnboarding, setIsQuizOpen, setActiveTab, setActiveGameId } = useBioPass();
  const [slide, setSlide] = useState(0);

  if (!isOnboardingOpen) return null;

  const slides = [
    {
      badge: "Welcome to BioPass",
      title: "Skincare Intelligence Formulated for You",
      description: "Stop guessing which cosmetic formulas suit your skin. BioPass maps your unique skin biology against complete INCI ingredient formulations to ensure zero irritation and glowing barrier health.",
      icon: Dna,
      highlights: [
        "Personalized compatibility matching for your exact skin type",
        "Deep INCI safety, comedogenicity & EWG toxicology analysis",
        "Real-time clash detection between layered active treatments"
      ]
    },
    {
      badge: "Cosmetic Chemistry Arcade",
      title: "Learn Skincare Chemistry Through Fun Games",
      description: "New to skincare science? Play our 4 interactive games to discover your skin traits, formulate custom serums without chemical clashes, spot pore cloggers, and master the acid mantle pH scale.",
      icon: Gamepad2,
      highlights: [
        "Peer benchmarks: see how 70%+ of people your age compare",
        "Formulate active serums and avoid explosive molecular clashes",
        "Earn XP, unlock cosmetic chemist badges, and level up"
      ]
    },
    {
      badge: "Routine Harmony & Clash Guard",
      title: "Prevent Over-Exfoliation & Barrier Breakdowns",
      description: "Layering Retinol with strong AHAs or Vitamin C with Benzoyl Peroxide can destroy your acid mantle. BioPass watches over your AM/PM routine to ensure every product works in harmony.",
      icon: Zap,
      highlights: [
        "Active ingredient conflict matrix & alternate night suggestions",
        "Morning broad-spectrum SPF verification",
        "Daily routine checklist & streak accountability tracker"
      ]
    }
  ];

  const current = slides[slide];
  const Icon = current.icon;

  const handleStartArcade = () => {
    closeOnboarding();
    setActiveTab('arcade');
    setActiveGameId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in text-left">
      <div className="relative w-full max-w-xl bg-[#0E161C] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Background ambient glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#F94CAF]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#F94CAF]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={closeOnboarding}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
          title="Skip Tour"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Slide Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F94CAF] to-[#FF85D0] p-[2px] shadow-magenta-sm">
            <div className="w-full h-full bg-[#080D10] rounded-[14px] flex items-center justify-center">
              <Icon className="w-6 h-6 text-[#F94CAF]" />
            </div>
          </div>
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#F94CAF]/20 text-[#FF85D0] border border-[#F94CAF]/30">
              {current.badge}
            </span>
            <span className="block text-xs text-slate-400 font-semibold mt-0.5">
              Step {slide + 1} of {slides.length}
            </span>
          </div>
        </div>

        {/* Slide Content */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3">
          {current.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
          {current.description}
        </p>

        {/* Highlight Bullets */}
        <div className="space-y-2.5 mb-8 bg-[#080D10] p-4 rounded-2xl border border-white/10">
          {current.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#F94CAF] shrink-0 mt-0.5" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Navigation & CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
          {/* Step dots */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  slide === i ? 'w-6 bg-[#F94CAF]' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {slide < slides.length - 1 ? (
              <button
                onClick={() => setSlide(slide + 1)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleStartArcade}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all cursor-pointer"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>Enter Games Arcade</span>
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
