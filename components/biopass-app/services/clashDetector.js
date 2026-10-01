import { parseIngredients } from "./ingredientParser.js";

/**
 * Analyzes a list of products in an AM or PM routine for ingredient clashes & safety conflicts
 */
export function analyzeRoutineClashes(routineProducts, timeOfDay = 'pm') {
  if (!routineProducts || routineProducts.length === 0) {
    return {
      hasClashes: false,
      clashes: [],
      routineScore: 100,
      warnings: [],
      hasSunscreen: timeOfDay === 'am' ? false : true,
      activeLoad: 0
    };
  }

  const clashes = [];
  const warnings = [];
  const foundClashGroups = new Map(); // clashGroup -> Array of { product, ingredient }
  let hasSunscreen = false;
  let activeLoadCount = 0;

  // Inspect each product and its ingredients
  routineProducts.forEach(product => {
    const parsed = Array.isArray(product.inciList) 
      ? parseIngredients(product.inciList)
      : parseIngredients(product.ingredients || []);

    if (product.category === 'sunscreen' || product.step === 'sunscreen') {
      hasSunscreen = true;
    }

    parsed.ingredients.forEach(ing => {
      if (ing.category === 'sunscreen') {
        hasSunscreen = true;
      }
      if (['exfoliant', 'retinoid', 'antioxidant', 'peptide'].includes(ing.category)) {
        activeLoadCount++;
      }

      if (ing.clashGroup) {
        if (!foundClashGroups.has(ing.clashGroup)) {
          foundClashGroups.set(ing.clashGroup, []);
        }
        foundClashGroups.get(ing.clashGroup).push({
          productName: product.name,
          brand: product.brand,
          ingredientName: ing.name,
          clashGroup: ing.clashGroup
        });
      }
    });
  });

  // 1. CLASH: Retinoids + Direct Acids (AHAs/BHAs)
  if (foundClashGroups.has('retinoid') && foundClashGroups.has('direct_acid')) {
    const retinoids = foundClashGroups.get('retinoid');
    const acids = foundClashGroups.get('direct_acid');
    clashes.push({
      id: "clash-retinoid-acid",
      severity: "high",
      title: "Severe Barrier Risk: Retinoid + Direct Acid Conflict",
      description: `Combining ${retinoids[0].ingredientName} (${retinoids[0].productName}) with ${acids[0].ingredientName} (${acids[0].productName}) in the same ${timeOfDay.toUpperCase()} routine creates high risk of chemical peeling, barrier destruction, and irritant contact dermatitis.`,
      recommendation: "Dermatological best practice: Alternate nights (e.g. Acid on Monday/Wednesday, Retinoid on Tuesday/Thursday/Saturday) or move gentle BHA to AM and Retinoid to PM.",
      conflictingProducts: [retinoids[0].productName, acids[0].productName]
    });
  }

  // 2. CLASH: Pure Vitamin C + Benzoyl Peroxide
  if (foundClashGroups.has('pure_vit_c') && foundClashGroups.has('benzoyl_peroxide')) {
    const vitC = foundClashGroups.get('pure_vit_c');
    const bpo = foundClashGroups.get('benzoyl_peroxide');
    clashes.push({
      id: "clash-vitc-bpo",
      severity: "high",
      title: "Oxidative Inactivation: Pure Vitamin C + Benzoyl Peroxide",
      description: `Benzoyl Peroxide (${bpo[0].productName}) is a potent oxidizer that immediately neutralizes L-Ascorbic Acid (${vitC[0].productName}), rendering both active compounds ineffective while escalating skin redness.`,
      recommendation: "Apply Vitamin C in your morning (AM) routine under sunscreen and reserve Benzoyl Peroxide for evening (PM) spot treatment.",
      conflictingProducts: [vitC[0].productName, bpo[0].productName]
    });
  }

  // 3. CLASH: Pure Vitamin C + Copper Peptides
  if (foundClashGroups.has('pure_vit_c') && foundClashGroups.has('copper_peptide')) {
    const vitC = foundClashGroups.get('pure_vit_c');
    const copper = foundClashGroups.get('copper_peptide');
    clashes.push({
      id: "clash-vitc-copper",
      severity: "medium",
      title: "Efficacy Loss: Copper Peptide + L-Ascorbic Acid",
      description: `Copper ions in ${copper[0].productName} chelate with ascorbic acid in ${vitC[0].productName}, causing peptide bond degradation and rapid oxidation of Vitamin C.`,
      recommendation: "Use Vitamin C in the AM and your Copper Peptides in the PM (or alternate days).",
      conflictingProducts: [vitC[0].productName, copper[0].productName]
    });
  }

  // 4. CLASH: Multiple High-Strength Direct Acids
  if (foundClashGroups.has('direct_acid') && foundClashGroups.get('direct_acid').length >= 2) {
    const acidList = foundClashGroups.get('direct_acid');
    const uniqueProducts = Array.from(new Set(acidList.map(a => a.productName)));
    if (uniqueProducts.length >= 2) {
      clashes.push({
        id: "clash-multi-acids",
        severity: "medium",
        title: "Over-Exfoliation Hazard: Multiple Acid Products",
        description: `You have ${uniqueProducts.length} separate exfoliating acid products layered in this routine: ${uniqueProducts.join(" and ")}. Layering multiple leave-on hydroxy acids strips the lipid bilayer and disrupts the skin microbiome.`,
        recommendation: "Select just one exfoliating product per routine, or use a gentle wash-off formula before a milder leave-on treatment.",
        conflictingProducts: uniqueProducts
      });
    }
  }

  // 5. CLASH: Double Retinoid
  if (foundClashGroups.has('retinoid') && foundClashGroups.get('retinoid').length >= 2) {
    const retList = foundClashGroups.get('retinoid');
    const uniqueRetProducts = Array.from(new Set(retList.map(r => r.productName)));
    if (uniqueRetProducts.length >= 2) {
      clashes.push({
        id: "clash-multi-retinoids",
        severity: "high",
        title: "Duplicate Retinoid Overload",
        description: `Multiple retinoid products detected (${uniqueRetProducts.join(", ")}). Layering multiple forms of Vitamin A drastically escalates retinization flaking, retinoid dermatitis, and UV vulnerability without increasing cellular benefits.`,
        recommendation: "Choose one single retinoid product for your evening routine.",
        conflictingProducts: uniqueRetProducts
      });
    }
  }

  // 6. AM Sunscreen Missing Check
  if (timeOfDay === 'am' && !hasSunscreen && routineProducts.length > 0) {
    warnings.push({
      id: "warn-no-spf-am",
      type: "spf_missing",
      title: "Missing Morning Broad-Spectrum SPF",
      description: "A complete AM routine must end with broad-spectrum SPF 30+ to protect your skin from photoaging and prevent hyperpigmentation, especially when using active serums."
    });
  }

  // Calculate Routine Harmony Score
  let routineScore = 100;
  clashes.forEach(c => {
    if (c.severity === 'high') routineScore -= 30;
    if (c.severity === 'medium') routineScore -= 15;
  });
  if (timeOfDay === 'am' && !hasSunscreen && routineProducts.length > 1) {
    routineScore -= 20;
  }
  routineScore = Math.max(15, Math.min(100, routineScore));

  return {
    hasClashes: clashes.length > 0,
    clashes,
    warnings,
    routineScore,
    hasSunscreen,
    activeLoad: activeLoadCount
  };
}
