"use client"

import type React from "react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  className?: string
}

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Find all headings h2-h6 with IDs
    const elements = Array.from(
      document.querySelectorAll("h2, h3, h4, h5, h6")
    ).filter((element) => element.id)

    const headingElements = elements.map((element) => ({
      id: element.id,
      text: element.textContent || "",
      level: Number.parseInt(element.tagName.substring(1))
    }))

    setHeadings(headingElements)

    // Set up intersection observer to highlight active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -70% 0px" }
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()

    // Find the element
    const element = document.getElementById(id)
    if (!element) return

    // Scroll to the element with a small offset for the sticky header
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })

    // Update URL hash without jumping
    window.history.pushState(null, "", `#${id}`)
    setActiveId(id)
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <div className={cn("space-y-2", className)}>
      <p className="font-medium">On This Page</p>
      <div className="flex flex-col space-y-2 text-sm">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => handleClick(e, heading.id)}
            className={cn(
              "line-clamp-1 hover:underline",
              activeId === heading.id
                ? "font-medium text-foreground"
                : "text-muted-foreground",
              heading.level === 3 && "pl-4",
              heading.level === 4 && "pl-6",
              heading.level === 5 && "pl-8",
              heading.level === 6 && "pl-10"
            )}
          >
            {heading.text}
          </a>
        ))}
      </div>
    </div>
  )
}
