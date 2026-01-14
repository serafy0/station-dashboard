import { Navbar } from "@/components/Navbar";
import { SideTechPanel } from "@/components/SidePanel";
import { MiddlePanel } from "@/components/MiddlePanel";
import { RotateOverlay } from "@/components/RotateOverlay";
import { ScaleContainer } from "@/components/ScaleContainer"; // Import the new component
import { Zap, Activity, Droplets, Bell, BarChart3, Wrench, BatteryCharging, Flower } from "lucide-react";
import { EnergyConsumption } from "@/components/dashboard/EnergyConsumption";
import { ElectricalSystem } from "@/components/dashboard/ElectricalSystem";
import { PumpsStatus } from "@/components/dashboard/PumpsStatus";
import { NotificationMonitor } from "@/components/dashboard/NotificationMonitor";
import { StationFlow } from "@/components/dashboard/StationFlow";
import { WaterLevels } from "@/components/dashboard/WaterLevels";
import { FlowLevelTrends } from "@/components/dashboard/FlowLevelTrends";
import { CurrentConsumption } from "@/components/dashboard/CurrentConsumption";
import { StationInvoice } from "@/components/dashboard/StationInvoice";
import { StationPerformance } from "@/components/dashboard/StationPerformance";
import { SystemMaintenance } from "@/components/dashboard/SystemMaintenance";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#020408]">
      
      <RotateOverlay />

      <ScaleContainer>
        <div id="dashboard-content" className="flex flex-col h-full w-full">
            <Navbar />

            <div className="flex-1 grid grid-cols-12 gap-5 p-5 min-h-0 pt-8 relative z-10"> 
              
              <div className="col-span-3 flex flex-col gap-3 h-full min-h-0">
                <SideTechPanel title="Energy Consumption" icon={BatteryCharging} className="h-[22%] shrink-0">
                  <EnergyConsumption />
                </SideTechPanel>
              
                <SideTechPanel title="Electrical System" icon={Zap} className="h-[28%] shrink-0">
                    <ElectricalSystem />
                </SideTechPanel>
                <SideTechPanel title="Pumps Status" icon={Activity} className="h-[22%] shrink-0">
                    <PumpsStatus />
                </SideTechPanel>       
                <SideTechPanel title="Notification Monitor" icon={Bell} className="flex-1 min-h-0">
                    <NotificationMonitor />
                </SideTechPanel>
              </div>

              <div className="col-span-6 flex flex-col gap-4 h-full relative min-h-0">
                

                <div className="flex-1 bg-[#020408]/40 border border-[#1e293b]/50 rounded-2xl relative overflow-hidden flex items-center justify-center group mt-8 shadow-2xl backdrop-blur-sm min-h-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none z-10" />
                    
                    <Image 
                      src="/station-preview.png" 
                      alt="Station Preview" 
                      fill
                      className="object-contain p-4 opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                                  
                </div>

                <div className="h-[26%] grid grid-cols-4 gap-4 shrink-0">
                    <MiddlePanel title="Station Invoice" className="col-span-1">
                        <StationInvoice />
                    </MiddlePanel>

                    <MiddlePanel title="Current Consumption Monitor" className="col-span-2">
                        <CurrentConsumption />
                    </MiddlePanel>

                    <MiddlePanel title="Performance & KPI" className="col-span-1">
                        <StationPerformance />
                    </MiddlePanel>        
                  </div>
            </div>

              <div className="col-span-3 flex flex-col gap-3 h-full min-h-0">
                <SideTechPanel title="Station Flow" icon={Flower} className="h-[25%] shrink-0">
                    <StationFlow />
                </SideTechPanel>
                <SideTechPanel title="Water Levels" icon={Droplets} className="h-[26%] shrink-0">
                  <WaterLevels />
                </SideTechPanel>   
                <SideTechPanel title="Flow / Level Trend" icon={BarChart3} className="flex-1 min-h-0">
                  <FlowLevelTrends />
                </SideTechPanel>       
                <SideTechPanel title="System Maintenance" icon={Wrench} className="h-[20%] shrink-0">
                  <SystemMaintenance />
                </SideTechPanel>            
                </div>

            </div>
        </div>
      </ScaleContainer>
    </main>
  );
}