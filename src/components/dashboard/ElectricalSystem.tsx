"use client";

import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusCard } from "../ui/StatusCard";




export function ElectricalSystem() {
  return (
    <div className="w-full h-full flex flex-col p-2 pt-3 gap-3">
      
      <div className="flex-1 flex gap-3 min-h-0">
        
        <StatusCard 
          title="Transformer" 
          count={0} 
          max={10} 
        />
        
        <StatusCard 
          title="Generator" 
          count={0} 
          max={5} 
        />
        
        <StatusCard 
          title="ELE Panels" 
          count={25} 
          max={33} 
          activeColor="#3b82f6" 
        />
        
      </div>

      <div className="shrink-0">
        <ProgressBar 
          label="Fuel Level" 
          value={85} 
          statusText="47250 L" 
          statusType="text"
          color="#8b5cf6" 
        />
      </div>
    </div>
  );
}