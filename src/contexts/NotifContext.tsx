"use client"
import React, { useState, useContext, createContext, ReactNode } from "react"

// 1. Define the shape of your context
interface NotifContextType {
  Notif: string,
  setNotif: React.Dispatch<React.SetStateAction<string>>
}

// 2. Create context with a default (null fallback)
const NotifContext = createContext<NotifContextType | null>(null)

// 3. Provider component
export function NotifProvider({ children }: { children: ReactNode }) {
  const [Notif, setNotif] = useState<string>("")

  return (
    <NotifContext.Provider value={{ Notif, setNotif }}>
      {children}
    </NotifContext.Provider>
  )
}

// 4. Hook to use context safely
export function useNotif() {
  const context = useContext(NotifContext)
  if (!context) {
    throw new Error("useNotif must be used within a NotifProvider")
  }
  return context
}
