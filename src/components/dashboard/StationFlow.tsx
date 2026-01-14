"use client";

import { Droplet } from "lucide-react";
import { Gauge } from "@/components/ui/Gauge";
import { motion } from "framer-motion";

const FLOW_ITEMS = [
  { label: "Flow L 900", value: "2136", unit: "m³/h", color: "#60a5fa" }, 
  { label: "Flow L 1000", value: "96", unit: "m³/h", color: "#3b82f6" },  
  { label: "Flow L 1200", value: "3793", unit: "m³/h", color: "#f97316" }, 
  { label: "Flow L Military", value: "286", unit: "m³/h", color: "#4ade80" } 
];

export function StationFlow() {
  return (
    <div className="w-full h-full flex flex-col p-2 gap-2 select-none">
      
      <div className="flex-1 flex gap-2 min-h-0">
        
        <div className="w-[45%] h-full relative pt-1 flex flex-col">
          <Gauge 
            value={6311} 
            max={20000} 
            unit="m³/h"
            ticks={[0, 5000, 10000, 15000, 20000]}
            colors={{
                start: "#3b82f6", 
                mid: "#8b5cf6",   
                end: "#ec4899",   
                text: "#22d3ee"
            }}
          />
        </div>

        <div className="flex-1 flex flex-col justify-between h-full gap-1">
          {FLOW_ITEMS.map((item, index) => (
            <div 
                key={index} 
                className="flex-1 flex items-center justify-between px-2 rounded-[4px] bg-[#0b1221] border border-slate-700/80 shadow-[inset_0_0_8px_rgba(255,255,255,0.03)] relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50 pointer-events-none" />

               <div className="flex items-center gap-2 relative z-10">
                  <div 
                    className="w-1.5 h-1.5 rounded-full shrink-0 shadow-[0_0_4px_currentColor]" 
                    style={{ backgroundColor: item.color, color: item.color }} 
                  />
                  <span className="text-[9px] font-bold text-[#22d3ee] tracking-wide truncate">
                    {item.label}
                  </span>
               </div>
               
               <div className="flex items-baseline gap-1 shrink-0 relative z-10">
                  <span className="text-xs xl:text-sm font-bold text-white font-sans tabular-nums">
                    {item.value}
                  </span>
                  <span className="text-[8px] text-slate-500 font-bold">
                    {item.unit}
                  </span>
               </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[24%] min-h-[35px] bg-[#0b1221] border border-slate-800 rounded-lg flex items-center relative overflow-hidden shadow-inner shrink-0">
         
         <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[40%] h-[20px] bg-[#22d3ee]/10 blur-xl rounded-full" />

         <div className="flex-1 flex flex-col items-center justify-center gap-[1px] z-10">
            <span className="text-[8px] font-bold text-[#22d3ee] uppercase tracking-wider opacity-80">
                Flow per Day
            </span>
            <span className="text-sm xl:text-base font-bold text-white font-sans drop-shadow-md">
                17550 m³
            </span>
         </div>

         <div className="flex items-center h-[60%] px-1">
             
             <div className="relative flex items-center justify-center">
                 <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{
                        duration: 3,          
                        repeat: Infinity,     
                        ease: "linear"        
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                 >
                     <Droplet 
                        className="w-15 h-15 text-[#22d3ee] fill-[#22d3ee]/20 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" 
                        strokeWidth={1.5} 
                     />
                 </motion.div>
             </div>

         </div>

         <div className="flex-1 flex flex-col items-center justify-center gap-[1px] z-10">
            <span className="text-[8px] font-bold text-[#22d3ee] uppercase tracking-wider opacity-80">
                Flow per Month
            </span>
            <span className="text-sm xl:text-base font-bold text-white font-sans drop-shadow-md">
                652532 m³
            </span>
         </div>

      </div>

    </div>
  );
}