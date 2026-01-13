"use client";

import { ProgressBar } from "@/components/ui/ProgressBar";
import { SegmentedBar } from "../ui/SegmentedBar";



function WaterTank({ percentage }: { percentage: number }) {
  return (
    <div className="h-full w-[70px] bg-[#0b1221] border border-slate-800 rounded-2xl p-1 relative shadow-inner group">
      <div className="relative w-full h-full bg-[#1e293b]/30 rounded-xl overflow-hidden border border-white/5 backdrop-blur-sm">
        
        <div 
            className="absolute inset-0 opacity-20"
            style={{ 
                backgroundImage: "linear-gradient(#22d3ee 1px, transparent 1px)", 
                backgroundSize: "100% 10px" 
            }} 
        />

        <div 
          className="absolute bottom-0 left-0 w-full transition-all duration-1000 ease-in-out"
          style={{ height: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb] via-[#0ea5e9] to-[#22d3ee] opacity-80" />
          
          <div className="absolute top-0 left-0 w-full h-[2px] bg-white/50 shadow-[0_0_10px_white]" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-black/20 rounded-xl pointer-events-none" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span className="text-xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans">
          {percentage}%
        </span>
      </div>
    </div>
  );
}



export function WaterLevels() {

  return (
    <div className="w-full h-full flex flex-col p-3 gap-1">
      
      <div className="flex-1 flex gap-4 min-h-0 items-center">
        
        <div className="shrink-0 h-[90%]">
          <WaterTank percentage={91} />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-8">
          
          <SegmentedBar 
            label="Tank 1" 
            value={75} 
            displayValue="4.7 m" 
            fromColor="#22d3ee"
            toColor="#a78bfa" 
          />
          
          <SegmentedBar 
            label="Tank 2" 
            value={75} 
            displayValue="4.7 m" 
            fromColor="#22d3ee"
            toColor="#3b82f6" 
          />
          
          <SegmentedBar 
            label="Tank 3" 
            value={80} 
            displayValue="4.9 m" 
            fromColor="#22d3ee"
            toColor="#34d399" 
          />
        </div>
      </div>

      <div className="shrink-0 pt-2 border-t border-slate-800/50">
        <div className="-mt-1">
            <ProgressBar 
            label="Sump Level"
            value={85}
            statusText="6.3 m"
            statusType="text"
            color="#22d3ee"
            className="border-none mt-0 pt-1"
            />
        </div>
      </div>
    </div>
  );
}