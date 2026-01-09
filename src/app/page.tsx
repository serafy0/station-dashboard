import { Navbar } from "@/components/Navbar";
import { SideTechPanel } from "@/components/SidePanel";
import { GlassPanel } from "@/components/MiddlePanel";
import { Zap, Activity, Droplets, Bell, FileText, BarChart3, Wrench, Battery, CloudSun, Mic } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col bg-[#020408] text-white overflow-hidden selection:bg-brand-primary/30">
      <Navbar />

      <div className="flex-1 grid grid-cols-12 gap-4 p-4 min-h-0 pt-10"> 
        
        
        <div className="col-span-3 flex flex-col gap-4 h-full">
          <SideTechPanel title="Energy Consumption" icon={Zap} className="h-[22%]" />
          <SideTechPanel title="Electrical System" icon={Battery} className="h-[22%]" />
          <SideTechPanel title="Pumps Status" icon={Activity} className="flex-1" />
          <SideTechPanel title="Notification Monitor" icon={Bell} className="h-[15%]" />
        </div>

        
        <div className="col-span-6 flex flex-col gap-3 h-full relative">
          
          
          <div className="absolute top-0 left-6 right-6 z-20 flex justify-between pointer-events-none">
             <div className="flex items-center gap-3 bg-[#0a1329]/90 border border-[#162345] rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg pointer-events-auto">
                <CloudSun size={14} className="text-red-500"/> 
                <span className="text-xs text-gray-300 font-mono">06 Jan 2026</span>
                <span className="w-[1px] h-3 bg-gray-600" />
                <span className="text-xs text-brand-primary font-mono font-bold">09:42:59 am</span>
             </div>
             <div className="flex items-center gap-3 pointer-events-auto">
                <div className="bg-[#0a1329]/90 border border-[#162345] rounded-full px-4 py-1.5 text-orange-400 font-bold font-mono text-xs">23.5°C</div>
                <button className="bg-brand-primary text-black rounded-full p-1.5 hover:scale-110"><Mic size={14}/></button>
             </div>
          </div>

          <div className="flex-[3] bg-[#060b19]/20 border border-[#162345]/30 rounded-xl relative overflow-hidden flex items-center justify-center group mt-8">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [transform:perspective(800px)_rotateX(60deg)] origin-bottom opacity-40" />
             <div className="text-brand-primary/40 text-xs tracking-[0.3em] font-mono border border-brand-primary/20 px-4 py-2 rounded">
                [ 3D STATION PREVIEW ]
             </div>
          </div>

          <div className="h-[25%] grid grid-cols-4 gap-3">
             <GlassPanel title="Station Invoice" icon={FileText} className="col-span-1" />
             <GlassPanel title="Current Consumption Monitor" icon={Zap} className="col-span-2" />
             <GlassPanel title="Station Performance & KPI" icon={Activity} className="col-span-1" />
          </div>
        </div>

        <div className="col-span-3 flex flex-col gap-4 h-full">
          <SideTechPanel title="Station Flow" icon={Activity} className="h-[20%]" />
          <SideTechPanel title="Water Levels" icon={Droplets} className="h-[25%]" />
          <SideTechPanel title="Flow / Level Trend" icon={BarChart3} className="flex-1" />
          <SideTechPanel title="System Maintenance" icon={Wrench} className="h-[20%]" />
        </div>

      </div>
    </main>
  );
}