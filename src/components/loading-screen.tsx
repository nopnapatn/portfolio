import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (
    <motion.div
      className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed inset-0 z-50 flex items-center justify-center backdrop-blur"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-4xl font-bold text-bone">Brownade</div>
        <motion.div
          className="absolute inset-x-0 -bottom-8 h-1 bg-bone"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  )
}
