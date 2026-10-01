import { parseIngredients } from "./ingredientParser.js";

/**
 * Evaluates the BioPass Compatibility Score for a given product or INCI list against user skin profile
 */
export function calculateCompatibility(productOrInci, userProfile) {
  const profile = userProfile || {
    skinType: 'combination',
    concerns: ['acne'],
    sensitivities: ['fragrance'],
    climate: 'temperate',
    tolerance: 'intermediate'
  };

  const parsedData = Array.isArray(productOrInci?.inciList) 
    ? parseIngredients(productOrInci.inciList)
    : (typeof productOrInci === 'string' ? parseIngredients(productOrInci) : parseIngredients(productOrInci?.ingredients || []));

  const {
    ingredients,
    highestComedogenic,
    highestIrritancy,
    flaggedAllergens,
    flaggedComedogenic,
    flaggedFungalAcneTriggers,
    activeIngredients
  } = parsedData;

  let score = 80;
  const pros = [];
  const cons = [];
  const warnings = [];

  // --- 1. CONCERN ALIGNMENT ---
  let concernMatchPoints = 0;
  const matchedActivesForConcerns = new Set();

  profile.concerns.forEach(concern => {
    ingredients.forEach(ing => {
      if (ing.goodFor && ing.goodFor.includes(concern)) {
        matchedActivesForConcerns.add({
          ingredient: ing.name,
          concern
        });
      }
    });
  });

  const uniqueBeneficialCount = matchedActivesForConcerns.size;
  if (uniqueBeneficialCount > 0) {
    concernMatchPoints = Math.min(20, uniqueBeneficialCount * 6);
    score += concernMatchPoints;
    
    // Pick top 3 pros
    const uniqueIngNames = Array.from(new Set(Array.from(matchedActivesForConcerns).map(i => i.ingredient)));
    pros.push({
      type: "benefit",
      title: "Direct Concern Synergy",
      text: `Contains ${uniqueIngNames.slice(0, 3).join(", ")}, which clinically target your selected goals (${profile.concerns.join(", ").replace(/_/g, " ")}).`
    });
  } else {
    score -= 5;
    cons.push({
      type: "neutral",
      title: "No Specific Target Actives",
      text: "This formula provides basic hydration/cleansing but lacks targeted high-potency actives for your primary skin concerns."
    });
  }

  // --- 2. SKIN TYPE & BARRIER COMPATIBILITY ---
  const isAcneProne = profile.concerns.includes('acne') || profile.skinType === 'oily';
  const isSensitive = profile.skinType === 'sensitive' || profile.sensitivities.includes('fragrance') || profile.concerns.includes('barrier_damage') || profile.concerns.includes('redness');
  const isDry = profile.skinType === 'dry' || profile.concerns.includes('barrier_damage');

  // Check Comedogenicity vs Acne-Prone
  if (isAcneProne) {
    if (highestComedogenic >= 4) {
      score -= 25;
      const badIngs = flaggedComedogenic.map(i => `${i.name} (Comedogenic ${i.comedogenicRating}/5)`).join(", ");
      cons.push({
        type: "danger",
        title: "Pore Clogging Hazard",
        text: `Contains high comedogenic lipids: ${badIngs}, which carry a significant risk of causing closed comedones on acne-prone skin.`
      });
    } else if (highestComedogenic === 3) {
      score -= 10;
      cons.push({
        type: "warning",
        title: "Moderate Comedogenicity",
        text: "Contains moderately comedogenic ingredients (Rating 3/5). Monitor closely if prone to congested pores."
      });
    } else {
      score += 5;
      pros.push({
        type: "benefit",
        title: "Non-Comedogenic Formula",
        text: "Formulated with lightweight non-occlusive emollients, safe for pore clarity."
      });
    }
  }

  // Check Sensitivities & Fragrance
  const hasFragrance = flaggedAllergens.some(i => i.category === 'fragrance' || /fragrance|parfum/i.test(i.name));
  const hasEssentialOils = flaggedAllergens.some(i => /limonene|linalool|citronellol|eucalyptus|lavender/i.test(i.name));
  const hasDryingAlcohols = ingredients.some(i => /alcohol denat|ethanol|isopropyl alcohol/i.test(i.name));

  if (profile.sensitivities.includes('fragrance') || isSensitive) {
    if (hasFragrance) {
      score -= 22;
      cons.push({
        type: "danger",
        title: "Synthetic Fragrance Detected",
        text: "Contains synthetic perfume/fragrance compounds which are high-risk allergens for reactive, sensitive, or rosacea-prone skin."
      });
    }
    if (hasEssentialOils && profile.sensitivities.includes('essential_oils')) {
      score -= 18;
      cons.push({
        type: "danger",
        title: "Essential Oil Allergen Alert",
        text: "Contains volatile botanical terpenes (e.g. Limonene/Linalool) that can provoke stinging or contact redness."
      });
    }
    if (!hasFragrance && !hasEssentialOils) {
      score += 6;
      pros.push({
        type: "benefit",
        title: "100% Fragrance & Essential Oil Free",
        text: "Clean, non-sensitizing profile ideal for sensitive or easily irritated skin."
      });
    }
  }

  // Check Drying Alcohols
  if (hasDryingAlcohols) {
    if (isDry || isSensitive || profile.sensitivities.includes('drying_alcohols')) {
      score -= 18;
      cons.push({
        type: "danger",
        title: "Drying Alcohol Present",
        text: "Contains Alcohol Denat. or volatile short-chain alcohols that can strip lipid barrier layers and trigger dehydration."
      });
    } else {
      score -= 5;
      warnings.push("Contains volatile alcohol for quick-dry feel; ensure proper moisturizing afterwards.");
    }
  }

  // Check Fungal Acne
  if (profile.sensitivities.includes('fungal_acne')) {
    if (flaggedFungalAcneTriggers.length > 0) {
      score -= 20;
      const triggers = flaggedFungalAcneTriggers.map(i => i.name).slice(0, 3).join(", ");
      cons.push({
        type: "danger",
        title: "Malassezia (Fungal Acne) Triggers",
        text: `Contains lipid esters or fatty acids (${triggers}) that can feed Malassezia yeast folliculitis.`
      });
    } else {
      score += 5;
      pros.push({
        type: "benefit",
        title: "100% Fungal Acne Safe",
        text: "Free of feeding fatty acid esters and polysorbates."
      });
    }
  }

  // Barrier Support bonus
  const barrierBoosters = ingredients.filter(i => ['Ceramide NP', 'Panthenol', 'Centella Asiatica Extract', 'Squalane', 'Colloidal Oatmeal', 'Sodium Hyaluronate', 'Ectoin', 'Beta-Glucan'].some(b => i.name.includes(b) || i.inciName.includes(b)));
  if (barrierBoosters.length >= 2) {
    score += 8;
    pros.push({
      type: "benefit",
      title: "Barrier Reinforcing Complex",
      text: `Enriched with ${barrierBoosters.map(b => b.name).slice(0, 3).join(", ")} to fortify the lipid acid mantle.`
    });
  }

  // Clamp score
  score = Math.max(12, Math.min(99, Math.round(score)));

  let grade = "Moderate Match";
  let gradeBadge = "warning";
  let gradeColor = "amber";

  if (score >= 90) {
    grade = "Exceptional Match";
    gradeBadge = "success";
    gradeColor = "emerald";
  } else if (score >= 75) {
    grade = "Good Compatible Match";
    gradeBadge = "info";
    gradeColor = "cyan";
  } else if (score >= 55) {
    grade = "Use With Caution";
    gradeBadge = "warning";
    gradeColor = "amber";
  } else {
    grade = "High Risk / Incompatible";
    gradeBadge = "danger";
    gradeColor = "rose";
  }

  // Dimension Radar Breakdown
  const dimensionScores = {
    poreSafety: Math.max(20, Math.min(100, 100 - (highestComedogenic * 18))),
    barrierSupport: Math.min(100, 40 + (barrierBoosters.length * 20)),
    concernAlignment: Math.min(100, Math.max(30, uniqueBeneficialCount * 28 + 20)),
    lowIrritation: Math.max(15, Math.min(100, 100 - (highestIrritancy * 16) - (hasFragrance ? 25 : 0)))
  };

  return {
    score,
    grade,
    gradeBadge,
    gradeColor,
    pros,
    cons,
    warnings,
    dimensionScores,
    parsedData
  };
}
