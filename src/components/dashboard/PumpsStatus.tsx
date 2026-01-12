"use client";

import { Clock, Cylinder } from "lucide-react";
import { StatusTile } from "../ui/StatusTile";



export function PumpsStatus() {
  const ACTIVE_PUMPS = 3;
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (0.75 * circumference);

  return (
    <div className="w-full h-full relative p-4 flex items-center justify-between gap-12">
      
      <div className="flex-1 flex flex-col gap-4">
        <StatusTile 
          align="left"
          label="Pump Group A" 
          value={2} 
          subValue="ON" 
          icon={<Cylinder size={20} className="-rotate-90" strokeWidth={2} />}
        />
        <StatusTile 
          align="left"
          label="Runtime G.A / Day" 
          value="4 hr" 
          icon={<Clock size={18} strokeWidth={2} />}
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <StatusTile 
          align="right"
          label="Pump Group B" 
          value={1} 
          subValue="ON" 
          icon={<Cylinder size={20} className="-rotate-90" strokeWidth={2} />}
        />
        <StatusTile 
          align="right"
          label="Runtime G.B / Day" 
          value="2 hr" 
          icon={<Clock size={18} strokeWidth={2} />}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80px] h-[80px] rounded-full bg-[#020408] border border-[#22d3ee]/20 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
          <div className="relative w-[64px] h-[64px]">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
              <circle 
                cx="32" cy="32" r={radius} 
                fill="none" 
                stroke="#1e293b" 
                strokeWidth="4" 
              />
              <circle 
                cx="32" cy="32" r={radius} 
                fill="none" 
                stroke="#22d3ee" 
                strokeWidth="4" 
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                className="drop-shadow-[0_0_2px_rgba(34,211,238,0.8)]"
              />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#22d3ee] font-sans">
                {ACTIVE_PUMPS}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}