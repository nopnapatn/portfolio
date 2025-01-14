import type { Metadata } from "next"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { ThemeProvider } from "@/components/theme-provider"
import { geistMono, geistSans } from "@/fonts"
import { SiteProvider } from "@/hooks/use-context"

import "@/styles/colors.css"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "nopnapatn",
  description: "Personal blog by nopnapatn"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteProvider>
            <Header />
            {children}
            <Footer />
          </SiteProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
