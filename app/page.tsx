"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Shield, Layers } from "lucide-react"

import { AuroraBackground } from "@/components/aurora-background"
import { Button } from "@/components/ui/button"
import { useCountUp } from "@/hooks/use-count-up"
import tools from "@/lib/tools"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stats = [
  {
    key: "tools",
    icon: Layers,
    label: "Tools",
    color: "from-violet-500 to-fuchsia-500",
    glow: "shadow-violet-500/20",
  },
  {
    key: "paywalls",
    icon: Shield,
    label: "Paywalls",
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/20",
  },
  {
    key: "speed",
    icon: Zap,
    label: "Discovery",
    color: "from-amber-400 to-orange-500",
    glow: "shadow-amber-500/20",
  },
] as const

export default function Page() {
  const toolCount = useCountUp(tools.length)

  return (
    <main className="relative min-h-[calc(100vh-3.5rem)] overflow-hidden">
      <AuroraBackground />

      <section className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center sm:py-28">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-700 dark:text-violet-300"
        >
          <Sparkles className="size-3.5 text-fuchsia-500" />
          Curated AI Tools
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl sm:leading-[1.08]"
        >
          Explore AI tools with{" "}
          <span className="gradient-text text-shimmer">clarity & speed</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          A vibrant directory of the best AI assistants, builders, and creative
          tools — zero clutter, zero paywalls.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button size="lg" asChild className="btn-glow bg-linear-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 border-0">
            <Link href="/tools">
              Browse Tools
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="gradient-border backdrop-blur-sm"
          >
            <Link href="/submit">Submit Tool</Link>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-16 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map(({ key, icon: Icon, label, color, glow }) => (
            <div
              key={key}
              className={`glass-panel group relative overflow-hidden rounded-2xl p-5 text-left shadow-lg ${glow} transition-transform hover:-translate-y-1`}
            >
              <div
                className={`absolute -top-8 -right-8 size-24 rounded-full bg-linear-to-br ${color} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
              />
              <div
                className={`mb-3 inline-flex size-9 items-center justify-center rounded-xl bg-linear-to-br ${color} text-white shadow-md`}
              >
                <Icon className="size-4" />
              </div>
              <p className="text-3xl font-bold tabular-nums">
                {key === "tools" ? toolCount : key === "paywalls" ? "0" : "Fast"}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}
