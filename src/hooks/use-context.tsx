"use client"

import { createContext, ReactNode, useContext, useState } from "react"

interface SiteContextType {
  root: RefContextType
}

interface RefContextType {
  isInteresting: boolean
  setIsInteresting: (value: boolean) => void
}

const SiteContext = createContext<SiteContextType | undefined>(undefined)
const RefContext = createContext<RefContextType | undefined>(undefined)

export function SiteProvider({ children }: { children: ReactNode }) {
  const [isInteresting, setIsInteresting] = useState(false)
  const root = { isInteresting, setIsInteresting }

  return (
    <SiteContext.Provider value={{ root }}>
      <RefContext.Provider value={{ isInteresting, setIsInteresting }}>
        {children}
      </RefContext.Provider>
    </SiteContext.Provider>
  )
}

export function UseSiteContext() {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error("UseSiteContext must be used within a SiteProvider")
  }
  return context
}

export function UseRefContext() {
  const context = useContext(RefContext)
  if (!context) {
    throw new Error("UseRefContext must be used within a SiteProvider")
  }
  return context
}
