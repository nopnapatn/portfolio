"use client"
import { CodeIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <CodeIcon className="size-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/docs"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname === "/docs" || pathname?.startsWith("/docs/")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Docs
        </Link>
        <Link
          href="/components"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
        <Link
          href="/examples"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Examples
        </Link>
      </nav>
    </div>
  )
}
