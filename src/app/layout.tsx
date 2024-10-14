import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Nopnapat Norasri",
  description: "Nopnapat Norasri's personal website"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className={cn("min-h-screen antialiased")}>
            <SiteHeader />
            {children}
            <SiteFooter />
            <Toaster />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
