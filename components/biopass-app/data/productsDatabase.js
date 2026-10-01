export const PRODUCTS_DATABASE = [
  {
    id: "cerave-hydrating-cleanser",
    name: "Hydrating Facial Cleanser",
    brand: "CeraVe",
    category: "cleanser",
    step: "cleanser",
    price: "$15.99",
    size: "16 fl oz / 473 ml",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A gentle, non-foaming lotion cleanser with 3 essential ceramides and hyaluronic acid to cleanse without disrupting the skin barrier.",
    ph: "5.5",
    suitableTime: ["am", "pm"],
    targetSkinTypes: ["dry", "normal", "sensitive", "compromised_barrier"],
    tags: ["Ceramides", "Fragrance-Free", "Non-Comedogenic", "Barrier-Safe"],
    inciList: [
      "Water", "Glycerin", "Cetearyl Alcohol", "PEG-40 Stearate", "Stearyl Alcohol", 
      "Potassium Phosphate", "Ceramide NP", "Ceramide AP", "Ceramide EOP", "Carbomer", 
      "Glyceryl Stearate", "Behentrimonium Methosulfate", "Sodium Lauroyl Lactylate", 
      "Sodium Hyaluronate", "Cholesterol", "Phenoxyethanol", "Disodium EDTA", 
      "Dipotassium Phosphate", "Tocopherol", "Phytosphingosine", "Xanthan Gum", "Ethylhexylglycerin"
    ]
  },
  {
    id: "paulas-choice-2-bha-liquid",
    name: "Skin Perfecting 2% BHA Liquid Exfoliant",
    brand: "Paula's Choice",
    category: "exfoliant",
    step: "treatment",
    price: "$34.00",
    size: "4 fl oz / 118 ml",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A cult-favorite liquid leave-on exfoliant with 2% salicylic acid and green tea to unclog pores, smooth wrinkles, and brighten skin tone.",
    ph: "3.5 - 3.9",
    suitableTime: ["pm"],
    targetSkinTypes: ["oily", "combination", "acne", "enlarged_pores"],
    tags: ["2% Salicylic Acid", "Pore Refining", "BHA Exfoliant", "Green Tea"],
    inciList: [
      "Water", "Methylpropanediol", "Butylene Glycol", "Salicylic Acid", 
      "Polysorbate 20", "Camellia Sinensis Leaf Extract", "Sodium Hydroxide", 
      "Tetrasodium EDTA"
    ]
  },
  {
    id: "the-ordinary-niacinamide-zinc",
    name: "Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    category: "serum",
    step: "serum",
    price: "$6.50",
    size: "1 fl oz / 30 ml",
    image: "https://images.unsplash.com/photo-1608248597359-00f723ea6d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "High-strength vitamin and mineral blemish formula that reduces the appearance of skin blemishes, congestion, and balances sebum activity.",
    ph: "5.5 - 6.5",
    suitableTime: ["am", "pm"],
    targetSkinTypes: ["oily", "combination", "acne", "hyperpigmentation"],
    tags: ["10% Niacinamide", "Zinc PCA", "Sebum Control", "Blemish Treatment"],
    inciList: [
      "Water", "Niacinamide", "Pentylene Glycol", "Zinc PCA", "Dimethyl Isosorbide", 
      "Tamarindus Indica Seed Gum", "Xanthan Gum", "Isoceteth-20", "Ethoxydiglycol", 
      "Phenoxyethanol", "Chlorphenesin"
    ]
  },
  {
    id: "skinceuticals-ce-ferulic",
    name: "C E Ferulic Antioxidant Serum",
    brand: "SkinCeuticals",
    category: "serum",
    step: "serum",
    price: "$182.00",
    size: "1 fl oz / 30 ml",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Patented daytime Vitamin C serum with 15% pure L-ascorbic acid, 1% alpha tocopherol, and 0.5% ferulic acid delivering advanced environmental protection.",
    ph: "2.5 - 3.0",
    suitableTime: ["am"],
    targetSkinTypes: ["normal", "dry", "combination", "anti_aging", "hyperpigmentation"],
    tags: ["15% L-Ascorbic Acid", "Ferulic Acid", "Gold Standard", "Antioxidant"],
    inciList: [
      "Water", "Ethoxydiglycol", "Ascorbic Acid", "Glycerin", "Propylene Glycol", 
      "Laureth-23", "Tocopherol", "Ferulic Acid", "Panthenol", "Triethanolamine", 
      "Phenoxyethanol"
    ]
  },
  {
    id: "cosrx-advanced-snail-96-mucin",
    name: "Advanced Snail 96 Mucin Power Essence",
    brand: "COSRX",
    category: "essence",
    step: "essence",
    price: "$25.00",
    size: "3.38 fl oz / 100 ml",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Formulated with 96.3% Snail Secretion Filtrate, this lightweight essence hydrates, repairs compromised moisture barriers, and improves elasticity.",
    ph: "6.5 - 7.0",
    suitableTime: ["am", "pm"],
    targetSkinTypes: ["dry", "dehydrated", "sensitive", "barrier_damage", "acne"],
    tags: ["96% Snail Mucin", "Hydrating Essence", "Barrier Repair", "K-Beauty"],
    inciList: [
      "Snail Secretion Filtrate", "Betaine", "Caprylic/Capric Triglyceride", 
      "Cetearyl Olivate", "Sorbitan Olivate", "Sodium Hyaluronate", "Cetearyl Alcohol", 
      "Stearic Acid", "Arginine", "Dimethicone", "Carbomer", "Panthenol", 
      "Allantoin", "Sodium Polyacrylate", "1,2-Hexanediol", "Phenoxyethanol"
    ]
  },
  {
    id: "la-roche-posay-anthelios-uvmune-spf50",
    name: "Anthelios UVMune 400 Invisible Fluid SPF 50+",
    brand: "La Roche-Posay",
    category: "sunscreen",
    step: "sunscreen",
    price: "$28.00",
    size: "1.7 fl oz / 50 ml",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Ultimate broad-spectrum sunscreen powered by Mexoryl 400 filter against ultra-long UVA rays, with an invisible, non-greasy, water-resistant finish.",
    ph: "6.0",
    suitableTime: ["am"],
    targetSkinTypes: ["sensitive", "oily", "combination", "normal", "sun_protection"],
    tags: ["SPF 50+", "Mexoryl 400", "Invisible Shield", "Broad Spectrum UVA/UVB"],
    inciList: [
      "Water", "Alcohol Denat.", "Triethyl Citrate", "Diisopropyl Sebacate", 
      "Silica", "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine", "Ethylhexyl Salicylate", 
      "Ethylhexyl Triazone", "Butyl Methoxydibenzoylmethane", "Glycerin", 
      "Propanediol", "C12-22 Alkyl Acrylate/Hydroxyethylacrylate Copolymer", 
      "Tocopherol", "Caprylic/Capric Triglyceride"
    ]
  },
  {
    id: "beauty-of-joseon-relief-sun",
    name: "Relief Sun: Rice + Probiotics SPF50+ PA++++",
    brand: "Beauty of Joseon",
    category: "sunscreen",
    step: "sunscreen",
    price: "$18.00",
    size: "1.69 fl oz / 50 ml",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Organic chemical sunscreen infused with 30% Rice Extract and Grain Ferment Lysate that glides like a hydrating cream with zero white cast.",
    ph: "6.5",
    suitableTime: ["am"],
    targetSkinTypes: ["dry", "normal", "sensitive", "combination"],
    tags: ["Rice Extract", "Probiotics", "Zero White Cast", "Chemical SPF 50+"],
    inciList: [
      "Water", "Oryza Sativa (Rice) Extract", "Ethylhexyl Triazone", 
      "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine", "Diethylamino Hydroxybenzoyl Hexyl Benzoate", 
      "Niacinamide", "Glycerin", "Centella Asiatica Extract", "Camellia Sinensis Leaf Extract", 
      "Lactobacillus/Rice Ferment", "Tocopherol"
    ]
  },
  {
    id: "medik8-crystal-retinal-3",
    name: "Crystal Retinal 3 (0.03% Retinaldehyde)",
    brand: "Medik8",
    category: "treatment",
    step: "treatment",
    price: "$65.00",
    size: "1.0 fl oz / 30 ml",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Next-generation night serum with encapsulated retinaldehyde, hyaluronic acid, and Vitamin E that works 11x faster than standard retinol.",
    ph: "6.0",
    suitableTime: ["pm"],
    targetSkinTypes: ["anti_aging", "fine_lines", "acne", "hyperpigmentation"],
    tags: ["0.03% Retinal", "Crystal Encapsulated", "Collagen Inducer", "Night Treatment"],
    inciList: [
      "Water", "Caprylic/Capric Triglyceride", "Glycerin", "Isododecane", 
      "Cetearyl Olivate", "Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer", 
      "Cetearyl Alcohol", "Squalane", "Retinal", "Sodium Hyaluronate", 
      "3-O-Ethyl Ascorbic Acid", "Tocopherol", "Ectoin", "Phenoxyethanol"
    ]
  },
  {
    id: "dr-jart-cicapair-cream",
    name: "Cicapair Tiger Grass Barrier Repair Cream",
    brand: "Dr. Jart+",
    category: "moisturizer",
    step: "moisturizer",
    price: "$52.00",
    size: "1.69 fl oz / 50 ml",
    image: "https://images.unsplash.com/photo-1608248597359-00f723ea6d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Soothing barrier repair cream loaded with Centella Asiatica complex (Madecassoside, Asiaticoside) and peptides to neutralize redness and calm reactive skin.",
    ph: "5.8",
    suitableTime: ["am", "pm"],
    targetSkinTypes: ["sensitive", "redness", "rosacea", "compromised_barrier", "dry"],
    tags: ["Centella Asiatica", "Madecassoside", "Redness Relief", "Barrier Fortifier"],
    inciList: [
      "Water", "Centella Asiatica Extract", "Caprylic/Capric Triglyceride", 
      "Glycerin", "Butylene Glycol", "Propanediol", "Panthenol", 
      "Madecassoside", "Asiaticoside", "Asiatic Acid", "Madecassic Acid", 
      "Niacinamide", "Allantoin", "Ceramide NP", "Colloidal Oatmeal"
    ]
  },
  {
    id: "the-ordinary-glycolic-acid-toner",
    name: "Glycolic Acid 7% Exfoliating Toner",
    brand: "The Ordinary",
    category: "toner",
    step: "toner",
    price: "$13.00",
    size: "8 fl oz / 240 ml",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Water-based resurfacing toner formulated with 7% glycolic acid, Tasmanian Pepperberry, and Aloe Vera to target dullness and texture.",
    ph: "3.5 - 3.7",
    suitableTime: ["pm"],
    targetSkinTypes: ["dullness", "uneven_texture", "hyperpigmentation"],
    tags: ["7% Glycolic Acid", "AHA Toner", "Tasmanian Pepperberry", "Resurfacing"],
    inciList: [
      "Water", "Glycolic Acid", "Rosa Damascena Flower Water", "Centaurea Cyanus Flower Water", 
      "Aloe Barbadensis Leaf Water", "Propanediol", "Glycerin", "Triethanolamine", 
      "Aminomethyl Propanol", "Panax Ginseng Root Extract", "Tasmannia Lanceolata Fruit Extract", 
      "Aspartic Acid", "Alanine", "Glycine", "Serine", "Valine", "Isoleucine", "Proline"
    ]
  },
  {
    id: "farmacy-honeymoon-glow",
    name: "10% AHA + 1% BHA Resurfacing Night Serum",
    brand: "Farmacy",
    category: "exfoliant",
    step: "treatment",
    price: "$60.00",
    size: "1.0 fl oz / 30 ml",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Potent 3-in-1 multi-acid blend featuring Lactic, Glycolic, Citric, and Fruit Acids plus Salicylic Acid and proprietary Buckwheat Honey to clarify pores and hydrate.",
    ph: "3.4",
    suitableTime: ["pm"],
    targetSkinTypes: ["combination", "oily", "dullness", "uneven_texture"],
    tags: ["10% AHA", "1% BHA", "Hibiscus Flower Acid", "Honey Blend"],
    inciList: [
      "Water", "Lactic Acid", "Propanediol", "Jojoba Esters", "Glycolic Acid", 
      "Potassium Hydroxide", "Salicylic Acid", "Honey Extract", "Gluconolactone", 
      "Hyaluronic Acid", "Centella Asiatica Extract", "Caprylic/Capric Triglyceride"
    ]
  },
  {
    id: "glossier-priming-moisturizer-rich",
    name: "Priming Moisturizer Rich (Heavy Fragranced / High Lipid)",
    brand: "Glossier",
    category: "moisturizer",
    step: "moisturizer",
    price: "$35.00",
    size: "1.7 fl oz / 50 ml",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A rich, buttery face cream with ceramides and shea butter, but containing heavy lavender essential oils and high comedogenic esters.",
    ph: "5.5",
    suitableTime: ["am", "pm"],
    targetSkinTypes: ["dry_non_sensitive"],
    tags: ["Heavy Emollient", "Fragrance Included", "Shea Butter", "Rich Cream"],
    inciList: [
      "Water", "Caprylic/Capric Triglyceride", "Isopropyl Myristate", "Ethylhexyl Palmitate", 
      "Cocos Nucifera (Coconut) Oil", "Glycerin", "Cetearyl Alcohol", "Ceramide NP", 
      "Fragrance / Parfum", "Limonene", "Linalool", "Phenoxyethanol"
    ]
  }
];
