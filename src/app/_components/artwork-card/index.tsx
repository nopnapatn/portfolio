"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import OptionArtWorkCard from "@/app/_components/artwork-card/option"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface ArtworkCardProps {
  option: number
  color: string
  tag: string
  title: string
  subtitle?: string
  image?: string
  metadata?: string
  href?: string
  className?: string
}

export default function ArtworkCard(props: ArtworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "overflow-hidden rounded-3xl",
        props.color,
        props.className
      )}
    >
      <div className="flex h-full flex-col">
        <div className="p-6">
          <div className="grow space-y-4">{OptionArtWorkCard(props)}</div>
        </div>
        <div className="mt-auto">
          <div className="flex items-center justify-between border-t border-heavyMetal">
            <div className="w-full p-6">
              <Link
                href={props.href || siteConfig.href}
                className="group flex w-full items-center justify-between text-sm font-medium text-heavyMetal"
              >
                GET STARTED
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
