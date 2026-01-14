"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface MiddlePanelProps {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function MiddlePanel({ title, icon, children, className }: MiddlePanelProps) {
  return (
    <div className={cn(
      "flex flex-col bg-[#060b19]/80 border border-[#1e293b] rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm",
      className
    )}>
      
      <div className="flex flex-col px-4 pt-3 pb-2 bg-gradient-to-r from-transparent via-[#1e293b]/30 to-transparent shrink-0">
         
         <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-slate-100 tracking-[0.2em] uppercase font-sans">
               {title}
            </span>
            {icon && <div className="text-slate-500 opacity-80">{icon}</div>}
         </div>

         <div className="w-full h-[1px] relative flex justify-center items-center">
             
             <div className="absolute w-full h-[1px] bg-[#1e293b]/50" />
             
             <motion.div
                initial={{ width: "4px", opacity: 0.5 }}
                animate={{ 
                    width: ["4px", "100%", "4px"], 
                    opacity: [0.5, 1, 0.5]        
                }}
                transition={{ 
                    duration: 4,      
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="h-[2px] bg-[#22d3ee] shadow-[0_0_8px_rgba(34,211,238,0.8)] rounded-full z-10"
             />
         </div>
      </div>

      <div className="flex-1 p-3 relative min-h-0">
        {children}
      </div>
    </div>
  );
}