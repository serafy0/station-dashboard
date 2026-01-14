"use client";

import { INVOICE_DATA } from "@/lib/store/invoice-data";
import { InvoiceBlock } from "@/components/ui/InvoiceBlock"; 

const formatCurrency = (val: number) => 
  val.toLocaleString('en-US', { maximumFractionDigits: 0 });

export function StationInvoice() {
  const rawDailyValue = INVOICE_DATA.data[INVOICE_DATA.data.length - 1];
  
  const rawMonthValue = rawDailyValue * 30.5; 

  const dayValue = formatCurrency(rawDailyValue); 
  const monthValue = formatCurrency(rawMonthValue);

  return (
    <div className="w-full h-full flex flex-col relative">
        
        <div className="flex-1 flex items-stretch justify-center relative">
            
            <InvoiceBlock label="Invoice / Day" value={dayValue} trend="up" />
            
            <div className="w-[1px] my-4 bg-gradient-to-b from-transparent via-[#1e293b] to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-1/2 bg-[#22d3ee]/30 blur-[1px]" />
            </div>
            
            <InvoiceBlock label="Invoice / M" value={monthValue} trend="down" />
        </div>

        
    </div>
  );
}