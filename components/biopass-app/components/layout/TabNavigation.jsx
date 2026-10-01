import React from 'react';
import { Search, UserCheck, Calendar, Gamepad2, TrendingUp, Home } from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function TabNavigation() {
  const { activeTab, setActiveTab, setActiveGameId } = useBioPass();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'scanner', label: 'Discover', icon: Search },
    { id: 'arcade', label: 'Arcade 🎮', icon: Gamepad2 },
    { id: 'profile', label: 'My Skin', icon: UserCheck },
    { id: 'routine', label: 'Routine', icon: Calendar },
    { id: 'trends', label: 'Trends', icon: TrendingUp },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 glass-card border-t border-white/10 px-1 py-1.5 bg-[#080D10]/95 backdrop-blur-xl">
      <div className="grid grid-cols-6 gap-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (item.id === 'arcade') setActiveGameId(null);
              }}
              className={`flex flex-col items-center justify-center py-1.5 px-0.5 rounded-2xl transition-all ${
                isActive
                  ? 'bg-[#F94CAF]/20 text-[#F94CAF] font-extrabold shadow-magenta-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'text-[#F94CAF]' : ''}`} />
              <span className="text-[9px] font-bold truncate max-w-full">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
