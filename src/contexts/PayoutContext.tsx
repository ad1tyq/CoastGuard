"use client"
import React, { useState, useContext, createContext, ReactNode } from "react"

// 1. Define the shape of your context
interface PayoutContextType {
  Payout: boolean,
  setPayout: React.Dispatch<React.SetStateAction<boolean>>
}

// 2. Create context with a default (null fallback)
const PayoutContext = createContext<PayoutContextType | null>(null)

// 3. Provider component
export function PayoutProvider({ children }: { children: ReactNode }) {
  const [Payout, setPayout] = useState<boolean>(false)

  return (
    <PayoutContext.Provider value={{ Payout, setPayout }}>
      {children}
    </PayoutContext.Provider>
  )
}

// 4. Hook to use context safely
export function usePayout() {
  const context = useContext(PayoutContext)
  if (!context) {
    throw new Error("usePayout must be used within a PayoutProvider")
  }
  return context
}
