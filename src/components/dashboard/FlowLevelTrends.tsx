"use client";

import { STATION_FLOW_DATA } from "@/lib/store/station-flow-data";
import { SUMP_LEVEL_DATA } from "@/lib/store/station-level-data";
import { TrendMonitor } from "@/components/ui/TrendMonitor";

export function FlowLevelTrends() {
    return (
        <TrendMonitor 
            defaultTab="flow"
            tabs={{
                flow: STATION_FLOW_DATA,
                level: SUMP_LEVEL_DATA
            }}
        />
    );
}