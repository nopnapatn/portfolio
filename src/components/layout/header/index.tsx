"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

import { navConfig } from "@/config/nav"
import { siteConfig } from "@/config/site"
import { paths } from "@/constants/paths"

const linkStyles =
  "rounded-full border border-bone p-[13px] px-10 text-bone font-medium text-sm transition-colors hover:bg-bone hover:text-heavyMetal"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-[10px]"
    >
      <div className="mx-auto max-w-[1420px]">
        <div className="flex items-center justify-between gap-[2px] rounded-full border border-bone p-[3px]">
          <div className="flex w-full gap-1">
            <Link
              href={siteConfig.href}
              className={`${linkStyles} w-full !border-birch bg-birch text-center lg:max-w-sm`}
            >
              {siteConfig.name}
            </Link>
            <div className="hidden w-full gap-[2px] lg:flex">
              {Object.entries(navConfig.header).map(
                ([key, { title, href }]) => (
                  <Link key={key} href={href || ""} className={linkStyles}>
                    {title}
                  </Link>
                )
              )}
            </div>
          </div>
          <Link
            href={paths.contact}
            className={`${linkStyles} hidden md:block`}
          >
            Contact&nbsp;now
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`${linkStyles} md:hidden ${isOpen ? "bg-bone text-heavyMetal" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <p>Close</p> : <p>Menu</p>}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 overflow-hidden rounded-3xl border border-bone md:hidden"
          >
            {Object.entries(navConfig.header).map(([key, { title, href }]) => (
              <Link
                key={key}
                href={href || ""}
                className="block p-4 font-medium text-bone transition-colors hover:bg-bone hover:text-heavyMetal"
                onClick={() => setIsOpen(false)}
              >
                {title}
              </Link>
            ))}
            <Link
              href={paths.contact}
              className="block p-4 font-medium text-bone transition-colors hover:bg-bone hover:text-heavyMetal"
              onClick={() => setIsOpen(false)}
            >
              Contact now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
