import { TrendDataSeries } from "@/interfaces/TrendDataSeries";

const generateData = (base: number, variance: number) => 
    Array.from({ length: 20 }, (_, i) => base + Math.cos(i * 0.3) * variance);

export const ENERGY_CONSUMPTION_DATA: TrendDataSeries = {
    label: "Consumption",
    unit: "KWh",
    data: generateData(2000, 100), 
    min: 0,
    max: 5000,
    stepSize: 1000,
    color: "#3b82f6", 
    decimals: 0
};