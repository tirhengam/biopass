import React, { useState } from 'react';
import { useBioPass } from './context/BioPassContext.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import TabNavigation from './components/layout/TabNavigation.jsx';
import OnboardingModal from './components/onboarding/OnboardingModal.jsx';
import SkinProfileQuiz from './components/profile/SkinProfileQuiz.jsx';
import HomeDiscoveryHub from './components/home/HomeDiscoveryHub.jsx';
import MySkinStory from './components/profile/MySkinStory.jsx';
import GamesArcadeHub from './components/game/GamesArcadeHub.jsx';
import ProductScanner from './components/scanner/ProductScanner.jsx';
import CompatibilityMeter from './components/analysis/CompatibilityMeter.jsx';
import IngredientDeepDive from './components/analysis/IngredientDeepDive.jsx';
import RoutinePlanner from './components/routine/RoutinePlanner.jsx';
import TrendStudiesHub from './components/trends/TrendStudiesHub.jsx';
import IngredientGlossary from './components/analysis/IngredientGlossary.jsx';
import Toast from './components/common/Toast.jsx';
import BusinessLanding from './components/business/BusinessLanding.jsx';
import { Dna, ChevronDown, ChevronUp } from 'lucide-react';

function AppContent() {
  const { 
    activeTab, 
    setActiveTab, 
    activeGameId, 
    setActiveGameId, 
    selectedProduct, 
    setSelectedProduct 
  } = useBioPass();

  const [showDeepProductScience, setShowDeepProductScience] = useState(false);

  // 🏛️ Dedicated Business & Enterprise Landing Page View
  if (activeTab === 'business') {
    return (
      <div className="animate-fade-in">
        <BusinessLanding onLaunchApp={() => setActiveTab('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-obsidian-grid text-[var(--text-primary)] antialiased relative">
      
      {/* Background ambient lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#F94CAF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-[#FF85D0]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* 🏠 TAB 1: HOME DISCOVERY HUB */}
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <HomeDiscoveryHub />
          </div>
        )}

        {/* 🔍 TAB 2: DISCOVER & SCAN */}
        {activeTab === 'scanner' && (
          <div className="space-y-8 animate-fade-in">
            <ProductScanner onSelectProduct={(p) => {
              setSelectedProduct(p);
              setShowDeepProductScience(true);
            }} />

            {/* Progressive Disclosure Section for Selected Product */}
            {selectedProduct && (
              <div id="analysis-section" className="space-y-6 pt-6 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#0E161C] border border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F94CAF] animate-pulse"></span>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-white">
                        Deep Chemical Formulation & Compatibility Layer: {selectedProduct.name}
                      </h3>
                      <span className="text-[11px] text-slate-400">
                        {selectedProduct.brand} • Full INCI breakdown & toxicological analysis
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowDeepProductScience(!showDeepProductScience)}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#F94CAF]/15 hover:bg-[#F94CAF]/25 border border-[#F94CAF]/40 text-[#FF85D0] text-xs font-extrabold transition-all cursor-pointer"
                  >
                    <Dna className="w-4 h-4" />
                    <span>{showDeepProductScience ? "Collapse Science Layer" : "Expand Science Layer 🔬"}</span>
                    {showDeepProductScience ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {showDeepProductScience && (
                  <div className="space-y-6 animate-fade-in">
                    <CompatibilityMeter product={selectedProduct} />
                    <IngredientDeepDive product={selectedProduct} />
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* 🎮 TAB 3: BEAUTY ARCADE */}
        {activeTab === 'arcade' && (
          <div className="space-y-6 animate-fade-in">
            <GamesArcadeHub />
          </div>
        )}

        {/* 🧬 TAB 4: MY SKIN STORY */}
        {activeTab === 'profile' && (
          <div className="space-y-6 animate-fade-in">
            <MySkinStory 
              onRestartDiscovery={() => {
                setActiveTab('arcade');
                setActiveGameId('discover_skin');
              }} 
            />
          </div>
        )}

        {/* 🛡️ TAB 5: MY ROUTINE */}
        {activeTab === 'routine' && (
          <div className="space-y-6 animate-fade-in">
            <RoutinePlanner onSelectProduct={(p) => {
              setSelectedProduct(p);
              setActiveTab('scanner');
            }} />
          </div>
        )}

        {/* 📈 TAB 6: TREND STUDIES */}
        {activeTab === 'trends' && (
          <div className="space-y-6 animate-fade-in">
            <TrendStudiesHub />
          </div>
        )}

        {/* 📚 TAB 7: INCI GLOSSARY */}
        {activeTab === 'glossary' && (
          <div className="space-y-6 animate-fade-in">
            <IngredientGlossary />
          </div>
        )}

      </main>

      {/* Global Modals & Notifications */}
      <SkinProfileQuiz />
      <OnboardingModal />
      <Toast />

      {/* Mobile Bottom Navigation */}
      <TabNavigation />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default function App() {
  return <AppContent />;
}
