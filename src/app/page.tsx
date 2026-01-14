import { Navbar } from "@/components/Navbar";
import { SideTechPanel } from "@/components/SidePanel";
import { MiddlePanel } from "@/components/MiddlePanel";
import { RotateOverlay } from "@/components/RotateOverlay";
import { Zap, Activity, Droplets, Bell, FileText, BarChart3, Wrench, Battery, CloudSun, Mic } from "lucide-react";
import { EnergyConsumption } from "@/components/dashboard/EnergyConsumption";
import { ElectricalSystem } from "@/components/dashboard/ElectricalSystem";
import { PumpsStatus } from "@/components/dashboard/PumpsStatus";
import { NotificationMonitor } from "@/components/dashboard/NotificationMonitor";
import { StationFlow } from "@/components/dashboard/StationFlow";
import { WaterLevels } from "@/components/dashboard/WaterLevels";
import { FlowLevelTrends } from "@/components/dashboard/FlowLevelTrends";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col bg-[#020408] text-white overflow-hidden selection:bg-cyan-500/30">
      
      <RotateOverlay />

      <div id="dashboard-content" className="flex flex-col h-full w-full">
          <Navbar />

          <div className="flex-1 grid grid-cols-12 gap-5 p-5 min-h-0 pt-8 relative z-10"> 
            
            <div className="col-span-3 flex flex-col gap-3 h-full">
              <SideTechPanel title="Energy Consumption" icon={Zap} className="h-[22%]">
                <EnergyConsumption />
              </SideTechPanel>
            
              <SideTechPanel title="Electrical System" icon={Zap} className="h-[28%]">
                  <ElectricalSystem />
              </SideTechPanel>
              <SideTechPanel title="Pumps Status" icon={Activity} className="h-[22%]">
                 <PumpsStatus />
              </SideTechPanel>       
              <SideTechPanel title="Notification Monitor" icon={Bell} className="h-[20%]">
                 <NotificationMonitor />
              </SideTechPanel>
            </div>

            <div className="col-span-6 flex flex-col gap-5 h-full relative">
              
              <div className="absolute -top-3 left-0 right-0 z-20 flex justify-between px-2 pointer-events-none">
                 <div className="flex items-center gap-4 bg-[#0a1122]/90 border border-[#1e293b] rounded-full px-5 py-1.5 shadow-lg pointer-events-auto backdrop-blur-md">
                    <CloudSun size={16} className="text-red-500"/> 
                    <span className="text-sm text-slate-400 font-sans font-medium">06 Jan 2026</span>
                    <span className="w-[1px] h-3 bg-slate-700" />
                    <span className="text-sm text-[#22d3ee] font-sans font-bold tracking-wider">09:42:59 am</span>
                 </div>
                 
                 <div className="flex items-center gap-3 pointer-events-auto">
                    <div className="bg-[#0a1122]/90 border border-[#1e293b] rounded-full px-5 py-1.5 text-orange-400 font-bold font-sans text-sm shadow-lg flex items-center gap-2 backdrop-blur-md">
                      <span className="text-xs text-slate-500">TEMP</span>
                      23.5°C
                    </div>
                    <button className="bg-[#22d3ee] text-black rounded-full p-2 hover:bg-cyan-400 transition-colors shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                      <Mic size={16} className="fill-black"/>
                    </button>
                 </div>
              </div>

              <div className="flex-[3] bg-[#020408]/40 border border-[#1e293b]/50 rounded-2xl relative overflow-hidden flex items-center justify-center group mt-8 shadow-2xl backdrop-blur-sm">
                 <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
                 <div className="text-[#22d3ee]/60 text-xs tracking-[0.4em] font-sans font-bold border border-[#22d3ee]/20 px-6 py-3 rounded backdrop-blur-sm">
                    [ 3D STATION PREVIEW ]
                 </div>
              </div>

              <div className="h-[25%] grid grid-cols-4 gap-4">
                 <MiddlePanel title="Station Invoice" icon={<FileText size={14} />} className="col-span-1" />
                 <MiddlePanel title="Current Consumption" icon={<Zap size={14} />} className="col-span-2" />
                 <MiddlePanel title="Performance & KPI" icon={<Activity size={14} />} className="col-span-1" />
              </div>
            </div>

            <div className="col-span-3 flex flex-col gap-3 h-full">
              <SideTechPanel title="Station Flow" icon={Activity} className="h-[25%]">
                 <StationFlow />
              </SideTechPanel>
            <SideTechPanel title="Water Levels" icon={Droplets} className="h-[26%]">
                <WaterLevels />
            </SideTechPanel>   

<SideTechPanel title="Flow / Level Trend" icon={BarChart3} className="flex-1">
    <FlowLevelTrends />
</SideTechPanel>              <SideTechPanel title="System Maintenance" icon={Wrench} className="h-[20%]" />
            </div>

          </div>
      </div>
    </main>
  );
}