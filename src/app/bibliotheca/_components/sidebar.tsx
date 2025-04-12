"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { paths } from "@/constants/paths"
import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: paths.bibliotheca,
          isActive: pathname === paths.bibliotheca
        },
        {
          title: "Me",
          href: paths.bibliotheca + "/me",
          isActive: pathname === paths.bibliotheca + "/me"
        }
      ]
    },
    {
      title: "Components",
      items: [
        {
          title: "Button",
          href: "/docs/components/button",
          isActive: pathname === "/docs/components/button"
        },
        {
          title: "Card",
          href: "/docs/components/card",
          isActive: pathname === "/docs/components/card"
        },
        {
          title: "Input",
          href: "/docs/components/input",
          isActive: pathname === "/docs/components/input"
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          isActive: pathname === "/docs/components/tabs"
        }
      ]
    },
    {
      title: "Others",
      items: [
        {
          title: "CLI",
          href: "/docs/cli",
          isActive: pathname === "/docs/cli"
        },
        {
          title: "Typography",
          href: "/docs/typography",
          isActive: pathname === "/docs/typography"
        },
        {
          title: "Figma",
          href: "/docs/figma",
          isActive: pathname === "/docs/figma"
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          isActive: pathname === "/docs/changelog"
        }
      ]
    }
  ]

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        {routes.map((route) => (
          <div key={route.title} className="px-3 py-2">
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
              {route.title}
            </h4>
            {route.items ? (
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {route.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                      item.isActive
                        ? "bg-bone font-medium text-heavyMetal"
                        : "text-paleOyster transition-colors"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
