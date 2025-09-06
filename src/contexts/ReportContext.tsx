// ReportContext.tsx
"use client"
import React, { useState, useContext, createContext, ReactNode } from "react"

interface Report {
  hazardType: string
  severity: string
  location: string
  description: string
}

interface ReportContextType {
  Report: Report[]
  setReport: React.Dispatch<React.SetStateAction<Report[]>>
}

const ReportContext = createContext<ReportContextType | null>(null)

export function ReportProvider({ children }: { children: ReactNode }) {
  const [Report, setReport] = useState<Report[]>([])

  return (
    <ReportContext.Provider value={{ Report, setReport }}>
      {children}
    </ReportContext.Provider>
  )
}

export function useReport() {
  const context = useContext(ReportContext)
  if (!context) {
    throw new Error("useReport must be used within a ReportProvider")
  }
  return context
}
