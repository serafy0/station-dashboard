export interface MaintenanceRecord {
  id: string;
  system: string;
  lastMaint: string;
  status: "Operational" | "Maint. req." | "Critical";
  upcoming: string;
}

export const MAINTENANCE_DATA: MaintenanceRecord[] = [
  { id: "1", system: "Transformers", lastMaint: "2025-01-15", status: "Operational", upcoming: "14 days" },
  { id: "2", system: "ELE Panel", lastMaint: "2025-09-10", status: "Operational", upcoming: "21 days" },
  { id: "3", system: "Pumps", lastMaint: "2025-10-20", status: "Maint. req.", upcoming: "3 days" },
  { id: "4", system: "Valves", lastMaint: "2025-07-05", status: "Operational", upcoming: "28 days" },
  { id: "5", system: "Hammer", lastMaint: "2025-05-12", status: "Operational", upcoming: "18 days" },
  { id: "6", system: "Flow Meters", lastMaint: "2025-11-01", status: "Operational", upcoming: "45 days" },
  { id: "7", system: "Cooling Sys", lastMaint: "2025-08-15", status: "Critical", upcoming: "1 day" },
  { id: "8", system: "Generator A", lastMaint: "2025-06-20", status: "Operational", upcoming: "30 days" },
  { id: "9", system: "Generator B", lastMaint: "2025-06-21", status: "Operational", upcoming: "31 days" },
  { id: "10", system: "Backup UPS", lastMaint: "2025-12-01", status: "Operational", upcoming: "90 days" },
  { id: "11", system: "Hydraulics", lastMaint: "2025-04-10", status: "Maint. req.", upcoming: "5 days" },
  { id: "12", system: "Sensors", lastMaint: "2025-09-30", status: "Operational", upcoming: "12 days" },
  { id: "13", system: "Network", lastMaint: "2025-02-28", status: "Operational", upcoming: "60 days" },
  { id: "14", system: "HVAC", lastMaint: "2025-07-22", status: "Operational", upcoming: "25 days" },
  { id: "15", system: "Lighting", lastMaint: "2025-03-15", status: "Operational", upcoming: "40 days" },
  { id: "16", system: "Security", lastMaint: "2025-01-10", status: "Operational", upcoming: "10 days" },
  { id: "17", system: "Fire Safety", lastMaint: "2025-11-20", status: "Operational", upcoming: "55 days" },
  { id: "18", system: "Water Filter", lastMaint: "2025-08-05", status: "Maint. req.", upcoming: "2 days" },
  { id: "19", system: "Compressor", lastMaint: "2025-05-30", status: "Operational", upcoming: "20 days" },
  { id: "20", system: "Gearbox", lastMaint: "2025-06-15", status: "Critical", upcoming: "0 days" },
];