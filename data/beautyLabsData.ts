export interface LabItem {
  id: string;
  emoji: string;
  name: string;
  tag: string;
  description: string;
  gameTitle: string;
  gameDescription: string;
  visualSummary: string;
  colors: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    badgeText: string;
    gradient: string;
  };
  sampleChallenge: {
    question: string;
    options: { text: string; correct: boolean; explanation: string }[];
  };
}

export const BEAUTY_LABS_DATA: LabItem[] = [
  {
    id: "ingredient-lab",
    emoji: "🧪",
    name: "Ingredient Lab",
    tag: "INCI & MOLECULES",
    description: "Learn to read INCI lists and discover what ingredients actually do.",
    gameTitle: "Ingredient Detective",
    gameDescription: "Unmask mysterious chemical names and trace where molecules come from.",
    visualSummary: "Droppers, ingredient molecules, gel textures, botanical + laboratory imagery.",
    colors: {
      bg: "bg-[#F2FAF6]",
      border: "border-[#C9EBD9]",
      text: "text-[#1B5E3C]",
      badgeBg: "bg-[#E1F5EC]",
      badgeText: "text-[#165636]",
      gradient: "from-[#E6F8EF] to-[#F7FEFB]"
    },
    sampleChallenge: {
      question: "Which ingredient is a humectant that attracts up to 1,000x its weight in water?",
      options: [
        { text: "Sodium Hyaluronate (Hyaluronic Acid)", correct: true, explanation: "Exactly! Sodium hyaluronate is a hydrophilic polysaccharide that binds water molecules to the skin's surface." },
        { text: "Dimethicone", correct: false, explanation: "Dimethicone is an occlusive silicone that prevents moisture loss rather than binding water." },
        { text: "Tocopherol", correct: false, explanation: "Tocopherol is Vitamin E, a potent lipid-soluble antioxidant." }
      ]
    }
  },
  {
    id: "formulation-lab",
    emoji: "🧴",
    name: "Formulation Lab",
    tag: "EMULSION CHEMISTRY",
    description: "Discover how ingredients become creams, serums, cleansers and more.",
    gameTitle: "Build a Moisturizer",
    gameDescription: "Balance water, oil, and emulsifiers to create a stable, silky cosmetic cream.",
    visualSummary: "Cream textures, emulsions, beakers and formulation imagery.",
    colors: {
      bg: "bg-[#FFF8F3]",
      border: "border-[#FFE2CE]",
      text: "text-[#9A4C1C]",
      badgeBg: "bg-[#FFEDE1]",
      badgeText: "text-[#8A3D11]",
      gradient: "from-[#FFF4EC] to-[#FFFAF6]"
    },
    sampleChallenge: {
      question: "What happens if you omit the emulsifier from an oil-in-water cosmetic cream?",
      options: [
        { text: "The mixture permanently blends into a clear gel", correct: false, explanation: "Without an amphiphilic molecule, polar water and non-polar oils cannot form stable micelles." },
        { text: "The oil and water phases separate into two distinct layers", correct: true, explanation: "Spot on! Emulsifiers have hydrophobic tails and hydrophilic heads that keep oil droplets dispersed in water." },
        { text: "The product evaporates instantly", correct: false, explanation: "Water may evaporate slowly, but the phases separate immediately due to surface tension." }
      ]
    }
  },
  {
    id: "skin-lab",
    emoji: "🧬",
    name: "Skin Lab",
    tag: "DERMAL BIOLOGY",
    description: "Explore the skin barrier, hydration, sebum and the biology behind skincare.",
    gameTitle: "Repair the Barrier",
    gameDescription: "Restore ceramides, cholesterol, and fatty acids to a compromised skin stratum.",
    visualSummary: "Scientific skin-barrier visualization, water droplets and lipid layers.",
    colors: {
      bg: "bg-[#FFF3F5]",
      border: "border-[#FFD2D9]",
      text: "text-[#9E2A3B]",
      badgeBg: "bg-[#FFE4E8]",
      badgeText: "text-[#8C1E2E]",
      gradient: "from-[#FFF0F2] to-[#FFFAF9]"
    },
    sampleChallenge: {
      question: "What is the primary cellular structure that makes up the protective skin barrier?",
      options: [
        { text: "The Stratum Corneum (Brick and Mortar model)", correct: true, explanation: "Corneocytes act as 'bricks' surrounded by an intercellular lipid matrix ('mortar') of ceramides, cholesterol, and fatty acids." },
        { text: "The Subcutaneous Adipose Tissue", correct: false, explanation: "Adipose tissue is the deeper fat layer beneath the dermis." },
        { text: "Collagen fibers only", correct: false, explanation: "Collagen is in the dermis layer providing tensile strength, not the superficial barrier." }
      ]
    }
  },
  {
    id: "hair-lab",
    emoji: "💇",
    name: "Hair Lab",
    tag: "CUTICLE & CORTEX",
    description: "Understand hair structure and discover how different hair products work.",
    gameTitle: "Build a Shampoo",
    gameDescription: "Formulate the ideal surfactant and conditioning balance for varied porosities.",
    visualSummary: "Hair-fiber macro imagery, bubbles, molecular structures.",
    colors: {
      bg: "bg-[#F6F4FF]",
      border: "border-[#DDD6FE]",
      text: "text-[#5B39A8]",
      badgeBg: "bg-[#EDE9FE]",
      badgeText: "text-[#4C2899]",
      gradient: "from-[#F1EDFF] to-[#FAF8FF]"
    },
    sampleChallenge: {
      question: "Why do low pH (slightly acidic, ~5.5) conditioners make hair look shiny and smooth?",
      options: [
        { text: "They flatten and seal the overlapping cuticle scales", correct: true, explanation: "Correct! Acidity closes the cuticle shingle layers, minimizing friction and reflecting light evenly." },
        { text: "They strip away all proteins inside the cortex", correct: false, explanation: "Stripping proteins weakens the hair shaft." },
        { text: "They dissolve all natural oils permanently", correct: false, explanation: "Conditioners deposit conditioning agents rather than dissolving natural lipids." }
      ]
    }
  },
  {
    id: "fragrance-lab",
    emoji: "👃",
    name: "Fragrance Lab",
    tag: "OLFACTIVE CHEMISTRY",
    description: "Explore fragrance molecules, notes and accords.",
    gameTitle: "Guess the Accord",
    gameDescription: "Identify volatility rates from fleeting top notes to lingering base fixatives.",
    visualSummary: "Fragrance molecules, transparent perfume liquid, botanical/scientific notes.",
    colors: {
      bg: "bg-[#F0F8FF]",
      border: "border-[#BAE6FD]",
      text: "text-[#0369A1]",
      badgeBg: "bg-[#E0F2FE]",
      badgeText: "text-[#025887]",
      gradient: "from-[#E6F4FE] to-[#F8FCFF]"
    },
    sampleChallenge: {
      question: "Why do citrus molecules (like Limonene) evaporate much faster than sandalwood (Santalol)?",
      options: [
        { text: "Citrus molecules have much lower molecular weight and higher vapor pressure", correct: true, explanation: "Bingo! Monoterpenes evaporate quickly as Top Notes, while heavy Sesquiterpenols linger for hours as Base Notes." },
        { text: "Citrus molecules are made of water", correct: false, explanation: "Aroma molecules are volatile hydrophobic organics, not water." },
        { text: "Sandalwood is chemically radioactive", correct: false, explanation: "Natural and synthetic aroma molecules are organic compounds, not radioactive." }
      ]
    }
  },
  {
    id: "color-lab",
    emoji: "🎨",
    name: "Color Lab",
    tag: "PIGMENT & LIGHT",
    description: "Discover color theory and the science behind cosmetic pigments.",
    gameTitle: "Build a Palette",
    gameDescription: "Mix iron oxides, mica, and lakes to balance undertones and light refraction.",
    visualSummary: "Pigment powders, color mixing and cosmetic textures.",
    colors: {
      bg: "bg-[#FFF4F7]",
      border: "border-[#FECDD6]",
      text: "text-[#BE185D]",
      badgeBg: "bg-[#FCE7F3]",
      badgeText: "text-[#9D174D]",
      gradient: "from-[#FFEBF1] to-[#FFF8FA]"
    },
    sampleChallenge: {
      question: "What mineral pigments are universally combined to create foundation skin shades?",
      options: [
        { text: "Red, Yellow, and Black Iron Oxides + Titanium Dioxide", correct: true, explanation: "Exactly! Combining the 3 primary iron oxides with white titanium dioxide allows cosmetic chemists to match any human skin undertone." },
        { text: "Pure synthetic neon food coloring", correct: false, explanation: "Water-soluble food dyes would streak with sweat and lack opacity." },
        { text: "Crushed charcoal only", correct: false, explanation: "Charcoal only provides black/grey tones." }
      ]
    }
  },
  {
    id: "claim-lab",
    emoji: "📣",
    name: "Claim Lab",
    tag: "EVIDENCE & LITERACY",
    description: "Learn how to question beauty advertising and investigate scientific evidence.",
    gameTitle: "Spot the Claim",
    gameDescription: "Distinguish between marketing buzzwords, in-vitro tests, and double-blind human trials.",
    visualSummary: "Fictional cosmetic packaging, magnifying glass and evidence testing.",
    colors: {
      bg: "bg-[#F3F4FD]",
      border: "border-[#C7D2FE]",
      text: "text-[#3730A3]",
      badgeBg: "bg-[#E0E7FF]",
      badgeText: "text-[#312E81]",
      gradient: "from-[#EBEEFF] to-[#F9FAFF]"
    },
    sampleChallenge: {
      question: "A bottle claims 'Dermatologist Tested'. What does this phrase legally guarantee about efficacy?",
      options: [
        { text: "It only means a dermatologist was involved in testing; it does not guarantee clinical superiority", correct: true, explanation: "Correct! 'Tested' can simply mean a doctor checked for acute irritancy on a small patch, not that it delivers miracle results." },
        { text: "It is an FDA-certified medical cure", correct: false, explanation: "Cosmetics cannot legally claim to cure or alter body structures like prescription drugs." },
        { text: "It guarantees 100% acne clearance for all users", correct: false, explanation: "No ethical clinical trial promises 100% efficacy across diverse human populations." }
      ]
    }
  },
  {
    id: "packaging-lab",
    emoji: "♻️",
    name: "Packaging Lab",
    tag: "SUSTAINABLE MATERIALS",
    description: "Explore packaging materials, recycling and more sustainable design choices.",
    gameTitle: "Design the Package",
    gameDescription: "Engineer lightweight, infinitely recyclable, or refillable cosmetic packaging.",
    visualSummary: "Glass, aluminum, plastic and paper materials as scientific objects.",
    colors: {
      bg: "bg-[#F0FAF7]",
      border: "border-[#B6E8DB]",
      text: "text-[#0F766E]",
      badgeBg: "bg-[#CCFBF1]",
      badgeText: "text-[#115E59]",
      gradient: "from-[#E6F7F2] to-[#F7FCFA]"
    },
    sampleChallenge: {
      question: "Why are monomaterial pumps easier to recycle than traditional cosmetic lotion pumps?",
      options: [
        { text: "They eliminate the internal metal spring, using 100% recyclable polyolefin throughout", correct: true, explanation: "Spot on! Traditional pumps mix stainless steel springs with multiple plastics that jam municipal optical sorting machines." },
        { text: "They dissolve into clean drinking water when thrown in the trash", correct: false, explanation: "Plastic packaging does not dissolve in water." },
        { text: "They are made entirely from crushed diamonds", correct: false, explanation: "Diamonds are carbon crystals, not flexible packaging polymers!" }
      ]
    }
  }
];
