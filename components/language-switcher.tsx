"use client"

import { Languages } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useLocale } from "@/components/language-provider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const languages = [
  { value: "en", label: "English", nativeLabel: "English" },
  { value: "ar", label: "Arabic", nativeLabel: "العربية" },
  { value: "he", label: "Hebrew", nativeLabel: "עברית" },
] as const

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const selected = languages.find((language) => language.value === locale)

  return (
    <div className="flex items-center gap-2">
      <HugeiconsIcon icon={Languages} strokeWidth={2} className="text-muted-foreground size-4" />
      <label htmlFor="language-select" className="sr-only">Language</label>
      <Select value={locale} onValueChange={(value) => setLocale(value as typeof locale)}>
        <SelectTrigger id="language-select" size="sm" aria-label="Language">
          <SelectValue>{selected?.nativeLabel}</SelectValue>
        </SelectTrigger>
        <SelectContent align="end">
          {languages.map((language) => (
            <SelectItem key={language.value} value={language.value}>
              <span>{language.nativeLabel}</span>
              <span className="text-muted-foreground">{language.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
