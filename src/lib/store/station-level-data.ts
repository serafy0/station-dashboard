import { TrendDataSeries } from "@/interfaces/TrendDataSeries";

const generateData = (base: number, variance: number) => 
    Array.from({ length: 20 }, (_, i) => base + Math.sin(i * 0.8) * variance);

export const SUMP_LEVEL_DATA: TrendDataSeries = {
    label: "Level",
    unit: "m",
    data: generateData(6.3, 0.2),
    min: 0,
    max: 10,
    stepSize: 2,
    color: "#8b5cf6", 
    decimals: 1
};

export const TANK_1_DATA: TrendDataSeries = {
    label: "Tank 1",
    unit: "m",
    data: generateData(4.7, 0.1),
    max: 6,
    color: "#a78bfa",
    decimals: 1
};

export const TANK_2_DATA: TrendDataSeries = {
    label: "Tank 2",
    unit: "m",
    data: generateData(4.7, 0.15), 
    max: 6,
    color: "#3b82f6",
    decimals: 1
};

export const TANK_3_DATA: TrendDataSeries = {
    label: "Tank 3",
    unit: "m",
    data: generateData(4.9, 0.1),
    max: 6,
    color: "#34d399",
    decimals: 1
};