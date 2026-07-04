"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/tools", label: "Tools" },
  { href: "/submit", label: "Submit" },
] as const

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-2xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-fuchsia-500 text-white shadow-[0_0_16px_-2px] shadow-violet-500/50 transition-transform group-hover:scale-105">
            <Sparkles className="size-3.5" />
          </span>
          <span className="gradient-text text-shimmer">AiTools</span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Button
                key={href}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  "relative",
                  active &&
                    "bg-violet-500/10 text-violet-600 dark:text-violet-300 hover:bg-violet-500/15"
                )}
              >
                <Link href={href}>
                  {active && (
                    <span className="absolute inset-x-2 -bottom-[9px] h-0.5 rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500" />
                  )}
                  {label}
                </Link>
              </Button>
            )
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
