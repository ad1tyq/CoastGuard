"use client"
import React, { useState, useContext, createContext, ReactNode } from "react";

// 1. Define the shape of your context
interface LegendContextType {
  Legend: string[]; // or whatever type your Legend items are
  setLegend: React.Dispatch<React.SetStateAction<string[]>>;
}

// 2. Create context with a default (null fallback)
const LegendContext = createContext<LegendContextType | null>(null);

// 3. Provider component
export function LegendProvider({ children }: { children: ReactNode }) {
  const [Legend, setLegend] = useState<string[]>(["all"]);

  return (
    <LegendContext.Provider value={{ Legend, setLegend }}>
      {children}
    </LegendContext.Provider>
  );
}

// 4. Hook to use context safely
export function useLegend() {
  const context = useContext(LegendContext);
  if (!context) {
    throw new Error("useLegend must be used within a LegendProvider");
  }
  return context;
}
