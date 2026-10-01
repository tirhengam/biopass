"use client";

import dynamic from "next/dynamic";

const BioPassAppRoot = dynamic(
  () => import("@/components/biopass-app/BioPassAppRoot"),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center bg-[#080D10] text-white font-mono text-sm">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#F94CAF] to-[#FF85D0] p-[2px] animate-pulse">
            <div className="w-full h-full bg-[#080D10] rounded-[14px] flex items-center justify-center text-[#F94CAF] text-xl">
              🧬
            </div>
          </div>
          <span className="text-slate-400">Loading BioPass App...</span>
        </div>
      </div>
    )
  }
);

export default function AppPage() {
  return (
    <div className="w-full min-h-screen bg-[#080D10] text-white">
      <BioPassAppRoot />
    </div>
  );
}
