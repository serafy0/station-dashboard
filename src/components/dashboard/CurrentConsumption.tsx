"use client";

import { ENERGY_CONSUMPTION_DATA } from "@/lib/store/energy-consumption-data";
import { INVOICE_DATA } from "@/lib/store/invoice-data";
import { TrendMonitor } from "../ui/TrendMonitor";

export function CurrentConsumption() {
    return (
        <TrendMonitor 
            defaultTab="consumption"
            tabs={{
                consumption: ENERGY_CONSUMPTION_DATA,
                invoice: INVOICE_DATA
            }}
        />
    );
}