export interface CategoryColor {
  label: string
  badge: string
  pill: string
  pillActive: string
  bar: string
  glow: string
  dot: string
}

const palette: CategoryColor[] = [
  {
    label: "violet",
    badge: "bg-violet-500/15 text-violet-600 dark:text-violet-300 border-violet-500/30",
    pill: "border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/10",
    pillActive: "bg-violet-600 text-white border-violet-500 shadow-[0_0_20px_-4px] shadow-violet-500/50",
    bar: "from-violet-500 to-fuchsia-500",
    glow: "group-hover:shadow-violet-500/25",
    dot: "bg-violet-500",
  },
  {
    label: "cyan",
    badge: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
    pill: "border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/10",
    pillActive: "bg-cyan-600 text-white border-cyan-500 shadow-[0_0_20px_-4px] shadow-cyan-500/50",
    bar: "from-cyan-400 to-blue-500",
    glow: "group-hover:shadow-cyan-500/25",
    dot: "bg-cyan-400",
  },
  {
    label: "fuchsia",
    badge: "bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-500/30",
    pill: "border-fuchsia-500/30 hover:border-fuchsia-500/60 hover:bg-fuchsia-500/10",
    pillActive: "bg-fuchsia-600 text-white border-fuchsia-500 shadow-[0_0_20px_-4px] shadow-fuchsia-500/50",
    bar: "from-fuchsia-500 to-pink-500",
    glow: "group-hover:shadow-fuchsia-500/25",
    dot: "bg-fuchsia-500",
  },
  {
    label: "amber",
    badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
    pill: "border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/10",
    pillActive: "bg-amber-500 text-white border-amber-400 shadow-[0_0_20px_-4px] shadow-amber-500/50",
    bar: "from-amber-400 to-orange-500",
    glow: "group-hover:shadow-amber-500/25",
    dot: "bg-amber-400",
  },
  {
    label: "emerald",
    badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
    pill: "border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/10",
    pillActive: "bg-emerald-600 text-white border-emerald-500 shadow-[0_0_20px_-4px] shadow-emerald-500/50",
    bar: "from-emerald-400 to-teal-500",
    glow: "group-hover:shadow-emerald-500/25",
    dot: "bg-emerald-400",
  },
  {
    label: "rose",
    badge: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30",
    pill: "border-rose-500/30 hover:border-rose-500/60 hover:bg-rose-500/10",
    pillActive: "bg-rose-600 text-white border-rose-500 shadow-[0_0_20px_-4px] shadow-rose-500/50",
    bar: "from-rose-500 to-red-500",
    glow: "group-hover:shadow-rose-500/25",
    dot: "bg-rose-500",
  },
  {
    label: "sky",
    badge: "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30",
    pill: "border-sky-500/30 hover:border-sky-500/60 hover:bg-sky-500/10",
    pillActive: "bg-sky-600 text-white border-sky-500 shadow-[0_0_20px_-4px] shadow-sky-500/50",
    bar: "from-sky-400 to-indigo-500",
    glow: "group-hover:shadow-sky-500/25",
    dot: "bg-sky-400",
  },
  {
    label: "lime",
    badge: "bg-lime-500/15 text-lime-700 dark:text-lime-300 border-lime-500/30",
    pill: "border-lime-500/30 hover:border-lime-500/60 hover:bg-lime-500/10",
    pillActive: "bg-lime-600 text-white border-lime-500 shadow-[0_0_20px_-4px] shadow-lime-500/50",
    bar: "from-lime-400 to-green-500",
    glow: "group-hover:shadow-lime-500/25",
    dot: "bg-lime-400",
  },
]

const categoryMap: Record<string, number> = {
  "Language Models": 0,
  "AI Assistants": 1,
  "Search & Research": 6,
  "Image Generation": 2,
  "Video Generation": 3,
  "Design & Creative": 2,
  "Coding Assistants": 4,
  "Open Source Models": 7,
  Productivity: 3,
  "Audio & Speech": 5,
  "Music Generation": 0,
  Marketing: 5,
  Other: 6,
  All: 0,
}

export function getCategoryColor(category: string): CategoryColor {
  const index =
    categoryMap[category] ??
    category.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      palette.length
  return palette[index]!
}
