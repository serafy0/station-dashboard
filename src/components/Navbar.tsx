"use client";

import { Home, Zap, Activity, Droplets, LayoutDashboard, Calendar, BarChart2, Wrench, CpuIcon, Power, ZapIcon, Cuboid, ChartLine } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const leftItems = [
    { name: "Transformers", icon: CpuIcon, active: false },
    { name: "Generator", icon: Power, active: false },
    { name: "Pumps Room", icon: ZapIcon, active: false }
  ];
  const rightItems = [
    { name: "Hammer", icon: Cuboid, active: false },
    { name: "Flow Trend", icon: ChartLine, active: false },
    { name: "Schedules", icon: Calendar, active: false },
    { name: "Dashboard", icon: LayoutDashboard, active: false }
  ];

  return (
    <nav className="relative z-50 w-full flex flex-col items-center shadow-2xl shrink-0 h-[70px]">
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] border-b border-[#334155] z-0" />

      <div className="h-full w-full flex items-center justify-between px-6 relative z-10">
        
        <div className="hidden md:flex items-center gap-3 w-[260px] shrink-0">
          <div className="h-[40px] w-[40px] border border-white/10 rounded-md flex items-center justify-center gap-[3px] bg-white/5 shadow-inner">
             <div className="w-[3px] h-[20px] bg-white shadow-[0_0_8px_white]" />
             <div className="w-[1px] h-[20px] bg-white/50" />
             <div className="w-[4px] h-[20px] bg-white shadow-[0_0_8px_white]" />
          </div>
          <div className="flex flex-col leading-none justify-center">
              <span className="text-[24px] font-bold text-white tracking-[0.2em] font-serif drop-shadow-md">EMS</span>
              <span className="text-[9px] text-gray-400 uppercase tracking-widest ml-0.5">Engineering Management Systems</span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center gap-2 xl:gap-6 h-full relative">
            
            <div className="mr-4 xl:mr-8">
                <NavBtn name="Home" icon={Home} isActive={true} />
            </div>

            <div className="flex gap-4 xl:gap-6 hidden xl:flex">
                {leftItems.map(item => <NavBtn key={item.name} name={item.name} icon={item.icon} isActive={item.active} />)}
            </div>

            <div className="flex flex-col items-center justify-center relative h-full pt-[55px] w-[240px] shrink-0">
                <span className="text-[22px] xl:text-[26px] font-bold text-white font-serif tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] z-20 mt-[-4px] whitespace-nowrap">
                    Station 5
                </span>
                
                <div 
                    className="absolute bottom-[-12px] w-[220px] h-[34px] bg-[#1e293b] border-b border-l border-r border-[#334155] z-10 shadow-lg"
                    style={{ 
                        clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)" 
                    }}
                />
                
                <div className="absolute bottom-[-1px] w-[200px] h-[2px] bg-[#1e293b] z-10" />
            </div>

            {/* Right Menu Items */}
            <div className="flex gap-4 xl:gap-6 hidden xl:flex">
                 {rightItems.map(item => <NavBtn key={item.name} name={item.name} icon={item.icon} isActive={item.active} />)}
            </div>
        </div>

        <div className="hidden md:flex justify-end w-[260px] shrink-0">
          <span className="text-[24px] font-bold text-[#22d3ee] tracking-widest font-sans drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
            SIEMENS
          </span>
        </div>
      </div>
    </nav>
  );
}

interface NavBtnProps {
    name: string;
    icon: any;
    isActive?: boolean;
}

function NavBtn({ name, icon: Icon, isActive = false }: NavBtnProps) {
    return (
        <a href="#" className="group flex flex-col items-center gap-1 cursor-pointer relative top-[2px]">
            <div className={cn(
                "h-[36px] w-[44px] rounded-lg flex items-center justify-center transition-all duration-300 relative overflow-hidden",
                isActive 
                    ? "bg-gradient-to-br from-[#22d3ee] to-[#0ea5e9] shadow-[0_0_15px_rgba(34,211,238,0.5)] border-t border-white/40 scale-105" 
                    : "hover:bg-white/5"
            )}>
                {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-50" />
                )}

                <Icon 
                    size={20}
                    className={cn(
                        "transition-all duration-300",
                        isActive 
                            ? "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" 
                            : "text-slate-400 group-hover:text-[#22d3ee] group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
                    )} 
                />
            </div>

            <span className={cn(
                "text-[9px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap",
                isActive 
                    ? "text-white drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" 
                    : "text-slate-400 group-hover:text-white"
            )}>
                {name}
            </span>
        </a>
    )
}