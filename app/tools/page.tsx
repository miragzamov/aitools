"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Search, SlidersHorizontal } from "lucide-react"

import { AuroraBackground } from "@/components/aurora-background"
import { ToolCard } from "@/components/tool-card"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Input } from "@/components/ui/input"
import { getCategoryColor } from "@/lib/category-colors"
import tools from "@/lib/tools"
import { cn } from "@/lib/utils"

export default function Page() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = useMemo(() => {
    const cats = tools.map((t) => t.category || "Other")
    return ["All", ...Array.from(new Set(cats))]
  }, [])

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const tool of tools) {
      const cat = tool.category || "Other"
      counts.set(cat, (counts.get(cat) ?? 0) + 1)
    }
    counts.set("All", tools.length)
    return counts
  }, [])

  const filteredTools = useMemo(() => {
    const query = search.toLowerCase().trim()

    return tools.filter((tool) => {
      const matchesSearch =
        !query ||
        `${tool.name} ${tool.description} ${tool.category}`
          .toLowerCase()
          .includes(query)

      const matchesCategory =
        activeCategory === "All" ||
        (tool.category || "Other") === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])

  const activeColors = getCategoryColor(activeCategory)

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)]">
      <AuroraBackground />

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400">
            <SlidersHorizontal className="size-4" />
            Directory
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Browse{" "}
            <span className="gradient-text">AI Tools</span>
          </h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Search, filter by category, and launch tools instantly.
          </p>

          <div className="relative mt-6 max-w-lg">
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-violet-500" />
            <Input
              autoFocus
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setSearch("")
              }}
              className="h-11 border-violet-500/20 bg-card/60 pl-10 backdrop-blur-sm focus-visible:border-violet-500/50 focus-visible:ring-violet-500/25"
              aria-label="Search tools"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const colors = getCategoryColor(cat)
              const isActive = activeCategory === cat

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
                    isActive ? colors.pillActive : cn("bg-card/50 backdrop-blur-sm", colors.pill)
                  )}
                >
                  {!isActive && (
                    <span className={cn("size-1.5 rounded-full", colors.dot)} />
                  )}
                  {cat}
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-xs tabular-nums",
                      isActive
                        ? "bg-white/20"
                        : "bg-muted/80 text-muted-foreground"
                    )}
                  >
                    {categoryCounts.get(cat) ?? 0}
                  </span>
                </button>
              )
            })}
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span className={cn("size-2 rounded-full", activeColors.dot)} />
            Showing {filteredTools.length} of {tools.length} tools
          </p>
        </header>

        {filteredTools.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.035 } },
            }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <Empty className="glass-panel border-violet-500/20">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Search className="text-violet-500" />
              </EmptyMedia>
              <EmptyTitle>No tools found</EmptyTitle>
              <EmptyDescription>
                Try a different keyword or pick another category.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button
                variant="outline"
                className="gradient-border"
                onClick={() => {
                  setSearch("")
                  setActiveCategory("All")
                }}
              >
                Clear filters
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </div>
    </div>
  )
}
