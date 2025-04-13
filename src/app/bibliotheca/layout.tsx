import { Menu } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import type React from "react"

import { Sidebar } from "@/app/bibliotheca/_components/sidebar"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"

export const metadata: Metadata = {
  title: "Bibliotheca",
  description: "Bibliotheca is a personal blog by nopnapatn"
}

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] p-0">
                <SheetTitle>
                  <div className="flex items-center justify-between px-4 py-2">
                    <div></div>
                  </div>
                </SheetTitle>
                <Sidebar />
              </SheetContent>
            </Sheet>
            <Link href="/" className="font-semibold">
              Bibliotheca
            </Link>
          </div>
        </div>
      </header>

      <div className="container flex-1">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
          <aside className="hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:top-14 md:block">
            <Sidebar />
          </aside>
          <main className="py-6 md:py-8">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
