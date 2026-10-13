"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { DirectionProvider } from "@/components/ui/direction"

type Locale = "en" | "ar" | "he"

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error("useLocale must be used within LocaleProvider")
  return context
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")
  const direction = locale === "en" ? "ltr" : "rtl"

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = direction
  }, [direction, locale])

  const value = useMemo(() => ({ locale, setLocale }), [locale])

  return (
    <LocaleContext.Provider value={value}>
      <DirectionProvider direction={direction}>{children}</DirectionProvider>
    </LocaleContext.Provider>
  )
}
