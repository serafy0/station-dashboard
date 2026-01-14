import { TrendDataSeries } from "@/interfaces/TrendDataSeries";

const generateData = (base: number, variance: number) => 
    Array.from({ length: 20 }, (_, i) => base + Math.sin(i * 0.2) * variance);

export const INVOICE_DATA: TrendDataSeries = {
    label: "Invoice",
    unit: "EGP",
    data: generateData(8500, 500),
    min: 0,
    max: 15000,
    stepSize: 3000,
    color: "#22d3ee", 
    decimals: 0
};