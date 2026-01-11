"use client";

import { Zap } from "lucide-react";
import { Gauge } from "@/components/ui/Gauge";
import { ProgressBar } from "@/components/ui/ProgressBar";

const ConsumptionRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex-1 flex items-center w-full min-h-0 gap-1 overflow-hidden group">
      <div className="h-full w-[22%] min-w-[30px] flex items-center justify-center relative">
         <div className="w-full aspect-square flex items-center justify-center relative max-h-[40px]">
             <div className="absolute bottom-1 w-[80%] h-[20%] bg-blue-500/30 rounded-[100%] blur-[1px]" />
             <Zap className="w-[70%] h-[70%] text-cyan-100 fill-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] z-10" strokeWidth={1.5} />
         </div>
      </div>

      <div className="flex-1 h-[85%] relative flex flex-col justify-center pl-2 pr-2 bg-gradient-to-r from-transparent to-[#1e293b]/40 min-w-0">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-slate-600 to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-slate-600 to-transparent opacity-50" />
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-slate-600" />
        
        <span className="text-[8px] lg:text-[9px] xl:text-[10px] font-bold text-[#22d3ee] uppercase tracking-wider leading-none mb-0.5 truncate group-hover:text-white transition-colors">
          {label}
        </span>
        <span className="text-xs lg:text-sm xl:text-base font-bold text-white font-sans leading-none truncate drop-shadow-md">
          {value}
        </span>
      </div>
    </div>
  );
};

export function EnergyConsumption() {
  return (
    <div className="w-full h-full flex flex-col p-1 bg-[#020408] overflow-hidden select-none">
      
      <div className="flex-1 flex gap-1 min-h-0">
        
        <div className="w-[45%] flex flex-col relative pt-1">
          <Gauge 
            value={11250} 
            max={15000} 
            unit="kW"
            ticks={[0, 3750, 7500, 11250, 15000]}
            colors={{
                start: "#0ea5e9", 
                mid: "#22d3ee",   
                end: "#4ade80",   
                text: "#22d3ee"
            }}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-1 min-h-0 py-1 min-w-0">
           <ConsumptionRow label="Consumption / Day" value="5,716 kWh" />
           <ConsumptionRow label="Consumption / Month" value="230,966 kWh" />
        </div>
      </div>

      <div className="h-[15%] min-h-[18px] max-h-[25px] shrink-0 flex items-center">
         <ProgressBar 
            label="Performance"
            value={85}
            statusText="Optimal"
         />
      </div>
    </div>
  );
}