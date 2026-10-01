import React from 'react';
import { Flame, CheckCircle2, Circle, Calendar, Trophy, Sparkles } from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function RoutineTracker() {
  const { trackerState, toggleTracker } = useBioPass();

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const todayIdx = (new Date().getDay() + 6) % 7;

  const bothCompleted = trackerState.amCompleted && trackerState.pmCompleted;

  return (
    <div className="w-full rounded-3xl glass-card border border-white/10 p-5 sm:p-7 shadow-2xl bg-gradient-to-br from-[#111A20] via-[#0E161C] to-[#080D10] text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        
        {/* Streak headline */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-[#F94CAF] p-[2px] shadow-sm flex items-center justify-center">
            <div className="w-full h-full bg-[#080D10] rounded-[14px] flex items-center justify-center">
              <Flame className="w-6 h-6 text-amber-400 fill-amber-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-white">
                {trackerState.streak} Day Skincare Streak
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Active Habit
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Consistent barrier maintenance leads to visible dermatological results in 28 days.
            </p>
          </div>
        </div>

        {/* Daily Completion Checkboxes */}
        <div className="flex items-center gap-2">
          {/* AM Button */}
          <button
            onClick={() => toggleTracker('am')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-extrabold border transition-all cursor-pointer ${
              trackerState.amCompleted
                ? 'bg-amber-500/25 text-amber-300 border-amber-500/50 shadow-sm'
                : 'bg-[#080D10] text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            {trackerState.amCompleted ? <CheckCircle2 className="w-4 h-4 text-amber-400" /> : <Circle className="w-4 h-4" />}
            <span>AM Applied</span>
          </button>

          {/* PM Button */}
          <button
            onClick={() => toggleTracker('pm')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-extrabold border transition-all cursor-pointer ${
              trackerState.pmCompleted
                ? 'bg-[#F94CAF]/25 text-[#FF85D0] border-[#F94CAF]/50 shadow-magenta-sm'
                : 'bg-[#080D10] text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            {trackerState.pmCompleted ? <CheckCircle2 className="w-4 h-4 text-[#F94CAF]" /> : <Circle className="w-4 h-4" />}
            <span>PM Applied</span>
          </button>
        </div>

      </div>

      {/* Week Day Pills */}
      <div className="grid grid-cols-7 gap-2 pt-4">
        {daysOfWeek.map((day, idx) => {
          const isToday = idx === todayIdx;
          const isDone = idx < todayIdx || (isToday && bothCompleted);

          return (
            <div
              key={day}
              className={`p-2.5 rounded-2xl border text-center transition-all ${
                isDone
                  ? 'bg-[#F94CAF]/20 border-[#F94CAF]/40 text-[#FF85D0]'
                  : (isToday ? 'bg-[#111A20] border-[#F94CAF] text-white shadow-sm' : 'bg-[#080D10] border-white/10 text-slate-500')
              }`}
            >
              <span className="text-[10px] font-extrabold block">{day}</span>
              <div className="mt-1 flex justify-center">
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F94CAF]" />
                ) : (
                  <Circle className="w-3.5 h-3.5 opacity-40" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
