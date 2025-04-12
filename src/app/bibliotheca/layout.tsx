import { Github } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import type React from "react"

import { Navbar } from "@/app/bibliotheca/_components/navbar"
import { Sidebar } from "@/app/bibliotheca/_components/sidebar"

import { Button } from "../../components/ui/button"
import { TableOfContents } from "./_components/table-content"

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
        <div className="container flex h-14 items-center">
          <Navbar />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            {/* <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full rounded-md bg-background pl-8 md:w-[200px] lg:w-[300px]"
                />
              </div>
            </div> */}
            <nav className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="size-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              {/* <ModeToggle /> */}
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr] md:gap-10 lg:grid-cols-[240px_1fr_200px]">
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r pr-2 md:sticky md:block">
            <Sidebar />
          </aside>
          <main className="relative py-6 lg:gap-10 lg:py-10">{children}</main>
          <div className="hidden text-sm lg:block">
            <div className="sticky top-16 -mt-10 pt-10">
              <div className="sticky top-16 h-[calc(100vh-3.5rem)] py-12">
                <TableOfContents />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js and shadcn/ui. The source code is available on{" "}
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </footer> */}
    </div>
  )
}
