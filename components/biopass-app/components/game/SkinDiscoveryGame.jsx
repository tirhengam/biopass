import React, { useState } from 'react';
import { 
  Sparkles, Trophy, Award, Heart, ArrowRight, ArrowLeft, RefreshCw, 
  CheckCircle2, Users, Flame, Droplets, ShieldCheck, Zap, Star,
  Compass, Eye, ThumbsUp, PartyPopper, Smile, HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function SkinDiscoveryGame({ onCompleteToProfile }) {
  const { updateProfile, profile, showToast, addArcadeXp, setActiveGameId } = useBioPass();

  const [ageGroup, setAgeGroup] = useState('20s');
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [gameAnswers, setGameAnswers] = useState({});

  const ageLabels = {
    'teens': '16 - 22 (Gen-Z Teens)',
    '20s': '23 - 29 (Twenties)',
    '30s': '30 - 39 (Thirties)',
    '40s': '40 - 49 (Forties)',
    '50s': '50+ (Prime & Mature)'
  };

  const stages = [
    {
      id: "sebum",
      title: "Discovery #1: The T-Zone Blotting Challenge",
      subtitle: "Let's discover your natural lipid balance and oil production pattern!",
      interactivePrompt: "Imagine pressing a delicate blotting sheet against your forehead & nose 3 hours after washing. What happens?",
      icon: Droplets,
      options: [
        {
          id: "high_shine",
          label: "Sheet turns completely translucent with oil",
          tag: "High Sebum Activity",
          stats: {
            'teens': "78% of teens experience high T-zone shine due to hormonal oil activity.",
            '20s': "72% of people in their 20s deal with midday T-zone oiliness and shine.",
            '30s': "54% of people in their 30s maintain active T-zone sebum flow.",
            '40s': "38% of people in their 40s retain high oil production.",
            '50s': "24% of people in their 50s experience notable oiliness."
          },
          compliment: "✨ Natural Youth Shield! Your active sebum production keeps your epidermal moisture locked in and naturally delays deep expression lines.",
          skinTrait: "oily",
          sebumScore: 85
        },
        {
          id: "moderate_shine",
          label: "Mild shine on forehead and nose, normal cheeks",
          tag: "Combination Equilibrium",
          stats: {
            'teens': "62% of teens exhibit classic combination T-zone behavior.",
            '20s': "68% of people in their 20s have this exact balanced combination profile.",
            '30s': "65% of people in their 30s fall into this combination equilibrium.",
            '40s': "52% of people in their 40s maintain this classic T-zone balance.",
            '50s': "41% of people in their 50s experience combination zones."
          },
          compliment: "🌟 Golden Balance! Your skin demonstrates great natural adaptability between your cheeks and central T-zone.",
          skinTrait: "combination",
          sebumScore: 60
        },
        {
          id: "dry_parched",
          label: "Blotting sheet stays dry; skin feels slightly tight",
          tag: "Lipid-Seeking / Dry",
          stats: {
            'teens': "22% of teens experience barrier dehydration and tight skin.",
            '20s': "32% of people in their 20s experience tightness from indoor heating & AC.",
            '30s': "46% of people in their 30s notice reduced intrinsic oil production.",
            '40s': "62% of people in their 40s transition into lipid-seeking dry skin.",
            '50s': "76% of people in their 50s naturally produce less protective sebum."
          },
          compliment: "🌸 Refined Pores! Your dry profile means your facial pores stay naturally tight and free of heavy sebaceous filaments.",
          skinTrait: "dry",
          sebumScore: 20
        }
      ]
    },
    {
      id: "hydration",
      title: "Discovery #2: The Barrier Bounce & Snapback Test",
      subtitle: "Let's check your stratum corneum hydration and cellular water retention!",
      interactivePrompt: "Gently press your index finger against your cheek. Does it bounce back instantly or feel thirsty?",
      icon: Sparkles,
      options: [
        {
          id: "ultra_bouncy",
          label: "Instantly bounces back with plush, dewy cushion",
          tag: "High Plumpness",
          stats: {
            'teens': "82% of teens have naturally high water-binding glycosaminoglycans.",
            '20s': "64% of people in their 20s retain prime epidermal bounce.",
            '30s': "48% of people in their 30s maintain this plush level of moisture.",
            '40s': "35% of people in their 40s preserve this level of hydration bounce.",
            '50s': "22% of people in their 50s maintain prime skin cushion."
          },
          compliment: "💖 Exceptional Cellular Cushion! Your skin bounce is in the top tier for your age group — your hydration reserve is thriving!",
          hydrationScore: 88,
          barrierScore: 85
        },
        {
          id: "moderate_bounce",
          label: "Bounces back well, but can feel thirsty by afternoon",
          tag: "Transient Dehydration",
          stats: {
            'teens': "45% of teens experience transient water loss from cleansers.",
            '20s': "61% of people in their 20s experience afternoon water-evaporation.",
            '30s': "67% of people in their 30s need midday humectant replenishment.",
            '40s': "58% of people in their 40s benefit from hyaluronic acid layering.",
            '50s': "49% of people in their 50s experience standard moisture levels."
          },
          compliment: "🌿 High Potential! With a lightweight humectant like Hyaluronic Acid or Panthenol, your skin will easily stay radiant all day long.",
          hydrationScore: 65,
          barrierScore: 70
        },
        {
          id: "thirsty_rough",
          label: "Feels tight or looks slightly crepey when smiling",
          tag: "Compromised Moisture Bilayer",
          stats: {
            'teens': "18% of teens struggle with compromised barrier from harsh acne scrubs.",
            '20s': "39% of people in their 20s suffer from trans-epidermal water loss (TEWL).",
            '30s': "52% of people in their 30s experience barrier dehydration.",
            '40s': "64% of people in their 40s deal with barrier moisture depletion.",
            '50s': "78% of people in their 50s need richer ceramide reinforcements."
          },
          compliment: "💎 High Receptor Affinity! Your skin will respond with dramatic, rapid glowing transformation when introduced to barrier-loving Ceramides.",
          hydrationScore: 40,
          barrierScore: 45
        }
      ]
    },
    {
      id: "sensitivity",
      title: "Discovery #3: The Temperature & Reactivity Reaction",
      subtitle: "Let's discover your vascular resilience and sensitivity response!",
      interactivePrompt: "After a warm shower or trying a new scented lotion, how does your skin react?",
      icon: Heart,
      options: [
        {
          id: "resilient_calm",
          label: "Stays calm, even-toned, and rarely turns red or stings",
          tag: "Calibrated & Resilient",
          stats: {
            'teens': "55% of teens have resilient, non-reactive vascular thresholds.",
            '20s': "48% of people in their 20s enjoy high barrier tolerance.",
            '30s': "42% of people in their 30s have calm, non-sensitized skin.",
            '40s': "38% of people in their 40s maintain high tolerance to actives.",
            '50s': "35% of people in their 50s experience minimal reactivity."
          },
          compliment: "🛡️ Titanium Barrier! Your skin has remarkable resilience against environmental shifts and can easily tolerate clinical strength actives.",
          sensitivityScore: 25,
          toleranceScore: 85
        },
        {
          id: "mild_flushing",
          label: "Flushes pink with heat or exercise, but calms in 20 mins",
          tag: "Dynamic Vascular Response",
          stats: {
            'teens': "65% of teens experience temporary vascular flushing with exercise.",
            '20s': "58% of people in their 20s experience transient flushing or mild tingling.",
            '30s': "56% of people in their 30s report sensitive vascular responses.",
            '40s': "60% of people in their 40s notice heightened temperature sensitivity.",
            '50s': "64% of people in their 50s experience mild rosacea-like flushing."
          },
          compliment: "🌺 Vibrant Micro-Circulation! Healthy transient flushing indicates active blood flow delivering fresh oxygen and nutrients to your skin cells.",
          sensitivityScore: 55,
          toleranceScore: 60
        },
        {
          id: "hyper_reactive",
          label: "Easily stings, burns, or develops red patches with products",
          tag: "Hyper-Reactive / Sensitive",
          stats: {
            'teens': "28% of teens deal with acute skin sensitization and allergy.",
            '20s': "35% of people in their 20s have diagnosed sensitive or rosacea-prone skin.",
            '30s': "44% of people in their 30s deal with heightened ingredient reactivity.",
            '40s': "48% of people in their 40s require 100% fragrance-free routines.",
            '50s': "52% of people in their 50s experience sensitive lipid barriers."
          },
          compliment: "🌸 Sensitive & Intuitive! Your skin is an ultra-fast communicator that immediately signals what agrees with your biology.",
          sensitivityScore: 85,
          toleranceScore: 35
        }
      ]
    },
    {
      id: "texture",
      title: "Discovery #4: The Macro-Mirror & Pore Clarity Scan",
      subtitle: "Let's explore your pore architecture and post-blemish recovery!",
      interactivePrompt: "Looking closely in natural daylight at your nose and cheeks, what do you observe?",
      icon: Eye,
      options: [
        {
          id: "smooth_refined",
          label: "Fine, nearly invisible pores with very smooth texture",
          tag: "Refined Silk Texture",
          stats: {
            'teens': "30% of teens have naturally microscopic pore diameters.",
            '20s': "36% of people in their 20s have smooth, minimal pore visibility.",
            '30s': "42% of people in their 30s maintain refined cheek texture.",
            '40s': "45% of people in their 40s enjoy smooth skin surface.",
            '50s': "50% of people in their 50s have very refined pore visibility."
          },
          compliment: "✨ Glass-Skin Canvas! Your pore structure is exceptionally smooth and refined — a dream foundation for dewy hydration!",
          poreClarity: "refined",
          concern: "fine_lines"
        },
        {
          id: "tzone_pores",
          label: "Visible pores around the nose & occasional dark marks",
          tag: "Active Follicles & Hyperpigmentation",
          stats: {
            'teens': "84% of teens have visible sebaceous filaments and post-acne spots.",
            '20s': "76% of people in their 20s experience post-breakout dark marks (PIH).",
            '30s': "68% of people in their 30s target dark spots and T-zone pores.",
            '40s': "58% of people in their 40s experience uneven pigment and pores.",
            '50s': "52% of people in their 50s have sun-induced dark patches."
          },
          compliment: "🌟 Super Responsive! Post-inflammatory marks respond with lightning speed to Niacinamide and Vitamin C!",
          poreClarity: "active",
          concern: "hyperpigmentation"
        },
        {
          id: "congestion_blemish",
          label: "Frequent blackheads, white bumps, or hormonal breakout spots",
          tag: "Acneic Cellular Turnover",
          stats: {
            'teens': "88% of teens navigate frequent breakout cycles and bumps.",
            '20s': "70% of people in their 20s experience hormonal jawline or chin acne.",
            '30s': "49% of people in their 30s manage adult hormonal acne.",
            '40s': "32% of people in their 40s experience periodic breakout flares.",
            '50s': "18% of people in their 50s experience blemish breakouts."
          },
          compliment: "🔥 Fast Cellular Renewal! Acne-prone skin naturally turns over epidermal cells faster than average, keeping skin vital and regenerative.",
          poreClarity: "congested",
          concern: "acne"
        }
      ]
    },
    {
      id: "aging",
      title: "Discovery #5: Dynamic Expression & Elasticity Reflection",
      subtitle: "Let's discover your natural collagen density and expression bounce!",
      interactivePrompt: "When you smile or raise your eyebrows and relax, how does your skin settle?",
      icon: Smile,
      options: [
        {
          id: "zero_lines",
          label: "Skin snaps back immediately with virtually no lingering lines",
          tag: "High Collagen Density",
          stats: {
            'teens': "95% of teens have maximum collagen density and spring.",
            '20s': "78% of people in their 20s have zero resting expression lines.",
            '30s': "48% of people in their 30s have minimal resting lines.",
            '40s': "30% of people in their 40s preserve this high level of firmness.",
            '50s': "18% of people in their 50s maintain this level of elasticity."
          },
          compliment: "🏆 Collagen Superpower! Your fine line depth is noticeably lower than the average for your age group — your dermal matrix is pristine!",
          agingProfile: "youthful",
          fineLineScore: 15
        },
        {
          id: "subtle_lines",
          label: "Gentle smile lines or fine hydration creases under eyes",
          tag: "Natural Dynamic Expressions",
          stats: {
            'teens': "25% of teens notice slight dehydration lines under eyes.",
            '20s': "62% of people in their 20s notice subtle smile or laughter lines.",
            '30s': "74% of people in their 30s have dynamic expression contouring.",
            '40s': "82% of people in their 40s have defined expression lines.",
            '50s': "89% of people in their 50s have natural character lines."
          },
          compliment: "✨ Beautiful Warmth & Character! Subtle smile lines add genuine radiance, and they plump up instantly with peptides and hydration.",
          agingProfile: "moderate",
          fineLineScore: 45
        },
        {
          id: "defined_lines",
          label: "Noticeable forehead lines or smile lines that stay visible at rest",
          tag: "Evolving Collagen Matrix",
          stats: {
            'teens': "8% of teens show early forehead expression patterns.",
            '20s': "28% of people in their 20s have visible resting expression lines.",
            '30s': "58% of people in their 30s notice deepening expression lines.",
            '40s': "79% of people in their 40s have established expression lines.",
            '50s': "91% of people in their 50s embrace graceful maturity lines."
          },
          compliment: "🌟 Prime Retinoid Receptivity! Your skin is primed to benefit exponentially from Retinaldehyde and Matrixyl Peptides to boost fresh collagen.",
          agingProfile: "mature",
          fineLineScore: 75
        }
      ]
    }
  ];

  const current = stages[currentStage];
  const Icon = current?.icon || Sparkles;
  const isLastStage = currentStage === stages.length - 1;

  const handleSelectOption = (opt) => {
    setSelectedOption(opt);
    setShowFeedback(true);
    setGameAnswers({
      ...gameAnswers,
      [current.id]: opt
    });
  };

  const handleNextStage = () => {
    if (isLastStage) {
      addArcadeXp(300, "Bio-Discovery Master 🧬");
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#F94CAF', '#FF6EC7', '#FFD166', '#06D6A0']
        });
      } catch (e) {
        console.log(e);
      }
      setShowFeedback(true);
      setCurrentStage(stages.length);
    } else {
      setCurrentStage(currentStage + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const handleApplyDiscoveredProfile = () => {
    const sebumOpt = gameAnswers['sebum'] || stages[0].options[1];
    const hydraOpt = gameAnswers['hydration'] || stages[1].options[0];
    const sensOpt = gameAnswers['sensitivity'] || stages[2].options[1];
    const textOpt = gameAnswers['texture'] || stages[3].options[1];
    const agingOpt = gameAnswers['aging'] || stages[4].options[0];

    const discoveredProfile = {
      skinType: sebumOpt.skinTrait || 'combination',
      concerns: [textOpt.concern || 'acne', agingOpt.fineLineScore > 40 ? 'fine_lines' : 'barrier_damage'],
      sensitivities: sensOpt.sensitivityScore > 50 ? ['fragrance'] : ['none'],
      climate: profile.climate || 'temperate',
      tolerance: sensOpt.toleranceScore > 70 ? 'advanced' : (sensOpt.toleranceScore > 45 ? 'intermediate' : 'beginner'),
      scores: {
        hydrationNeeds: hydraOpt.hydrationScore || 70,
        barrierResilience: hydraOpt.barrierScore || 75,
        sensitivityIndex: sensOpt.sensitivityScore || 45,
        oilRegulation: sebumOpt.sebumScore || 60,
        exfoliationTolerance: sensOpt.toleranceScore || 65
      },
      name: `${ageGroup.toUpperCase()} Game Bio-Profile`,
      completedAt: new Date().toISOString()
    };

    updateProfile(discoveredProfile);
    showToast("✨ Discovered Bio-Profile applied to BioPass engine!", "success");
    if (onCompleteToProfile) {
      onCompleteToProfile();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 text-left animate-fade-in">
      
      {/* Game Header Banner */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-white/10 p-6 sm:p-8 shadow-2xl bg-gradient-to-br from-[#111A20] via-[#0E161C] to-[#080D10]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F94CAF]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F94CAF] to-[#FF85D0] p-[2px] shadow-magenta flex items-center justify-center">
              <div className="w-full h-full bg-[#080D10] rounded-[14px] flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#F94CAF]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#F94CAF]/20 text-[#F94CAF] border border-[#F94CAF]/40">
                  Beginner Friendly Discovery Quest
                </span>
                <span className="text-xs text-slate-400 font-semibold hidden sm:inline">
                  Interactive Micro-Tests
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-0.5">
                Skin Bio-Discovery Game
              </h2>
            </div>
          </div>

          {/* Age Bracket Selector */}
          <div className="flex items-center gap-2 bg-[#080D10] p-1.5 rounded-2xl border border-white/10">
            <span className="text-[11px] font-bold text-slate-400 pl-2">Your Age Group:</span>
            <select
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              className="bg-[#111A20] px-3 py-1.5 rounded-xl text-xs font-bold text-white border border-white/10 focus:border-[#F94CAF] focus:outline-none shadow-sm cursor-pointer"
            >
              {Object.entries(ageLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Progress Tracker */}
        {currentStage < stages.length ? (
          <div className="pt-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#FF85D0] uppercase tracking-wider">
                Discovery Stage {currentStage + 1} of {stages.length}
              </span>
              <span className="text-slate-400">
                {Math.round(((currentStage) / stages.length) * 100)}% Discovered
              </span>
            </div>
            <div className="w-full bg-slate-800/80 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#F94CAF] via-[#FF65C5] to-[#E03597] h-full rounded-full transition-all duration-500 shadow-magenta-sm"
                style={{ width: `${((currentStage + 1) / stages.length) * 100}%` }}
              />
            </div>
          </div>
        ) : null}
      </div>

      {/* Main Game Stage Area */}
      {currentStage < stages.length ? (
        <div className="rounded-3xl glass-card border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6 bg-[#0E161C]/90 animate-fade-in">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-[#F94CAF]">
              <div className="p-2 rounded-xl bg-[#F94CAF]/15 text-[#F94CAF]">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                {current.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.subtitle}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#080D10] border border-white/10 text-slate-200 text-xs sm:text-sm font-semibold flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#F94CAF] shrink-0" />
            <span>{current.interactivePrompt}</span>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {current.options.map(option => {
              const isSelected = selectedOption?.id === option.id;
              return (
                <div
                  key={option.id}
                  onClick={() => handleSelectOption(option)}
                  className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#F94CAF]/15 border-[#F94CAF] shadow-magenta-sm ring-2 ring-[#F94CAF]/30'
                      : 'bg-[#080D10] border-white/10 hover:border-[#F94CAF]/50 hover:bg-[#121B22]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-slate-300">
                        {option.tag}
                      </span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected ? 'bg-[#F94CAF] border-[#F94CAF] text-white' : 'border-slate-700'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {option.label}
                    </p>
                  </div>

                  <span className="mt-4 text-[11px] font-bold text-[#F94CAF] block">
                    {isSelected ? '✓ Selected' : 'Tap to choose'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Real-Time Demographic & Compliment Feedback Section */}
          {showFeedback && selectedOption && (
            <div className="space-y-3.5 pt-2 animate-fade-in">
              
              {/* Demographic Insight Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#080D10] border border-white/10 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#F94CAF]/15 text-[#F94CAF] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-white/10 text-white">
                      Peer Demographic Benchmark
                    </span>
                    <span className="text-xs font-bold text-[#FF85D0]">
                      {ageLabels[ageGroup]} Group
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 leading-relaxed">
                    {selectedOption.stats[ageGroup] || selectedOption.stats['20s']}
                  </p>
                </div>
              </div>

              {/* Personalized Compliment Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F94CAF]/10 border border-[#F94CAF]/40 flex items-start gap-3.5 shadow-magenta-sm">
                <div className="p-2.5 rounded-xl bg-[#F94CAF] text-white shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold text-[#FF85D0] uppercase tracking-wider block">
                    Personalized Biology Compliment
                  </span>
                  <p className="text-xs sm:text-sm text-white font-bold mt-0.5 leading-relaxed">
                    {selectedOption.compliment}
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* Continue / Next Stage Action */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                if (currentStage > 0) {
                  setCurrentStage(currentStage - 1);
                  setSelectedOption(null);
                  setShowFeedback(false);
                }
              }}
              disabled={currentStage === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold ${
                currentStage === 0 ? 'opacity-40 cursor-not-allowed text-slate-600' : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNextStage}
              disabled={!selectedOption}
              className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>{isLastStage ? 'Reveal Complete Discovery Bio-Passport' : 'Unlock Next Discovery'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : (
        /* Final Celebration & Summary Screen */
        <div className="rounded-3xl glass-card border border-[#F94CAF]/40 p-8 sm:p-10 shadow-2xl bg-[#0E161C] space-y-8 text-center animate-fade-in">
          
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-[#F94CAF] to-[#FF85D0] p-[2px] shadow-magenta flex items-center justify-center">
            <div className="w-full h-full bg-[#080D10] rounded-[22px] flex items-center justify-center text-[#F94CAF]">
              <Trophy className="w-10 h-10 animate-bounce" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#F94CAF]/20 text-[#FF85D0] border border-[#F94CAF]/40">
              Quest Complete • 5/5 Physical Traits Mapped (+300 XP)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Your Physical Skin Bio-Passport is Ready!
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              We've successfully mapped your sebum behavior, hydration bounce, vascular resilience, and cellular turnover compared to thousands of peers in your {ageLabels[ageGroup]} group.
            </p>
          </div>

          {/* Discovered Badges Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
            <div className="p-4 rounded-2xl bg-[#080D10] border border-white/10">
              <span className="text-[10px] font-extrabold text-[#F94CAF] uppercase block">Discovered Sebum</span>
              <span className="text-sm font-extrabold text-white mt-0.5 block capitalize">
                {gameAnswers['sebum']?.tag || "Combination Equilibrium"}
              </span>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Balanced natural lipid barrier
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#080D10] border border-white/10">
              <span className="text-[10px] font-extrabold text-[#F94CAF] uppercase block">Hydration Cushion</span>
              <span className="text-sm font-extrabold text-white mt-0.5 block">
                {gameAnswers['hydration']?.tag || "High Plumpness"}
              </span>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Top 20% bounce for {ageGroup}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#080D10] border border-white/10">
              <span className="text-[10px] font-extrabold text-[#F94CAF] uppercase block">Vascular Defense</span>
              <span className="text-sm font-extrabold text-white mt-0.5 block">
                {gameAnswers['sensitivity']?.tag || "Calibrated & Resilient"}
              </span>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Ready for active treatments
              </span>
            </div>
          </div>

          {/* Action to Sync to BioPass Engine */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleApplyDiscoveredProfile}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white font-extrabold text-sm shadow-magenta transition-all cursor-pointer"
            >
              <Sparkles className="w-5 h-5" />
              <span>Apply Discovered Profile to BioPass</span>
            </button>

            <button
              onClick={() => {
                setCurrentStage(0);
                setSelectedOption(null);
                setShowFeedback(false);
                setGameAnswers({});
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Replay Discovery Quest</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
