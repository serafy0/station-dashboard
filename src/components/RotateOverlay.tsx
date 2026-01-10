"use client";

import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function RotateOverlay() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#020408] flex-col items-center justify-center gap-8 hidden md:hidden portrait:flex landscape:hidden" id="rotate-overlay">
      
      {/* 3D Grid Background (Matches your app theme) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div 
           className="absolute inset-[-50%] w-[200%] h-[200%] origin-center"
           style={{
             backgroundImage: "linear-gradient(rgba(34, 211, 238, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.07) 1px, transparent 1px)",
             backgroundSize: "60px 60px",
             transform: "rotateX(60deg) translateY(-100px) scale(1.5)",
           }}
         />
      </div>

      {/* Rotating Phone Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center p-10">
        <motion.div
            animate={{ rotate: 90 }}
            transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 2, 
                ease: "easeInOut" 
            }}
            className="mb-8 text-[#06b6d4]"
        >
            <Smartphone size={64} strokeWidth={1.5} />
        </motion.div>

        <h2 className="text-2xl font-serif font-bold text-white tracking-widest text-center mb-2">
            STATION 5
        </h2>
        
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent mb-4" />

        <p className="text-slate-400 font-sans text-sm tracking-[0.2em] text-center uppercase">
            Please rotate your device <br/> for optimized dashboard view
        </p>
      </div>
    </div>
  );
}