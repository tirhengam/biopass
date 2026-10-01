import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_PROFILE } from '../data/quizQuestions.js';
import { PRODUCTS_DATABASE } from '../data/productsDatabase.js';

const BioPassContext = createContext();

const STORAGE_KEYS = {
  THEME: 'biopass_theme',
  PROFILE: 'biopass_user_profile',
  AM_ROUTINE: 'biopass_am_routine',
  PM_ROUTINE: 'biopass_pm_routine',
  BOOKMARKS: 'biopass_bookmarks',
  HISTORY: 'biopass_scanned_history',
  ONBOARDED: 'biopass_has_onboarded',
  TRACKER: 'biopass_routine_tracker',
  ARCADE_STATS: 'biopass_arcade_stats',
  SKIN_STORY: 'biopass_skin_story'
};

export function BioPassProvider({ children }) {
  // 1. Theme State (Dark mode by default)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    return saved ? saved : 'dark';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // 2. Profile State (Single Unified Profile)
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return DEFAULT_PROFILE;
  });

  const [hasCompletedQuiz, setHasCompletedQuiz] = useState(() => {
    return !!localStorage.getItem(STORAGE_KEYS.PROFILE);
  });

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  // 3. Navigation State (Business Landing is default, can switch to web app)
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab') || params.get('view');
      if (tabParam && ['home', 'scanner', 'arcade', 'profile', 'routine', 'trends', 'glossary', 'business'].includes(tabParam)) {
        return tabParam;
      }
    }
    return 'home'; // 'home' | 'scanner' | 'arcade' | 'profile' | 'routine' | 'trends' | 'glossary' | 'business'
  });
  const [activeGameId, setActiveGameId] = useState(null); // null | 'discover_skin' | 'detective' | 'mix_or_dont' | 'chemist'
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS_DATABASE[0]);
  const [activeIngredientModal, setActiveIngredientModal] = useState(null);

  // 4. Routines State
  const [amRoutine, setAmRoutine] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.AM_ROUTINE);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [
      PRODUCTS_DATABASE.find(p => p.id === 'cerave-hydrating-cleanser'),
      PRODUCTS_DATABASE.find(p => p.id === 'the-ordinary-niacinamide-zinc'),
      PRODUCTS_DATABASE.find(p => p.id === 'beauty-of-joseon-relief-sun')
    ].filter(Boolean);
  });

  const [pmRoutine, setPmRoutine] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PM_ROUTINE);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [
      PRODUCTS_DATABASE.find(p => p.id === 'cerave-hydrating-cleanser'),
      PRODUCTS_DATABASE.find(p => p.id === 'paulas-choice-2-bha-liquid'),
      PRODUCTS_DATABASE.find(p => p.id === 'dr-jart-cicapair-cream')
    ].filter(Boolean);
  });

  // 5. Bookmarks & Scanned History
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return ['cerave-hydrating-cleanser', 'paulas-choice-2-bha-liquid'];
  });

  const [customProducts, setCustomProducts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [];
  });

  // 6. Daily Tracker state
  const [trackerState, setTrackerState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.TRACKER);
    const today = new Date().toISOString().split('T')[0];
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.date === today) return parsed;
      } catch (e) { console.error(e); }
    }
    return {
      date: today,
      amCompleted: false,
      pmCompleted: false,
      streak: 3
    };
  });

  // 7. Arcade Gamer Stats (Glossier x Duolingo feel)
  const [arcadeStats, setArcadeStats] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ARCADE_STATS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return {
      xp: 250,
      level: 4,
      levelTitle: "Beauty Explorer",
      gamesPlayed: 3,
      badges: ["Skin Explorer 🧬", "Ingredient Sleuth 🕵️", "Acid Mantle Protector 🛡️"]
    };
  });

  const addArcadeXp = (amount, badgeToAdd = null) => {
    const newXp = arcadeStats.xp + amount;
    let newLevel = arcadeStats.level;
    let newTitle = arcadeStats.levelTitle;

    if (newXp >= 1000) { newLevel = 6; newTitle = "Master Cosmetic Alchemist 👑"; }
    else if (newXp >= 600) { newLevel = 5; newTitle = "Senior Ingredient Sleuth 🔬"; }
    else if (newXp >= 400) { newLevel = 4; newTitle = "Beauty Chemist Explorer 🧪"; }
    else if (newXp >= 200) { newLevel = 3; newTitle = "Formulation Scout ✨"; }

    const updatedBadges = [...arcadeStats.badges];
    if (badgeToAdd && !updatedBadges.includes(badgeToAdd)) {
      updatedBadges.push(badgeToAdd);
    }

    const updated = {
      ...arcadeStats,
      xp: newXp,
      level: newLevel,
      levelTitle: newTitle,
      gamesPlayed: arcadeStats.gamesPlayed + 1,
      badges: updatedBadges
    };
    setArcadeStats(updated);
    localStorage.setItem(STORAGE_KEYS.ARCADE_STATS, JSON.stringify(updated));
  };

  // 8. Toasts
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.AM_ROUTINE, JSON.stringify(amRoutine));
  }, [amRoutine]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PM_ROUTINE, JSON.stringify(pmRoutine));
  }, [pmRoutine]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(customProducts));
  }, [customProducts]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TRACKER, JSON.stringify(trackerState));
  }, [trackerState]);

  // Actions
  const updateProfile = (newProfile) => {
    setProfile(newProfile);
    setHasCompletedQuiz(true);
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(newProfile));
  };

  const closeOnboarding = () => {
    setIsOnboardingOpen(false);
    localStorage.setItem(STORAGE_KEYS.ONBOARDED, 'true');
  };

  const toggleBookmark = (productId) => {
    if (bookmarks.includes(productId)) {
      setBookmarks(bookmarks.filter(id => id !== productId));
      showToast("Removed from saved list", "info");
    } else {
      setBookmarks([...bookmarks, productId]);
      showToast("Saved to favorites!", "success");
    }
  };

  const addToRoutine = (product, routineType = 'am') => {
    if (routineType === 'am') {
      if (amRoutine.some(p => p.id === product.id)) {
        showToast("Product is already in AM routine", "warning");
        return;
      }
      setAmRoutine([...amRoutine, product]);
      showToast(`Added to AM routine!`, "success");
    } else {
      if (pmRoutine.some(p => p.id === product.id)) {
        showToast("Product is already in PM routine", "warning");
        return;
      }
      setPmRoutine([...pmRoutine, product]);
      showToast(`Added to PM routine!`, "success");
    }
  };

  const removeFromRoutine = (productId, routineType = 'am') => {
    if (routineType === 'am') {
      setAmRoutine(amRoutine.filter(p => p.id !== productId));
      showToast("Removed from AM routine", "info");
    } else {
      setPmRoutine(pmRoutine.filter(p => p.id !== productId));
      showToast("Removed from PM routine", "info");
    }
  };

  const addCustomProduct = (newProduct) => {
    setCustomProducts([newProduct, ...customProducts]);
    setSelectedProduct(newProduct);
    showToast("New product analyzed and saved!", "success");
  };

  const toggleTracker = (timeOfDay) => {
    const key = timeOfDay === 'am' ? 'amCompleted' : 'pmCompleted';
    const isNowCompleted = !trackerState[key];
    const newTracker = {
      ...trackerState,
      [key]: isNowCompleted,
      streak: isNowCompleted ? trackerState.streak + 1 : Math.max(1, trackerState.streak - 1)
    };
    setTrackerState(newTracker);
    if (isNowCompleted) {
      showToast(`${timeOfDay.toUpperCase()} routine completed! +1 Streak Day 🔥`, "success");
    }
  };

  return (
    <BioPassContext.Provider
      value={{
        theme,
        toggleTheme,
        profile,
        updateProfile,
        hasCompletedQuiz,
        isQuizOpen,
        setIsQuizOpen,
        isOnboardingOpen,
        setIsOnboardingOpen,
        closeOnboarding,
        activeTab,
        setActiveTab,
        activeGameId,
        setActiveGameId,
        selectedProduct,
        setSelectedProduct,
        activeIngredientModal,
        setActiveIngredientModal,
        amRoutine,
        setAmRoutine,
        pmRoutine,
        setPmRoutine,
        addToRoutine,
        removeFromRoutine,
        bookmarks,
        toggleBookmark,
        customProducts,
        addCustomProduct,
        trackerState,
        toggleTracker,
        arcadeStats,
        addArcadeXp,
        toast,
        showToast
      }}
    >
      {children}
    </BioPassContext.Provider>
  );
}

export function useBioPass() {
  const context = useContext(BioPassContext);
  if (!context) {
    throw new Error("useBioPass must be used within a BioPassProvider");
  }
  return context;
}
