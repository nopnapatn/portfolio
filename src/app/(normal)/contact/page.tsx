"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("overflow-hidden rounded-3xl")}
    >
      <p>Comming Soon..</p>
    </motion.div>
  )
}
