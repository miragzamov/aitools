"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import tools from "@/lib/tools"
import { motion, Variants } from "framer-motion"
import { useEffect, useState } from "react"

// Wrap the Button with motion
const MotionButton = motion(Button)

export default function Page() {
  const [count, setCount] = useState(0)

  // Count-up animation for Tools
  useEffect(() => {
    let start = 0
    const end = tools.length
    if (start === end) return

    const duration = 1500
    let current = start
    const increment = end / (duration / 50)

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        current = end
        clearInterval(timer)
      }
      setCount(Math.floor(current))
    }, 50)
  }, [])

  // Variants for staggered letter animation
  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4 }
    })
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-neutral-950 text-white overflow-hidden">
      <section className="relative max-w-6xl mx-auto px-6 py-32 text-center space-y-10 z-10">
        {/* Staggered content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="space-y-5 max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white/80"
          >
            Curated AI Tools
          </motion.span>

          {/* Heading with letter animation */}
          <motion.h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            {"Explore AI tools with clarity and speed".split("").map((char, i) => (
              <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate="visible">
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-neutral-400 text-lg leading-relaxed"
          >
            Discover the best AI tools, assistants, and builders with a clean interface and effortless exploration.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-4 justify-center pt-4"
          >
            <Link href="/tools">
              <MotionButton
                variant="default"
                size="lg"
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Tools
              </MotionButton>
            </Link>
            <Link href="/submit">
              <MotionButton
                variant="outline"
                size="lg"
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Tool
              </MotionButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center gap-12 pt-12 border-t border-white/20"
        >
          {/* Tools count */}
          <motion.div whileHover={{ scale: 1.05, y: -5 }} className="text-center">
            <p className="text-3xl font-semibold">{count}</p>
            <p className="text-sm text-neutral-500">Tools</p>
          </motion.div>

          {/* Paywalls */}
          <motion.div whileHover={{ scale: 1.05, y: -5 }} className="text-center">
            <p className="text-3xl font-semibold">0</p>
            <p className="text-sm text-neutral-500">Paywalls</p>
          </motion.div>

          {/* Discovery */}
          <motion.div whileHover={{ scale: 1.05, y: -5 }} className="text-center">
            <p className="text-3xl font-semibold">Fast</p>
            <p className="text-sm text-neutral-500">Discovery</p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}