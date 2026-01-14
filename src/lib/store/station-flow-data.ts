import { TrendDataSeries } from "@/interfaces/TrendDataSeries";

const generateData = (base: number, variance: number) => 
    Array.from({ length: 20 }, (_, i) => base + Math.sin(i * 0.5) * variance + (Math.random() * variance * 0.5));

export const STATION_FLOW_DATA: TrendDataSeries = {
    label: "Flow",
    unit: "m³/h",
    data: generateData(6300, 400),
    min: 0,
    max: 25000,
    stepSize: 5000,
    color: "#22d3ee", 
    decimals: 0
};