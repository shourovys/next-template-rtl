import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic, Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/components/language-provider";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['latin'],
  variable: '--font-arabic'
});

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ['latin'],
  variable: '--font-hebrew',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RTL Language Showcase",
  description: "A multilingual RTL-ready component showcase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} ${notoSansHebrew.variable} antialiased`} suppressHydrationWarning dir="ltr">
      <body

      >
        <LocaleProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
