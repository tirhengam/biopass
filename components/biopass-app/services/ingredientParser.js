import { INGREDIENTS_DATABASE, INGREDIENT_LOOKUP_MAP } from "../data/ingredientsDatabase.js";

/**
 * Normalizes raw string for fuzzy alias matching
 */
export function cleanIngredientName(raw) {
  if (!raw) return "";
  return raw
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, "") // remove parenthetical notes e.g. "(and)", "(10%)"
    .replace(/[*†‡•]/g, "")
    .replace(/^\d+[\.\%]?\s*/, "") // remove leading percentages or numbering
    .trim();
}

/**
 * Tokenizes raw INCI text pasted by user or extracted via OCR
 */
export function tokenizeINCIText(text) {
  if (!text || typeof text !== 'string') return [];
  
  // Split by commas, semicolons, or newlines, accounting for nested parentheses
  const tokens = [];
  let current = "";
  let insideParen = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '(' || char === '[') {
      insideParen++;
      current += char;
    } else if (char === ')' || char === ']') {
      if (insideParen > 0) insideParen--;
      current += char;
    } else if ((char === ',' || char === ';' || char === '\n') && insideParen === 0) {
      const trimmed = current.trim();
      if (trimmed.length > 1) {
        tokens.push(trimmed);
      }
      current = "";
    } else {
      current += char;
    }
  }

  if (current.trim().length > 1) {
    tokens.push(current.trim());
  }

  return tokens;
}

/**
 * Parses an array of ingredient names or raw text against the BioPass INCI Database
 */
export function parseIngredients(input) {
  const tokenList = Array.isArray(input) ? input : tokenizeINCIText(input);
  
  const parsed = [];
  let totalEwg = 0;
  let highestComedogenic = 0;
  let highestIrritancy = 0;
  const flaggedAllergens = [];
  const flaggedComedogenic = [];
  const flaggedFungalAcneTriggers = [];
  const activeIngredients = [];

  tokenList.forEach((rawToken, index) => {
    const cleaned = cleanIngredientName(rawToken);
    
    // Direct or alias lookup in database
    let match = INGREDIENT_LOOKUP_MAP.get(cleaned) || INGREDIENT_LOOKUP_MAP.get(rawToken.toLowerCase().trim());
    
    // Partial substring fallback search
    if (!match) {
      match = INGREDIENTS_DATABASE.find(item => {
        if (cleaned.includes(item.name.toLowerCase()) || item.name.toLowerCase().includes(cleaned)) return true;
        if (cleaned.includes(item.inciName.toLowerCase())) return true;
        return item.aliases.some(alias => cleaned.includes(alias) || alias.includes(cleaned));
      });
    }

    if (match) {
      parsed.push({
        rawName: rawToken,
        matched: true,
        order: index + 1,
        ...match
      });

      totalEwg += match.ewgRating || 1;
      if ((match.comedogenicRating || 0) > highestComedogenic) {
        highestComedogenic = match.comedogenicRating;
      }
      if ((match.irritancyRating || 0) > highestIrritancy) {
        highestIrritancy = match.irritancyRating;
      }

      if (match.category === 'fragrance' || (match.irritancyRating || 0) >= 3) {
        flaggedAllergens.push(match);
      }
      if ((match.comedogenicRating || 0) >= 3) {
        flaggedComedogenic.push(match);
      }
      if (match.fungalAcneSafe === false) {
        flaggedFungalAcneTriggers.push(match);
      }
      if (['exfoliant', 'retinoid', 'antioxidant', 'peptide', 'barrier'].includes(match.category)) {
        activeIngredients.push(match);
      }
    } else {
      // Fallback for uncatalogued ingredients
      const isFragrance = /fragrance|parfum|aroma|flavor/i.test(rawToken);
      const isAlcohol = /alcohol denat|ethanol|isopropyl alcohol/i.test(rawToken);
      const ewg = isFragrance ? 8 : (isAlcohol ? 4 : 1);
      const comedogenic = /oil|butter|ester|stearate|palmitate/i.test(rawToken) ? 2 : 0;
      const irritancy = isFragrance || isAlcohol ? 4 : 0;

      const fallbackObj = {
        id: `custom-${index}-${cleaned.replace(/[^a-z0-9]/g, '-')}`,
        rawName: rawToken,
        name: rawToken,
        inciName: rawToken,
        matched: false,
        order: index + 1,
        category: isFragrance ? 'fragrance' : (isAlcohol ? 'solvent' : 'excipient'),
        ewgRating: ewg,
        comedogenicRating: comedogenic,
        irritancyRating: irritancy,
        fungalAcneSafe: !/oil|stearate|palmitate|oleate/i.test(rawToken),
        functions: [isFragrance ? 'Fragrance' : 'Formulation Base'],
        goodFor: [],
        badFor: isFragrance ? ['sensitive'] : [],
        clashGroup: null,
        description: `Cosmetic formulation ingredient (${rawToken}). Standard functional agent or stabilizer.`,
        clinicalNotes: "General cosmetic excipient."
      };

      parsed.push(fallbackObj);
      totalEwg += ewg;
      if (comedogenic > highestComedogenic) highestComedogenic = comedogenic;
      if (irritancy > highestIrritancy) highestIrritancy = irritancy;
      if (isFragrance) flaggedAllergens.push(fallbackObj);
    }
  });

  const count = parsed.length || 1;
  const avgEwg = Math.round((totalEwg / count) * 10) / 10;

  return {
    ingredients: parsed,
    totalCount: parsed.length,
    matchedCount: parsed.filter(i => i.matched).length,
    avgEwg,
    highestComedogenic,
    highestIrritancy,
    flaggedAllergens,
    flaggedComedogenic,
    flaggedFungalAcneTriggers,
    activeIngredients
  };
}
