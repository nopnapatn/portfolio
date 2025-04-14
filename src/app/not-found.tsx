"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function NotFound() {
  const linkStyles =
    "rounded-full border border-bone p-[13px] px-10 text-bone font-medium text-sm transition-colors hover:bg-bone hover:text-heavyMetal"

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="mb-2 text-3xl font-bold">Codex Non Inventa</h2>
        <p className="mb-6 text-paleOyster">
          Thy quest hath led to barren halls—no record lies here. The scroll may
          be gone, or thy calling askew.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className={`${linkStyles} w-full !border-birch bg-birch text-center lg:max-w-sm`}
          >
            Return to the Codex
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
