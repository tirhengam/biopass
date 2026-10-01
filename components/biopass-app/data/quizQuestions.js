export const QUIZ_QUESTIONS = [
  {
    id: "skin_type",
    step: 1,
    title: "How does your skin feel 2-3 hours after cleansing?",
    subtitle: "Understanding your basal sebum production and lipid barrier status.",
    multiSelect: false,
    options: [
      {
        id: "oily",
        label: "Shiny all over with visible excess oil",
        description: "Produces abundant sebum throughout the T-zone and cheeks.",
        icon: "Droplets",
        traits: { oiliness: 85, hydrationNeeds: 45, barrierStrength: 75, sensitivity: 30 }
      },
      {
        id: "combination",
        label: "Oily in the T-zone, normal to tight on cheeks",
        description: "Variable sebum activity depending on facial region.",
        icon: "SunMedium",
        traits: { oiliness: 60, hydrationNeeds: 65, barrierStrength: 65, sensitivity: 40 }
      },
      {
        id: "normal",
        label: "Balanced, neither uncomfortably tight nor greasy",
        description: "Optimal lipid barrier equilibrium and steady hydration.",
        icon: "Sparkles",
        traits: { oiliness: 45, hydrationNeeds: 50, barrierStrength: 85, sensitivity: 20 }
      },
      {
        id: "dry",
        label: "Tight, parched, or flaky without heavy moisturizer",
        description: "Low intrinsic sebum production requiring lipid replenishment.",
        icon: "FlameKindling",
        traits: { oiliness: 15, hydrationNeeds: 90, barrierStrength: 40, sensitivity: 60 }
      },
      {
        id: "sensitive",
        label: "Easily flushed, stings with products, or reactive",
        description: "Hyper-reactive nervous and vascular skin response.",
        icon: "ShieldAlert",
        traits: { oiliness: 40, hydrationNeeds: 80, barrierStrength: 30, sensitivity: 95 }
      }
    ]
  },
  {
    id: "concerns",
    step: 2,
    title: "What are your primary skin goals and concerns?",
    subtitle: "Select up to 3 priority targets for active ingredient matching.",
    multiSelect: true,
    maxSelect: 3,
    options: [
      {
        id: "acne",
        label: "Acne, Blemishes & Breakouts",
        description: "Clogged pores, blackheads, whiteheads, or cystic spots.",
        icon: "Flame",
        targetActives: ["Salicylic Acid", "Niacinamide", "Azelaic Acid", "Retinoids"]
      },
      {
        id: "hyperpigmentation",
        label: "Dark Spots & Uneven Tone",
        description: "Post-acne marks (PIH/PIE), sun spots, or melasma patches.",
        icon: "Sun",
        targetActives: ["Vitamin C", "Tranexamic Acid", "Alpha Arbutin", "Azelaic Acid", "Niacinamide"]
      },
      {
        id: "fine_lines",
        label: "Fine Lines & Loss of Firmness",
        description: "Premature aging, loss of elasticity, or dynamic wrinkles.",
        icon: "Activity",
        targetActives: ["Retinoids", "Peptides", "Hyaluronic Acid", "Glycolic Acid"]
      },
      {
        id: "barrier_damage",
        label: "Compromised Barrier & Dehydration",
        description: "Stinging, burning sensations, rough patches, or tightness.",
        icon: "Shield",
        targetActives: ["Ceramides", "Panthenol", "Centella Asiatica", "Squalane", "Colloidal Oatmeal"]
      },
      {
        id: "redness",
        label: "Redness & Rosacea Flushing",
        description: "Persistent facial erythema, visible capillaries, or irritation.",
        icon: "HeartPulse",
        targetActives: ["Azelaic Acid", "Centella Asiatica", "Colloidal Oatmeal", "Green Tea"]
      },
      {
        id: "enlarged_pores",
        label: "Enlarged Pores & Texture",
        description: "Rough skin texture, orange-peel pore appearance, dullness.",
        icon: "Grid",
        targetActives: ["Niacinamide", "Salicylic Acid", "PHA", "Glycolic Acid"]
      }
    ]
  },
  {
    id: "sensitivities",
    step: 3,
    title: "Do you experience reactions to any of these triggers?",
    subtitle: "We will flag products containing these specific irritants or allergens.",
    multiSelect: true,
    options: [
      {
        id: "fragrance",
        label: "Synthetic Fragrance / Perfumes",
        description: "Common cause of itching, contact dermatitis, or micro-bumps.",
        icon: "Wind"
      },
      {
        id: "essential_oils",
        label: "Essential Oils (Lavender, Citrus, Eucalyptus)",
        description: "Volatile terpenes (limonene, linalool) causing burning.",
        icon: "Leaf"
      },
      {
        id: "drying_alcohols",
        label: "Drying Alcohols (Alcohol Denat., Ethanol)",
        description: "Stripping solvents that irritate moisture barrier.",
        icon: "ZapOff"
      },
      {
        id: "fungal_acne",
        label: "Fungal Acne Prone (Malassezia)",
        description: "Triggered by fatty acids, lipid oils, and polysorbates.",
        icon: "AlertCircle"
      },
      {
        id: "none",
        label: "No known sensitivities",
        description: "Skin generally tolerates standard cosmetic ingredients.",
        icon: "CheckCircle2"
      }
    ]
  },
  {
    id: "climate",
    step: 4,
    title: "What is your typical daily environmental climate?",
    subtitle: "Environmental factors dictate ideal humectant vs. occlusive ratio.",
    multiSelect: false,
    options: [
      {
        id: "humid",
        label: "Humid & Tropical",
        description: "High ambient moisture; light gel textures preferred.",
        icon: "CloudRain"
      },
      {
        id: "arid",
        label: "Dry, Arid, or Heavy Air Conditioning",
        description: "Low humidity; requires barrier-sealing occlusives.",
        icon: "Wind"
      },
      {
        id: "temperate",
        label: "Moderate / Temperate Climate",
        description: "Seasonal transitions with balanced moisture levels.",
        icon: "Compass"
      },
      {
        id: "cold",
        label: "Cold & Freezing Winters",
        description: "Harsh wind and indoor heating stripping lipid layers.",
        icon: "Snowflake"
      }
    ]
  },
  {
    id: "tolerance",
    step: 5,
    title: "What is your experience level with active ingredients?",
    subtitle: "Helps us calibrate clash warnings and recommended potency.",
    multiSelect: false,
    options: [
      {
        id: "beginner",
        label: "Active Novice (Gentle / Minimal Actives)",
        description: "Never or rarely used Retinoids, Direct Acids, or Pure Vit C.",
        icon: "Sprout",
        exfoliationTolerance: 30
      },
      {
        id: "intermediate",
        label: "Moderate (Familiar with Gentle Exfoliants & Niacinamide)",
        description: "Regularly use mild actives without adverse reactions.",
        icon: "TrendingUp",
        exfoliationTolerance: 65
      },
      {
        id: "advanced",
        label: "Derm Veteran (Experienced with Retinol/Tretinoin & Strong Acids)",
        description: "Skin is well retinized and acclimated to clinical strength actives.",
        icon: "Zap",
        exfoliationTolerance: 90
      }
    ]
  }
];

export const DEFAULT_PROFILE = {
  skinType: "combination",
  concerns: ["acne", "hyperpigmentation"],
  sensitivities: ["fragrance"],
  climate: "temperate",
  tolerance: "intermediate",
  scores: {
    hydrationNeeds: 65,
    barrierResilience: 70,
    sensitivityIndex: 50,
    oilRegulation: 60,
    exfoliationTolerance: 65
  },
  name: "Guest Bio-Profile",
  completedAt: new Date().toISOString()
};
