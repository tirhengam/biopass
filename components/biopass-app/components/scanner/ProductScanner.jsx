import React, { useState } from 'react';
import { Search, Filter, Camera, PlusCircle, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS_DATABASE } from '../../data/productsDatabase.js';
import { useBioPass } from '../../context/BioPassContext.jsx';
import ConsumerProductCard from './ConsumerProductCard.jsx';
import IngredientListParser from './IngredientListParser.jsx';
import OCRScannerModal from './OCRScannerModal.jsx';

export default function ProductScanner({ onSelectProduct }) {
  const { 
    selectedProduct, 
    setSelectedProduct, 
    customProducts, 
    addCustomProduct, 
    bookmarks 
  } = useBioPass();

  const [activeTab, setActiveTab] = useState('catalog');
  const [isOcrOpen, setIsOcrOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filterSavedOnly, setFilterSavedOnly] = useState(false);

  const categories = [
    { id: 'all', label: 'All Skincare' },
    { id: 'cleanser', label: 'Cleansers' },
    { id: 'toner', label: 'Toners & Essences' },
    { id: 'serum', label: 'Serums & Actives' },
    { id: 'exfoliant', label: 'Exfoliants' },
    { id: 'moisturizer', label: 'Moisturizers' },
    { id: 'sunscreen', label: 'Sunscreens' },
  ];

  const allProducts = [...customProducts, ...PRODUCTS_DATABASE];

  const filteredProducts = allProducts.filter(p => {
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))) ||
      (p.inciList && p.inciList.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesCategory = 
      selectedCategory === 'all' || 
      p.category === selectedCategory || 
      (selectedCategory === 'toner' && p.category === 'essence');

    const matchesSaved = !filterSavedOnly || bookmarks.includes(p.id);

    return matchesSearch && matchesCategory && matchesSaved;
  });

  const handleCustomParsed = (customProduct) => {
    addCustomProduct(customProduct);
    onSelectProduct(customProduct);
    setActiveTab('catalog');
  };

  return (
    <div className="w-full space-y-6">
      
      {/* Top Banner / Tab Switcher */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 glass-card rounded-3xl border border-white/10 shadow-lg bg-[#0E161C]">
        
        {/* Toggle between Product Catalog vs Raw INCI Paste */}
        <div className="flex items-center gap-1.5 bg-[#080D10] p-1.5 rounded-2xl border border-white/10">
          <button
            onClick={() => setActiveTab('catalog')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'catalog'
                ? 'bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white shadow-magenta-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Curated Library ({allProducts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('custom_inci')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'custom_inci'
                ? 'bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white shadow-magenta-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Paste / Scan Custom INCI</span>
          </button>
        </div>

        {/* OCR Camera Action */}
        <button
          onClick={() => setIsOcrOpen(true)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-[#F94CAF]/15 hover:bg-[#F94CAF]/25 border border-[#F94CAF]/40 text-[#F94CAF] text-xs font-extrabold transition-all shadow-sm cursor-pointer"
        >
          <Camera className="w-4 h-4 text-[#F94CAF]" />
          <span>AI Bottle OCR Scanner</span>
        </button>

      </div>

      {/* Main Content Area based on Tab */}
      {activeTab === 'custom_inci' ? (
        <IngredientListParser onAnalyzeCustom={handleCustomParsed} />
      ) : (
        <div className="space-y-5">
          
          {/* Search Bar & Filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search products by brand, name, or active ingredients (e.g. Niacinamide, BHA, CeraVe, SkinCeuticals)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl glass-input text-xs text-white placeholder-slate-500"
              />
            </div>

            {/* Saved Filter toggle */}
            <button
              onClick={() => setFilterSavedOnly(!filterSavedOnly)}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-extrabold border transition-all cursor-pointer ${
                filterSavedOnly
                  ? 'bg-[#F94CAF]/20 text-[#F94CAF] border-[#F94CAF]/50 shadow-sm'
                  : 'bg-[#080D10] text-slate-400 border-white/10 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F94CAF]" />
              <span>Saved ({bookmarks.length})</span>
            </button>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#F94CAF]/20 text-[#F94CAF] border-[#F94CAF]/50 shadow-sm'
                    : 'bg-[#080D10] text-slate-400 border-white/10 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid (Using ConsumerProductCard with Progressive Disclosure) */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map(product => (
                <ConsumerProductCard
                  key={product.id}
                  product={product}
                  isSelected={selectedProduct?.id === product.id}
                  onSelect={(p) => {
                    setSelectedProduct(p);
                    onSelectProduct(p);
                  }}
                  onOpenScience={(p) => {
                    setSelectedProduct(p);
                    onSelectProduct(p);
                    const analysisElem = document.getElementById('analysis-section');
                    if (analysisElem) {
                      analysisElem.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 rounded-3xl glass-card border border-white/10 p-8 shadow-sm">
              <Search className="w-10 h-10 text-slate-500 mx-auto mb-3" />
              <h4 className="text-base font-extrabold text-white">No Matching Skincare Products Found</h4>
              <p className="text-xs text-slate-400 max-w-md mx-auto mt-1 mb-4">
                Try searching for another active or paste your bottle's raw INCI list directly.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setFilterSavedOnly(false);
                }}
                className="px-5 py-2.5 rounded-2xl bg-white/10 text-xs font-bold text-white hover:bg-white/15 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      )}

      {/* OCR Modal */}
      <OCRScannerModal
        isOpen={isOcrOpen}
        onClose={() => setIsOcrOpen(false)}
        onScanComplete={handleCustomParsed}
      />

    </div>
  );
}
